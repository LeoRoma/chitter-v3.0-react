import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Login from './Login'

import axios from 'axios';

import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom';



class SignUp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      handle: '',
      password: '',
      redirect: false
    }
  };

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
    axios.post('https://chitter-backend-api.herokuapp.com/users', {
      user: {
        handle: this.state.handle,
        password: this.state.password
      }
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  // login 
  userLogin = () => {
    this.props.login(this.state);
    // this.setState({
    //   handle: '',
    //   password: '',
    // })
  };


  // Sign Up
  signUp = (newUser) => {
    axios.post('https://chitter-backend-api.herokuapp.com/users', {
      user: {
        handle: newUser.handle,
        password: newUser.password
      }
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  // Login
  handleLogin = event => {
    event.preventDefault();
    axios.post('https://chitter-backend-api.herokuapp.com/sessions/', {
      session: {
        handle: this.state.handle,
        password: this.state.password
      }
    })
      .then(res => this.setState({
        user_id: res.data.user_id,
        session_key: res.data.session_key,
      }))
      .catch(err => console.log(err));
    this.setRedirect()
  };


  login = (currentUser) => {
    axios.post('https://chitter-backend-api.herokuapp.com/sessions/', {
      session: {
        handle: currentUser.handle,
        password: currentUser.password
      }
    })
      .then(res => this.setState({
        user_id: res.data.user_id,
        session_key: res.data.session_key,
      }))
      .catch(err => console.log(err));
    this.setRedirect()
  };

  //Redirect after Login to chitter

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/chitter' />
    }
  };

  render() {
    return (

      <div className="container">
        {this.renderRedirect()}
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