import React from 'react'
import { Link } from "react-router-dom";
import './AppsNav.scss'
const AppsNav = () => {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/ecom">Ecom App</Link>
          </li>
          <li>
            <Link to="/clients">Client Search</Link>
          </li>
        </ul>
      </nav>
    );
}

export default AppsNav
