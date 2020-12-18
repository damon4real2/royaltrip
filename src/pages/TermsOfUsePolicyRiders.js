import React from 'react';
import '../App.css';
import Navbar from '../components/Navbar';
// import SidebarHome from '../components/SidebarHome';
import TermsOfUsePolicyRiders from '../components/TermsOfUsePolicyRiders'
import Footer from '../components/Footer'


function TermsOfUse() {
  return (
    <>
      <Navbar /> 
      {/* <SidebarHome /> */}
      <TermsOfUsePolicyRiders />
      <Footer />
    
    </>
  );
}

export default TermsOfUse;