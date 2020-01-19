import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Login from './Login'

class SignUp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      handle: '',
      password: '',
      user_id: '',
      session_key: '',
      peep: ""
    }
  }
  handleHandleChange = event => {
    this.setState({
      handle: event.target.value
    })
    // sessionStorage.setItem('handle', this.state.handle)
  };

  handlePasswordChange = event => {
    this.setState({
      password: event.target.value
    })
  }

  // signup 
  handleSignup = event => {
    event.preventDefault();
    // sessionStorage.setItem('handle', this.state.handle);
    this.props.signUp(this.state);
    this.setState({
      handle: '',
      password: ''
    })
  }

  // login 
  // handleLogin = event => {
  //   console.log('3nd:' + sessionStorage.getItem('handle'))
  //   let data = {
  //     session: {
  //       handle: this.state.handle,
  //       password: this.state.password
  //     }
  //   };
  //   event.preventDefault();
  //   fetch('https://chitter-backend-api.herokuapp.com/sessions', {
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-type': 'application/json',
  //     },
  //     body: JSON.stringify(data)
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log("login id:" + data.user_id);
  //       sessionStorage.setItem('user_id', data.user_id);
  //       console.log("login session key:" + data.session_key);
  //       sessionStorage.setItem('session_key', data.session_key);
  //       console.log("success")
  //       console.log(sessionStorage.getItem('session_key'))
  //     })
  //     .catch((error) => {
  //       console.error('Error:', error);
  //     })
  // }

  // send peep 
  handlePeep = event => {
    this.setState({ peep: event.target.value })
  }

  handlePostPeep = event => {
    let data = {
      peep: {
        user_id: sessionStorage.getItem('user_id'),
        body: this.state.peep,
      }
    };

    event.preventDefault();
    fetch('https://chitter-backend-api.herokuapp.com/peeps', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Token token=${sessionStorage.getItem('session_key')}`,
      },
      body: JSON.stringify(data)
    })
      .then((response) => console.log(response.json(), "After login:" + this.state.session_key + "ID:" + this.state.user_id))
      .then((data) => {
        // console.log(response)
        console.log("success:", data);
      })
      .catch((error) => {
        console.error('Error:', error);

      })

    // delete peep 
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
          <Login />
        </form>
        <form>
          <TextField
            variant="outlined"
            required
            // fullWidth
            name="peep"
            label="Write your peep"
            id="peep"
            autoComplete="current-password"
            onChange={this.handlePeep}
          /><br />

          {/* send peep button  */}
          <Button onClick={this.handlePostPeep.bind(this)}
            type="submit"
            variant="contained"
            color="primary"
          >
            Send Peep
          </Button><br />
        </form>
      </div >

    );
  }
}



export default SignUp;