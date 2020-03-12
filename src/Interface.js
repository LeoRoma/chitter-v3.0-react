import React, { Component } from 'react';
import axios from 'axios';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

import './Interface.css';

import Header from './components/Header'
import Peeps from './components/Peeps';
import PostPeep from './components/PostPeep';


class Interface extends Component {
  constructor(props) {
    super(props)
    this.state = {
      peeps: [],
      handle: '',
      password: '',
      user_id: sessionStorage.getItem('user_id'),
      session_key: sessionStorage.getItem('session_key'),
      isMine: false,
      redirect: false
    }
  };

  // get peeps
  componentDidMount() {
    this.getPeeps()
    console.log(this.state.session_key, this.state.user_id)
  };

  getPeeps() {
    axios.get('https://chitter-backend-api.herokuapp.com/peeps')
      .then((res) => this.setState({ peeps: res.data }))
      // .then((res) => console.log(this.state))
      .catch(err => console.log(err))
  };

  // Post peep 
  sendPeep = (peep) => {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Token token=' + this.state.session_key
    };
    axios.post('https://chitter-backend-api.herokuapp.com/peeps', {
      peep: {
        user_id: this.state.user_id,
        body: peep.peep
      }
    }, {
      headers: headers
    })
      .then(res => console.log(res))
      .then((res) => this.getPeeps())
      .catch(err => console.log(err))
    // setTimeout(function () {
    //   window.location.reload(false);
    // }, 2000)
  };

  // delete peep 
  deletePeep = (id) => {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Token token=' + this.state.session_key
    }
    axios.delete(`https://chitter-backend-api.herokuapp.com/peeps/${id}`, {
      headers: headers
    })
      .then(res => console.log(res))
      .then((res) => this.getPeeps())
      .catch(err => console.log(err))
    setTimeout(function () {
      window.location.reload(false);
    }, 500)
  };

  // like peep
  likePeep = (id) => {
    const likes = {
      id: this.state.user_id
    };
    const headers = {
      'Authorization': 'Token token=' + this.state.session_key
    };
    axios.put(`https://chitter-backend-api.herokuapp.com/peeps/${id}/likes/${this.state.user_id}`,
      {
        likes: likes
      },
      {
        headers: headers
      })
      .then(res => console.log(res))
      .then((res) => this.getPeeps())
      .catch(err => console.log(err));
  };

  unlikePeep = (id) => {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Token token=' + this.state.session_key
    }
    axios.delete(`https://chitter-backend-api.herokuapp.com/peeps/${id}/likes/${this.state.user_id}`, {
      headers: headers
    })
      .then((res) => this.getPeeps())
      .catch(err => console.log(err))
  };


  render() {
    return (
      <div className="background-home-login">
        {/* Navbar */}
        <Header />

        <MDBContainer>
          <MDBRow>
            <MDBCol md="8">
              <Peeps
                peeps={this.state.peeps}
                isMine={this.state.isMine}
                deletePeep={this.deletePeep.bind(this)}
                likePeep={this.likePeep.bind(this)}
                unlikePeep={this.unlikePeep.bind(this)}
                thisUserId={this.state.user_id}
              />

            </MDBCol>
            <MDBCol md="4">
              <PostPeep
                sendPeep={this.sendPeep.bind(this)}
              />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    )
  }
}
export default Interface;