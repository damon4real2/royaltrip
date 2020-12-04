import React from 'react';
// import Carousel from 'react-elastic-carousel'; 
import { Button } from 'reactstrap';
import "./HeroOurCompany.css";

function HeroRider() {
    return (
        <div class="d-flex">
        <div className="HeroOurCompany">
            <img className="HeroOurCompanyImg" src={require("./assets/images/Group 216.jpg")} alt="heroBackground" />
              <div className="col-12 HeroOurCompanyText"> 
                <div className="carousel-caption">
                  <h1>how to become a partner?</h1>
                  <h2>Every company producing Delphi or xBase software may become an OTC partner. For our partners we offer attractive purchase terms and technical support.</h2>
                  <Button className="our-company-read_more">read more</Button>{' '}
                </div>
              </div>
      </div>
   </div>
//    <div className="carousel-item">
//    <img src="..." alt="...">
//    <div className="carousel-caption d-none d-md-block">
//      <h5>...</h5>
//      <p>...</p>
//    </div>
//  </div>

// <Carousel itemsToShow={1}>
//   <Item>1</Item>
//   <Item>2</Item>
//   <Item>3</Item>
//   <Item>4</Item>
//   <Item>5</Item>
//   <Item>6</Item>
// </Carousel>
    )
}
export default HeroRider;