<?php

namespace Aimeos\MW\DB;


class DBALTest extends \PHPUnit\Framework\TestCase
{
	private $object;
	private $config;


	protected function setUp()
	{
		$schema = new \Doctrine\DBAL\Schema\Schema();

		$table = $schema->createTable( 'mw_unit_test' );
		$table->addColumn( 'id', 'integer', array( 'autoincrement' => true ) );
		$table->addColumn( 'name', 'string', array( 'length' => 20 ) );
		$table->setPrimaryKey( array( 'id' ) );


		$this->config = \TestHelperMw::getConfig();
		$this->object = new \Aimeos\MW\DB\Manager\DBAL( $this->config );

		$conn = $this->object->acquire();

		foreach( $schema->toSQL( $conn->getRawObject()->getDatabasePlatform() ) as $sql ) {
			$conn->create( $sql )->execute()->finish();
		}

		$this->object->release( $conn );
	}


	protected function tearDown()
	{
		$conn = $this->object->acquire();
		$conn->create( 'DROP TABLE "mw_unit_test"' )->execute()->finish();
		$this->object->release( $conn );

		unset( $this->object );
	}


	public function testTransactionCommit()
	{
		$sqlinsert = 'INSERT INTO "mw_unit_test" ("name") VALUES (\'1\')';
		$sqlselect = 'SELECT "name" FROM "mw_unit_test" WHERE "name" = \'1\'';

		$conn = $this->object->acquire();

		$conn->begin();
		$stmt = $conn->create( $sqlinsert );
		$stmt->execute()->finish();
		$stmt->execute()->finish();
		$conn->commit();

		$result = $conn->create( $sqlselect )->execute();

		$rows = [];
		while( ( $row = $result->fetch() ) !== false ) {
			$rows[] = $row;
		}

		$result->finish();

		$this->object->release( $conn );

		$this->assertEquals( 2, count( $rows ) );
	}


	public function testTransactionCommitMultiple()
	{
		$sqlinsert = 'INSERT INTO "mw_unit_test" ("name") VALUES (\'1\')';
		$sqlselect = 'SELECT "name" FROM "mw_unit_test" WHERE "name" = \'1\'';

		$conn = $this->object->acquire();

		$stmt = $conn->create( $sqlinsert );

		$conn->begin();
		$stmt->execute()->finish();
		$conn->commit();

		$conn->begin();
		$stmt->execute()->finish();
		$conn->commit();

		$result = $conn->create( $sqlselect )->execute();

		$rows = [];
		while( ( $row = $result->fetch() ) !== false ) {
			$rows[] = $row;
		}

		$result->finish();

		$this->object->release( $conn );

		$this->assertEquals( 2, count( $rows ) );
	}


	public function testTransactionRollback()
	{
		$sqlinsert = 'INSERT INTO "mw_unit_test" ("name") VALUES (\'1\')';
		$sqlselect = 'SELECT "name" FROM "mw_unit_test" WHERE "name" = \'1\'';

		$conn = $this->object->acquire();

		$conn->begin();
		$stmt = $conn->create( $sqlinsert );
		$stmt->execute()->finish();
		$stmt->execute()->finish();
		$conn->rollback();

		$result = $conn->create( $sqlselect )->execute();

		$rows = [];
		while( ( $row = $result->fetch() ) !== false ) {
			$rows[] = $row;
		}

		$result->finish();

		$this->object->release( $conn );

		$this->assertEquals( 0, count( $rows ) );
	}


	public function testTransactionStackCommit()
	{
		$sqlinsert = 'INSERT INTO "mw_unit_test" ("name") VALUES (\'1\')';
		$sqlselect = 'SELECT "name" FROM "mw_unit_test" WHERE "name" = \'1\'';

		$conn = $this->object->acquire();

		$conn->begin();
		$conn->begin();

		$stmt = $conn->create( $sqlinsert );
		$stmt->execute()->finish();

		$conn->commit();
		$conn->commit();

		$result = $conn->create( $sqlselect )->execute();

		$rows = [];
		while( ( $row = $result->fetch() ) !== false ) {
			$rows[] = $row;
		}

		$result->finish();

		$this->object->release( $conn );

		$this->assertEquals( 1, count( $rows ) );
	}


	public function testTransactionStackRollback()
	{
		$sqlinsert = 'INSERT INTO "mw_unit_test" ("name") VALUES (\'1\')';
		$sqlselect = 'SELECT "name" FROM "mw_unit_test" WHERE "name" = \'1\'';

		$conn = $this->object->acquire();

		$conn->begin();
		$conn->begin();

		$stmt = $conn->create( $sqlinsert );
		$stmt->execute()->finish();

		$conn->rollback();
		$conn->rollback();

		$result = $conn->create( $sqlselect )->execute();

		$rows = [];
		while( ( $row = $result->fetch() ) !== false ) {
			$rows[] = $row;
		}

		$result->finish();

		$this->object->release( $conn );

		$this->assertEquals( 0, count( $rows ) );
	}


	public function testAffectedRows()
	{
		$sqlinsert = 'INSERT INTO "mw_unit_test" ("name") VALUES (\'1\')';

		$conn = $this->object->acquire();

		$result = $conn->create( $sqlinsert )->execute();
		$rows = $result->affectedRows();
		$result->finish();

		$this->object->release( $conn );

		$this->assertEquals( 1, $rows );
	}


	public function testStmtEscape()
	{
		$sqlinsert = 'INSERT INTO "mw_unit_test" ("name") VALUES (:value)';

		$conn = $this->object->acquire();

		$value = "(\\')";
		$sqlinsert = str_replace( ':value', '\'' . $conn->escape( $value ) . '\'', $sqlinsert );
		$stmt = $conn->create( $sqlinsert );
		$stmt->execute()->finish();

		$this->object->release( $conn );

		$this->assertRegexp( '/^INSERT INTO "mw_unit_test" \("name"\) VALUES \(\'\(.*\\\'\)\'\)$/', strval( $stmt ) );
	}


