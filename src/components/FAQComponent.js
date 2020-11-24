import React from 'react';
import './css/FAQ.css';
import FAQuestions from '../components/FAQ/FAQuestions';


function FAQComponent() {
    return (
        <div className="FAQComponent container-fluid">
            <div className="col-1"></div>
            <div className="col-6">
              <h1>here are few things</h1>
              <h2>frequently asked questions</h2>
              <h3>You may have concerns or interests about knowing how we can serve you better and how we can help you choose us, here are a list of questions people who visit here most concerned about.</h3>
            </div>
            <div className="col-4"></div>
            <div className="col-1"></div>
            <div className="container">
              <div className="col-12">
                <FAQuestions/>
              </div>
            </div>
        </div>       
    )
}
export default FAQComponent;