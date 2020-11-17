import React from 'react';
import { Button } from 'reactstrap';
import "./css/HeroContactUs.css";

function HeroContactUs() {
    return (
       <div className="HeroContactUs">
            <img src={require("../assets/images/hero.svg")} alt="Safe Vector" />
            <h1>drive to self reliance</h1>
            <h2>Time matters in life, You make the most out of it when you have the best drive!</h2>
            <div>
                <Button className="find-more">find more</Button>{' '}
            </div>
            <div className="joinUsGrid">
                <div className="row">
                    <div id="block" className="block-left">
                    <img src={require("../assets/images/cogs - FontAwesome.svg")} alt="First block Icon" />
                    <p1>Highly Secured</p1>
                    <p2>We want you to feel secured and safe. To achieve this, we consult with Global Safety Organizations to further re-assure you of this.</p2>
                    </div>
                    <div id="block" className="block-middle">
                    <img src={require("../assets/images/camera-retro - FontAwesome.svg")} alt="Second block Icon" />
                    <p1>Accountable</p1>
                    <p2>We make sure we hold our community of Driver’s and Rider’s to high standards of Accountability.</p2>
                    </div>
                    <div id="block" className="block-right">
                    <img src={require("../assets/images/Files Outlined - FontAwesome.svg")} alt="Third block Icon" />
                    <p1>Socially Inclusive</p1>
                    <p2>We design an environment where everyone is treted equally with respect, dignity and shown a reasonable level of empathy.</p2>
                    </div>
                </div>
            </div>
       </div>
    )
}
export default HeroContactUs;