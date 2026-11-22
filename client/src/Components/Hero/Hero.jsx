import "./Hero.css";
import resume from "../../assets/documents/lang_resume.pdf";
import HeroLaptop from "../../Three/HeroLaptop/HeroLaptop";

export default function Hero() {
  return (
    <section className="Hero" aria-labelledby="heroTitle">
      <div className="heroMessage">
        <h1 id="heroTitle">Hi! I&apos;m Patrick.</h1>
        <p className="heroIntro">
          I&apos;m a <strong>software developer</strong> with <strong>four years of professional experience</strong>. My expertise lies in front-end work, primarily React, TypeScript, and Node.js, but I have worked in full-stack roles for several years.
          Scroll down for highlights from my professional work, followed by personal projects I built along the way.
        </p>
        <div className="heroActions">
          <a href="https://www.linkedin.com/in/pslang/" target="_blank" rel="noopener noreferrer">
            <button className="heroButton">Get in touch</button>
          </a>
          <a href={resume} target="_blank" rel="noopener noreferrer">
            <button className="heroButton">View my resume</button>
          </a>
        </div>
      </div>
      <div className="heroVisual">
        <HeroLaptop />
      </div>
    </section>
  );
}
