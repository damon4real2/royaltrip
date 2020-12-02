import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Driver from './pages/Driver';
import Rider from './pages/Rider';
import logIn from './pages/LogIn';
import SignUp from './pages/SignUpToDrive';
import ApplyTo from './pages/ApplyToRide';
import FAQ from './pages/FAQ';
import ContactUs from './pages/ContactUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import AboutUs from './components/AboutUs';
import FindADriver from './pages/FindADriver';
// import SignUpToDriveForm from './components/SignUpToDriveForm2';
// import SignUpToDriveForm3 from './components/SignUpToDriveForm3';
// import signUpToDriveForm4 from './components/SignUpToDriveForm4';
// import signUpToDriveForm5 from './components/SignUpToDriveForm5';
// import LogInForm from './components/LogInForm2';
// import LogInForm3 from './components/LogInForm3';
// import RiderForm2 from './components/RiderForm2';
// import RiderForm3 from './components/RiderForm3';

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
          <Route path='/FAQ' component={FAQ} />
          <Route path='/ContactUs' component={ContactUs} />
          <Route path='/AboutUs' component={AboutUs} />
          <Route path='/PrivacyPolicy' component={PrivacyPolicy} />
          <Route path='/FindADriver' component={FindADriver} />
          <Route path='/TermsOfUse' component={TermsOfUse} />
          {/* <Route path='/signUpToDriveForm2' component={SignUpToDriveForm} />
          <Route path='/signUpToDriveForm3' component={SignUpToDriveForm3} />
          <Route path='/signUpToDriveForm4' component={signUpToDriveForm4} />
          <Route path='/signUpToDriveForm5' component={signUpToDriveForm5} />
          <Route path='/LogInForm2' component={LogInForm} />
          <Route path='/LogInForm3' component={LogInForm3} />
          <Route path='/RiderForm2' component={RiderForm2} />
          <Route path='/RiderForm3' component={RiderForm3} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;