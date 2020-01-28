import React, { Component } from 'react';
import Delete from './Delete'

class Posts extends Component {
  render() {
    return (
      <div>
        {this.props.posts.map((post) =>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{post.user.handle}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{post.body}</h6>
              <p className="card-text">{post.created_at}</p>
              <Delete />
            </div>
          </div>
        )}

      </div>
    )
  }
}


export default Posts