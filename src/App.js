import React, { Component } from 'react'
import ClientSearch from './client-search/ClientSearch';
import EcomApp from './ecom/EcomApp';
import { Route, Switch } from "react-router-dom";
import AppsNav from './apps-nav/AppsNav';
import SignInSignOut from './sign-in-sign-out/SignInSignOut';
import { auth, createUser } from './firebase/firebase.utils';
export class App extends Component {
  state = {
    currentUSer: null,
  };
  unsubscribeUser = null;
  componentDidMount() {
    this.unsubscribeUser = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUser(userAuth);
        userRef.onSnapshot(snapshot => {
          this.setState({currentUser: {
            id: snapshot.id,
            ...snapshot.data()
          }}, () => {
            console.log("Current user", this.state.currentUser)
          })
        })
      }
      this.setState({currentUser: userAuth})
    });
  }
  componentWillUnmount() {
    this.unsubscribeUser();
    console.log("EcomApp", this.state.currentUser);
  }
  render() {
    return (
      <>
        <AppsNav user={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" />
          {/* It passes history, match and location as props */}
          <Route path="/ecom" component={EcomApp} />

          {/* It doesn't pass history, match and location as props */}
          <Route path="/clients">
            <ClientSearch />
          </Route>
          <Route path="/signin">
            <SignInSignOut />
          </Route>
        </Switch>
      </>
    );
  }
}

export default App;