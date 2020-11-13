import React from 'react';
import '../App.css';
import SidebarHome from '../components/SidebarHome';
import Navbar from '../components/Navbar'
import HeroSection from '../components/Hero';
import Button from '../components/Button';
import Features from '../components/Features';
import RequestRide from '../components/RequestRide';
import GetStarted from '../components/GetStarted';
// import Cards from '../components/Cards';
import AppStore from '../components/AppStore';
// import LogoFooter from '../components/LogoFooter';
import Footer from '../components/Footer';


function Home() {
  return (
    <>
      <SidebarHome />
      <Navbar />
      <HeroSection />
      <Button />
      <Features />
      <RequestRide />
      <GetStarted />
      {/* <Cards /> */}
      <AppStore />
      {/* <LogoFooter /> */}
      <Footer />
    </>
  );
}

export default Home;