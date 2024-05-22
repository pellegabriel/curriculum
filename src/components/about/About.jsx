import React from "react";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__content">
          <p>
            Hello my Name Is Gabriel. I come from the land called Argentina,
            more specifically from Santa Cruz / Río Gallegos. I have the
            qualities of a dedicated subject interested in web development and
            who in turn loves art.
            <br />
            I would like to create pages mixing several disciplines, which I am
            perfecting day by day.
            <br />
            I am more than willing to learn and create new projects, if
            you are interested and I can be of use to you in some work/task,
            contact me in the contact section, and I will gladly answer you.
          </p>
          <a href="#contact" className="nes-btn is-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
