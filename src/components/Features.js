import React, { Component } from "react";
import "./css/Features.css";

export class features extends Component {
  render() {
    return (
      <div id="features" className="text-center">
        <div className="features_">
              <div className="features_grid">
            <div className="row d-flex justify-content-around">
            <div class="col-md-4 feature-a">
                <div className="img2">
                <div className="feature-grid">
                <div className="img-background first-img">
                    <img className=""
                      alt="Card"
                      src={require("../assets/images/get-a-ride.svg")}
                    />
                  </div>
                      <div className="first-feature">Get a ride</div>
                      <div className="first-feature-b">Royal Trip offers a ride in minutes.</div>
                </div>
                </div>
                </div>
                <div class="col-md-4 feature-b">
                <div className="img2">
                <div className="feature-grid active">
                <div className="img-background">
                    <img className="middle"
                      alt="Card"
                      src={require("../assets/images/best-prices.svg")}
                    />
                  </div>
                      <div className="middle-title">Best prices</div>
                      <div className="middle-text">We do not stretch you beyond what is affordable.</div>
                </div>
                </div>
                </div>
                <div class="col-md-4 feature-c">
                <div className="img2">
                <div className="feature-grid">
                <div className="img-background">
                    <img className="last"
                      alt="Card"
                      src={require("../assets/images/ride-with-class.svg")}
                    />
                  </div>
                      <div className="ride">Ride with class</div>
                      <div class="end">Royal Trip gives you a safe and classy ride.</div>
                </div>
                </div>
              </div>
              </div>
              </div>
            </div>
        </div>
    );
  }
}

export default features;