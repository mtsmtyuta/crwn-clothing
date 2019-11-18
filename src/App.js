import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignUpAndSignIn from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }
  
  //firebase will always know the state of the user = subscription 
  componentDidMount(){
    auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    })
  }

  unsubscribeFromAuth = null

  //we don't want any memory leak - close the subscription
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
      <Header currentUser={this.state.currentUser} />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignUpAndSignIn} />
      </Switch>
      </div>
    );
  }
}

export default App;
