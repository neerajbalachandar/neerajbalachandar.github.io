/* ------------------------------------------------------------------
   SITE-WIDE PROFILE INFORMATION  (source: CV)
------------------------------------------------------------------ */

export const profile = {
  name: "Neeraj Balachandar",
  role: "Dual Degree Student — B.Tech (Mechanical) + M.Tech (Aerospace), Minor in Robotics",
  affiliation: "Indian Institute of Technology Hyderabad",
  email: "neerajbalachandar@gmail.com",
  // Drop your own photo at public/images/portrait.jpg to replace this.
  photo: "/images/portrait.jpg",
  photoFallback:
    "https://neerajbalachandar.github.io/author/neeraj-balachandar/avatar_hu4047339585979398385.jpg",
  cv: "/uploads/resume.pdf",
  address:
    "Indian Institute of Technology Hyderabad, Kandi, Sangareddy 502284, Telangana, India.",
  bio: [
    "I am a Dual Degree student at the Indian Institute of Technology Hyderabad, pursuing a B.Tech in Mechanical Engineering and an M.Tech in Aerospace Engineering with a Minor in Robotics.",
    "My research concerns the modeling and control of complex dynamical systems — spanning fluid–structure interaction, aerial robotics and soft robotics. I develop variable-fidelity solvers, operator-learning surrogates, and optimization- and learning-based safe control methods, combining theory, numerical simulation and hardware-in-the-loop validation.",
  ],
  links: [
    { label: "Email", url: "mailto:neerajbalachandar@gmail.com" },
    {
      label: "Google Scholar",
      url: "https://scholar.google.com/citations?user=r2Zut8kAAAAJ&hl=en",
    },
    { label: "GitHub", url: "https://github.com/neerajbalachandar" },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/neeraj-balachandar-4a2777261/",
    },
  ],
};

export const interests = [
  "Scientific Machine Learning",
  "Fluid–Structure Interaction",
  "Optimal Control and Robotics",
  "Scientific Computing",
  "Complex Systems and Nonlinear Dynamics",
];

export const education = [
  {
    area: "Dual Degree: B.Tech in Mechanical Engineering — M.Tech in Aerospace Engineering — Minor in Robotics",
    institution: "Indian Institute of Technology (IIT) Hyderabad",
    location: "Hyderabad, India",
    date: "Nov 2022 – Present",
    detail: "CGPA: 3.5 / 4",
  },
];

export const coursework = [
  { group: "Mathematics", items: ["Matrix Theory", "Linear Algebra", "Probability and Stochastic Processes", "Information Theory"] },
  { group: "Dynamics & Control", items: ["Control Systems", "Optimal Control", "Convex Optimisation", "Spacecraft Dynamics and Control"] },
  { group: "Computational Mechanics", items: ["Incompressible Fluid Flows", "CFD", "FEM", "Scientific Parallel Computing"] },
  { group: "Robotics", items: ["Autonomous Robotics", "Soft Robotics"] },
  { group: "Learning & Decision Making", items: ["Machine Learning", "Reinforcement Learning", "Multi-Agent Systems", "Principles of Game Theory"] },
];

export type Experience = {
  position: string;
  org: string;
  location: string;
  date: string;
  supervisor?: { name: string; url?: string };
  notes: string[];
};

