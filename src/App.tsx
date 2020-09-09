import React from 'react';

import './App.css';
import useScript from "./hooks/useScript";
import logo from "./resources/logo.png";
import backdrop from "./resources/avcol.jpeg";
import faviconfooter from "./resources/favicon_footer.png";
import logofooter from "./resources/logo_footer.png";

function App() {
  useScript("https://platform.twitter.com/widgets.js");
  useScript("https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v8.0");

  return (
    <div className="App">

      <div className="marginated">
        <div className="header-bar">
          <img src={logo} className="logo" alt="kolab-logo" />
        </div>

        <div className="hero-container">
          <img className="backdrop" src={backdrop} alt="hero-backdrop" />
          <h1>An effective student <br/> collaboration tool.</h1>
        </div>

        <div className="body">
          <div className="section">
            <h2 className="title">Why Kolab? 🤔</h2>
            <p className="details">Kolab is a very unique collaborative platform, as it helps students to quickly get assistance from their peers. It's simplistic interface ensures that students are always motivated and onto their tasks.</p>
          </div>
          <div className="section">
            <h2 className="title">Key Features 📖</h2>
            <p className="details">
                <li><b>Anonymous</b> - maintaining your anonymity as a questioner, or even when answering questions. These are safe measures to avoid any cyber-bullying.</li>
                <li><b>Discussions</b> - the ability for students to have further discussions on the same thread, if they have any more queries.</li>
            </p>
          </div>
          <div className="section">
            <h2 className="title">Share with others! 🎉</h2>
            <p className="details">If you like our concept and think it'd be helpful for more students around the world, please don't forget to spread the word.</p>
            <div className="social-links">
              <div className="link">
              <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button" data-size="large" data-text="Hi everyone! Check out Kolab. It&#39;s a brilliant tool for students, and I believe all secondary schools should have it for their learning." data-hashtags="KolabWithOthers" data-show-count="false">Tweet</a>
              </div>
              <div className="link">
              <div className="fb-share-button" data-href="https://www.google.com" data-layout="button" data-size="large"><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.google.com%2F&amp;src=sdkpreparse" className="fb-xfbml-parse-ignore">Share</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="logos-bounder">
          <img className="favicon" src={faviconfooter} />
          <img className="logo" src={logofooter} />
        </div>
        <p className="credit">Developed by Shrey Tailor.</p>
      </div>
    </div>
  );
}

export default App;
