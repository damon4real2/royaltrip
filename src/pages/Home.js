import React from 'react';
import '../App.css';
import Navbar from '../components/Navbar';
import SidebarHome from '../components/SidebarHome';
import HeroSection from '../components/Hero';
import Button from '../components/Button';
import Features from '../components/Features';
import RequestRide from '../components/RequestRide';
import GetStarted from '../components/GetStarted';
import AppStore from '../components/AppStore';
import Footer from '../components/Footer';


function Home() {
  return (
    <>
      <Navbar />
      <SidebarHome />
      <HeroSection />
      <Button />
      <Features />
      <RequestRide />
      <GetStarted />
      <AppStore />
      <Footer />
    </>
  );
}

export default Home;