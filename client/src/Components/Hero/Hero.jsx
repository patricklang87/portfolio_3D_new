import "./Hero.css";
import resume from "../../assets/documents/lang_resume.pdf";

export default function Hero() {
  return (
    <div className="Hero">
      <div className="heroMessage">
        <h1>Hi! I&apos;m Patrick.</h1>
        <h2>
          I&apos;m a <strong>full stack developer</strong> who <strong>loves new challenges</strong>. Click on the charms below to learn more about past personal projects or scroll down to learn about what I&apos;m working on now.
        </h2>
        <a href="https://www.linkedin.com/in/pslang/">
          <button style={{ backgroundColor: "hotpink" }}>Get in touch</button>
        </a>{" "}
        <a href={resume} target="_blank" rel="noopener noreferrer">
          <button style={{ marginLeft: "10px", backgroundColor: "hotpink" }}>
            View my resume
          </button>
        </a>
      </div>
    </div>
  );
}
