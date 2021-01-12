import React from 'react';
// import {Link} from 'react-router-dom';
import "./FlexCovid3.css";


function FlexCovid3 () {
    return (
          <div className="container FlexCovid3">
            <div className="row FlexCovidDetails">
              <div className="col">
                <img className="d-flex align-items-left" src={require("./assets/images/corona-lady.svg")} alt="flexbox" /><br></br>
              </div>
              <div className="col">
                <h1>COVID-19 Health and Safety Precautions for</h1>
                <p>Each time our driver-partner get on the road, it is to earn and to commit to a goal. We are not ignorant of the role they play in our community; it is why we constantly care for our drivers by rewarding exceptional conduct and compliance to rider’s safety. We also have been exploring more productive ways for our drivers to earn during times such as this.
                For more information about health and safety requirements can see the NCDC information center.</p>
              </div>
              <div className="row FlexCovidDetails">
              <div className="col">
                  <h1>Embracing Safety for social inclusion</h1>
                  <p>We have members in our community who we cannot ignore, we also have a duty to ensure every member of our community. For more information about health and safety requirements, you can see the NCDC information center. Leveraging partnerships and collaborations</p>
                </div>
                <div className="col">
                  <img className="d-flex align-items-left" src={require("./assets/images/corona-mask.svg")} alt="flexbox" /><br></br>
                </div>
              </div>
              <div className="row FlexCovidDetails">
              <div className="col">
                <img className="d-flex align-items-left" src={require("./assets/images/corona-car.svg")} alt="flexbox" /><br></br>
              </div>
              <div className="col">
                <h1>Leveraging partnerships and collaborations</h1>
                <p>Knowing the strength of many outweighs the few, RoyalTrip has all her driver-partners and collaborators actively representing the interest of public health and safety by being loud on COVID-19 safety regulations. This is not in away to arouse fear, it is simply to take caution.</p>
                <p1>Read more</p1>
              </div>
              </div>
              <div className="row FlexCovidDetails">
              <div className="col">
                <h1>We keep you updated on what is needful</h1>
                <p className="story">COVID-19 news and update help us know where we are and how much Is left to be done. For us, it lets us know what we can do within our community to mitigate the risk of spread. It is why we do what we can in providing you with the latest on COVID-19 update.</p><br></br>
                {/* eslint-disable-next-line */}
                <a href="/">•	NCDC</a><br></br>
                {/* eslint-disable-next-line */}
                <a href="/">•	World Health Organization (WHO)</a><br></br>
                {/* eslint-disable-next-line */}
                <a href="/">•	Coronavirus.gov</a>
                </div>
                <div className="col">
                  <img className="d-flex align-items-left" src={require("./assets/images/corona-update.svg")} alt="flexbox" /><br></br>
                </div>
              </div>
              <div className="container d-flex align-items-left faqs">
                <div className="row">
                <h1>NCDC Health and safety guidelines</h1>
                <p>The Nigerian Centre for Disease Control have provided us with guidelines relative to the COVID-19 Pandemic. For more information, kindly visit ncdc.gov.ng</p>
              </div>
              </div>
                            <div className="container d-flex align-items-left faqs">
                <div className="row">
                  <h1>FAQs</h1>
                  <h1>How is RoyalTrip ensuring their drivers and riders safety? </h1>
<p>•	We keep a close eye on our driver-partners and riders by constantly providing in-app COVID-19 update and guidelines, we also encourage that our driver-partners and riders open up to express any complaint through our user feed back to report any form of non-compliant attitude to the COVID-19 guidelines.<br></br>
•	In Addition, we are intentional about committing our drivers to having a pack of face mask and sanitizers to further reinforce personal hygiene, this is to make provision for instances where riders do not have their facemask on and also to ensure adequate personal hygiene. </p>
                </div>
                </div>
                <div className="container d-flex align-items-left faqs">
                <div className="row">
                  <h1>What is done if any member of RoyalTrip community is exposed to COVID-19?</h1>
<p>•	We are very concerned about the health and safety of the members of our community. The moment we receive a report of any persons testing positive to COVID-19. Knowing that they would be receiving medical attention, they will not be able to use RoyalTrip till they have been Medically attended to up to the point they attain a full recovery.<br></br>
•	Consequently, we are obliged to conform to COVID-19 guidelines and Licensed health officials to confirm likely individuals who may have been I recent contact with persons being treated.</p>
                </div>
                </div>
            </div>
          </div>
    );
}
export default FlexCovid3;