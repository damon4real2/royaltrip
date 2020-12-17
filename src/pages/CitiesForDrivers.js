import React from 'react';
import '../App.css';
import NavbarCitiesForDrivers from '../components/Navbar/NavbarCitiesForDrivers';
// import SidebarCitiesForDrivers from '../components/SidebarCitiesForDrivers';
import CitiesDrivers from '../components/Cities/CitiesDrivers';
import FooterNew from '../components/Footer/FooterNew'


function CitiesForDrivers() {
    return (
        <div className="CitiesForDrivers">
            <NavbarCitiesForDrivers />
            {/* <SidebarCitiesForDrivers /> */}
            <CitiesDrivers />
            <FooterNew />

        </div>
    )
}
export default CitiesForDrivers;