import React from "react";
import Carousel from "react-bootstrap/Carousel";

const images = require.context("../images/slideshow", true);
const imageList = images.keys().map((image) => images(image));

function Media() {
  const youTubeURLs = {
    goldTone: "https://www.youtube.com/embed/oykVvo6j36s?si=eCwCdT7r7N3bUHcu",
    bleedColorFree:
      "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fdeanograham63%2Fvideos%2F412841487933202%2F&show_text=false&width=560&t=0",
    blueBonnet: "https://www.youtube.com/embed/6LdlB_1CY98?si=97ltIWteORix3Zd_",
  };

  function youTubeVideos(url) {
    return (
      <iframe
        width="560"
        height="315"
        src={url}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
        className="d-block mx-auto mw-100 mt-5"
      ></iframe>
    );
  }

  return (
    <div>
      <h1 className="text-center my-5">Media</h1>
      <Carousel controls={false} indicators={false} fade>
        {imageList.map((image) => {
          return (
            <Carousel.Item className="carousel-responsive">
              <img
                className="d-block mw-100 mh-100 rounded mx-auto"
                src={image}
              />
            </Carousel.Item>
          );
        })}
      </Carousel>

      {Object.values(youTubeURLs).map((url) => youTubeVideos(url))}
    </div>
  );
}

export default Media;
