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

  login = () => {
    
  }


  render() {
    return (
      <div>
        <SignUp
          signUp={this.signUp.bind(this)}
        />
        {/* <PostPeep /> */}
        <Posts posts={this.state.posts} />

      </div>
    )
  }
}
export default Interface;