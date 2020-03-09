import React, { Component } from 'react';

import { Link } from 'react-router-dom';
// import HomeBg from '../../images/homeBg.jpg'
import './Home.css'


class Home extends Component {
  render() {
    return (
      <div className="background">
          <div className="center">
            <h1 className="text-center">
              Welcome to D-witter
            <p>
                <h3>Click <Link to="/signup">Enter</Link> to join the digital world of Twitter</h3>
              </p>
            </h1>
          </div>
        </div>

      

    )
  }
};

export default Home;