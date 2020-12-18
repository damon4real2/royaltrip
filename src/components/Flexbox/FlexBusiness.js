import React from 'react';
// import {Link} from 'react-router-dom';
import "./FlexBusiness.css";


function FlexBusiness () {
    return (
      <div class="container FlexBusiness">
        <div class="row">
          <div class="col-md-4 FlexCol">
            <div className="d-flex justify-content-center">
                <img className="" src={require("./assets/images/vector1.png")} alt="flexBusiness" />
            </div>
            <h4 className="d-flex justify-content-center">events</h4>
            <p className="">You may want to consider having a luxury ride for your next business meeting, gala  nights, award ceremonies,  workshops and other events.</p>
          </div>
          <div class="col-md-4">
            <div className="d-flex justify-content-center">
                <img className="" src={require("./assets/images/vector2.png")} alt="flexBusiness" />
            </div>
            <h4 className="d-flex justify-content-center">smart pickup</h4>
            <p className="d-flex justify-content-center">So you want to order a ride for a business partner or receive a guest from the airport. Our smart pickup is a good option for you. Here you can order a ride for that important business partner.</p>
          </div>
          <div class="col-md-4">
            <div className="d-flex justify-content-center">
                <img className="" src={require("./assets/images/vector3.png")} alt="flexBusiness" />
            </div>
            <h4 className="d-flex justify-content-center">secure drive</h4>
            <p className="">Our business platform provides driver data transparency to help the rider feel more comfortable. We also have an in-app security alert system that allows riders to share their location with already listed trusted contacts.</p>
          </div>
        </div>
      </div>
    );
}
export default FlexBusiness;