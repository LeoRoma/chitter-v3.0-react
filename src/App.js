import React from 'react';
import './App.css';

import Interface from './Interface';
import Root from './components/Root';
import { BrowserRouter, Route } from 'react-router-dom';
import Signup from './components/Signup';


function App() {

  return (
    <div className="container">
      <BrowserRouter>
        <Route exact path="/signup" component={Signup} />
        <Route path="/chitter" component={Interface} />
      </BrowserRouter>
    </div>
  );
}

export default App;
