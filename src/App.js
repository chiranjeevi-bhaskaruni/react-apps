import React, { Component } from 'react'
import ClientSearch from './client-search/ClientSearch';
import EcomApp from './ecom/EcomApp';
import { Route, Switch } from "react-router-dom";
import AppsNav from './apps-nav/AppsNav';
import SignInSignOut from './sign-in-sign-out/SignInSignOut';
import { auth, createUser } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user-actions';
export class App extends Component {
 
  unsubscribeUser = null;
  componentDidMount() {

    const { setCurrentUser } = this.props;
    this.unsubscribeUser = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUser(userAuth);
        userRef.onSnapshot(snapshot => {
          setCurrentUser( {
            id: snapshot.id,
            ...snapshot.data()
          })
        })
      }
      setCurrentUser(userAuth);
    });
  }
  componentWillUnmount() {
    this.unsubscribeUser();
  }
  render() {
    let { currentUser } = this.props;
    return (
      <>
        <AppsNav />
        <Switch>
          <Route exact path="/" />
          {/* It passes history, match and location as props */}
          <Route path="/ecom" component={EcomApp} />

          {/* It doesn't pass history, match and location as props */}
          <Route path="/clients">
            <ClientSearch />
          </Route>
          <Route
            exact
            path="/signin"
            render={() =>
              currentUser ? <Route exact path="/" /> : <SignInSignOut />
            }
          ></Route>
        </Switch>
      </>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});
const mapDispatcherToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatcherToProps)(App);