import React from 'react';
import {Link} from 'react-router-dom';
import './css/Stay.css';

function Stay() {
  return (
      <div className="Stay">
          <h1>Stay up to date</h1>
          <h2>Be the first to receive updates and offers you’ll be intrested in. Unsubscribe anytime.</h2>
          <label>
            <input className="enter" type="email" name="enter" placeholder="Enter your email address" />
        </label>
        <Link to="/">
          <img className="email-search" src={require("../assets/images/email.png")} alt="email" />
        </Link>
      </div>
  )
}
export default Stay;