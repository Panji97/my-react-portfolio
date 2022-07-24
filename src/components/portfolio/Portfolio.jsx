import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Server Staycation",
    github: "https://github.com/Panji97/Server-Staycation",
    demo: "https://server-staycation-panjisk.herokuapp.com",
  },
  {
    id: 2,
    image: IMG2,
    title: "My Doctor",
    github: "https://github.com/Panji97/MyDoctor-RN",
    demo: "",
  },
  {
    id: 3,
    image: IMG3,
    title: "Nyimas Antam",
    github: "https://github.com/Panji97/bankGold",
    demo: "",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__items">
              <div className="portfolio__items-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__items-cta">
                <a href={github} target="_blank" className="btn">
                  Github
                </a>
                {id === 1 && (
                  <a href={demo} target="_blank" className="btn btn-primary">
                    Live Demo
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
