import React from 'react';
import '../App.css';
import NavbarLogIn from '../components/NavbarLogIn';
import TermsOfService from '../components/TermsOfService';
import GetGoing from '../components/GetGoing';


function Driver() {
    return (
        <>
            <NavbarLogIn />
            <TermsOfService />
            <GetGoing />
            
        </>
    )
}
export default Driver;