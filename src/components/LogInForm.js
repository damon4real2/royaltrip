import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import { Button } from 'reactstrap';
// import ReactCountryFlag from "react-country-flag";

function Rider() {
    return (
        <form className="logInForm">
            <Link to="/">
                <img className="logInFormLogo" src={require("../assets/images/logo.svg")} alt="RCA Logo" />
            </Link>
            <div className="welcome">
                <p6>Welcome! Enter Your Number</p6>
                <p>Already riding with us or it is your first time, let us get your number.</p>
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
                <input className="inputPhoneNo" type="number" name="inputPhoneNo" />
            </div>
            <div className="send">
                <p5>We'll send a text to verify your phone</p5><br />
                <checkbox></checkbox>
                <p7>Keep me signed in</p7>
            </div>
            <Button className="applyToDrive" id="next">
                next
            </Button>{' '}
            <div className="newNumber">Have a new number?</div>
            <div className="find"><Link to="/">Find your account</Link></div>
        </form>
    )
}
export default Rider;