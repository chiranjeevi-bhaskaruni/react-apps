import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  cartItemsSelector,
  cartTotalAmount,
} from "../../redux/cart/cart-selectors";
import CheckoutItem from "./checkout-item/CheckoutItem";
import "./Checkout.scss";
const Checkout = ({ cartItems, total }) => {
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
          <CheckoutItem key={item.id} item={item} />
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
