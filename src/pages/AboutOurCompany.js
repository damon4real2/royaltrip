import React from 'react';
import '../App.css';
import NavbarAboutOurCompany from '../components/Navbar/NavbarAboutOurCompany';
// import SidebarAboutOurCompany from '../components/SidebarAboutOurCompany';
import HeroAboutOurCompany from '../components/Hero/HeroAboutOurCompany';
import AboutUs from '../components/About/AboutUs';
// import FooterNew from '../components/Footer/FooterNew';


function AboutOurCompany() {
  return (
    <>
      <NavbarAboutOurCompany />
      {/* <SidebarCAboutOurCompany /> */}
      <HeroAboutOurCompany />
      <AboutUs />
      {/* <FooterNew /> */}
    </>
  );
}

export default AboutOurCompany;