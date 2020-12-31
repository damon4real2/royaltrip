import React from 'react';
import "./Fleet.css";


function Fleet () {
    return (
      <div className="container Fleet">
        <div className="row"> 
        <div className="col">
            <img src={require('./assets/images/fleet.png')} alt="Fleet_img" />
          </div>  
          <div className="col">
            <h1>Fleet tracking</h1>
            <p>To help secure driver safety, we can help fleet managers locate exactly where individual vehicles are in real time using our hourly update on driver location.</p>
          </div>
        <div className="col-12 fleet_bottom">
          <img className="" src={require('./assets/images/fleet_bottom.png')} alt="Fleet_img" />
        </div>
        </div>
      </div>
    );
}
export default Fleet;