import React from 'react';

const Posts = ({ posts, isLoaded, error }) => {
  return (
    <div>
      <center><h1>Peeps</h1></center>
      {posts.map((post) => (
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{post.user.handle}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{post.body}</h6>
            <p class="card-text">{post.created_at}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Posts