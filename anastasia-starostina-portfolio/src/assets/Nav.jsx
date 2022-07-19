import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import { FaUser } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import {AiFillMessage} from 'react-icons/ai'
import {RiServiceFill} from 'react-icons/ri'


const Nav = () => {
  return (
    <nav>
      <a href="#" className='active'>
        <AiOutlineHome />
      </a>
      <a href="#about">
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