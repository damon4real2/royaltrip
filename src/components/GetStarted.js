import React from 'react';
import { Button } from 'reactstrap';
import "./css/GetStarted.css";

function GetStarted() {
    return(
        <div className="container get_started">
            <div className="row d-flex get_started_1">
                <div className="col-md-4  first_get_started">
                    <div>
                        <div className="icon_1">
                            <img src={require("../assets/images/icon_1.svg")} alt="Safe Vector" />
                        </div>
                        <p className="value1">Safe</p>
                        <p className="value2">And Convenient</p>
                        <p className="value3">We are committed to working to design a safe and delightful experience for you</p>
                        <Button href="https://forms.gle/uHkPzawq51gFprtA9" className="value-btn">get started</Button>{' '}
                    </div>
                </div>
                    <div className="col-md-4  second_get_started unique">
                    <div>
                        <div className="icon_1">
                            <img src={require("../assets/images/icon_2.svg")} alt="Safe Vector" />
                        </div>
                        <p className="value1b">Happy Drivers</p>
                        <p className="value2b">Happy Riders</p>
                        <p className="value3b">Moving with RoyalTrip is
easy, safe and fast.</p>
                        <Button className="value-btn-middle">get started</Button>{' '}
                    </div>
                </div>
                    <div className="col-md-4  third_get_started">
                    <div>
                        <div className="icon_1 last">
                            <img src={require("../assets/images/icon_3.svg")} alt="Safe Vector" />
                        </div>
                        <p className="value1">Always</p>
                        <p className="value2">There for you</p>
                        <p className="value3 extreme">We are very responsive and prompt, you have our full attention everytime.</p>
                        <Button className="value-btn"><a href="https://forms.gle/uHkPzawq51gFprtA9">get started</a></Button>{' '}
                    </div>
                    </div>
                </div>
            </div>
    )
}
export default GetStarted;