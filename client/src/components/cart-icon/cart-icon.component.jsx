import React from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingBagIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

const CartIcon = ({ toggleCartHidden, numberOfCartItems }) => (
    <div className="cart-icon" onClick={() => toggleCartHidden()}>
        <span className="item-count">{numberOfCartItems}</span>
        <ShoppingBagIcon className="shopping-bag-icon" />
    </div>
);

const mapStateToProps = createStructuredSelector({
    numberOfCartItems: selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
