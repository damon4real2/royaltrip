import React from 'react';
import '../App.css';
import NavbarWhyJoinUs from '../components/Navbar/NavbarWhyJoinUs';
// import SidebarWhyJoinUs from '../components/SidebarWhyJoinUs';
import HeroWhyJoinUsPage from '../components/Hero/HeroWhyJoinUsPage';
import DriverWhyJoinUs  from '../components/Driver/DriverWhyJoinUs';
import RiderWhyJoinUs  from '../components/Rider/RiderWhyJoinUs'
import CorporateWhyJoinUs  from '../components/Corporate/CorporateWhyJoinUs'
import FleetOwnersWhyJoinUs  from '../components/FleetOwners/FleetOwnersWhyJoinUs'
import FooterNew from '../components/Footer/FooterNew'


function WhyJoinUsPage() {
    return (
        <div className="WhyJoinUsPage">
            <NavbarWhyJoinUs />
            {/* <SidebarWhyJoinUs  /> */}
            <HeroWhyJoinUsPage />
            <DriverWhyJoinUs />
            <RiderWhyJoinUs /> 
            <CorporateWhyJoinUs /> 
            <FleetOwnersWhyJoinUs />
            <FooterNew />

        </div>
    )
}
export default WhyJoinUsPage;