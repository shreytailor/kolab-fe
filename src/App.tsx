/*
    React Imports (including stylesheets).
*/
import React from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import './App.css';

/*
    Imports for components, media.
*/
import Splash from './pages/splash/Splash';


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Splash}/>
      </Router>
    </div>
  );
}


export default App;
