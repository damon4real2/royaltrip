import React from 'react';
import '../App.css';
import Navbar from '../components/Navbar'
import HeroSection from '../components/Hero';
import Button from '../components/Button';
import Features from '../components/Features';
import RequestRide from '../components/RequestRide';
import GetStarted from '../components/GetStarted';
// import Cards from '../components/Cards';
// import AppStore from '../components/AppStore';
// import Logo from '../components/Logo';
// import Footer from '../components/Footer';


function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Button />
      <Features />
      <RequestRide />
      <GetStarted />
      {/* <Cards /> */}
      {/* <AppStore /> */}
      {/* <Logo /> */}
      {/* <Footer /> */}
    </>
  );
}

export default Home;