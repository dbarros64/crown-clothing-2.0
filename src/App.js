import React from 'react';
import HomePage from './Pages/HomePage/HomePage';
import ShopPage from './Pages/ShopPage/ShopPage';
import SignInAndSignUp from './Pages/SignInAndSignUp/SignInAndSignUp';
import Header from './Components/Header/Header';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { setCurrentUser } from './Redux/user/user.actions';

import { auth, createUserProfileDocument } from './Firebase/Firebase.config';

import './App.css';




class App extends React.Component {

  unsubscribeFromAuth = null;


  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
          
        });

      } else {
        setCurrentUser(userAuth);
      }

    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={() => 
            this.props.currentUser ? (<Redirect to='/' />) : 
            (<SignInAndSignUp />)} />
        </Switch>
      </div>
    );
  } 
};

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps) (App);
