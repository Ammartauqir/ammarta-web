import React from "react";
import { useNavigate } from "react-router-dom";
import projects from "../data/projects";

const Projects = () => {
  const navigate = useNavigate();

  return (
    <section
      className="relative bg-zinc-200 dark:bg-zinc-950 py-20 px-4 sm:px-6 lg:px-8"
      id="projects"
    >
      <div className="relative max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-zinc-800 dark:text-white mb-4">
          Featured Projects
        </h2>
        <p className="text-center text-zinc-600 dark:text-zinc-400 mb-12 max-w-2xl mx-auto">
          Selected work across AI, robotics, and product engineering — with role, status, and outcomes.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              className="bg-white dark:bg-zinc-800 rounded-2xl shadow p-6 hover:shadow-lg transition"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white">
                  {project.title}
                </h3>
                <span className="text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400 whitespace-nowrap">
                  {project.status}
                </span>
              </div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-3">Role: {project.role}</p>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
                {project.summary}
              </p>
              <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-300 space-y-1 mb-4">
                {project.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                <span className="font-medium">Outcome:</span> {project.outcome}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 text-sm">
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="underline text-zinc-900 dark:text-white"
                  >
                    Demo
                  </a>
                )}
                {project.links.repo && (
                  <a
                    href={project.links.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="underline text-zinc-900 dark:text-white"
                  >
                    Repository
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={() => navigate("/projects")}
            className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-6 py-3 rounded-lg font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-100 transition"
          >
            View all project details
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
