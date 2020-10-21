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
    <div className="appstore">
      <div className="my-container">
      <Row>
      {/* <Card className="col-md-12 "> */}
        <div className="col-md-6 ">
        <div className="readytoride">
        <div className="readytoride2">
          <CardTitle className="appstore-h4">Ready to ride/drive with class?</CardTitle>
          <div className="appstore-playstore">
            <img src={require("../assets/images/app-store.svg")} alt="app-store" />
            <img src={require("../assets/images/google-play.svg")} alt="app-store" />
          </div>
          <CardText className="appstore-p">
            Or sign up to start riding/driving.
          </CardText>
        </div>
        </div>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-5">
          <div className="img_happy">
            <img className="img3"
              alt="..."
              src={require("../assets/images/man.png")}
            />
            </div>
        </div>
      {/* </Card> */}
      </Row>
      </div>
    </div>
  );
}

export default Example;

