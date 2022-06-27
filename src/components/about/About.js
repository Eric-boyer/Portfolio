import React from "react";
import "./about.css";
import Moi from "../../assets/Moi.jpeg";
import { GiDiploma } from "react-icons/gi";
import { FaFolder } from "react-icons/fa";

function About() {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Moi} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <GiDiploma className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Month Scool</small>
            </article>
            <article className="about__card">
              <GiDiploma className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Month Scool</small>
            </article>
            <article className="about__card">
              <FaFolder className="about__icon" />
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>
          </div>

          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
          <a href="#contact" className="btn btn-primary" >Parlons !</a>
        </div>
      </div>
    </section>
  );
}

export default About;
