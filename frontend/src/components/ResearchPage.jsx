import React from "react";
import { Link } from "react-router-dom";
import { interests, projects } from "../data/portfolio";
import Reveal from "./Reveal";
import Icon from "./Icon";
import { useAssistant } from "../context/AssistantContext";

export default function ResearchPage() {
  const { openAssistant } = useAssistant();
  return (
    <div className="research-page">
      <div className="container page-heading">
        <span className="eyebrow">RESEARCH / A DIRECTION OF TRAVEL</span>
        <h1>
          Learning to see.
          <br />
          <em>Understanding how to act.</em>
        </h1>
        <p>
          My interests sit between perception, robotics, and useful AI. They
          grow out of a background in electrical engineering, automation, and
          hands-on software development.
        </p>
      </div>
      <div className="paper-section section">
        <div className="container research-longform">
          {interests.map((item) => (
            <Reveal className="research-row" key={item.number}>
              <span className="interest-number">{item.number}</span>
              <div>
                <span className="small-label">{item.tags}</span>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
                <blockquote>{item.question}</blockquote>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">RESEARCH EXPERIENCE</span>
              <h2>A foundation in the real world.</h2>
            </div>
            <Link to="/about#education" className="text-link">
              Education & experience <Icon name="arrow" size={17} />
            </Link>
          </div>
          <div className="research-experience">
            {[projects[0], projects[2]].map((p) => (
              <Link key={p.id} to={`/projects/${p.id}`}>
                <span className="small-label">
                  {p.year} / {p.type}
                </span>
                <h3>{p.name}</h3>
                <p>{p.summary}</p>
                <span className="text-link">
                  Read the overview <Icon name="diagonal" size={16} />
                </span>
              </Link>
            ))}
          </div>
          <div className="research-conversation">
            <p>Interested in a research conversation?</p>
            <button className="text-link" onClick={() => openAssistant()}>
              Explore my background <Icon name="chat" size={16} />
            </button>
            <Link to="/contact" className="text-link">
              Get in touch <Icon name="diagonal" size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
