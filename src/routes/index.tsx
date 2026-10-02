import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import {
  About,
  Education,
  Experience,
  Projects,
  Services,
  Skills,
} from "@/components/portfolio/Sections";
import { Contact, Footer } from "@/components/portfolio/Contact";

const title = "Anuj Singh Chauhan | Software Developer & AI/ML Enthusiast";
const description =
  "Portfolio of Anuj Singh Chauhan — final-year B.Tech CSE (Data Science) student and aspiring SDE, building scalable software and intelligent AI solutions.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Services />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
