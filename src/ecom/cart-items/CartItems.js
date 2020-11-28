import React from 'react'
import { connect } from 'react-redux'
import CartItem from './cart-item/CartItem';
import './CartItems.scss'
const CartItems = ({ cartItems }) => {
  return (
    <div className="CartItems">
      {cartItems.map(({id, ...otherProps}) => (
        <CartItem key={id} {...otherProps} />
      ))}
    </div>
  );
};

const mapStateToProps = ({ cart: {cartItems} }) => ({
  cartItems
});
export default connect(mapStateToProps)(CartItems)
