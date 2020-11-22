import React from 'react'
import './Header.scss';
import { Link, useRouteMatch } from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/crown.svg'
const Header = () => {
    let {url } = useRouteMatch();
    return (
      <div className="Header">
        <Link className="LogoContainer" to="/ecom">
          <Logo className="Logo" />
        </Link>
        <div className="ShopMenu">
          <Link className="ShopMenuItem" to={`${url}/shop`}>
            SHOP
          </Link>
          <Link className="ShopMenuItem" to={`${url}/contact`}>
            CONTACT
          </Link>
        </div>
      </div>
    );
}

export default Header
