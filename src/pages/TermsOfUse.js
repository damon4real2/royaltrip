import React from 'react';
import '../App.css';
import Navbar from '../components/Navbar';
// import SidebarHome from '../components/SidebarHome';
import TermsOfUsePolicy from '../components/TermsOfUsePolicy'
import FooterNew from '../components/Footer/FooterNew'


function TermsOfUse() {
  return (
    <>
      <Navbar /> 
      {/* <SidebarHome /> */}
      <TermsOfUsePolicy />
      <FooterNew />
    </>
  );
}

export default TermsOfUse;