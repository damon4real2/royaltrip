import React from "react";
import { Button } from 'reactstrap';
import "./css/Button.css";

function button() { 
    return (
        <div className="button">
            <div class="container">
                <div class="row d-flex justify-content-around">
                    <Button  className="sign-up">Sign up to ride</Button>{' '}
                    <Button href="https://forms.gle/uHkPzawq51gFprtA9" className="apply">Apply to drive</Button>{' '}
                    <Button href="/ContactUs" className="talk">Our Company</Button>{' '}
                    <Button href="/FAQ" className="help">Help Center</Button>{' '}
                    {/* <br />
                    <hr className="rule" /> */}
                </div>
            </div>
        </div>
    )
}
export default button;