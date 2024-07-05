import React from "react";
import "./Projects.css";
import Card from "./Card";
import projectsData from "./projectsData.json";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className="project_container">
      {projectsData.map((project) => (
        <div key={project.index} className="project_container">
          <Link to={`${project.link}`} className="card_link">
            <Card heading={project.heading} image={project.image} para={project.para} />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Projects;
