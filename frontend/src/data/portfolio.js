export const profile = {
  name: "Muhammad Ammar Tauqir",
  shortName: "Ammar Tauqir",
  email: "ammar.tauqir2@gmail.com",
  location: "Ingolstadt, Germany",
  github: "https://github.com/ammartauqir",
  linkedin: "https://www.linkedin.com/in/muhammad-ammar-tauqir-5754339b/",
  aiResume: "https://huggingface.co/spaces/AmmarTauqir/virtual_resume",
};

// Descriptions draw from the existing portfolio. Do not add results, publication
// status, or individual contributions without the author's supporting material.
export const projects = [
  {
    id: "lidar-segmentation",
    title: "Understanding a world of points",
    name: "LiDAR Semantic Segmentation",
    category: "Perception",
    year: "2020–2021",
    type: "Master’s thesis · Continental ADAS",
    visual: "lidar",
    summary:
      "Exploring semantic understanding of LiDAR point clouds for automotive perception.",
    tags: ["3D perception", "Machine learning", "LiDAR"],
    question:
      "How can a system turn an unstructured point cloud into a meaningful understanding of its surroundings?",
    approach:
      "My internship and master’s thesis at Continental ADAS involved implementing LiDAR point-cloud semantic segmentation with machine-learning methods, including point-wise classification and 3D convolutional networks.",
    contribution:
      "Implementation of LiDAR semantic-segmentation methods during my internship and master’s thesis.",
    next: "Cross-dataset generalization, robustness to sparse observations, and the relationship between perception quality and downstream decisions.",
    evidence:
      "This overview describes the work listed in my profile. A thesis PDF, reproducible benchmark, and public implementation are not linked here; please contact me for further details.",
  },
  {
    id: "thermal-vision",
    title: "Seeing beyond visible light",
    name: "Thermal Vision System",
    category: "Perception",
    year: "Exploration",
    type: "RGB + thermal imaging",
    visual: "thermal",
    summary:
      "Bringing RGB and thermal information together to explore richer visual perception.",
    tags: ["Sensor fusion", "Computer vision", "Thermal imaging"],
    question:
      "What can complementary sensors reveal when a single view is incomplete?",
    approach:
      "My portfolio work includes real-time RGB and thermal fusion, object detection and tracking, and a thermal-camera breathing-pattern detector with nose tracking.",
    contribution:
      "Work on RGB + thermal perception pipelines and thermal-camera tracking, as described in my project background.",
    next: "Comparing individual sensors with fused inputs under controlled changes in illumination, with explicit accuracy and latency measurements.",
    evidence:
      "The interactive comparison on this website is a synthetic illustration, not a thermal capture or an evaluation of this project. Measured results and public code are not supplied here.",
  },
  {
    id: "camera-localization",
    title: "Finding position through perspective",
    name: "Camera-based Localization",
    category: "Robotics",
    year: "2019–2020",
    type: "Research assistant · TU Dortmund",
    visual: "localization",
    summary:
      "Camera-based localization for logistics spaces, connecting visual information to physical position.",
    tags: ["Localization", "Multi-view geometry", "Robotics"],
    question:
      "How can cameras provide useful position estimates inside a logistics environment?",
    approach:
      "As a research assistant at TU Dortmund’s FLW InnovationLab, I developed a camera-based localization system for logistics halls. My related project experience includes multi-view triangulation and camera-based pose estimation.",
    contribution:
      "Development of the camera-based localization system during my research-assistant role.",
    next: "Understanding sensitivity to camera placement, calibration error, and temporary occlusion.",
    evidence:
      "The role and project are described in my existing profile. Quantitative localization results, datasets, and a public implementation are not linked here.",
  },
  {
    id: "study-assistant",
    title: "Making knowledge more approachable",
    name: "AI-Powered Study Assistant",
    category: "Applied AI",
    year: "Exploration",
    type: "AI for education",
    visual: "ai",
    summary:
      "An education-focused project exploring summarization, study plans, quizzes, and question answering.",
    tags: ["Applied AI", "Education", "Full stack"],
    question:
      "How can AI help people engage with learning material more effectively?",
    approach:
      "The study-assistant project described in my portfolio brings together AI summarization, personalized study plans, quizzes, flashcards, and natural-language question answering.",
    contribution:
      "Education-focused software and AI exploration, alongside my work on myStudyDreams.com.",
    next: "Evaluating factual accuracy and usefulness against a simple baseline, rather than assuming generated content improves learning.",
    evidence:
      "This is a project overview. No controlled learning-outcome study or benchmark is claimed. Contact me for the current implementation status.",
  },
  {
    id: "autonomous-flight",
    title: "From signals to flight",
    name: "Autonomous RC Plane",
    category: "Robotics",
    year: "Exploration",
    type: "Navigation + control",
    visual: "flight",
    summary:
      "Exploring RC aircraft, navigation, sensor fusion, and custom control systems.",
    tags: ["Control systems", "Navigation", "Embedded"],
    question:
      "How do sensing, control, and hardware come together in an autonomous aircraft?",
    approach:
      "My RC and robotics interests include GPS-based navigation, real-time sensor fusion, motors, ESCs, servos, and custom controllers.",
    contribution:
      "Hands-on exploration of RC hardware and autonomous-control systems, as described in my existing portfolio.",
    next: "Separating simulation from hardware experiments, and evaluating behavior under sensor noise and external disturbances.",
    evidence:
      "Flight-test logs, benchmark results, and a public implementation are not linked here. Contact me for the current project status.",
  },
  {
    id: "smart-home",
    title: "Connecting a home’s moving parts",
    name: "Smart Home Automation",
    category: "Applied AI",
    year: "Exploration",
    type: "Connected systems",
    visual: "ai",
    summary:
      "Exploring connected devices, automation, and AI-assisted home operations.",
    tags: ["Home Assistant", "MQTT", "Automation"],
    question:
      "How can connected devices work together to make everyday routines simpler?",
    approach:
      "The smart-home project in my portfolio explores Home Assistant integration, MQTT messaging, voice interfaces, energy optimization, and security monitoring.",
    contribution:
      "Home-automation and connected-device exploration as described in my project portfolio.",
    next: "Evaluating reliability, useful automation, and the tradeoff between convenience and privacy.",
    evidence:
      "This is a project overview. Measured energy savings, deployment details, and a public implementation are not supplied here. Please ask for the current project status.",
  },
];

