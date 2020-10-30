import React from 'react';
import './css/LogoFooter.css';

function logoFooter() {
    return (
        <div className="logo-parent">
            <img className="bottom-logo" src={require("../assets/images/logo.svg")} alt="logo-footer" />
        </div>
    )
}
export default logoFooter;