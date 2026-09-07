/* ------------------------------------------------------------------
   BLOG / RESEARCH NOTES  (index: #/blog , detail: #/blog/<slug>)
   and NEWS ITEMS         (detail: #/news/<slug>)
------------------------------------------------------------------ */

export type Post = {
  slug: string;
  title: string;
  date: string;
  category: "Research notes" | "Course notes" | "Photography" | "General";
  summary: string;
  body: string[];
  attachments?: { label: string; url: string }[];
};

export const posts: Post[] = [
  {
    slug: "research-notes",
    title: "Research Notes (Template)",
    date: "2025",
    category: "Research notes",
    summary: "Template blog entry for technical updates and reflections.",
    body: [
      "Template blog entry for technical updates and reflections.",
      "Use this page for short technical write-ups: derivations you found instructive, debugging notes on a solver, or a summary of a paper you read.",
    ],
    attachments: [],
  },
  {
    slug: "course-notes",
    title: "Course Notes (Template)",
    date: "2025",
    category: "Course notes",
    summary: "Add important course notes and attach your PDF here.",
    body: [
      "Add important course notes and attach your PDF here.",
      "Course-specific material now lives in the Courses section; use this page for cross-cutting notes that do not belong to a single course.",
    ],
    attachments: [{ label: "Notes (PDF)", url: "/uploads/notes/course-notes.pdf" }],
  },
  {
    slug: "photography",
    title: "Photography (Template)",
    date: "2025",
    category: "Photography",
    summary: "Showcase photographs you capture and write a short story behind each one.",
    body: [
      "Showcase photographs you capture and write a short story behind each one.",
      "Add image files to public/images/photography/ and reference them here.",
    ],
    attachments: [],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

export type NewsItem = {
  slug: string;
  date: string;
  title: string;
  summary: string;
  body: string[];
  link?: { label: string; url: string };
};

export const news: NewsItem[] = [
  {
    slug: "2025-swarm-rescue",
    date: "March 2025",
    title: "Swarm Rescue Challenge Recognition",
    summary:
      "Recognized at the Swarm Rescue Challenge hosted by CIEDS-ENSTA, Ecole Polytechnique de Paris.",
    body: [
      "Recognized at the Swarm Rescue Challenge hosted by CIEDS-ENSTA, Ecole Polytechnique de Paris.",
    ],
    link: {
      label: "Challenge announcement",
      url: "https://www.ip-paris.fr/en/news/final-swarm-rescue-challenge-2024-2025-drone-swarm-simulation-programming-competition",
    },
  },
  {
    slug: "2024-ias-srf",
    date: "April 2024",
    title: "Selected for the Indian Academy of Sciences Summer Research Fellowship",
    summary: "Received the Indian Academy of Sciences Summer Research Fellowship.",
    body: ["Received the Indian Academy of Sciences Summer Research Fellowship."],
    link: { label: "Indian Academy of Sciences", url: "https://www.ias.ac.in/" },
  },
  {
    slug: "2024-dsclab",
    date: "January 2024",
    title: "Joined the Dynamical Systems and Control Lab",
    summary: "Started research with the Dynamical Systems and Control Lab.",
    body: ["Started research with the Dynamical Systems and Control Lab, IIT Hyderabad."],
  },
];

export const getNews = (slug: string) => news.find((n) => n.slug === slug);
