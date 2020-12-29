import React, { Component } from "react";
import "./css/Message.css";

export class Message extends Component {
  render() {
    return (
      <div className="Message d-flex justify-content-around">
        <img className="" src={require("../assets/images/rct.svg")} alt="man" />
        <img className="" src={require("../assets/images/rca.svg")} alt="man" />
        <img className="" src={require("../assets/images/hg.svg")} alt="man" />
        <img className="" src={require("../assets/images/ibile.svg")} alt="man" />
      </div>
    );
  }
}

export default Message;