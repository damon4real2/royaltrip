import React from 'react';
import "./HeroInsurance.css";

function HeroInsurance() {
    return (
        <div className="HeroInsurance">
          <img className="img-fluid" src={require("./assets/images/hero_insurance.png")} alt="heroBackground" />
              <div className="carousel-caption HeroInsuranceText">
                <h1>For moments you know we care</h1>
              </div>
      </div>
    )
}
export default HeroInsurance;