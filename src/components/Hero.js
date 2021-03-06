// import React from 'react';
// import "./css/Hero.css";

// function Hero() {
//   return(
//     <div className="hero-container">
//       <img src={require("../assets/images/Group 155.svg")} className="img-fluid car1" alt="heroBackground" />
//     </div>
//   )
// }
// export default Hero;



/* Video Hero Section */
import React from 'react';
import classes from "./css/Hero.css";
import sample from '../assets/videos/Hero.mp4';

const Hero = () => {
    return (
      <div id="hero">
           <div className="d-flex justify-content-center alert alert-warning alert-dismissible fade show" role="alert">
               {/* eslint-disable-next-line */}
                <a  href="/covid">Know the best ways to help keep yourself healthy with our latest info on COVID-19.</a>
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
          {/* <div className="d-flex justify-content-center covid"><img className="icon" src={require("../assets/images/icon.svg")} alt="Safe Vector" /><p>Know the best ways to help keep yourself healthy with our latest info on COVID-19.</p><img className="cancel" src={require("../assets/images/cancel.svg")} alt="Safe Vector" /></div> */}
          <div></div>
              <video width="100%" autoPlay="autoplay" loop="loop" muted className={classes.Video} >
                  <source src={sample} type='video/mp4' />
                  Your browser does not support the video tag.
              </video>
        </div>
  )
}

export default Hero;

 /* Fix just below video for overlay text */
            /* <div className={classes.Content}>
                <div className={classes.SubContent} >
                    <h1>Reactjs Course</h1>
                    <p>Learn how to develope React projects</p>
                    <button type="button" className="btn btn-outline-dark">View the course</button>
                    <img
                        src="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                        alt="profile" />
                </div>
            </div> */