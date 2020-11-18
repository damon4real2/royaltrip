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
        <p className="location1"> BMTC Block 9, F.A.A.N Complex, M.M.I.A, Ikeja, Lagos State, Nigeria.</p>
      </div>
      <div className="location-details">
        <img className="location-icon2" src={require("../assets/images/2.svg")} alt="location-icon2" />
        <p className="location2">01-3438076; 07025004829 </p>
      </div>
      <div className="location-details">
        <img className="location-icon3" src={require("../assets/images/3.svg")} alt="location-icon3" />
        <p className="location3">support@royaltrips.com.ng; info@royaltrips.com.ng; </p>
      </div>
      <FreePass />
    </div>
  );
}

export default Contact;