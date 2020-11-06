import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import { Button } from 'reactstrap';
// import ReactCountryFlag from "react-country-flag";

function LogInForm2b() {
    return (
        <form className="LogInForm">
            <Link to="/">
                <img className="logInFormLogo" src={require("../assets/images/logo.svg")} alt="RCA Logo" />
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
            <Button className="applyToDrive form2" id="next_SignUp">
                {/* next */}
                <Link to={'/LogInForm3'}>
                    next
                </Link>
            </Button>{' '}
            <p5 className="problem">Problem receiving code?</p5>
                <div className="support">
                    <Link to="/">
                        Support center
                    </Link>
                </div>
        </form>
    )
}
export default LogInForm2b;