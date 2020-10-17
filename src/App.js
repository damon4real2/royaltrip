import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Driver from './components/pages/Driver';
import Rider from './components/pages/Rider';
import logIn from './components/pages/LogIn';
import SignUp from './components/pages/SignUp';

import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/driver' component={Driver} />
          <Route path='/rider' component={Rider} />
          <Route path='/logIn' component={logIn} />
          <Route path='/signUp' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;