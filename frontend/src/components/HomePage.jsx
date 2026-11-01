import React from "react";
import { Link } from "react-router-dom";
import Hero from "./Hero";
import Projects from "./Projects";
import ResearchSection from "./ResearchSection";
import Observatory from "./Observatory";
import Reveal from "./Reveal";
import Icon from "./Icon";
import portrait from "../assets/AmmarTauqir_crop1.jpg";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Projects />
      <ResearchSection />
      <Observatory />
      <section className="section about-preview" id="about">
        <div className="container about-preview-grid">
          <Reveal className="portrait-frame">
            <img
              src={portrait}
              alt="Ammar Tauqir"
              loading="lazy"
              width="480"
              height="520"
            />
            <span>INGOLSTADT, GERMANY / A LITTLE ABOUT ME</span>
          </Reveal>
          <Reveal className="about-preview-copy">
            <span className="eyebrow">04 / THE PERSON BEHIND THE PROJECTS</span>
            <h2>
              An engineer by training.
              <br />
              <em>Curious by nature.</em>
            </h2>
            <p>
              From electrical engineering in Lahore to automation and robotics
              at TU Dortmund, my path has always followed the same thread:
              understanding how things work, then building something with that
              understanding.
            </p>
            <p>
              Today, I work in automotive software and explore perception,
              robotics, and useful AI. Outside the code, there’s family, travel,
              and the next good meal.
            </p>
            <Link to="/about" className="text-link">
              More about my journey <Icon name="arrow" size={17} />
            </Link>
          </Reveal>
        </div>
      </section>
      <section className="paper-section section notes-preview">
        <div className="container">
          <Reveal className="section-heading">
            <div>
              <span className="eyebrow">05 / NOTES FROM THE WORKBENCH</span>
              <h2>Thinking out loud.</h2>
            </div>
            <Link to="/blog" className="text-link">
              All notes <Icon name="arrow" size={17} />
            </Link>
          </Reveal>
          <Link className="note-preview-link" to="/blog/agentic-ai">
            <span className="note-date">
              09 JUN 2025<span>AI & ENGINEERING</span>
            </span>
            <h3>Agentic AI: The rise of your next “digital teammate”</h3>
            <span className="note-arrow">
              <Icon name="diagonal" size={25} />
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
