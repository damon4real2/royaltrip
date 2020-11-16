import React from 'react';
import { Button } from 'reactstrap';
import './css/TermsOfService.css';
import PropTypes, { number } from 'prop-types';


const Input = ({ type = number, placeholder="Enter your phone number", name, value, onChange, error }) => {
    return ( 
        <input 
            className="enterNo"
            type = {type}
            placeholder = {placeholder}
            name = {name}
            value = {value}
            onChange = {onChange}
            autoComplete = "off"
        />
    )
}

const Checkbox = ({ type = "checkbox", name, value, onChange, }) => {
    return ( 
        <input 
            className="checkbox"
            type = {type}
            name = {name}
            value = {value}
            onChange = {onChange}
        />
    )
}


Input.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.number.isRequired,
        PropTypes.object
    ]),
    onChange: PropTypes.func.isRequired
}

Checkbox.propTypes = {
    type: PropTypes,
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.number.isRequired,
    ]),
    onChange: PropTypes.func.isRequired
}



function TermsOfService() {
    return (
        <div className="termsOfService">
            <form>
                <p>drive and cash out big time!</p>
                <p1>Everything in life is somewhere else, and you get there in a car.</p1>
                <label>
                    <Input />
                    {/* <input className="enterNo" type="text" name="phone number" placeholder="Enter Mobile Phone Number" /> */}
                </label>
                <Button className="applyToDrive1" id="apply">
                    Apply to Drive
                </Button>{' '}
                {/* <div className="checkbox"><Checkbox /></div> */}
                    <Checkbox />
                <div className="agreement">I agree to RoyalTrip's terms of Service.</div>
            </form>
        </div>
    )
}
export default TermsOfService;