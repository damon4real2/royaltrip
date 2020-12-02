import React from 'react';
import '../App.css';
import NavbarLogIn from '../components/NavbarLogIn';
// import SidebarDriver from '../components/SidebarDriver';
import TermsOfService from '../components/TermsOfService';
import GetGoingDriver from '../components/GetGoing/GetGoingDriver';
import CarouselDriver from '../components/Carousel/CarouselDriver'
import EarningsDriver from '../components/Earnings/EarningsDriver'
// import Footer from '../components/Footer'


function Driver() {
    return (
        <div className="Driver">
            <NavbarLogIn />
            {/* <SidebarDriver /> */}
            <TermsOfService />
            <GetGoingDriver />
            <CarouselDriver /> 
            <EarningsDriver /> 
            {/* <Footer /> */}

        </div>
    )
}
export default Driver;