import React from 'react';
import '../App.css';
import Navbar from '../components/Navbar';
// import SidebarHome from '../components/SidebarHome';
import Privacy from '../components/Privacy'
import Footer from '../components/Footer'


function PrivacyPolicy() {
  return (
    <>
      <Navbar /> 
      {/* <SidebarHome /> */}
      <Privacy />
      <Footer />
    
    </>
  );
}

export default PrivacyPolicy;