import React from 'react';
import '../App.css';
import NavbarBusiness from '../components/Navbar/NavbarBusiness';
// import SidebarBusiness from '../components/SidebarBusiness';
import HeroBusiness from '../components/Hero/HeroBusiness';
import FlexBusiness from '../components/Flexbox/FlexBusiness';
import ScreenBusiness from '../components/Screen/ScreenBusiness';
import Bookings from '../components/Bookings/Bookings';
import FlexBusinessPartners from '../components/Flexbox/FlexBusinessPartners';
import FlexboxBusiness from '../components/Flexbox/FlexboxBusiness';
import FooterNew from '../components/Footer/FooterNew';


function Business() {
    return (
        <div className="Business">
            <NavbarBusiness />
            {/* <SidebarBusiness /> */}
            <HeroBusiness />
            <FlexBusiness />
            <ScreenBusiness  />
            <Bookings />
            <FlexBusinessPartners />
            <FlexboxBusiness />
            <FooterNew />

        </div>
    )
}
export default Business;