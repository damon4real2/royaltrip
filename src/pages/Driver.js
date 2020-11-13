import React from 'react';
import '../App.css';
import SidebarDriver from '../components/SidebarDriver';
import NavbarLogIn from '../components/NavbarLogIn';
import TermsOfService from '../components/TermsOfService';
import GetGoing from '../components/GetGoing';
import CarouselDriver from '../components/CarouselDriver'
import Earnings from '../components/Earnings'
// import Footer from '../components/Footer'


function Driver() {
    return (
        <div className="Driver">
        <SidebarDriver />
            <NavbarLogIn />
            <TermsOfService />
            <GetGoing />
            <CarouselDriver />
            <Earnings />
            {/* <Footer /> */}

        </div>
    )
}
export default Driver;