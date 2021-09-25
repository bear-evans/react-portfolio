import React, { Fragment } from "react";
import Project from "../Project";

export default function Portfolio() {
  return (
    <Fragment>
      <h2>Portfolio</h2>
      <p>A curated list of my past projects.</p>
      <div className="container d-flex">
        <Project
          title="Bearpress"
          imgUrl="https://bear-evans.github.io/portfolio/assets/images/cards/bearpress.jpg"
          imgAlt="Screenshot of a blog post"
          description="A light wordpress clone written in Express and Handlebars."
          github="https://github.com/bear-evans/bearpress"
          demo="https://bearpress.herokuapp.com/"
        />
        <Project
          title="Trivia Night"
          imgUrl="https://bear-evans.github.io/portfolio/assets/images/cards/trivia-night.jpg"
          imgAlt="Screenshot of Trivia Night"
          description="An app to run an at-home trivia night, with drink suggestions and team scoring."
          github="https://github.com/bear-evans/trivia-night"
          demo="https://bear-evans.github.io/trivia-night/"
        />
        <Project
          title="DM Helper"
          imgUrl="https://bear-evans.github.io/portfolio/assets/images/cards/dm-helper.jpg"
          imgAlt="Screenshot of DM Helper"
          description="A helper application for running a Dungeons and Dragons game, with dice rolling and character storage."
          github="https://github.com/bear-evans/dm-helper"
          demo="https://bear-dm-helper.herokuapp.com/"
        />
        <Project
          title="Bear's Animal Facts"
          imgUrl="https://bear-evans.github.io/portfolio/assets/images/cards/animal-quiz.jpg"
          imgAlt="Bear's Animal Facts"
          description="A light-hearted quiz about animals, running entirely with Javascript."
          github="https://github.com/bear-evans/animal-quiz"
          demo="https://bear-evans.github.io/animal-quiz/"
        />
      </div>
    </Fragment>
  );
}
