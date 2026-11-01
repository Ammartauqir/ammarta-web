import React, { useRef, useState } from "react";
import { API_ENDPOINTS } from "../config/api";
import { profile } from "../data/portfolio";
import Icon from "./Icon";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const sending = useRef(false);
  const submit = async (e) => {
    e.preventDefault();
    if (sending.current) return;
    sending.current = true;
    setStatus({ type: "loading", message: "Sending your message…" });
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 20000);
    try {
      const response = await fetch(API_ENDPOINTS.CONTACT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
        signal: controller.signal,
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok)
        throw new Error(
          data.message ||
            "Your message could not be sent. Please try email instead.",
        );
      setStatus({
        type: "success",
        message: "Message sent. Thank you for getting in touch!",
      });
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error.name === "AbortError"
            ? "This is taking longer than expected. Please contact me by email; delivery could not be confirmed."
            : error.message === "Failed to fetch"
              ? "The contact service is unavailable. Please email me directly."
              : error.message,
      });
    } finally {
      clearTimeout(timeout);
      sending.current = false;
    }
  };
  return (
    <div className="page-shell contact-page">
      <div className="container">
        <div className="page-heading">
          <span className="eyebrow">CONTACT / START A CONVERSATION</span>
          <h1>
            Something on your mind?
            <br />
            <em>I’m all ears.</em>
          </h1>
          <p>
            A research question, a collaboration, or an interesting engineering
            challenge. Tell me a little about it.
          </p>
        </div>
        <div className="contact-layout">
          <aside className="contact-aside">
            <span className="small-label">DIRECT IS GOOD, TOO.</span>
            <a href={`mailto:${profile.email}`} className="contact-email">
              {profile.email}
              <Icon name="diagonal" size={18} />
            </a>
            <p>
              <Icon name="pin" size={16} />
              {profile.location}
            </p>
            <div className="contact-socials">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub <Icon name="diagonal" size={14} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn <Icon name="diagonal" size={14} />
              </a>
            </div>
            <div className="contact-note">
              <span className="small-label">A USEFUL FIRST MESSAGE</span>
              <p>
                Share what you’re working on, where our interests overlap, and
                what you have in mind.
              </p>
            </div>
          </aside>
          <form className="contact-form" onSubmit={submit}>
            <div className="form-row">
              {[
                ["name", "Your name", "text", 100],
                ["email", "Email address", "email", 254],
              ].map(([name, label, type, max]) => (
                <label key={name}>
                  {label}
                  <input
                    name={name}
                    type={type}
                    maxLength={max}
                    autoComplete={name}
                    value={form[name]}
                    required
                    onChange={(e) =>
                      setForm({ ...form, [name]: e.target.value })
                    }
                    placeholder={
                      name === "name"
                        ? "How should I address you?"
                        : "you@example.com"
                    }
                  />
                </label>
              ))}
            </div>
            <label>
              What’s it about?
              <input
                name="subject"
                maxLength={200}
                required
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                placeholder="Research, collaboration, or something else…"
              />
            </label>
            <label>
              Your message
              <textarea
                name="message"
                maxLength={5000}
                rows="6"
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me a little more…"
              />
            </label>
            {status.message && (
              <p
                className={`form-status status-${status.type}`}
                role={status.type === "error" ? "alert" : "status"}
              >
                {status.message}
              </p>
            )}
            <div className="form-submit-row">
              <span>Your details are used to respond to your message.</span>
              <button
                className="button button-primary"
                disabled={status.type === "loading"}
              >
                {status.type === "loading" ? "Sending…" : "Send message"}
                <Icon name="diagonal" size={16} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
