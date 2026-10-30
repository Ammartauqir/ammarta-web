const projects = [
  {
    id: "study-assistant",
    title: "AI-Powered Study Assistant",
    status: "Ongoing / product",
    role: "Founder / builder",
    summary:
      "Study tool that uses AI for summarization, quizzes, and personalized learning plans.",
    highlights: [
      "Smart note-taking with AI summarization",
      "Personalized study plans",
      "Interactive quizzes and flashcards",
    ],
    stack: ["Python", "React", "LLMs"],
    outcome: "Used as an education-tech showcase for AI-assisted learning workflows.",
    links: {
      repo: null,
      demo: "https://www.mystudydreams.com",
    },
  },
  {
    id: "rc-plane",
    title: "Autonomous RC Plane",
    status: "Research / prototype",
    role: "Hardware + autonomy",
    summary:
      "Custom RC plane with GPS navigation, sensor fusion, and autonomous flight experiments.",
    highlights: [
      "GPS-based navigation",
      "Real-time sensor fusion",
      "Custom flight controller work",
    ],
    stack: ["ArduPilot", "Python", "ROS"],
    outcome: "Hands-on autonomy stack spanning sensors, control, and ground tools.",
    links: {
      repo: null,
      demo: null,
    },
  },
  {
    id: "thermal-vision",
    title: "Thermal Vision System",
    status: "Prototype",
    role: "Computer vision",
    summary:
      "RGB + thermal fusion pipeline for detection, tracking, and temperature analysis.",
    highlights: [
      "Real-time image fusion",
      "Object detection and tracking",
      "Temperature analysis",
    ],
    stack: ["OpenCV", "PyTorch", "CUDA"],
    outcome: "Demonstrates multimodal perception for industrial/security contexts.",
    links: {
      repo: null,
      demo: null,
    },
  },
  {
    id: "smart-home",
    title: "Smart Home Automation",
    status: "Personal systems",
    role: "Full-stack automation",
    summary:
      "Home automation with voice control, energy awareness, and monitoring hooks.",
    highlights: [
      "Voice control interface",
      "Energy optimization ideas",
      "Security monitoring",
    ],
    stack: ["IoT", "Python", "APIs"],
    outcome: "Practical automation experiments with real household constraints.",
    links: {
      repo: null,
      demo: null,
    },
  },
];

export default projects;
