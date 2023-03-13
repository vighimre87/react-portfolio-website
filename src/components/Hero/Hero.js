import React from "react";
import "./index.css";

function Hero() {
    return (
        <section class="page-section" id="heroGrid">
      <div id="hero-image" class="grid-item">
        <img src="https://i.imgur.com/SZLH4uI.jpg" alt="The author in suit" width="200px" height="200px" />
      </div>
      <div id="hero-text" class="grid-item">
        <h2>A diligent and highly ambitious aspiring software developer who can think outside the box.</h2>
      </div>
  </section>
    );
}

export default Hero;