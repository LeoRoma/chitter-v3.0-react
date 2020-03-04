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

  render() {
    console.log(this.props.isMine)
    const peep = this.props.peep
    const handle = this.props.handle
    const createdAt = this.props.createdAt
    const body = this.props.body
    return (
      <div>
        <div>
          <h2>{handle}</h2>
          <h5>{createdAt}</h5>
          <h3>{body}</h3>
          <Delete
            isMine={this.props.isMine}
          />
        </div>
      </div>

    )
  }
};

export default Peep;