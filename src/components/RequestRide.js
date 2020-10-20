import React from 'react';
import {Row, Col } from 'reactstrap';
import "./css/RequestRide.css";

const Example = (props) => {
  return (
      <div className="requestContainer">
    <Row >
      <Col sm="6" className="requestRight">
        <div className="rrhead">
          <div className="title">Get a ride in minutes!</div>
          <div className="text">Pick your destination, request a ride, meet your driver and enjoy the journey.</div>
        </div>
      </Col>
      {/* <Col sm="1" className=""></Col> */}
      <Col sm="5" className="ml-auto">
        <div className="rrbody">
          <img src={require("../assets/images/phone1.png")} alt="Phone" />
        </div>
      </Col>
    </Row>
    </div>
  );
};

export default Example;