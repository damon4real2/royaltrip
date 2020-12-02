import React from 'react';
import { Button } from 'reactstrap';
import './css/TermsOfService.css';

function TermsOfService() {
    return (
        <div className="termsOfService">
            <form>
                <p>drive towards self reliance!</p>
                <p1>Cruise your way to independence as you partner with us.</p1>
                <label>
                    <input className="enterNo" type="text" name="phone number" placeholder="Enter Mobile Phone Number" />
                </label>
                <Button href="https://forms.gle/uHkPzawq51gFprtA9" id="apply">
                    Apply to Drive
                </Button>{' '}
                <div className="checkbox"></div>
                <div className="agreement">I agree to RoyalTrip's terms of Service.</div>
            </form>
        </div>
    )
}
export default TermsOfService;