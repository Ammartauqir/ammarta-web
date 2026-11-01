import React from "react";
import { Link } from "react-router-dom";
import { interests } from "../data/portfolio";
import Reveal from "./Reveal";
import Icon from "./Icon";

export default function ResearchSection() {
  return (
    <section className="paper-section section" id="research">
      <div className="container">
        <Reveal className="research-heading">
          <span className="eyebrow">02 / QUESTIONS THAT KEEP ME CURIOUS</span>
          <h2>
            Good engineering starts
            <br />
            with a <em>better question.</em>
          </h2>
          <p>
            My interests connect the way machines see the world with the way
            they act in it.
          </p>
        </Reveal>
        <div className="interest-grid">
          {interests.map((item, index) => (
            <Reveal className="interest" delay={index * 80} key={item.number}>
              <span className="interest-number">{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <span className="interest-tags">{item.tags}</span>
            </Reveal>
          ))}
        </div>
        <Link to="/research" className="text-link">
          Explore my research interests <Icon name="arrow" size={17} />
        </Link>
      </div>
    </section>
  );
}