export const experience = [
  {
    date: "2022 — present",
    role: "Software Developer",
    place: "e.solutions GmbH",
    detail: "Developing testing tools for automotive infotainment systems.",
  },
  {
    date: "2021 — 2022",
    role: "Engineering Consultant",
    place: "Alten GmbH",
    detail: "Automotive infotainment development and testing at e.solutions.",
  },
  {
    date: "2020 — 2021",
    role: "Internship & Master’s Thesis",
    place: "Continental · ADAS",
    detail:
      "LiDAR point-cloud semantic segmentation using machine-learning methods.",
  },
  {
    date: "2019 — 2020",
    role: "Research Assistant",
    place: "TU Dortmund · FLW InnovationLab",
    detail: "Camera-based localization for logistics halls.",
  },
  {
    date: "2017 — 2018",
    role: "Embedded Systems Engineer",
    place: "AVIACELL Technologies",
    detail: "Algorithms for ADAS systems on embedded ECUs.",
  },
];

export const interests = [
  {
    number: "01",
    title: "Perceiving the physical world",
    text: "3D scene understanding, complementary sensors, and visual information that can support real decisions.",
    question:
      "How can perception remain useful when observations are incomplete?",
    tags: "3D PERCEPTION / SENSOR FUSION",
  },
  {
    number: "02",
    title: "Connecting perception to action",
    text: "Localization, navigation, and the practical relationship between sensing, control, and robotic hardware.",
    question:
      "How should uncertainty in sensing influence a system’s next action?",
    tags: "LOCALIZATION / AUTONOMY",
  },
  {
    number: "03",
    title: "Building useful intelligence",
    text: "AI systems that help people work and learn, with attention to grounding, evaluation, and clear limitations.",
    question:
      "How do we distinguish a convincing AI response from a useful one?",
    tags: "APPLIED AI / EVALUATION",
  },
];
