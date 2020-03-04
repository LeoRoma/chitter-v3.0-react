import React, { Component } from 'react';
// import Delete from './Delete;'
import Like from './Like';
import Peep from './Peep';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true,
      liked: '',
      showDeleteBtn: []
    }
  };

  deletePeep = (id) => {
    this.props.deletePeep(id)
  };

  componentDidMount() {
    if (this.props.userId === this.props.thisUserId) {
      console.log('hi')
      this.setState({
        isHidden: false
      })
    }
  }

  likePeep = (id) => {
    this.props.likePeep(id)
    console.log(this.props)
    if (this.props.liked === true) {
      this.setState({
        liked: 'You liked this peep'
      })
    }
    console.log(this.props.userId)
  };

  unlikePeep = (id) => {
    this.props.unlikePeep(id)
  };

  time = (timestamp) => {
    const date = timestamp.slice(0, 10);
    const time = timestamp.slice(11, 19);
    const newTime = date + ' @ ' + time;
    return newTime;
  }

  render() {
    const peeps = this.props.peeps;
    return (
      <div>
        {peeps.map((peep) =>

          <div>
            <Peep key={peep.id}
              handle={peep.user.handle}
              createdAt={this.time(peep.created_at)}
              body={peep.body}
            />

            {/* <h5>{peep.user.handle}</h5>
              <h6>{peep.body}</h6>
              <h6>{this.props.userId}</h6>
              <p>{peep.created_at}</p>
              <p>Like: {peep.likes.length}</p> */}

            {/* <Delete
                thisUserId={this.props.thisUserId}
                userId={peep.user.id}
                delete={this.deletePeep.bind(this, peep.id)}
              /> */}
            {/* <Like
                like={this.likePeep.bind(this, peep.id)}
                unlike={this.unlikePeep.bind(this, peep.id)}
              /> */}

          </div>
        )}

      </div>
    )
  }
}


export default Posts;