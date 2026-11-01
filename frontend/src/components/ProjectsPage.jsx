import React, { useState } from "react";
import { projects } from "../data/portfolio";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All work");
  const filtered = projects.filter(
    (p) => filter === "All work" || p.category === filter,
  );
  return (
    <div className="page-shell">
      <div className="container">
        <div className="page-heading">
          <span className="eyebrow">THE WORK / PROJECTS & EXPLORATIONS</span>
          <h1>
            Curiosity, <em>put to work.</em>
          </h1>
          <p>
            From point clouds to physical systems. A closer look at the
            questions, approaches, and engineering behind my work.
          </p>
        </div>
        <div className="project-filters" aria-label="Filter projects">
          {["All work", "Perception", "Robotics", "Applied AI"].map((label) => (
            <button
              key={label}
              aria-pressed={filter === label}
              className={filter === label ? "active" : ""}
              onClick={() => setFilter(label)}
            >
              {label}
            </button>
          ))}
          <span aria-live="polite">{filtered.length} explorations</span>
        </div>
        <div className="projects-grid archive-grid">
          {filtered.map((project) => (
            <Reveal key={project.id}>
              <ProjectCard
                project={project}
                index={projects.indexOf(project)}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
