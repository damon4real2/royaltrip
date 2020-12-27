import React from 'react';
// import '../App.css';
import NavbarInsurance from '../components/Navbar/NavbarInsurance';
// import SidebarInsurance from '../components/Sidebar/SidebarInsurance';
import HeroInsurance from '../components/Hero/HeroInsurance';
import Protect from '../components/Flexbox/Protect';
import Choice from '../components/Flexbox/Choice';
import TravelPackage from '../components/Flexbox/TravelPackage';
import TripPackage from '../components/Flexbox/TripPackage';
// import CarouselInsurance from '../components/Carousel/CarouselInsurance'
// import EarningsInsurance from '../components/Earnings/EarningsInsurance'
// import PreFooter from '../components/PreFooter/PreFooterInsurance'
import FooterNew from '../components/Footer/FooterNew'


function Insurance() {
    return (
        <div className="Insurance">
            <NavbarInsurance />
            {/* <SidebarInsurance /> */}
            <HeroInsurance />
            <Protect />
            <Choice />
            <TravelPackage />
            <TripPackage />
            {/* CarouselInsurance /> 
            <EarningsInsurance />  */}
            <FooterNew />
        </div>
    )
}
export default Insurance;