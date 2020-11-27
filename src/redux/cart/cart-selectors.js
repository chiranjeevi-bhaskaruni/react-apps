import { createSelector } from "reselect";

const cartSelector = state => state.cart;

export const cartItemsSelector = createSelector(
    [cartSelector],
    (cart) => cart.cartItems
)

export const showCartSelector = createSelector(
  [cartSelector],
  (cart) => cart.showCartDropdown
);

export const cartItemsSelectorCount = createSelector(
  [cartItemsSelector],
  (cartItems) => cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
);

