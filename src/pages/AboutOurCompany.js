import React from 'react';
import '../App.css';
import NavbarAboutOurCompany from '../components/Navbar/NavbarAboutOurCompany';
// import SidebarAboutOurCompany from '../components/SidebarAboutOurCompany';
import HeroAboutOurCompany from '../components/Hero/HeroAboutOurCompany';
import AboutUs from '../components/About/AboutUs';
// import BorderSpacing from '../components/BorderSpacing';
// import WhyJoinUs from '../components/WhyJoinUs';
// import Contact from '../components/Contact';
// import FooterNew from '../components/Footer/FooterNew';


function AboutOurCompany() {
  return (
    <>
      <NavbarAboutOurCompany />
      {/* <SidebarCAboutOurCompany /> */}
      <HeroAboutOurCompany />
      <AboutUs />
      {/*<BorderSpacing />
      <WhyJoinUs />
      <Contact /> */}
      {/* <FooterNew /> */}
    </>
  );
}

export default AboutOurCompany;