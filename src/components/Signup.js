import React, { Component, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


class SignUp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      handle: '',
      password: ''
    }
  }
  handleHandleChange = event => {
    this.setState({ handle: event.target.value })
  }

  handlePasswordChange = event => {
    this.setState({ password: event.target.value })
  }

  handleSignup = event => {
    let data = {
      user: {
        handle: this.state.handle,
        password: this.state.password
      }
    };
    event.preventDefault();
    fetch('https://chitter-backend-api.herokuapp.com/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("success:", data);
      })
      .catch((error) => {
        console.error('Error:', error);
      })
  }

  handleLogin = event => {
    let data = {
      session: {
        handle: this.state.handle,
        password: this.state.password
      }
    };
    event.preventDefault();
    console.log("hello")
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
        console.log("user_id:" + data.user_id);
        sessionStorage.setItem('user_id', data.user_id);
        console.log("session_key:" + data.session_key);
        sessionStorage.setItem('session_key', data.session_key);
      })
      .catch((error) => {
        console.error('Error:', error);
      })
  }
  render() {
    return (
      <div className="container">
        <form>
          {/* Username */}
          <TextField
            variant="outlined"
            required
            // fullWidth
            id="email"
            label="Username"
            name="email"
            autoComplete="email"
            onChange={this.handleHandleChange}
          /><br />

          {/* password  */}
          <TextField
            variant="outlined"
            required
            // fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={this.handlePasswordChange}
          /><br />

          {/* signup button  */}
          <Button onClick={this.handleSignup.bind(this)}
            type="submit"
            variant="contained"
            color="primary"
          >
            Sign Up
          </Button><br />

          {/* login button  */}
          <Button onClick={this.handleLogin.bind(this)}
            type="submit"
            variant="contained"
            color="primary"
          >
            Login
          </Button>
        </form>
      </div >

    );
  }
}



export default SignUp;