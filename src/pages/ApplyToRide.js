import React, {Component} from 'react';
import '..';

import Background from "../assets/images/rca-bg.jpg";
import '../App.css';

var applyToRideStyle = {
//   width: "100%",
  height: "722.5px",
  backgroundImage: "url(" + Background + ")"
};

class ApplyToRide extends Component {
  render() {
    return (
        <section style={ applyToRideStyle }>
        <div className="applyToRide">
            <img src={require("../assets/images/applyToRideBgroundLogo.png")} alt="Apply To Ride Logo" />
        </div>
        </section>
    );
  }
}

export default ApplyToRide;