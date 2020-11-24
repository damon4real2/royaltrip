import React from 'react';
import {Link} from 'react-router-dom';
import './css/Stay.css';

function Stay() {
  return (
      <div className="Stay container-fluid">
        <div className="col-md-12">
          <h1>Stay up to date</h1>
          <h2>Be the first to receive updates and offers you’ll be interested in. Unsubscribe anytime.</h2>
          <label>
              <input className="enter" type="email" name="enter" placeholder="Enter your email address" />
          </label>
          <Link to="/">
            <img className="email-search" src={require("../assets/images/email.png")} alt="email" />
          </Link>
          </div>
      </div>
  )
}
export default Stay;