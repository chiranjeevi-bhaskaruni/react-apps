import React from 'react'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './CartIcon.scss';
const CartIcon = ({ showCartDropdown, itemCount }) => (
  <div className="CartIcon" onClick={showCartDropdown}>
    <ShoppingIcon className="ShoppingIcon" />
    <span className="ItemCount">{itemCount}</span>
  </div>
);

export default CartIcon
