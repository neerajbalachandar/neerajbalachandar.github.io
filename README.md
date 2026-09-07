# Academic Website — Neeraj Balachandar

A compact, formal academic site. The **home page is a single continuous scroll**; every link on it
opens a **static detail page** (project, publication, course, blog post, news item). Routing is
hash-based (`#/project/flowunsteady`), so it works on GitHub Pages with no server configuration and
never produces a blank screen — unknown addresses fall back to a friendly "not found" page with
links back into the site.

---

## Folder structure

```
index.html                     page <title>, meta description, fonts
public/
  images/
    portrait.jpg               ← DROP YOUR PHOTO HERE (falls back to your old avatar, then "NB")
    projects/*.jpg             cover images for research projects
  videos/                      optional .mp4/.webm project covers
  uploads/
    resume.pdf                 ← your CV
    courses/*.pdf              course notes
    publications/*.pdf|.bib    papers and citations
    notes/*.pdf                blog attachments
src/
  main.tsx                     entry
  index.css                    colour tokens (light + dark), fonts
  App.tsx                      router table + footer
  lib/
    router.tsx                 tiny hash router (Link, navigate, goToSection)
    theme.ts                   dark-mode hook (remembers your choice)
  components/
    Nav.tsx                    sticky nav: all sections + dark-mode toggle
    UI.tsx                     Section, SubHead, Chip, A, PageHeader, Prose
    Media.tsx                  Cover (image/video + auto fallback), Portrait
  data/                        ►► ALL CONTENT LIVES HERE ◄◄
    site.ts                    name, photo, bio, interests, education, work, awards, skills
    projects.ts                research projects + THEMES (the tag verticals)
    publications.ts            papers and preprints
    courses.ts                 courses: summary, topics, notes/code attachments
    blog.ts                    blog posts + news items
  pages/
    Home.tsx                   the continuous-scroll page
    ProjectPage.tsx            #/project/<slug>
    Lists.tsx                  #/projects  #/theme/<key>  #/publications  #/courses  #/blog
    Details.tsx                #/publication/<slug>  #/course/<slug>  #/blog/<slug>  #/news/<slug>
    NotFound.tsx               safety net for any unknown address
```

You only ever need to touch `src/data/`. Adding an entry there automatically creates its
listing **and** its detail page.

---

## URL map

| Address | Page |
|---|---|
| `#/` | Home (About → Publications → Research → Courses & Blogs → Experience → News → Contact) |
| `#/projects` | All research projects |
| `#/project/<slug>` | One project: cover, overview, contributions, figures, related papers |
| `#/theme/<key>` | Every project in a theme, e.g. `#/theme/robotics` |
| `#/publications` · `#/publication/<slug>` | Publication list and per-paper page (abstract, PDF, BibTeX) |
| `#/courses` · `#/course/<slug>` | Course list and per-course page (summary, topics, notes, code) |
| `#/blog` · `#/blog/<slug>` | Blogs & notes index (also links every course and news item) and post pages |
| `#/news/<slug>` | News item page |

---

## How to update

**Add a project** — append an object to `projects` in `src/data/projects.ts`:

```ts
{
  slug: "my-project",                  // becomes #/project/my-project
  title: "...",
  short: "one-line label",
  summary: "one sentence for the list view",
  status: "ongoing",                   // or "past"
  period: "2026 – present",
  themes: ["sciml", "control"],        // keys from THEMES
  cover: "/images/projects/my.jpg",    // or  video: "/videos/my.mp4"
  body: ["paragraph one", "paragraph two"],
  highlights: ["bullet", "bullet"],
  gallery: [{ src: "/images/projects/fig1.jpg", caption: "Figure 1" }],
  links: [{ label: "Code", url: "https://github.com/..." }],
  publications: ["some-publication-slug"],
}
```

**Research themes (the tags)** — there are now only five verticals, defined once at the top of
`src/data/projects.ts`:

```ts
export const THEMES = {
  sciml: "Scientific Machine Learning",
  fsi: "Fluid–Structure Interaction",
  control: "Control & Optimisation",
  robotics: "Robotics & Autonomy",
  computing: "Scientific Computing",
};
```

Add, rename or delete a line here and every filter chip, theme page and project badge updates.
On the home page the chips filter in place; on a detail page they open `#/theme/<key>` listing all
projects in that vertical.

**Add a course** — append to `courses` in `src/data/courses.ts`. `resources` accepts
`kind: "Notes" | "Code" | "Slides" | "Report"`; point `url` at a file in `public/uploads/courses/`
or at a GitHub repository.

**Add a publication** — append to `publications` in `src/data/publications.ts`. Set `project` to a
project slug and the two pages cross-link automatically.

**Add a blog post or news item** — `src/data/blog.ts` (`posts` and `news`).

**Your photo** — save it as `public/images/portrait.jpg`. Until then the site uses the avatar from
your previous Hugo site, and if that is unavailable it shows a plain "NB" monogram, never a broken
image.

**Project covers** — any project without a `cover` or `video` renders a deterministic abstract
placeholder, so the layout never breaks.

**Dark mode** — the toggle sits at the top-right of the navigation bar. Colours are defined in the
`:root` and `.dark` blocks of `src/index.css`; change the two hex sets to retune the palette.

---

## Development

```bash
npm install
npm run dev      # local preview at http://localhost:5173
npm run build    # production build into dist/
```

To publish on GitHub Pages, build and serve the contents of `dist/` from the repository root or
from a `gh-pages` branch.
