import React from 'react';
// import {Link} from 'react-router-dom';
import "./FlexBusinessPartners.css";


function FlexBusinessPartners () {
    return (
      <div class="container FlexBusinessPartners">
        <div className="col-12 d-flex justify-content-center">
            <h1>partners</h1>
        </div>
        <div class="row">
          <div class="col">
            <div className="d-flex justify-content-center">
                <img className="" src={require("./assets/images/rct.svg")} alt="flexBusiness" />
            </div>
          </div>
          <div class="col">
            <div className="d-flex justify-content-center">
                <img className="" src={require("./assets/images/rca.svg")} alt="flexBusiness" />
            </div>
          </div>
          <div class="col">
            <div className="d-flex justify-content-center">
                <img className="" src={require("./assets/images/hg.svg")} alt="flexBusiness" />
            </div>
          </div>
          <div class="col">
            <div className="d-flex justify-content-center">
                <img className="" src={require("./assets/images/ibile.svg")} alt="flexBusiness" />
            </div>
          </div>
        </div>
      </div>
    );
}
export default FlexBusinessPartners;