import React from "react";
import "./nav.css";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BsJournalBookmark } from "react-icons/bs";
import { RiContactsBook2Fill } from "react-icons/ri";

import { useState } from "react";

function Nav() {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <a
        href="#"
        onClick={() => {
          setActiveNav("#");
        }}
        className={activeNav === "#" ? "active" : null}
      >
        <AiFillHome />
      </a>
      <a
        href="#about"
        onClick={() => {
          setActiveNav("#about");
        }}
        className={activeNav === "#about" ? "active" : null}
      >
        <AiOutlineUser />
      </a>
      <a href="#experience"  onClick={() => {
          setActiveNav("#experience");
        }}
        className={activeNav === "#experience" ? "active" : null}>
        <BsJournalBookmark />
      </a>
      <a href="#contact"  onClick={() => {
          setActiveNav("#contact");
        }}
        className={activeNav === "#contact" ? "active" : null}>
        <RiContactsBook2Fill />
      </a>
      
    </nav>
  );
}

export default Nav;
