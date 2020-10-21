// import React from 'react';
// import { Button } from 'reactstrap';
// import './Button.css'
// const Example = (props) => {
//   return (
    // <div className="button1">
    //   <Button className="sign-up">Sign up to ride</Button>{' '}
    //   <Button className="apply">Apply to drive</Button>{' '}
    //   <Button className="help">Help line</Button>{' '}
    //   <Button className="talk">Talk to us</Button>{' '}
//     </div>
//   );
// }

// export default Example;

import React, { Component } from "react";
import { Button } from 'reactstrap';
import "./css/Button.css";
// var Bootstrap = require('react-bootstrap')

export default class button extends Component {
    render() {
        var well={
            boxShadow: "0 1px 1px rgba(120, 120, 118, 0.20)"
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
                <div className="signup_buttons">
                    <Button className="sign-up">Sign up to ride</Button>{' '}
                    <Button className="apply">Apply to drive</Button>{' '}
                    <Button className="help">Help line</Button>{' '}
                    <Button className="talk">Talk to us</Button>{' '}
                </div>
                <hr/>
            </div>
        </div>
        );
    }
}
