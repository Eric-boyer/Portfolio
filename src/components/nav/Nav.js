import React from "react";
import "./nav.css";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BsJournalBookmark } from "react-icons/bs";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { MdScreenSearchDesktop } from "react-icons/md";

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
      <a
        href="#experience"
        onClick={() => {
          setActiveNav("#experience");
        }}
        className={activeNav === "#experience" ? "active" : null}
      >
        <BsJournalBookmark />
      </a>

      <a
        href="#portfolio"
        onClick={() => {
          setActiveNav("#portfolio");
        }}
        className={activeNav === "#portfolioo" ? "active" : null}
      >
        <MdScreenSearchDesktop />
      </a>
      <a
        href="#contact"
        onClick={() => {
          setActiveNav("#contact");
        }}
        className={activeNav === "#contact" ? "active" : null}
      >
        <BsFillTelephoneOutboundFill />
      </a>
    </nav>
  );
}

export default Nav;
