import React from 'react';
// import { Button } from 'reactstrap';
import "./HeroAboutOurCompany.css";

function HeroAboutOurCompany() {
    return (
       <div className="HeroContactUs">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                         <img className="HeroAboutOurCompanyImg" src={require("./assets/images/hero.svg")} alt="Safe Vector" />
                        <div className="carousel-caption headline">
                            <h1>drive to self reliance</h1>
                            <p>Time matters in life, You make the most out of it when you have the best drive!</p>
                            <button href="/Driver" className="find-more">find more</button>
                            <div className="container">
                                <div className="row holder">
                                    <div className="col">
                                        <img src={require("./assets/images/about1.svg")} alt="First block Icon" /><br></br>
                                        <p1>Highly Secured</p1><br></br>
                                        <p2>We want you to feel secured and safe. To achieve this, we consult with Global Safety Organizations to further re-assure you of this.</p2>
                                    </div>
                                    <div className="col">
                                        <img src={require("./assets/images/about2.svg")} alt="First block Icon" /><br></br>
                                        <p1>Accountable</p1><br></br>
                                        <p2>We make sure we hold our community of Driver’s and Rider’s to high standards of Accountability.</p2>
                                    </div>
                                    <div className="col">
                                        <img src={require("./assets/images/about3.svg")} alt="First block Icon" /><br></br>
                                        <p1>Socially Inclusive</p1><br></br>
                                        <p2>We design an environment where everyone is treated equally with respect, dignity and shown a reasonable level of empathy.</p2>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HeroAboutOurCompany;