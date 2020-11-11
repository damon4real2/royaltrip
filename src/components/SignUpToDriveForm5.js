import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import { Button } from 'reactstrap';
import SignUpToDriveForm5b from "./SignUpToDriveForm5b"

function SignUpToDriveForm5() {
  return (
        <div className="SignUpToDriveForm5">
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
                    <SignUpToDriveForm5b />
                </div>
            </div>
     </div>
    );
  }
export default SignUpToDriveForm5;