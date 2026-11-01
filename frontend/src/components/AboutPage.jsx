import React from "react";
import { Link } from "react-router-dom";
import { experience, profile } from "../data/portfolio";
import portrait from "../assets/AmmarTauqir_crop1.jpg";
import Icon from "./Icon";
import Reveal from "./Reveal";

const publications = [
  "A. Tauqir, B. Wang (2021). LIDAR Semantic Segmentation Cross-Dataset Learning and Evaluation. IEEE ICRA 2022.",
  "Huang, Y., Wu, Ammar T., et al. (2020). Perception vs. Reality. IPSN 2020.",
  "Shakeel-ur-Rehman, Tauqir, M. A., et al. (2017). Performance Analysis in Satellite-Earth Systems. IJCSNS.",
  "Ullah, A., Tauqir, M. A., et al. (2016). Motion Planning Techniques. ICOSST 2016.",
  "Khan, M. K., Tauqir, A., et al. (2016). Surveillance Quadcopter Design. JQTM.",
];

export default function AboutPage() {
  return (
    <div className="about-page">
      <div className="container about-intro">
        <div>
          <span className="eyebrow">ABOUT / THE LONGER STORY</span>
          <h1>
            Always building.
            <br />
            <em>Always learning.</em>
          </h1>
          <p>
            I’m Muhammad Ammar Tauqir, a software engineer based in Ingolstadt,
            Germany. My background connects electrical engineering, automation
            and robotics, and automotive software.
          </p>
          <p>
            I enjoy moving between the physical and digital worlds:
            understanding a sensor, making sense of its signal, and turning that
            understanding into a useful system.
          </p>
          <div className="hero-actions">
            <a
              href={profile.github}
              className="text-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <Icon name="diagonal" size={16} />
            </a>
            <a
              href={profile.linkedin}
              className="text-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <Icon name="diagonal" size={16} />
            </a>
            <a href="#cv" className="text-link">
              Academic profile <Icon name="arrow" size={16} />
            </a>
          </div>
        </div>
        <div className="about-portrait">
          <img src={portrait} alt="Ammar Tauqir" width="480" height="520" />
          <span>BASED IN GERMANY. ROOTED IN CURIOSITY.</span>
        </div>
      </div>
      <div className="paper-section section" id="cv">
        <div className="container cv-layout">
          <aside className="cv-aside">
            <span className="eyebrow">THE PATH SO FAR</span>
            <h2>
              Experience,
              <br />
              in perspective.
            </h2>
            <a href={`mailto:${profile.email}`} className="text-link">
              {profile.email}
            </a>
            <button
              className="button button-outline print-button"
              onClick={() => window.print()}
            >
              Print / save as PDF <Icon name="download" size={16} />
            </button>
          </aside>
          <div className="cv-content">
            <section id="experience">
              <h2>Professional experience</h2>
              <div className="timeline">
                {experience.map((e) => (
                  <Reveal className="timeline-entry" key={e.place}>
                    <span className="timeline-date">{e.date}</span>
                    <div>
                      <h3>{e.role}</h3>
                      <span className="timeline-place">{e.place}</span>
                      <p>{e.detail}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </section>
            <section id="education">
              <h2>Education</h2>
              <div className="education-entry">
                <span className="small-label">2018 — 2021</span>
                <h3>M.Sc. Automation & Robotics</h3>
                <p>TU Dortmund, Germany · Grade 1.9</p>
              </div>
              <div className="education-entry">
                <span className="small-label">2013 — 2017</span>
                <h3>B.Sc. Electrical Engineering</h3>
                <p>University of the Punjab, Pakistan · Grade 1.6</p>
              </div>
            </section>
            <section id="skills">
              <h2>Technical background</h2>
              <p>
                Python, C/C++, JavaScript, TypeScript, Linux, SQL, React, Flask,
                Node.js, and Raspberry Pi.
              </p>
              <div className="tags">
                <span>Embedded systems</span>
                <span>Machine learning</span>
                <span>Sensor fusion</span>
                <span>Robotics</span>
                <span>Automotive software</span>
              </div>
            </section>
            <section id="publications">
              <h2>Research & publications</h2>
              <ol className="publication-list">
                {publications.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ol>
              <p className="small-note">
                For full references, manuscripts, and contribution details,{" "}
                <Link to="/contact">please get in touch</Link>.
              </p>
            </section>
          </div>
        </div>
      </div>
      <section className="container section personal-note">
        <span className="eyebrow">BEYOND THE WORKBENCH</span>
        <h2>There’s a world outside the terminal.</h2>
        <p>
          Family, travel, good food, and hands-on projects keep me curious. I’m
          originally from Lahore and moved to Germany in 2018. I also explore AI
          for education and creativity through myStudyDreams.com.
        </p>
        <Link to="/contact" className="text-link">
          Say hello <Icon name="arrow" size={17} />
        </Link>
      </section>
    </div>
  );
}
