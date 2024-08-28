import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const emptyData = {
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  };
  const [formData, setFormData] = useState(emptyData);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  const SERVICE_ID = process.env.REACT_APP_EMAIL_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_EMAIL_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.REACT_APP_EMAIL_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formData.user_name) {
      return window.confirm("Please enter a name.");
    }
    if (!formData.user_email) {
      return window.confirm("Please enter an email address.");
    }
    if (!formData.message) {
      return window.confirm("Please enter a message");
    }

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

    setFormData(emptyData);
    return window.confirm("Message sent. Thank you!");
  };

  return (
    <div className="col-md-6 mx-auto">
      <h1 className="text-center my-5">Contact</h1>

      <form ref={form} onSubmit={sendEmail}>
        <div className="form-group">
          <label for="user_name">Full Name</label>
          <input
            type="text"
            className="form-control"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label for="user_email">Email Address</label>
          <input
            type="email"
            className="form-control"
            name="user_email"
            placeholder="name@example.com"
            value={formData.user_email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label for="subject">Subject</label>
          <input
            value={formData.subject}
            type="text"
            className="form-control"
            name="subject"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label for="message">Message</label>
          <textarea
            className="form-control"
            name="message"
            rows="3"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit" value="Send" className="button my-3">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
