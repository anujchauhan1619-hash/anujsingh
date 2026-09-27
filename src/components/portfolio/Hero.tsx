import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Reveal } from "./Reveal";
import { PROFILE } from "@/data/portfolio";
import profileImg from "@/assets/profile.jpg";
import networkImg from "@/assets/ai-network.jpg";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <img
        src={networkImg}
        alt=""
        aria-hidden="true"
        width={1600}
        height={1200}
        className="pointer-events-none absolute inset-0 size-full object-cover opacity-70"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[image:var(--gradient-soft)]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="size-1.5 rounded-full bg-primary" />
              Open to entry-level SDE roles
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.1] sm:text-5xl lg:text-6xl">
              Building Scalable Software & <span className="text-gradient">Intelligent AI</span>{" "}
              Solutions.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {PROFILE.intro}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-0.5"
              >
                View My Projects
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary"
              >
                <Mail className="size-4" />
                Contact Me
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-8 flex items-center gap-3">
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn profile"
                className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Linkedin className="size-4" />
              </a>
              <span
                aria-label="GitHub profile link not provided"
                title="GitHub link not provided yet"
                className="inline-flex size-10 items-center justify-center rounded-full border border-dashed border-border bg-card text-muted-foreground/60"
              >
                <Github className="size-4" />
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="justify-self-center">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-[2.5rem] bg-gradient-brand opacity-20 blur-2xl"
            />
            <img
              src={profileImg}
              alt="Portrait of Anuj Singh Chauhan"
              width={816}
              height={816}
              className="relative size-56 rounded-[2rem] border border-border object-cover shadow-[var(--shadow-lift)] sm:size-72 lg:size-80"
            />
            <div className="glass-panel absolute -bottom-5 left-1/2 w-[15rem] -translate-x-1/2 rounded-2xl px-4 py-3 text-center shadow-[var(--shadow-soft)]">
              <p className="text-sm font-semibold">{PROFILE.name}</p>
              <p className="mt-1 text-[0.7rem] leading-snug text-muted-foreground">
                B.Tech CSE (Data Science) · Aspiring SDE
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
