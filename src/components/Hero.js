import React from 'react';
import "./css/Hero.css";

function Hero() {
  return(
    <div className='hero'>
      <img className='hero' src={require("../assets/images/rca1.jpg")} alt={'Hero'}/>
    </div>
  )
}
export default Hero;