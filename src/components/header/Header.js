import React from "react";
import "./header.css";
import CV from "../header/CV";
import Mac from "../../assets/Mac.jpeg"
import HeaderSocial from "./HeaderSocial";

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Eric Boyer</h1>
        <h5 className="text-light">Fullstack Developer </h5>
        <CV />
        <HeaderSocial/>
        <div className="moi">
          <img src={Mac} alt="moi"/>
        </div>
        <a href="#portfolio" className="scroll__down">Scroll Down Please</a>
        <a className="T"></a>
      </div>
    </header>
  );
}

export default Header;
