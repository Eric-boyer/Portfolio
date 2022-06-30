import React from "react";
import "./portfolio.css";
import Vinted3 from "../../assets/Vinted3.png";
import HappyCow from "../../assets/HappyCow.png";
import Tripadvisor5 from "../../assets/Tripadvisor5.png";
import Netflix3 from "../../assets/Netflix3.png";
import Marvel from "../../assets/Marvel.png";
import airbnb2 from "../../assets/airbnb2.png";

function portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Vinted3} alt="" />
          </div>
          <h3>Clone Vinted</h3>
         <div className="portfolio__item-cta">
         <a
            href="https://github.fr"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            Github
          </a>
          <a
            href="https://github.fr"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            Netlify Demo
          </a>
         </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={HappyCow} alt="" />
          </div>
          <h3>Clone HappyCow</h3>
         <div className="portfolio__item-cta">
         <a
            href="https://github.fr"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            Github
          </a>
          <a
            href="https://github.fr"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
           Netlify Demo
          </a>
         </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Tripadvisor5} alt="" />
          </div>
          <h3>Clone Tripadvisor</h3>
         <div className="portfolio__item-cta">
         <a
            href="https://github.fr"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            Github
          </a>
          <a
            href="https://github.fr"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
           Netlify Demo
          </a>
         </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Netflix3} alt="" />
          </div>
          <h3>Clone Netflix</h3>
         <div className="portfolio__item-cta">
         <a
            href="https://github.fr"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            Github
          </a>
          <a
            href="https://github.fr"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
           Netlify Demo
          </a>
         </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Marvel} alt="" />
          </div>
          <h3>Clone Marvel</h3>
         <div className="portfolio__item-cta">
         <a
            href="https://github.fr"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            Github
          </a>
          <a
            href="https://phenomenal-souffle-17b465.netlify.app"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            Netlify Demo
          </a>
         </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image1">
            <img src={airbnb2} alt="" />
          </div>
          <h3>Clone AirBnB</h3>
         <div className="portfolio__item-cta">
         <a
            href="https://github.fr"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            Github
          </a>
          <a
            href="https://github.fr"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
           Netlify Demo
          </a>
         </div>
        </article>
      </div>
    </section>
  );
}

export default portfolio;
