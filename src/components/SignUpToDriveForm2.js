import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import { Button } from 'reactstrap';
import SignUpToDriveForm2b from "../components/SignUpToDriveForm2b"

function SignUpToDriveForm2() {
  return (
        <div className="SignUpToDriveForm2">
            <div className="row">
                <div className="col-7 SignUpToDrive">
                <div className="logInImg">
                        <img className='signUpToDriveImg' src={require("../assets/images/Rectangle 73 (1).svg")} alt={'sign-up'}/>
                        <Button className="signUpToDriveButton">
                            <Link to="/logIn">
                             log in
                            </Link>
                        </Button>{' '}
                    </div>   
                    <p8>Drive with RoyalTrip</p8>
                    <p9>Drive and cash out big time.</p9>
                    <img className='signUpToDriveArrow' src={require("../assets/images/Arrow 3.svg")} alt={'direction'}/>
                </div> 
                <div className="col-5">
                  <SignUpToDriveForm2b />
                </div>
            </div>
     </div>
    );
  }
export default SignUpToDriveForm2;