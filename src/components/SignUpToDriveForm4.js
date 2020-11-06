import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import { Button } from 'reactstrap';
import SignUpToDriveForm4b from "./SignUpToDriveForm4b"

function SignUpToDriveForm4() {
  return (
        <div className="SignUpToDriveForm4">
            <div className="row">
                <div className="col-7">
                    <div className="logInImg">
                        <img className='signUpToDriveImg' src={require("../assets/images/rca-bg.jpg")} alt={'sign-up'}/>
                        <Button className="signUpToDriveButton">
                        <Link to="/logIn">
                             log in
                            </Link>
                        </Button>{' '}
                    </div>   
                </div> 
                <div className="col-5">
                    <SignUpToDriveForm4b />
                </div>
            </div>
     </div>
    );
  }
export default SignUpToDriveForm4;