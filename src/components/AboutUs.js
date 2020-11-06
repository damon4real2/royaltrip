import React from 'react';
import { Button } from 'reactstrap';
// import {Link} from 'react-router-dom';
// import classes from "./css/Hero.css";
// import sample from '../assets/videos/production-id-4607375_fdM893em.mp4';
import './css/AboutUs.css';

function AboutUs() {
  return (
      <div className="AboutUs">
        <div className="row">
            <div className="col">
              <h1>about our company</h1>
              <h2>Times and moments in life is where we find experiences, memories of love, joy and laughter. Lets help you relive them, lets get you there.</h2>
              <img className="thin-block" src={require("../assets/images/thin-slant-block.svg")} alt="rectangle" />
              <h3>Equality is the basis to genuine acceptance, we accept you for who you are, and we want to be what drives you to where you want to go.</h3>
              <h4>In pursuit of purpose? lets get you there</h4>
              <Button className="get-started-button4">get started</Button>{' '}
              <Button className="get-started-button5">learn more</Button>{' '}
            </div>
            <div className="col">
            <div id="aboutUshero">
              {/* <video autoPlay="autoplay" loop="loop" muted className={classes.Video} >
                  <source src={sample} type='video/mp4' />
                  Your browser does not support the video tag.
              </video> */}
              </div>
              <img className="man" src={require("../assets/images/box-a.svg")} alt="man" />
            </div>
          </div>
        </div>
  )
}
export default AboutUs;