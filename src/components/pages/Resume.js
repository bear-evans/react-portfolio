import React, { Fragment } from "react";

export default function Resume() {
  return (
    <Fragment>
      <h2>Resume</h2>
      <p>My resume is available as a PDF.</p>
      <div class="container d-flex justify-content-around">
        <a
          id="resume-button"
          class="button"
          href="https://bear-evans.github.io/portfolio/assets/Resume.pdf"
        >
          <span class="icon">
            <i class="far fa-file-pdf"></i>
          </span>
          <span> Resume </span>
        </a>
      </div>
    </Fragment>
  );
}
