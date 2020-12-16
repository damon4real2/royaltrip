import React from "react";
import "./FleetOwnersWhyJoinUs.css";

function FleetOwnersWhyJoinUs() {
  return (
      <div className="FleetOwnersWhyJoinUs col-12 container">
        <div className="row">
          <div className="col leftWhyJoinUs">
            <h1>we are reliable</h1>
            <p>fleet owners</p>
            <p1>Start earning your way to self-reliance. Begin to make money from when you sign up. When you onboard your drivers, we will provide branding materials, merchandise items and support for drivers and riders. We are ready to help you recommend drivers for your fleet, while you still remain at the helm of affairs.
              Discover Superb Benefits
              Improve your opportunities to earn when you list your cars with us, help you access premium services affordably by driving traffic your way.
              Oversee Operations
              We share real-time driver information on location, trips and revenue with you. That way you are aware of businesses relating to your fleet when you need it.
              Reduce costs
              Do not bother about Spending on advertising for your fleet, we help you with marketing to promote your business.</p1><br></br>
          <button className="getStarted">get started</button>
          </div>
          <div className="col rightWhyJoinUs">
            <img className="" src={require("./assets/images/fleet_owners.png")} alt="flexbox" />
          </div>
        </div>
      </div>
  )
}
export default FleetOwnersWhyJoinUs;
