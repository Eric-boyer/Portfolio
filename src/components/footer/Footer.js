import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import{FiInstagram} from "react-icons/fi"
import "../footer/footer.css"

function Footer() {
  return (
    <footer>
      <a href="#" className="footer__logo">
        ERIC BOYER
      </a>
      <ul className="permalinks">
        <li>
          <a href="#"></a>{" "}
        </li>
        <li>
          <a href="#about"></a>{" "}
        </li>
        <li>
          <a href="#experience"></a>{" "}
        </li>
        <li>
          <a href="#contact"></a>{" "}
        </li>
        <li>
          <a href="#portfolio"></a>{" "}
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/eric-boyer-810678211/" target="_blank" rel="noreferrer" >
          {" "}
          <AiFillLinkedin />{" "}
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer" >
          {" "}
          <FiInstagram />{" "}
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer" >
          {" "}
          <AiOutlineTwitter />{" "}
        </a>
      </div>
      <div className="footer__copyright">
        <small> By Eric Boyer</small>
      </div>
    </footer>
  );
}

export default Footer;
