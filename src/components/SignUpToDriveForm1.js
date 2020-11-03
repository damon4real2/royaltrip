import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import { Button } from 'reactstrap';
import PropTypes, { number } from 'prop-types';
// import ReactCountryFlag from "react-country-flag";

const Input = ({ type = number, placeholder="Enter your phone number", name, value, onChange, error }) => {
    return ( 
        <input 
            className="enterNo_SignUp"
            type = {type}
            placeholder = {placeholder}
            name = {name}
            value = {value}
            onChange = {onChange}
            autoComplete = "off"
        />
    )
}

const Checkbox = ({ type = "checkbox", name, value, onChange, }) => {
    return ( 
        <input 
            className="checkbox_SignUp"
            type = {type}
            name = {name}
            value = {value}
            onChange = {onChange}
        />
    )
}


Input.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.number.isRequired,
        PropTypes.object
    ]),
    onChange: PropTypes.func.isRequired
}

Checkbox.propTypes = {
    type: PropTypes,
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.number.isRequired,
    ]),
    onChange: PropTypes.func.isRequired
}

function SignUpToDriveForm1() {
    return (
        <form className="SignUpToDriveForm">
            <Link to="/">
                <img className="SignUpToDriveFormLogo" src={require("../assets/images/logo.svg")} alt="RCA Logo" />
            </Link>
            <p className="drive">drive and cash out big time!</p>
            <p className="sign-to-drive driver">Sign up to drive</p>
            <p className="code-text">Let's start with your phone number - we'll text you a code to verify your phone.</p>
            <label>
                <Input />
                {/* <input className="enterNo_SignUp" type="text" name="phone number" placeholder="Mobile Phone Number" /> */}
            </label>
            {/* <div className="checkbox_SignUp"></div> */}
                <Checkbox />
            <div className="agreement_SignUp">I agree to RoyalTrip's terms of Service.</div>
            <Button className="applyToDrive" id="next_SignUp">
                {/* next */}
                <Link to={'/SignUpToDriveForm2'}>
                    next
                </Link>
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
export default SignUpToDriveForm1;