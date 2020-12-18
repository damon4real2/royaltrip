import React from "react";
// import {Link} from 'react-router-dom';
import "./Bookings.css";

function Bookings() {
  return (
      <div className="container Bookings">
          <div className="row">
            <div className="col-7">
              <img src={require("./assets/images/book_ride.png")} alt="right_img" />
            </div>
            <div className="col-5 bookings_left">
              <h1>At your fingertips</h1>
              <p>Book a ride for your people now!</p>
              <p1>Subscribe to our Newsletter</p1><br></br>
              <p2>Available exclusively on RoyalTrip</p2>
              <div class="container">
                <div class="row">
                  <div class="col-md-6">
                    <input className="your_email" type="text" placeholder="your email" />
                  </div>
                  <div class="col-md-6">
                    <button type="button" className="subscribe">subscribe</button>
                  </div>
                  </div>
              </div>
            </div>
          </div>
      </div>
  )
}
export default Bookings;