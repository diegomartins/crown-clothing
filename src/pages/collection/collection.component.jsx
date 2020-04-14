import React from "react";
import "./collection.styles.scss";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { selectCollection } from "../../redux/shop/shop.selectors";
import { connect } from "react-redux";

const CollectionPage = ({ collection, match }) => (
    <div className="collection-page">
        <h2 className="title">{collection.title}</h2>
        <div className="items">
            {collection.items.map(item => (
                <CollectionItem key={item.id} item={item}></CollectionItem>
            ))}
        </div>
    </div>
);

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
