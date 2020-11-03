import React, { Component } from "react";
import "./css/Features.css";

export class features extends Component {
  render() {
    return (
      <div id="features" className="text-center">
        <div className="features_">
          {/* <div className="col-md-10 col-md-offset-1 section-title"> */}
            {/* <h2>Features</h2> */}
          </div>
          {/* <div className="row"> */}
            {/* {this.props.data
              ? this.props.data.map((d,i) => (
                  <div  key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                    {" "}
                    <i className={d.icon}></i>
                    <h3>{d.title}</h3>
                    <p>{d.text}</p>
                  </div>
                ))
              : "Loading..."} */}
              <div className="features_grid">
            <div className="row">
            <div class="col-md-4 feature-a">
                <div className="img2">
                <div className="feature-grid">
                <div className="img-background">
                    <img className=""
                      alt="Card"
                      src={require("../assets/images/get-a-ride.svg")}
                    />
                  </div>
                      <h5>Get a ride</h5>
                      <p>Royal Trip offers a ride in minutes.</p>
                </div>
                </div>
                </div>
                <div class="col-md-4 feature-b">
                <div className="img2">
                <div className="feature-grid active">
                <div className="img-background middle">
                    <img className=""
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
                    <img
                      alt="Card"
                      src={require("../assets/images/ride-with-class.svg")}
                    />
                  </div>
                      <h5 className="ride">Ride with class</h5>
                      <p class="end">Royal Trip gives you a safe and classy ride.</p>
                </div>
                </div>
              </div>
              </div>
              </div>
            </div>
        // </div>
    // </div>
    );
  }
}

export default features;