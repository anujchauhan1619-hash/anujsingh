import { useCallback, useEffect, useState } from "react";

export type Theme = "dark" | "light";

/**
 * Reads/toggles the active theme. Dark is the default; `.light` on <html> opts
 * into light mode. The actual class is applied pre-hydration by the inline
 * no-flash script in __root.tsx, so this hook only mirrors + mutates it.
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>("dark");
  // Guards against hydration mismatch: the server can't know the stored theme,
  // so the icon stays neutral until we've read the real value on the client.
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTheme(document.documentElement.classList.contains("light") ? "light" : "dark");
  }, []);

  const toggle = useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      document.documentElement.classList.toggle("light", next === "light");
      try {
        localStorage.setItem("theme", next);
      } catch {
        // Ignore storage failures (private mode, blocked cookies, etc.)
      }
      return next;
    });
  }, []);

  return { theme, toggle, mounted };
}
