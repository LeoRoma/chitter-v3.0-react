import React, { Component } from 'react';
import Delete from './Delete'
import Like from './Like'

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true,
      liked: ''
    }
  };

  getUserId =() => {

  }

  deletePeep = (id) => {
    this.props.deletePeep(id)
    console.log(this.state.user_id)
  };

  likePeep = (id) => {
    this.props.likePeep(id)
    console.log(this.props.liked)
    if (this.props.liked === true){
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
        {this.props.posts.map((post) =>
          <div>
            <div>
              <h5>{post.user.handle}</h5>
              <h6>{post.body}</h6>
              <h6>{this.state.liked}</h6>
              <p>{post.created_at}</p>
              <p>Like: {post.likes.length}</p>
              {/* {
                // if (this.props.posts.user_id === post.user.id){
                //   this.state.hidden === true
                //   <Delete
                //     delete={this.deletePeep.bind(this, post.id, post.user.id)}
                //   />
                // }else{
                //   this.state.hidden === null
                // }
                this.state.isHidden ?
                  null : <Delete
                    delete={this.deletePeep.bind(this, post.id, post.user.id)}
                  />
              } */}
              <Delete
                delete={this.deletePeep.bind(this, post.id, post.user.id)}
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