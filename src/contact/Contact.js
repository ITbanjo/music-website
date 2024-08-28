import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  function modal() {
    const modalMsg = `Message Sent`;
    return window.confirm(modalMsg);
  }

  const SERVICE_ID = process.env.REACT_APP_EMAIL_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_EMAIL_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.REACT_APP_EMAIL_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    e.target.reset();
    modal();
  };

  return (
    <div className="col-md-6 mx-auto">
      <h1 className="text-center my-5">Contact</h1>

      <form ref={form} onSubmit={sendEmail}>
        <div className="form-group">
          <label for="user_name">Full Name</label>
          <input type="text" className="form-control" name="user_name" />
        </div>

        <div className="form-group">
          <label for="user_email">Email Address</label>
          <input
            type="email"
            className="form-control"
            name="user_email"
            placeholder="name@example.com"
          />
        </div>

        <div className="form-group">
          <label for="subject">Subject</label>
          <input type="text" className="form-control" name="subject" />
        </div>

        <div className="form-group">
          <label for="message">Message</label>
          <textarea className="form-control" name="message" rows="3"></textarea>
          <button type="submit" value="Send" className="button my-3">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