	public function testStmtSimpleBindApostrophes()
	{
		$conn = $this->object->acquire();

		$sqlinsert = 'INSERT INTO "mw_unit_test" ("id", "name") VALUES (1, \'' . $conn->escape( '\'\'' ) . '\')';

		$stmt = $conn->create( $sqlinsert );
		$stmt->execute()->finish();

		$this->object->release( $conn );
	}


	public function testStmtSimpleBind()
	{
		$sqlinsert = 'INSERT INTO "mw_unit_test" ("name") VALUES (?)';

		$conn = $this->object->acquire();

		$stmt = $conn->create( $sqlinsert );
		$stmt->bind( 1, 'test' );
		$stmt->execute()->finish();

		$this->object->release( $conn );
	}


	public function testStmtSimpleInvalidBindParamType()
	{
		$sqlinsert2 = 'INSERT INTO "mw_unit_test" ("id", "name") VALUES (?, ?)';

		$conn = $this->object->acquire();

		try
		{
			$stmt2 = $conn->create( $sqlinsert2 );
			$stmt2->bind( 1, 1, \Aimeos\MW\DB\Statement\Base::PARAM_INT );
			$stmt2->bind( 2, 0.15, 123 );
			$stmt2->execute();
		}
		catch( \Aimeos\MW\DB\Exception $de )
		{
			$this->object->release( $conn );
			return;
		}

		$this->object->release( $conn );
		$this->fail( 'An expected exception has not been raised' );
	}


	public function testStmtSimpleBindInvalid()
	{
		$sqlinsert = 'INSERT INTO "mw_unit_test" ("name") VALUES (?)';

		$conn = $this->object->acquire();

		try {
			$stmt = $conn->create( $sqlinsert );
			$stmt->execute();
		} catch( \Aimeos\MW\DB\Exception $de ) {
			$this->object->release( $conn );
			return;
		}

		$this->object->release( $conn );
		$this->fail( 'An expected exception has not been raised' );
	}


	public function testStmtPreparedBind()
	{
		$sqlinsert = 'INSERT INTO "mw_unit_test" ("name") VALUES (?)';

		$conn = $this->object->acquire();

		$stmt = $conn->create( $sqlinsert );
		$stmt->bind( 1, 'test' );
		$result = $stmt->execute();
		$rows = $result->affectedRows();
		$result->finish();

		$this->object->release( $conn );

		$this->assertEquals( 1, $rows );
	}


	public function testResultFetch()
	{
		$sqlinsert = 'INSERT INTO "mw_unit_test" ("id", "name") VALUES (?, ?)';
		$sqlselect = 'SELECT * FROM "mw_unit_test"';

		$conn = $this->object->acquire();

		$stmt = $conn->create( $sqlinsert );
		$stmt->bind( 1, 1 );
		$stmt->bind( 2, 'test' );
		$stmt->execute()->finish();

		$stmt = $conn->create( $sqlselect );
		$result = $stmt->execute();
		$row = $result->fetch();
		$result->finish();

		$this->object->release( $conn );

		$this->assertEquals( array( 'id' => 1, 'name' => 'test' ), $row );
	}


	public function testWrongFieldType()
	{
		$this->setExpectedException( \Aimeos\MW\DB\Exception::class );
		$sqlinsert = 'INSERT INTO "mw_unit_test" ("id", "name") VALUES (?, ?)';

		$conn = $this->object->acquire();

		try
		{
			$stmt = $conn->create( $sqlinsert );
			$stmt->bind( 1, 1 );
			$stmt->bind( 2, 'test', 123 );
			$stmt->execute();
		}
		catch( \Aimeos\MW\DB\Exception $e )
		{
			$this->object->release( $conn );
			throw $e;
		}
	}


	public function testGetRawObject()
	{
		$conn = $this->object->acquire();
		$raw = $conn->getRawObject();
		$this->object->release( $conn );

		$this->assertInstanceOf( \Doctrine\DBAL\Connection::class, $raw );
	}


	public function testNonExisting()
	{
		$sql = 'SELECT * FROM "mw_non_existing"';

		$conn = $this->object->acquire();

		$this->setExpectedException( \Aimeos\MW\DB\Exception::class );

		try
		{
			$conn->create( $sql )->execute()->finish();
		}
		catch( \Aimeos\MW\DB\Exception $e )
		{
			$this->object->release( $conn );
			throw $e;
		}
	}


	public function testSqlError()
	{
		$conn = $this->object->acquire();

		$this->setExpectedException( \Aimeos\MW\DB\Exception::class );

		try
		{
			$conn->create( 'SELECT *' )->execute()->finish();
		}
		catch( \Aimeos\MW\DB\Exception $e )
		{
			$this->object->release( $conn );
			throw $e;
		}
	}


	public function testDBALException()
	{
		$mock = $this->getMockBuilder( \Aimeos\MW\DB\Connection\Iface::class )->getMock();

		$this->setExpectedException( \Aimeos\MW\DB\Exception::class );
		$this->object->release( $mock );
	}


	public function testDBFactory()
	{
		$this->assertInstanceOf( \Aimeos\MW\DB\Manager\Iface::class, $this->object );
	}


	public function testFactoryFail()
	{
		$this->setExpectedException( \Aimeos\MW\DB\Exception::class );
		\Aimeos\MW\DB\Factory::create( \TestHelperMw::getConfig(), 'notDefined' );
	}
}
