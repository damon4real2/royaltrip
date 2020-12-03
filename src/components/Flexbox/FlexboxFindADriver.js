import React from 'react';
import { Button } from 'reactstrap';
// import {Link} from 'react-router-dom';
import "./Flexbox.css";


function Flexbox () {
    return (
      <div class="container">
        <div class="row Flexbox">
          <div class="col-md-4 flexbox-a justify-content-center">
            <img className="flex-img" src={require("./assets/images/Image1.svg")} alt="flexbox" />
            <h4 className="feedback">“The ride was splendid and the driver was not reckless”</h4>
            <sub className="first-sub">Mr Adeniyi</sub>
            <Button className="read-more">read more</Button>{' '}
          </div>
          <div class="col-md-4 flexbox-b">
            <img className="flex-img" src={require("./assets/images/Image2.svg")} alt="flexbox" />
            <h4 className="feedback">“I love that the driver was gentle and receptive.”</h4>
            <sub>Mrs Clara</sub>
            <Button className="read-more">read more</Button>{' '}
          </div>
          <div class="col-md-4 flexbox-c">
            <img className="flex-img" src={require("./assets/images/Image3.svg")} alt="flexbox" />
            <h4 className="feedback">“I like that the driver was punctual and funny”</h4>
            <sub>Mr Betty</sub>
            <Button className="read-more">read more</Button>{' '}
          </div>
        </div>
      </div>
    );
}
export default Flexbox;