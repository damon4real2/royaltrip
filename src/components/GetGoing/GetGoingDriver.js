import React from 'react';
import {Row, Col } from 'reactstrap';
import './GetGoing.css';

function GetGoing() {
    return (
        <div className="get-going-driver">
            <div className="get-going-header-rider">
                Get going with us
            </div>
            <div className="container get-going-body-driver">
                <Row>
                    <Col>
                        <h6>Reliable earnings</h6>
                        <p>RoyalTrip's Driver app has features designed for Drivers to enjoy reliable earnings and cash out in 72 hrs</p>
                    </Col>
                    <Col>
                        <h6>A few requirements</h6>
                        <p>Get on Google play store or App Store to download the RoyalTrip Driver app, present your valid Driver ID card and all necessary vehicle documents</p>
                    </Col>
                    <Col>
                        <h6>Don’t have a car?</h6>
                        <p>RoyalTrip offers a hire purchase plan for Drivers to own a brand new car and start earning their way to self-reliance.</p>
                        {/* <img className="car_driver" src={require("./assets/images/car_driver.svg")} alt="Get going with us" /> */}
                    </Col>
                </Row>
            </div>
        </div>
    )
}
export default GetGoing;