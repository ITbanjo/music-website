import React from "react";
import Carousel from "react-bootstrap/Carousel";

const images = require.context("../images/slideshow", true);
const imageList = images.keys().map((image) => images(image));

function Media() {
  return (
    <div>
      <Carousel controls={false} indicators={false} fade>
        {imageList.map((image) => {
          return (
            <Carousel.Item>
              <img className="d-block w-100 h-auto rounded" src={image} />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}

export default Media;
