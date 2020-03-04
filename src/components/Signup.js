import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Login from './Login'

class SignUp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      handle: '',
      password: ''
    }
  }
  handleHandleChange = event => {
    this.setState({
      handle: event.target.value
    })
  };

  handlePasswordChange = event => {
    this.setState({
      password: event.target.value
    })
  }

  // signup 
  handleSignup = event => {
    event.preventDefault();
    this.props.signUp(this.state);
    this.setState({
      handle: '',
      password: ''
    })
  }

  // login 
  userLogin = () => {
    this.props.login(this.state);
    this.setState({
      handle: '',
      password: '',
    })
  };

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
          <Login
            login={this.userLogin.bind(this)}
          />
        </form>
      </div >

    );
  }
}



export default SignUp;