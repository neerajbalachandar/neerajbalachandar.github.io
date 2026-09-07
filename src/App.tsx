import { useEffect } from "react";
import Nav from "./components/Nav";
import { Link, useRoute } from "./lib/router";
import { profile } from "./data/site";
import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";
import NotFound from "./pages/NotFound";
import {
  BlogIndex,
  CoursesIndex,
  ProjectsIndex,
  PublicationsIndex,
  ThemePage,
} from "./pages/Lists";
import { CoursePage, NewsPage, PostPage, PublicationPage } from "./pages/Details";

function render(path: string) {
  const parts = path.split("/").filter(Boolean);
  const [head, slug] = parts;

  switch (head) {
    case undefined:
      return <Home />;
    case "projects":
      return <ProjectsIndex />;
    case "project":
      return slug ? <ProjectPage slug={slug} /> : <ProjectsIndex />;
    case "theme":
      return slug ? <ThemePage slug={slug} /> : <ProjectsIndex />;
    case "publications":
      return <PublicationsIndex />;
    case "publication":
      return slug ? <PublicationPage slug={slug} /> : <PublicationsIndex />;
    case "courses":
      return <CoursesIndex />;
    case "course":
      return slug ? <CoursePage slug={slug} /> : <CoursesIndex />;
    case "blog":
      return slug ? <PostPage slug={slug} /> : <BlogIndex />;
    case "news":
      return slug ? <NewsPage slug={slug} /> : <BlogIndex />;
    default:
      return <NotFound />;
  }
}

export default function App() {
  const path = useRoute();

  useEffect(() => {
    if (!window.location.hash) window.location.replace("#/");
  }, []);

  return (
    <div className="min-h-screen bg-paper text-ink">
      <Nav />
      {render(path)}
      <footer className="mx-auto max-w-3xl border-t border-rule px-6 py-6 font-sans text-xs text-muted">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <Link to="/" className="hover:text-accent">
            Home
          </Link>
          <Link to="/publications" className="hover:text-accent">
            Publications
          </Link>
          <Link to="/projects" className="hover:text-accent">
            Projects
          </Link>
          <Link to="/courses" className="hover:text-accent">
            Courses
          </Link>
          <Link to="/blog" className="hover:text-accent">
            Blogs & Notes
          </Link>
          <a href={profile.cv} className="hover:text-accent">
            CV
          </a>
        </div>
      </footer>
    </div>
  );
}
