import React, { useRef, useState } from "react";
import API_ENDPOINTS from "../config/api";
import Icon from "./Icon";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({ type: "", text: "" });
  const busy = useRef(false);
  const submit = async (e) => {
    e.preventDefault();
    if (busy.current) return;
    busy.current = true;
    setStatus({ type: "loading", text: "Joining…" });
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 20000);
    try {
      const response = await fetch(API_ENDPOINTS.SUBSCRIBE, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
        signal: controller.signal,
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok)
        throw new Error(
          data.message || "Could not join the list. Please try again later.",
        );
      setStatus({
        type: "success",
        text:
          data.new === false
            ? "You’re already on the interest list. Thank you!"
            : "You’re on the interest list. I’ll email when a new note is ready.",
      });
      setEmail("");
    } catch (error) {
      setStatus({
        type: "error",
        text:
          error.name === "AbortError"
            ? "The request timed out. Your signup could not be confirmed."
            : "The interest list is unavailable right now. Please try again later.",
      });
    } finally {
      busy.current = false;
      clearTimeout(timeout);
    }
  };
  return (
    <section className="newsletter">
      <div>
        <span className="eyebrow">NEURON NOTES</span>
        <h2>
          A new perspective,
          <br />
          every now and then.
        </h2>
        <p>
          Join the interest list for future notes on engineering, robotics, and
          AI. Email me to leave the list.
        </p>
      </div>
      <form onSubmit={submit}>
        <label htmlFor="newsletter-email">Your email address</label>
        <div className="newsletter-input">
          <input
            id="newsletter-email"
            name="email"
            type="email"
            autoComplete="email"
            maxLength={254}
            required
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="icon-button"
            disabled={status.type === "loading"}
            aria-label="Join interest list"
          >
            <Icon name="arrow" />
          </button>
        </div>
        <p
          className={`form-status status-${status.type}`}
          role={status.type === "error" ? "alert" : "status"}
        >
          {status.text ||
            "Your address is used for future Neuron Notes updates."}
        </p>
      </form>
    </section>
  );
}
