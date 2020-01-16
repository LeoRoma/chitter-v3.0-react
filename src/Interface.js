import React, { Component } from 'react';
import Posts from './components/Posts';

class Interface extends Component {
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
    return (
      <div>
        <Posts posts={this.state.posts} />
      </div>
    )
  }
}
export default Interface;