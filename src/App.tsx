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

      <div className="hero-container">
        <img className="backdrop" src={backdrop} alt="hero-backdrop" />
        <h1>An effective student <br/> collaboration tool.</h1>
      </div>

      <div className="body">
        <div className="section">
          <h2 className="title">Why Kolab?</h2>
          <p className="details">Kolab is a very unique collaborative platform, as it helps students to quickly get assistance from their peers. It's simplistic interface ensures that students are always motivated and onto their tasks.</p>
        </div>
        <div className="section">
          <h2 className="title">Key Features</h2>
          <p className="details">
              <li><b>Anonymous</b> - maintaining your anonymity as a questioner, or even when answering questions. These are safe measures to avoid any cyber-bullying.</li>
              <li><b>Discussions</b> - the ability for students to have further discussions on the same thread, if they have any more queries.</li>
          </p>
        </div>
      </div>

    </div>
  );
}

export default App;
