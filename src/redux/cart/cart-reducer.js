import CartActionTypes from "./cart-action-types";

const initialState = {
  showCartDropdown: false,
  cartItems: [],
  totalCartItems: 0
};

const CartReducer = (state = initialState, action) => {
    switch(action.type) {
        case CartActionTypes.SHOW_HIDE_CART: 
            return {
              ...state,
              showCartDropdown: !state.showCartDropdown,
            };
        case CartActionTypes.ADD_ITEM:
            return {
              ...state,
              cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case CartActionTypes.CLEAR_ITEM:
          return {
            ...state,
            cartItems: state.cartItems.filter((item) => item.id !== action.payload.id),
          };
        case CartActionTypes.REMOVE_ITEM:
          return {
            ...state,
            cartItems: removeItemFromCart(state.cartItems, action.payload),
          };
        default:
            return state;
    }
}

const addItemToCart = (cartItems, addToCartItem) => {
  let itemFound = cartItems.find((cartItem) => cartItem.id === addToCartItem.id);
  if(itemFound) {
    return cartItems.map(cartItem => cartItem.id === addToCartItem.id 
    ? {...cartItem, quantity: cartItem.quantity + 1}
    : cartItem
    )
  }
  return [...cartItems, { ...addToCartItem, quantity: 1 }];
}

const removeItemFromCart = (cartItems, removeCartItem) => {
  let itemFound = cartItems.find(
    (cartItem) => cartItem.id === removeCartItem.id
  );
  if (itemFound.quantity === 1) {
    return cartItems.filter((item) => item.id !== removeCartItem.id)
  }
  return cartItems.map((cartItem) =>
    cartItem.id === removeCartItem.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export default CartReducer;