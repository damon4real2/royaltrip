import React from 'react';
import "./HeroWhyJoinUsPage.css";
import FlexWhyJoinUsPage from '../Flexbox/FlexWhyJoinUsPage'

function HeroWhyJoinUsPage() {
    return (
        <div className="col-12 HeroWhyJoinUsPage">
            <h1>welcome to royaltrip, we are excited to have you here.</h1>
            <p>We launched into the market to deliver a human-friendly platform as a response to contain demands in the e-hailing ecosystem.</p>
            <div className="d-flex justify-content-center">
                <button className="find_more">find more</button>
            </div>
            <FlexWhyJoinUsPage />
        </div>
    )
}
export default HeroWhyJoinUsPage;