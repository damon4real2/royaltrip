import React from 'react';
import { Button } from 'reactstrap';
import './css/TermsOfService.css';

function TermsOfService() {
    return (
        <div className="termsOfService">
            <form>
                <p>drive and cash out big time!</p>
                <p1>Everything in life is somewhere else, and you get there in a car.</p1>
                <label>
                    <input className="enterNo" type="text" name="phone number" placeholder="Enter Mobile Phone Number" />
                </label>
                <Button href="https://forms.gle/uHkPzawq51gFprtA9" className="applyToDrive1" id="apply">
                    Apply to Drive
                </Button>{' '}
                <div className="checkbox"></div>
                <div className="agreement">I agree to RoyalTrip's terms of Service.</div>
            </form>
        </div>
    )
}
export default TermsOfService;