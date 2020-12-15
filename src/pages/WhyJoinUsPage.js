import React from 'react';
import '../App.css';
import NavbarWhyJoinUs from '../components/Navbar/NavbarWhyJoinUs';
// import SidebarWhyJoinUs from '../components/SidebarWhyJoinUs';
import HeroWhyJoinUsPage from '../components/Hero/HeroWhyJoinUsPage';
import DriverWhyJoinUs  from '../components/Driver/DriverWhyJoinUs';
import RiderWhyJoinUs  from '../components/Rider/RiderWhyJoinUs'
import CorporateWhyJoinUs  from '../components/Corporate/CorporateWhyJoinUs'
// import Footer from '../components/Footer'


function WhyJoinUsPage() {
    return (
        <div className="Driver">
            <NavbarWhyJoinUs />
            {/* <SidebarWhyJoinUs  /> */}
            <HeroWhyJoinUsPage />
            <DriverWhyJoinUs />
            <RiderWhyJoinUs /> 
            <CorporateWhyJoinUs /> 
            {/* <<Footer /> */}

        </div>
    )
}
export default WhyJoinUsPage;