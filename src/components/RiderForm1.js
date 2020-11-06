import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import { Button } from 'reactstrap';
import PropTypes, { number } from 'prop-types';
// import ReactCountryFlag from "react-country-flag";

const Input = ({ type = number, placeholder="Enter your phone number", name, value, onChange, error }) => {
    return ( 
        <input 
            className="enterNo_SignUp rider_check"
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

function RiderForm1() {
    return (
        <form className="SignUpToDriveForm">
            <Link to="/">
                <img className="SignUpToDriveFormLogo" src={require("../assets/images/logo.svg")} alt="RCA Logo" />
            </Link>
            <p className="drive">welcome! enter your number</p>
            {/* <p className="sign-to-drive driver">Already with us or it is your first time, let's get your number</p> */}
            <p className="code-text riderForm">Already with us or it is your first time, let's get your number</p>
            <label>
                <Input />
                {/* <input className="enterNo_SignUp" type="text" name="phone number" placeholder="Mobile Phone Number" /> */}
            </label>
            <div className="send">
                <p5 className="send_rider_form">We'll send a text to verify your phone</p5><br />
                {/* <checkbox></checkbox> */}
                <Checkbox />
                <p7 className="keep">Keep me signed in</p7>
            </div>
            <Button id="next">
                <Link to={'/RiderForm2'}>
                    next
                </Link>
            </Button>{' '}
            <div className="newNumber rider_number">Have a new number?</div>
            <div className="find rider_find">
                <Link to="/">
                    Find your account
                </Link>
            </div>
        </form>
    )
}
export default RiderForm1;