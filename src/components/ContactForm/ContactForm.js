import React, {useState} from "react";
import './index.css';
import {validateEmail, validateName} from '../../utils/helper';

function ContactForm() {

// Create states for name, email and messsage and errormessage to handle changes on the page
const [yourName, setYourName] = useState('');
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');
const [errorMessage, setErrorMessage] = useState('');


// Whichever field the user will click and type in the value of that field will be equal to that the user typed in
// and set name, email or message to that
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

// Validate user input and in case invalid input displays an error message at the bottom
// If all the fields are correct the errorMessage will be a welcome message
const handleFormSubmit = (e) => {
  e.preventDefault();
  const feedback = document.querySelector('.feedback');
  
  if (!validateName(yourName)) {
    console.log("Your name is not valid!");
    feedback.classList.remove('success');
    feedback.classList.add('error');
    setErrorMessage("Please provide a valid name!");
    return;
  }
  if (!validateEmail(email)) {
    console.log("Your email is not valid");
    feedback.classList.remove('success');
    feedback.classList.add('error');
    setErrorMessage("Your email is invalid, please provide a valid email address!");
    return;
  }
  if (message === '') {
    console.log("You didn't type anything in the message field.");
    feedback.classList.remove('success');
    feedback.classList.add('error');
    setErrorMessage("Please provide a message!");
    return;
  }
  feedback.classList.remove('error');
  feedback.classList.add('success');
  setErrorMessage("Thank you for your message! We will contact you soon via the provided email address.");

  setYourName('');
  setEmail('');
  setMessage('');
}

    return (
        <div className="formContainer">
  <form id="contact-form">
    <h2>Contact Me</h2>

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
              placeholder="Your message..."
              value={message}
              onChange={handleInputChange}
              />

    <button type="button" onClick={handleFormSubmit}>Submit</button>
    <div>
    <p className="feedback">{errorMessage}</p>
  </div>
  </form>
</div>
    );
}

export default ContactForm;