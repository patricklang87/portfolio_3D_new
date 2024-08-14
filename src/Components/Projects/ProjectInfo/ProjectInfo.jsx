import React, { useState, useEffect } from "react";
import "./ProjectInfo.css";
import Screenshots from "../Screenshots/Screenshots";
import { CgCloseO } from "react-icons/cg";

export default function ProjectInfo({ project, setCurrentInfo }) {
  const [appeared, setAppeared] = useState(false);
  let techList = "";
  project.technologies.forEach((item, index) => {
    if (project.technologies.length - 1 !== index) {
      techList += item += " | ";
    } else {
      techList += item;
    }
  });

  useEffect(() => {
    setTimeout(() => {
      setAppeared(true);
    }, 10);
  }, []);

  const handleClick = () => {
    setAppeared(false);
    setTimeout(() => {
      setCurrentInfo(null);
    }, 200);
    if (window.innerWidth < 480) {
      document.getElementById("projects").scrollIntoView(true);
    }
  };

  const visibleStyle =
    window.innerWidth > 480 ? { right: "20px" } : { top: "0" };
  const invisibleStyle =
    window.innerWidth > 480 ? { right: "-1000px" } : { top: "-1000px" };

  return (
    <div
      id={project.title}
      key={project.title}
      style={appeared ? visibleStyle : invisibleStyle}
      className="ProjectCard"
    >
      <CgCloseO size="2em" className="closeButton" onClick={handleClick} />
      <h3>{project.title}</h3>

      {project.screenshots.length > 0 && (
        <Screenshots screenshotList={project.screenshots} />
      )}
      <div className="linkButtons">
        {project.code_url && (
          <a href={project.code_url} target="_blank" rel="noreferrer">
            <button>GitHub Repository</button>
          </a>
        )}
        {project.deployment_url && (
          <a
            href={project.deployment_url}
            target="_blank"
            rel="noreferrer"
          >
            <button disabled={project.deploymentLinkDisabled}>Deployed Site</button>
          </a>
        )}
      </div>
      <div className="projectDescription">
        <p>{project.description}</p>
        <h5>{techList}</h5>
      </div>
    </div>
  );
}
