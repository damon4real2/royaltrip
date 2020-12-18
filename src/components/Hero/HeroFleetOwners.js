import React from 'react';
import "./HeroFleetOwners.css";

function HeroFleetOwners() {
    return (
      <div className="container-fluid HeroFleetOwners">
        <div className="row">
            <div className="col-5">
              <h1>Alone we can do so little; together we can do so much.</h1>
              <p>Start earning your way to self-reliance. Begin to make money from when you sign up. When you onboard your drivers, we will provide branding materials, merchandise items and support for drivers and riders. We are ready to help you recommend drivers for your fleet, while you still remain at the helm of affairs.</p>
              <button className="get-started">get started</button>
            </div>
            <div className="col-7">
              <img className="right_hero_img" src={require("./assets/images/alone.png")} alt="flexbox" />
            </div>
        </div>
      </div>
    )
}
export default HeroFleetOwners;