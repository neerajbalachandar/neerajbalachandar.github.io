import { useEffect, useState } from "react";

const KEY = "nb-theme";

export function useDarkMode() {
  const [dark, setDark] = useState<boolean>(() => {
    // Remember a visitor's manual choice, but always default to light mode.
    const saved = localStorage.getItem(KEY);
    return saved === "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem(KEY, dark ? "dark" : "light");
  }, [dark]);

  return { dark, toggle: () => setDark((d) => !d) };
}
