import React from 'react';
// import '../App.css';
import NavbarContactUs from '../components/NavbarContactUs';
// import SidebarContactUs from '../components/SidebarContactUs';
import HeroOurCompany from '../components/Hero/HeroOurCompany';
import WhoWeAre from '../components/WhoWeAre';
import WhatWeOffer from '../components/WhatWeOffer';
import AboutUsDetails from '../components/AboutUsDetails';
import  WhatWeOfferDetails from '../components/WhatWeOfferDetails';
import Message from '../components/Message';
import MessageInput from "../components/MessageInput";
// import GetGoingRider from '../components/GetGoingRider';
// import CarouselRider from '../components/Carousel/CarouselRider'
// import EarningsRider from '../components/Earnings/EarningsRider'
import FooterNew from '../components/Footer/FooterNew'
// import '../components/css/Footer.css'


function Rider() {
    return (
        <div className="Rider">
            <NavbarContactUs />
            {/* <SidebarContactUs /> */}
            <HeroOurCompany />
            <WhoWeAre />
            <WhatWeOffer />
            <AboutUsDetails />
            <WhatWeOfferDetails />
            < Message />
            <MessageInput />
            {/* <GetGoingRider /> */}
            {/* <CarouselRider />  */}
            {/* <EarningsRider />  */}
            <FooterNew />

        </div>
    )
}
export default Rider;