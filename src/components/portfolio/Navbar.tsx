import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { SECTIONS } from "@/data/portfolio";
import { ThemeToggle } from "./ThemeToggle";

// SSR-safe layout effect (React warns on useLayoutEffect during SSR).
const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [hovered, setHovered] = useState<string | null>(null);
  const [pill, setPill] = useState<{ left: number; width: number } | null>(null);

  const listRef = useRef<HTMLUListElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  // Shrink-on-scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active-section tracking
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.2, 0.5] },
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Slide the indicator pill to the hovered link, falling back to the active one.
  const measure = useCallback(() => {
    const id = hovered ?? active;
    const el = linkRefs.current[id];
    const list = listRef.current;
    if (!el || !list) return;
    const elBox = el.getBoundingClientRect();
    const listBox = list.getBoundingClientRect();
    setPill({ left: elBox.left - listBox.left, width: elBox.width });
  }, [hovered, active]);

  useIsoLayoutEffect(measure, [measure, scrolled]);
  useEffect(() => {
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4">
      <nav
        aria-label="Main navigation"
        className={cn(
          "glass-nav mt-3 flex w-full max-w-6xl items-center justify-between gap-4 rounded-full transition-all duration-500 ease-[var(--ease-brand)]",
          scrolled ? "mt-2 px-3 py-1.5 shadow-[0_8px_40px_rgb(0_0_0/0.45)]" : "px-4 py-2.5",
        )}
      >
        <a
          href="#home"
          className="shrink-0 pl-2 font-mono text-sm font-medium tracking-tight text-foreground"
        >
          Anuj<span className="text-accent-ink">.</span>
        </a>

        <ul
          ref={listRef}
          className="relative hidden items-center lg:flex"
          onMouseLeave={() => setHovered(null)}
        >
          {/* sliding indicator */}
          <span
            aria-hidden="true"
            className="absolute inset-y-1 rounded-full bg-surface-2 transition-all duration-300 ease-[var(--ease-brand)]"
            style={{
              left: pill?.left ?? 0,
              width: pill?.width ?? 0,
              opacity: pill ? 1 : 0,
            }}
          />
          {SECTIONS.map((s) => (
            <li key={s.id} className="relative z-10">
              <a
                ref={(node) => {
                  linkRefs.current[s.id] = node;
                }}
                href={`#${s.id}`}
                aria-current={active === s.id ? "true" : undefined}
                onMouseEnter={() => setHovered(s.id)}
                className={cn(
                  "block rounded-full px-3.5 py-1.5 text-sm transition-colors duration-200",
                  active === s.id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-2">
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-transform duration-300 hover:-translate-y-0.5 sm:inline-flex"
          >
            Let&rsquo;s talk
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex size-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-surface-2 lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="glass-nav absolute inset-x-4 top-[4.5rem] rounded-2xl p-2 lg:hidden">
          <ul className="grid gap-0.5">
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded-xl px-3 py-2.5 text-sm transition-colors hover:bg-surface-2",
                    active === s.id ? "text-accent-ink" : "text-muted-foreground",
                  )}
                >
                  {s.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-1 block rounded-xl bg-accent px-3 py-2.5 text-center text-sm font-medium text-accent-foreground"
              >
                Let&rsquo;s talk
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
