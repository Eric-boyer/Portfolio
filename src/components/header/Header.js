import React from "react";
import "./header.css";
import CV from "../header/CV";
import Moi2 from "../../assets/Moi2.png"
import HeaderSocial from "./HeaderSocial";

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Eric Boyer</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CV />
        <HeaderSocial/>
        <div className="moi">
          <img src={Moi2} alt="moi"/>
        </div>
        <a href="#contact" className="scroll__down">Scroll Down Please</a>
      </div>
    </header>
  );
}

export default Header;
