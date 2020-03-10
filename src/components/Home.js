import React, { Component } from 'react';
import Signup from './Signup';
import Header from './Header';
class Home extends Component {
  render() {
    return (
      <div className="background-home">
        <Header />
        <Signup />
      </div>
    )
  }
};

export default Home;