import React from "react";
// import {Link} from 'react-router-dom';
import "./BenefitsFleetOwners.css";

function BenefitsFleetOwners() {
  return (
      <div className="container BenefitsFleetOwners">
          <div className="row">
              <div className="col-5">
                <h1>discover superb benefits</h1>
                <p>Improve your opportunities to earn when you list your cars with us, help you access premium services affordably by driving traffic your way.</p>
                <div className="container xtics">
                    <div className="row">
                      <div className="col">
                        <img className="benefitLeft" src={require("./assets/images/benefits_left.png")} alt="grid_img" />
                        <h1>oversee operations</h1>
                        <p>We share real-time driver information on location, trips and revenue with you. That way you are aware of businesses relating to your fleet when you need it. We also help analyse relevant information about your fleet and identify areas that require improvement.</p>
                      </div>
                      <div className="col">
                        <img className="benefitRight" src={require("./assets/images/benefits_right.png")} alt="grid_img" />
                        <h1>flexible pricing</h1>
                        <p>In addition to helping to oversee operations, you can subscribe to our lease to own option and enjoy a flexible pricing which includes reducing vehicle purchase costs, optimize fuel consumption by driving traffic to your fleet which allows you to assess quicker rides compared to other drivers and analysing driver behaviour. </p>
                      </div>
                    </div>
                </div>
              </div>
              <div className="col-7">
                <img className="benefitImg" src={require("./assets/images/benefits.png")} alt="grid_img" />
              </div>
          </div>
      </div>
  )
}
export default BenefitsFleetOwners;