import React from 'react';
import './css/Hero.css';

function Logo() {
    return (
        <div className="logo">
            <img src={require("../assets/images/logo.svg")} alt="Car" />
        </div>
    )
}
export default Logo;