import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import Icon from "./Icon";
import { useAssistant } from "../context/AssistantContext";

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { openAssistant } = useAssistant();
  useEffect(() => {
    setOpen(false);
  }, [location]);
  useEffect(() => {
    const close = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, []);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="wordmark" aria-label="Ammar Tauqir home">
          <span className="monogram">
            at<span>.</span>
          </span>
          <span>
            Ammar Tauqir
            <span className="wordmark-sub">ENGINEER & EXPLORER</span>
          </span>
        </Link>
        <nav
          id="primary-navigation"
          className={`primary-nav ${open ? "nav-open" : ""}`}
          aria-label="Primary navigation"
        >
          {[
            ["/research", "Research"],
            ["/projects", "Work"],
            ["/about", "About"],
            ["/blog", "Notes"],
          ].map(([to, label]) => (
            <NavLink key={to} to={to}>
              {label}
            </NavLink>
          ))}
          <Link to="/contact" className="nav-contact">
            Let’s connect <Icon name="diagonal" size={14} />
          </Link>
        </nav>
        <div className="header-tools">
          <button
            className="icon-button header-assistant"
            onClick={() => openAssistant()}
            aria-label="Open portfolio guide"
          >
            <Icon name="chat" size={18} />
          </button>
          <ThemeToggle />
          <button
            className="icon-button menu-toggle"
            aria-controls="primary-navigation"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </div>
    </header>
  );
}
