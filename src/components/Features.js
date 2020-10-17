import React, { Component } from "react";
import './Features.css';

export class features extends Component {
  render() {
    return (
      <div id="features" className="text-center circle-wrapper">
        <div className="container">
          {/* <div className="col-md-10 col-md-offset-1 section-title"> */}
            <h2>Features</h2>
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
            <div className="row">
                <div className="">
                    <img
                        alt="Card"
                        src={require("../images/ride.svg")}
                    />
                    <h5>Get a ride</h5>
                    <p>Royal Trip offers you a ride in minutes.</p>
                </div>
                <div className="">
                    <img
                        alt="Card"
                        src={require("../images/price.svg")}
                    />
                    <h5>Get a ride</h5>
                    <p>Royal Trip offers you a ride in minutes.</p>
                </div>
                <div className="">
                    <img
                        alt="Card"
                        src={require("../images/class.svg")}
                    />
                    <h5>Get a ride</h5>
                    <p>Royal Trip offers you a ride in minutes.</p>
                </div>
              </div>
            </div>
        // </div>
    // </div>
    );
  }
}

export default features;