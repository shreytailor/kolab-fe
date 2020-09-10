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
import SignIn from './pages/signin/SignIn';


/**
 * From this file, we are managing all the routes of our application.
 */
function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Splash}/>
        <Route exact path="/signin" component={SignIn}/>
      </Router>
    </div>
  );
}


export default App;
