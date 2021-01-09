import React from 'react';
import '../App.css';
import Navbar from '../components/Navbar';
import HeroSection from '../components/Hero';
import Button from '../components/Button';
import Features from '../components/Features';
// import RequestRide from '../components/RequestRide';
import AppStore from '../components/AppStore';
import GetStarted from '../components/GetStarted';
import FooterNew from '../components/Footer/FooterNew';


function Home() {
  return (
    <>
      <Navbar /> 
      <HeroSection />
      <Button />
      <Features />
      {/* <RequestRide /> */}
      <AppStore />
      <GetStarted />
      <FooterNew />
    </>
  );
}

export default Home;