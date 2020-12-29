import React from 'react';
import NavbarFindADriver from '../components/Navbar/NavbarFindADriver';
// import SidebarFindADriver from '../components/Sidebar/SidebarFindADriver';
import HeroFindADriver from '../components/Hero/HeroFindADriver';
import BorderSpacingFindADriver from '../components/BorderSpacing/BorderSpacingFindADriver';
import FlexboxFindADriver from '../components/Flexbox/FlexboxFindADriver';
import BorderSpacingFindADriver2 from '../components/BorderSpacing/BorderSpacingFindADriver2';
import PreFooter from '../components/PreFooter';
import FooterNew from '../components/Footer/FooterNew';

function FindADriver() {
    return (
        <div className="FindADriver">
            <NavbarFindADriver />
            {/* <SidebarFindADriver /> */}
            <HeroFindADriver />
            <BorderSpacingFindADriver />
            <FlexboxFindADriver />
            <BorderSpacingFindADriver2 />
            <PreFooter />
            <FooterNew />
        </div>
    )
}
export default FindADriver;