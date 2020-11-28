import React from 'react'
import { Route, useRouteMatch } from 'react-router-dom';
import CollectionsPage from '../collections/CollectionsPage';
import CollectionOverview from './collection-overview/CollectionOverview';
import './ShopPage.scss';
const ShopPage = () => {
  let { path } = useRouteMatch();
  return (
    <div className="ShopPage">
      <Route exact path={path} component={CollectionOverview} />
      <Route path={`${path}/:category`} component={CollectionsPage} />
    </div>
  );
}

export default ShopPage
