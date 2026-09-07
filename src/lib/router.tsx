import { useEffect, useState } from "react";

/**
 * Minimal hash router. Hash URLs keep the site working on GitHub Pages
 * without any server rewrite rules. Routes look like:
 *   #/                      home (continuous scroll)
 *   #/project/flowunsteady  project detail
 *   #/courses               course index
 */
export function currentPath(): string {
  const h = window.location.hash.replace(/^#/, "");
  if (!h || h === "/") return "/";
  return h.startsWith("/") ? h : "/" + h;
}

export function useRoute(): string {
  const [path, setPath] = useState(currentPath());
  useEffect(() => {
    const onChange = () => setPath(currentPath());
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);
  return path;
}

export function navigate(path: string) {
  const target = path.startsWith("/") ? path : "/" + path;
  if (currentPath() === target) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  window.location.hash = "#" + target;
  window.scrollTo({ top: 0 });
}

/** Navigate home (if needed) then scroll to a section id. */
export function goToSection(id: string) {
  const scroll = () => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  if (currentPath() !== "/") {
    window.location.hash = "#/";
    window.setTimeout(scroll, 60);
  } else {
    scroll();
  }
}

/** Internal link that respects the hash router. */
export function Link({
  to,
  className,
  children,
}: {
  to: string;
  className?: string;
  children: React.ReactNode;
}) {
  const external = /^(https?:|mailto:)/.test(to);
  if (external) {
    return (
      <a href={to} target="_blank" rel="noreferrer" className={className}>
        {children}
      </a>
    );
  }
  return (
    <a
      href={"#" + (to.startsWith("/") ? to : "/" + to)}
      className={className}
      onClick={() => window.scrollTo({ top: 0 })}
    >
      {children}
    </a>
  );
}
