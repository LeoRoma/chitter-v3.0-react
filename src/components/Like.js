import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class Like extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      userId: sessionStorage.getItem('user_id'),
      youLiked: ''
    }
  };

  componentDidMount() {
    const likes = this.props.likes.forEach((like) => {
      // console.log(like.user.id)
      if (like.user.id.toString(10) === this.state.userId) {
        this.setState({
          liked: true,
          youLiked: 'You liked this peep'
        })
      }

    })
  };

  handleLike = event => {
    event.preventDefault();
    this.props.likePeep()
  };

  handleUnlike = event => {
    event.preventDefault();
    this.props.unlikePeep()
  };

  render() {
    console.log(this.state.liked, this.state.youLiked)
    // console.log(likes)
    // console.log(this.props.likes)
    // console.log(this.state.userId)
    return (
      <div>
        {this.state.youLiked}
        <p>
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
        </p>

      </div>
    )
  };
};
export default Like;