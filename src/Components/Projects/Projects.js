import React from "react";
import "./Projects.scss";
import { Link } from "react-router-dom";

const Projects = ({ projects }) => {
  return (
    <section className="projects">
      <h2 className="projects__header">Projects</h2>
      <p className="Projects__text">Click on a project to view Images</p>
      <div className="project-list">
        {projects.map((project) => (
          <Link
            key={project.id}
            to={`/projects/${project.id}`}
            className="project-card"
            id={project.id}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Projects;
