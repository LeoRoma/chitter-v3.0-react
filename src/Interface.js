import React, { Component } from 'react';
import Posts from './components/Posts';
// import PostPeep from './components/PostPeep'
import SignUp from './components/Signup';
import axios from 'axios';

class Interface extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      handle: '',
      password: '',
      user_id: '',
      session_key: '',
      isLoaded: false,
    }
  }

  // get peeps
  componentDidMount() {
    axios.get('https://chitter-backend-api.herokuapp.com/peeps')
      .then((res) => this.setState({ posts: res.data }))
      .catch(err => console.log(err))
  }


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

  login = (currentUser) => {
    axios.post('https://chitter-backend-api.herokuapp.com/sessions/', {
      session: {
        handle: currentUser.handle,
        password: currentUser.password
      }
    })
      .then(res => this.setState({
        user_id: res.data.user_id,
        session_key: res.data.session_key
      }))
      .catch(err => console.log(err));
    console.log(this.state.user_id, this.state.session_key)
  }

  checkSessionKey = event => {
    event.preventDefault();
    console.log(this.state.session_key)
  }
  render() {
    return (
      <div>
        {/* Signup and Login  */}
        <SignUp
          signUp={this.signUp.bind(this)}
          login={this.login.bind(this)}
        />
        {/* <PostPeep /> */}
        <Posts posts={this.state.posts} />
        <button onClick={this.checkSessionKey.bind(this)}
          type="submit"
          variant="contained"
          color="primary"
        >
          Check Session Key
        </button>
      </div>
    )
  }
}
export default Interface;