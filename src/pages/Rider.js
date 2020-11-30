import React from 'react';
// import '../App.css';
import NavbarRider from '../components/Navbar/NavbarRider';
// import SidebarRider from '../components/Sidebar/SidebarRider';
import HeroRider from '../components/Hero/HeroRider';
import GetGoingRider from '../components/GetGoingRider';
import CarouselRider from '../components/Carousel/CarouselRider'
import EarningsRider from '../components/Earnings/EarningsRider'
// import Footer from '../components/Footer'


function Rider() {
    return (
        <div className="Rider">
            <NavbarRider />
            {/* <SidebarRider /> */}
            <HeroRider />
            <GetGoingRider />
            <CarouselRider /> 
            <EarningsRider /> 
            {/* <Footer /> */}

        </div>
    )
}
export default Rider;