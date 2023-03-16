import React, {useState} from "react";
import './index.css';
import {validateEmail, validateName} from '../../utils/helper';

function ContactForm() {

const [yourName, setYourName] = useState('');
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');
const [errorMessage, setErrorMessage] = useState('');


const handleInputChange = (e) => {
  const {target} = e;
  const inputType = target.name;
  const inputValue = target.value;

  if(inputType === 'yourName') {
    console.log(yourName);
    setYourName(inputValue);
  } else if (inputType === 'email') {
    console.log(email);
    setEmail(inputValue);
  } else {
    console.log(message);
    setMessage(inputValue);
  }
};

const handleFormSubmit = (e) => {
  e.preventDefault();
  
  if (!validateName(yourName)) {
    console.log("Your name is not valid!");
    setErrorMessage("Please provide a valid name!");
    return;
  }
  if (!validateEmail(email)) {
    console.log("Your email is not valid");
    setErrorMessage("Your email is invalid, please provide a valid email address!");
    return;
  }
  if (message === '') {
    console.log("You didn't type anything in the message field.");
    setErrorMessage("Please provide a message!");
    return;
  }
  setErrorMessage("Thank you for your message! We will contact you soon via the provided email address.");

  setYourName('');
  setEmail('');
  setMessage('');
}

    return (
        <div className="container">
          <h2>Contact Me</h2>
  <form id="contact-form">

    <label>Your Name</label>
    <input type="text"
            id="yourName"
            name="yourName"
            placeholder="Your name.."
            value={yourName}
            onChange={handleInputChange}
            />

    <label>Your email</label>
    <input type="text"
          id="text"
          name="email"
          placeholder="Your email.."
          value={email}
          onChange={handleInputChange}
          />

    <label>Message</label>
    <textarea id="message"
              name="message"
              placeholder="Write something.."
              value={message}
              onChange={handleInputChange}
              />

    <button type="button" onClick={handleFormSubmit}>Submit</button>
  </form>
  <div>
    <p className="feedback">{errorMessage}</p>
  </div>
</div>
    );
}

export default ContactForm;