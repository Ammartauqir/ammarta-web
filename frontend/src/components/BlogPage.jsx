import React from "react";
import { Link } from "react-router-dom";
import NewsletterForm from "./NewsletterForm";
import Icon from "./Icon";
export default function BlogPage() {
  return (
    <div className="page-shell notes-page">
      <div className="container">
        <div className="page-heading">
          <span className="eyebrow">NEURON NOTES / THINKING OUT LOUD</span>
          <h1>
            From the <em>workbench.</em>
          </h1>
          <p>
            Notes on software, robotics, and AI. A place for questions worth
            exploring and ideas worth sharing.
          </p>
        </div>
        <Link className="featured-note" to="/blog/agentic-ai">
          <div className="note-illustration" aria-hidden="true">
            <span>THINK.</span>
            <span>PLAN.</span>
            <span>
              ACT<span className="accent-dot">.</span>
            </span>
            <div className="note-orbit" />
          </div>
          <div className="featured-note-copy">
            <span className="eyebrow">AI & ENGINEERING / 09 JUN 2025</span>
            <h2>Agentic AI: The rise of your next “digital teammate”</h2>
            <p>
              Exploring the shift from reactive chatbots to systems that plan,
              use tools, and carry out multi-step tasks.
            </p>
            <span className="text-link">
              Read the note · 5 min <Icon name="arrow" size={17} />
            </span>
          </div>
        </Link>
        <NewsletterForm />
      </div>
    </div>
  );
}
