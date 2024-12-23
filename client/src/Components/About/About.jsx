import React from "react";
import portrait from "../../assets/images/self2.jpg";
import "./About.css";
import Skills from "../Skills/Skills";
import resume from "../../assets/documents/lang_resume.pdf";

export default function About() {
  return (
    <div id="about">
      <div className="aboutAndSkills">
        <div className="about">
          <div className="aboutPortrait">
            <img src={portrait} alt="Patrick Lang" />
          </div>
          <div className="aboutSnippet">
            <h2>A little about me... </h2>
            <p>
              After 2&frac12; great years as a Full Stack Software Developer at
              MassMutual Life Insurance Company, I was laid off in September
              2024. However, my own work continues. I am having a great time
              working on personal projects and upskilling while searching for my
              next professional challenge.
            </p>
          </div>

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

            <h3>
              Professional experience: Full Stack Developer at{" "}
              <i>MassMutual Life Ins Co</i> (April 2022 - Sept 2024)
            </h3>
            <p>
              At MassMutual I worked on a fast-paced agile team. I helped
              develop, deploy and improve ServiceNet 2.0, a web application used
              by financial professionals to service their clients&apos; policies
              and contracts.
              <ul>
                <li>
                  Built out front-end features in React and modern JavaScript,
                  concentrating on code clarity, component reusability, and unit
                  test coverage.
                </li>
                <br />
                <li>
                  Integrated and maintained RESTful API calls in the application
                  backend layer, testing with Postman and Kong API logs.
                </li>
                <br />
                <li>
                  Worked closely with all sides of my Agile application team,
                  often in a cross-functional capacity.
                </li>
                <br />
                <li>
                  Presented new application features in stakeholder meetings for
                  early feedback and continuous input.
                </li>
                <br />
                <li>
                  Coordinated with a variety of internal and external teams to
                  spearhead microservice integration and expansion (DocuSign,
                  Quantum Metrics, Communications API), as well as SaaS
                  migrations (Kafka Confluent Cloud, Vault SaaS) at the
                  application level.
                </li>
              </ul>
              See my commit history for MassMutual{" "}
                  <a
                    style={{ textDecoration: "underline" }}
                    href="https://github.com/pslang11"
                  >
                    here
                  </a>
                  .
            </p>

            <h3>Early Carreer</h3>
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
        <div className="about">
          <div className="aboutPortfolio">
            <h2>This portfolio</h2>
            <p>
              This portfolio was originally created in 2021 and 2022 while I was
              landing my first coding job and features several projects from
              that time. As my concentration is on new projects, I will not be
              redeploying all projects from that time, but you are very welcome
              to view their GitHub repos!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
