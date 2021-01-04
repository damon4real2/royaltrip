import React from 'react';
// import {Link} from 'react-router-dom';
import "./FlexBusinessPartners.css";


function FlexBusinessPartners () {
    return (
      <div className="container-fluid FlexboxBusinessPartners">
          <div className="col-12 d-flex justify-content-center">
              <h1>partners</h1>
          </div>
          <div className="Message d-flex justify-content-around">
          <img className="" src={require("./assets/images/rct.svg")} alt="man" />
          <img className="" src={require("./assets/images/rca.svg")} alt="man" />
          <img className="" src={require("./assets/images/hg.svg")} alt="man" />
          <img className="" src={require("./assets/images/ibile.svg")} alt="man" />
        </div>
      </div>
    );
}
export default FlexBusinessPartners;