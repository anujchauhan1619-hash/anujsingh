import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

export function ThemeToggle() {
  const { theme, toggle, mounted } = useTheme();
  const isLight = mounted && theme === "light";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
      title={isLight ? "Switch to dark mode" : "Switch to light mode"}
      className="inline-flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground"
    >
      <Sun className={isLight ? "size-4" : "hidden"} aria-hidden="true" />
      <Moon className={isLight ? "hidden" : "size-4"} aria-hidden="true" />
    </button>
  );
}
