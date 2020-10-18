import React from 'react';
import '../App.css';
import HeroSection from '../components/Hero';
import Button from '../components/Button';
import Features from '../components/Features';
import RequestRide from '../components/RequestRide';
import Cards from '../components/Cards';
import AppStore from '../components/AppStore';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <Button />
      <Features />
      <RequestRide />
      <Cards />
      <AppStore />
      <Footer />
    </>
  );
}

export default Home;