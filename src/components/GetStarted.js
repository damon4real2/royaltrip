import React from 'react';
import { Button } from 'reactstrap';
import "./css/GetStarted.css";

function GetStarted() {
    return(
    <div className="getStarted">
        <div className="getStarted1">
            <div className="getStarted2">
                {/* <div className="row"> */}
                    {/* <div className="col-4 safe"> */}
                        <div className="icon-1">
                            <img src={require("../assets/images/safe-vector.jpg")} alt="Safe Vector" />
                        </div>
                        <p id="safe">safe</p>
                        <p className="convenient">And Convenient</p>
                        <p className="moving">Moving with RoyalTrip is easy, safe and fast.</p>
                        <Button className="get-started-button1">get started</Button>{' '}
                    {/* </div> */}
                    <div className="happy">
                        <div className="icon-2">
                            <img src={require("../assets/images/happy-vector.jpg")} alt="Safe Vector" />
                        </div>
                    </div>
                    {/* <div className="col-4 always"> */}
                        <div className="icon-3">
                            <img src={require("../assets/images/always-vector.jpg")} alt="Safe Vector" />
                        </div>
                        <p id="always">Always</p>
                        <p className="there">there for you</p>
                        <p className="get">Get fast support whenever you need it.</p>
                        <Button className="get-started-button2">get started</Button>{' '}
                    {/* </div> */}
                {/* </div> */}
            </div>
        </div>
    </div>       
    )
}
export default GetStarted;