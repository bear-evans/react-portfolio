import React, { Fragment } from "react";

function handleSubmit() {
  console.log("This email form is a dummy.");
}

export default function Contact() {
  return (
    <Fragment>
      <h2>Contact</h2>
      <p>Want to get in touch with Bear?</p>
      <script
        src="https://kit.fontawesome.com/ba33a5b68d.js"
        crossorigin="anonymous"
      ></script>
      <div class="container d-flex justify-content-around">
        <a
          id="gmail-button"
          class="btn btn-danger"
          href="mailto:bear-evans@outlook.com"
        >
          <span class="icon">
            <i class="far fa-envelope"></i>
          </span>
          <span> Email </span>
        </a>
        <a
          id="linkedin-button"
          class="btn btn-primary"
          href="http://www.linkedin.com/in/bear-evans"
        >
          <span class="icon">
            <i class="fab fa-linkedin"></i>
          </span>
          <span> LinkedIn </span>
        </a>
        <a
          id="github-button"
          class="btn btn-success"
          href="https://github.com/bear-evans/"
        >
          <span class="icon">
            <i class="fab fa-github"></i>
          </span>
          <span> Github </span>
        </a>
      </div>
      <p className="my-3">Or send Bear a quick email from here.</p>
      <form id="email-form" onSubmit={handleSubmit} method="POST">
        <div className="form-group mt-3">
          <label htmlFor="name-input">Name</label>
          <input type="text" id="name-input" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="email-input">Email address</label>
          <input type="email" id="email-input" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="message-input">Message</label>
          <textarea
            id="message-input"
            className="form-control"
            rows="5"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </Fragment>
  );
}
