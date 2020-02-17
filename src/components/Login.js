import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class Login extends Component {

  helloFunction() {
    console.log('hello1')
  };

  helloFunction2(){
    console.log('hello2')
  };

  handleLogin = event => {
    event.preventDefault();
    this.props.login()
  };


  render() {
    return (
      <div>
        <Button onClick={this.handleLogin.bind(this)}
          onDoubleClick={this.handleDoubleClick.bind(this)}
          type="submit"
          variant="contained"
          color="primary"
        >
          Login
       </Button>
      </div >
    );
  };
};

export default Login;