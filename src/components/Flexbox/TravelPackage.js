import React from 'react';
import "./TravelPackage.css";


function TravelPackage () {
    return (
      <div className="Protect">
          <div className="">
            <h1>Our Plans and Offerings</h1>
            <div className="d-flex justify-content-center">
             <img className="Protect_block" src={require("./assets/images/insurance_block.png")} alt="Protect block" />
            </div>
          </div>
        <div className="container TravelPackage">
          <div className="row">    
            <div className="col">
              <img className="Illustrator" src={require("./assets/images/illustrator.png")} alt="Protect block" />
            </div>
            <div className="col">
              <h2>Travel Package</h2>
              <img className="Protect-block" src={require("./assets/images/insurance_block.png")} alt="Protect block" />
              <h3>The better way to insure your health and lifestyle. Use our rewarding travel insurance plan</h3>
              <button className="learn_more">Learn more</button>
            </div>
          </div>
        </div>
      </div>
    );
}
export default TravelPackage;