import React from 'react'
import './footer.css'
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Anastasia Starostina
      </a>

      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/anastasia-starostina-900bb2130">
          <BsLinkedin />
        </a>
        <a href="https://github.com/anastasia-starostina"><BsGithub/></a>
        <a href="https://twitter.com/ShternAnastasia"><BsTwitter/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Built & Designed by me in React.</small>
      </div>
    </footer>
  );
}

export default Footer