import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class Like extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLiked: false,
      likes: this.props.likes,
      userId: sessionStorage.getItem('user_id'),
      youLiked: ''
    }
  };

  componentDidMount() {
    this.findHandle()
  };

  findHandle() {
    this.state.likes.forEach((like) => {
      if (like.user.id.toString(10) === this.state.userId) {
        this.setState({
          liked: true
        })
      }
    });
  };

  handleLikeButton = event => {
    event.preventDefault();
    this.state.isLiked = !this.state.isLiked
    if (this.state.isLiked === false) {
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
    return (
      <div>
        {this.state.youLiked}
        <p>
          <Button onClick={this.handleLikeButton.bind(this)}
            type="submit"
            variant="contained"
            color="primary"
          >
            Like
          </Button>
        </p>

      </div>
    )
  };
};
export default Like;