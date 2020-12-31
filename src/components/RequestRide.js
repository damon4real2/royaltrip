import React from 'react';
import {Row, Col } from 'reactstrap';
import "./css/RequestRide.css";

const RequestRide = (props) => {
  return (
      <div className="requestContainer">
    <Row >
      <Col sm="6" className="requestRight">
        <div className="rrhead">
          <div className="title">Together we go places, Drive easy and Drop safely.</div>
          <div className="text">We know you like to be treated fairly, so we listen. We also know you want earn more, so we prompt you on ways you can. We know you care about benefits we have to offer, so we plan in view of your health, insurance, customer support, legal and more. For people you love, you would do anything,  For those our community, we move mountains.</div>
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