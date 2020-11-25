import React from 'react';
import {Row, Col } from 'reactstrap';
import "./css/RequestRide.css";

const RequestRide = (props) => {
  return (
      <div className="requestContainer">
    <Row >
      <Col sm="6" className="requestRight">
        <div className="rrhead">
          <div className="title">A fast ride when you need it!</div>
          <div className="text">Tell us where you want to go, easy connect with your RoyalTrip Driver, and enjoy your ride.</div>
        </div>
      </Col>
      {/* <Col sm="1" className=""></Col> */}
      <Col sm="5" className="ml-auto">
        <div>
          <img className="rrbody" src={require("../assets/images/Group 158 (1) 2.svg")} alt="Phone" />
        </div>
      </Col>
    </Row>
    </div>
  );
};

export default RequestRide;