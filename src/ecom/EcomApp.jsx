import React from 'react'
import { Route, Switch, useParams, useRouteMatch } from 'react-router-dom';
import './EcomApp.scss';
import Header from './header/Header';
import Menu from './menu/Menu';
import ShopPage from './shop-page/ShopPage';
const EcomApp = () => {
   let { path, url } = useRouteMatch();
   console.log("EcomApp", path, url)
    return (
      <div className="EcomApp">
        <Header />
        <Switch>
          <Route exact path={path} component={Menu} />
          <Route path={`${path}/shop`} component={ShopPage} />
          <Route path={`${path}/contact`} component={ContactPage} />
        </Switch>
      </div>
    );
}

const ContactPage = () => {
  return (
    <div>Contact Page</div>
  )
}
export default EcomApp;
