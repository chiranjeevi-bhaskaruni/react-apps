import React from 'react'
import { Link } from "react-router-dom";
import { auth } from '../firebase/firebase.utils';
import './AppsNav.scss'
const AppsNav = ({user}) => {
    if(user) {

    }
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
          <li>
          {
            user ?
            <div onClick={() => auth.signOut()}>SignOut</div>
            :
            <Link to="/signin">Sign In</Link>
          }
          </li>
        </ul>
      </nav>
    );
}

export default AppsNav
