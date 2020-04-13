import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectCartItems = createSelector([selectCart], cart => {
    console.info("CALLED");
    console.info(cart);
    return cart.items;
});

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((total, item) => total + item.quantity, 0)
);
