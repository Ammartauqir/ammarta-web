import React from "react";
import projects from "../data/projects";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-zinc-200 dark:bg-zinc-950 pt-24 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center text-zinc-800 dark:text-white">
          All Projects
        </h1>
        <p className="text-center text-zinc-600 dark:text-zinc-400 mb-12 max-w-2xl mx-auto">
          Deeper notes on status, contribution, stack, and what shipped.
        </p>

        <div className="space-y-12">
          {projects.map((project) => (
            <article
              key={project.id}
              className="bg-white dark:bg-zinc-800 p-8 rounded-2xl shadow-md"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-3 mb-4">
                <h2 className="text-3xl font-semibold text-zinc-900 dark:text-white">
                  {project.title}
                </h2>
                <span className="text-sm text-zinc-500 dark:text-zinc-400">{project.status}</span>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-medium mb-3 text-zinc-900 dark:text-white">Overview</h3>
                  <p className="text-zinc-700 dark:text-zinc-300 mb-4">{project.summary}</p>
                  <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                    <span className="font-medium">My role:</span> {project.role}
                  </p>
                  <h3 className="text-xl font-medium mb-3 text-zinc-900 dark:text-white">Highlights</h3>
                  <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-300 space-y-2">
                    {project.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3 text-zinc-900 dark:text-white">Stack</h3>
                  <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-300 space-y-2 mb-6">
                    {project.stack.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                  <h3 className="text-xl font-medium mb-3 text-zinc-900 dark:text-white">Outcome</h3>
                  <p className="text-zinc-700 dark:text-zinc-300 mb-6">{project.outcome}</p>
                  <div className="flex gap-4">
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="underline text-zinc-900 dark:text-white"
                      >
                        Open demo
                      </a>
                    )}
                    {project.links.repo && (
                      <a
                        href={project.links.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="underline text-zinc-900 dark:text-white"
                      >
                        Open repository
                      </a>
                    )}
                    {!project.links.demo && !project.links.repo && (
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">
                        Public repo/demo links coming soon.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
