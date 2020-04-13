import React from "react";
import "./shop.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import selectShopCollections from "../../redux/shop/shop.selectors";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";

const ShopPage = ({ collections }) => (
    <div className="shop-page">
        <CollectionsOverview></CollectionsOverview>
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollections
});

export default connect(mapStateToProps)(ShopPage);
