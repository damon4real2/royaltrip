import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Driver from './pages/Driver';
import Rider from './pages/Rider';
import logIn from './pages/LogIn';
import SignUp from './pages/SignUpToDrive';
import ApplyTo from './pages/ApplyToRide';
import SignUpToDriveForm from './components/SignUpToDriveForm2';
import SignUpToDriveForm3 from './components/SignUpToDriveForm3';
import signUpToDriveForm4 from './components/SignUpToDriveForm4';
import LogInForm from './components/LogInForm2';
import LogInForm3 from './components/LogInForm3';

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
          <Route path='/signUpToDriveForm2' component={SignUpToDriveForm} />
          <Route path='/signUpToDriveForm3' component={SignUpToDriveForm3} />
          <Route path='/signUpToDriveForm4' component={signUpToDriveForm4} />
          <Route path='/LogInForm2' component={LogInForm} />
          <Route path='/LogInForm3' component={LogInForm3} />
        </Switch>
      </Router>
    </>
  );
}

export default App;