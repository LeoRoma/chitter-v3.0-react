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
      .then(data => {
        this.setState({
          isLoaded: true,
          posts: data,
        })
        console.log(data)
      })
  }
  render() {
    var { posts, isLoaded } = this.state
    return (
      <div>
        Hello
        <ul>
          {posts.map(post =>
            <li>
              {post.body}
            </li>)
          }
        </ul>
      </div>
    )
  }
}

export default Posts