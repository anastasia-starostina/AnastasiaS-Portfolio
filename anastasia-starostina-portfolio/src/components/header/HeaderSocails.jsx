import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";


const HeaderSocails = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/anastasia-starostina-900bb2130"
        rel="noopener"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/anastasia-starostina"
        rel="noopener"
        target="__blank"
      >
        <BsGithub />
      </a>
      <a
        href="https://twitter.com/ShternAnastasia"
        rel="noopener"
        target="_blank"
      >
        <BsTwitter />
      </a>
    </div>
  );
}

export default HeaderSocails