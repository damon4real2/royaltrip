import React from 'react';
// import {Row, Col } from 'reactstrap';
import { Button } from 'reactstrap';
import "./HeroRider.css";

function HeroRider() {
    return (
        <div class="d-flex">
        <div className="HeroRider">
            <img className="HeroRiderImg" src={require("./assets/images/hero-rider-background.svg")} alt="heroBackground" />
              <div className="col-12 text-align-left HeroRiderText"> 
                <div className="carousel-caption">
                  <h1>ride with class to self reliance</h1>
                  <h2>We go your way, we make it safe, secure and affordable.</h2>
                  <label>
                    <input className="enterNoRider" type="text" name="phone number" placeholder="Enter Mobile Phone Number" />
                </label>
                <Button className="sign-up-rider">Sign up to ride</Button>{' '}
                </div>
              </div>
      </div>
   </div>
    )
}
export default HeroRider;