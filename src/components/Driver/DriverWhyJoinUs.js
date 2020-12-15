import React from "react";
import "./DriverWhyJoinUs.css";

function DriverWhyJoinUs() {
  return (
      <div className="DriverWhyJoinUs">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>why drive?</h1>
              <h2>for our driver</h2>
              <p>- We prioritize our Drivers and their family members’ health via our Health Maintenance Organization (HMO).<br></br>
                  - Brand new cars are available for drivers on our Hire purchase plan.<br></br>
                  - We help ensure our Driver’s security through our in-app security alert system to allow swift response to any emergency demand.<br></br>
                  - We collaborate with our drivers to create a flexible and easy payment plan for government e-hailing levy.</p>
            </div>
            <div className="col top">
              <div className="top_details1">
                <img className="" src={require("./assets/images/icon1.png")} alt="flexbox" />
                <p1>We have Auto care drive-in centre to fix repairs at a subsidized rate.</p1>
              </div>
              <div className="top_details">
                <img className="" src={require("./assets/images/icon2.png")} alt="flexbox" />
                <p1>We provide you with hands-on legal services to help protect your fundamental rights.</p1>
              </div>
              <div className="top_details">
                <img className="" src={require("./assets/images/icon3.png")} alt="flexbox" />
                <p1>We have all RoyalTrip cars insured in favour to save drivers from costs incurred from collision or damages done to their cars.</p1>
              </div>
              <div className="top_details">
                <img className="" src={require("./assets/images/icon4.png")} alt="flexbox" />
                <p1>24/7 customer support to attend to all your needs.</p1>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
export default DriverWhyJoinUs;
