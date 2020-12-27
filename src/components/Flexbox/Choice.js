import React from 'react';
import ChoiceCol from './ChoiceCol';
import "./Choice.css";


function Choice () {
    return (
      <div className="Protect">
          <div className="">
            <h1>Choose us Now</h1>
            <div className="d-flex justify-content-center">
             <img className="Protect_block" src={require("./assets/images/insurance_block.png")} alt="Protect block" />
            </div>
          </div>
          <div className="">
            {/* <img className="block_insurance pull-right" src={require("./assets/images/insurance.png")} alt="top right corner position" /> */}
            
          </div>
          <ChoiceCol />
      </div>
    );
}
export default Choice;