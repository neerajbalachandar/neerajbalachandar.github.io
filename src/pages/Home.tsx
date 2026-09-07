import { useState } from "react";
import { A, Chip, Section, SubHead } from "../components/UI";
import { Cover, Portrait } from "../components/Media";
import { Link } from "../lib/router";
import {
  awards,
  coursework,
  education,
  extracurriculars,
  interests,
  profile,
  skills,
  work,
} from "../data/site";
import { publications } from "../data/publications";
import {
  ongoingProjects,
  pastProjects,
  THEMES,
  type Project,
  type ThemeKey,
} from "../data/projects";
import { courses } from "../data/courses";
import { news, posts } from "../data/blog";

function ProjectRow({ p }: { p: Project }) {
  return (
    <li className="flex gap-4">
      <Link to={`/project/${p.slug}`}>
        <Cover src={p.cover} video={p.video} alt={p.title} seed={p.slug} />
      </Link>
      <div className="min-w-0">
        <h4 className="text-[1.03rem] leading-snug">
          <A href={`/project/${p.slug}`}>{p.title}</A>
        </h4>
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

export default function Home() {
  const [filter, setFilter] = useState<ThemeKey | "all">("all");
  const match = (p: Project) => filter === "all" || p.themes.includes(filter);
  const ongoing = ongoingProjects.filter(match);
  const past = pastProjects.filter(match);

  return (
    <main className="mx-auto max-w-3xl px-6 pb-24">
      {/* Header */}
      <section className="flex flex-col gap-6 py-12 sm:flex-row sm:items-start">
        <Portrait src={profile.photo} fallback={profile.photoFallback} alt={profile.name} />
        <div>
          <h1 className="text-3xl leading-tight tracking-tight sm:text-4xl">{profile.name}</h1>
          <p className="mt-2 font-sans text-sm text-muted">
            {profile.role} · {profile.affiliation}
          </p>
          <p className="mt-3 font-sans text-sm">
            {profile.links.map((l, i) => (
              <span key={l.label}>
                {i > 0 && <span className="px-2 text-rule">|</span>}
                <a
                  href={l.url}
                  target={l.url.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="text-muted transition-colors hover:text-accent"
                >
                  {l.label}
                </a>
              </span>
            ))}
            <span className="px-2 text-rule">|</span>
            <a href={profile.cv} className="text-accent hover:underline">
              Curriculum Vitae (PDF)
            </a>
          </p>
        </div>
      </section>

      {/* About */}
      <Section id="about" title="About">
        <div className="space-y-3 text-[1.05rem] leading-relaxed">
          {profile.bio.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          <div>
            <SubHead>Research Interests</SubHead>
            <ul className="space-y-1 text-[1rem]">
              {interests.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
          <div>
            <SubHead>Education</SubHead>
            <ul className="space-y-2">
              {education.map((e) => (
                <li key={e.area}>
                  <div className="text-[1rem] leading-snug">{e.area}</div>
                  <div className="text-[0.95rem] text-muted">
                    {e.institution} · {e.location}
                  </div>
                  <div className="font-sans text-xs text-muted">
                    {e.date} · {e.detail}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <SubHead>Relevant Coursework</SubHead>
          <ul className="space-y-1.5">
            {coursework.map((c) => (
              <li key={c.group} className="text-[1rem] leading-snug">
                <span className="font-semibold">{c.group}:</span>{" "}
                <span className="text-muted">{c.items.join(", ")}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Publications */}
      <Section
        id="publications"
        title="Publications & Preprints"
        action={
          <Link to="/publications" className="hover:text-accent">
            All publications →
          </Link>
        }
      >
        <ol className="space-y-5">
          {publications.map((p, idx) => (
            <li key={p.slug} className="grid grid-cols-[1.75rem_1fr] gap-x-2">
              <span className="pt-1 font-sans text-xs text-muted">
                [{publications.length - idx}]
              </span>
              <div>
                <p className="text-[1.03rem] leading-snug">
                  <A href={`/publication/${p.slug}`}>{p.title}</A>
                </p>
                <p className="mt-1 text-[0.95rem] text-muted">{p.authors}</p>
                <p className="text-[0.9rem] italic text-muted">{p.venue}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* Research */}
      <Section
        id="research"
        title="Research Projects"
        action={
          <Link to="/projects" className="hover:text-accent">
            All projects →
          </Link>
        }
      >
        <div className="mb-6 flex flex-wrap gap-1.5">
          <Chip active={filter === "all"} onClick={() => setFilter("all")}>
            All
          </Chip>
          {(Object.keys(THEMES) as ThemeKey[]).map((k) => (
            <Chip key={k} active={filter === k} onClick={() => setFilter(k)}>
              {THEMES[k]}
            </Chip>
          ))}
        </div>

        {ongoing.length > 0 && (
          <>
            <SubHead>Ongoing</SubHead>
            <ul className="space-y-6">
              {ongoing.map((p) => (
                <ProjectRow key={p.slug} p={p} />
              ))}
            </ul>
          </>
        )}

        {past.length > 0 && (
          <>
            <div className="mt-10">
              <SubHead>Past</SubHead>
            </div>
            <ul className="space-y-6">
              {past.map((p) => (
                <ProjectRow key={p.slug} p={p} />
              ))}
            </ul>
          </>
        )}

        {ongoing.length === 0 && past.length === 0 && (
          <p className="text-[1rem] text-muted">No projects under this theme yet.</p>
        )}
      </Section>

      {/* Courses & Blogs */}
      <Section
        id="courses"
        title="Courses & Blogs"
        action={
          <>
            <Link to="/courses" className="hover:text-accent">
              All courses →
            </Link>
            <span className="px-2 text-rule">|</span>
            <Link to="/blog" className="hover:text-accent">
              All blogs →
            </Link>
          </>
        }
      >
        <p className="mb-5 text-[1.02rem] leading-relaxed text-muted">
          Course summaries with attached notes and code, together with research and course-note
          blog entries.
        </p>
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <SubHead>Courses</SubHead>
            <ul className="space-y-2">
              {courses.slice(0, 5).map((c) => (
                <li key={c.slug} className="text-[1rem] leading-snug">
                  <A href={`/course/${c.slug}`}>{c.title}</A>
                  <span className="ml-2 font-sans text-xs text-muted">{c.term}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SubHead>Blog & Notes</SubHead>
            <ul className="space-y-2">
              {posts.map((b) => (
                <li key={b.slug} className="text-[1rem] leading-snug">
                  <A href={`/blog/${b.slug}`}>{b.title}</A>
                  <span className="ml-2 font-sans text-xs text-muted">{b.category}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" title="Experience">
        <ul className="space-y-6">
          {work.map((w) => (
            <li key={w.position + w.org} className="grid gap-x-6 sm:grid-cols-[9.5rem_1fr]">
              <div className="font-sans text-xs text-muted sm:pt-1">
                {w.date}
                <div className="mt-0.5">{w.location}</div>
              </div>
              <div>
                <div className="text-[1.03rem] leading-snug">{w.position}</div>
                <div className="text-[0.95rem] text-muted">{w.org}</div>
                {w.supervisor && (
                  <div className="font-sans text-xs text-muted">
                    Supervised by {w.supervisor.name}
                  </div>
                )}
                {w.notes.length > 0 && (
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-[0.97rem] leading-relaxed text-muted">
                    {w.notes.map((n) => (
                      <li key={n}>{n}</li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <SubHead>Technical Skills</SubHead>
        </div>
        <ul className="space-y-2">
          {skills.map((s) => (
            <li key={s.group} className="grid gap-x-6 sm:grid-cols-[9.5rem_1fr]">
              <div className="font-sans text-xs text-muted sm:pt-1">{s.group}</div>
              <div className="text-[1rem]">{s.items.join(" · ")}</div>
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <SubHead>Awards & Honours</SubHead>
        </div>
        <ul className="space-y-3">
          {awards.map((a) => (
            <li key={a.title}>
              <div className="text-[1.03rem] leading-snug">
                {a.url ? <A href={a.url}>{a.title}</A> : a.title}
              </div>
              <div className="text-[0.95rem] text-muted">{a.awarder}</div>
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <SubHead>Extracurricular Activities</SubHead>
        </div>
        <ul className="list-disc space-y-1 pl-5 text-[1rem] leading-relaxed">
          {extracurriculars.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ul>
      </Section>

      {/* News */}
      <Section id="news" title="Recent Activity">
        <ul className="space-y-4">
          {news.map((n) => (
            <li key={n.slug} className="grid gap-x-6 sm:grid-cols-[9.5rem_1fr]">
              <div className="font-sans text-xs text-muted sm:pt-1">{n.date}</div>
              <div>
                <div className="text-[1.03rem] leading-snug">
                  <A href={`/news/${n.slug}`}>{n.title}</A>
                </div>
                <p className="text-[0.95rem] text-muted">{n.summary}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact">
        <p className="text-[1.05rem] leading-relaxed">
          I am happy to discuss research collaborations and doctoral opportunities. The most
          reliable way to reach me is by email at{" "}
          <A href={`mailto:${profile.email}`}>{profile.email}</A>.
        </p>
        <p className="mt-2 text-[1rem] text-muted">{profile.address}</p>
      </Section>
    </main>
  );
}
