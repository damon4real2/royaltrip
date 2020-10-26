import React from 'react';
// import Background from "../assets/images/rca1.jpg";
import "./css/Hero.css";

// var heroStyle = {
//   backgroundImage: "url(" + Background + ")"
// };
function Hero() {
  return(
    // <div className='hero' style={ heroStyle }></div>
    <div>
      <img src={require("../assets/images/rca1.jpg")} alt="heroBackground" />
    </div>
  )
}
export default Hero;