import React from 'react';
import './App.css';
import Posts from './components/Posts';
import Header from './components/Header';
import SignUp from './components/Signup';


function App() {
  return (
    <div>
      <Header/>
      <SignUp/>
      <Posts/>
      
    </div>

  );
}

export default App;
