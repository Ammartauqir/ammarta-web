import "./App.css";
import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { AssistantProvider } from "./context/AssistantContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import PortfolioAssistant from "./components/PortfolioAssistant";
import NotFound from "./components/NotFound";
import { projects } from "./data/portfolio";

const AboutPage = lazy(() => import("./components/AboutPage"));
const ResearchPage = lazy(() => import("./components/ResearchPage"));
const BlogPage = lazy(() => import("./components/BlogPage"));
const BlogPost = lazy(() => import("./components/BlogPost"));
const ProjectsPage = lazy(() => import("./components/ProjectsPage"));
const ProjectDetail = lazy(() => import("./components/ProjectDetail"));
const ContactPage = lazy(() => import("./components/ContactPage"));
const SandboxPage = lazy(() => import("./components/SandboxPage"));

function RouteEffects() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const names = {
      "/": "Software, Robotics & AI",
      "/research": "Research",
      "/about": "About & Academic Profile",
      "/projects": "Selected Work",
      "/blog": "Neuron Notes",
      "/blog/agentic-ai": "Agentic AI",
      "/contact": "Contact",
      "/sandbox": "The Observatory",
    };
    const project = projects.find((p) => pathname === `/projects/${p.id}`);
    const title = project?.name || names[pathname] || "Page Not Found";
    document.title = `${title} | Ammar Tauqir`;
    const description =
      project?.summary ||
      "Ammar Tauqir — software engineer exploring perception, robotics, and useful AI. Projects, research interests, and engineering notes.";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", description);
    let observer, timeout;
    if (!hash) window.scrollTo({ top: 0, behavior: "auto" });
    else {
      let targetId = hash.slice(1);
      try {
        targetId = decodeURIComponent(targetId);
      } catch {
        /* A malformed hash must not break navigation. */
      }
      const scroll = () => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
              .matches
              ? "auto"
              : "smooth",
          });
          observer?.disconnect();
          return true;
        }
        return false;
      };
      if (!scroll()) {
        observer = new MutationObserver(scroll);
        observer.observe(document.getElementById("main-content"), {
          childList: true,
          subtree: true,
        });
        timeout = setTimeout(() => observer.disconnect(), 5000);
      }
    }
    return () => {
      observer?.disconnect();
      clearTimeout(timeout);
    };
  }, [pathname, hash]);
  return null;
}

function Site() {
  const { pathname } = useLocation();
  return (
    <div className="portfolio-site" id="top">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <RouteEffects />
      <Header />
      <main id="main-content">
        <Suspense
          fallback={
            <div className="page-loading" role="status">
              <span className="status-dot" /> Bringing things into focus…
            </div>
          }
        >
          <div className="route-content" key={pathname}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/research" element={<ResearchPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/:slug" element={<ProjectDetail />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/agentic-ai" element={<BlogPost />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/sandbox" element={<SandboxPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </Suspense>
      </main>
      <Footer />
      <PortfolioAssistant />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AssistantProvider>
        <BrowserRouter>
          <Site />
        </BrowserRouter>
      </AssistantProvider>
    </ThemeProvider>
  );
}
