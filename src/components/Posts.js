import React from 'react';

const Posts = ({ posts, isLoaded, error }) => {
  return (
    <div>
      <center><h1>Peeps</h1></center>
      {posts.map((post) => (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{post.user.handle}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{post.body}</h6>
            <p className="card-text">{post.created_at}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Posts