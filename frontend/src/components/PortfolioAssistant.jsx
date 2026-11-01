import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAssistant } from "../context/AssistantContext";
import { answerPortfolioQuestion } from "../services/portfolioGuide";
import { profile, projects } from "../data/portfolio";
import Icon from "./Icon";

export default function PortfolioAssistant() {
  const { open, projectId, openAssistant, closeAssistant } = useAssistant();
  const dialog = useRef(null),
    input = useRef(null),
    bottom = useRef(null),
    previousFocus = useRef(null);
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);
  const project = projects.find((p) => p.id === projectId);
  useEffect(() => {
    if (open && !dialog.current.open) {
      previousFocus.current = document.activeElement;
      dialog.current.showModal();
      input.current?.focus();
    } else if (!open && dialog.current.open) {
      dialog.current.close();
      previousFocus.current?.focus?.();
    }
  }, [open]);
  useEffect(() => {
    if (open) bottom.current?.scrollIntoView({ block: "nearest" });
  }, [messages, open]);
  const ask = (text) => {
    const cleaned = text.trim().slice(0, 600);
    if (!cleaned) return;
    setMessages((prev) =>
      [
        ...prev,
        { question: cleaned, ...answerPortfolioQuestion(cleaned, projectId) },
      ].slice(-12),
    );
    setQuestion("");
    input.current?.focus();
  };
  return (
    <>
      <button
        className="assistant-launcher"
        onClick={() => openAssistant()}
        aria-label="Open portfolio guide"
      >
        <Icon name="chat" size={21} />
        <span>Ask about my work</span>
        <span className="launcher-dot" />
      </button>
      <dialog
        ref={dialog}
        className="assistant-dialog"
        aria-labelledby="assistant-title"
        onCancel={(e) => {
          e.preventDefault();
          closeAssistant();
        }}
        onClick={(e) => {
          if (e.target === dialog.current) closeAssistant();
        }}
      >
        <div className="assistant-panel">
          <header className="assistant-header">
            <div className="assistant-emblem">
              <Icon name="spark" />
            </div>
            <div>
              <h2 id="assistant-title">A little context, on demand.</h2>
              <p>Portfolio guide · answers from this site</p>
            </div>
            <button
              className="icon-button"
              aria-label="Close portfolio guide"
              onClick={closeAssistant}
            >
              <Icon name="close" />
            </button>
          </header>
          <div className="assistant-context">
            {project ? (
              <>EXPLORING / {project.name}</>
            ) : (
              <>EXPLORE THE PERSON BEHIND THE PROJECTS</>
            )}
          </div>
          <div
            className="assistant-conversation"
            role="log"
            aria-live="polite"
            aria-label="Portfolio guide conversation"
          >
            <div className="assistant-welcome">
              <span className="eyebrow">
                HELLO, I’M AMMAR’S PORTFOLIO GUIDE.
              </span>
              <h3>
                What would you
                <br />
                like to explore?
              </h3>
              <p>
                I find answers in his published portfolio and link you to the
                source. Questions stay in your browser.
              </p>
            </div>
            <div className="assistant-suggestions">
              {(project
                ? [
                    "Explain this project",
                    "What was his contribution?",
                    "Show evidence and limitations",
                  ]
                : [
                    "What is his research background?",
                    "Which projects has he built?",
                    "What are his technical skills?",
                  ]
              ).map((q) => (
                <button key={q} onClick={() => ask(q)}>
                  {q}
                  <Icon name="diagonal" size={14} />
                </button>
              ))}
            </div>
            {messages.map((message, index) => (
              <div className="assistant-exchange" key={index}>
                <div className="visitor-message">{message.question}</div>
                <div className="guide-message">
                  <span className="small-label">PORTFOLIO GUIDE</span>
                  <p>{message.text}</p>
                  <div className="answer-sources">
                    {message.sources.map((s) => (
                      <Link key={s.to} to={s.to} onClick={closeAssistant}>
                        {s.label}
                        <Icon name="diagonal" size={13} />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            <div ref={bottom} />
          </div>
          <div className="assistant-bottom">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                ask(question);
              }}
            >
              <label className="sr-only" htmlFor="assistant-question">
                Your question about Ammar’s portfolio
              </label>
              <input
                ref={input}
                id="assistant-question"
                value={question}
                maxLength={600}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Ask about research, projects, or experience…"
                autoComplete="off"
              />
              <button
                className="icon-button"
                type="submit"
                disabled={!question.trim()}
                aria-label="Send question"
              >
                <Icon name="arrow" size={19} />
              </button>
            </form>
            <div className="assistant-disclosure">
              <span>Source-based guide, not generative AI.</span>
              <button
                disabled={!messages.length}
                onClick={() => setMessages([])}
              >
                Clear chat
              </button>
            </div>
            <a
              href={profile.aiResume}
              target="_blank"
              rel="noopener noreferrer"
              className="assistant-ai-link"
            >
              Prefer a longer conversation? Open the AI résumé chat{" "}
              <Icon name="diagonal" size={13} />
            </a>
            <span className="assistant-external-note">
              AI chat opens on Hugging Face and has separate data handling.
            </span>
          </div>
        </div>
      </dialog>
    </>
  );
}
