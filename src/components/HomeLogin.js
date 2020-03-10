import React, { Component } from 'react';
import Login from './Login';
import Header from './Header';

class HomeLogin extends Component {
  render() {
    return (
      <div className="background-home-login">
        <Header />
        <Login/>
      </div>
    )
  }
};

export default HomeLogin;