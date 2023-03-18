import React from "react";
import "./index.css";

function Hero() {
    return (
        <section className="page-section" id="heroGrid">
      <div id="hero-image" class="grid-item">
        <img src="https://i.imgur.com/SZLH4uI.jpg" alt="The author in suit" width="200px" height="200px" />
      </div>
      <div id="hero-text" class="grid-item">
        <h2>“I have failed many times, and that's why I am a success.”</h2>
        <p>Michael Jordan (1963 - )</p>
      </div>
  </section>
    );
}

export default Hero;