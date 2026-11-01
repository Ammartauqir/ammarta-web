import React from "react";
import { Link } from "react-router-dom";
import SceneArtwork from "./SceneArtwork";
import Icon from "./Icon";

export default function ProjectCard({ project, index = 0 }) {
  return (
    <Link
      to={`/projects/${project.id}`}
      className={`project-card project-${project.visual}`}
    >
      <div className="project-art">
        <div className="project-art-label">
          <span>{project.category}</span>
          <span>{String(index + 1).padStart(2, "0")}</span>
        </div>
        <SceneArtwork kind={project.visual} />
        <span className="project-open">
          <Icon name="diagonal" />
        </span>
      </div>
      <div className="project-info">
        <div className="project-meta">{project.type}</div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <div className="tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </Link>
  );
}
