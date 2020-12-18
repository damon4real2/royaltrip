import React from 'react';
import '../App.css';
import NavbarFleetOwners from '../components/Navbar/NavbarFleetOwners';
// import SidebarFleetOwners from '../components/SidebarFleetOwners';
import HeroFleetOwners from '../components/Hero/HeroFleetOwners';
import BenefitsFleetOwners from '../components/Benefits/BenefitsFleetOwners';
import Data from '../components/Flexbox/Data';
import ReduceCosts from '../components/Flexbox/ReduceCosts';
import Fleet from '../components/Flexbox/Fleet';
import FooterNew from '../components/Footer/FooterNew';


function FleetOwners() {
    return (
        <div className="FleetOwners">
            <NavbarFleetOwners />
            {/* <SidebarFleetOwners /> */}
            <HeroFleetOwners />
            <BenefitsFleetOwners />
            <Data /> 
            <ReduceCosts /> 
            <Fleet />
            <FooterNew />

        </div>
    )
}
export default FleetOwners;