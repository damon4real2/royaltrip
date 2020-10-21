import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Driver from './pages/Driver';
import Rider from './pages/Rider';
import logIn from './pages/LogIn';
import SignUp from './pages/SignUpToDrive';
import ApplyTo from './pages/ApplyToRide';

import './App.css';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/driver' component={Driver} />
          <Route path='/rider' component={Rider} />
          <Route path='/logIn' component={logIn} />
          <Route path='/signUpToDrive' component={SignUp} />
          <Route path='/applyToRide' component={ApplyTo} />
        </Switch>
      </Router>
    </>
  );
}

export default App;