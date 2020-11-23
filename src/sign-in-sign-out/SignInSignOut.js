import React from 'react'
import SignIn from './sign-in/SignIn'
import SignUp from './sign-up/SignUp';
import './SignInSignOut.scss'
const SignInSignOut = () => {
    return (
      <div className="SignInSignOut">
        <SignIn />
        <SignUp />
      </div>
    );
}

export default SignInSignOut
