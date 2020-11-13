import React from 'react';
import '../App.css';
import Sidebar from '../components/Sidebar';
import NavbarContactUs from '../components/NavbarContactUs';
import HeroContactUs from '../components/HeroContactUs';
import BorderSpacing from '../components/BorderSpacing';
import AboutUs from '../components/AboutUs';
import WhyJoinUs from '../components/WhyJoinUs';
import Contact from '../components/Contact';


function ContactUs() {
  return (
    <>
    <Sidebar />
      <NavbarContactUs />
      <HeroContactUs />
       <BorderSpacing />
    <AboutUs />
        <WhyJoinUs />
      <Contact />
    </>
  );
}

export default ContactUs;