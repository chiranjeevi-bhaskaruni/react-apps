import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Checkout from './checkout/Checkout';
import './EcomApp.scss';
import Header from './header/Header';
import Menu from './menu/Menu';
import ShopPage from './shop-page/ShopPage';
const EcomApp = () => {
   let { path } = useRouteMatch();
    return (
      <div className="EcomApp">
        <Header />
        <Switch>
          <Route exact path={path} component={Menu} />
          <Route path={`${path}/shop`} component={ShopPage} />
          <Route exact path={`${path}/contact`} component={ContactPage} />
          <Route exact path={`${path}/checkout`} component={Checkout} />
        </Switch>
      </div>
    );
}

const ContactPage = () => {
  return (
    <div>Contact Page - updating soon</div>
  )
}
export default EcomApp;
