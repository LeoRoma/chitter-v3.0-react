import React, { Component } from 'react';

import Peeps from './components/Peeps';
import PostPeep from './components/PostPeep';
import SignUp from './components/Signup';
import axios from 'axios';

class Interface extends Component {
  constructor(props) {
    super(props)
    this.state = {
      peeps: [],
      handle: '',
      password: '',
      user_id: '',
      session_key: '',
    }
  };

  // get peeps
  componentDidMount() {
    this.getPeeps()
  };

  getPeeps() {
    axios.get('https://chitter-backend-api.herokuapp.com/peeps')
      .then((res) => this.setState({ peeps: res.data }))
      .catch(err => console.log(err))
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
      .then((res) => this.componentDidMount())
      .catch(err => console.log(err))
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
      .then((res) => this.getPeeps())
      .catch(err => console.log(err))
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
    this.setState(prevState => ({
      liked: !prevState.liked
    }));
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
      <div>
        {/* Signup and Login  */}
        <SignUp
          signUp={this.signUp.bind(this)}
          login={this.login.bind(this)}
        />

        {/* Send a new peep  */}
        <PostPeep
          sendPeep={this.sendPeep.bind(this)} />

        {/* get peeps  */}
        <Peeps
          peeps={this.state.peeps}
          deletePeep={this.deletePeep.bind(this)}
          likePeep={this.likePeep.bind(this)}
          unlikePeep={this.unlikePeep.bind(this)}
        />
      </div>
    )
  }
}
export default Interface;