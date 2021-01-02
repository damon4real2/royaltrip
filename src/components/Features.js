import React, { Component } from "react";
import "./css/Features.css";

export class features extends Component {
  render() {
    return (
      <div className="container">
          <div className="row">
              <div className="col">
                <div className="d-flex justify-content-center">
                  <img className=""
                      alt="Card"
                      src={require("../assets/images/get-a-ride.svg")}
                    />
                </div>
                  <p1 className="d-flex justify-content-center features1">Order your trip</p1><br></br>
                  <p2 className="d-flex justify-content-center features2">RoyalTrip offers a ride in minutes.</p2>
              </div>
              <div className="col mid-center">
              <div className="d-flex justify-content-center">
                  <img className="active_img"
                      alt="Card"
                      src={require("../assets/images/best-prices.svg")}
                    />
                </div>
                  <p1 className="d-flex justify-content-center features1">Best prices</p1><br></br>
                  <p2 className="d-flex justify-content-center features2">We do not stretch you beyond what is affordable.</p2>
              </div>
              <div className="col">
              <div className="d-flex justify-content-center">
                  <img className=""
                      alt="Card"
                      src={require("../assets/images/ride-with-class.svg")}
                    />
                </div>
                  <p1 className="d-flex justify-content-center features1">Ride with class</p1><br></br>
                  <p2 className="d-flex justify-content-center features2">RoyalTrip gives you a safe, comfortable and affordable ride with class.</p2>
              </div>
          </div>
      </div>
    );
  }
}

export default features;