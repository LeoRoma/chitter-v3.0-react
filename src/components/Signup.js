import React, { Component } from 'react';
// import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// // import AppBar from 'material-ui/AppBar';
// import RaisedButton from 'material-ui/RaisedButton';
// import TextField from 'material-ui/TextField';

class SignUp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }
  render() {
    return (
      <div>
        
          <div>
            {/* <AppBar
              title="Login"
            /> */}
            <input
              hintText="Enter your Username"
              floatingLabelText="Username"
              onChange={(event, newValue) => this.setState({ username: newValue })}
            />
            <br />
            <input
              type="password"
              hintText="Enter your Password"
              floatingLabelText="Password"
              onChange={(event, newValue) => this.setState({ password: newValue })}
            />
            <br />
            <button label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)} />
          </div>
        
      </div>
    );
  }
}
const style = {
  margin: 15,
};


export default SignUp;