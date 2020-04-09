import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";

import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = ({ cartItems }) => (
    <div className="cart-dropdown">
        <h2>Cart</h2>
        <div className="cart-items">
            {cartItems.map(item => (
                <CartItem key={item.id} item={item} />
            ))}
        </div>
        <CustomButton>Go to checkout</CustomButton>
    </div>
);

const mapStateToProps = ({ cart }) => ({
    cartItems: cart.items
});

export default connect(mapStateToProps)(CartDropdown);
