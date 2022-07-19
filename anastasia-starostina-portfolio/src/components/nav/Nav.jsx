import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import { RiProjectorFill } from "react-icons/ri";

const Nav = () => {
  return (
    <nav>
      <a href="#">
        <AiOutlineHome />
      </a>
      <a href="#about">
        <AiOutlineUser />
      </a>
      <a href="#portfolio">
        <RiProjectorFill />
      </a>
      <a href="#services">
        <AiOutlineHome />
      </a>
      <a href="#contact">
        <AiOutlineHome />
      </a>
    </nav>
  );
}

export default Nav