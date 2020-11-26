import React from 'react'
import './CollectionItem.scss'
import { Icon, Intent } from "@blueprintjs/core";
import { addItem } from '../../../redux/cart/cart-actions';
import { connect } from 'react-redux';
const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="CollectionItem" onClick={() => addItem(item)}>
      <div
        className="BackgroundImage"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="CollectionFooter">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <div className="AddToCart">
        <Icon
          className="AddToCartIcon"
          icon="plus"
          iconSize={50}
          intent={Intent.SUCCESS}
        ></Icon>
        <span className="AddToCartTitle">Add to Cart</span>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item))
});
export default connect(null, mapDispatchToProps)(CollectionItem);
