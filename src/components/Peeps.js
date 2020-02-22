import React, { Component } from 'react';
import Delete from './Delete'
import Like from './Like'

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
  
  componentDidMount(){
    if (this.props.userId === this.props.thisUserId){
      console.log('hi')
      this.setState({
        isHidden: false
      })
    }
    console.log(this.state.isHidden)
    console.log(this.props.thisUserId)
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

  render() {
    return (
      <div>
        {this.props.peeps.map((peep) =>
          <div>
            <div>
              <h5>{peep.user.handle}</h5>
              <h6>{peep.body}</h6>
              <h6>{this.props.userId}</h6>
              <p>{peep.created_at}</p>
              <p>Like: {peep.likes.length}</p>
              {/* {
                this.state.isHidden ?
                  null : <Delete
                    delete={this.deletePeep.bind(this, post.id, post.user.id)}
                  />
              } */}
              <Delete 
                thisUserId={this.props.thisUserId}
                userId={peep.user.id}
                delete={this.deletePeep.bind(this, peep.id)}
              />
              <Like
                like={this.likePeep.bind(this, post.id)}
                unlike={this.unlikePeep.bind(this, post.id)}
              />
            </div>
          </div>
        )}

      </div>
    )
  }
}


export default Posts;