import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import { Button, Label } from 'reactstrap';
import PropTypes, { number } from 'prop-types';
// import ReactCountryFlag from "react-country-flag";

const Input = ({ type = number, placeholder="Enter your phone number", name, value, onChange, error }) => {
    return ( 
        <input 
            className="enterNo_SignUp driver_enter"
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
            className="checkbox_SignUp driver_checkbox"
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
function LogInForm1() {
    return (
        <form className="logInForm">
            <Link to="/">
                <img className="logInFormLogo" src={require("../assets/images/logo.svg")} alt="RCA Logo" />
            </Link>
            <div className="welcome">
                <p6>Welcome Back To RoyalTrip!</p6>
                <p>Log In</p>
            </div>
            <div className="">
                <div className="flag-dropdown">
                    {/* <ReactCountryFlag 
                        defaultCountry="NG" 
                        alignOptions="left"
                        style={{
                            width: '2em',
                            height: '1em',
                        }} 
                    /> */}
                </div>
                <Label>
                    <Input />
                {/* <input className="inputPhoneNo" type="number" name="inputPhoneNo" /> */}
                </Label>
            </div>
            <div className="send">
                <p5>We'll send a text to verify your phone</p5><br />
                {/* <checkbox></checkbox> */}
                <Checkbox />
                <p7>Keep me signed in</p7>
            </div>
            <Button id="next">
                <Link to={'/LogInForm2'}>
                    next
                </Link>
            </Button>{' '}
            <div className="newNumber">Have a new number?</div>
            <div className="find">
                <Link to="/">
                    Find your account
                </Link>
            </div>
        </form>
    )
}
export default LogInForm1;