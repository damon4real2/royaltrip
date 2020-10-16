import React from 'react';
// import { FaBorderNone } from 'react-icons/fa';
import {
  Card, CardImg, CardText, CardBody, CardDeck,
  CardTitle
} from 'reactstrap';
import './Cards.css';

const Example = (props) => {
  return (
    <CardDeck style={{
      // outline: 0,
      textAlign: "center",
      marginTop: "200px",
    }}>
      <Card style={{
        border: "0px",
        display:"flex", 
        justifyContent:"center",
        alignItems:"center"
      }}>
      <CardImg
          alt="First Card"
          className="rounded-circle"
          src={require("../images/card1.svg")}
          top
          style={{width:"40%", 
          height:"30%"}}
        ></CardImg>
        <CardBody>
          <CardTitle className=" h4 text-center-black mb-3">Safe and convenient</CardTitle>
          <CardText>Moving with Royal Trip is easy, convenient and fast.</CardText>
        </CardBody>
      </Card>
      <Card style={{
        border: "0px",
        display:"flex", 
        justifyContent:"center",
        alignItems:"center"
      }}>
      <CardImg
          alt="Second Card"
          className="rounded-circle"
          src={require("../images/card2.svg")}
          top
          style={{width:"40%", 
          height:"30%"}}
        ></CardImg>
        <CardBody>
          <CardTitle className=" h4 text-center-black mb-3">Happy drivers, happy riders</CardTitle>
          <CardText>Royal Trip drivers earn more, thanks to lower commission rates.</CardText>
        </CardBody>
      </Card>
      <Card style={{
        border: "0px",
        display:"flex", 
        justifyContent:"center",
        alignItems:"center"
      }}>
      <CardImg
          alt="Third Card"
          className="rounded-circle"
          src={require("../images/card3.svg")}
          top
          style={{width:"40%", 
          height:"30%"}}
        ></CardImg>
        <CardBody>
          <CardTitle className=" h4 text-black mb-3">Always there for you.</CardTitle>
          <CardText>Get fast support whenever you need it.</CardText>
        </CardBody>
      </Card>
      
    </CardDeck>
  );
};

export default Example;