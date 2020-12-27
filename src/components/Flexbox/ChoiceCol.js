import React from 'react';
import "./ChoiceCol.css";


function ChoiceCol() {
    return (
      <div className="container">
        <div className="row ChoiceCol">
        <img src={require("./assets/images/Frame.png")} alt="background icon" className="first-choice" />
          <div className="col Choice_col">
            <img src={require("./assets/images/choice-a.png")} alt="first icon" className="icons" />
            <h1>Easy claim Process</h1>
            <p1>You can submit or file for your claim in-app or from our website</p1>
          </div>
          <div className="col Choice_col">
            <img src={require("./assets/images/choice-b.png")} alt="second icon" className="icons" />
            <h1>Economical Plan Upgrade</h1>
            <p1>Conveniently afford an upgrade with a comprehensive plan for your health lifestyle</p1>
          </div>
          <div className="col Choice_col">
            <img src={require("./assets/images/choice-c.png")} alt="third icon" className="icons" />
            <h1>Personalized Plans</h1>
            <p1>Tailor insurance package to specifics you choose</p1>
          </div>
        </div>
      </div>
    );
}
export default ChoiceCol;