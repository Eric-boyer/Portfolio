import "./experience.css";
import React from "react";
import { FaReact } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import{SiNetlify} from "react-icons/si"
import {SiTypescript} from "react-icons/si"
import{SiExpo} from "react-icons/si"
import{GrHeroku} from "react-icons/gr"
import{DiMongodb} from "react-icons/di"
import{GrNode} from "react-icons/gr"
import{TbBrandNextjs} from "react-icons/tb"
import {TbBrandReactNative} from "react-icons/tb"


function Experience() {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="Experience__frontend">
          <h3>Frontend Developement</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiFillHtml5 />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Intermediaire</small>
              </div>
            </article>
            <article className="experience__details">
              <DiCss3 style={{color:"white"}} className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small  className="text-light">Intermediaire</small>
              </div>
            </article>
            <article className="experience__details">
              <FaReact />
              <div>
                <h4>REACT</h4>
                <small className="text-light">Intermediaire</small>
              </div>
            </article>
            <article className="experience__details">
              <TbBrandReactNative />
              <div>
                <h4>REACT NATIVE</h4>
                <small className="text-light">Intermediaire</small>
              </div>
            </article>
            <article className="experience__details">
              <SiTailwindcss />
              <div>
                <h4>TAILWIND</h4>
                <small className="text-light">Debutant</small>
              </div>
            </article>
            <article className="experience__details">
              <DiJavascript1 />
              <div>
                {" "}
                <h4>JAVASCRIPT</h4>
                <small className="text-light">Intermediaire</small>
              </div>
            </article>
            <article className="experience__details">
              <SiNetlify />
              <div>
                <h4>NETLIFY</h4>
                <small className="text-light">Intermediaire</small>
              </div>
            </article>
            <article className="experience__details">
              <SiTypescript />
              <div>
                {" "}
                <h4>TYPESCRIPT</h4>
                <small className="text-light">Debutant</small>
              </div>
            </article>
            <article className="experience__details">
              <TbBrandNextjs />
              <div>
                <h4>Next</h4>
                <small className="text-light">Debutant</small>
              </div>
            </article>
            <article className="experience__details">
              <SiExpo />
              <div>
                {" "}
                <h4>Expo</h4>
                <small className="text-light">Intermediaire</small>
              </div>
            </article>
          </div>
        </div>

        <div className="exprience__backend">
          <h3>Backend Developement</h3>
          <div className="experience__content">
            <article className="experience__details">
              <GrNode />
              <div>
                {" "}
                <h4>Node Js</h4>
                <small className="text-light">Intermediaire</small>
              </div>
            </article>
            <article className="experience__details">
              <DiMongodb />
              <div>
                {" "}
                <h4>Mongodb</h4>
                <small className="text-light">Intermediaire</small>
              </div>
            </article>
            <article className="experience__details">
              <FaReact />
              <div>
                {" "}
                <h4>Express</h4>
                <small className="text-light">Intermediaire</small>
              </div>
            </article>
            <article className="experience__details">
              <GrHeroku />
              <div>
                {" "}
                <h4>Heroku</h4>
                <small className="text-light">Intermediaire</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
