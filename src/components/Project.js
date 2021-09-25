import React from "react";

export default function Project(props) {
  return (
    <article className="col-3 mb-3 mx-3">
      <div className="card">
        <h5 className="card-header">{props.title}</h5>
        <img src={props.imgUrl} className="card-img-top" alt={props.imgAlt} />
        <div className="card-body">
          <p className="card-text">{props.description}</p>
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
