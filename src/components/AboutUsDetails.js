import React, { Component } from 'react';
import { Button } from 'reactstrap';
import '../components/css/AboutUsDetails.css';
import FlexboxOurCompany from './Flexbox/FlexboxOurCompany';

class AboutUsDetails extends Component {
    render() {
        return (
            <div className="col-12 AboutUsDetails">
                <h1>about us</h1>
                <p>RoyalTrip is an indigenous e-hailing company in Nigeria with a wildspread network in 7 West African Countries. RoyalTrip’s mobile applicaion facilitates secure, comfortable and affordable ride-hailing service by connecting riders to drivers.<br></br>OUR MISSION :<br></br>We evolve to being the indigenous e-hailing platform to transport people easily and safely while prioritizing convenience, security and comfort for everyone in Nigeria, Africa and the World.<br></br>OUR VISION :<br></br>
To move the world in a smarter way.</p>
                <Button href="/" className="readMore">read more</Button>{' '}
                <h2>why join us</h2>
                <h3>There is a culture of growth, change and impact with royal trip, it is why our riders will call us secure, convenient and find us delightful, we are attentive to our user feedback to further improve the experience of our service.</h3>
                <FlexboxOurCompany />
            </div>
        )
    }
}

export default AboutUsDetails;