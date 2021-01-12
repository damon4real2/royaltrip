import React from 'react';
// import '../App.css';
import NavbarCovid from '../components/Navbar/NavbarCovid';
import HeroCovid from '../components/Hero/HeroCovid';
import FlexCovid1 from '../components/Flexbox/FlexCovid1';
import FlexCovid2 from '../components/Flexbox/FlexCovid2';
import FlexCovid3 from '../components/Flexbox/FlexCovid3';
// import Choice from '../components/Flexbox/Choice';
// import TravelPackage from '../components/Flexbox/TravelPackage';
// import TripPackage from '../components/Flexbox/TripPackage';
// import CarouselInsurance from '../components/Carousel/CarouselInsurance'
// import EarningsInsurance from '../components/Earnings/EarningsInsurance'
// import PreFooter from '../components/PreFooter/PreFooterInsurance'
import FooterNew from '../components/Footer/FooterNew'


function Covid() {
    return (
        <div className="Covid">
            <NavbarCovid />
            <HeroCovid />
            <FlexCovid1 />
            <FlexCovid2 />
            <FlexCovid3 />
            {/* <Choice />
            <TravelPackage />
            <TripPackage /> */}
            {/* CarouselInsurance /> 
            <EarningsInsurance />  */}
            <FooterNew />
        </div>
    )
}
export default Covid;