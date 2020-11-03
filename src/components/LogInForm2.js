import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import { Button } from 'reactstrap';
import LogInForm2b from "../components/LogInForm2b"

function LogInForm2() {
  return (
        <div className="LogInForm2">
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
                    <LogInForm2b />
                </div>
            </div>
     </div>
    );
  }
export default LogInForm2;