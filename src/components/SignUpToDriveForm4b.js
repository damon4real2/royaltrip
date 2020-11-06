import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import { Button } from 'reactstrap';

function SignUpToDriveForm4b() {
  return (
    <form className="SignUpToDriveForm">
    <Link to="/">
        <img className="SignUpToDriveFormLogo" src={require("../assets/images/logo.svg")} alt="RCA Logo" />
    </Link>
    <p className="enter-code">enter verification code</p>
    <label>
        <input className="enterVerificationCode" type="number" name="verification code" placeholder="" />
    </label>
    <p className="send-text">We sent a text to the phone number below.</p>
    <div className="phone-number">+2348284548717</div>
    <div className="resend">
        <Link to="/">
            Resend code
        </Link>
        </div>
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
    <p5 className="problem">Problem receiving code?</p5>
        <div className="support">
            <Link to="/">
                Support center
            </Link>
        </div>
</form>
    );
  }
export default SignUpToDriveForm4b;