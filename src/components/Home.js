import React, { Component } from 'react';

import Fab from '@material-ui/core/Fab';

import { Link } from 'react-router-dom';


class Home extends Component {
  render() {
    return (
      <div className="container">
        Welcome to D-witter
        <p><Link to="/login">

          <Fab variant="extended" aria-label="go" color="primary">
          Enter
</Fab>
        </Link></p>
      </div>
    )
  }
};

export default Home;