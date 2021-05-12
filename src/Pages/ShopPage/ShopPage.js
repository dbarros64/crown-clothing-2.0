import React, {useEffect} from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';


import CollectionsOverviewContainer from '../../Components/CollectionsOverview/CollectionsOverview.container';
import CollectionPageContainer from '../Collection/CollectionPage.container';
import { fetchCollectionsStart } from '../../Redux/shop/shop.actions';



const ShopPage = ({ match, fetchCollectionsStart }) => {

    useEffect(() => {
        fetchCollectionsStart();
    }, [fetchCollectionsStart]);

        return (
            <div className='shop-page'>
               <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
               <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
            </div>
        )
    
};


const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);