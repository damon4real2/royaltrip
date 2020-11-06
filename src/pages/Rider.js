import React from 'react';
import { Button } from 'reactstrap';
import RiderForm1 from "../components/RiderForm1"
import '../App.css';
import { Link } from 'react-router-dom';

function Rider() {
    return (
        <div className="rider">
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
                        <RiderForm1 />
                    </div>
                </div>
        </div>
    )
}
export default Rider;