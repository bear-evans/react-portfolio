import React, { Fragment } from "react";

export default function Contact() {
  return (
    <Fragment>
      <script
        src="https://kit.fontawesome.com/ba33a5b68d.js"
        crossorigin="anonymous"
      ></script>
      <h2>Contact</h2>
      <p>Want to get in touch with Bear?</p>
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
    </Fragment>
  );
}
