import React from 'react';
import '../App.css';
import Navbar from '../components/Navbar';
// import SidebarHome from '../components/SidebarHome';
import TermsOfUsePolicy from '../components/TermsOfUsePolicy'
import Footer from '../components/Footer'


function TermsOfUse() {
  return (
    <>
      <Navbar /> 
      {/* <SidebarHome /> */}
      <TermsOfUsePolicy />
      <Footer />
    </>
  );
}

export default TermsOfUse;