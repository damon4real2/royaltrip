import React from 'react';
import {Row, Col } from 'reactstrap';
import "./css/HeroFAQ.css";

function HeroFAQ() {
  return(
    <div className="">
        <img className="HeroFAQ" src={require("../assets/images/Rectangle 233.svg")} alt="heroBackground" />
      <div className="how">How can we help?</div>
        {/* <img className="arrow" src={require("../assets/images/arrow.png")} alt="arrow" /> */}
        <label>
          <input className="ask" type="text" name="question" placeholder="Ask a question" />
        </label>
        <img className="search-icon" src={require("../assets/images/question.png")} alt="question" />
      <div className="popular">Popular help topics: Safety, pricing, payment, Security.</div>
      <div className="stay-container">
        <div className="stay">Stay in touch!</div>
      </div>
      <div>
      <Row className="grid-why">
         <Col>
            <div className="box-container">
              <img className="box" src={require("../assets/images/box-a.svg")} alt="box-a" />
              <h1>Using RoyalTrip</h1>
              <p>In our community, we are warm, welcoming and hospitable. We trteat everyone with equal respect and do our best to improve our community.</p>
            </div>
          </Col>
          <Col>
            <div className="box-container">
            <img className="box" src={require("../assets/images/box-b.svg")} alt="box-b" />
            <h1>Our Priority</h1>
            <p>In our community, we are warm, welcoming and hospitable. We trteat everyone with equal respect and do our best to improve our community.</p>
            </div>
          </Col>
          <Col>
            <div className="box-container">
            <img className="box" src={require("../assets/images/box-c.svg")} alt="box-c" />
            <h1>Accountable</h1>
            <p>In our community, we are warm, welcoming and hospitable. We trteat everyone with equal respect and do our best to improve our community.</p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}
export default HeroFAQ;