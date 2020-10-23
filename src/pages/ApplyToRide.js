import React, {Component} from 'react';
import Background from "../assets/images/rca-bg.jpg";
import { Button } from 'reactstrap';
import '../App.css';
import {Link} from 'react-router-dom';

var applyToRideStyle = {
  backgroundImage: "url(" + Background + ")"
};

class ApplyToRide extends Component {

  render() {
    return (
        <div className="container">
          <div className="applyToRide" style={ applyToRideStyle }>
            <Link to="/">
              <img src={require("../assets/images/applyToRideBgroundLogo.png")} alt="Apply To Ride Logo" />
            </Link>
          </div>
          <div className="applyToRideLogIn">
          <Link to="/logIn">LOG IN</Link>
          {/* <link href="../pages/logIn">LOG IN</link> */}
          </div>
          <div className="applyToRidePage">
            <div className="row">
              <div className="col-7">
                <div className="applyToRidePs">
                  <p1>Drive with RoyalTrip</p1>
                  <p2>Drive and cash out big time.</p2>
                </div>
              </div>
              <div className="col-5">
                <div className="applyToRideForm">
                  <form>
                    <p1>Drive and cash out big time.</p1>
                    <br />
                    <label>
                      <p4>Enter verification code</p4>
                      <input className="inputCode" type="text" name="verification code" />
                    </label>
                    <p5>We sent a text to the phone number below.</p5>
                    <br />
                    <number>+2348284548717</number>
                    <br/>
                    <resend>
                      <Link to="/">Resend code</Link>
                      {/* Resend code */}
                    </resend>
                    <div className="applyToRideButton1">
                      <Button className="call-me">
                        <img className="call-me-img"
                          alt="Button-img"
                          src={require("../assets/images/vector.svg")}
                        />
                        Call me
                      </Button>{' '}
                      </div>
                      <div className="applyToRideButton2">
                      <Button className="text-me">
                        <img className="text-me-img"
                          alt="Button-img"
                          src={require("../assets/images/vector2.svg")}
                        />
                        Text me
                      </Button>{' '}
                    </div>
                    <br />
                    <p5 className="text">Already applied?</p5>
                    <div className="check">
                      <Link to="/">
                        Check the state of your application here.
                      </Link>
                    </div>
                    </form>
                    </div>
                  <div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default ApplyToRide;