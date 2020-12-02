import React from 'react';
import '../App.css';
import Navbar from '../components/Navbar';
// import SidebarHome from '../components/SidebarHome';
import TermsOfUsePolicyRiders from '../components/TermsOfUsePolicyRiders'


function TermsOfUse() {
  return (
    <>
      <Navbar /> 
      {/* <SidebarHome /> */}
      <TermsOfUsePolicyRiders />
    
    </>
  );
}

export default TermsOfUse;