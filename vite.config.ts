// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Base path for the built site. "/" for custom domain / <user>.github.io /
// Lovable / dev; set VITE_BASE=/anujsingh/ for GitHub *project* pages.
const base = process.env["VITE_BASE"] || "/";

export default defineConfig({
  vite: { base },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // Prerender the site to static HTML in .output/public so it can be hosted on
    // a static host (GitHub Pages) with no server. EmailJS runs client-side.
    prerender: { enabled: true, crawlLinks: true },
  },
});
