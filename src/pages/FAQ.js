import React from 'react';
import NavbarFAQ from '../components/NavbarFAQ';
import HeroFAQ from '../components/HeroFAQ';
import FAQComponent from '../components/FAQComponent';
import Stay from '../components/Stay'
import FooterFAQ from '../components/FooterFAQ';

function FAQ() {
    return (
        <div className="FAQ">
            <NavbarFAQ />
            <HeroFAQ />
            <FAQComponent />
            <Stay />
            <FooterFAQ />
        </div>
    )
}
export default FAQ;