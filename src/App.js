import React from 'react';
import './App.css';

// import Header from './components/Header';
import Interface from './Interface';

import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import HomeLogin from './components/HomeLogin';


function App() {

  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/d-witter" component={Interface} />
        <Route path="/login" component={HomeLogin} />
      </BrowserRouter>
    </div>

  );
}

export default App;
