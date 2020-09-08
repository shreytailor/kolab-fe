import React from 'react';

import './App.css';
import logo from "./resources/logo.png";
import backdrop from "./resources/avcol.jpeg";

function App() {
  return (
    <div className="App">

      <div className="header-bar">
        <img src={logo} className="logo" alt="kolab-logo" />
      </div>

      <div className="banner">
        <img src={backdrop} />
      </div>

    </div>
  );
}

export default App;
