/* ------------------------------------------------------------------
   COURSES  (based on Relevant Coursework in the CV)
   Index page:  #/courses      Detail page:  #/course/<slug>
   Attach notes / code / slides by adding entries to `resources`
   (put PDFs in public/uploads/courses/).
   The summaries below are placeholders — edit freely.
------------------------------------------------------------------ */

export type Course = {
  slug: string;
  title: string;
  term: string;
  institution: string;
  summary: string;
  topics: string[];
  resources: {
    label: string;
    url: string;
    kind: "Notes" | "Code" | "Slides" | "Report";
  }[];
};

export const courses: Course[] = [
  {
    slug: "optimal-control",
    title: "Optimal Control",
    term: "IIT Hyderabad",
    institution: "IIT Hyderabad",
    summary:
      "Add a brief summary of what this course covered. Attach your notes and code below.",
    topics: [
      "Calculus of variations",
      "Pontryagin's minimum principle",
      "Dynamic programming",
      "LQR / LQG",
    ],
    resources: [],
  },
  {
    slug: "convex-optimisation",
    title: "Convex Optimisation",
    term: "IIT Hyderabad",
    institution: "IIT Hyderabad",
    summary:
      "Add a brief summary of what this course covered. Attach your notes and code below.",
    topics: ["Convex sets and functions", "Duality", "Second-order cone / SDP", "Interior-point methods"],
    resources: [],
  },
  {
    slug: "multi-agent-systems",
    title: "Multi-Agent Systems",
    term: "IIT Hyderabad",
    institution: "IIT Hyderabad",
    summary:
      "Add a brief summary of what this course covered. Attach your notes and code below.",
    topics: ["Algebraic graph theory", "Consensus and coordination", "Distributed estimation", "Task allocation"],
    resources: [],
  },
  {
    slug: "reinforcement-learning",
    title: "Reinforcement Learning",
    term: "IIT Hyderabad",
    institution: "IIT Hyderabad",
    summary:
      "Add a brief summary of what this course covered. Attach your notes and code below.",
    topics: ["Markov decision processes", "Value and policy methods", "Function approximation", "Policy gradients"],
    resources: [],
  },
  {
    slug: "cfd",
    title: "Computational Fluid Dynamics (CFD)",
    term: "IIT Hyderabad",
    institution: "IIT Hyderabad",
    summary:
      "Add a brief summary of what this course covered. Attach your notes and code below.",
    topics: ["Finite difference / finite volume", "Pressure–velocity coupling", "Stability and convergence", "Turbulence modelling basics"],
    resources: [],
  },
  {
    slug: "scientific-parallel-computing",
    title: "Scientific Parallel Computing",
    term: "IIT Hyderabad",
    institution: "IIT Hyderabad",
    summary:
      "Add a brief summary of what this course covered. Attach your notes and code below.",
    topics: ["OpenMP and MPI", "Parallel numerical linear algebra", "Profiling", "Strong and weak scaling"],
    resources: [],
  },
  {
    slug: "soft-robotics",
    title: "Soft Robotics",
    term: "IIT Hyderabad",
    institution: "IIT Hyderabad",
    summary:
      "Add a brief summary of what this course covered. Attach your notes and code below.",
    topics: ["Continuum mechanics of soft bodies", "Actuation", "Modelling and control", "Bio-inspired locomotion"],
    resources: [],
  },
];

export const getCourse = (slug: string) => courses.find((c) => c.slug === slug);
