import { experience, interests, profile, projects } from "../data/portfolio";

const words = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .split(" ")
    .filter(
      (word) =>
        word.length > 2 &&
        ![
          "the",
          "and",
          "his",
          "her",
          "this",
          "that",
          "what",
          "does",
          "with",
          "about",
          "have",
          "ammar",
          "tauqir",
          "can",
          "you",
          "how",
          "for",
          "are",
        ].includes(word),
    );
const source = (label, to) => ({ label, to });

// A deliberately non-generative, browser-local guide. Answers are extracted from
// the same records used by the site; visitor questions are never transmitted.
export function answerPortfolioQuestion(question, projectId = null) {
  const q = question.toLowerCase();
  const context = projects.find((p) => p.id === projectId);
  const namedProject = projects.find(
    (p) =>
      q.includes(p.name.toLowerCase()) ||
      q.includes(p.id) ||
      (p.id === "thermal-vision" && /thermal/.test(q)) ||
      (p.id === "lidar-segmentation" && /lidar|point.cloud/.test(q)) ||
      (p.id === "camera-localization" && /camera|localization/.test(q)) ||
      (p.id === "autonomous-flight" && /plane|flight/.test(q)) ||
      (p.id === "study-assistant" && /study|education/.test(q)) ||
      (p.id === "smart-home" && /smart.home|home.automation|mqtt/.test(q)),
  );
  const project = namedProject || context;
  if (
    /salary|married|religion|politic|admission chance|guarantee|visa|citizenship/.test(
      q,
    )
  )
    return {
      text: "That information is not available in this portfolio. Please ask Ammar directly rather than infer personal details or commitments.",
      sources: [source("Contact Ammar", "/contact")],
    };
  if (/contact|email|reach|hire|availability|available/.test(q))
    return {
      text: `You can reach Ammar at ${profile.email}. He is based in ${profile.location}. Current availability and collaboration arrangements should be confirmed directly with him.`,
      sources: [source("Contact details", "/contact")],
    };
  if (
    /who is|introduce|tell me about ammar|about yourself|about him|overview/.test(
      q,
    )
  )
    return {
      text: `Ammar Tauqir is a software engineer based in ${profile.location}. His background connects electrical engineering, automation and robotics, automotive software, and perception. His work includes LiDAR semantic segmentation and camera-based localization.`,
      sources: [
        source("About Ammar", "/about"),
        source("Selected work", "/projects"),
      ],
    };
  if (
    project &&
    /result|benchmark|accurac|evidence|limitation|code|github|report|paper|dataset/.test(
      q,
    )
  )
    return {
      text: `${project.name}: ${project.evidence}`,
      sources: [
        source("Evidence & limitations", `/projects/${project.id}#evidence`),
        source("Contact for details", "/contact"),
      ],
    };
  if (project && /contribut|role|personally|implement|did he|did ammar/.test(q))
    return {
      text: project.contribution,
      sources: [
        source("His contribution", `/projects/${project.id}#contribution`),
      ],
    };
  if (project && /next|future|question|research direction/.test(q))
    return {
      text: `${project.question}\n\nA direction to explore: ${project.next}`,
      sources: [source("Project overview", `/projects/${project.id}`)],
    };
  if (
    project &&
    (namedProject || /project|approach|explain|work|tell|method/.test(q))
  )
    return {
      text: `${project.name}\n\n${project.approach}`,
      sources: [source("Read the project", `/projects/${project.id}`)],
    };
  if (
    /educat|degree|university|master|bachelor|cv|resume|qualification/.test(q)
  )
    return {
      text: "Ammar has an M.Sc. in Automation & Robotics from TU Dortmund (2018–2021), and a B.Sc. in Electrical Engineering from the University of the Punjab (2013–2017). His experience connects embedded systems, automotive software, and perception.",
      sources: [
        source("Education & experience", "/about#education"),
        source("Print / save profile as PDF", "/about#cv"),
      ],
    };
  if (/research|phd|academic|thesis|publication|paper/.test(q))
    return {
      text: `His research background includes LiDAR semantic segmentation at Continental ADAS and camera-based localization as a research assistant at TU Dortmund. His interests span ${interests.map((i) => i.title.toLowerCase()).join(", ")}.\n\nPlease confirm publication details and prospective research arrangements directly with Ammar.`,
      sources: [
        source("Research interests", "/research"),
        source("LiDAR thesis project", "/projects/lidar-segmentation"),
        source("Research record", "/about#publications"),
      ],
    };
  if (/experience|career|job|automotive|professional|background/.test(q))
    return {
      text: experience
        .slice(0, 4)
        .map((e) => `${e.role} · ${e.place} (${e.date})\n${e.detail}`)
        .join("\n\n"),
      sources: [source("Experience timeline", "/about#experience")],
    };
  if (
    /skill|python|react|flask|linux|program|typescript|c\+\+|tech stack/.test(q)
  )
    return {
      text: "His profile lists Python, C/C++, JavaScript, TypeScript, Linux, SQL, React, and Flask. His project background spans machine learning, sensor fusion, embedded systems, robotics, and automotive software. See individual projects for context rather than assuming every technology was used in every project.",
      sources: [
        source("Technical background", "/about#skills"),
        source("Explore projects", "/projects"),
      ],
    };
  if (/fit|match|collaborat/.test(q))
    return {
      text: "For research collaboration, start with his LiDAR thesis work and camera-localization research experience. For engineering roles, look at automotive testing tools, embedded systems, and full-stack AI projects. This guide cannot judge admission chances or guarantee a match; the project evidence and a direct conversation are the best next steps.",
      sources: [
        source("Research background", "/research"),
        source("Professional experience", "/about#experience"),
        source("Start a conversation", "/contact"),
      ],
    };
  if (/project|work|built|build/.test(q))
    return {
      text: "Explore LiDAR semantic segmentation, RGB + thermal perception, camera-based localization, an AI study assistant, and autonomous RC systems. Choose a project for its approach, Ammar’s contribution, and available evidence.",
      sources: projects
        .slice(0, 3)
        .map((p) => source(p.name, `/projects/${p.id}`)),
    };
  if (/^(hi|hello|hey|help)[.! ]*$/.test(q))
    return {
      text: "Hello! I can help you explore Ammar’s projects, research background, experience, and contact details. Ask about a specific project or choose a suggested question.",
      sources: [
        source("Selected projects", "/projects"),
        source("Research interests", "/research"),
      ],
    };
  const tokens = words(q);
  const ranked = projects
    .map((p) => ({
      project: p,
      score: tokens.reduce(
        (n, token) =>
          n +
          (words(
            `${p.name} ${p.summary} ${p.approach} ${p.tags.join(" ")}`,
          ).includes(token)
            ? 1
            : 0),
        0,
      ),
    }))
    .sort((a, b) => b.score - a.score);
  if (ranked[0]?.score >= 2)
    return {
      text: `The closest documented project is ${ranked[0].project.name}. ${ranked[0].project.summary}\n\nThe portfolio may not address every part of your question; the source below contains the available detail.`,
      sources: [source("Related project", `/projects/${ranked[0].project.id}`)],
    };
  return {
    text: "I don’t have a supported answer to that in this portfolio. I can help with research, projects, education, skills, and experience. For other questions, contact Ammar or try the separate AI résumé chat.",
    sources: [
      source("Research", "/research"),
      source("Contact Ammar", "/contact"),
    ],
  };
}
