import { goToSection, Link } from "../lib/router";
import { useDarkMode } from "../lib/theme";
import { profile } from "../data/site";

const sections = [
  { id: "about", label: "About" },
  { id: "publications", label: "Publications" },
  { id: "research", label: "Research" },
  { id: "courses", label: "Courses" },
  { id: "experience", label: "Experience" },
  { id: "news", label: "News" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const { dark, toggle } = useDarkMode();

  return (
    <header className="sticky top-0 z-30 border-b border-rule bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-3xl flex-wrap items-center gap-x-5 gap-y-2 px-6 py-3">
        <Link to="/" className="font-serif text-[0.95rem] tracking-wide">
          {profile.name}
        </Link>
        <nav className="flex flex-1 flex-wrap gap-x-4 gap-y-1 font-sans text-[0.74rem]">
          {sections.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => goToSection(s.id)}
              className="text-muted transition-colors hover:text-accent"
            >
              {s.label}
            </button>
          ))}
        </nav>
        <button
          type="button"
          onClick={toggle}
          aria-label="Toggle dark mode"
          title={dark ? "Switch to light mode" : "Switch to dark mode"}
          className="rounded-sm border border-rule px-2 py-0.5 font-sans text-[0.7rem] text-muted transition-colors hover:border-accent hover:text-accent"
        >
          {dark ? "☀ Light" : "☾ Dark"}
        </button>
      </div>
    </header>
  );
}
