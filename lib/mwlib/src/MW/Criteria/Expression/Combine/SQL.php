<?php

/**
 * @license LGPLv3, http://opensource.org/licenses/LGPL-3.0
 * @copyright Metaways Infosystems GmbH, 2011
 * @copyright Aimeos (aimeos.org), 2015-2018
 * @package MW
 * @subpackage Common
 */


namespace Aimeos\MW\Criteria\Expression\Combine;


/**
 * SQL implementation for combining objects.
 *
 * @package MW
 * @subpackage Common
 */
class SQL implements \Aimeos\MW\Criteria\Expression\Combine\Iface
{
	private static $operators = array( '&&' => 'AND', '||' => 'OR', '!' => 'NOT' );
	private $operator = '&&';
	private $expressions = [];


	/**
	 * Initializes the object.
	 *
	 * @param string $operator The used combine operator
	 * @param array $list List of expression objects
	 */
	public function __construct( string $operator, array $list )
	{
		if( !isset( self::$operators[$operator] ) ) {
			throw new \Aimeos\MW\Common\Exception( sprintf( 'Invalid operator "%1$s"', $operator ) );
		}

		\Aimeos\MW\Common\Base::checkClassList( \Aimeos\MW\Criteria\Expression\Iface::class, $list );

		$this->operator = $operator;
		$this->expressions = $list;
	}


	/**
	 * Returns the list of expression objects that should be combined.
	 *
	 * @return array List of expression objects
	 */
	public function getExpressions() : array
	{
		return $this->expressions;
	}


	/**
	 * Returns the operator used for the expressions.
	 *
	 * @return string Operator used for the expressions
	 */
	public function getOperator() : string
	{
		return $this->operator;
	}


	/**
	 * Returns the available operators for the expression.
	 *
	 * @return array List of available operators
	 */
	public static function getOperators() : array
	{
		return array_keys( self::$operators );
	}


	/**
	 * Generates a string from the expression objects.
	 *
	 * @param array $types Associative list of variable or column names as keys and their corresponding types
	 * @param array $translations Associative list of variable or column names that should be translated
	 * @param \Aimeos\MW\Criteria\Plugin\Iface[] $plugins Associative list of item names as keys and plugins objects as values
	 * @param array $funcs Associative list of item names and functions modifying the conditions
	 * @return mixed Expression that evaluates to a boolean result
	 */
	public function toSource( array $types, array $translations = [], array $plugins = [], array $funcs = [] )
	{
		if( ( $item = reset( $this->expressions ) ) === false ) {
			return '';
		}

		$string = $item->toSource( $types, $translations, $plugins, $funcs );

		if( $this->operator == '!' && $string !== '' && $string !== null ) {
			return ' ' . self::$operators[$this->operator] . ' ( ' . $string . ' )';
		}

		while( ( $item = next( $this->expressions ) ) !== false )
		{
			$itemstr = $item->toSource( $types, $translations, $plugins, $funcs );

			if( $itemstr !== '' && $itemstr !== null )
			{
				if( $string !== '' && $string !== null ) {
					$string .= ' ' . self::$operators[$this->operator] . ' ' . $itemstr;
				} else {
					$string = $itemstr;
				}
			}
		}

		return $string ? '( ' . $string . ' )' : '';
	}


	/**
	 * Translates the sort key into the name required by the storage
	 *
	 * @param array $translations Associative list of variable or column names that should be translated
	 * @return string|null Translated name (with replaced parameters if the name is an expression function)
	 */
	public function translate( array $translations ) : ?string
	{
		return null;
	}
}
