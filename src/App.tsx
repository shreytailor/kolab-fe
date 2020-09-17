/*
    React Imports (including stylesheets).
*/
import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import './App.css';

/*
    Imports for components, media.
*/
import Splash from './pages/splash/Splash';
import SignIn from './pages/signin/SignIn';
import Dashboard from './pages/dashboard/Dashboard';
import NotFound from './pages/NotFound/NotFound';


/**
 * From this file, we are managing all the routes of our application.
 */
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Splash}/>
          <Route exact path="/signin" component={SignIn}/>
          <Route exact path="/dashboard" component={Dashboard}/>
          <Route component={NotFound}/>
        </Switch>
      </Router>
    </div>
  );
}


export default App;
