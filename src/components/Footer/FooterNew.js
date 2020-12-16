import React from "react";
import {Link} from 'react-router-dom';
import "./FooterNew.css";

function FooterNew() {
  return (
      <div className="container-fluid FooterNew">
          <div className="row">
            <div className="col-4 FooterImg">
              <Link to="/">
                <img className="" src={require("./assets/images/logo.svg")} alt="flexbox" /><br></br>
              </Link>
              <div className="app_store-google_play">
                 {/* eslint-disable-next-line */}
                <a href="https://www.apple.com/ng/ios/app-store/" target="_blank"><img className="" src={require("./assets/images/app-store.svg")} alt="flexbox" /></a>
                 {/* eslint-disable-next-line */}
                <a href="https://play.google.com/store/apps" target="_blank"><img className="" src={require("./assets/images/google-play.svg")} alt="flexbox" /><br></br></a>
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
                  <img src={require("./assets/images/youT.png")} alt="flexbox" />
                </div>
                <div class="p-2">
                  <img src={require("./assets/images/pint.png")} alt="flexbox" />
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
                        <a className="p-2" href="/">sign in</a>
                        <a className="p-2" href="/">sign up</a>
                        <a className="p-2" href="/">find a driver</a>
                        <a className="p-2" href="/">cities</a>
                    </div>
                  </div>
                  <div className="col">
                    <h1>for drivers</h1>
                    <div class="d-flex flex-column">
                      <a className="p-2" href="/">sign in</a>
                      <a className="p-2" href="/">sign up</a>
                      <a className="p-2" href="/">why join us?</a>
                      <a className="p-2" href="/">cities</a>
                    </div>
                  </div>
                  <div className="col">
                    <h1>our company</h1>
                      <div class="d-flex flex-column">
                      <a className="p-2" href="/">about us</a>
                      <a className="p-2" href="/">contact us</a>
                      <a className="p-2" href="/">FAQ</a>
                      <a className="p-2" href="/">privacy policy</a>
                    </div>
                  </div>
                  <div className="col">
                    <h1>help</h1>
                    <div class="d-flex flex-column">
                      <a className="p-2" href="/">forum</a>
                      <a className="p-2" href="/">blog</a>
                      <a className="p-2" href="/">talk to us</a>
                      <a className="p-2" href="/">help line</a>
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