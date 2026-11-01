import React, { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon";
import SceneArtwork from "./SceneArtwork";
import { useAssistant } from "../context/AssistantContext";

export default function Hero() {
  const [view, setView] = useState("lidar");
  const { openAssistant } = useAssistant();
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="eyebrow hero-enter">
              <span className="status-dot" /> SOFTWARE · ROBOTICS · AI
            </div>
            <h1 id="hero-title" className="hero-enter">
              Engineering
              <br />
              intelligence for
              <br />
              the <em>physical world.</em>
            </h1>
            <p className="hero-description hero-enter">
              I’m Ammar, a software engineer in Germany.
              <br />I build at the intersection of perception, robotics,
              <br className="desktop-break" /> and AI—with curiosity as the
              common thread.
            </p>
            <div className="hero-actions hero-enter">
              <Link to="/projects" className="button button-primary">
                Explore my work <Icon name="diagonal" size={17} />
              </Link>
              <button className="text-button" onClick={() => openAssistant()}>
                Ask about my work <Icon name="chat" size={17} />
              </button>
            </div>
          </div>
          <div className="hero-visual hero-enter">
            <div className="visual-topline">
              <span>THE PERCEPTION LAB</span>
              <span className="visual-coordinate">X / Y / Z</span>
            </div>
            <SceneArtwork kind={view} />
            <div className="visual-bottomline">
              <div className="visual-tabs" aria-label="Illustration view">
                <button
                  className={view === "lidar" ? "active" : ""}
                  aria-pressed={view === "lidar"}
                  onClick={() => setView("lidar")}
                >
                  Point cloud
                </button>
                <button
                  className={view === "thermal" ? "active" : ""}
                  aria-pressed={view === "thermal"}
                  onClick={() => setView("thermal")}
                >
                  Sensor fusion
                </button>
              </div>
              <span>ILLUSTRATIVE SCENE</span>
            </div>
            <div className="visual-callout">
              <span className="mini-cross">+</span> PERCEIVE. REASON. ACT.
            </div>
          </div>
        </div>
        <div className="hero-foot">
          <span>
            <Icon name="pin" size={14} /> Ingolstadt, Germany
          </span>
          <span>FROM PIXELS & POINTS TO REAL SYSTEMS</span>
          <a href="#selected-work" className="scroll-cue">
            SCROLL TO EXPLORE <span>↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
