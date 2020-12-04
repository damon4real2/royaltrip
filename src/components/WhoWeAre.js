import React, { Component } from 'react';
import { Button } from 'reactstrap';
import '../components/css/WhoWeAre.css';

class WhoWeAre extends Component {
    render() {
        return (
            <div className="col-12 WhoWeAre">
                <h1>who we are</h1>
                <p>R -Reliable, We are known to be reliable because we develop those in our community by providing an enabling environment that inspires personal development and professional growth.<br></br>O- Open to collaborate, We want to get things done quicker and better. So we happily embrace ideas and feedback from members of our community.<br></br>Y- Yearn for continious learning, We are passionate about learning and seeking to always become better.<br></br>A- Assertive, We are honest, direct, and firm about our commitment to doing what’s best for our people.<br></br>L- Loyal Loyalty requires character and integrity, two virtues we highly esteem and reward in our community.</p>
                <Button href="/" className="readMore">read more</Button>{' '}
            </div>
        )
    }
}

export default WhoWeAre;