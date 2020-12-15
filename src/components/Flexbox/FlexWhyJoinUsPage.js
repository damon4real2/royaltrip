import React from 'react';
// import {Link} from 'react-router-dom';
import "./FlexWhyJoinUsPage.css";


function FlexWhyJoinUsPage () {
    return (
      <div className="container">
        <div class="row FlexWhyJoinUsPage">
          <div class="col-md-4 aaa">
            <img className="d-flex align-items-center" src={require("./assets/images/why1.png")} alt="flexbox" /><br></br>
            <p3>We Are Secure</p3><br></br>
            <p2 className="d-flex align-items-center">We have measures in place built in-app for our Drivers/Riders security.</p2>
          </div>
          <div class="col-md-4 aaa">
            <img className="d-flex align-items-center" src={require("./assets/images/why2.png")} alt="flexbox" /><br></br>
            <p3>We Are Attentive</p3><br></br>
            <p2 className="d-flex align-items-center">We pay sttention to little details in every experience had on our platform to ensure we always do better,</p2>
          </div>
          <div class="col-md-4 aaa">
            <img className="d-flex align-items-center" src={require("./assets/images/why3.png")} alt="flexbox" /><br></br>
            <p3>We’re Growth Minded</p3><br></br>
            <p2 className="d-flex align-items-center">Everyone wants to be somewhere, we wish to get you there as well as help you make progress.</p2>
          </div>
        </div>
      </div>
    );
}
export default FlexWhyJoinUsPage;