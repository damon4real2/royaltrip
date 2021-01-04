import React, { Component } from 'react';
import { Button } from 'reactstrap';
import '../components/css/WhoWeAre.css';

class WhoWeAre extends Component {
    render() {
        return (
            <div className="col-12 WhoWeAre">
                <h1>who we are</h1>
                <div className="values"><strong>R</strong> - Reliable:<br></br> We are trusted because we provide an enabling environment that inspires growth.<br></br>
                <strong>O</strong> - Open to collaborate:<br></br> We want to get things done quicker and better. So we see strength in partnerships<br></br>
                <strong>Y</strong> - Yearn for continious learning:<br></br>We prioritize learning and always seek to become better.<br></br>
                <strong>A</strong> - Assertive:<br></br>We are honest, direct, and firm about our commitment to delivering the best services for our customers customers.<br></br>
                <strong>L</strong> - Loyal:<br></br> Loyalty requires character and integrity, two virtues we highly esteem and reward in our community.</div>
                <Button href="/" className="readMore">read more</Button>{' '}
            </div>
        )
    }
}

export default WhoWeAre;