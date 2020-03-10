import React from 'react';
import './App.css';

// import Header from './components/Header';
import Interface from './Interface';

import { BrowserRouter, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {

  return (
    <div>
      {/* <Header /> */}
      <BrowserRouter>
        <Route exact path="/" component={Signup} />
        <Route path="/d-witter" component={Interface} />
        <Route path="/login" component={Login} />
      </BrowserRouter>
    </div>

  );
}

export default App;
