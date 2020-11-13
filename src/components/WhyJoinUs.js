import React from 'react';
import './css/WhyJoinUs.css';

function WhyJoinUs() {
  return (
      <div className="WhyJoinUs">
        <h3>why join us</h3>
        <p>There is a culture of growth, change and impact with royal trip, it is why our riders will call us secure, convenient and find us delightful, we are attentive to our user feedback to further improve the experience of our service.</p>
        <div className="whyJoinUsGrid">
            <div className="row grid-whyJoinUs">
              <div className="first">
                <img className="grid grid1" src={require("../assets/images/why-grid1.svg")} alt="grid-img" />
                <h1>pricing</h1>
                <h2>We are committed to working to create a safe experience for members in our community.</h2>
              </div>
              <div className="second">
              <img className="grid grid2" src={require("../assets/images/why-grid2.svg")} alt="grid-img" />
                <h1>Mortage Plan</h1>
                <h2>Just so you get the best of experience, we have personnels dedicated to responding to speedily resolve issues.</h2>
              </div>
              <div className="third">
                <img className="grid grid3" src={require("../assets/images/why-grid3.svg")} alt="grid-img" />
                <h1>Legal Support</h1>
                <h2>With Royal Trips, we have a plan that can help you own...</h2>
              </div>
              <div className="fourth">
                <img className="grid grid4" src={require("../assets/images/why-grid4.svg")} alt="grid-img" />
                <h1>Incentive</h1>
                <h2>We want to esure that the legal rights of members in our community is rightly protected to protect our mmbers from...</h2>
              </div>
            </div>
        </div>
      </div>
  )
}
export default WhyJoinUs;