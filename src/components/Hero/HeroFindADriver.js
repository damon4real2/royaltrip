import React from 'react';
import "./HeroFindADriver.css";

function HeroRider() {
    return (
        <div class="d-flex">
        <div className="HeroFindADriver">
            <img className="HeroFindADriverImg" src={require("./assets/images/Bg.svg")} alt="heroBackground" />
              <div className="col-12 HeroFindADriverText"> 
                <div className="carousel-caption caption-rider">
                  <h1>Welcome to Royaltrip!</h1>
                  <h2>You’re one step ahead to finding a Driver.</h2>
                  <h3>Every day, we collect customers' feedback, implement ideas to reach more people and serve you better. Our commitment is to give you a safe, comfortable and delightful experience with RoyalTrip.<br></br> Use the links below to download our App and find a Driver Now!</h3>
                  <div className="appstore-playstore3">
                    <a href="https://www.apple.com/ng/ios/app-store/"><img src={require("./assets/images/app-store.svg")} alt="app-store" className="appstore-3" /></a>
                    <a href="https://play.google.com/store/apps"><img src={require("./assets/images/google-play.svg")} alt="google-play" className="googleplay-3" /></a>
                  </div>
                  <div className="appstore-playstore3">
                    <a href="https://www.apple.com/ng/ios/app-store/"><img src={require("./assets/images/Scroll Down.svg")} alt="app-store" /></a>
                  </div>
                </div>
              </div>
      </div>
   </div>
    )
}
export default HeroRider;