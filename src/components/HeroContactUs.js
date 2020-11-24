import React from 'react';
import { Button } from 'reactstrap';
import "./css/HeroContactUs.css";

function HeroContactUs() {
    return (
       <div className="HeroContactUs">
            <img className="HeroContactUsImg2" src={require("../assets/images/hero.svg")} alt="Safe Vector" />
            <h1>drive to self reliance</h1>
            <h2>Time matters in life, You make the most out of it when you have the best drive!</h2>
            <div>
                <Button href="/Driver" className="find-more">find more</Button>{' '}
            </div>
            <div className="joinUsGrid">
                <div className="row">
                    <div className="block-left">
                    <img src={require("../assets/images/about1.svg")} alt="First block Icon" />
                    <p1>Highly Secured</p1>
                    <p2>We want you to feel secured and safe. To achieve this, we consult with Global Safety Organizations to further re-assure you of this.</p2>
                    </div>
                     <div className="block-middle ">
                    <img src={require("../assets/images/about2.svg")} alt="Second block Icon" />
                    <p1>Accountable</p1>
                    <p2>We make sure we hold our community of Driver’s and Rider’s to high standards of Accountability.</p2>
                    </div>
                    
                    <div className="block-right">
                    <img src={require("../assets/images/about3.svg")} alt="Third block Icon" />
                    <p1>Socially Inclusive</p1>
                    <p2>We design an environment where everyone is treted equally with respect, dignity and shown a reasonable level of empathy.</p2>
                    </div> 
                </div>
            </div>
       </div>
    )
}
export default HeroContactUs;