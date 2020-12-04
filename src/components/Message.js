import React, { Component } from "react";
import "./css/Message.css";

export class Message extends Component {
  render() {
    return (
      <div className="Message d-flex justify-content-around">
        <img className="" src={require("../assets/images/image 2.png")} alt="man" />
        <img className="" src={require("../assets/images/image 3.png")} alt="man" />
        <img className="" src={require("../assets/images/image 4.png")} alt="man" />
        <img className="" src={require("../assets/images/image 5.png")} alt="man" />
        <img className="" src={require("../assets/images/image 6.png")} alt="man" />
      </div>
    );
  }
}

export default Message;