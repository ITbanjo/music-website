import React from "react";

function Contact() {
  return (
    <div>
      <h1 className="text-center my-5">Contact</h1>
      <form>
        <div className="form-group">
          <label for="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"
          />
        </div>
        <div className="form-group">
          <label for="subject">Subject</label>
          <input
            type="text"
            className="form-control"
            id="subject"
            placeholder="name@example.com"
          />
        </div>

        <div className="form-group">
          <label for="exampleFormControlTextarea1">Example textarea</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
          <button type="submit" className="button my-2">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
