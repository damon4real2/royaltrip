import React, { Component } from "react";
import { Button } from 'reactstrap';
import "./css/MessageInput.css";

export class MessageInput extends Component {
  render() {
    return (
      <div className="MessageInput container">
        <div className="row">
          <div className="col-md-5">
            <h1>Let us handle your project, professionally.</h1>
            <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
          </div>
          <div className="col-md-7 enter_message">
            <label>
                <input className="enter_message1" type="email" name="enter" placeholder="Enter your email address" />
            </label>
            <label>
                <input className="enter_message2" type="email" name="enter" placeholder="Your name / company’s name" />
            </label>
            <label>
                <input className="enter_message3" type="email" name="enter" placeholder="Your message" />
            </label>
            <Button href="/" className="send_button">send</Button>{' '}
          </div>
        </div>
      </div>
    );
  }
}

export default MessageInput;