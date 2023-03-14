import React from "react";

function ContactLinks() {
    return (
        <section class="page-section container" id="contact">
      <div class="sectionHeading">
        <h2 id="contact-heading">Contact Me</h2>
      </div>
      <div class="vertical-line" id="third-line"></div>
      <div class="sectionContent" id="contactGrid">
        <div class="contact-grid-element" id="website">
          <a href="#">Website</a>
        </div>
        <div class="contact-grid-element" id="github">
          <a href="https://github.com/vighimre87">GitHub</a>
        </div>
        <div class="contact-grid-element" id="twitter">
          <a href="https://twitter.com/VighImi">Twitter</a>
        </div>
        <div class="contact-grid-element" id="email">
          <a href="mailto:vighimre87@gmail.com">Email</a>
        </div>
      </div>
    </section>
    );
}

export default ContactLinks;