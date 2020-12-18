import React from 'react';
import "./HeroBusiness.css";

function HeroBusiness() {
    return (
      <div class="d-flex">
        <div className="HeroBusiness">
          <img className="" src={require("./assets/images/business.png")} alt="heroBackground" />
              <div className="carousel-caption HeroBusinessText">
                <h1>Great things start with a reliable ride</h1>
                <h2>RoyalTrip Business is distinguished from other Ride offerings. We offer flexible plans to give you convenient business trips.</h2>
                <button className="business_get_started">get started</button>
              </div>
        </div>
      </div>
    )
}
export default HeroBusiness;