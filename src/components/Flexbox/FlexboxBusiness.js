import React from 'react';
import "./FlexboxBusiness.css";


function FlexboxBusiness () {
    return (
      <div class="container-fluid FlexboxBusiness">
        <div className="col-12 d-flex justify-content-center">
          <h1>testimonials</h1>
        </div>
        <div class="row flexboxBusiness">
          <div class="col-md-4 flexbox-a justify-content-center">
            <div className="d-flex justify-content-center">
              <img src={require("./assets/images/test1.png")} alt="flexbox" />
            </div>
            <h4 className="feedback">“The ride was splendid and the driver was not reckless”</h4>
            <sub className="first-sub">Mr Adeniyi</sub>
            <button type="button" class="read_more">read more</button>
          </div>
          <div class="col-md-4 flexbox-b">
          <div className="d-flex justify-content-center">
              <img src={require("./assets/images/test2.png")} alt="flexbox" />
            </div>
            <h4 className="feedback">“I love that the driver was gentle and receptive.”</h4>
            <sub>Mrs Clara</sub>
            <button type="button" class="read_more">read more</button>
          </div>
          <div class="col-md-4 flexbox-c">
          <div className="d-flex justify-content-center">
              <img src={require("./assets/images/test3.png")} alt="flexbox" />
            </div>
            <h4 className="feedback">“I like that the driver was punctual and funny”</h4>
            <sub>Mr Betty</sub>
            <button type="button" class="read_more">read more</button>
          </div>
        </div>
      </div>
    );
}
export default FlexboxBusiness;