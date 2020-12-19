import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { shopCollectionsPreviewSelector } from "../../../redux/shop/shop-selector";
import CollectionPreview from '../collection-preview/CollectionPreview';

const CollectionOverview = ({ collections }) => {
  return (
    <div className="CollectionsOverview">
      {collections.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: shopCollectionsPreviewSelector,
});

export default connect(mapStateToProps)(CollectionOverview);