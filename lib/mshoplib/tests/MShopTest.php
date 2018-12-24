<?php

/**
 * @license LGPLv3, http://opensource.org/licenses/LGPL-3.0
 * @copyright Aimeos (aimeos.org), 2015-2018
 */


namespace Aimeos;


class MShopTest extends \PHPUnit\Framework\TestCase
{
	public function testCreate()
	{
		$manager = \Aimeos\MShop::create( \TestHelperMShop::getContext(), 'attribute' );
		$this->assertInstanceOf( \Aimeos\MShop\Common\Manager\Iface::class, $manager );
	}


	public function testCreateSubManager()
	{
		$manager = \Aimeos\MShop::create( \TestHelperMShop::getContext(), 'attribute/lists/type' );
		$this->assertInstanceOf( \Aimeos\MShop\Common\Manager\Iface::class, $manager );
	}


	public function testCreateManagerEmpty()
	{
		$this->setExpectedException( \Aimeos\MShop\Exception::class );
		\Aimeos\MShop::create( \TestHelperMShop::getContext(), "\n" );
	}


	public function testCreateManagerInvalidName()
	{
		$this->setExpectedException( \Aimeos\MShop\Exception::class );
		\Aimeos\MShop::create( \TestHelperMShop::getContext(), '%^' );
	}


	public function testCreateManagerNotExisting()
	{
		$this->setExpectedException( \Aimeos\MShop\Exception::class );
		\Aimeos\MShop::create( \TestHelperMShop::getContext(), 'unknown' );
	}


	public function testCreateSubManagerNotExisting()
	{
		$this->setExpectedException( \Aimeos\MShop\Exception::class );
		\Aimeos\MShop::create( \TestHelperMShop::getContext(), 'attribute/unknown' );
	}


	public function testClear()
	{
		$cache = \Aimeos\MShop::cache( true );

		$context = \TestHelperMShop::getContext();

		$manager1 = \Aimeos\MShop::create( $context, 'attribute' );
		\Aimeos\MShop::clear();
		$manager2 = \Aimeos\MShop::create( $context, 'attribute' );

		\Aimeos\MShop::cache( $cache );

		$this->assertNotSame( $manager1, $manager2 );
	}
}