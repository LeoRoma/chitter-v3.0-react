import React, { Component } from 'react';

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

  likePeep = (id) => {
    this.props.likePeep(id)
    console.log(this.props)
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
            <Peep
              userId={peep.user.id}
              handle={peep.user.handle}
              createdAt={this.time(peep.created_at)}
              body={peep.body}
              likes={peep.likes.length}
              isMine={this.props.isMine}
              deletePeep={this.deletePeep.bind(this, peep.id)}
              likePeep={this.likePeep.bind(this, peep.id)}
              unlikePeep={this.unlikePeep.bind(this, peep.id)}
            />
          </div>
        )}

      </div>
    )
  }
}


export default Posts;