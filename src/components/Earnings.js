import React from 'react';
// import {Link} from 'react-router-dom';
import sample from '../assets/videos/production-id-4607375_fdM893em.mp4';
import "./css/Earnings.css";

// import './css/Earnings.css';

function Earnings() {
    return (
        <div className="container Earnings">
          <div className="row d-flex">
            <div className="col-md-4">
              <p>How does RoyalTrip work?</p>
            </div>
            </div>
            <div className="col-md-4"></div>
            <div className="col-md-4">
            {/* eslint-disable-next-line */}
            <a href="https://forms.gle/uHkPzawq51gFprtA9" target="_blank">
                <p1>Apply to drive and get approved</p1>
              </a>
            </div>
          
            <video width="100%" autoPlay="autoplay" loop="loop" muted className="classesVideo" >
              <source src={sample} type='video/mp4' />
              Your browser does not support the video tag.
            </video>
            <p2>Earnings, Self reliance, and Support</p2>
            <p3>See how Mariam, Tolu, Usman, and Emeka use RoyalTrip to drive and cash out big time!</p3>
            <div className="Quote">
              <p4>“My joy in this partnership is the benefit that comes with driving on RoyalTrip platform. Owning a home within 6 months, Access to hire purchase within 3 months is not something I get to hear, except with RoyalTrip drivers.<br></br><br></br>— Seun”</p4>
            </div>
          </div>
        
    );
}
export default Earnings;