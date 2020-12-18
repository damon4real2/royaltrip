import React from 'react';
import '../App.css';
import NavbarFleetOwners from '../components/Navbar/NavbarFleetOwners';
// import SidebarFleetOwners from '../components/SidebarFleetOwners';
import HeroFleetOwners from '../components/Hero/HeroFleetOwners';
// import GetGoingFleetOwners from '../components/GetGoing/GetGoingFleetOwners';
// import CarouselFleetOwners from '../components/Carousel/CarouselFleetOwners'
// import EarningsFleetOwners from '../components/Earnings/EarningsFleetOwners'
// import Footer from '../components/Footer'


function FleetOwners() {
    return (
        <div className="FleetOwners">
            <NavbarFleetOwners />
            {/* <SidebarFleetOwners /> */}
            <HeroFleetOwners />
            {/* <GetGoingFleetOwners />
            <CarouselFleetOwners /> 
            <EarningsFleetOwners />  */}
            {/* <Footer /> */}

        </div>
    )
}
export default FleetOwners;