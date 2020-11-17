import React from 'react';
import FreePass from '../components/FreePass';
import './css/Contact.css';


function Contact() {
  return (
    <div className="Contact">
      <h1>contact us</h1>
      <h2>BMTC Block 9, F.A.A.N Complex, Murtala Mohammed International Airport, Ikeja, Lagos State, Nigeria.</h2>
      <div className="location-details">
        <img className="location-icon1" src={require("../assets/images/1.svg")} alt="location-icon1" />
        <p className="location1">2783 Terry LaneOrlando, FL 32805 </p>
      </div>
      <div className="location-details">
        <img className="location-icon2" src={require("../assets/images/2.svg")} alt="location-icon2" />
        <p className="location2">1800 - 456 - 75001800 - 456 - 7600</p>
      </div>
      <div className="location-details">
        <img className="location-icon3" src={require("../assets/images/3.svg")} alt="location-icon3" />
        <p className="location3">robertprice@gmail.comnig saran22@gmail.com</p>
      </div>
      <FreePass />
    </div>
  );
}

export default Contact;