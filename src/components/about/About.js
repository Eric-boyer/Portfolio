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
              <h5>School</h5>
              <small>3+ Month Le Reacteur </small>
              <small></small>
            </article>
            <article className="about__card">
              <GiDiploma className="about__icon" />
              <h5>School</h5>
              <small>2+ Month FreeCodeCamp</small>
            </article>
            <article className="about__card">
              <GiDiploma className="about__icon" />
              <h5>School</h5>
              <small>2+ Month CodeAcademy</small>
            </article>
            <article className="about__card">
              <FaFolder className="about__icon" />
              <h5>Projects</h5>
              <small>6+ Completed</small>
            </article>
          </div>

          <p className="texte__experience">
            Hello !   J'ai découvert le code en 2020 lorsque
            j'ai fait connaissance d'une amie spécialisée dans ce
            domaine, elle m'a initié dans ce milieu que j'ai tout de suite
            adopté. Suite à une reconversion j'ai saisi l'occasion de me
            lancer dans une formation d'abord en ligne (FreeCodeCamp,
            CodeAcademy) et ensuite une formation plus intensive à
            { <a href="https://www.lereacteur.io/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <strong style={{ color: "yellow" }}> Le Réacteur </strong>
                </a>  
            }
            un Bootcamp spécialisé dans la programmation et la gestion de projet. C'était l'occasion idéale pour moi d'être accompagné par
            une équipe d'expert. Dès le début Il m'a paru très
            clair que j'en savais peu et que mon apprentissage en était qu'à ses
            balbutiements, sans oublier le choix du langage qui est crucial, car
            pour s'assurer de trouver un poste à l'issue de la formation il
            fallait choisir celles qui avaient le vent en poupe: 
             {
              <strong style={{ color: "yellow" }}>
                
                 Javascript, ReactNative,React, NodeJs, Html, Css </strong>
            }
             qui sont devenus mes outils de prédilection, avec comme amiral
            navire {<strong style={{ color: "yellow" }}>Javascript</strong>}.
            <br />
            <br />
             Néanmoins, il
             me semble évident qu'il faut pratiquer en milieu professionnel
            pour les consolider et en forger de nouvelles. 
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
