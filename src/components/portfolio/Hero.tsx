import { useEffect, useState } from "react";
import { ArrowUpRight, Linkedin, Mail } from "lucide-react";
import { PROFILE } from "@/data/portfolio";
import profileImg from "@/assets/profile.jpg";

/** Live local time in Anuj's timezone (IST). Renders empty until mounted (SSR-safe). */
function useLocalTime() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Asia/Kolkata",
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = window.setInterval(tick, 10_000);
    return () => window.clearInterval(id);
  }, []);
  return time;
}

export function Hero() {
  const localTime = useLocalTime();

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16 sm:pt-32"
    >
      {/* Ambient accent — single intentional light, not a card glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full opacity-[0.07] blur-3xl"
        style={{ background: "radial-gradient(circle, var(--accent), transparent 65%)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(circle at 30% 40%, black, transparent 70%)",
          WebkitMaskImage: "radial-gradient(circle at 30% 40%, black, transparent 70%)",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.35fr_0.65fr]">
        {/* ---------------- Left: statement ---------------- */}
        <div>
          <p
            className="anim-fade-up label-mono flex items-center gap-2.5"
            style={{ animationDelay: "0.05s" }}
          >
            <span className="status-dot inline-block size-2 rounded-full bg-accent" />
            Open to entry-level SDE roles
          </p>

          <h1 className="mt-7 text-display font-normal">
            <span className="block overflow-hidden">
              <span className="anim-rise block" style={{ animationDelay: "0.1s" }}>
                Building
              </span>
            </span>
            <span className="block overflow-hidden">
              <span className="anim-rise block" style={{ animationDelay: "0.22s" }}>
                scalable <span className="serif-em">software</span>
              </span>
            </span>
            <span className="block overflow-hidden">
              <span
                className="anim-rise block text-muted-foreground"
                style={{ animationDelay: "0.34s" }}
              >
                &amp; intelligent AI.
              </span>
            </span>
          </h1>

          <p
            className="anim-fade-up mt-7 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg"
            style={{ animationDelay: "0.5s" }}
          >
            Final-year CSE (Data Science) student turning algorithms and data into reliable,
            scalable products — looking for an SDE team to build with.
          </p>

          <div
            className="anim-fade-up mt-9 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "0.62s" }}
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-transform duration-300 hover:-translate-y-0.5"
            >
              View Work
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-border-strong hover:bg-surface"
            >
              <Mail className="size-4" />
              Get in touch
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn profile"
              className="inline-flex size-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent-ink"
            >
              <Linkedin className="size-4" />
            </a>
          </div>

          {/* Spec sheet */}
          <dl
            className="anim-fade-up mt-12 grid max-w-lg grid-cols-3 gap-px overflow-hidden rounded-xl border border-border bg-border"
            style={{ animationDelay: "0.74s" }}
          >
            {[
              { k: "Role", v: "Aspiring SDE" },
              { k: "Focus", v: "AI / ML · DSA" },
              { k: "Local", v: localTime ? `${localTime} IST` : "— IST" },
            ].map((item) => (
              <div key={item.k} className="bg-background px-4 py-3">
                <dt className="label-mono text-[0.625rem]">{item.k}</dt>
                <dd className="mt-1.5 text-sm font-medium text-foreground">{item.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* ---------------- Right: portrait ---------------- */}
        <div
          className="anim-fade-up relative mx-auto w-full max-w-xs lg:mx-0"
          style={{ animationDelay: "0.4s" }}
        >
          {/* offset outlined frame — editorial depth without glow */}
          <div
            aria-hidden="true"
            className="absolute -bottom-3 -right-3 h-full w-full rounded-2xl border border-accent/40"
          />
          <figure className="relative">
            <div className="overflow-hidden rounded-2xl border border-border bg-surface">
              <img
                src={profileImg}
                alt="Portrait of Anuj Singh Chauhan"
                width={816}
                height={816}
                fetchPriority="high"
                className="aspect-square w-full object-cover transition-all duration-700 ease-[var(--ease-brand)] md:grayscale md:hover:grayscale-0"
              />
            </div>
            <figcaption className="label-mono mt-3 flex items-center justify-between">
              <span className="text-foreground">Anuj Singh Chauhan</span>
              <span>{PROFILE.location.split(",")[0]} · IN</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
