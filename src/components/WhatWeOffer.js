import React, { Component } from 'react';
// import { Button } from 'reactstrap';
import '../components/css/WhatWeOffer.css';

class WhatWeOffer extends Component {
    render() {
        return (
            <div className="col-12 WhatWeOffer">
                <h1>what we offer</h1>
                <div className="container-fluid">
                    <div className="row our_offer">
                        <div className="col-md">
                            <p className="care">we care about you</p>
                        </div>
                        <div className="col-md">
                            <p>terminal</p>
                        </div>
                        <div className="col-md">
                            <p>winflector</p>
                        </div>
                    </div>
                </div>
                <hr className="ruler" />
                <div class="container details">
                    <div class="row">
                        <div class="col-md-4">
                        <img className="mediator" src={require("../assets/images/mediator.svg")} alt="man" />
                        </div>
                        <div col-md-8>
                            <p>We prioritize our Drivers and their family members health via our Health Maintenance Organization (HMO). We want to empower you, Brand new cars are available for drivers on our Hire purchase plan. Your safety and security We help ensure our driver’s security through our in-app security alert system to allow a swift response to any emergency demand. We want to delight you. We collaborate with our drivers to create a flexible and easy payment plan for government e-hailing levy. We have Auto care drive-in centre to fix repairs at a subsidized rate. We provide you with standby legal services to help protect your basic rights. We have all RoyalTrip cars insured in favour of our drivers experience. 24/7 customer support to attend to all your needs.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WhatWeOffer;