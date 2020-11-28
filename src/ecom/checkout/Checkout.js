import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { showHideCart } from "../../redux/cart/cart-actions";
import {
  cartItemsSelector,
  cartTotalAmount,
} from "../../redux/cart/cart-selectors";
import CheckoutItems from "./checkout-items/CheckoutItems";
import "./Checkout.scss";
const Checkout = ({ cartItems, total, dispatch }) => {
    dispatch(showHideCart());
  return (
    <div className="CheckoutPage">
      <div className="CheckoutHeader">
        <div className="HeaderBlock">
          <span>Product</span>
        </div>
        <div className="HeaderBlock">
          <span>Name</span>
        </div>
        <div className="HeaderBlock">
          <span>Quantity</span>
        </div>
        <div className="HeaderBlock">
          <span>Price</span>
        </div>
        <div className="HeaderBlock">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(item => (
          <CheckoutItems key={item.id} item={item} />
      ))}
      <div className="Total">Total: ${total}</div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  cartItems: cartItemsSelector,
  total: cartTotalAmount,
});
export default connect(mapStateToProps)(Checkout);
