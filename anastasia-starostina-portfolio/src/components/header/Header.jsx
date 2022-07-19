import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/ME.jfif"
//Commented out the image while searching for a more suitable one
import HeaderSocails from "./HeaderSocails";

const Header = () => {
  return (
  <header>
    <div className="container header__container">
    <h5>Hey, I'm</h5>
    <h1>Anastasia</h1>
    <h5 className="text-light">Fullstack Developer specializing in UI and UX Design.</h5>
    <CTA/>
    <HeaderSocails/>

    <div className="me">
      <img src={ME} alt="me" />
    </div>

    <a href="#contact" className="scroll__down">Scroll Down</a>
    </div>
  </header>
  )
};

export default Header;
