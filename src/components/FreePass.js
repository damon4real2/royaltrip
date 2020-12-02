import React from 'react';
import { Button, Label } from 'reactstrap';
import './css/FreePass.css';


// const onclick


function FreePass() {
  return (
      <form className="FreePass">
        <div className="header">
          <p1>Send Your Message</p1>
            <Label>
              <input className="full-name" type="text" name="Full Name" placeholder="Your name (Required)" />
              <input className="e-mail" type="email" name="email" placeholder="Your Email (Required)" />
              <input className="phone-no" type="tel" name="Phone Number" placeholder="Phone Number" />
              <input className="some-details" type="text" name="details" placeholder="Give some details" />
            </Label>
            <Button id="join-us" onClick="alert('Thanks for registering. We will get back to you shortly!')">
              send
            </Button>{' '}
        </div>
      </form>
  )
}
export default FreePass;