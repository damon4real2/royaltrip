import React from 'react'
// import Navbar from "./components/Navbar";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Driver from './pages/Driver';
import Rider from './pages/Rider';
import logIn from './pages/LogIn';
import SignUp from './pages/SignUpToDrive';
import ApplyTo from './pages/ApplyToRide';
import FAQ from './pages/FAQ';
import AboutOurCompany from './pages/AboutOurCompany';
import Contact from './components/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUsePolicyRiders from './pages/TermsOfUsePolicyRiders';
import AboutUs from './components/AboutUs';
import FindADriver from './pages/FindADriver';
import OurCompany from './pages/OurCompany';
import WhyJoinUsPage from './pages/WhyJoinUsPage';
import CitiesForDrivers from './pages/CitiesForDrivers';
import CitiesForRiders from './pages/CitiesForRiders';
import Business from './pages/Business';
import FleetOwners from './pages/FleetOwners';
import Insurance from './pages/Insurance';
import Covid from './pages/Covid';
// import SignUpToDriveForm from './components/SignUpToDriveForm2';
// import SignUpToDriveForm3 from './components/SignUpToDriveForm3';
// import signUpToDriveForm4 from './components/SignUpToDriveForm4';
// import signUpToDriveForm5 from './components/SignUpToDriveForm5';
// import LogInForm from './components/LogInForm2';
// import LogInForm3 from './components/LogInForm3';
// import RiderForm2 from './components/RiderForm2';
// import RiderForm3 from './components/RiderForm3';
// import './App.css';

export default function App() {
  return (
    // <div className="App">
      // <Navbar />
    //   <h3 style={{ padding: "40px" }}>Thanks For Reading!</h3>
    // </div>
    <>
    {/* <Navbar /> */}
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/driver' component={Driver} />
        <Route path='/rider' component={Rider} />
        <Route path='/logIn' component={logIn} />
        <Route path='/signUpToDrive' component={SignUp} />
        <Route path='/applyToRide' component={ApplyTo} />
        <Route path='/FAQ' component={FAQ} />
        <Route path='/AboutOurCompany' component={AboutOurCompany} />
        <Route path='/Contact' component={Contact} />
        <Route path='/AboutUs' component={AboutUs} />
        <Route path='/PrivacyPolicy' component={PrivacyPolicy} />
        <Route path='/FindADriver' component={FindADriver} />
        <Route path='/TermsOfUsePolicyRiders' component={TermsOfUsePolicyRiders} />
        <Route path='/OurCompany' component={OurCompany} />
        <Route path='/WhyJoinUsPage' component={WhyJoinUsPage} />
        <Route path='/CitiesForDrivers' component={CitiesForDrivers} />
        <Route path='/CitiesForRiders' component={CitiesForRiders} />
        <Route path='/Business' component={Business} />
        <Route path='/FleetOwners' component={FleetOwners} />
        <Route path='/Insurance' component={Insurance} />
        <Route path='/Covid' component={Covid} />
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
