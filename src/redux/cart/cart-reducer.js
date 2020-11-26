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

export default CartReducer;