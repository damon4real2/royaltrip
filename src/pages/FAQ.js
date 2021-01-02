import React from 'react';
import NavbarFAQ from '../components/NavbarFAQ';
// import SidebarFAQ from '../components/SidebarFAQ';
import HeroFAQ from '../components/HeroFAQ';
import FAQComponent from '../components/FAQComponent';
import Stay from '../components/Stay'
import FooterNew from '../components/Footer/FooterNew';

function FAQ() {
    return (
        <div className="FAQ">
            <NavbarFAQ />
            {/* <SidebarFAQ /> */}
            <HeroFAQ />
            <FAQComponent />
            <Stay />
            <FooterNew />
        </div>
    )
}
export default FAQ;