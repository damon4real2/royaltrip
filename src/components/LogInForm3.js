import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import { Button } from 'reactstrap';
import LogInForm3b from "./LogInForm3b"

function LogInForm3() {
  return (
        <div className="LogInForm3">
             <div className="row">
                <div className="col-7">
                <div className="logInImg">
                            <img className='applyToDriveImg' src={require("../assets/images/form-display-avatar.svg")} alt={'log-in'}/>
                            <Button className="applyToDrive">
                                <Link to="/SignUpToDrive">
                                    Apply to Drive
                                </Link>
                            </Button>{' '}
                        </div>   
                </div> 
                <div className="col-5">
                    <LogInForm3b />
                </div>
            </div>
        </div>
    );
  }
export default LogInForm3;