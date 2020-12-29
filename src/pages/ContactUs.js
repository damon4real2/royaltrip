import React from 'react';
import '../App.css';
import NavbarContactUs from '../components/NavbarContactUs';
// import SidebarContactUs from '../components/SidebarContactUs';
import HeroContactUs from '../components/HeroContactUs';
import BorderSpacing from '../components/BorderSpacing';
import AboutUs from '../components/AboutUs';
import WhyJoinUs from '../components/WhyJoinUs';
import Contact from '../components/Contact';
// import FooterNew from '../components/Footer/FooterNew';


function ContactUs() {
  return (
    <>
      <NavbarContactUs />
      {/* <SidebarContactUs /> */}
      <HeroContactUs />
      <BorderSpacing />
      <AboutUs />
      <WhyJoinUs />
      <Contact />
      {/* <FooterNew /> */}
    </>
  );
}

export default ContactUs;