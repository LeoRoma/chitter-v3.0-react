import React from 'react';
import './App.css';

import Home from './components/Home/Home';
import Interface from './Interface';

import { BrowserRouter, Route } from 'react-router-dom';
import Signup from './components/Signup';


function App() {

  return (
    <div className="container">
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/d-witter" component={Interface} />
        <Route path="/signup" component={Signup} />
      </BrowserRouter>
    </div>
  );
}

export default App;
