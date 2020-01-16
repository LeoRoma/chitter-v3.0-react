import React, { Component } from 'react';
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

  render() {
    return (
      <div>
        <SignUp />
        {/* <PostPeep /> */}
        <Posts posts={this.state.posts} />

      </div>
    )
  }
}
export default Interface;