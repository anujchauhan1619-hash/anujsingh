import {
  Binary,
  BrainCircuit,
  Code2,
  Database,
  GraduationCap,
  Layers,
  Lightbulb,
  MapPin,
  Plug,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import {
  EDUCATION,
  EXPERIENCE,
  KEYWORDS,
  PROJECTS,
  SERVICES,
  SKILL_GROUPS,
  PROFILE,
} from "@/data/portfolio";
import projectImg from "@/assets/project-house.jpg";

const skillIcons = [Binary, BrainCircuit, Code2, Layers];
const serviceIcons = [BrainCircuit, Sparkles, Database, Plug, Code2];

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
      {children}
    </span>
  );
}

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <SectionHeading
        eyebrow="About Me"
        title="Engineering clarity from data and algorithms"
        description={PROFILE.about}
      />

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {[
          {
            icon: Lightbulb,
            title: "Introduction",
            body: "Final-year B.Tech CSE (Data Science) student at AKGEC, focused on writing reliable, well-structured software and understanding systems from first principles.",
          },
          {
            icon: BrainCircuit,
            title: "Core Interests",
            body: "Data Structures & Algorithms, machine learning, deep learning, data-driven products, and full-stack engineering with modern web technologies.",
          },
          {
            icon: Target,
            title: "Career Objective",
            body: "To join a product-focused team as an entry-level SDE and contribute to high-impact, scalable systems through analytical thinking and strong fundamentals.",
          },
        ].map((card, i) => (
          <Reveal key={card.title} delay={i * 90}>
            <article className="surface-card surface-card-hover h-full p-6">
              <span className="inline-flex size-10 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <card.icon className="size-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.body}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120} className="mt-10 flex flex-wrap justify-center gap-2">
        {KEYWORDS.map((k) => (
          <Badge key={k}>{k}</Badge>
        ))}
      </Reveal>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="bg-secondary/40 py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="A toolkit built on fundamentals"
          description="Grouped by how they're used day to day — from core computer science through to shipping full-stack, ML-backed products."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {SKILL_GROUPS.map((group, i) => {
            const Icon = skillIcons[i % skillIcons.length];
            return (
              <Reveal key={group.title} delay={i * 80}>
                <article className="surface-card surface-card-hover h-full p-6">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex size-10 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="text-lg font-semibold">{group.title}</h3>
                  </div>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li key={item}>
                        <span className="inline-block rounded-lg border border-border bg-card px-3 py-1.5 text-sm text-foreground/80 transition-colors hover:border-primary hover:text-primary">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <SectionHeading
        eyebrow="Experience"
        title="Leading and mentoring on campus"
        description="Technical community work that sharpened communication, organization, and teamwork alongside engineering skills."
      />
      <div className="mt-12 space-y-6">
        {EXPERIENCE.map((exp, i) => (
          <Reveal key={exp.role} delay={i * 90}>
            <article className="surface-card surface-card-hover relative overflow-hidden p-6 sm:p-8">
              <span
                aria-hidden="true"
                className="absolute inset-y-0 left-0 w-1 bg-gradient-brand"
              />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold sm:text-xl">{exp.role}</h3>
                <p className="text-sm text-muted-foreground">
                  {exp.period} · {exp.location}
                </p>
              </div>
              <ul className="mt-5 space-y-3">
                {exp.points.map((p) => (
                  <li key={p} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <Users className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {exp.tags.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects" className="bg-secondary/40 py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Applied machine learning, shipped end to end"
          description="Selected work combining data preprocessing, model integration, and a usable interface."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.title} delay={i * 90}>
              <article className="surface-card surface-card-hover flex h-full flex-col overflow-hidden">
                <img
                  src={projectImg}
                  alt="Visual showing predicted versus historical house prices"
                  loading="lazy"
                  width={1200}
                  height={800}
                  className="aspect-[3/2] w-full border-b border-border object-cover"
                />
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <Badge key={t}>{t}</Badge>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3 pt-1">
                    <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-dashed border-border px-4 py-2 text-sm text-muted-foreground">
                      View Project — link coming soon
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <SectionHeading
        eyebrow="Services"
        title="Where I can contribute"
        description="Areas of professional interest where I can add value to a team or a project."
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service, i) => {
          const Icon = serviceIcons[i % serviceIcons.length];
          return (
            <Reveal key={service.title} delay={i * 70}>
              <article className="surface-card surface-card-hover group h-full p-6">
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-accent text-accent-foreground transition-transform duration-300 group-hover:scale-105">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="education" className="bg-secondary/40 py-24">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionHeading eyebrow="Education" title="Academic foundation" />
        <Reveal delay={80} className="mt-12">
          <article className="surface-card surface-card-hover p-6 sm:p-8">
            <div className="flex gap-4">
              <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-brand text-primary-foreground">
                <GraduationCap className="size-6" />
              </span>
              <div>
                <h3 className="text-lg font-semibold sm:text-xl">{EDUCATION.degree}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{EDUCATION.institution}</p>
                <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin className="size-3.5" />
                  {EDUCATION.location} · {EDUCATION.year}
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-6">
              {EDUCATION.focus.map((f) => (
                <Badge key={f}>{f}</Badge>
              ))}
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
