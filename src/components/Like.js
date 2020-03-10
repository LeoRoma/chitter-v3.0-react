import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Like extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLiked: false,
      likes: this.props.likes,
      userId: sessionStorage.getItem('user_id'),
      youLiked: '',
      buttonLabel: ''
    }
  };

  componentDidMount() {
    this.findHandle()
  };

  findHandle() {
    this.state.likes.forEach((like) => {
      if (like.user.id.toString(10) === this.state.userId) {
        this.setState({
          isLiked: true
        })
      }
    });
  };

  handleLikeButton = event => {
    event.preventDefault();
    this.state.isLiked = !this.state.isLiked
    if (this.state.isLiked === true) {
      this.likePeep()
    } else {
      this.unlikePeep()
    }
  }

  likePeep = () => {
    this.props.likePeep()
    console.log('you liked this peep')
  };

  unlikePeep = () => {
    this.props.unlikePeep()
    console.log('u unliked this peep')
  };

  render() {
    const like = (
      <Button
        type="submit"
        variant="contained"
        color="primary"
      >
        Like
          </Button>
    )
    const unlike = (
      <Button
        type="submit"
        variant="contained"
        color="primary"
      >
        Unlike
      </Button>
    )

    const liked = (
      <Typography variant="subtitle2" paragraph>
        You liked this peep!
      </Typography>
    )

    return (
      <div>

        {this.state.isLiked ? liked : null}

        <div onClick={this.handleLikeButton.bind(this)}>
          {this.state.isLiked ? unlike : like}

        </div>

      </div>
    )
  };
};
export default Like;