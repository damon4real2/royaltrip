import React from 'react';
import {Link} from 'react-router-dom';
import sample from './assets/videos/production-id-4607375_fdM893em.mp4';
import "./Earnings.css";

function EarningsRider() {
    return (
        <div className="container EarningsRider">
            <div className="d-flex justify-content-between">
              <p>How does RoyalTrip work?</p>
              <Link to="/SignUpToDrive">
                <p1>Sign up to ride, and ride with class.</p1>
              </Link>
            </div>
            <video width="100%" autoPlay="autoplay" loop="loop" muted className="classesVideo" >
              <source src={sample} type='video/mp4' />
              Your browser does not support the video tag.
            </video>
            <div className="d-flex text-align-left earnings-brief">
              <h4>Royalty, Safety and Secured</h4><br></br>
              <p className="p">See how Mariam, Tolu, Usman, Debbie and Emeka use RoyalTrip to ride and enjoy their ride!</p>
            </div>
            <div className="container-fluid earnings-quote">My excitement in riding with RoyalTrip is that I get to ride with class, meet cultured drivers and also get to interact with the drivers in a cultured manner!<br></br><br></br>— Debbie”</div>
          </div>
        
    );
}
export default EarningsRider;