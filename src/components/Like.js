import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class Like extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false
    };
    this.handleLike = this.handleLike.bind(this);
  }
  handleLike = event => {
    event.preventDefault();
    this.props.like()
    this.setState(previousState => {
      return {
        liked: !previousState.liked
      };
    });
  };

  render() {
    const like = (
      <div>
        <Button
          type="submit"
          variant="contained"
          color="primary"
        >
          Like
       </Button>
      </div>
    )

    const unlike = (
      <div>
        <Button
          type="submit"
          variant="contained"
          color="primary"
        >
          Unlike
        </Button>
      </div>
    )

    return (
      <div>
        <div onClick={this.handleLike.bind(this)}>
          {this.state.liked ? unlike : like}
        </div>
      </div>
    )
  };
};
export default Like;