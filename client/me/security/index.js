/** @format */

/**
 * External dependencies
 */

import page from 'page';

/**
 * Internal dependencies
 */
import config from 'config';
import meController from 'me/controller';
import {
	accountRecovery,
	connectedApplications,
	password,
	socialLogin,
	twoStep,
} from './controller';
import { makeLayout, render as clientRender } from 'controller';

export default function() {
	page( '/me/security', meController.sidebar, password, makeLayout, clientRender );

	if ( config.isEnabled( 'signup/social-management' ) ) {
		page(
			'/me/security/social-login',
			meController.sidebar,
			socialLogin,
			makeLayout,
			clientRender
		);
	}

	page( '/me/security/two-step', meController.sidebar, twoStep, makeLayout, clientRender );

	page(
		'/me/security/connected-applications',
		meController.sidebar,
		connectedApplications,
		makeLayout,
		clientRender
	);

	page(
		'/me/security/account-recovery',
		meController.sidebar,
		accountRecovery,
		makeLayout,
		clientRender
	);
}
