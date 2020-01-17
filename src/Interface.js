import React, { Component, useEffect } from 'react';
import Posts from './components/Posts';
import PostPeep from './components/PostPeep'
import SignUp from './components/Signup';

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
    fetch('https://chitter-backend-api.herokuapp.com/peeps')
      .then(response => response.json())
      .then(
        (data) => {
          this.setState({
            isLoaded: true,
            posts: data,
            error: null,
          })
          console.log(data)
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          })
        })
  }


  signUp =(value) => {
    console.log(value)
    
    this.setState({
      handle: value
    });
    console.log('2nd:' + this.state.handle)
    // fetch('https://chitter-backend-api.herokuapp.com/users', {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-type': 'application/json',
    //   },
    //   body: JSON.stringify(data)
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("success:", data.handle);
    //   })
    //   .catch((error) => {
    //     console.error('Error:', error);
    //   })
  };

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