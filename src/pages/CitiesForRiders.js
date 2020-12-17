import React from 'react';
import '../App.css';
import NavbarCitiesForRiders from '../components/Navbar/NavbarCitiesForRiders';
// import SidebarCitiesForRiders from '../components/SidebarCitiesForRiders';
import CitiesRiders from '../components/Cities/CitiesRiders';
import FooterNew from '../components/Footer/FooterNew'


function CitiesForRiders() {
    return (
        <div className="CitiesForRiders">
            <NavbarCitiesForRiders />
            {/* <SidebarCitiesForRiders /> */}
            <CitiesRiders />
            <FooterNew />

        </div>
    )
}
export default CitiesForRiders;