import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { shopCollectionsSelector } from '../../../redux/shop/shop-selector';
import { CollectionPreview } from '../collection-preview/CollectionPreview';

const CollectionOverview = ({ collections }) => {
  console.log(collections)
  return (
    <div className="CollectionsOverview">
      {collections.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: shopCollectionsSelector,
});

export default connect(mapStateToProps)(CollectionOverview);