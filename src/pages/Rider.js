import React from 'react';
// import '../App.css';
import NavbarRider from '../components/Navbar/NavbarRider';
// import Navbar from '../components/Navbar';
import HeroRider from '../components/Hero/HeroRider';
import GetGoingRider from '../components/GetGoingRider';
import CarouselRider from '../components/Carousel/CarouselRider'
import EarningsRider from '../components/Earnings/EarningsRider'
import FooterNew from '../components/Footer/FooterNew'
// import '../components/css/Footer.css'


function Rider() {
    return (
        <div className="Rider">
            <NavbarRider />
            {/* <Navbar /> */}
            <HeroRider />
            <GetGoingRider />
            <CarouselRider /> 
            <EarningsRider /> 
            <FooterNew />

        </div>
    )
}
export default Rider;