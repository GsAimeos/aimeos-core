<?php

/**
 * @copyright Copyright (c) Metaways Infosystems GmbH, 2014
 * @license LGPLv3, http://opensource.org/licenses/LGPL-3.0
 * @package Controller
 * @subpackage Order
 */


/**
 * Order delivery e-mail controller factory.
 *
 * @package Controller
 * @subpackage Order
 */
class Controller_Jobs_Order_Email_Delivery_Factory
	extends Controller_Jobs_Common_Factory_Abstract
	implements Controller_Jobs_Common_Factory_Interface
{
	/**
	 * Creates a new controller specified by the given name.
	 *
	 * @param MShop_Context_Item_Interface $context Context object required by controllers
	 * @param Arcavias $arcavias Arcavias object
	 * @param string|null $name Name of the controller or "Default" if null
	 * @return Controller_Jobs_Interface New controller object
	 */
	public static function createController( MShop_Context_Item_Interface $context, Arcavias $arcavias, $name = null )
	{
		/** classes/controller/jobs/order/email/delivery/name
		 * Class name of the used order email delivery scheduler controller implementation
		 *
		 * Each default job controller can be replace by an alternative imlementation.
		 * To use this implementation, you have to set the last part of the class
		 * name as configuration value so the controller factory knows which class it
		 * has to instantiate.
		 *
		 * For example, if the name of the default class is
		 *
		 *  Controller_Jobs_Order_Email_Delivery_Default
		 *
		 * and you want to replace it with your own version named
		 *
		 *  Controller_Jobs_Order_Email_Delivery_Mydelivery
		 *
		 * then you have to set the this configuration option:
		 *
		 *  classes/controller/jobs/order/email/delivery/name = Mydelivery
		 *
		 * The value is the last part of your own class name and it's case sensitive,
		 * so take care that the configuration value is exactly named like the last
		 * part of the class name.
		 *
		 * The allowed characters of the class name are A-Z, a-z and 0-9. No other
		 * characters are possible! You should always start the last part of the class
		 * name with an upper case character and continue only with lower case characters
		 * or numbers. Avoid chamel case names like "MyDelivery"!
		 *
		 * @param string Last part of the class name
		 * @since 2014.03
		 * @category Developer
		 */
		if( $name === null ) {
			$name = $context->getConfig()->get( 'classes/controller/jobs/order/email/delivery/name', 'Default' );
		}

		if( ctype_alnum( $name ) === false )
		{
			$classname = is_string( $name ) ? 'Controller_Jobs_Order_Email_Delivery_' . $name : '<not a string>';
			throw new Controller_Jobs_Exception( sprintf( 'Invalid characters in class name "%1$s"', $classname ) );
		}

		$iface = 'Controller_Jobs_Interface';
		$classname = 'Controller_Jobs_Order_Email_Delivery_' . $name;

		$controller = self::_createController( $context, $arcavias, $classname, $iface );

		/** controller/jobs/order/email/delivery/decorators/excludes
		 * Excludes decorators added by the "common" option from the order email delivery controllers
		 *
		 * Decorators extend the functionality of a class by adding new aspects
		 * (e.g. log what is currently done), executing the methods of the underlying
		 * class only in certain conditions (e.g. only for logged in users) or
		 * modify what is returned to the caller.
		 *
		 * This option allows you to remove a decorator added via
		 * "controller/jobs/common/decorators/default" before they are wrapped
		 * around the job controller.
		 *
		 *  controller/jobs/order/email/delivery/decorators/excludes = array( 'decorator1' )
		 *
		 * This would remove the decorator named "decorator1" from the list of
		 * common decorators ("Controller_Jobs_Common_Decorator_*") added via
		 * "controller/jobs/common/decorators/default" to this job controller.
		 *
		 * @param array List of decorator names
		 * @since 2015.09
		 * @category Developer
		 * @see controller/jobs/common/decorators/default
		 * @see controller/jobs/order/email/delivery/decorators/global
		 * @see controller/jobs/order/email/delivery/decorators/local
		 */

		/** controller/jobs/order/email/delivery/decorators/global
		 * Adds a list of globally available decorators only to the order email delivery controllers
		 *
		 * Decorators extend the functionality of a class by adding new aspects
		 * (e.g. log what is currently done), executing the methods of the underlying
		 * class only in certain conditions (e.g. only for logged in users) or
		 * modify what is returned to the caller.
		 *
		 * This option allows you to wrap global decorators
		 * ("Controller_Jobs_Common_Decorator_*") around the job controller.
		 *
		 *  controller/jobs/order/email/delivery/decorators/global = array( 'decorator1' )
		 *
		 * This would add the decorator named "decorator1" defined by
		 * "Controller_Jobs_Common_Decorator_Decorator1" only to this job controller.
		 *
		 * @param array List of decorator names
		 * @since 2015.09
		 * @category Developer
		 * @see controller/jobs/common/decorators/default
		 * @see controller/jobs/order/email/delivery/decorators/excludes
		 * @see controller/jobs/order/email/delivery/decorators/local
		 */

		/** controller/jobs/order/email/delivery/decorators/local
		 * Adds a list of local decorators only to the order email delivery controllers
		 *
		 * Decorators extend the functionality of a class by adding new aspects
		 * (e.g. log what is currently done), executing the methods of the underlying
		 * class only in certain conditions (e.g. only for logged in users) or
		 * modify what is returned to the caller.
		 *
		 * This option allows you to wrap local decorators
		 * ("Controller_Jobs_Order_Email_Delivery_Decorator_*") around this job controller.
		 *
		 *  controller/jobs/order/email/delivery/decorators/local = array( 'decorator2' )
		 *
		 * This would add the decorator named "decorator2" defined by
		 * "Controller_Jobs_Order_Email_Delivery_Decorator_Decorator2" only to this job
		 * controller.
		 *
		 * @param array List of decorator names
		 * @since 2015.09
		 * @category Developer
		 * @see controller/jobs/common/decorators/default
		 * @see controller/jobs/order/email/delivery/decorators/excludes
		 * @see controller/jobs/order/email/delivery/decorators/global
		 */
		return self::_addControllerDecorators( $context, $arcavias, $controller, 'order/email/delivery' );
	}
}