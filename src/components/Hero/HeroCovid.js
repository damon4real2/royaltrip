import React from 'react';
import "./HeroCovid.css";

function HeroCovid() {
    return (
        <div className="HeroCovid">
          <div className="covid-links d-flex justify-content-center">
            <a href="/">overview</a>
            <a href="/">driver updates</a>
            <a href="/">rider updates</a>
          </div>
              <div className="d-flex justify-content-center alert alert-warning alert-dismissible fade show" role="alert">
               {/* eslint-disable-next-line */}
                <a href="/covid">Want to help protect yourself and your loved ones? Your local public health agencies recommend opting in to get their private and secure COVID-19 exposure notifications. Learn more and opt in.</a>
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            <div className="container covid-hero">
              <div className="row">
                <div className="col-7">
                  <h1>RoyalTrip’s Newest on COVID-19</h1>
                  <p>The health and safety of the RoyalTrip community remain a priority. With the 
recent outbreak of the seeming second wave of the covid-19 outbreak. We do
not only have a responsibility of staying safe and observing all safety requirement. 
It is important also that our community is held to a high standard of accountability. 
It is expected that drivers or riders exhibit high level of compliance with the NCDC 
general safety guidelines. This includes not having to use any form of public 
transportation when diagnosed with COVID-19, assessed for it or suspect being 
exposed to it.
Our safety is further ensured when we show a collective responsibility 
by doing what is needful.</p></div>
                <div className="col-5">
                  <img className="car_driver" src={require("./assets/images/covid.svg")} alt="Get going with us" /> 
                </div>
              </div>
            </div>
      </div>
    )
}
export default HeroCovid;