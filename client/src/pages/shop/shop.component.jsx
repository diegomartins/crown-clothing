import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import "./shop.styles.scss";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../collection/collection.container";

const ShopPage = ({ match, fetchCollectionsStartAsync }) => {
    useEffect(() => {
        fetchCollectionsStartAsync();
    }, [fetchCollectionsStartAsync]);

    return (
        <div className="shop-page">
            <Route
                exact
                path={`${match.path}`}
                component={CollectionsOverviewContainer}
            />
            <Route
                path={`${match.path}/:collectionId`}
                component={CollectionPageContainer}
            />
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
