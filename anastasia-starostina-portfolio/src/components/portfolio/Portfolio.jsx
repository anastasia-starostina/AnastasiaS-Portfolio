import React from 'react'
import './portfolio.css'
import SQUATIFY from '../../assets/squatify.jfif'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={SQUATIFY} alt="Squatify App"></img>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item cta">          <a
            href="https://github.com/anastasia-starostina/Squatify-App"
            className="btn">
            Github
          </a>
          <a
            href="https://github.com/anastasia-starostina/Frontend-Mindactivity-App"
            className="btn btn-primary"
            target="_blank"
          >
            Live Demo
          </a>
          </div>

        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={SQUATIFY} alt="Squatify App"></img>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item cta">
          <a
            href="https://github.com/anastasia-starostina/Squatify-App"
            className="btn">
            Github
          </a>
          <a
            href="https://github.com/anastasia-starostina/Frontend-Mindactivity-App"
            className="btn btn-primary"
            target="_blank"
          >
            Live Demo
          </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={SQUATIFY} alt="Squatify App"></img>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item cta">
          <a
            href="https://github.com/anastasia-starostina/Squatify-App"
            className="btn">
            Github
          </a>
          <a
            href="https://github.com/anastasia-starostina/Frontend-Mindactivity-App"
            className="btn btn-primary"
            target="_blank"
          >
            Live Demo
          </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={SQUATIFY} alt="Squatify App"></img>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item cta">
          <a
            href="https://github.com/anastasia-starostina/Squatify-App"
            className="btn">
            Github
          </a>
          <a
            href="https://github.com/anastasia-starostina/Frontend-Mindactivity-App"
            className="btn btn-primary"
            target="_blank"
          >
            Live Demo
          </a>
        </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={SQUATIFY} alt="Squatify App"></img>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item cta">
          <a
            href="https://github.com/anastasia-starostina/Squatify-App"
            className="btn">
            Github
          </a>
          <a
            href="https://github.com/anastasia-starostina/Frontend-Mindactivity-App"
            className="btn btn-primary"
            target="_blank"
          >
            Live Demo
          </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={SQUATIFY} alt="Squatify App"></img>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item cta">
          <a
            href="https://github.com/anastasia-starostina/Squatify-App"
            className="btn">
            Github
          </a>
          <a
            href="https://github.com/anastasia-starostina/Frontend-Mindactivity-App"
            className="btn btn-primary"
            target="_blank"
          >
            Live Demo
          </a>
          </div>
        </article>

      </div>
    </section>
  );
}

export default Portfolio