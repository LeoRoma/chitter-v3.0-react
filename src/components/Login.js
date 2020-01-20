import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  handleLogin = event => {
    event.preventDefault();
    this.props.login()
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleLogin.bind(this)}
          type="submit"
          variant="contained"
          color="primary"
        >
          Login
       </Button>
      </div >
    )
  }
}

export default Login;