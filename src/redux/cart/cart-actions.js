import CartActionTypes from './cart-action-types';

export const showHideCart = () => ({
  type: CartActionTypes.SHOW_HIDE_CART
});

export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
})