import React, { Component } from 'react';
import Delete from './Delete'

class Posts extends Component {

  deletePeep = (id) => {

    this.props.deletePeep(id)
  }

  render() {
    return (
      <div>
        {this.props.posts.map((post) =>
          <div>
            <div>
              <h5>{post.user.handle}</h5>
              <h6>{post.body}</h6>
              <h6>{post.id}</h6>
              <p>{post.created_at}</p>
              <Delete
                delete={this.deletePeep.bind(this, post.id)}
              />
            </div>
          </div>
        )}

      </div>
    )
  }
}


export default Posts