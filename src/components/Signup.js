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
      handle:'',
      password: ''
    })
    console.log(this.state)
  }

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
          <Login  
          login={this.userLogin.bind(this)} 
            />
        </form>
      </div >

    );
  }
}



export default SignUp;