import React from 'react'
import CollectionItem from '../collection-item/CollectionItem'
import './CollectionPreview.scss';
export const CollectionPreview = ({items, title}) => {
    return (
      <div className="CollectionPreview">
        <h2 className="CollectionTitle">{title.toUpperCase()}</h2>
        <div className="CollectionItems">
          {items.slice(0,4)
            // .filter(({ id }) => items.length <= 4)
            .map(item => (
              <CollectionItem key={item.id} item={item} />
            ))}
        </div>
      </div>
    );
}
