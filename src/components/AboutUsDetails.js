import React, { Component } from 'react';
import { Button } from 'reactstrap';
import '../components/css/AboutUsDetails.css';
import FlexboxOurCompany from './Flexbox/FlexboxOurCompany';

class AboutUsDetails extends Component {
    render() {
        return (
            <div className="col-12 AboutUsDetails">
                <h1>about us</h1>
                <p>OTC S.A. company was founded in 1995 by employees of IT and Telecommunication Department of the University of Science and Technology in Cracow. From the beginning of its activities, it has been specializing in creating software tools for relational databases and xBase compilers. The main area of its activity is providing solutions which would enable migration to new, safe and effective technologies for everyone who develops and uses applications written in Borland Delphi, CA-Clipper, Harbour or xHarbour.</p>
                <Button href="/" className="readMore">read more</Button>{' '}
                <h2>why join us</h2>
                <h3>There is a culture of growth, change and impact with royal trip, it is why our riders will call us secure, convenient and find us delightful, we are attentive to our user feedback to further improve the experience of our service.</h3>
                <FlexboxOurCompany />
            </div>
        )
    }
}

export default AboutUsDetails;