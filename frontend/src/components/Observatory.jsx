import React, { useId, useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import Icon from "./Icon";

function SyntheticScene({ thermal = false, suffix }) {
  const id = `${suffix}-${thermal ? "thermal" : "visible"}`;
  return (
    <svg
      viewBox="0 0 660 390"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`${id}-bg`} x2="0" y2="1">
          <stop stopColor={thermal ? "#24225c" : "#1d3546"} />
          <stop offset="1" stopColor={thermal ? "#11132f" : "#0e1d29"} />
        </linearGradient>
        <radialGradient id={`${id}-heat`}>
          <stop stopColor="#fff4a9" />
          <stop offset=".35" stopColor="#ffc468" />
          <stop offset=".7" stopColor="#e76767" />
          <stop offset="1" stopColor="#7046a6" />
        </radialGradient>
      </defs>
      <rect width="660" height="390" fill={`url(#${id}-bg)`} />
      <path d="M0 270 660 250v140H0Z" fill={thermal ? "#22204b" : "#172934"} />
      <g stroke={thermal ? "#5e4e88" : "#37515b"} opacity=".6">
        {Array.from({ length: 12 }, (_, i) => (
          <path key={i} d={`M330 240 ${i * 100 - 200} 390`} />
        ))}
        {[270, 295, 330, 375].map((y) => (
          <path key={y} d={`M0 ${y}h660`} />
        ))}
      </g>
      <path
        d="M20 265V116l135-52 87 68v123M155 64v185M242 132l84-40 68 42v120M500 252V91l120 34v129"
        stroke={thermal ? "#534677" : "#48626a"}
        fill={thermal ? "#2c2857" : "#25404c"}
      />
      <g fill={thermal ? `url(#${id}-heat)` : "#6d8b88"}>
        <path d="M296 263v-84q0-27 25-27t25 27v84l-12 3-5-65h-13l-6 65Z" />
        <circle cx="321" cy="135" r="17" />
        <path d="M437 281v-56q0-20 18-20t18 20v56l-8 3-5-46h-10l-4 46Z" />
        <circle cx="455" cy="192" r="12" />
        <path d="m65 296 87-27 74 20-85 28Z" />
        <path d="m65 296 76 21v35l-76-24Z" />
        <path d="m141 317 85-28v35l-85 28Z" />
      </g>
      <g
        stroke={thermal ? "#f0c184" : "#80b4ac"}
        strokeDasharray="5 6"
        fill="none"
        opacity=".65"
      >
        <rect x="285" y="110" width="73" height="167" rx="3" />
        <rect x="426" y="172" width="58" height="120" rx="3" />
      </g>
    </svg>
  );
}

export default function Observatory({ standalone = false }) {
  const [reveal, setReveal] = useState(48);
  const suffix = useId().replace(/:/g, "");
  return (
    <section
      className={`section observatory ${standalone ? "observatory-standalone" : ""}`}
      id="observatory"
    >
      <div className="container">
        <Reveal className="section-heading">
          <div>
            <span className="eyebrow">
              {standalone ? "THE OBSERVATORY" : "03 / THE OBSERVATORY"}
            </span>
            <h2>
              One scene. <em>Another perspective.</em>
            </h2>
          </div>
          <span className="section-aside">A SMALL INTERACTIVE EXPLORATION</span>
        </Reveal>
        <Reveal className="observatory-layout">
          <div className="observatory-copy">
            <span className="small-label">VISIBLE × THERMAL</span>
            <h3>
              What if we could <br />
              see a little more?
            </h3>
            <p>
              A visible-light camera captures appearance. A thermal sensor
              reveals a different signal. Complementary views can offer a richer
              understanding of the same scene.
            </p>
            <p className="demo-disclosure">
              Synthetic illustration. The colors do not represent measured
              temperatures or project results.
            </p>
            <Link to="/projects/thermal-vision" className="text-link">
              The project behind the question <Icon name="arrow" size={17} />
            </Link>
          </div>
          <div className="comparison">
            <div
              className="comparison-scene"
              style={{ "--reveal": `${reveal}%` }}
              role="img"
              aria-label={`Synthetic visible and thermal scene. Thermal view covers ${reveal} percent.`}
            >
              <SyntheticScene suffix={suffix} />
              <div className="thermal-overlay">
                <SyntheticScene thermal suffix={suffix} />
              </div>
              <span className="comparison-label thermal-label">THERMAL</span>
              <span className="comparison-label visible-label">VISIBLE</span>
              <div className="comparison-divider">
                <span>↔</span>
              </div>
            </div>
            <div className="comparison-control">
              <label htmlFor={`${suffix}-reveal`}>Explore the two views</label>
              <span>{reveal}% thermal</span>
              <input
                id={`${suffix}-reveal`}
                type="range"
                min="0"
                max="100"
                value={reveal}
                onChange={(e) => setReveal(Number(e.target.value))}
                aria-label="Thermal reveal"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
