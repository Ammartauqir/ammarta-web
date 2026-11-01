import React from "react";
import { Link } from "react-router-dom";
import NewsletterForm from "./NewsletterForm";

export default function BlogPost() {
  return (
    <article className="article-page">
      <div className="container article-heading">
        <Link to="/blog" className="text-link back-link">
          ← All notes
        </Link>
        <span className="eyebrow">NEURON NOTES / AI & ENGINEERING</span>
        <h1>Agentic AI: The rise of your next “digital teammate”</h1>
        <div className="article-byline">
          <span>Ammar Tauqir</span>
          <time dateTime="2025-06-09">9 June 2025</time>
          <span>5 min read</span>
        </div>
      </div>
      <div className="paper-section article-paper">
        <div className="article-prose">
          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">
              A Day in the Life—with an AI Intern
            </h2>
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
              Imagine this: it's Monday morning. You open your inbox to find a
              project update drafted, highlighted priorities laid out, and a bug
              fix proposal already awaiting review—all handled by an AI agent
              you'd briefly chatted with last week. It's not perfect, but it's
              proactive. It thinks, it learns, it acts on multi-step tasks. It
              doesn't replace your job — it augments it.
            </p>
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mt-4">
              That's Agentic AI: not a reactive chatbot, but a self-directed
              digital intern that executes tasks and learns from feedback—a true
              junior team member, not just a tool.
            </p>
          </section>

          {/* What Makes It Tick */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">
              What Makes It Tick
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-zinc-900 dark:text-white mr-2">•</span>
                <span className="text-zinc-700 dark:text-zinc-300">
                  <strong>Reasoning & Planning:</strong> Agentic AI connects the
                  dots—formulating goals, laying out steps, and anticipating
                  roadblocks.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-zinc-900 dark:text-white mr-2">•</span>
                <span className="text-zinc-700 dark:text-zinc-300">
                  <strong>Tool Use:</strong> It talks to APIs, databases, file
                  systems—turning abstract intent into concrete action.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-zinc-900 dark:text-white mr-2">•</span>
                <span className="text-zinc-700 dark:text-zinc-300">
                  <strong>Adaptation:</strong> Finds errors, tweaks itself,
                  refines its strategy—learning on the go.
                </span>
              </li>
            </ul>
            <p className="text-zinc-700 dark:text-zinc-300 mt-4 italic">
              In simple terms: It's like having a junior employee who actually
              thinks, not just follows instructions.
            </p>
          </section>

          {/* Real-World Examples */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">
              Behind the Scenes: Real-World Agents
            </h2>
            <div className="space-y-6">
              <div className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                  NVIDIA's Morpheus
                </h3>
                <p className="text-zinc-700 dark:text-zinc-300">
                  Automatically detects and stops cybersecurity threats in real
                  time—guarding systems while you sleep.
                </p>
              </div>
              <div className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                  Adobe Express
                </h3>
                <p className="text-zinc-700 dark:text-zinc-300">
                  Now has an agentic assistant that crafts visual campaigns,
                  suggesting fonts, layouts, even posting-ready motion graphics.
                </p>
              </div>
              <div className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                  Amazon's Robotics
                </h3>
                <p className="text-zinc-700 dark:text-zinc-300">
                  Building agents that understand natural commands to
                  orchestrate warehouse operations, turning orders into actions.
                </p>
              </div>
            </div>
          </section>

          {/* Sam Altman Quote */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">
              Sam Altman: AI Agents = Junior Employee Team
            </h2>
            <blockquote className="border-l-4 border-zinc-300 dark:border-zinc-700 pl-6 py-2">
              <p className="text-zinc-700 dark:text-zinc-300 italic">
                "It sounds a lot like how [people] work with a team of still
                relatively junior employees"
              </p>
              <footer className="text-zinc-600 dark:text-zinc-400 mt-2">
                — Sam Altman, OpenAI
              </footer>
            </blockquote>
          </section>

          {/* Why It Matters */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">
              Why It Matters — for You & Me
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                  Boosts Productivity
                </h3>
                <p className="text-zinc-700 dark:text-zinc-300">
                  Mundane tasks—emails, tickets, basic code—get off your plate.
                  You focus on creative and strategic work.
                </p>
              </div>
              <div className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                  Level Playing Field
                </h3>
                <p className="text-zinc-700 dark:text-zinc-300">
                  Small businesses get access to sophisticated workflows once
                  reserved for enterprises—no long development cycles.
                </p>
              </div>
              <div className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                  New Career Paths
                </h3>
                <p className="text-zinc-700 dark:text-zinc-300">
                  Say hello to roles like AI Agent Engineer, Agent Orchestrator,
                  and Agent Supervisor.
                </p>
              </div>
              <div className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                  Creative Superpowers
                </h3>
                <p className="text-zinc-700 dark:text-zinc-300">
                  Imagine your TikTok content calendar designed, generated,
                  edited, and published—all by agentic assistants you built.
                </p>
              </div>
            </div>
          </section>

          {/* Challenges */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">
              The Flip Side: Challenges & Risks
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-zinc-900 dark:text-white mr-2">•</span>
                <div>
                  <strong className="text-zinc-900 dark:text-white">
                    Trust & Liability
                  </strong>
                  <p className="text-zinc-700 dark:text-zinc-300">
                    If your agent goes rogue—who's responsible? Governance is
                    critical.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-zinc-900 dark:text-white mr-2">•</span>
                <div>
                  <strong className="text-zinc-900 dark:text-white">
                    Human Reaction
                  </strong>
                  <p className="text-zinc-700 dark:text-zinc-300">
                    Tenured staff may resist digital interns; newcomers often
                    embrace them—shift management is key.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-zinc-900 dark:text-white mr-2">•</span>
                <div>
                  <strong className="text-zinc-900 dark:text-white">
                    Ethical Guardrails
                  </strong>
                  <p className="text-zinc-700 dark:text-zinc-300">
                    Fairness, privacy, transparency—these aren't optional. They
                    need design from Day 1.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">
              Final Word
            </h2>
            <p className="text-zinc-700 dark:text-zinc-300">
              Agentic AI is not "AI hype." It's a paradigm shift—from AI as
              tool, to AI as thinking teammate. Those who learn to build, guide,
              and audit these agents will redefine how we work, learn, and
              create.
            </p>
          </section>

          {/* References */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">
              References
            </h2>
            <div className="space-y-4">
              <div className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
                  Sam Altman on AI Agents
                </h3>
                <p className="text-zinc-700 dark:text-zinc-300 mb-2">
                  Business Insider (2025). "Sam Altman is betting an AI agent
                  could soon become your coworker"
                </p>
                <a
                  href="https://www.businessinsider.com/sam-altman-betting-ai-agent-could-soon-become-your-coworker-2025-6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-900 dark:text-white hover:underline"
                >
                  Read the full article →
                </a>
              </div>

              <div className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
                  Amazon's AI-Driven Warehouse Innovation
                </h3>
                <p className="text-zinc-700 dark:text-zinc-300 mb-2">
                  Reuters (2025). "Amazon's delivery logistics will get an AI
                  boost"
                </p>
                <a
                  href="https://www.reuters.com/business/retail-consumer/amazons-delivery-logistics-will-get-an-ai-boost-2025-06-04/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-900 dark:text-white hover:underline"
                >
                  Read the full article →
                </a>
              </div>

              <div className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
                  Amazon's Agentic AI Group
                </h3>
                <p className="text-zinc-700 dark:text-zinc-300 mb-2">
                  Investopedia (2025). "Amazon Launches Agentic AI Group to
                  Enhance Its Warehouse Robots"
                </p>
                <a
                  href="https://www.investopedia.com/amazon-launches-agentic-ai-group-to-enhance-its-warehouse-robots-reports-say-11749004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-900 dark:text-white hover:underline"
                >
                  Read the full article →
                </a>
              </div>

              <div className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
                  AI Regulation Insights
                </h3>
                <p className="text-zinc-700 dark:text-zinc-300 mb-2">
                  Financial Times (2025). "The Future of AI Regulation" by Gaia
                  Marcus, Ada Lovelace Institute
                </p>
                <a
                  href="https://www.ft.com/content/c572a796-258b-433f-b005-9a3ff6f56062"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-900 dark:text-white hover:underline"
                >
                  Read the full article →
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="container">
        <NewsletterForm />
      </div>
    </article>
  );
}
