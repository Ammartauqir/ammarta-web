import React from "react";
import { Link } from "react-router-dom";
import { profile } from "../data/portfolio";
import Icon from "./Icon";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-invitation">
          <div>
            <span className="eyebrow">
              GOOD WORK STARTS WITH A CONVERSATION.
            </span>
            <h2>
              Have a question?
              <br />
              <em>Let’s think it through.</em>
            </h2>
          </div>
          <Link
            to="/contact"
            className="footer-contact"
            aria-label="Get in touch"
          >
            <Icon name="diagonal" size={35} />
          </Link>
        </div>
        <div className="footer-links">
          <Link to="/" className="footer-name">
            Ammar Tauqir<span>SOFTWARE · ROBOTICS · AI</span>
          </Link>
          <nav aria-label="Footer navigation">
            <Link to="/research">Research</Link>
            <Link to="/projects">Work</Link>
            <Link to="/about">About</Link>
            <Link to="/blog">Notes</Link>
            <Link to="/sandbox">Observatory</Link>
          </nav>
          <div className="footer-socials">
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              GitHub <Icon name="diagonal" size={12} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <Icon name="diagonal" size={12} />
            </a>
            <a href={`mailto:${profile.email}`}>
              Email <Icon name="diagonal" size={12} />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Muhammad Ammar Tauqir</span>
          <span>MADE WITH CURIOSITY, IN GERMANY.</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
