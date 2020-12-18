import React from 'react';
// import {Link} from 'react-router-dom';
import "./ScreenBusiness.css";


function ScreenBusiness () {
    return (
      <div className="container ScreenBusiness">
        <div className="d-flex justify-content-center">
          <img src={require("./assets/images/screen.png")} className="rounded" alt="..." />
        </div>
      </div>
    );
}
export default ScreenBusiness;