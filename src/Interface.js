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
      user_id: sessionStorage.getItem('user_id'),
      session_key: sessionStorage.getItem('session_key'),
      isMine: false,
      redirect: false
    }
  };

  // get peeps
  componentDidMount() {
    this.getPeeps()
  };

  getPeeps() {
    axios.get('https://chitter-backend-api.herokuapp.com/peeps')
      .then((res) => this.setState({ peeps: res.data }))
      .then((res) => console.log(this.state))
      .catch(err => console.log(err))
  };

  // Post peep 
  sendPeep = (peep) => {
    console.log(this.state.session_key)
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
      .then((res) => this.getPeeps())
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
      .then(res => console.log(res))
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
        {/* Send a new peep  */}
        <PostPeep
          sendPeep={this.sendPeep.bind(this)} />

        {/* get peeps  */}
        <Peeps
          peeps={this.state.peeps}
          isMine={this.state.isMine}
          deletePeep={this.deletePeep.bind(this)}
          likePeep={this.likePeep.bind(this)}
          unlikePeep={this.unlikePeep.bind(this)}
          thisUserId={this.state.user_id}
        />
      </div>
    )
  }
}
export default Interface;