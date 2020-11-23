import React from "react";
import CustomButton from "../../common/custom-button/CustomButton";
import FormInput from "../../common/form-input/FormInput";
import { auth, createUser } from "../../firebase/firebase.utils";
import "./SignUp.scss";

class SignUp extends React.Component {
  state = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  changeHandler = (event) => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  };

  submitHandler = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("Password's do not match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUser(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div className="SignUp">
        <h1 className="SignUpHeader">Don't have an account?</h1>
        <span>Create one using below Sign up form</span>
        <FormInput
          type="text"
          name="displayName"
          value={this.state.displayName}
          placeholder="Display Name"
          changeHandler={this.changeHandler}
        />
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
        <FormInput
          type="password"
          name="confirmPassword"
          value={this.state.confirmPassword}
          placeholder="Confirm Password"
          changeHandler={this.changeHandler}
        />
        <CustomButton onClick={this.submitHandler}>Sign Up</CustomButton>
      </div>
    );
  }
}

export default SignUp;
