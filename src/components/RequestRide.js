import React from 'react';
import {Row, Col } from 'reactstrap';
import "./css/RequestRide.css";

const RequestRide = (props) => {
  return (
      <div className="requestContainer">
    <Row >
      <Col sm="6" className="requestRight">
        <div className="rrhead">
          <div className="title">A fast ride for when you need it!</div>
          <div className="text">Tell us where you want to go. Connect with your Royal Trip Driver and enjoy your ride.</div>
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

export default RequestRide;