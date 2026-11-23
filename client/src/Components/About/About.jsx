import React from "react";
import "./About.css";

export default function About() {
  return (
    <div id="about">
      <div className="aboutContent">
        <div className="about">
          <div className="aboutInfo">
            <h3>
              Personal project: <i>Tanks fer Nuthin&apos;</i> (ongoing)
            </h3>

            <p>
              I am currently working on <i>Tanks fer Nuthin&apos;</i>, a clone
              of &quot;Scorched Earth&quot;, a favorite game from my childhood.
              Select a weapon, set a firing angle and power, and launch to
              destroy enemy tanks. ({" "}
              <a
                style={{ textDecoration: "underline" }}
                href="https://patricklang87.github.io/tanks_2/"
              >
                Frontend Deployment
              </a>{" "}
              |{" "}
              <a
                style={{ textDecoration: "underline" }}
                href="https://github.com/patricklang87/tanks_2"
              >
                Frontend Repo
              </a>{" "}
              |{" "}
              <a
                style={{ textDecoration: "underline" }}
                href="https://github.com/patricklang87/tanksmp"
              >
                Backend repo
              </a>{" "}
              )
            </p>
            <ul>
              <li>
                Created a reusable Canvas component integrating TypeScript/React
                with the JavaScript Canvas API for easy and efficient sprite
                animations.
              </li>
              <li>
                Has begun work on a backend in Java Spring Boot to enable
                websockets for online multiplayer. Will employ Redux Tool Kit
                Query on the front end for clean API integration.
              </li>
              <li>
                In a future phase, I plan to migrate the front end to React
                Native and package game as an App.
              </li>
              <li>
                I started this project in 2024 but it was interrupted when I was
                rehired after a period without work. Now I am using it to test
                &apos;software factory&apos; production techniques working
                independently with Claude. I hope to deploy a multiplayer online
                version of this game soon.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
