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
                <img className="grid grid1" src={require("../assets/images/about4.svg")} alt="grid-img" />
                <h1>pricing</h1>
                <h2>We are committed to working to create a safe experience for members in our community.</h2>
              </div>
              <div className="second">
              <img className="grid grid2" src={require("../assets/images/about5.svg")} alt="grid-img" />
                <h1>Mortgage Plan</h1>
                <h2>Just so you get the best of experience, we have dedicated personnel responding speedily to resolve issues and queries.</h2>
              </div>
              <div className="third">
                <img className="grid grid3" src={require("../assets/images/about6.svg")} alt="grid-img" />
                <h1>Fair Hearing</h1>
                <h2>We offer legal support where any party feels his or her right is being infringed upon during a Royal Trip ride.</h2>
              </div>
              <div className="fourth">
                <img className="grid grid4" src={require("../assets/images/about7.svg")} alt="grid-img" />
                <h1>Incentive</h1>
                <h2>We are glad to have you partner with us, which is why we have rewards to encourage excellence and the drive to constantly improve to serve you better.</h2>
              </div>
            </div>
        </div>
      </div>
  )
}
export default WhyJoinUs;