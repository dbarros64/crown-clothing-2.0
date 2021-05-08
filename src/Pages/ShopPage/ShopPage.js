import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionsOverview from '../../Components/CollectionsOverview/CollectionsOverview';
import CollectionPage from '../Collection/CollectionPage';
import { fetchCollectionsStartAsync } from '../../Redux/shop/shop.actions';
import { selectIsCollectionFetching, selectIsCollectionsLoaded } from '../../Redux/shop/shop.selectors';
import WithSpinner from '../../Components/WithSpinner/WithSpinner';


const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);


class ShopPage extends React.Component {

    componentDidMount() {
        const { fetchCollectionsStartAsync } = this.props;
        fetchCollectionsStartAsync();
    }


    render() {
        const { match, isCollectionsFetching, isCollectionsLoaded } = this.props;
        return (
            <div className='shop-page'>
               <Route exact path={`${match.path}`} render={(props) => 
                    <CollectionsOverviewWithSpinner isLoading={!isCollectionsFetching}{...props} />
                }/>
               <Route path={`${match.path}/:collectionId`} render={(props) => 
                    <CollectionPageWithSpinner isLoading={!isCollectionsLoaded}{...props} />
                } />
            </div>
        )
    }
};

const mapStateToProps = createStructuredSelector({
    isCollectionsFetching: selectIsCollectionFetching,
    isCollectionsLoaded: selectIsCollectionsLoaded
});

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);