export const work: Experience[] = [
  {
    position: "Undergraduate Researcher, Dynamics and Control Lab (DysCo)",
    org: "IIT Hyderabad",
    location: "Hyderabad, India",
    date: "Mar 2024 – Present",
    supervisor: { name: "Dr. Vishnu R. Unni" },
    notes: [
      "Conduct research on the modeling and control of complex dynamical systems, spanning fluid–structure interaction, aerial robotics, and soft robotics.",
      "Develop data-driven models and reduced-order representations for prediction, system identification, and control of nonlinear dynamical systems.",
      "Design optimization- and learning-based safe control methods for constrained dynamical systems.",
      "Develop reproducible scientific-computing frameworks in Julia and Python, combining theory, numerical simulation, and experimental/hardware-in-the-loop validation for multiphysics and robotic systems.",
      "Teaching Assistant for Spacecraft Dynamics and Control (Spring 2026, Dr. Vishnu R. Unni) and Control Systems (Fall 2026, Dr. Safvan Palathingal); prepared assessment and assignment problems and evaluated student solutions.",
    ],
  },
  {
    position: "Swarm Rescue Challenge",
    org: "CIEDS – Ecole Polytechnique de Paris",
    location: "Palaiseau, France (hybrid)",
    date: "Nov 2024 – Mar 2025",
    supervisor: { name: "Dr. David Filliat" },
    notes: [
      "Developed a Python-based multi-UAV exploration and rescue framework for unknown environments under obstacle, communication, and resource constraints.",
      "Designed decentralized swarm navigation using Artificial Potential Fields for exploration and Rapidly-exploring Random Trees (RRT) for return-to-base transport, with nearby drones maintaining a coordinated polygon formation around a designated leader.",
      "Evaluated swarm performance across 4 simulated environments and compared clustering-based exploration strategies using DBSCAN and K-means; achieved an average of 4.5 rescues and 1.5 collisions per 2000 simulation steps.",
      "Presented the system and challenge results in person at Ecole Polytechnique de Paris; ranked second among Indian teams based on combined technical performance and presentation.",
    ],
  },
  {
    position: "Research Intern",
    org: "Indian Institute of Science",
    location: "Bangalore, India",
    date: "May 2024 – Aug 2024",
    supervisor: { name: "Dr. SN Omkar" },
    notes: [
      "Investigated human neuromuscular response under near-microgravity loading using experimental EMG time-series and motion-capture data, with relevance to wearable and assistive robotics.",
      "Designed and developed a wearable exoskeleton to reproduce near-microgravity loading conditions, integrating mechanical design with biomechanical and musculoskeletal modeling.",
      "Used OpenSim with experimental motion-capture data to validate musculoskeletal simulations and analyzed elbow-flexor muscle activation from EMG under altered loading conditions.",
    ],
  },
];

export const awards = [
  {
    title: "Undergraduate Research Excellence Award",
    awarder:
      "Given annually to one student in the Dept. of Mechanical and Aerospace Engineering, IIT Hyderabad, for outstanding research contributions.",
    url: "",
  },
  {
    title: "Second among Indian teams — Swarm Rescue Challenge 2025",
    awarder: "Organized by CIEDS – Ecole Polytechnique de Paris.",
    url: "https://www.ip-paris.fr/en/news/final-swarm-rescue-challenge-2024-2025-drone-swarm-simulation-programming-competition",
  },
  {
    title: "Summer Research Fellowship, Indian Academy of Sciences",
    awarder:
      "Awarded for a research internship at the Indian Institute of Science in Summer 2024.",
    url: "https://www.ias.ac.in/",
  },
  {
    title: "Top 0.3 percentile nationally — JEE 2022",
    awarder: "Joint Entrance Examination (Advanced), 2022.",
    url: "",
  },
];

export const skills = [
  {
    group: "Programming Languages",
    items: ["Python", "Julia", "MATLAB", "C", "Embedded C"],
  },
  {
    group: "Tools",
    items: [
      "ROS",
      "Gazebo",
      "MuJoCo",
      "Paraview",
      "Simulink",
      "SolidWorks",
      "Ansys Fluent",
      "Simulia Abaqus",
      "LaTeX",
      "GitHub",
      "OpenSim",
      "Linux OS",
      "VS Code",
      "QP solvers",
    ],
  },
];

export const extracurriculars = [
  "Part of the University Basketball team (Inter-IIT 2023–2025).",
  "Completed Trinity Grade 2 Piano level.",
];
