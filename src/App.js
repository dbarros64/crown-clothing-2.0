import React from 'react';
import HomePage from './Pages/HomePage/Homepage';
import ShopPage from './Pages/ShopPage/ShopPage';
import SignInAndSignUp from './Pages/SignInAndSignUp/SignInAndSignUp';
import Header from './Components/Header/Header';
import CheckOutPage from './Pages/CheckOut/CheckOut';

import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import { selectCurrentUser } from './Redux/user/user.selectors';
import { checkUserSession } from './Redux/user/user.actions';



import './App.css';
// import { selectCartItemsCount } from './Redux/cart/cart.selectors';



class App extends React.Component {

  unsubscribeFromAuth = null;


  componentDidMount() {
    const { checkUserSession } = this.props;

    checkUserSession();
  
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
          <Route exact path='/checkout' component={CheckOutPage} />
          <Route exact path='/signin' render={() => 
            this.props.currentUser ? (<Redirect to='/' />) : 
            (<SignInAndSignUp />)} />
        </Switch>
      </div>
    );
  } 
};

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});



export default connect(mapStateToProps, mapDispatchToProps)(App);
