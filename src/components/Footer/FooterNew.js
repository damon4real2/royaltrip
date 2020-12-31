import React from "react";
import {Link} from 'react-router-dom';
import "./FooterNew.css";

function FooterNew() {
  return (
      <div className="container-fluid FooterNew">
          <div className="row">
            <div className="col-4 FooterImg">
              <Link to="/">
                <img className="footer_logo" src={require("./assets/images/logo.svg")} alt="flexbox" /><br></br>
              </Link>
              <div className="app_store-google_play">
                 {/* eslint-disable-next-line */}
                <a href="https://www.apple.com/ng/ios/app-store/" target="_blank"><img className="app_store" src={require("./assets/images/app-store.svg")} alt="flexbox" /></a>
                 {/* eslint-disable-next-line */}
                <a href="https://play.google.com/store/apps" target="_blank"><img className="google_play" src={require("./assets/images/google-play.svg")} alt="flexbox" /><br></br></a>
              </div>
              <div className="question_1">
                <img src={require("./assets/images/question.png")} alt="flexbox" />
                <a href="/">help center</a>
              </div>
              <br></br>
              <div className="container social_link">
                <div class="d-flex flex-row">
                <div class="p-2">
                  {/* eslint-disable-next-line */}
                  <a href='https://web.facebook.com/Royal-Trips-107283564520818' target='_blank' aria-label='Facebook'><img src={require("./assets/images/fb.png")} alt="flexbox" /></a>
                </div>
                <div class="p-2">
                  {/* eslint-disable-next-line */}
                  <a href='https://twitter.com/RoyalTrips3' target='_blank' aria-label='Twitter'><img src={require("./assets/images/twit.png")} alt="flexbox" /></a>
                </div>
                <div class="p-2">
                  {/* eslint-disable-next-line */}
                  <a href='https://www.instagram.com/royaltrips_ng/' target='_blank' aria-label='Instagram'><img src={require("./assets/images/inst.png")} alt="flexbox" /></a>
                </div>
                <div class="p-2">
                  <a href={
                  '//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber'
                    }
                    rel='noopener noreferrer'
                    target='_blank'
                    aria-label='Youtube'
                  >
                  <img src={require("./assets/images/youT.png")} alt="flexbox" /></a>
                </div>
                <div class="p-2">
                  {/* eslint-disable-next-line */}
                  <a href='https://www.linkedin.com/company/royal-trips/about/' target='_blank' aria-label='LinkedIn'>
                  <img src={require("./assets/images/linkedIn.png")} alt="flexbox" /></a>
                </div>
              </div>
              </div>
            </div>
            <div className="col-8 FooterLinks">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <h1>for riders</h1>
                      <div class="d-flex flex-column">
                        <a className="p-2" href="/Rider">sign in</a>
                        <a className="p-2" href="/Rider">sign up</a>
                        <a className="p-2" href="/FindADriver">find a driver</a>
                        <a className="p-2" href="/CitiesForRiders">cities</a>
                    </div>
                  </div>
                  <div className="col">
                    <h1>for drivers</h1>
                    <div class="d-flex flex-column">
                      <a className="p-2" href="/Driver">sign in</a>
                      <a className="p-2" href="https://forms.gle/uHkPzawq51gFprtA9">sign up</a>
                      <a className="p-2" href="/WhyJoinUsPage">why join us?</a>
                      <a className="p-2" href="/CitiesForDrivers">cities</a>
                    </div>
                  </div>
                  <div className="col">
                    <h1>our company</h1>
                      <div class="d-flex flex-column">
                      <a className="p-2" href="/AboutOurCompany">about us</a>
                      <a className="p-2" href="/AboutOurCompany">contact us</a>
                      <a className="p-2" href="/FAQ">FAQ</a>
                      <a className="p-2" href="/PrivacyPolicy">privacy policy</a>
                      <a className="p-2" href="/FleetOwners">fleet owners</a>
                      <a className="p-2" href="/Business">business</a>
                      <a className="p-2" href="/Insurance">insurance</a>
                    </div>
                  </div>
                  <div className="col">
                    <h1>help</h1>
                    <div class="d-flex flex-column">
                      {/* eslint-disable-next-line */}
                      <a className="p-2" href="https://www.quora.com/profile/RoyalTrip" target='_blank'>forum</a>
                      {/* eslint-disable-next-line */}
                      <a className="p-2" href="https://medium.com/@royaltrip" target='_blank'>blog</a>
                      <a className="p-2" href="/AboutOurCompany">talk to us</a>
                      <a className="p-2" href="/FAQ">help line</a>
                    </div>
                  </div>
                </div>
                <div className="website_rights">&copy; 2020, Royal Trip. All rights reserved.</div>
              </div>
            </div>
          </div>
      </div>
  )
}
export default FooterNew;