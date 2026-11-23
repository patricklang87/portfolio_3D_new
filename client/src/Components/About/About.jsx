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
              A clone of &quot;Scorched Earth&quot;, a favorite game from my
              childhood. Select a weapon, set a firing angle and power, and
              launch to destroy enemy tanks. ({" "}
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
                Built a reusable Canvas component that integrates
                TypeScript/React with the JavaScript Canvas API for efficient
                sprite animations.
              </li>
              <li>
                Started a Java Spring Boot backend to enable WebSocket
                multiplayer, with Redux Toolkit Query planned for clean API
                integration on the front end.
              </li>
              <li>
                Planned next: migrate the front end to React Native and package
                the game as an app.
              </li>
              <li>
                Begun in 2024 and paused when I returned to full-time work.
                I&apos;m now resuming it to test &quot;software factory&quot;
                techniques, building independently with Claude, with the goal of
                deploying an online multiplayer version.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
