import React from 'react';
// import {Link} from 'react-router-dom';
import "./Flexbox.css";


function Flexbox () {
    return (
      <div class="container">
        <div class="row FlexboxOurCompany">
          <div class="col-md-4 flexbox-d justify-content-center">
            <img className="flexbox-img" src={require("./assets/images/layout 1.png")} alt="flexbox" />
            <h4 className="role">Web and mobile UI, UX design</h4>
            <p className="description">We craft stunning and amazing web UI, using a well drrafted UX to fit your product.</p>
          </div>
          <div class="col-md-4 flexbox-e">
            <img className="flexbox-img" src={require("./assets/images/pen-tool 1.png")} alt="flexbox" />
            <h4 className="role">Graphic design</h4>
            <p className="description">Amazing flyers, social media posts and brand representations that would make your brand stand out.</p>
          </div>
          <div class="col-md-4 flexbox-f">
            <img className="flexbox-img" src={require("./assets/images/smartphone 1.png")} alt="flexbox" />
            <h4 className="role">Mobile app and web development</h4>
            <p className="description">With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
          </div>
        </div>
      </div>
    );
}
export default Flexbox;