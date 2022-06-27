import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

function HeaderSocial() {
  return (
    <div className="header__social">
      <a href="https://linkedin.fr" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://github.fr" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
    </div>
  );
}

export default HeaderSocial;
