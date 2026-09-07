import { Link } from "../lib/router";

export default function NotFound({ what = "page" }: { what?: string }) {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="text-2xl">This {what} does not exist yet</h1>
      <p className="mt-3 text-[1.05rem] leading-relaxed text-muted">
        The entry you followed has not been written yet, or the address is mistyped. Nothing is
        lost — use the links below to continue.
      </p>
      <p className="mt-6 flex flex-wrap gap-x-4 gap-y-2 font-sans text-sm">
        <Link to="/" className="text-accent hover:underline">
          Home
        </Link>
        <Link to="/projects" className="text-accent hover:underline">
          Projects
        </Link>
        <Link to="/publications" className="text-accent hover:underline">
          Publications
        </Link>
        <Link to="/courses" className="text-accent hover:underline">
          Courses
        </Link>
        <Link to="/blog" className="text-accent hover:underline">
          Blog
        </Link>
      </p>
    </main>
  );
}
