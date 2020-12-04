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
                            <p className="care">mediator</p>
                        </div>
                        <div className="col-md">
                            <p>terminal</p>
                        </div>
                        <div className="col-md">
                            <p>winflector</p>
                        </div>
                    </div>
                </div>
                <hr className="ruler1" />
                <div class="container details">
                    <div class="row">
                        <div class="col-md-4">
                        <img className="mediator1" src={require("../assets/images/mediator1.svg")} alt="man" />
                        </div>
                        <div col-md-8>
                            <p>Would you like your application written in <b>Delphi</b>, <b>Clipper</b>, <b>Harbour</b>, or <b>xHarbour</b> start to work with the <b>SQL</b> database in an almost magical way? What is more, do you want it to happen in no time and without any effort from your side? If the answer is yes, you have found the right solution - <b>Mediator ISAM server</b>. Mediator has been created in order to provide a fast and unprob lematic migration from the obsolete data technologies such as DBF to SQL which is becoming a standard.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WhatWeOfferDetails;