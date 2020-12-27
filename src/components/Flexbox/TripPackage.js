import React from 'react';
import "./TripPackage.css";


function TripPackage () {
    return (
        <div className="container TripPackage">
          <div className="row">   
          <div className="col-6">
              <h2>Trip Package</h2>
              <img className="Protect-block" src={require("./assets/images/insurance_block.png")} alt="Protect block" />
              <h3>The better way to insure your health and lifestyle. Use our rewarding travel insurance plan</h3>
              <button className="learn_more">Learn more</button>
            </div> 
            <div className="col-6">
              <img className="illustrator2" src={require("./assets/images/illustrator2.png")} alt="Protect block" />
            </div>
          </div>
      </div>
    );
}
export default TripPackage;