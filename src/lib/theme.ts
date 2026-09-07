import { useEffect, useState } from "react";

const KEY = "nb-theme";

function readStoredTheme() {
  try {
    return localStorage.getItem(KEY);
  } catch {
    return null;
  }
}

export function useDarkMode() {
  const [dark, setDark] = useState<boolean>(() => {
    // Remember a visitor's manual choice, but always default to light mode.
    const saved = readStoredTheme();
    return saved === "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    try {
      localStorage.setItem(KEY, dark ? "dark" : "light");
    } catch {
      // Ignore storage failures so the page can still render normally.
    }
  }, [dark]);

  return { dark, toggle: () => setDark((d) => !d) };
}
