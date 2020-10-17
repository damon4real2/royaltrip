import React from 'react';
import '../../App.css';
import HeroSection from '../Hero';
import Button from '../Button';
import Features from '../Features';
import Cards from '../Cards';
import AppStore from '../AppStore';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <Button />
      <Features />
      <Cards />
      <AppStore />
      <Footer />
    </>
  );
}

export default Home;