import React from 'react';
import '../App.css';
// import {Link} from 'react-router-dom';
import { Button } from 'reactstrap';
import SignUpToDriveForm2b from "../components/SignUpToDriveForm2b"

function SignUpToDriveForm2() {
  return (
        <div className="SignUpToDriveForm2">
            <div className="row">
                <div className="col-7">
                    <div className="logInImg">
                        <img className='signUpToDriveImg' src={require("../assets/images/rca-bg.jpg")} alt={'sign-up'}/>
                        <Button className="signUpToDriveButton">
                            log in
                        </Button>{' '}
                    </div>   
                </div> 
                <div className="col-5">
                    <SignUpToDriveForm2b />
                </div>
            </div>
     </div>
    );
  }
export default SignUpToDriveForm2;