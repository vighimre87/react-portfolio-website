import React from "react";
import './index.css';

function ContactForm() {
    return (
        <div className="container">
  <form id="contact-form">

    <label for="yourName">Your Name</label>
    <input type="text" id="yourName" name="yourName" placeholder="Your name.." />

    <label for="email">Your email</label>
    <input type="text" id="email" name="email" placeholder="Your email.." />

    <label for="message">Message</label>
    <textarea id="message" name="message" placeholder="Write something.."></textarea>

    <input type="submit" value="Submit" />

  </form>
</div>
    );
}

export default ContactForm;