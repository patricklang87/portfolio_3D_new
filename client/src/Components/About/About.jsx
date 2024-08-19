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
          <div className="aboutInfo">
            <h2>A little about me... </h2>
            <p>
              After 2&frac12; years as a Software Developer at Massmutual Life
              Insurance Company, I am looking for the next step in my carreer.
            </p>
            <p>
              At MassMutual I worked on a fast-paced agile team. I helped
              develop, deploy and improve ServiceNet 2.0, a web application used
              by financial professionals to service their clients&apos; policies and
              contracts. I honed my React skills to build out application
              features, integrated API calls to enable new transactions in our
              application, and helped coordinate a variety of technology
              integrations and migrations, such moving our application
              to new AWS landing zones, from self-hosted Kafka to Kafka Confluent
              Cloud, and from Legacy Vault to Vault SaaS.
            </p>
            <p>
              I earned a PhD in German Studies in 2019. While teaching German
              and Russian languages at UNC Chapel Hill during the pandemic, I
              decided to retrain as a software developer, and learned to code
              using a variety of online resources, such as CodeCademy. I began my
              first professional coding job in April 2022 and haven&apos;t looked
              back since!
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
              landing my first coding job. Though it has lain dormant for a
              while, I am resurrecting it to serve as a visual focus for my
              job-search efforts. I won&apos;t be putting all projects back online,
              as they need to be migrated from create-react-app to vite,
              moved from Heroku to Render (RIP Heroku free tier) and have
              their outdated dependecies updated. Needless to say, after several
              years working professionally, I would approach some of these
              projects differently that I did before, but I&apos;m still proud of my
              work back then!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
