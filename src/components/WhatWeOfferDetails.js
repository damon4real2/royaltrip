import React, { Component } from 'react';
// import { Button } from 'reactstrap';
import '../components/css/WhatWeOfferDetails.css';

class WhatWeOfferDetails extends Component {
    render() {
        return (
            <div className="col-12 WhatWeOfferDetails">
                <h1>what we offer</h1>
                <div className="container-fluid">
                    <div className="row our_offer1">
                        <div className="col-md">
                            <p className="care">the royal drive</p>
                        </div>
                        <div className="col-md">
                            <p className="drive">what drives us is you</p>
                        </div>
                    </div>
                </div>
                <hr className="ruler1" />
                <div class="container details">
                    <div class="row">
                        <div class="col-md-4">
                        <img className="mediator1" src={require("../assets/images/mediator.svg")} alt="man" />
                        </div>
                        <div className="col-md-8">
                            <p>What drives us is the wheel to build a new African narrative where business would impact social problems in communities. An African business that will build and scale on it’s own merit. it is why as a company we have chosen to be human. Because we listen, grow and listen to you again. We also ensure a thorough background check for Drivers. Our drivers go through a comprehensive screening process that guarantees excellence, safety and pleasant experience for our Riders.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WhatWeOfferDetails;