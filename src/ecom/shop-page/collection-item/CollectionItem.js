import React from 'react'
import './CollectionItem.scss'
const CollectionItem = ({ name, price, imageUrl }) => {
  return (
    <div className="CollectionItem">
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
    </div>
  );
};

export default CollectionItem
