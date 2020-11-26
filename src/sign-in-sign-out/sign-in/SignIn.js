import React, { Component } from 'react'
import CustomButton from '../../common/custom-button/CustomButton';
import FormInput from '../../common/form-input/FormInput';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import './SignIn.scss';
import { auth } from "../../firebase/firebase.utils";
export class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  changeHandler = event => {
    event.preventDefault();
    let {name, value} = event.target;
    this.setState({[name]: value})
  }

  submitHandler = async event => {
    event.preventDefault();
    const {email, password} = this.state;
    try{
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: "",
        password: "",
      });
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <div className="SignIn">
        <h1 className="SignInHeader">Already have an account</h1>
        <span>Sign in with your email and password</span>
        <FormInput
          type="email"
          name="email"
          value={this.state.email}
          placeholder="Email"
          changeHandler={this.changeHandler}
        />
        <FormInput
          type="password"
          name="password"
          value={this.state.password}
          placeholder="Password"
          changeHandler={this.changeHandler}
        />
        <div className="ButtonGroup">
          <CustomButton onClick={this.submitHandler}>Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
        </div>
      </div>
    );
  }
}

export default SignIn
