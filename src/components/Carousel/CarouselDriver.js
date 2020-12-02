// import "./css/Carousel.css";
// import React from "react";
// function CarouselInImg() {
//   return (
//       <div className="CarouselInImg">
//         <img className="img-fluid carousel_background" src={require("../assets/images/carousel-background.svg")} alt="Carousel in background" />
//       </div>
//     );
//   }
//   export default CarouselInImg;

import React, { useState } from "react";
import ReactDOM from "react-dom";
// import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { AutoRotatingCarousel, Slide } from "material-auto-rotating-carousel";
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import "./Carousel.css";


const AutoRotatingCarouselModal = ({ handleOpen, setHandleOpen, isMobile }) => {
  return (
    <div>
      <AutoRotatingCarousel
        label=""
        open={handleOpen.open}
        onClose={() => setHandleOpen({ open: false })}
        onStart={() => setHandleOpen({ open: false })}
        autoplay={false}
        mobile={isMobile}
        style={{ position: "absolute" }}
      >
        <Slide
          media={
            <img src={require("./assets/images/iPhone 8 Gold.svg")} className="img-fluid iPhone 8 Gold4" alt="You can't be lost with us" />
          }
        />
        <Slide
          media={
            <img src={require("./assets/images/iPhone 8 Gold2.svg")} className="img-fluid iPhone 8 Gold4" alt="You can't be lost with us" />
          }
        />
        <Slide
          media={
            <img src={require("./assets/images/iPhone 8 Gold3.svg")} className="img-fluid iPhone 8 Gold4" alt="You can't be lost with us" />
          }
        />
        <Slide
          media={
            <img src={require("./assets/images/iPhone 8 Gold4.svg")} className="img-fluid iPhone 8 Gold4" alt="You can't be lost with us" />
          }
        />
      </AutoRotatingCarousel>
    </div>
  );
};

function CarouselDriver() {
  const [handleOpen, setHandleOpen] = useState({ open: false });
  // const handleClick = () => {
  //   setHandleOpen({ open: true });
  // };
  const matches = useMediaQuery("(max-width:600px)");
  return (
    <>
      <div className="CarouselInImg">
          <img className="img-fluid carousel_background_driver" src={require("./assets/images/carousel-background.svg")} alt="Carousel in background" />
        </div>
      {/* <Button className="never-lost" onClick={handleClick}>get started</Button> */}
      <AutoRotatingCarouselModal
        isMobile={matches}
        handleOpen={handleOpen}
        setHandleOpen={setHandleOpen}
      />
    </>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<CarouselDriver />, rootElement);
export default CarouselDriver;
