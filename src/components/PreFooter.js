import React, { Component } from 'react';
import { Button } from 'reactstrap';
import '../components/css/PreFooter.css';

class PreFooter extends Component {
    render() {
        return (
            <div className="container-fluid PreFooter">
                <div className="row">
                    <div className="col-sm-8 PreFooterRight">
                        <h1>Join Millions of our users having a delightful, secured and convenient experience cruising with Royaltrip!</h1>
                        <Button href="https://forms.gle/uHkPzawq51gFprtA9" className="get-started2">
                            Get Started
                        </Button>{' '}
                    </div>
                    <div className="col-sm-4">
                        <img src={require("../assets/images/man.png")} className="manPreFooter" alt="Handsome Man" />
                    </div>
                </div>
            </div>
        )
    }
}

export default PreFooter