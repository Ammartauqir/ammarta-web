import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/portfolio";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import Icon from "./Icon";

export default function Projects() {
  return (
    <section id="projects" className="section selected-work">
      <div className="container" id="selected-work">
        <Reveal className="section-heading">
          <div>
            <span className="eyebrow">01 / SELECTED WORK</span>
            <h2>Ideas, brought into focus.</h2>
          </div>
          <Link to="/projects" className="text-link">
            All explorations <Icon name="arrow" size={17} />
          </Link>
        </Reveal>
        <div className="projects-grid">
          {projects.slice(0, 2).map((project, index) => (
            <Reveal key={project.id} delay={index * 100}>
              <ProjectCard project={project} index={index} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
