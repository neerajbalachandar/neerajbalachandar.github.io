/* ------------------------------------------------------------------
   RESEARCH PROJECTS  (source: CV)
   Each project gets its own page at  #/project/<slug>
   Themes are shared filters (see THEMES).
   Media: set `cover` to an image path OR `video` to an .mp4/.webm
          (files go in public/images/projects/ or public/videos/).
------------------------------------------------------------------ */

export const THEMES = {
  sciml: "Scientific Machine Learning",
  fsi: "Fluid–Structure Interaction",
  control: "Control & Optimisation",
  robotics: "Robotics & Autonomy",
  computing: "Scientific Computing",
} as const;

export type ThemeKey = keyof typeof THEMES;

export type Advisor = { name: string; url?: string };

export type Project = {
  slug: string;
  title: string;
  short: string;
  summary: string;
  status: "ongoing" | "past";
  period?: string;
  advisors?: Advisor[];
  themes: ThemeKey[];
  cover?: string;
  video?: string;
  highlights: string[];
  gallery?: { src: string; caption: string }[];
  links?: { label: string; url: string }[];
  publications?: string[]; // slugs from data/publications.ts
};

/* ---------------------------- ONGOING RESEARCH --------------------------- */

export const projects: Project[] = [
  {
    slug: "soft-dynamical-systems",
    title:
      "Control-Aware Model Reduction and Morphology-Control Co-Design for Soft Dynamical Systems",
    short: "Control-aware model reduction and morphology co-design for soft robots",
    summary:
      "Building a soft-robot simulation and RL gymnasium to study morphology-dependent controllability, reduced-order body–wake dynamics, and morphology–control co-design.",
    status: "ongoing",
    period: "Aug 2026 – Present",
    advisors: [{ name: "Dr. Vishnu R. Unni" }, { name: "Dr. Vishal Sawant" }],
    themes: ["robotics", "control", "sciml"],
    cover: "/images/projects/soft-dynamical-systems.jpg",
    highlights: [
      "Developing a soft-robot simulation and action-state RL-Gymnasium for a generalized class of soft robots to learn locomotion.",
      "Investigating morphology-dependent controllability, relating changes in the robot's dynamics and actuation to its achievable locomotion behaviors.",
      "Developing a reduced-order representation of body–wake dynamics that preserves locomotion- and control-relevant behavior.",
      "Extending the framework toward morphology–control co-design, where learned locomotion performance guides the evolution of the robot's body and control strategy.",
    ],
    gallery: [],
    links: [],
    publications: ["soft-thesis"],
  },
  {
    slug: "dd-mt-gino",
    title:
      "A Geometry-Informed, Multi-Task Neural Operator for Nonlocal Kernel Interactions in Lagrangian Flows: DD-MT-GINO",
    short: "Multi-task geometry-informed neural operator for Lagrangian flows",
    summary:
      "An operator-learning framework that modifies the Geometry-Informed Neural Operator for multi-task prediction in a shared Fourier latent space, learning coupled vortex-particle evolution and Eulerian velocity-field reconstruction.",
    status: "ongoing",
    period: "Sep 2025 – Present",
    advisors: [
      { name: "Dr. Vishnu R. Unni" },
      { name: "Dr. Sumohana S. Channappayya" },
    ],
    themes: ["sciml", "fsi"],
    cover: "/images/projects/neural-operator.jpg",
    highlights: [
      "Formulated and implemented an operator learning framework, modifying the existing Geometry-Informed Neural Operator to perform multi-task prediction in a shared Fourier latent space.",
      "Validated the architecture by learning two coupled tasks from a common latent space: vortex-particle evolution in the Lagrangian frame and Eulerian velocity-field reconstruction, exploiting their shared underlying Poisson PDE dynamics through an operator-theoretic formulation.",
      "Compared the architecture against the classical Fast Multipole Method as a data-driven surrogate for speedup while maintaining accuracy; systematically studied input–output representations through parameter sweeps.",
      "Ongoing work on generalization to unseen kinematics and geometries, super-resolution for reconstruction, and abstracting the architecture toward a more general multi-task neural operator framework.",
    ],
    gallery: [],
    links: [],
    publications: ["gino-journal", "pifno-tsfp14"],
  },
  {
    slug: "varflexi",
    title:
      "An Aeroelastic Solver Integrating Reformulated-Vortex-Particle and Finite-Element Methods across Non-Conforming Interfaces: VarFlExI",
    short: "Variable-fidelity aeroelastic solver (rVPM + FEM)",
    summary:
      "VarFlExI is a variable-fidelity partitioned solver that couples a meshless reformulated vortex particle method with FEniCS finite elements to solve dynamic aeroelasticity problems across non-conforming interfaces.",
    status: "ongoing",
    period: "May 2025 – Present",
    advisors: [
      { name: "Dr. Vishnu R. Unni" },
      { name: "Dr. Niranjan Ghaisas" },
      { name: "Dr. Prakhar Gupta" },
    ],
    themes: ["fsi", "computing"],
    cover: "/images/projects/varflexi.jpg",
    highlights: [
      "Developed the framework VarFlExI, a variable-fidelity partitioned solver that uses a meshless scheme to solve the Navier–Stokes equations with a reformulated vortex particle method, coupled with FEniCS to solve dynamic aeroelasticity problems using Generalized-α.",
      "The solver features strong work-conservation techniques that exploit the Common Refinement Method (CRM) or Wendland Kernel-based interpolation (RBF) to transfer aerodynamic force and structural geometry across non-conforming and multi-representative discretizations through a common interface.",
      "Obtained close validation against an experimental water-tunnel heaving-wing setup and performed multiple convergence tests for spatial and temporal discretization and wake fidelity; showed the advantage of CRM over RBF methods in reducing work-conservation error at the interface.",
      "Designed the framework primarily for vortical-structure-dominated flows, with variable-fidelity configurations that enable substantially lower computational cost than fully meshed solvers — reducing simulation times from days to hours while retaining essential bi-directionally coupled aeroelastic dynamics.",
    ],
    gallery: [],
    links: [],
    publications: ["varfiexi-journal"],
  },
  {
    slug: "nmpc-scp-docking",
    title:
      "Nonlinear Model Predictive Control via Sequential Convex Programming for Drone-to-Drone Docking: NMPC-SCP",
    short: "NMPC via sequential convex programming for aerial docking",
    summary:
      "A receding-horizon nonlinear MPC framework for autonomous drone-to-drone docking that solves the finite-horizon constrained optimal-control problem through Sequential Convex Programming.",
    status: "ongoing",
    period: "May 2025 – Present",
    advisors: [{ name: "Dr. Vishnu R. Unni" }],
    themes: ["control", "robotics"],
    cover: "/images/projects/docking.jpg",
    highlights: [
      "Developed a receding-horizon nonlinear model predictive control framework for autonomous drone-to-drone docking, formulating docking as a finite-horizon constrained optimal-control problem and solving it through Sequential Convex Programming (SCP).",
      "Formulated a reduced-order nonlinear multirotor model augmented with wind-disturbance states, and iteratively linearized the dynamics within a trust-region SCP framework with virtual control to obtain tractable convex subproblems.",
      "Integrated disturbance-aware target-state estimation and prediction using a Kalman filter with receding-horizon replanning, enabling trajectory generation under noisy measurements and target drift for both stationary and constant-velocity target motion.",
      "Developed a unified set of kinematic, geometric, and safety constraints, including docking-cone capture geometry, chaser–target collision avoidance, and actuation constraints, with nonconvex constraints convexified into second-order cone programs.",
      "Validated the planned trajectories in a high-fidelity full rigid-body MuJoCo simulation with an NMPC planner and high-frequency inner-loop attitude control; convex subproblems achieved approximately 12–18 ms solve times per iteration, with negligible docking-cone violations while satisfying docking constraints.",
    ],
    gallery: [],
    links: [],
    publications: ["docking-aim"],
  },
  {
    slug: "learn-to-fly",
    title: "Modeling and Control of Aerial Robots from Constrained Dynamics: Learn-To-Fly",
    short: "System identification and control of constrained aerial robots",
    summary:
      "A mechanically constrained aerial-robot platform for system identification and control, using reduced degrees of freedom to directly measure generalized coordinates and net wrench on a multi-rotor.",
    status: "ongoing",
    period: "Jan 2026 – Present",
    advisors: [{ name: "Dr. Vishnu R. Unni" }],
    themes: ["robotics", "control", "sciml"],
    cover: "/images/projects/learn-to-fly.jpg",
    highlights: [
      "Developed a mechanically constrained aerial-robot platform for system identification and control, using reduced translational and rotational degrees of freedom to obtain direct measurement of generalized coordinates and net wrench on the multi-rotor.",
      "Formulated the coupled aerial-robot dynamics through an Euler–Lagrange framework, deriving the mass matrix, Coriolis terms, potential-energy terms, and generalized forces for the constrained 3/4/5-DOF configurations.",
      "Developing a framework for recovering the net wrench acting on the aerial robot from generalized-coordinate measurements, with analysis of observability, matrix rank, conditioning, and sensor configuration across the attainable workspace.",
      "Learning free-flight aerial-robot dynamics from constrained experimental data using inverse-dynamics-based wrench estimation and data-driven models (Koopman), while systematically evaluating sensitivity to model-parameter uncertainty and sensor noise.",
    ],
    gallery: [],
    links: [],
    publications: ["aerial-constrained-journal"],
  },

  /* ---------------------------- SELECTED PROJECTS -------------------------- */

  {
    slug: "cbf-convex-synthesis",
    title: "Convex Synthesis of Control Barrier Functions: A Review of Safety-Critical Control",
    short: "Convex synthesis of control barrier functions",
    summary:
      "A study of Control Barrier Function synthesis under actuator constraints, comparing classical, input-constrained, and Sum-of-Squares formulations, and developing a convex SOS/SDP formulation for input-constrained CBF synthesis.",
    status: "past",
    period: "Mar 2026",
    advisors: [{ name: "Dr. Sumohana S. Channappayya" }],
    themes: ["control"],
    highlights: [
      "Investigated Control Barrier Function (CBF) synthesis under actuator constraints, comparing classical CBFs, Input-Constrained CBFs (ICCBFs), and Sum-of-Squares (SOS)-based formulations for safety-critical obstacle avoidance.",
      "Implemented and analyzed polynomial barrier-function synthesis, including joint barrier–controller parameterization; identified the resulting bilinear matrix inequality (BMI) and demonstrated how actuator saturation can invalidate safety guarantees obtained without explicit input constraints.",
      "Developed a convex SOS/semidefinite-programming formulation for input-constrained CBF synthesis using lifted polynomial representations, SOS multipliers, and Schur-complement-based input constraints; implemented and evaluated formulations using YALMIP, MOSEK, and Clarabel.",
    ],
    gallery: [],
  },
  {
    slug: "neuro-fuzzy-pid",
    title: "A Neuro-Fuzzy logic for PID control",
    short: "Adaptive neuro-fuzzy PID for a 2-DOF manipulator",
    summary:
      "An adaptive neuro-fuzzy PID controller for nonlinear trajectory tracking of a 2-DOF robotic manipulator, using online gradient-based learning to adapt gains and fuzzy membership parameters.",
    status: "past",
    period: "Nov 2025",
    advisors: [{ name: "Dr. Vishnu R. Unni" }],
    themes: ["control", "robotics"],
    highlights: [
      "Developed an adaptive neuro-fuzzy PID controller for nonlinear trajectory tracking of a 2-DOF robotic manipulator; used online gradient-based learning to adapt PID gains and fuzzy membership parameters from joint tracking error and its rate of change.",
      "Evaluated tracking and gain adaptation under parabolic, high-slope sinusoidal, and multi-frequency trajectories, demonstrating better performance over fixed-gain PID.",
    ],
    gallery: [],
  },
  {
    slug: "parallel-svd",
    title: "Parallelization of SVD Algorithm",
    short: "Jacobi SVD parallelized in C with OpenMP",
    summary:
      "A Jacobi-based SVD/eigendecomposition algorithm implemented in C with OpenMP, parallelizing matrix operations and off-diagonal pivot search for multicore execution.",
    status: "past",
    period: "Feb 2025",
    advisors: [{ name: "Dr. Niranjan Ghaisas" }],
    themes: ["computing"],
    highlights: [
      "Implemented a Jacobi-based SVD/eigendecomposition algorithm in C with OpenMP, parallelizing matrix operations and off-diagonal pivot search for multicore execution.",
      "Benchmarked serial vs. parallel performance and strong/weak scaling across increasing matrix sizes.",
    ],
    gallery: [],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const ongoingProjects = projects.filter((p) => p.status === "ongoing");
export const pastProjects = projects.filter((p) => p.status === "past");
export const projectsByTheme = (key: ThemeKey) =>
  projects.filter((p) => p.themes.includes(key));
