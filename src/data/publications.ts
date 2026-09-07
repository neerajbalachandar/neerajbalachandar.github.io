/* ------------------------------------------------------------------
   RESEARCH CONTRIBUTIONS  (source: CV)
   Each entry gets its own page at  #/publication/<slug>
------------------------------------------------------------------ */

export type Publication = {
  slug: string;
  authors: string;
  title: string;
  venue: string; // status / where it is / will be
  year: string;
  type: "Journal" | "Conference" | "Thesis";
  abstract: string;
  pdf?: string;
  bibtex?: string;
  doi?: string;
  github?: string;
  project?: string; // project slug
};

export const publications: Publication[] = [
  /* ------------------------------- JOURNAL ------------------------------- */
  {
    slug: "gino-journal",
    authors: "Neeraj Balachandar, Yashwanth M., Vishnu R. Unni",
    title:
      "A Geometry-Informed, Multi-Task Neural Operator for Nonlocal Kernel Interactions in Lagrangian Flows",
    venue: "Manuscript in preparation; preprint forthcoming on arXiv",
    year: "2026",
    type: "Journal",
    abstract:
      "Replace with the final abstract. Presents a geometry-informed, multi-task neural operator that learns coupled vortex-particle evolution and Eulerian velocity-field reconstruction in a shared Fourier latent space, exploiting shared Poisson PDE dynamics.",
    github: "https://github.com/neerajbalachandar",
    project: "dd-mt-gino",
  },
  {
    slug: "varfiexi-journal",
    authors: "Neeraj Balachandar, A. Padmaprabhan, Vishnu R. Unni",
    title:
      "An Aeroelastic Solver Integrating Reformulated-Vortex-Particle and Finite-Element Methods across Non-Conforming Interfaces",
    venue: "Manuscript in preparation for submission to Elsevier; preprint on arXiv",
    year: "2025",
    type: "Journal",
    abstract:
      "Replace with the final abstract. Introduces VarFlExI, a variable-fidelity partitioned solver coupling a meshless reformulated vortex particle method with finite elements across non-conforming interfaces using the Common Refinement Method and RBF interpolation.",
    github: "https://github.com/neerajbalachandar",
    project: "varflexi",
  },
  {
    slug: "aerial-constrained-journal",
    authors:
      "Yashwanth M., Neeraj Balachandar, Dhinesan, Harishankar M, Akhin, Vishnu R. Unni",
    title: "Modeling and Control of Aerial Robots from Constrained Dynamics",
    venue: "Manuscript in preparation; preprint forthcoming on arXiv",
    year: "2026",
    type: "Journal",
    abstract:
      "Replace with the final abstract. Presents modeling and control of aerial robots from constrained dynamics, recovering the net wrench from generalized-coordinate measurements and learning free-flight dynamics from constrained experimental data.",
    github: "https://github.com/neerajbalachandar",
    project: "learn-to-fly",
  },

  /* ------------------------------ CONFERENCE ---------------------------- */
  {
    slug: "docking-aim",
    authors: "Neeraj Balachandar, Shriram Hari, Vishnu R. Unni",
    title: "Nonlinear Model Predictive Control via Sequential Convex Programming for Drone-to-Drone Docking",
    venue:
      "Presented at the IEEE/ASME International Conference on Advanced Intelligent Mechatronics (AIM 2026), July 10, 2026, Genova, Italy (In-Person Contributed Paper Session)",
    year: "2026",
    type: "Conference",
    abstract:
      "Replace with the final abstract. A receding-horizon NMPC framework for drone-to-drone docking solved through Sequential Convex Programming, validated in high-fidelity MuJoCo simulation.",
    github: "https://github.com/neerajbalachandar",
    project: "nmpc-scp-docking",
  },
  {
    slug: "pifno-tsfp14",
    authors: "Neeraj Balachandar, Yashwanth M., Vishnu R. Unni",
    title:
      "Physics Informed Fourier Neural Operator to Map Reformulated Vortex Particle Field to Eulerian Velocity Field",
    venue:
      "Accepted for presentation at the 14th International Symposium on Turbulence and Shear Flow Phenomena (TSFP14), July 2026, Heidelberg, Germany (Submission withdrawn by authors)",
    year: "2026",
    type: "Conference",
    abstract:
      "Replace with the final abstract. A physics-informed Fourier neural operator mapping a reformulated vortex particle field to the Eulerian velocity field.",
    project: "dd-mt-gino",
  },
  {
    slug: "flapping-actuator",
    authors:
      "Neeraj Balachandar, Yashwanth M., Akash M., Mahathi Kesavan, Vishnu R. Unni",
    title: "Actuator System for Directional Manoeuvre of a Flapping Wing Aerial Vehicle",
    venue:
      "Presented at the 2025 AIAA SciTech Forum, Session AS-08: Bio-inspired Adaptive Structures, January 8, 2025, Orlando, FL (In-Person Technical Paper Session)",
    year: "2025",
    type: "Conference",
    abstract:
      "Replace with the final abstract. Design and characterisation of an actuator system enabling directional manoeuvre of a flapping wing aerial vehicle.",
  },
  {
    slug: "jellyfish-soft-robotics",
    authors: "Neeraj Balachandar, Vishnu R. Unni",
    title:
      "Analytical Modeling of Deformable Membranes in Undulatory Motion driven by Tendon-based Cosserat Rods",
    venue:
      "In preparation for submission to the 10th IEEE International Conference on Soft Robotics",
    year: "2025",
    type: "Conference",
    abstract:
      "Replace with the final abstract. Analytical modeling of deformable membranes in undulatory motion driven by tendon-based Cosserat rods for biomimetic soft-robotic swimming.",
  },

  /* -------------------------------- THESIS ------------------------------ */
  {
    slug: "soft-thesis",
    authors: "Neeraj Balachandar",
    title:
      "Control-Aware Model Reduction and Morphology-Control Co-Design for Soft Dynamical Systems",
    venue: "M.Tech thesis, 2026–27",
    year: "2026",
    type: "Thesis",
    abstract:
      "Replace with the final abstract. M.Tech thesis on control-aware model reduction and morphology–control co-design for soft dynamical systems.",
    project: "soft-dynamical-systems",
  },
];

export const getPublication = (slug: string) =>
  publications.find((p) => p.slug === slug);
export const publicationsForProject = (projectSlug: string) =>
  publications.filter((p) => p.project === projectSlug);

export const journalPublications = publications.filter((p) => p.type === "Journal");
export const conferencePublications = publications.filter((p) => p.type === "Conference");
export const thesisPublications = publications.filter((p) => p.type === "Thesis");
