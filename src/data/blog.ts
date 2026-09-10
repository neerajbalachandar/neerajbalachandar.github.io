/* ------------------------------------------------------------------
   BLOG / RESEARCH NOTES  (index: #/blog , detail: #/blog/<slug>)
   and NEWS ITEMS         (detail: #/news/<slug>)
------------------------------------------------------------------ */

export type Post = {
  slug: string;
  title: string;
  date: string;
  category: "Course notes" | "Blog";
  summary: string;
  body: string[];
  attachments?: { label: string; url: string }[];
};

export const posts: Post[] = [
  {
    slug: "neural-operator-learning",
    title: "Neural Operator Learning",
    date: "2026-09-10",
    category: "Blog",
    summary: "Notes and resources about neural operator learning.",
    body: [""],
    attachments: [{ label: "Neural Operator Learning (MD)", url: "/uploads/Neural%20Operator%20Learning.md" }],
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
