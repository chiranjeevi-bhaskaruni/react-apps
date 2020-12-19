import React from 'react'
import { withRouter } from 'react-router-dom';
import CollectionItem from '../collection-item/CollectionItem'
import './CollectionPreview.scss';
const CollectionPreview = ({items, title, history, match}) => {
  console.log("CollectionPreview", match);
    return (
      <div className="CollectionPreview">
        <h2 className="CollectionTitle" onClick={() => history.push(`${match.url}/${title.toLowerCase()}`)}>{title.toUpperCase()}</h2>
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

export default withRouter(CollectionPreview);
