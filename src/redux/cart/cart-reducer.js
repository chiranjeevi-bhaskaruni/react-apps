import CartActionTypes from "./cart-action-types";

const initialState = {
  showCartDropdown: false,
};

const CartReducer = (state = initialState, action) => {
    switch(action.type) {
        case CartActionTypes.SHOW_HIDE_CART: 
            return {
              ...state,
              showCartDropdown: !state.showCartDropdown,
            };
        default:
            return state;
    }
}

export default CartReducer;