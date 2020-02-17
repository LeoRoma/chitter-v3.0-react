import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class Like extends Component {


  handleLike = event => {
    event.preventDefault();
    this.props.like()
  };

  handleUnlike = event => {
    event.preventDefault();
    this.props.unlike()
  };

  render() {
    return (
      <div>
        <Button onClick={this.handleLike.bind(this)}
          type="submit"
          variant="contained"
          color="primary"
        >
          Like
       </Button>
        <Button onClick={this.handleUnlike.bind(this)}
          type="submit"
          variant="contained"
          color="primary"
        >
          Unlike
        </Button>
      </div>
    )
  };
};
export default Like;