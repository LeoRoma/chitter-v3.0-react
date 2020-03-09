import React, { Component } from 'react';
import Like from './Like';
import Delete from './Delete';

class Peep extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: sessionStorage.getItem('user_id'),
      isMine: false
    };
  };

  componentDidMount() {
    if (this.props.userId.toString(10) === this.state.userId) {
      this.setState({
        isMine: true
      })
    }
  };

  deletePeep = (id) => {
    this.props.deletePeep(id)
  };

  likePeep = (id) => {
    this.props.likePeep(id)
  };

  unlikePeep = (id) => {
    this.props.unlikePeep(id)
  };

  render() {
    const handle = this.props.handle
    const createdAt = this.props.createdAt
    const body = this.props.body
   
    return (
      <div>
        <div>
          <h2>{handle}</h2>
          <h5>{createdAt}</h5>
          <h3>{body}</h3>
          {/* <h3>Likes: {likes}</h3> */}
          <Delete
            isMine={this.state.isMine}
            deletePeep={this.deletePeep.bind(this)}
          />
          <Like
            userId={this.props.userId}
            likePeep={this.props.likePeep.bind(this)}
            unlikePeep={this.props.unlikePeep.bind(this)}
            likes={this.props.likes}
          />
        </div>
      </div>

    )
  }
};

export default Peep;