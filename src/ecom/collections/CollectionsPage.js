import React from 'react'
import { connect } from 'react-redux';
import { categorySelector } from '../../redux/shop/shop-selector';
import CollectionItem from '../shop-page/collection-item/CollectionItem';
import './CollectionsPage.scss';
const CollectionsPage = ({
  match: {
    params: { category },
  },
  collection: {items},
}) => {
  return (
    <div className="CollectionPage">
      <h2 className="title">{category.toUpperCase()}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: categorySelector(ownProps.match.params.category)(state),
});

export default connect(mapStateToProps)(CollectionsPage);
