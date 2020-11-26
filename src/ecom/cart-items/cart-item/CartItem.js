import React from 'react'
import './CartItem.scss';
const CartItem = ({name, price, imageUrl, quantity}) => {
    return (
      <div className="CartItem">
          <img className="CartItemImage" src={imageUrl} alt={name} />
        <div className="ItemDetails">
          <span className="Name">{name}</span>
          <span>
            {quantity} x ${price}
          </span>
        </div>
      </div>
    );
}

export default CartItem
