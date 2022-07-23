import React from 'react'
import './about.css'
import ABOUT from "../../assets/ABOUT.png"
import {FiAward} from 'react-icons/fi'
import {FiUsers} from "react-icons/fi"
import {VscFolderLibrary} from "react-icons/vsc"

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About me</h2>
      <div className="container about__container">
      
        <div className="about__me">
          <div className="about__me-image">
            <img src={ABOUT} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FiAward className="about__icon" />
              <h5>Experience</h5>
              <small>6 Months</small>
            </article>
            
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>300+ Worlwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>80+ Completed Projects</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud.
          </p>
          <a href="#contact" className ="btn btn-primary">Let's Talk</a>

        </div>
      </div>
    </section>
  );
}

export default About