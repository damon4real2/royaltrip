import React from 'react';
import {Link} from 'react-router-dom';
// import classes from "./css/Earnings.css";
import sample from '../assets/videos/production-id-4607375_fdM893em.mp4';
import "./css/Earnings.css";

// import './css/Earnings.css';

function Earnings() {
    return (
        <div className="Earnings">
            <p>How does RoyalTrip work?</p>
            <Link to="/SignUpToDrive">
              <p1>Apply to drive and get approved</p1>
            </Link>
            <video width="100%" autoPlay="autoplay" loop="loop" muted className="classesVideo" >
              <source src={sample} type='video/mp4' />
              Your browser does not support the video tag.
            </video>
              {/* <div>
                <img className="classesVideo" src={require("../assets/images/rca1.jpg")} alt="heroBackground" />
              </div> */}
            <p2>Earnings, Self reliance, and Support</p2>
            <p3>See how Mariam, Tolu, Usman, and Emeka use RoyalTrip to drive and cash out big time!</p3>
            <div className="Quote">
              <p4>“My joy in this partnership is the benefit that comes with driving on RoyalTrip platform. Owning a home within 6 months, Access to hire pirchase within 3 months is not something i get to hear, except with royaltrip drivers.<br></br><br></br>— Seun”</p4>
            </div>
        </div>
    )
}
export default Earnings;