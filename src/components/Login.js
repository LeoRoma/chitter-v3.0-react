import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  handleLogin = event => {
    console.log('3nd:' + sessionStorage.getItem('handle'))
    let data = {
      session: {
        handle: this.state.handle,
        password: this.state.password
      }
    };
    event.preventDefault();
    fetch('https://chitter-backend-api.herokuapp.com/sessions', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("login id:" + data.user_id);
        sessionStorage.setItem('user_id', data.user_id);
        console.log("login session key:" + data.session_key);
        sessionStorage.setItem('session_key', data.session_key);
        console.log("success")
        console.log(sessionStorage.getItem('session_key'))
      })
      .catch((error) => {
        console.error('Error:', error);
      })
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