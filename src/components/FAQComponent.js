import React from 'react';
import './css/FAQ.css';

function FAQComponent() {
    return (
        <div id="FAQComponent">
            <h1>here are few things</h1>
            <h2>frequently asked questions</h2>
            <h3>You may have concerns or interests about knowing how we can serve you better and how we can help you choose us, here are a list of questions people who visit here most concerned about.</h3>
            <div className="FAQs">
              <div className="row">
                <div className="col-2"></div>
                <div className="col-3 left">
                  <p1>1. What is wait time for my driver to reach me?</p1><br></br>
                  <p2>2. What if i forget an item in the Driver’s car?</p2><br></br>
                  <p3>3. Can I cancel a trip enroute/halfway?</p3><br></br>
                  <p4>4. I was charged incorrectly, what do I do?</p4><br></br>
                  <p5>5. How do I get a ride to impress my date?</p5><br></br>
                  <p6>6. Anyway I can split the bill on Royal Trip?</p6>
                </div>
                <div className="col-6 right">
                    <p>First, when you request a ride, the nearest driver to your location is tagged to your request to come pick you up. This should be within 0 minuites. However there are certain instances where the wait time might be longer, such instances include the following:
                      <br></br>
                      <br></br>1. Driver has several request from your location.
                      <br></br>2. Heavy traffic where order was placed.
                      <br></br>3. You may have an history of being rated poorly.</p>
                </div>
                <div className="col-2"></div>
              </div>
            </div>
        </div>
    )
}
export default FAQComponent;