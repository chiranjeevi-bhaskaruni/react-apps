import React from 'react'
import ClientSearch from './client-search/ClientSearch';
import EcomApp from './ecom/EcomApp';
import { Route } from "react-router-dom";
import AppsNav from './apps-nav/AppsNav';
const App =  () => {
    return (
      <>
        <AppsNav />
        {/* It passes history, match and location as props */}
        <Route path="/ecom" component={EcomApp}></Route>
        {/* It doesn't pass history, match and location as props */}
        <Route path="/clients">
          <ClientSearch />
        </Route>
      </>
    );
}

export default App
