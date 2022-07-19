import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import { FaUser } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import {AiFillMessage} from 'react-icons/ai'
import {RiServiceFill} from 'react-icons/ri'
import { useState } from 'react';


const Nav = () => {

  const [activeNav, setActiveNav] = useState("#")

  return (
    <nav>
      <a href="#" className={activeNav === "#" ? "active" : ""}>
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "about" ? "active" : ""}
      >
        <FaUser />
      </a>
      <a href="#portfolio">
        <FaBook />
      </a>
      <a href="#services">
        <RiServiceFill />
      </a>
      <a href="#contact">
        <AiFillMessage />
      </a>
    </nav>
  );
}

export default Nav