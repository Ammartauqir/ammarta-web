import React from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon";

export default function NotFound() {
  return (
    <div className="page-shell">
      <div className="container page-heading">
        <span className="eyebrow">404 / OFF THE MAP</span>
        <h1>
          A small detour.
          <br />
          <em>Let’s find our way back.</em>
        </h1>
        <p>
          This page doesn’t exist. There’s plenty to explore in the portfolio.
        </p>
        <div className="hero-actions">
          <Link to="/" className="button button-primary">
            Back to the portfolio <Icon name="arrow" size={17} />
          </Link>
        </div>
      </div>
    </div>
  );
}
