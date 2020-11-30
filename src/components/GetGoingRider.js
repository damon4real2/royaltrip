import React from 'react';
import {Row, Col } from 'reactstrap';
import './css/GetGoingRider.css';

function GetGoing() {
    return (
        <div className="get-going">
            <div className="get-going-header-rider">
                Get going with us
            </div>
            <div className="container get-going-body">
                <Row>
                    <Col>
                        <h6>Save time and sanity.</h6>
                        <p>The RoyalTrip Rider app and its features helps saves your time and sanity to self-sufficience When you're ready, cash out within 48 Hours.</p>
                    </Col>
                    <Col>
                        <h6>If it get’s you there, it’s our app.</h6>
                        <p>You’ll need to meet the age required by law in your region, have a smart phone, get on GooglePlay or iOS to download the app, provide the required personal details and attach the vehicle document for background check.</p>
                    </Col>
                    <Col>
                        <h6>We’re commited to self reliance.</h6>
                        <p>We have you covered. With our Royalty Drive program you can become a partner, get on the road and start earning with style.</p>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
export default GetGoing;