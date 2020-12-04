import React from "react";
import "./css/AppStore.css";
// reactstrap components
import {
  CardTitle,
  CardText,
  Row,
} from "reactstrap";

function Example() {
  return (
      <div className="container-fluid appstore">
      <Row>
        <div className="col-md-6 ">
        <div className="readytoride">
        <div className="readytoride2">
        <CardTitle className="appstore-h4">Ready to ride/drive with class?</CardTitle>
          <div className="appstore-playstore">
            {/* eslint-disable-next-line */}
            <a href="https://www.apple.com/ng/ios/app-store/" target='_blank'><img src={require("../assets/images/app-store.svg")} alt="app-store" /></a>
            {/* eslint-disable-next-line */}
            <a href="https://play.google.com/store/apps" target='_blank'><img src={require("../assets/images/google-play.svg")} alt="google-play" /></a>
          </div>
          <CardText className="appstore-p">
            Or sign up to start riding/driving.
          </CardText>
        </div>
        </div>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-5">
            <img className="cars"
              alt="..."
              src={require("../assets/images/cars_grouped.png")}
            />
        </div>
      </Row>
      </div>
  );
}

export default Example;

