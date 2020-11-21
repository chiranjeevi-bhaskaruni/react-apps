import React from 'react'
import CollectionItem from '../collection-item/CollectionItem'
import './CollectionPreview.scss';
export const CollectionPreview = ({items, title}) => {
    return (
      <div className="CollectionPreview">
        <h2 className="CollectionTitle">{title.toUpperCase()}</h2>
        <div className="CollectionItems">
          {items
            .filter(({ id }) => id <= 4)
            .map(({ id, ...itemProps }) => (
              <CollectionItem key={id} {...itemProps} />
            ))}
        </div>
      </div>
    );
}
