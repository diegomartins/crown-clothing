export const addItemToCart = (cartItems, itemToAdd) => {
    const itemExists = cartItems.find(cartItem => cartItem.id === itemToAdd.id);

    if (itemExists) {
        return cartItems.map(cartItem =>
            cartItem.id === itemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }

    return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, itemToRemove) => {
    const existingItem = cartItems.find(
        cartItem => cartItem.id === itemToRemove.id
    );

    if (existingItem.quantity === 1) {
        return cartItems.filter(item => item.id !== existingItem.id);
    }

    return cartItems.map(cartItem =>
        cartItem.id === itemToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    );
};

export const clearItemFromCart = (cartItems, itemToClear) =>
    cartItems.filter(item => item.id !== itemToClear.id);
