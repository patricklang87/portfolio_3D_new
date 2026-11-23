import React from "react";
import "./About.css";
import Skills from "../Skills/Skills";
import resume from "../../assets/documents/lang_resume.pdf";

export default function About() {
  return (
    <div id="about">
      <div className="aboutAndSkills">
        <div className="about">
          <div className="aboutInfo">
            <h3>
              Personal project: <i>Tanks fer Nuthin&apos;</i> (Sept. 2024 -
              ongoing)
            </h3>

            <p>
              I am currently working on <i>Tanks fer Nuthin&apos;</i>, a clone
              of &quot;Scorched Earth&quot;, a favorite game from my childhood.
              Select a weapon, set a firing angle and power, and launch to
              destroy enemy tanks. (            <a
                    style={{ textDecoration: "underline" }}
                    href="https://patricklang87.github.io/tanks_2/"
                  >
                    Frontend Deployment
                  </a> | <a
                    style={{ textDecoration: "underline" }}
                    href="https://github.com/patricklang87/tanks_2"
                  >
                    Frontend Repo
                  </a> | <a
                    style={{ textDecoration: "underline" }}
                    href="https://github.com/patricklang87/tanksmp"
                  >
                    Backend repo
                  </a> )
              <ul>
                <li>
                  Created a reusable Canvas component integrating
                  TypeScript/React with the JavaScript Canvas API for easy and
                  efficient sprite animations.
                </li>
                <br />
                <li>
                  Has begun work on a backend in Java Spring Boot to enable
                  websockets for online multiplayer. Will employ Redux Tool Kit
                  Query on the front end for clean API integration.
                </li>
                <br />
                <li>
                  In a future phase, I plan to migrate the front end to React
                  Native and package game as an App.
                </li>
              </ul>
            </p>

            <h3>Early career</h3>
            <p>
              I earned a PhD in German Studies in 2019. While teaching German
              and Russian languages at UNC Chapel Hill during the pandemic, I
              decided to retrain as a software developer, and learned to code
              using a variety of online resources, such as CodeCademy. I began
              my first professional coding job in April 2022 and haven&apos;t
              looked back since!
            </p>
            <a href={resume} target="_blank" rel="noopener noreferrer">
              <button>View my resume</button>
            </a>
          </div>
        </div>
        <Skills />
      </div>
    </div>
  );
}
