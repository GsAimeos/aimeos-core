<?php

/**
 * @license LGPLv3, http://opensource.org/licenses/LGPL-3.0
 * @copyright Metaways Infosystems GmbH, 2011
 * @copyright Aimeos (aimeos.org), 2015-2018
 * @package MShop
 * @subpackage Locale
 */


namespace Aimeos\MShop\Locale\Item;


/**
 * Common locale class containing the site, language and currency information.
 *
 * @package MShop
 * @subpackage Locale
 */
class Standard
	extends \Aimeos\MShop\Common\Item\Base
	implements \Aimeos\MShop\Locale\Item\Iface
{
	private $siteItem;
	private $sitePath;
	private $siteSubTree;


	/**
	 * Initializes the object with the locale values.
	 *
	 * @param array $values Values to be set on initialisation
	 * @param \Aimeos\MShop\Locale\Item\Site\Iface|null $siteItem Site item object
	 * @param string[] $sitePath List of site IDs up to the root site item
	 * @param string[] $siteSubTree List of site IDs from all sites below the current site
	 */
	public function __construct( array $values = [], \Aimeos\MShop\Locale\Item\Site\Iface $siteItem = null,
		array $sitePath = [], array $siteSubTree = [] )
	{
		parent::__construct( 'locale.', $values );

		$this->siteItem = $siteItem;
		$this->sitePath = $sitePath;
		$this->siteSubTree = $siteSubTree;
	}


	/**
	 * Clones internal objects of the locale item.
	 */
	public function __clone()
	{
		$this->siteItem = ( isset( $this->siteItem ) ? clone $this->siteItem : null );
	}


	/**
	 * Returns the site item object.
	 *
	 * @return \Aimeos\MShop\Locale\Item\Site\Iface Site item object
	 * @throws \Aimeos\MShop\Locale\Exception if site object isn't available
	 */
	public function getSiteItem()
	{
		if( $this->siteItem === null ) {
			throw new \Aimeos\MShop\Locale\Exception( 'No site item available' );
		}

		return $this->siteItem;
	}


	/**
	 * Returns the list site IDs up to the root site item.
	 *
	 * @return array List of site IDs
	 */
	public function getSitePath()
	{
		return $this->sitePath;
	}


	/**
	 * Returns the list site IDs of the whole site subtree.
	 *
	 * @return array List of site IDs
	 */
	public function getSiteSubTree()
	{
		return $this->siteSubTree;
	}


	/**
	 * Returns the Site ID of the item.
	 *
	 * @return string|null Site ID (or null for global site)
	 */
	public function getSiteId()
	{
		return $this->get( 'locale.siteid' );
	}


	/**
	 * Sets the identifier of the shop instance.
	 *
	 * @param string $id ID of the shop instance
	 * @return \Aimeos\MShop\Locale\Item\Iface Locale item for chaining method calls
	 */
	public function setSiteId( $id )
	{
		if( $id !== $this->getSiteId() )
		{
			/** @todo: Wrong site item shouldn't be available any more but causes problems in controller */
			$this->sitePath = array( (string) $id );
			$this->siteSubTree = array( (string) $id );
		}

		return $this->set( 'locale.siteid', (string) $id );
	}


	/**
	 * Returns the ISO language code.
	 *
	 * @return string|null ISO language code (e.g. de or de_DE)
	 */
	public function getLanguageId()
	{
		return $this->get( 'locale.languageid' );
	}


	/**
	 * Sets the ISO language code.
	 *
	 * @param string|null $id ISO language code (e.g. de or de_DE)
	 * @return \Aimeos\MShop\Locale\Item\Iface Locale item for chaining method calls
	 * @throws \Aimeos\MShop\Exception If the language ID is invalid
	 */
	public function setLanguageId( $id )
	{
		return $this->set( 'locale.languageid', $this->checkLanguageId( $id ) );
	}


	/**
	 * Returns the currency ID.
	 *
	 * @return string|null Three letter ISO currency code (e.g. EUR)
	 */
	public function getCurrencyId()
	{
		return $this->get( 'locale.currencyid' );
	}


	/**
	 * Sets the currency ID.
	 *
	 * @param string|null $currencyid Three letter ISO currency code (e.g. EUR)
	 * @return \Aimeos\MShop\Locale\Item\Iface Locale item for chaining method calls
	 * @throws \Aimeos\MShop\Exception If the currency ID is invalid
	 */
	public function setCurrencyId( $currencyid )
	{
		return $this->set( 'locale.currencyid', $this->checkCurrencyId( $currencyid ) );
	}


	/**
	 * Returns the position of the item.
	 *
	 * @return integer Position of the item relative to the other items
	 */
	public function getPosition()
	{
		return (int) $this->get( 'locale.position', 0 );
	}


	/**
	 * Sets the position of the item.
	 *
	 * @param integer $pos Position of the item
	 * @return \Aimeos\MShop\Locale\Item\Iface Locale item for chaining method calls
	 */
	public function setPosition( $pos )
	{
		return $this->set( 'locale.position', (int) $pos );
	}


	/**
	 * Returns the status property of the locale item
	 *
	 * @return integer Returns the status of the locale item
	 */
	public function getStatus()
	{
		return (int) $this->get( 'locale.status', 1 );
	}


	/**
	 * Sets the status property
	 *
	 * @param integer $status The status of the locale item
	 * @return \Aimeos\MShop\Locale\Item\Iface Locale item for chaining method calls
	 */
	public function setStatus( $status )
	{
		return $this->set( 'locale.status', (int) $status );
	}


	/**
	 * Returns the item type
	 *
	 * @return string Item type, subtypes are separated by slashes
	 */
	public function getResourceType()
	{
		return 'locale';
	}


	/**
	 * Tests if the item is available based on status, time, language and currency
	 *
	 * @return boolean True if available, false if not
	 */
	public function isAvailable()
	{
		return parent::isAvailable() && $this->getStatus() > 0;
	}


	/*
	 * Sets the item values from the given array and removes that entries from the list
	 *
	 * @param array &$list Associative list of item keys and their values
	 * @param boolean True to set private properties too, false for public only
	 * @return \Aimeos\MShop\Locale\Item\Iface Locale item for chaining method calls
	 */
	public function fromArray( array &$list, $private = false )
	{
		$item = parent::fromArray( $list, $private );

		foreach( $list as $key => $value )
		{
			switch( $key )
			{
				case 'locale.siteid': $item = $item->setSiteId( $value ); break;
				case 'locale.languageid': $item = $item->setLanguageId( $value ); break;
				case 'locale.currencyid': $item = $item->setCurrencyId( $value ); break;
				case 'locale.position': $item = $item->setPosition( $value ); break;
				case 'locale.status': $item = $item->setStatus( $value ); break;
				default: continue 2;
			}

			unset( $list[$key] );
		}

		return $item;
	}


	/**
	 * Returns the item values as array.
	 *
	 * @param boolean True to return private properties, false for public only
	 * @return array Associative list of item properties and their values
	 */
	public function toArray( $private = false )
	{
		$list = parent::toArray( $private );

		$list['locale.siteid'] = $this->getSiteId();
		$list['locale.languageid'] = $this->getLanguageId();
		$list['locale.currencyid'] = $this->getCurrencyId();
		$list['locale.position'] = $this->getPosition();
		$list['locale.status'] = $this->getStatus();

		return $list;
	}

}
