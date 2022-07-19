import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";


const HeaderSocails = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/anastasia-starostina-900bb2130"
        target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/anastasia-starostina" target="__blank">
        <BsGithub />
      </a>
      <a href="https://twitter.com/ShternAnastasia" target="_blank">
        <BsTwitter />
      </a>
    </div>
  );
}

export default HeaderSocails