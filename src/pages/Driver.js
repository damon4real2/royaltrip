import React from 'react';
import '../App.css';
import NavbarLogIn from '../components/NavbarLogIn';
// import SidebarDriver from '../components/SidebarDriver';
import TermsOfService from '../components/TermsOfService';
import GetGoing from '../components/GetGoing';
import CarouselDriver from '../components/CarouselDriver'
import Earnings from '../components/Earnings'
// import Footer from '../components/Footer'


function Driver() {
    return (
        <div className="Driver">
            <NavbarLogIn />
            {/* <SidebarDriver /> */}
            <TermsOfService />
            <GetGoing />
            <CarouselDriver /> 
            <Earnings /> 
            {/* <Footer /> */}

        </div>
    )
}
export default Driver;