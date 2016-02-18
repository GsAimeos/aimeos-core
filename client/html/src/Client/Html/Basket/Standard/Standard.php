<?php

/**
 * @copyright Metaways Infosystems GmbH, 2012
 * @license LGPLv3, http://opensource.org/licenses/LGPL-3.0
 * @copyright Aimeos (aimeos.org), 2015
 * @package Client
 * @subpackage Html
 */


namespace Aimeos\Client\Html\Basket\Standard;


/**
 * Default implementation of standard basket HTML client.
 *
 * @package Client
 * @subpackage Html
 */
class Standard
	extends \Aimeos\Client\Html\Basket\Base
	implements \Aimeos\Client\Html\Common\Client\Factory\Iface
{
	/** client/html/basket/standard/standard/subparts
	 * List of HTML sub-clients rendered within the basket standard section
	 *
	 * The output of the frontend is composed of the code generated by the HTML
	 * clients. Each HTML client can consist of serveral (or none) sub-clients
	 * that are responsible for rendering certain sub-parts of the output. The
	 * sub-clients can contain HTML clients themselves and therefore a
	 * hierarchical tree of HTML clients is composed. Each HTML client creates
	 * the output that is placed inside the container of its parent.
	 *
	 * At first, always the HTML code generated by the parent is printed, then
	 * the HTML code of its sub-clients. The order of the HTML sub-clients
	 * determines the order of the output of these sub-clients inside the parent
	 * container. If the configured list of clients is
	 *
	 *  array( "subclient1", "subclient2" )
	 *
	 * you can easily change the order of the output by reordering the subparts:
	 *
	 *  client/html/<clients>/subparts = array( "subclient1", "subclient2" )
	 *
	 * You can also remove one or more parts if they shouldn't be rendered:
	 *
	 *  client/html/<clients>/subparts = array( "subclient1" )
	 *
	 * As the clients only generates structural HTML, the layout defined via CSS
	 * should support adding, removing or reordering content by a fluid like
	 * design.
	 *
	 * @param array List of sub-client names
	 * @since 2014.03
	 * @category Developer
	 */
	private $subPartPath = 'client/html/basket/standard/standard/subparts';

	/** client/html/basket/standard/detail/name
	 * Name of the detail part used by the basket standard detail client implementation
	 *
	 * Use "Myname" if your class is named "\Aimeos\Client\Html\Basket\Standard\Detail\Myname".
	 * The name is case-sensitive and you should avoid camel case names like "MyName".
	 *
	 * @param string Last part of the client class name
	 * @since 2014.03
	 * @category Developer
	 */

	/** client/html/basket/standard/coupon/name
	 * Name of the detail part used by the basket standard coupon client implementation
	 *
	 * Use "Myname" if your class is named "\Aimeos\Client\Html\Basket\Standard\Detail\Myname".
	 * The name is case-sensitive and you should avoid camel case names like "MyName".
	 *
	 * @param string Last part of the client class name
	 * @since 2014.03
	 * @category Developer
	 */
	private $subPartNames = array( 'detail', 'coupon' );
	private $cache;


	/**
	 * Returns the HTML code for insertion into the body.
	 *
	 * @param string $uid Unique identifier for the output if the content is placed more than once on the same page
	 * @param array &$tags Result array for the list of tags that are associated to the output
	 * @param string|null &$expire Result variable for the expiration date of the output (null for no expiry)
	 * @return string HTML code
	 */
	public function getBody( $uid = '', array &$tags = array(), &$expire = null )
	{
		$context = $this->getContext();
		$view = $this->getView();

		try
		{
			$view = $this->setViewParams( $view, $tags, $expire );

			$html = '';
			foreach( $this->getSubClients() as $subclient ) {
				$html .= $subclient->setView( $view )->getBody( $uid, $tags, $expire );
			}
			$view->standardBody = $html;
		}
		catch( \Aimeos\Client\Html\Exception $e )
		{
			$error = array( $this->getContext()->getI18n()->dt( 'client', $e->getMessage() ) );
			$view->standardErrorList = $view->get( 'standardErrorList', array() ) + $error;
		}
		catch( \Aimeos\Controller\Frontend\Exception $e )
		{
			$error = array( $this->getContext()->getI18n()->dt( 'controller/frontend', $e->getMessage() ) );
			$view->standardErrorList = $view->get( 'standardErrorList', array() ) + $error;
		}
		catch( \Aimeos\MShop\Exception $e )
		{
			$error = array( $this->getContext()->getI18n()->dt( 'mshop', $e->getMessage() ) );
			$view->standardErrorList = $view->get( 'standardErrorList', array() ) + $error;
		}
		catch( \Exception $e )
		{
			$context->getLogger()->log( $e->getMessage() . PHP_EOL . $e->getTraceAsString() );

			$error = array( $context->getI18n()->dt( 'client', 'A non-recoverable error occured' ) );
			$view->standardErrorList = $view->get( 'standardErrorList', array() ) + $error;
		}

		/** client/html/basket/standard/standard/template-body
		 * Relative path to the HTML body template of the basket standard client.
		 *
		 * The template file contains the HTML code and processing instructions
		 * to generate the result shown in the body of the frontend. The
		 * configuration string is the path to the template file relative
		 * to the templates directory (usually in client/html/templates).
		 *
		 * You can overwrite the template file configuration in extensions and
		 * provide alternative templates. These alternative templates should be
		 * named like the default one but with the string "standard" replaced by
		 * an unique name. You may use the name of your project for this. If
		 * you've implemented an alternative client class as well, "standard"
		 * should be replaced by the name of the new class.
		 *
		 * @param string Relative path to the template creating code for the HTML page body
		 * @since 2014.03
		 * @category Developer
		 * @see client/html/basket/standard/standard/template-header
		 */
		$tplconf = 'client/html/basket/standard/standard/template-body';
		$default = 'basket/standard/body-default.php';

		return $view->render( $view->config( $tplconf, $default ) );
	}


	/**
	 * Returns the HTML string for insertion into the header.
	 *
	 * @param string $uid Unique identifier for the output if the content is placed more than once on the same page
	 * @param array &$tags Result array for the list of tags that are associated to the output
	 * @param string|null &$expire Result variable for the expiration date of the output (null for no expiry)
	 * @return string|null String including HTML tags for the header on error
	 */
	public function getHeader( $uid = '', array &$tags = array(), &$expire = null )
	{
		try
		{
			$view = $this->setViewParams( $this->getView(), $tags, $expire );

			$html = '';
			foreach( $this->getSubClients() as $subclient ) {
				$html .= $subclient->setView( $view )->getHeader( $uid, $tags, $expire );
			}
			$view->standardHeader = $html;
		}
		catch( \Exception $e )
		{
			$this->getContext()->getLogger()->log( $e->getMessage() . PHP_EOL . $e->getTraceAsString() );
			return '';
		}

		/** client/html/basket/standard/standard/template-header
		 * Relative path to the HTML header template of the basket standard client.
		 *
		 * The template file contains the HTML code and processing instructions
		 * to generate the HTML code that is inserted into the HTML page header
		 * of the rendered page in the frontend. The configuration string is the
		 * path to the template file relative to the templates directory (usually
		 * in client/html/templates).
		 *
		 * You can overwrite the template file configuration in extensions and
		 * provide alternative templates. These alternative templates should be
		 * named like the default one but with the string "standard" replaced by
		 * an unique name. You may use the name of your project for this. If
		 * you've implemented an alternative client class as well, "standard"
		 * should be replaced by the name of the new class.
		 *
		 * @param string Relative path to the template creating code for the HTML page head
		 * @since 2014.03
		 * @category Developer
		 * @see client/html/basket/standard/standard/template-body
		 */
		$tplconf = 'client/html/basket/standard/standard/template-header';
		$default = 'basket/standard/header-default.php';

		return $view->render( $view->config( $tplconf, $default ) );
	}


	/**
	 * Returns the sub-client given by its name.
	 *
	 * @param string $type Name of the client type
	 * @param string|null $name Name of the sub-client (Default if null)
	 * @return \Aimeos\Client\Html\Iface Sub-client object
	 */
	public function getSubClient( $type, $name = null )
	{
		/** client/html/basket/standard/decorators/excludes
		 * Excludes decorators added by the "common" option from the basket standard html client
		 *
		 * Decorators extend the functionality of a class by adding new aspects
		 * (e.g. log what is currently done), executing the methods of the underlying
		 * class only in certain conditions (e.g. only for logged in users) or
		 * modify what is returned to the caller.
		 *
		 * This option allows you to remove a decorator added via
		 * "client/html/common/decorators/default" before they are wrapped
		 * around the html client.
		 *
		 *  client/html/basket/standard/decorators/excludes = array( 'decorator1' )
		 *
		 * This would remove the decorator named "decorator1" from the list of
		 * common decorators ("\Aimeos\Client\Html\Common\Decorator\*") added via
		 * "client/html/common/decorators/default" to the html client.
		 *
		 * @param array List of decorator names
		 * @since 2014.05
		 * @category Developer
		 * @see client/html/common/decorators/default
		 * @see client/html/basket/standard/decorators/global
		 * @see client/html/basket/standard/decorators/local
		 */

		/** client/html/basket/standard/decorators/global
		 * Adds a list of globally available decorators only to the basket standard html client
		 *
		 * Decorators extend the functionality of a class by adding new aspects
		 * (e.g. log what is currently done), executing the methods of the underlying
		 * class only in certain conditions (e.g. only for logged in users) or
		 * modify what is returned to the caller.
		 *
		 * This option allows you to wrap global decorators
		 * ("\Aimeos\Client\Html\Common\Decorator\*") around the html client.
		 *
		 *  client/html/basket/standard/decorators/global = array( 'decorator1' )
		 *
		 * This would add the decorator named "decorator1" defined by
		 * "\Aimeos\Client\Html\Common\Decorator\Decorator1" only to the html client.
		 *
		 * @param array List of decorator names
		 * @since 2014.05
		 * @category Developer
		 * @see client/html/common/decorators/default
		 * @see client/html/basket/standard/decorators/excludes
		 * @see client/html/basket/standard/decorators/local
		 */

		/** client/html/basket/standard/decorators/local
		 * Adds a list of local decorators only to the basket standard html client
		 *
		 * Decorators extend the functionality of a class by adding new aspects
		 * (e.g. log what is currently done), executing the methods of the underlying
		 * class only in certain conditions (e.g. only for logged in users) or
		 * modify what is returned to the caller.
		 *
		 * This option allows you to wrap local decorators
		 * ("\Aimeos\Client\Html\Basket\Decorator\*") around the html client.
		 *
		 *  client/html/basket/standard/decorators/local = array( 'decorator2' )
		 *
		 * This would add the decorator named "decorator2" defined by
		 * "\Aimeos\Client\Html\Basket\Decorator\Decorator2" only to the html client.
		 *
		 * @param array List of decorator names
		 * @since 2014.05
		 * @category Developer
		 * @see client/html/common/decorators/default
		 * @see client/html/basket/standard/decorators/excludes
		 * @see client/html/basket/standard/decorators/global
		 */

		return $this->createSubClient( 'basket/standard/' . $type, $name );
	}


	/**
	 * Sets the necessary parameter values in the view.
	 */
	public function process()
	{
		$view = $this->getView();
		$context = $this->getContext();

		try
		{
			$options = array(

				/** client/html/basket/require-stock
				 * Customers can order products only if there are enough products in stock
				 *
				 * Checks that the requested product quantity is in stock before
				 * the customer can add them to his basket and order them. If there
				 * are not enough products available, the customer will get a notice.
				 *
				 * @param boolean True if products must be in stock, false if products can be sold without stock
				 * @since 2014.03
				 * @category Developer
				 * @category User
				 */
				'stock' => $view->config( 'client/html/basket/require-stock', true ),

				/** client/html/basket/require-variant
				 * A variant of a selection product must be chosen
				 *
				 * Selection products normally consist of several article variants and by default
				 * exactly one article variant of a selection product can be put into the basket.
				 *
				 * By setting this option to false, the selection product including the chosen
				 * attributes (if any attribute values were selected) can be put into the basket
				 * as well. This makes it possible to get all articles or a subset of articles
				 * (e.g. all of a color) at once.
				 *
				 * @param boolean True if a variant must be chosen, false if also the selection product with attributes can be added
				 * @since 2014.03
				 * @category Developer
				 * @category User
				 */
				'variant' => $view->config( 'client/html/basket/require-variant', true ),
			);

			switch( $view->param( 'b_action' ) )
			{
				case 'add':
					$this->addProducts( $view, $options );
					break;
				case 'delete':
					$this->deleteProducts( $view );
					break;
				default:
					$this->editProducts( $view, $options );
			}

			parent::process();

			$controller = \Aimeos\Controller\Frontend\Factory::createController( $context, 'basket' );
			$controller->get()->check( \Aimeos\MShop\Order\Item\Base\Base::PARTS_PRODUCT );
		}
		catch( \Aimeos\Client\Html\Exception $e )
		{
			$error = array( $context->getI18n()->dt( 'client', $e->getMessage() ) );
			$view->standardErrorList = $view->get( 'standardErrorList', array() ) + $error;
		}
		catch( \Aimeos\Controller\Frontend\Exception $e )
		{
			$error = array( $context->getI18n()->dt( 'controller/frontend', $e->getMessage() ) );
			$view->standardErrorList = $view->get( 'standardErrorList', array() ) + $error;
		}
		catch( \Aimeos\MShop\Plugin\Provider\Exception $e )
		{
			$errors = array( $context->getI18n()->dt( 'mshop', $e->getMessage() ) );
			$errors = array_merge( $errors, $this->translatePluginErrorCodes( $e->getErrorCodes() ) );

			$view->summaryErrorCodes = $e->getErrorCodes();
			$view->standardErrorList = $view->get( 'standardErrorList', array() ) + $errors;
		}
		catch( \Aimeos\MShop\Exception $e )
		{
			$error = array( $context->getI18n()->dt( 'mshop', $e->getMessage() ) );
			$view->standardErrorList = $view->get( 'standardErrorList', array() ) + $error;
		}
		catch( \Exception $e )
		{
			$context->getLogger()->log( $e->getMessage() . PHP_EOL . $e->getTraceAsString() );

			$error = array( $context->getI18n()->dt( 'client', 'A non-recoverable error occured' ) );
			$view->standardErrorList = $view->get( 'standardErrorList', array() ) + $error;
		}
	}


	/**
	 * Returns the list of sub-client names configured for the client.
	 *
	 * @return array List of HTML client names
	 */
	protected function getSubClientNames()
	{
		return $this->getContext()->getConfig()->get( $this->subPartPath, $this->subPartNames );
	}


	/**
	 * Sets the necessary parameter values in the view.
	 *
	 * @param \Aimeos\MW\View\Iface $view The view object which generates the HTML output
	 * @param array &$tags Result array for the list of tags that are associated to the output
	 * @param string|null &$expire Result variable for the expiration date of the output (null for no expiry)
	 * @return \Aimeos\MW\View\Iface Modified view object
	 */
	protected function setViewParams( \Aimeos\MW\View\Iface $view, array &$tags = array(), &$expire = null )
	{
		if( !isset( $this->cache ) )
		{
			$context = $this->getContext();
			$site = $context->getLocale()->getSite()->getCode();

			if( ( $params = $context->getSession()->get( 'aimeos/catalog/detail/params/last' . $site ) ) !== null )
			{
				$target = $view->config( 'client/html/catalog/detail/url/target' );
				$controller = $view->config( 'client/html/catalog/detail/url/controller', 'catalog' );
				$action = $view->config( 'client/html/catalog/detail/url/action', 'detail' );
				$config = $view->config( 'client/html/catalog/detail/url/config', array() );
			}
			else
			{
				$params = $context->getSession()->get( 'aimeos/catalog/lists/params/last' . $site, array() );

				$target = $view->config( 'client/html/catalog/lists/url/target' );
				$controller = $view->config( 'client/html/catalog/lists/url/controller', 'catalog' );
				$action = $view->config( 'client/html/catalog/lists/url/action', 'list' );
				$config = $view->config( 'client/html/catalog/lists/url/config', array() );

			}

			$view->standardParams = $this->getClientParams( $view->param() );
			$view->standardBackUrl = $view->url( $target, $controller, $action, $params, array(), $config );
			$view->standardBasket = \Aimeos\Controller\Frontend\Factory::createController( $context, 'basket' )->get();

			$this->cache = $view;
		}

		return $this->cache;
	}


	/**
	 * Adds the products specified by the view parameters to the basket.
	 *
	 * @param \Aimeos\MW\View\Iface $view View object
	 * @param array $options List of options for addProducts() in basket controller
	 */
	protected function addProducts( \Aimeos\MW\View\Iface $view, array $options )
	{
		$this->clearCached();
		$products = (array) $view->param( 'b_prod', array() );
		$controller = \Aimeos\Controller\Frontend\Factory::createController( $this->getContext(), 'basket' );

		if( ( $prodid = $view->param( 'b_prodid', '' ) ) !== '' )
		{
			$products[] = array(
				'prodid' => $prodid,
				'quantity' => $view->param( 'b_quantity', 1 ),
				'attrvarid' => array_filter( (array) $view->param( 'b_attrvarid', array() ) ),
				'attrconfid' => array_filter( (array) $view->param( 'b_attrconfid', array() ) ),
				'attrhideid' => array_filter( (array) $view->param( 'b_attrhideid', array() ) ),
				'attrcustid' => array_filter( (array) $view->param( 'b_attrcustid', array() ) ),
				'warehouse' => $view->param( 'b_warehouse', 'default' ),
			);
		}

		foreach( $products as $values ) {
			$this->addProduct( $controller, $values, $options );
		}
	}


	/**
	 * Adds a single product specified by its values to the basket.
	 *
	 * @param \Aimeos\Controller\Frontend\Iface $controller Basket frontend controller
	 * @param array $values Associative list of key/value pairs from the view specifying the product
	 * @param array $options List of options for addProducts() in basket frontend controller
	 */
	protected function addProduct( \Aimeos\Controller\Frontend\Iface $controller, array $values, array $options )
	{
		$controller->addProduct(
			( isset( $values['prodid'] ) ? (string) $values['prodid'] : '' ),
			( isset( $values['quantity'] ) ? (int) $values['quantity'] : 1 ),
			$options,
			( isset( $values['attrvarid'] ) ? array_filter( (array) $values['attrvarid'] ) : array() ),
			( isset( $values['attrconfid'] ) ? array_filter( (array) $values['attrconfid'] ) : array() ),
			( isset( $values['attrhideid'] ) ? array_filter( (array) $values['attrhideid'] ) : array() ),
			( isset( $values['attrcustid'] ) ? array_filter( (array) $values['attrcustid'] ) : array() ),
			( isset( $values['warehouse'] ) ? (string) $values['warehouse'] : 'default' )
		);
	}


	/**
	 * Removes the products specified by the view parameters from the basket.
	 *
	 * @param \Aimeos\MW\View\Iface $view View object
	 */
	protected function deleteProducts( \Aimeos\MW\View\Iface $view )
	{
		$this->clearCached();
		$products = (array) $view->param( 'b_position', array() );
		$controller = \Aimeos\Controller\Frontend\Factory::createController( $this->getContext(), 'basket' );

		foreach( $products as $position ) {
			$controller->deleteProduct( $position );
		}
	}


	/**
	 * Edits the products specified by the view parameters to the basket.
	 *
	 * @param \Aimeos\MW\View\Iface $view View object
	 * @param array $options List of options for editProducts() in basket controller
	 */
	protected function editProducts( \Aimeos\MW\View\Iface $view, array $options )
	{
		$this->clearCached();
		$products = (array) $view->param( 'b_prod', array() );
		$controller = \Aimeos\Controller\Frontend\Factory::createController( $this->getContext(), 'basket' );

		if( ( $position = $view->param( 'b_position', '' ) ) !== '' )
		{
			$products[] = array(
				'position' => $position,
				'quantity' => $view->param( 'b_quantity', 1 ),
				'attrconf-code' => array_filter( (array) $view->param( 'b_attrconfcode', array() ) )
			);
		}

		foreach( $products as $values )
		{
			$controller->editProduct(
				( isset( $values['position'] ) ? (int) $values['position'] : 0 ),
				( isset( $values['quantity'] ) ? (int) $values['quantity'] : 1 ),
				$options,
				( isset( $values['attrconf-code'] ) ? array_filter( (array) $values['attrconf-code'] ) : array() )
			);
		}
	}
}