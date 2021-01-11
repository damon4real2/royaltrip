import React from 'react';
// import {Link} from 'react-router-dom';
import "./FlexCovid1.css";


function FlexCovid1 () {
    return (
      <div className="container FlexCovid1">
        <div className="row FlexCovidRow">
            <div className="col">
              <img className="d-flex align-items-left" src={require("./assets/images/covid-left.svg")} alt="flexbox" /><br></br>
              <h1>Keeping our riders safe</h1>
              <p>There is a need to show a high degree of carefulness when using a rideshare service. The awareness being put-out is not for us to get fearful, it is to exercise a high degree of caution. For example; not riding in a vehicle without having your facemask on, maintaining physical distance, and ensuring adequate personal hygiene.</p>
              <sub>Read more</sub>
            </div>
            <div className="col">
              <img className="d-flex align-items-left" src={require("./assets/images/covid-right.svg")} alt="flexbox" /><br></br>
              <h1>Ensuring driver safety</h1>
              <p>Each time our driver-partner get on the road, it is to earn and to commit to a goal. We are not ignorant of the role they play in our community; it is why we constantly care for our drivers by rewarding exceptional conduct and compliance to rider’s safety. We also have been exploring more productive ways for our drivers to earn during times such as this.</p>
              <sub>Read more</sub>
            </div>
        </div>
      </div>
    );
}
export default FlexCovid1;