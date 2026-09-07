import { A, Chip, PageHeader, SubHead } from "../components/UI";
import { Cover } from "../components/Media";
import { getProject, THEMES } from "../data/projects";
import { publicationsForProject } from "../data/publications";
import NotFound from "./NotFound";

export default function ProjectPage({ slug }: { slug: string }) {
  const p = getProject(slug);
  if (!p) return <NotFound what="project" />;
  const pubs = publicationsForProject(p.slug);

  return (
    <main className="mx-auto max-w-3xl px-6 pb-24">
      <PageHeader
        eyebrow={p.status === "ongoing" ? "Ongoing project" : "Past project"}
        title={p.title}
        meta={p.period}
        backTo="/projects"
        backLabel="All projects"
      />

      <div className="mt-8 flex flex-col gap-6 sm:flex-row">
        <Cover
          src={p.cover}
          video={p.video}
          alt={p.title}
          seed={p.slug}
          className="h-40 w-full sm:h-36 sm:w-56"
        />
        <div>
          <p className="text-[1.05rem] leading-relaxed">{p.summary}</p>
          {p.advisors && p.advisors.length > 0 && (
            <p className="mt-2 font-sans text-sm text-muted">
              Advisors: {p.advisors.map((a) => a.name).join(", ")}
            </p>
          )}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {p.themes.map((t) => (
              <Chip key={t} to={`/theme/${t}`}>
                {THEMES[t]}
              </Chip>
            ))}
          </div>
        </div>
      </div>

      {p.highlights && p.highlights.length > 0 && (
        <section className="mt-10">
          <SubHead>Key contributions</SubHead>
          <ul className="list-disc space-y-2 pl-5 text-[1.02rem] leading-relaxed">
            {p.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </section>
      )}

      <section className="mt-10">
        <SubHead>Figures</SubHead>
        {p.gallery && p.gallery.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2">
            {p.gallery.map((g) => (
              <figure key={g.src}>
                <Cover src={g.src} alt={g.caption} seed={g.src} className="h-44 w-full" />
                <figcaption className="mt-1 font-sans text-xs text-muted">{g.caption}</figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <p className="text-[1rem] text-muted">
            Figures for this project will be added here. Place images in{" "}
            <code className="font-sans text-[0.85rem]">public/images/projects/</code> and list them
            in the <code className="font-sans text-[0.85rem]">gallery</code> field of{" "}
            <code className="font-sans text-[0.85rem]">src/data/projects.ts</code>.
          </p>
        )}
      </section>

      {pubs.length > 0 && (
        <section className="mt-10">
          <SubHead>Related publications</SubHead>
          <ul className="space-y-2">
            {pubs.map((pub) => (
              <li key={pub.slug} className="text-[1.02rem] leading-snug">
                <A href={`/publication/${pub.slug}`}>{pub.title}</A>
                <span className="block text-[0.93rem] text-muted">
                  {pub.venue}, {pub.year}
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {p.links && p.links.length > 0 && (
        <section className="mt-10">
          <SubHead>Links</SubHead>
          <ul className="space-y-1 text-[1.02rem]">
            {p.links.map((l) => (
              <li key={l.url}>
                <A href={l.url}>{l.label}</A>
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}
