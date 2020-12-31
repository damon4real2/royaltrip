import React from 'react';
// import { Button } from 'reactstrap';
// import {Link} from 'react-router-dom';
import classes from "./AboutUs.css";
import sample from './assets/videos/about.mp4';
import './AboutUs.css';

function AboutUs() {
  return (
      <div className="AboutUs">
        {/* <div className="row">
            <div className="col">
              <h1>about our company</h1>
              <h2>Times and moments in life is where we find experiences, memories of love, joy and laughter. Lets help you relive them, lets get you there.</h2>
              <img className="thin-block" src={require("../assets/images/thin-slant-block.svg")} alt="rectangle" />
              <h3>Equality is the basis of genuine acceptance, we accept you for who you are, and we want to be what drives you to where you want to go.</h3>
              <h4>In pursuit of purpose? lets get you there</h4>
              <Button className="get-started-button4">get started</Button>{' '}
              <Button className="get-started-button5">learn more</Button>{' '}
            </div>
            <div className="col">
            <div id="aboutUsHero">
              <video autoPlay="autoplay" loop="loop" muted className={classes.Video} >
                  <source src={sample} type='video/mp4' />
                  Your browser does not support the video tag.
              </video>
              </div>
              <img className="man" src={require("../assets/images/box-a.svg")} alt="man" />
            </div>
          </div> */}
          <div className="container-fluid">
              <div className="row">
                <div className="col-12 mini-space"></div>
                <div className="container">
                    <div className="row">
                        <div className="col left_text">
                            <h2>about us</h2>
                            <p>Times and moments in life is where we find experiences, memories of love, joy and laughter. Lets help you relive them, lets get you there.</p>
                            <img className="thin-block" src={require("./assets/images/thin-slant-block.svg")} alt="rectangle" />
                            <div className="thin-block-letters"><p1>Equality is the basis to genuine acceptance, we accept you for who you are, and we want to be what drives you to where you want to go.</p1></div><br></br>
                            <p2>In pursuit of purpose? lets get you there</p2>
                            <div className="button-flex">
                              <button className="get-started-click">get started</button>
                              <button className="learn-more">learn more</button>
                            </div>
                        </div>
                        <div className="col right-video">
                            <video autoPlay="autoplay" loop="loop" muted className={classes.Video} >
                                <source src={sample} type='video/mp4' />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
                <div className="container whyjoinus">
                    <div className="row">
                        <div className="col-12">
                            <h3>why join us</h3>
                            <p3 className=" d-flex justify-content-center">There is a culture of growth, change and impact with royal trip, it is why our riders will call us secure, convenient and find us delightful, we are attentive to our user feedback to further improve the experience of our service.</p3>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row grid-rep">
                      <div className="col grid_rep_each"> <div className="d-flex justify-content-center">
                          <img className="first_icon" src={require("./assets/images/first_icon.svg")} alt="first icon" />
                        </div>
                        <p>pricing</p>
                        <div className="d-flex text-align-center">
                          <p5>We are committed to working to create a safe experience for members in our community.</p5>
                        </div>
                      </div>
                      <div className="col grid_rep_each">
                        <div className="d-flex justify-content-center">
                          <img className="first_icon" src={require("./assets/images/second_icon.svg")} alt="first icon" />
                        </div>
                        <p>dedicated support</p>
                        <div className="d-flex text-align-center">
                          <p5>Just so you get the best of experience, we have personnels dedicated to responding to speedily resolve issues.</p5>
                        </div>
                      </div>
                      <div className="col grid_rep_each">
                      <div className="d-flex justify-content-center">
                          <img className="first_icon" src={require("./assets/images/third_icon.svg")} alt="first icon" />
                        </div>
                        <p>fair hearing</p>
                        <div className="d-flex text-align-center">
                          <p5>We offer legal support where any party feels his or her right is being infringed upon during a Royal Trip ride.</p5>
                        </div>
                      </div>
                      <div className="col grid_rep_each">
                        <div className="d-flex justify-content-center">
                          <img className="first_icon" src={require("./assets/images/fourth_icon.svg")} alt="first icon" />
                        </div>
                        <p>incentive</p>
                        <div className="d-flex text-align-center">
                          <p5>We are glad to have you partner with us, which is why we have rewards to encourage excellence and the drive to constantly improve to serve you better.</p5>
                        </div>
                      </div>
                    </div>
                </div>
                <div className="container-fluid contactUs">
                    <div className="row">
                        <div className="col wrapped_col">
                          <div className="wrapped">
                            <img className="" src={require("./assets/images/1.svg")} alt="location-icon1" />
                            <p6>BMTC Block 9,<br></br> F.A.A.N Complex,<br></br> M.M.I.A, Ikeja, Lagos State,<br></br> Nigeria.</p6>
                          </div>
                          <div className="wrapped">
                            <img className="" src={require("./assets/images/2.svg")} alt="location-icon1" />
                            <p6>01-3438076<br></br>07025004829</p6>
                          </div>
                          <div className="wrapped">
                              <img className="" src={require("./assets/images/3.svg")} alt="location-icon1" />
                              <p6>support@royaltrips.com.ng<br></br>info@royaltrips.com.ng</p6>
                            </div>
                        </div>
                        {/* <div className="container send_container"> */}
                          <div className="col send-a-message">
                              <div className="container">
                                  <div className="col-12 d-flex justify-content-center send-theme">send your message</div>
                                  <form>
                                    <label>
                                      <input className="form-content text_mail" type="text" name="Full Name" placeholder="Your name (Required)" />
                                      <input className="form-content text_mail" type="email" name="email" placeholder="Your Email (Required)" />
                                      <input className="form-content phone_no" type="tel" name="Phone Number" placeholder="Phone Number" />
                                      <input className="form-content details_" type="text" name="details" placeholder="Give some details" />
                                    </label>
                                  </form>
                                  <div className="d-flex justify-content-center">
                                    <button className="send-a-message-button">send</button>
                                  </div>
                              </div>
                          </div>
                        {/* </div> */}
                    </div>
                </div>
              </div>
          </div>
        </div>
  )
}
export default AboutUs;