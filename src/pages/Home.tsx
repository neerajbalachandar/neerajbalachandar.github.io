import { useState } from "react";
import { A, Chip, Section, SubHead } from "../components/UI";
import { Cover, Portrait } from "../components/Media";
import { Link } from "../lib/router";
import { awards, education, interests, profile, work, courseNotesPassword } from "../data/site";
import { publications } from "../data/publications";
import {
  ongoingProjects,
  pastProjects,
  THEMES,
  type Project,
  type ThemeKey,
} from "../data/projects";
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

  const openProtected = (e: any, url: string, slug?: string) => {
    e.preventDefault();
    const pw = window.prompt("Enter password to access course notes:");
    if (pw === courseNotesPassword) {
      if (url) window.open(url, "_blank");
      else if (slug) window.location.href = `/blog/${slug}`;
    } else if (pw !== null) {
      window.alert("Incorrect password");
    }
  };

  // Optional small caption shown below the main text. Set to empty string to hide.
  const videoCaption = "Distributed formation control on an Erdos-Renyi graph, G(20, 0.25)";

  return (
    <main className="mx-auto max-w-6xl px-6 pb-24">
      {/* Header: photo at left, text center, looping video at right */}
      <section className="flex flex-col gap-6 pt-10 pb-8 sm:flex-row sm:items-start">
        <Portrait
          src={profile.photo}
          fallback={profile.photoFallback}
          alt={profile.name}
          className="h-44 w-44 sm:h-56 sm:w-56 shrink-0 rounded-sm border border-rule object-cover"
        />
        <div className="min-w-0 flex-1">
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

          {/* Education placed beside portrait to fill space */}
          {education && education[0] && (
            <div className="mt-4 text-[0.95rem] text-muted">
              <div className="font-semibold">{education[0].institution}</div>
              <div className="text-sm">{education[0].area}</div>
            </div>
          )}
        </div>

        <div className="shrink-0">
          <div className="h-44 w-44 sm:h-56 sm:w-56 overflow-hidden rounded-sm border border-rule bg-panel">
            <video
              src="/videos/neeraj_fixed.mp4"
              muted
              loop
              autoPlay
              playsInline
              className="h-full w-full object-cover"
            />
          </div>
          {videoCaption && <p className="mt-2 max-w-[11rem] text-[0.65rem] leading-relaxed text-muted">{videoCaption}</p>}
        </div>
      </section>

      {/* About */}
      <Section id="about" title="About">
        <div className="space-y-3 text-[1.05rem] leading-relaxed">
          {profile.bio.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="mt-6 grid gap-8 lg:grid-cols-2">
          <div>
            <SubHead>Research Interests</SubHead>
            <ul className="space-y-1 text-[1rem]">
              {interests.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
          <div>
            <SubHead>
              <Link to="/blog" className="hover:text-accent">
                Blogs
              </Link>
            </SubHead>
            <ul className="space-y-2">
              {posts
                .filter((b) => b.category === "Blog")
                .slice(0, 2)
                .map((b) => (
                  <li key={b.slug} className="text-[1rem] leading-snug">
                    <A href={`/blog/${b.slug}`}>{b.title}</A>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Publications */}

      {/* Recent Publications (show two) */}
      <Section
        id="publications"
        title="Recent Publications"
        titleHref="/publications"
        action={
          <Link to="/publications" className="hover:text-accent">
            All publications →
          </Link>
        }
      >
        <ol className="space-y-5">
          {[
            "varfiexi-journal", // Aeroelastic solver
            "docking-aim", // NMPC-SCP docking
          ]
            .map((slug) => publications.find((p) => p.slug === slug))
            .filter(Boolean)
            .map((p, idx) => {
              const ext = p!.doi || p!.pdf || p!.github;
              const href = ext ? ext : p!.project ? `/project/${p!.project}` : `/publication/${p!.slug}`;
              const isExternal = !!ext && /https?:\/\//.test(ext as string);
              return (
                <li key={p!.slug} className="grid grid-cols-[1fr] gap-x-2">
                  <div>
                    <p className="text-[1.03rem] leading-snug">
                      {isExternal ? (
                        <a href={href} target="_blank" rel="noreferrer" className="border-b border-rule pb-px hover:text-accent">
                          {p!.title}
                        </a>
                      ) : (
                        <A href={href}>{p!.title}</A>
                      )}
                    </p>
                    <p className="mt-1 text-[0.95rem] text-muted">{p!.authors}</p>
                    <p className="text-[0.9rem] italic text-muted">{p!.venue}</p>
                    {p!.project && (
                      <div className="mt-1">
                        <A href={`/project/${p!.project}`}>Project →</A>
                      </div>
                    )}
                  </div>
                </li>
              );
            })}
        </ol>
      </Section>

      {/* Research */}
      <Section
        id="research"
        title="Research Projects"
        titleHref="/projects"
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

      {/* Blogs moved into About section (removed duplicate here) */}

      {/* Recent Activity (moved up to be above Experience) */}
      <Section id="news" title="Recent Activity">
        <ul className="space-y-4">
          {news.map((n) => {
            const isArxiv = /arxiv/i.test((n.title + n.summary).toLowerCase());
            return (
              <li
                key={n.slug}
                className="grid gap-x-6 sm:grid-cols-[9.5rem_1fr] border-l-2 pl-4"
              >
                <div className="font-sans text-xs text-muted sm:pt-1">{n.date}</div>
                <div>
                  <div className="flex items-center gap-3">
                    <div className="text-[1.03rem] leading-snug">
                      <A href={`/news/${n.slug}`}>{n.title}</A>
                    </div>
                    {isArxiv && (
                      <span className="rounded-full bg-accent/10 px-2 py-0.5 text-xs text-accent">
                        arXiv
                      </span>
                    )}
                  </div>
                  <p className="text-[0.95rem] text-muted">{n.summary}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </Section>

      {/* Experience + Awards side-by-side */}
      <Section id="experience" title="Experience">
        <div className="grid gap-8 lg:grid-cols-2 items-start">
          <div>
            <ul className="space-y-6">
              {work.map((w) => (
                <li key={w.position + w.org} className="grid gap-x-6 sm:grid-cols-[9.5rem_1fr]">
                  <div className="font-sans text-xs text-muted">
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
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="self-start">
            <SubHead>Awards</SubHead>
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
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact">
        <p className="text-[1.05rem] leading-relaxed">
          I am always open to discussing scientific inquiries. You can reach me at{" "}
          <A href={`mailto:${profile.email}`}>{profile.email}</A>.
        </p>
        <p className="mt-2 text-[1rem] text-muted">{profile.address}</p>
      </Section>
    </main>
  );
}