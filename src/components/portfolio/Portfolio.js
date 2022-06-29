import React from "react";
import "./portfolio.css";
import IVIN from "../../assets/img/IVIN.jpeg";

function portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IVIN} alt="" />
          </div>
          <h3>portfolio title</h3>
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
            <img src={IVIN} alt="" />
          </div>
          <h3>portfolio title</h3>
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
            <img src={IVIN} alt="" />
          </div>
          <h3>portfolio title</h3>
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
            <img src={IVIN} alt="" />
          </div>
          <h3>portfolio title</h3>
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
            <img src={IVIN} alt="" />
          </div>
          <h3>portfolio title</h3>
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
            <img src={IVIN} alt="" />
          </div>
          <h3>portfolio title</h3>
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
