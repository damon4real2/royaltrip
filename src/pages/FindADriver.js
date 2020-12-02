import React from 'react';
import NavbarFindADriver from '../components/Navbar/NavbarFindADriver';
// import SidebarFindADriver from '../components/Sidebar/SidebarFindADriver';
import HeroFindADriver from '../components/Hero/HeroFindADriver';
import BorderSpacingFindADriver from '../components/BorderSpacing/BorderSpacingFindADriver';
import FlexboxFindADriver from '../components/Flexbox/FlexboxFindADriver';


function FindADriver() {
    return (
        <div className="FindADriver">
            <NavbarFindADriver />
            {/* <SidebarFindADriver /> */}
            <HeroFindADriver />
            <BorderSpacingFindADriver />
            <FlexboxFindADriver />
        </div>
    )
}
export default FindADriver;