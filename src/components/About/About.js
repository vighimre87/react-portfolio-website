import React from "react";
import "./index.css";

function About() {
    return (
        <section className="page-section container" id="about">
      <div className="sectionHeading" id="aboutHeading">
        <h2 className="">About Me</h2>
      </div>
      <div className="vertical-line" id="first-line"></div>
      <div className="sectionContent" id="aboutText">
        <h2>Hi, I am Imre Vigh 👋</h2>
        <p>I am an aspiring Frontend Web Developer, currently based in Skipton, UK but I am originally from Hungary.
          I am recently learning Front Web Development with edX Skills for Life Bootcamp and I am looking forward to
          use all of my skills to build great websites. I am also a certified Java SE 8 Programmer (OCA Java SE 8 Programmer)
          and lifelong learner who enjoys working with all types of personalities. I am willing and enthused to resolve all type
          of challenges in the most efficient manner.</p>
          <br></br>
        <p>
          When I am not working on challenges or websites I like to be outside in the nature. I am an avid walker and I like to
          challenge myself outside of my work and studies. I also like reading, yoga which is part of my daily routine and solving
          puzzles or crosswords. And like everyone else, I like to travel and discover different countries and cultures.
        </p>
      </div>
    </section>
    );
}

export default About;