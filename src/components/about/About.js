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
              <h5>Scool</h5>
              <small>3+ Month Le Reacteur </small>
              <small></small>
            </article>
            <article className="about__card">
              <GiDiploma className="about__icon" />
              <h5>Scool</h5>
              <small>2+ Month FreeCodeCamp</small>
            </article>
            <article className="about__card">
              <FaFolder className="about__icon" />
              <h5>Projects</h5>
              <small>6+ Completed</small>
            </article>
          </div>

          <p className="texte__experience">
            Hello ! ! je m'appelle Eric. J'ai découvert le code en 2020 lorsque
            j'ai fait connaissance d'une proche amie  spécialisée dans
            ce domaine, elle m'a initié dans ce milieu que j'ai tout de suite
            adopté. J'ai donc, suite à une reconversion ; saisi l'occasion de
            me lancer dans une formation d'abord en ligne (FreeCodeCamp,
            CodeAcademy) et ensuite une formation plus intensive à Le Réacteur
            une école spécialisée dans la programmation, située dans le centre
            de Paris. C'était l'occasion idéale pour moi d'être accompagné par
            une équipe experte. La surprise, étaient ma première impression de voir
            ce monde foisonnant qu'est la programmation avec ces langages, son
            dynamisme, ses codes; en somme un écosystème constamment en mouvement dont je ne mesurais pas bien la portée. Il m'a
            paru très clair que j'en savais peu et que mon apprentissage en
            était qu'à ses balbutiements, sans oublier le choix du langage qui est crucial, car
            pour s'assurer de trouver un poste à l'issue de la formation il
            fallait choisir celles qui avaient le vent en poupe :
           {<strong style={{color:"yellow"}}> React, ReactNative, Javascript, NodeJs, Html, Css</strong>} qui sont devenus
            mes outils de prédilection, avec comme amiral navire {<strong style={{color:"yellow"}}>React</strong>}.
            <br />
            <br />
            Conscient néanmoins de la fragilité de mes compétences acquises, il est
            me semble évident qu'il faut pratiquer en milieu professionnel pour
            les consolider et en forger de nouvelles. C'est pourquoi je soumets
            ma candidature pour un stage d'au moins 6 mois qui me permettra de monter plus vite en
            compétence.
          </p>
          <a href="#contact" className="btn btn-primary">
            Parlons !
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
