/**
 * /* eslint-disable wpcalypso/jsx-classname-namespace
 *
 * @format
 */

/**
 * External dependencies
 */
import React from 'react';
import { connect } from 'react-redux';
import Gridicon from 'gridicons';

/**
 * Internal dependencies
 */
import { url as mediaUrl } from 'lib/media/utils';
import QueryMedia from 'components/data/query-media';
import { getMediaItem } from 'state/selectors';

const ProductImage = ( { siteId, imageId, image, showEditIcon } ) => {
	if ( ! siteId || ! imageId ) {
		return null;
	}

	if ( ! image ) {
		return (
			<figure className="dialog__editor-simple-payments-modal-figure is-placeholder">
				<QueryMedia siteId={ siteId } mediaId={ imageId } />
			</figure>
		);
	}

	const url = mediaUrl( image, { size: 'medium' } );

	return (
		<div className="dialog__editor-simple-payments-modal-figure-container">
			<figure className="dialog__editor-simple-payments-modal-figure">
				<img className="dialog__editor-simple-payments-modal-image" src={ url } alt="product" />
			</figure>
			{ showEditIcon && <Gridicon icon="pencil" className="dialog__product-image-edit-icon" /> }
		</div>
	);
};

export default connect( ( state, { siteId, imageId } ) => ( {
	image: imageId ? getMediaItem( state, siteId, imageId ) : null,
} ) )( ProductImage );
