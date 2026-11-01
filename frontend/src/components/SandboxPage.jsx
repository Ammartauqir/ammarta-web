import React from "react";
import Observatory from "./Observatory";
import { profile } from "../data/portfolio";
import Icon from "./Icon";
export default function SandboxPage() {
  return (
    <div className="page-shell observatory-page">
      <div className="container page-heading">
        <span className="eyebrow">THE OBSERVATORY / A SPACE TO EXPLORE</span>
        <h1>
          A different way <em>to look.</em>
        </h1>
        <p>
          Small interactions that make an engineering idea tangible. Explore the
          synthetic sensor comparison below.
        </p>
      </div>
      <Observatory standalone />
      <div className="container observatory-end">
        <p>More from outside the workbench</p>
        <a
          href="https://www.strava.com/athletes/ammar_tauqir"
          className="text-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Find me on Strava <Icon name="diagonal" size={16} />
        </a>
        <a
          href={profile.github}
          className="text-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Explore my repositories <Icon name="diagonal" size={16} />
        </a>
      </div>
    </div>
  );
}
