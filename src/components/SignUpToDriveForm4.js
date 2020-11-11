import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import {Row, Col } from 'reactstrap';
import { Button } from 'reactstrap';

function SignUpToDriveForm4() {
  return (
        <div className="SignUpToDriveForm4">
            <div className='driverFormLogo form4'>
                <Link to="/">
                    <img src={require("../assets/images/logo.svg")} alt={'driver-logo'}/>
                </Link>
            </div>
            <div className="cash-out">Please confirm details below!</div>
            <div className="sign-up-to-drive">Sign up to drive</div>
            <div className="awesome">Awesome! We will need more details from you to get started.</div>
            <div className="form3">
                <Row className="driver-top">
                    <Col>
                    <label>
                        <input className="first-name" type="text" name="first name" placeholder="First Name" />
                    </label>
                    </Col>
                    <Col>
                    <label>
                    <input className="last-name" type="text" name="last name" placeholder="Last Name" />                    </label>
                    </Col>
                    <Col>
                    <label>
                        <input className="email_next" type="text" name="email" placeholder="Email" />
                    </label>
                    </Col>
                </Row>
                <Row className="driver-middle">
                    <Col>
                    <label>
                        <input className="license-number_next" type="number" name="license number" placeholder="Driver's License Number" />
                    </label>
                    </Col>
                    <Col>
                    <label>
                        <input className="expiry-date" type="number" name="number" placeholder="Expiry Date" />
                    </label>
                    </Col>
                     <Col>
                    <label>
                        <input className="state-of-issue" type="name" name="text" placeholder="State of Issue" />
                    </label>
                    </Col>
                </Row>
                <Row className="driver-end">
                    <Col>
                    <label>
                        <input className="birth-date" type="number" name="number" placeholder="Birth Date" />
                    </label>
                    </Col>
                    <Col>
                    <label>
                        <input className="city" type="text" name="City You'll Drive In" placeholder="City You'll Drive In" />
                    </label>
                    </Col>
                </Row>
            </div>
                <Button className="form3Button2">
                    <Link to={'/SignUpToDriveForm5'}>
                        back
                    </Link>
                </Button>{' '}
                <Button className="form3Button3">
                    <Link to={'/SignUpToDriveForm5'}>
                        confirm
                    </Link>
                </Button>{' '}
                <div className="already">Already applied or already a driver?</div>
                <div className="log-in">
                    <Link to={'/logIn'}>
                        Log In
                    </Link>
                </div>
            {/* <div className="row">
                <div className="col-7">
                    <div className="logInImg">
                        <Button className="signUpToDriveButton">
                            log in
                        </Button>{' '}
                    </div>   
                </div> 
                <div className="col-5">
                </div>
            </div> */}
     </div>
    );
  }
export default SignUpToDriveForm4;