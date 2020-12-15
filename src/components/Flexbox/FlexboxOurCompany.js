import React from 'react';
// import {Link} from 'react-router-dom';
import "./Flexbox.css";


function Flexbox () {
    return (
      <div class="container">
        <div class="row FlexboxOurCompany">
          <div class="col-md-4 flexbox-d justify-content-center">
            <img className="flexbox-img" src={require("./assets/images/why1.png")} alt="flexbox" />
            <h4 className="role">We are secure</h4>
            <p className="description">We have measures in place built in-app for our Drivers/Riders security.</p>
          </div>
          <div class="col-md-4 flexbox-e">
            <img className="flexbox-img" src={require("./assets/images/why2.png")} alt="flexbox" />
            <h4 className="role">We are attentive</h4>
            <p className="description">We pay attention to little details, in every experience had on our platform to ensure we always do better.</p>
          </div>
          <div class="col-md-4 flexbox-f">
            <img className="flexbox-img" src={require("./assets/images/why3.png")} alt="flexbox" />
            <h4 className="role">We are growth minded</h4>
            <p className="description">Everyone wants to be somewhere, we wish to get you there as well as help you make progress.</p>
          </div>
        </div>
      </div>
    );
}
export default Flexbox;