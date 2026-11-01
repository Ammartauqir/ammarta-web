import React from "react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../data/portfolio";
import { useAssistant } from "../context/AssistantContext";
import SceneArtwork from "./SceneArtwork";
import NotFound from "./NotFound";
import Icon from "./Icon";

export default function ProjectDetail() {
  const { slug } = useParams();
  const { openAssistant } = useAssistant();
  const project = projects.find((p) => p.id === slug);
  if (!project) return <NotFound />;
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  return (
    <article className="case-study">
      <div className="container case-intro">
        <Link to="/projects" className="text-link back-link">
          ← All work
        </Link>
        <div className="eyebrow">
          {project.category.toUpperCase()} / {project.year}
        </div>
        <h1>
          {project.title}
          <span>.</span>
        </h1>
        <p className="case-summary">{project.summary}</p>
        <div className="case-metadata">
          <span>{project.type}</span>
          <div className="tags">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
        <div className={`case-art project-${project.visual}`}>
          <SceneArtwork kind={project.visual} />
          <span>CONCEPTUAL ILLUSTRATION / {project.name.toUpperCase()}</span>
        </div>
      </div>
      <div className="paper-section case-paper">
        <div className="container case-layout">
          <aside className="case-sidebar">
            <span className="eyebrow">INSIDE THE PROJECT</span>
            <nav aria-label="Case study sections">
              <a href="#question">The question</a>
              <a href="#approach">The approach</a>
              <a href="#contribution">My contribution</a>
              <a href="#evidence">Evidence & limitations</a>
              <a href="#next">Looking ahead</a>
            </nav>
            <button
              className="button button-outline"
              onClick={() => openAssistant(project.id)}
            >
              Ask about this project <Icon name="chat" size={17} />
            </button>
          </aside>
          <div className="case-prose">
            <section id="question">
              <span className="small-label">01 / THE QUESTION</span>
              <h2>{project.question}</h2>
            </section>
            <section id="approach">
              <span className="small-label">02 / THE APPROACH</span>
              <h2>From an idea to a system.</h2>
              <p>{project.approach}</p>
            </section>
            <section id="contribution">
              <span className="small-label">03 / MY CONTRIBUTION</span>
              <h2>Where I came in.</h2>
              <p>{project.contribution}</p>
            </section>
            <section id="evidence" className="evidence-note">
              <span className="small-label">04 / EVIDENCE & LIMITATIONS</span>
              <h2>Keeping the claims grounded.</h2>
              <p>{project.evidence}</p>
              <Link to="/contact" className="text-link">
                Ask for further detail <Icon name="arrow" size={16} />
              </Link>
            </section>
            <section id="next">
              <span className="small-label">05 / LOOKING AHEAD</span>
              <h2>The next question.</h2>
              <p>{project.next}</p>
            </section>
          </div>
        </div>
      </div>
      <div className="container next-project">
        <span className="eyebrow">KEEP EXPLORING</span>
        <Link to={`/projects/${next.id}`}>
          <h2>{next.title}</h2>
          <Icon name="diagonal" size={30} />
        </Link>
      </div>
    </article>
  );
}
