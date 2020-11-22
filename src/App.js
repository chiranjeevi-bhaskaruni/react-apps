import React from 'react'
import ClientSearch from './client-search/ClientSearch';
import EcomApp from './ecom/EcomApp';
import { Route, Switch } from "react-router-dom";
import AppsNav from './apps-nav/AppsNav';
import ShopPage from './ecom/shop-page/ShopPage';
const App =  () => {
    return (
      <>
        <AppsNav />
        <Switch>
          {/* It passes history, match and location as props */}
          <Route path="/ecom" component={EcomApp} />
          
          {/* It doesn't pass history, match and location as props */}
          <Route path="/clients">
            <ClientSearch />
          </Route>
        </Switch>
      </>
    );
}

export default App
