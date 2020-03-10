import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBInput } from 'mdbreact';
import './Signup.css'
import axios from 'axios';
import { Redirect } from 'react-router-dom';

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
    console.log(event.target.value)
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
      .then(res => this.setRedirect())
      .catch(err => console.log(err));

  };

  //Redirect after Login to chitter

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/login' />
    }
  };

  render() {
    return (
      <div className="background-signup">
        <MDBContainer className="center">
          {this.renderRedirect()}
          <MDBRow>
            <MDBCol md='1'>
              <MDBCard
                className='card-image'
                style={{
                  backgroundImage:
                    'url(/login.png)',
                  width: '28rem',

                }
                }
              >
                <div className='text-white rgba-stylish-strong py-5 px-5 z-depth-4'>
                  <div className='text-center'>
                    <h3 className='white-text mb-5 mt-4 font-weight-bold'>
                      <strong>SIGN</strong>
                      <a href='#!' className='pink-text font-weight-bold'>
                        <strong> UP</strong>
                      </a>
                    </h3>
                  </div>
                  <MDBInput
                    className="font-color"
                    label='Your email'
                    group
                    type='text'
                    validate
                    labelClass='white-text'
                    onChange={this.handleHandleChange}
                  />
                  <MDBInput
                    className="font-color-pw"
                    label='Your password'
                    group
                    type='password'
                    validate
                    labelClass='white-text'
                    onChange={this.handlePasswordChange}
                  />
                  <MDBRow className='d-flex align-items-center mb-4'>
                    <div className='text-center mb-3 col-md-12'>
                      <MDBBtn
                        onClick={this.handleSignup.bind(this)}
                        color='pink'
                        rounded
                        type='button'
                        className='btn-block z-depth-1'
                      >
                        Sign up
                  </MDBBtn>
                    </div>
                  </MDBRow>
                  <MDBCol md='12'>
                    <p className='font-small white-text d-flex justify-content-end'>
                      Have an account?
                  <a href='/login' className='pink-text ml-1 font-weight-bold'>
                        Login
                  </a>
                    </p>

                  </MDBCol>

                </div>
              </MDBCard>

            </MDBCol>

          </MDBRow>
        </MDBContainer>

      </div>

    );
  }
}



export default SignUp;