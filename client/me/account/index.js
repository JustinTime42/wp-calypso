/** @format */

/**
 * External dependencies
 */

import page from 'page';

/**
 * Internal dependencies
 */
import meController from 'me/controller';
import { account } from './controller';
import { makeLayout, render as clientRender } from 'controller';

export default function() {
	page( '/me/account', meController.sidebar, account, makeLayout, clientRender );
}
