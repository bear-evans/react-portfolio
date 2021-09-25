import React from "react";

export default function Project(props) {
  return (
    <article>
      <div class="card">
        <h5 class="card-header">{props.title}</h5>
        <img src={props.imgUrl} class="card-img-top" alt={props.imgAlt} />
        <div class="card-body">
          <p class="card-text">{props.description}</p>
          <div className="d-flex justify-content-evenly">
            <a href={props.github} className="btn btn-primary">
              Github
            </a>
            <a href={props.demo} className="btn btn-primary">
              View Demo
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
