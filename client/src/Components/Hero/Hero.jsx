import "./Hero.css";
import React from "react";
import resume from "../../assets/documents/lang_resume.pdf";

export default function Hero() {
  return (
    <div className="Hero">
      <div className="heroMessage">
        <h1>Hi! I&apos;m Patrick.</h1>
        <h2>
          I&apos;m a full stack developer working professionally{" "}
          <strong>since April 2022</strong>. I love new challenges and <strong>I am
          looking for the next step in my career</strong>.
        </h2>
        <a href="#contact">
          <button style={{ backgroundColor: "hotpink" }}>Get in touch</button>
        </a>{" "}
        <a href={resume} download>
          <button style={{ marginLeft: "10px", backgroundColor: "hotpink" }}>
            View my resume
          </button>
        </a>
      </div>
    </div>
  );
}
