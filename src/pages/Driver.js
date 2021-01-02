import React from 'react';
import '../App.css';
import NavbarLogIn from '../components/NavbarLogIn';
import TermsOfService from '../components/TermsOfService';
import GetGoingDriver from '../components/GetGoing/GetGoingDriver';
import CarouselDriver from '../components/Carousel/CarouselDriver'
import EarningsDriver from '../components/Earnings/EarningsDriver'
import FooterNew from '../components/Footer/FooterNew'


function Driver() {
    return (
        <div className="Driver">
            <NavbarLogIn />
            <TermsOfService />
            <GetGoingDriver />
            <CarouselDriver /> 
            <EarningsDriver /> 
            <FooterNew />

        </div>
    )
}
export default Driver;