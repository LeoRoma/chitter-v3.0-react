import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBInput } from 'mdbreact';

// import './Login.css';
import axios from 'axios';

import { Redirect } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handle: '',
      password: '',
      redirect: false
    }
  };

  //Redirect after Login to chitter

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/d-witter' />
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
      .then(res => {
        sessionStorage.setItem('user_id', res.data.user_id)
        sessionStorage.setItem('session_key', res.data.session_key)
        this.setRedirect()
      })
      .catch(err => console.log(err));
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
                      <strong>LOG</strong>
                      <a href='#!' className='pink-text font-weight-bold'>
                        <strong> IN</strong>
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
                        onClick={this.handleLogin.bind(this)}
                        color='pink'
                        rounded
                        type='button'
                        className='btn-block z-depth-1'
                      >
                        Login
                </MDBBtn>
                    </div>
                  </MDBRow>
              

                </div>
              </MDBCard>

            </MDBCol>

          </MDBRow>
        </MDBContainer>

      </div>

    );
  };
};

export default Login;