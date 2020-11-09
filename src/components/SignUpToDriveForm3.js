import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import {Row, Col } from 'reactstrap';
import { Button } from 'reactstrap';

function SignUpToDriveForm3() {
  return (
        <div className="SignUpToDriveForm3">
            <div className='driverFormLogo form4'>
                <Link to="/">
                    <img src={require("../assets/images/logo.svg")} alt={'driver-logo'}/>
                </Link>
            </div>
            <div className="cash-out">drive and cash out big time!</div>
            <div className="sign-up-to-drive">Sign up to drive</div>
            <div className="awesome">Awesome! We will need more details from you to get started.</div>
            <div className="form3">
                <Row className="driver-top">
                    <Col>
                    <label>
                        <input className="license-number" type="number" name="Driver's License Number" placeholder="Driver's License Number" />
                    </label>
                    </Col>
                    <Col>
                    <label>
                        <input className="referral-code" type="number" name="Promo/Referral Code(Optional)" placeholder="Promo/Referral Code(Optional)" />
                    </label>
                    </Col>
                    <Col>
                    <label>
                        <input className="city" type="text" name="City You'll Drive In" placeholder="City You'll Drive In" />
                    </label>
                    </Col>
                </Row>
                <Row className="driver-bottom">
                    <Col>
                    <label>
                        <input className="email" type="text" name="email" placeholder="Email" />
                    </label>
                    </Col>
                </Row>
            </div>
                <Button className="form3Button">
                    <Link to={'/SignUpToDriveForm4'}>
                        submit
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
export default SignUpToDriveForm3;