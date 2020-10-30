import React from 'react';
import { Button } from 'reactstrap';
import "./css/GetStarted.css";

function GetStarted() {
    return(
        <div className="row">
            <div className="getStarted">
                <div className="getStarted1">
                    <div className="getStarted2">
                                <div className="icon-1">
                                    <img src={require("../assets/images/safe-vector.jpg")} alt="Safe Vector" />
                                </div>
                                <p id="safe">safe</p>
                                <p className="convenient">And Convenient</p>
                                <p className="moving">Moving with RoyalTrip is easy, safe and fast.</p>
                                <Button className="get-started-button1">get started</Button>{' '}
                            <div className="get-started-middle">
                                <div className="icon-2">
                                    <img src={require("../assets/images/happy-vector.svg")} alt="Safe Vector" />
                                </div>
                                <p className="happy-drivers">happy drivers</p>
                                <p className="happy-riders">happy riders</p>

                                <p className="moving2">Moving with RoyalTrip is easy, safe and fast.</p>
                                <Button className="get-started-button2">get started</Button>{' '}
                            </div>
                                <div className="icon-3">
                                    <img src={require("../assets/images/always-vector.jpg")} alt="Safe Vector" />
                                </div>
                                <p id="always">Always</p>
                                <p className="there">there for you</p>
                                <p className="get">Get fast support whenever you need it.</p>
                                <Button className="get-started-button3">get started</Button>{' '}
                    </div>
                </div>
            </div>      
            </div> 
    )
}
export default GetStarted;