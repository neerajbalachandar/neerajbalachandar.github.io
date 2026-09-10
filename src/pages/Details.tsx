import { A, PageHeader, Prose, SubHead } from "../components/UI";
import { getPublication } from "../data/publications";
import { getCourse } from "../data/courses";
import { getNews, getPost } from "../data/blog";
import { getProject } from "../data/projects";
import NotFound from "./NotFound";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import { Link as RouterLink } from "../lib/router";

function slugify(title: string) {
  return encodeURIComponent(
    title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
  );
}

export function PublicationPage({ slug }: { slug: string }) {
  const p = getPublication(slug);
  if (!p) return <NotFound what="publication" />;
  const proj = p.project ? getProject(p.project) : undefined;
  return (
    <main className="mx-auto max-w-6xl px-6 pb-24">
      <PageHeader
        eyebrow={p.type}
        title={p.title}
        meta={
          <>
            {p.authors}
            <br />
            <span className="italic">{p.venue}</span>
          </>
        }
        backTo="/"
        backLabel="Home"
      />
      <section className="mt-8">
        <SubHead>Abstract</SubHead>
        <Prose paragraphs={[p.abstract]} />
      </section>
      <section className="mt-8">
        <SubHead>Resources</SubHead>
        <ul className="space-y-1 text-[1.02rem]">
          {p.pdf ? (
            <li>
              <A href={p.pdf}>Full text (PDF)</A>
            </li>
          ) : null}
          {p.bibtex ? (
            <li>
              <A href={p.bibtex}>BibTeX citation</A>
            </li>
          ) : null}
          {p.doi ? (
            <li>
              <A href={p.doi}>DOI</A>
            </li>
          ) : null}
          {p.github ? (
            <li>
              <A href={p.github}>Code repository (GitHub)</A>
            </li>
          ) : null}
          {proj ? (
            <li>
              <A href={`/project/${proj.slug}`}>Project: {proj.short}</A>
            </li>
          ) : null}
          {!p.pdf && !p.bibtex && !p.doi && !p.github && !proj ? (
            <li className="text-muted">Files will be linked here once available.</li>
          ) : null}
        </ul>
      </section>
    </main>
  );
}

export function CoursePage({ slug }: { slug: string }) {
  const c = getCourse(slug);
  if (!c) return <NotFound what="course" />;
  return (
    <main className="mx-auto max-w-6xl px-6 pb-24">
      <PageHeader eyebrow="Course" title={c.title} meta={c.institution} backTo="/" backLabel="Home" />
      <section className="mt-8">
        <SubHead>What the course covered</SubHead>
        <Prose paragraphs={[c.summary]} />
      </section>
      <section className="mt-8">
        <SubHead>Topics</SubHead>
        <ul className="list-disc space-y-1 pl-5 text-[1.02rem] leading-relaxed">
          {c.topics.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </section>
      <section className="mt-8">
        <SubHead>Notes & code</SubHead>
        {c.resources.length > 0 ? (
          <ul className="space-y-1 text-[1.02rem]">
            {c.resources.map((r) => (
              <li key={r.label}>
                <span className="mr-2 font-sans text-[0.7rem] uppercase tracking-wide text-muted">
                  {r.kind}
                </span>
                <A href={r.url}>{r.label}</A>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-[1rem] text-muted">
            Attach files by adding entries to the <code>resources</code> array for this course in{" "}
            <code>src/data/courses.ts</code>.
          </p>
        )}
      </section>
    </main>
  );
}

export function PostPage({ slug }: { slug: string }) {
  const p = getPost(slug);
  if (!p) return <NotFound what="post" />;
  const [md, setMd] = useState<string | null>(null);

  useEffect(() => {
    const att = p.attachments && p.attachments[0];
    if (att && /\.md$/i.test(att.url)) {
      fetch(att.url)
        .then((r) => r.text())
        .then((t) => {
          // convert wiki-style [[Title]] to internal markdown links pointing to hash routes
          const converted = t.replace(/\[\[([^\]]+)\]\]/g, (_m, title) => {
            const slug = slugify(title);
            return `[${title}](#/blog/${slug})`;
          });
          setMd(converted);
        })
        .catch(() => setMd(null));
    }
  }, [p]);
  return (
    <main className="mx-auto max-w-6xl px-6 pb-24">
      <PageHeader eyebrow={p.category} title={p.title} meta={p.date} backTo="/" backLabel="Home" />
      <section className="mt-8">
        {md ? (
          <div className="prose max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm, remarkMath]}
              rehypePlugins={[rehypeKatex]}
              components={{
                a: ({ href, children, ...props }: any) => {
                  if (!href) return <a {...props}>{children}</a>;
                  // internal hash route links (#/blog/slug)
                  if (href.startsWith("#/blog/")) {
                    // convert to router `to` prop by stripping leading '#'
                    const to = href.replace(/^#/, "");
                    return (
                      <RouterLink to={to} className="text-accent font-semibold underline">
                        {children}
                      </RouterLink>
                    );
                  }
                  // external or other links
                  return (
                    <a href={href} {...props} target={/^https?:\/\//.test(href) ? "_blank" : undefined} rel="noreferrer" className="text-accent/90">
                      {children}
                    </a>
                  );
                },
              }}
            >
              {md}
            </ReactMarkdown>
          </div>
        ) : (
          <Prose paragraphs={p.body} />
        )}
      </section>
      {/* Attachments removed per request */}
    </main>
  );
}

export function NewsPage({ slug }: { slug: string }) {
  const n = getNews(slug);
  if (!n) return <NotFound what="news item" />;
  return (
    <main className="mx-auto max-w-6xl px-6 pb-24">
      <PageHeader eyebrow="News" title={n.title} meta={n.date} backTo="/" backLabel="Home" />
      <section className="mt-8">
        <Prose paragraphs={n.body} />
      </section>
      {n.link && (
        <p className="mt-6 text-[1.02rem]">
          <A href={n.link.url}>{n.link.label}</A>
        </p>
      )}
    </main>
  );
}
