import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
const MoviePhotos = (props) => {
  const style = {
    // width: "100%",
    textAlign: "center",
    background: "teal",
    maxWidth: "182px",
    minWidth: "182px",
    height: "91px",
    padding: "50px 0",
    fontSize: "30px",
  };

  const properties = {
    duration: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    // indicators: true,
  };

  return (
    <div>
      <div>
        <Slide style={{ width: "100%" }} {...properties}>
          {/* {props.images((image, index) => (
            
          ))} */}
          <h1>image</h1>
        </Slide>
      </div>
    </div>
  );
};

export default MoviePhotos;
