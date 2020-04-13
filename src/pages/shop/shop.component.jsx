import React from "react";
import "./shop.styles.scss";
import { connect } from "react-redux";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { createStructuredSelector } from "reselect";
import selectShopCollections from "../../redux/shop/shop.selectors";

const ShopPage = ({ collections }) => (
    <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview
                key={id}
                {...otherCollectionProps}
            ></CollectionPreview>
        ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollections
});

export default connect(mapStateToProps)(ShopPage);
