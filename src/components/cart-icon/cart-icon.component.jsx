import React from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingBagIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartIcon = ({ toggleCartHidden, numberOfCartItems }) => (
    <div className="cart-icon" onClick={() => toggleCartHidden()}>
        <span className="item-count">{numberOfCartItems}</span>
        <ShoppingBagIcon className="shopping-bag-icon" />
    </div>
);

const mapStateToProps = ({ cart }) => ({
    numberOfCartItems: cart.items.reduce(
        (total, item) => total + item.quantity,
        0
    )
});

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
