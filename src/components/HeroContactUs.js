import React from 'react';
import { Button } from 'reactstrap';
import "./css/HeroContactUs.css";

function HeroContactUs() {
    return (
       <div className="HeroContactUs">
            <img src={require("../assets/images/hero.svg")} alt="Safe Vector" />
            <h1>drive to self reliance</h1>
            <h2>We are on a drive to changing the experience of e-hailing services to serve you</h2>
            <div>
                <Button className="find-more">find more</Button>{' '}
            </div>
            <div className="joinUsGrid">
                <div className="row">
                    <div className="block-left">
                    <img src={require("../assets/images/cogs - FontAwesome.svg")} alt="First block Icon" />
                    <p1>Easily Customizable</p1>
                    <p2>Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor urna.</p2>
                    </div>
                    <div className="block-middle">
                    <img src={require("../assets/images/camera-retro - FontAwesome.svg")} alt="Second block Icon" />
                    <p1>Hi-res Image</p1>
                    <p2>Kogi Cosby sweater ethical squid irony disrupt, organic tote bag.</p2>
                    </div>
                    <div className="block-right">
                    <img src={require("../assets/images/Files Outlined - FontAwesome.svg")} alt="Third block Icon" />
                    <p1>Well Documented</p1>
                    <p2>Bushwick meh Blue Bottle pork belly mustache skateboard 3 wolf moon.</p2>
                    </div>
                </div>
            </div>
       </div>
    )
}
export default HeroContactUs;