import React from "react";
import "./about.css";
import ME from "../../assets/me-about.png";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about me" />
          </div>
        </div>
        <div className="about__content">
          <p>
            A person who passionate about learning, likes to collaborate,
            interested in logic and problem solving. Experience in making
            applications based on web and mobile using JavaScript, React, etc.
            Able to take part in the development to deployment process and ready
            to adapt to new technologies.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
