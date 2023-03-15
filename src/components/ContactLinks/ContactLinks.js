import React from "react";
import './index.css';

function ContactLinks() {
    return (
        <section className="page-section container" id="contact">
      <div className="sectionHeading">
        <h2 id="contact-heading">Contact Me</h2>
      </div>
      <div className="vertical-line" id="third-line"></div>
      <div className="sectionContent" id="contactGrid">
        <div className="contact-grid-element" id="website">
          <a href="https://vighimre87.github.io/Bootstrap-Portfolio/">Website</a>
        </div>
        <div className="contact-grid-element" id="github">
          <a href="https://github.com/vighimre87">GitHub</a>
        </div>
        <div className="contact-grid-element" id="linkedin">
          <a href="https://www.linkedin.com/in/imrevigh/">Linkedin</a>
        </div>
        <div className="contact-grid-element" id="email">
          <a href="mailto:vighimre87@gmail.com">Email</a>
        </div>
      </div>
    </section>
    );
}

export default ContactLinks;