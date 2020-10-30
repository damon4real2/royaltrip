import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import { Button } from 'reactstrap';
// import ReactCountryFlag from "react-country-flag";

function SignUpToDriveForm() {
    return (
        <form className="SignUpToDriveForm">
            <Link to="/">
                <img className="SignUpToDriveFormLogo" src={require("../assets/images/logo.svg")} alt="RCA Logo" />
            </Link>
            <p className="drive">drive and cash out big time!</p>
            <p className="sign-to-drive">Sign up to  drive</p>
            <p className="code-text">Let's start with your phone number-we'll text you a code to verify your phone.</p>
            <label>
                <input className="enterNo_SignUp" type="text" name="phone number" placeholder="Mobile Phone Number" />
            </label>
            <div className="checkbox_SignUp"></div>
            <div className="agreement_SignUp">I agree to RoyalTrip's terms of Service.</div>
            <Button className="applyToDrive" id="next_SignUp">
                next
            </Button>{' '}
            <p5 className="text_SignUp">Already applied?</p5>
                <div className="check">
                    <Link to="/">
                        Check the state of your application here.
                    </Link>
                </div>
        </form>
    )
}
export default SignUpToDriveForm;