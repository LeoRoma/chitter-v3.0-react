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

  async componentDidMount() {
    const url = 'https://chitter-backend-api.herokuapp.com/peeps';
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
  }

  render() {
    return (
      <div>
        Hello
      </div>
    )
  }
}

export default Posts