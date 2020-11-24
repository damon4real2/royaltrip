import React from 'react';
import {Row, Col } from 'reactstrap';
import "./css/HeroFAQ.css";

function HeroFAQ() {
  return(
        <div class="d-flex justify-content-center">
          <div className="HeroFAQ">
              <img className="img-fluid HeroFAQImg" src={require("../assets/images/Rectangle 233.svg")} alt="heroBackground" />
                <div className="col-12 d-flex justify-content-center"> 
                  <div class="carousel-caption">
                    <div className="how">How can we help?</div>
                    <label>
                        <input className="ask" type="text" name="question" placeholder="Ask a question" />
                        </label>
                    <img className="search-icon" src={require("../assets/images/question.png")} alt="question" />
                  </div>
                  <div className="popular">Popular help topics: Safety, pricing, payment, Security.</div>
                </div>
                <div className="stay-container">
                  <div className="stay">Stay in touch!</div>
                </div>
            {/* <div className="stay-container">
              <div className="how">How can we help?</div>
            <label>
              <input className="ask" type="text" name="question" placeholder="Ask a question" />
            </label>
              <img className="search-icon" src={require("../assets/images/question.png")} alt="question" />
              <div className="popular">Popular help topics: Safety, pricing, payment, Security.</div>
                <div className="stay">Stay in touch!</div>
              </div>
            </div>
          <div> */}
          <div className="container">
            <Row className="d-flex justify-content-center grid-why">
              <Col>
                  <div className="box-container">
                    <img className="box" src={require("../assets/images/box-a.svg")} alt="box-a" />
                    <h1>Using RoyalTrip</h1>
                    <p>In our community, we are warm, welcoming and hospitble. We treat everyone with equal repsect and do our best to improve our community.</p>
                  </div>
                </Col>
                <Col>
                  <div className="box-container">
                  <img className="box" src={require("../assets/images/box-b.svg")} alt="box-b" />
                  <h1>Our Priority</h1>
                  <p>Our priority is that you feel safe and comfortable in all our rides. Rest easy knowing that we pride ourselves in keeping you safe.</p>
                  </div>
                </Col>
                <Col>
                  <div className="box-container">
                  <img className="box" src={require("../assets/images/box-c.svg")} alt="box-c" />
                  <h1>Accountable</h1>
                  <p>We hold our community extremely accountable to ensure that your interest is protected and that you can freely express yourself within your right.</p>
                  </div>
                </Col>
              </Row>
            </div>
        </div>
     </div>
  
  

  )
}
export default HeroFAQ;
