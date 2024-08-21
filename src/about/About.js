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
            Isaac Taylor is a Florida based folk musician specializing in
            bluegrass, country and Americana. He is skilled at the 5-string
            banjo, guitar, and lead/harmony vocals. With 18 years of
            professional experience under his belt, Isaac has the ability to
            seamlessly fit into any musical setting and deliver high-quality
            performances.
          </p>
          <p>Bands I've played with...</p>
        </div>
      </article>
    </div>
  );
}

export default About;
