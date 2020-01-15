import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
// import { Link } from 'react-router-dom';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
// import Paper from '@material-ui/core/Paper'

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

  handleSubmit = event => {
    event.preventDefault()
    console.log(this.state)
  }

  render() {
    return (
      <div class="container">
        <form onSubmit={this.handleSubmit} noValidate>
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
          <Button
            type="submit"
            variant="contained"
            color="primary"
          >
            Sign Up
          </Button>
        </form>
      </div >

    );
  }
}



export default SignUp;