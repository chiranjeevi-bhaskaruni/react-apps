import React from 'react'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { auth } from '../firebase/firebase.utils';
import './AppsNav.scss'
const AppsNav = ({ currentUser }) => {
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
          {currentUser ? (
            <div onClick={() => auth.signOut()}>SignOut</div>
          ) : (
            <Link to="/signin">Sign In</Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(AppsNav);
