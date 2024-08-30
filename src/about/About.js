import React from "react";
import isaacAbout from "../images/isaac-about.jpg";

function About() {
  return (
    <div>
      <h1 className="text-center my-5">About</h1>
      <article className="d-md-flex">
        <img src={isaacAbout} className="col-md-6 pb-3" />
        <div className="col-md-6">
          <p>
            Hi, I'm Isaac Taylor and I'm a Florida based musician specializing
            in bluegrass, country, and Americana. My main instrument is the
            5-string banjo, but I play guitar as well, and am a skilled singer
            and harmony vocalist. I've been playing professionally for about 18
            years, and have experience working in a wide variety of different
            musical settings. I'm grateful for every opportunity to entertain
            through music!
          </p>

          <p>
            Throughout my career, I've had the privilege of working with many
            great groups and artists, including Ernie Evans, Buddy Jewell, Billy
            Droze, Remedy Tree, Rebekah Speer, Johnny and Jeanette Williams,
            Dave Adkins, Penny Creek Band and many more...
          </p>

          <p>Checkout my current bands!</p>

          <div>
            <a
              href="https://lowgroundband.com/"
              className="hyper-link"
              target="_blank"
            >
              Low Ground
            </a>
          </div>
          <div>
            <a
              href="https://deanograham.hearnow.com/"
              className="hyper-link"
              target="_blank"
            >
              Deano Graham & The Grass Wagon Revival
            </a>
          </div>
          <div>
            <a
              href="https://www.facebook.com/sunrisecitybluegrassband"
              className="hyper-link"
              target="_blank"
            >
              Sunrise City Bluegrass Band
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}

export default About;
