import React from 'react'
import './portfolio.css'
import SQUATIFY from '../../assets/squatify.jfif'

const data = [
  {
    id: 1,
    image: SQUATIFY,
    title: "Saunter App for Solo Travelers",
    github: "https://github.com/anastasia-starostina/Squatify-App",
    demo: "https://github.com/anastasia-starostina/Squatify-App",
  },
  {
    id: 2,
    image: SQUATIFY,
    title: "Mindfulness App",
    github: "https://github.com/anastasia-starostina/Frontend-Mindactivity-App",
    demo: "https://github.com/anastasia-starostina/Squatify-App",
  },
  {
    id: 3,
    image: SQUATIFY,
    title: "Squatify Squat Tracker",
    github: "https://github.com/anastasia-starostina/Movie-Generator-REST-API",
    demo: "https://github.com/anastasia-starostina/Squatify-App",
  },
  {
    id: 4,
    image: SQUATIFY,
    title: "Hero's Journey Quiz",
    github: "https://github.com/anastasia-starostina/Personality-Quiz-App",
    demo: "https://github.com/anastasia-starostina/Squatify-App",
  },
  {
    id: 5,
    image: SQUATIFY,
    title: "Zen Garden Blog",
    github: "https://github.com/anastasia-starostina/Zen-Garden-Blog",
    demo: "https://github.com/anastasia-starostina/Squatify-App",
  },
  {
    id: 6,
    image: SQUATIFY,
    title: "Movie Generator REST API",
    github: "https://github.com/anastasia-starostina/Squatify-App",
    demo: "https://github.com/anastasia-starostina/Squatify-App",
  },
];


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
      {
        data.map(({id, image, title, github, demo}) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title}></img>
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })
      }

      </div>
    </section>
  );
}

export default Portfolio