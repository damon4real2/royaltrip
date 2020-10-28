// import React from 'react';
// // import Background from "../assets/images/rca1.jpg";
// import "./css/Hero.css";

// // var heroStyle = {
// //   backgroundImage: "url(" + Background + ")"
// // };
// function Hero() {
//   return(
//     // <div className='hero' style={ heroStyle }></div>
//     <div>
//       <img src={require("../assets/images/rca1.jpg")} alt="heroBackground" />
//     </div>
//   )
// }
// export default Hero;

import React from 'react';
import classes from "./css/Hero.css";
import sample from '../assets/videos/production-id-4607375_fdM893em.mp4';

const Hero = () => {
    return (
      <div id="hero">
              <video width="100%" autoPlay="autoplay" loop="loop" muted className={classes.Video} >
                  <source src={sample} type='video/mp4' />
                  Your browser does not support the video tag.
              </video>
            {/* <div className={classes.Content}>
                <div className={classes.SubContent} >
                    <h1>Reactjs Course</h1>
                    <p>Learn how to develope React projects</p>
                    <button type="button" className="btn btn-outline-dark">View the course</button>
                    <img
                        src="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                        alt="profile" />
                </div>
            </div> */}
        </div>
  )
}

export default Hero;