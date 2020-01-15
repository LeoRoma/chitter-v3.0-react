import React from 'react';
import './App.css';

import Header from './components/Header';
import Posts from './components/Posts';
import PostPeep from './components/PostPeep'
import SignUp from './components/Signup';


function App() {
  return (
    <div>
      <Header />
      <SignUp />
      <PostPeep />
      <Posts />

    </div>

  );
}

export default App;
