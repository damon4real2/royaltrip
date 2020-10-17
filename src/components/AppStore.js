import React from "react";
import './AppStore.css';

// reactstrap components
import {
  // Button,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  // Container,
} from "reactstrap";

function Example() {
  return (
    <>
      <Card className="col-sm-6 col-md-6 col-xs-6">
        <div className="my-container">
        <CardBody className="appstore">
          <CardTitle className="appstore-h4">Ready to ride/drive with class?</CardTitle>
          <CardText className="appstore-p">
            Or sign up to start riding/driving.
          </CardText>

          {/* <Button
            className=" px-0"
            color="link"
            href="#pablo"
            onClick={(e) => e.preventDefault()}
          >
            View article
          </Button> */}
        </CardBody>
        <CardImg className="img2"
          alt="..."
          src={require("../images/man.svg")}
        ></CardImg>
        </div>
      </Card>
    </>
  );
}

export default Example;

