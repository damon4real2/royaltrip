import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Driver from './pages/Driver';
import Rider from './pages/Rider';
import logIn from './pages/LogIn';
import SignUp from './pages/SignUp';

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