import React from "react";
import portrait from "../../assets/images/self2.jpg";
import "./About.css";
import Skills from "../Skills/Skills";
// import resume from "../../assets/documents/Lang_Patrick_Resume_20210908"

export default function About() {
  return (
    <div id="about">
      <div className="about">
        <div className="aboutInfo">
          <h2>A little about me... </h2>
          <p>
            After 2&frac12; years as a Software Developer at Massmutual Life Insurance Company, I am looking for the next step in my carreer.
            </p>
            <p>
            At MassMutual I worked on a fast-paced agile team. I helped develop, deploy and improve ServiceNet 2.0, a web application used by financial professionals to service their clients' policies and contracts. I honed my React skills to build out application features, integrated numerous API calls to enable new transactions within our application, and helped coordinate a variety of technology integrations and migrations, such as config changes for new landing zones, self-hosted Kafka to Kafka Confluent Cloud migration, and Legacy Vault to Vault SaaS migration.
          </p>
          <h2>This portfolio</h2>
          <p>I'm a self-taught developer. This portfolio was originally created in 2021 and 2022 while I was landing my first coding job. Though it has lain dormant for a while, I am resurrecting it to serve as a visual focus for my job-search efforts. I won't be putting all projects back online, as they need to be transferred from create-react-app to vite, moved from Heroku to Render.io (RIP Heroku free tier) and have their outdated dependecies update. Needless to say, after several years working professionally, I would approach some of these projects differently that I did before.</p>
          {/* | <a href={resume} download>PDF Resume</a> */}
        </div>
        <div className="aboutPortrait">
          <img src={portrait} alt="Patrick Lang" />
        </div>
      </div>
      <Skills />
    </div>
  );
}
