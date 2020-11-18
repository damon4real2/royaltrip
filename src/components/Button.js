import React, { Component } from "react";
import { Button } from 'reactstrap';
import "./css/Button.css";
// var Bootstrap = require('react-bootstrap')

export default class button extends Component {
    render() {
        var well={
            boxShadow: "0 1px 1px rgba(120, 120, 118, 0.20)",
        }
        var header={
          marginTop: "20px",
            color:"#000",
            fontWeight:"550",
            flex: 1,
        }

        return (
        <div style={well}>
            <div className="container">
                    <div style={header}></div>
                        <div className="row  row-cols-1 row-cols-sm-2 row-cols-md-4 signup_buttons">
                            <div className="col">
                                <Button className="sign-up">Sign up to ride</Button>{' '}
                            </div>
                            <div className="col">
                                <Button className="apply">Apply to drive</Button>{' '}
                            </div>
                            <div className="col">
                                <Button className="help">Help Line</Button>{' '}
                            </div>
                            <div className="col">
                                <Button className="talk">Talk to us</Button>{' '}
                            </div>
                            {/* <Button className="help">Help line</Button>{' '}
                            <Button className="talk">Talk to us</Button>{' '} */}
                        </div>
                    <hr className="rule"/>
            </div>
        </div>
        );
    }
}
