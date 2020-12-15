import React from "react";
import "./RiderWhyJoinUs.css";

function RiderWhyJoinUs() {
  return (
      <div className="RiderWhyJoinUs col-12">
          <h1>why ride with us?</h1>
          <h2>for our riders</h2>
          <div className="container">
            <div className="row">
              <div className="col-sm">
                <h3>Safety Measures</h3>
                <p>For us safety is not just expensive, it is Priceless. We are very sensitive about our Rider’s security . We ensure a thorough background check of our Drivers. Our Drivers go through a comprehensive screening process that guarantees a rider’s safety.</p>
                <div className="d-flex justify-content-center">
                <button className="ride_with_us">ride with us</button>
                </div>
              </div>
              <div className="col-sm mid_background">
                <h3 className="mid">Highly Responsive</h3>
                <p>Another thing we want our Riders’ to know is that we are very responsive with our user feedback, we do our best to assess and improve our platform based on this feedback. We also pay attention to investigating user reviews to understand where there may be gaps or lapses in any of the services we are rendering, that way you are assured an unhappy experience will not occur twice.</p>
                <div className="d-flex justify-content-center">
                  <button className="ride_with_us mid_background_button">ride with us</button>
                </div>
              </div>
              <div className="col-sm">
                <h3>Amazing Experience</h3>
                <p>What we want is a platform that delivers amazing experiences. Knowing this you can be certain that your rating is taken very seriously including valuable feedback.</p>
                <div className="d-flex justify-content-center">
                  <button className="ride_with_us end">ride with us</button>
                </div>
              </div>
            </div>
          </div>
      </div>
  )
}
export default RiderWhyJoinUs;
