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
          <p1 className="link">Sign up to ride, and ride with class.</p1>
        </Link>
      </div>
      <video width="100%" autoPlay="autoplay" loop="loop" muted className="classesVideo1" >
        <source src={sample} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <div className="d-flex text-align-left earnings-brief">
        <h4>Earnings, Self reliance, and Support</h4><br></br>
        <div className="testimonial">See how Mariam, Tolu, Usman, Debbie and Emeka use RoyalTrip to ride and enjoy their ride!</div>
      </div>
      <div className="container-fluid earnings-quote-driver">“My joy in this partnership is the benefit that comes with driving on RoyalTrip platform. Owning a home within 6 months, Access to hire purchase within 3 months is not something I get to hear, except with RoyalTrip drivers.”<br></br><br></br>— Seun”</div>
    </div>
        
    );
}
export default EarningsRider;