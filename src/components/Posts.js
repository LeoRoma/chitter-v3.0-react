import React, { Component } from 'react';
import Delete from './Delete'
import Like from './Like'

class Posts extends Component {

  deletePeep = (id) => {
    this.props.deletePeep(id)
  }

  likePeep = (id) => {
    this.props.likePeep(id)
  }

  unlikePeep = (id) => {
    this.props.unlikePeep(id)
  }

  render() {
    return (
      <div>
        {this.props.posts.map((post) =>
          <div>
            <div>
              <h5>{post.user.handle}</h5>
              <h6>{post.body}</h6>
              <p>{post.created_at}</p>
              <p>Like: {post.likes.length}</p>
              <Delete
                delete={this.deletePeep.bind(this, post.id)}
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


export default Posts