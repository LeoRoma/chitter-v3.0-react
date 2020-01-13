import React, { Component } from 'react'
// import axios from 'axios'


class Posts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      isLoaded: false,
    }
  }

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
    var { posts, isLoaded, error } = this.state
    if (error) {
      return <div>Error {error.message}</div>
    } else if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <div>
          Hello
        <ul>
            {posts.map(post =>
              <li key={post.id}>
                <p>User: {post.user.handle}, </p>
                <p>Body: {post.body},</p>
                <p>Created at: {post.created_at}</p>
                -----
            </li>)
            }
          </ul>
        </div>
      )
    }
  }
}

export default Posts