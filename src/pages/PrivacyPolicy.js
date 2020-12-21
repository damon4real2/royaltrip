import React from 'react';
import '../App.css';
import Navbar from '../components/Navbar';
// import SidebarHome from '../components/SidebarHome';
import Privacy from '../components/Privacy'
import FooterNew from '../components/FooterNew'


function PrivacyPolicy() {
  return (
    <>
      <Navbar /> 
      {/* <SidebarHome /> */}
      <Privacy />
      <FooterNew />
    
    </>
  );
}

export default PrivacyPolicy;