import React from 'react';
// import { Button } from 'reactstrap';
import {Row, Col } from 'reactstrap';
import './css/GetGoing.css';

function GetGoing() {
    return (
        <div className="GetGoing">
            <div className="get-going-header">
                <p>
                    Get going with us
                </p>
            </div>
            <Row>
                <Col>
                    <h1>Reliable earnings</h1>
                </Col>
                <Col>
                    <h1>A few requirements</h1>
                </Col>
                <Col>
                    <h1>Don't have a car?</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p1a>The RoyalTrip driver's app and it's features helps clear your path to self sufficience. When you are ready, cash out in 48hrs.</p1a>
                </Col>
                <Col>
                    <p1>You will need to meet the age required by law in your region, have a smart phone, get on GooglePlay or iOS to download the app, provide the required personal details and attach the vehicle document for background check.</p1>
                </Col>
                <Col>
                    <p1>We have you covered with our Royalty Drive, you can become a partner, get on the road and starting earning with style.</p1>
                </Col>
            </Row>
            <img src={require("../assets/images/get-going-car.svg")} alt="get-going-car" />
        </div>
    )
}
export default GetGoing;