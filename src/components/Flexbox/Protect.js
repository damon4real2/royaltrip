import React from 'react';
import "./Protect.css";


function Protect () {
    return (
      <div className="d-flex justify-content-center Protect">
          <div className="">
            <h1>Protecting what matters to you</h1>
            <div className="d-flex justify-content-center">
             <img className="Protect_block" src={require("./assets/images/insurance_block.png")} alt="Protect block" />
            </div>
            <p>Save health expenses and have more for other needs, We are affordable because we mean it to say you deserve a healthy lifestyle . There are plans that allow you tailor insurance package to specifics you choose, Access free medical care in the event of an accident and be reimbursed for items lost.</p>
          </div>
          <div className="">
            {/* <img className="block_insurance pull-right" src={require("./assets/images/insurance.png")} alt="top right corner position" /> */}
          </div>
      </div>
    );
}
export default Protect;