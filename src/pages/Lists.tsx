import { A, Chip, PageHeader, SubHead } from "../components/UI";
import { Cover } from "../components/Media";
import { Link } from "../lib/router";
import {
  ongoingProjects,
  pastProjects,
  projectsByTheme,
  THEMES,
  type Project,
  type ThemeKey,
} from "../data/projects";
import {
  conferencePublications,
  journalPublications,
  thesisPublications,
} from "../data/publications";
import { courses } from "../data/courses";
import { posts } from "../data/blog";
import { courseNotesLinks } from "../data/site";
import { courseNotesPassword } from "../data/site";
import NotFound from "./NotFound";

function ProjectCard({ p }: { p: Project }) {
  return (
    <li className="flex gap-4">
      <Link to={`/project/${p.slug}`}>
        <Cover src={p.cover} video={p.video} alt={p.title} seed={p.slug} />
      </Link>
      <div className="min-w-0">
        <h3 className="text-[1.03rem] leading-snug">
          <A href={`/project/${p.slug}`}>{p.title}</A>
        </h3>
        <p className="mt-1 text-[0.97rem] leading-relaxed text-muted">{p.summary}</p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {p.themes.map((t) => (
            <Chip key={t} to={`/theme/${t}`}>
              {THEMES[t]}
            </Chip>
          ))}
        </div>
      </div>
    </li>
  );
}

export function ProjectsIndex() {
  return (
    <main className="mx-auto max-w-6xl px-6 pb-24">
      <PageHeader title="Research Projects" meta="Ongoing and past work, grouped by theme." />
      <div className="mt-6 flex flex-wrap gap-1.5">
        {(Object.keys(THEMES) as ThemeKey[]).map((k) => (
          <Chip key={k} to={`/theme/${k}`}>
            {THEMES[k]}
          </Chip>
        ))}
      </div>
      <section className="mt-10">
        <SubHead>Ongoing</SubHead>
        <ul className="grid gap-6 lg:grid-cols-2">
          {ongoingProjects.map((p) => (
            <ProjectCard key={p.slug} p={p} />
          ))}
        </ul>
      </section>
      <section className="mt-10">
        <SubHead>Past</SubHead>
        <ul className="grid gap-6 lg:grid-cols-2">
          {pastProjects.map((p) => (
            <ProjectCard key={p.slug} p={p} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export function ThemePage({ slug }: { slug: string }) {
  const key = slug as ThemeKey;
  if (!(key in THEMES)) return <NotFound what="theme" />;
  const items = projectsByTheme(key);
  return (
    <main className="mx-auto max-w-6xl px-6 pb-24">
      <PageHeader
        eyebrow="Research theme"
        title={THEMES[key]}
        meta={`${items.length} project${items.length === 1 ? "" : "s"}`}
        backTo="/projects"
        backLabel="All projects"
      />
      <ul className="mt-8 space-y-6">
        {items.map((p) => (
          <ProjectCard key={p.slug} p={p} />
        ))}
      </ul>
      <div className="mt-10 flex flex-wrap gap-1.5">
        {(Object.keys(THEMES) as ThemeKey[])
          .filter((k) => k !== key)
          .map((k) => (
            <Chip key={k} to={`/theme/${k}`}>
              {THEMES[k]}
            </Chip>
          ))}
      </div>
    </main>
  );
}

export function PublicationsIndex() {
  return (
    <main className="mx-auto max-w-6xl px-6 pb-24">
      <PageHeader title="Research Contributions" meta="Journal, conference and thesis contributions." />
      {[
        { label: "Journal Publications", items: journalPublications },
        { label: "Conferences", items: conferencePublications },
        { label: "Thesis", items: thesisPublications },
      ].map((grp) =>
        grp.items.length ? (
          <section key={grp.label} className="mt-10">
            <SubHead>{grp.label}</SubHead>
            <ul className="space-y-5">
              {grp.items.map((p) => (
                <li key={p.slug}>
                  <p className="text-[1.03rem] leading-snug">
                    <A href={`/publication/${p.slug}`}>{p.title}</A>
                  </p>
                  <p className="mt-1 text-[0.95rem] text-muted">{p.authors}</p>
                  <p className="text-[0.9rem] italic text-muted">{p.venue}</p>
                </li>
              ))}
            </ul>
          </section>
        ) : null
      )}
    </main>
  );
}

export function CoursesIndex() {
  const openProtected = (e: any, url: string) => {
    e.preventDefault();
    const pw = window.prompt("Enter password to access course notes:");
    if (pw === courseNotesPassword) {
      window.open(url, "_blank");
    } else if (pw !== null) {
      window.alert("Incorrect password");
    }
  };

  return (
    <main className="mx-auto max-w-6xl px-6 pb-24">
      <PageHeader
        title="Courses"
        meta="Course summaries with attached notes, code and reports."
      />
      <ul className="mt-8 space-y-6">
            {courses.map((c) => (
          <li key={c.slug}>
            <h3 className="text-[1.05rem] leading-snug">
              <a
                href={`/course/${c.slug}`}
                onClick={(e) => openProtected(e, `/course/${c.slug}`)}
                className="border-b border-rule pb-px transition-colors hover:border-accent hover:text-accent"
              >
                {c.title}
              </a>
              <span className="ml-2 font-sans text-xs text-muted">
                {c.term} · {c.institution}
              </span>
            </h3>
            <p className="mt-1 text-[0.97rem] leading-relaxed text-muted">{c.summary}</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {c.resources.map((r) => (
                <span
                  key={r.label}
                  className="rounded-full border border-rule bg-panel px-2.5 py-0.5 font-sans text-[0.68rem] text-muted"
                >
                  {r.kind}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

export function BlogIndex() {
  const openProtected = (e: any, url: string) => {
    e.preventDefault();
    const pw = window.prompt("Enter password to access course notes:");
    if (pw === courseNotesPassword) {
      window.location.href = url;
    } else if (pw !== null) {
      window.alert("Incorrect password");
    }
  };

  return (
    <main className="mx-auto max-w-6xl px-6 pb-24">
      <PageHeader title="Blogs" meta="Small blogs and course notes." />
      {/* Course notes blocks */}
      <SubHead>Course Notes</SubHead>
      <div className="custom-blocks">
        {courseNotesLinks.map((c) => (
          <div
            key={c.slug}
            className="block-item"
            onClick={(e) => openProtected(e, c.url)}
            role="button"
          >
            <div className="text-[1.02rem] font-semibold">{c.title}</div>
            <div className="mt-2">
              <span className="block-tag tag-course">Course notes</span>
            </div>
          </div>
        ))}
      </div>

      {/* Blog blocks */}
      <SubHead className="mt-8">Blogs</SubHead>
      <div className="custom-blocks">
        {posts
          .filter((b) => b.category === "Blog")
          .map((b) => {
            return (
              <div key={b.slug} className="block-item">
                <A href={`/blog/${b.slug}`}>
                  <div className="text-[1.02rem] font-semibold">{b.title}</div>
                  <div className="mt-2">
                    <span className="block-tag tag-blog">Blog</span>
                  </div>
                </A>
              </div>
            );
          })}
      </div>
    </main>
  );
}
