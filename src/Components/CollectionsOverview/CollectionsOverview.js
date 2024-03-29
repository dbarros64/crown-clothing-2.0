import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../Redux/shop/shop.selectors';

import CollectionPreview from '../CollectionPreview/CollectionPreview';

import './CollectionsOverview.styles.scss';


const CollectionsOverview = ({ collections }) => {
    return (
    <div className='collections-overview'>
        {collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id}{...otherCollectionProps} />
        ))}
    </div>
)};

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});



export default connect(mapStateToProps)(CollectionsOverview);