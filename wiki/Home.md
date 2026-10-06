# Brain Beats Engineering Wiki

Welcome to the internal engineering documentation and development workflow knowledge base for **Brain Beats**.

---

## 📚 Wiki Directory Index

1. **[Development Workflow & Environment](file:///var/www/brain-beats/wiki/development-workflow.md)**
   - Local in-house server execution, prerequisites (Node 24, Ruby 3.3, Bundler).
   - Fast local iteration without external network dependencies.
   - Repository hygiene, branch topology, and `/lab` directory conservation.
2. **[Architecture & Audio Engine](file:///var/www/brain-beats/wiki/architecture-and-audio-engine.md)**
   - Zero-backend client-side Web Audio API pipeline (`js/main.js`).
   - Pure tones, binaural beats, monaural modulation, and 3D spatial matrices.
   - Colored noise processors and AudioWorklet fallbacks.
   - Octave range shifting (`adjustFrequency`), dynamic gain dynamics (`live_volume_set`).
3. **[UI/UX Design Standards & Responsive System](file:///var/www/brain-beats/wiki/ui-ux-design-system.md)**
   - Bootstrap 5 framework alignment and vanilla library integration.
   - Glassmorphic fixed controls (navbar and volume bar with `backdrop-filter: blur(8px)`).
   - Audio feedback states (`.btn-play-stop.is-playing` pulsing animations).
   - Micro-interactions on favorites and expandable search affordance.
   - Viewport breakpoints and modal dismissal caching via `localStorage`.
4. **[Jekyll Blog & Content Publishing](file:///var/www/brain-beats/wiki/jekyll-and-content-publishing.md)**
   - Liquid architecture, layouts (`compress`, `default`, `post`), and includes.
   - CAFL / Rife frequency research post elaboration guidelines.
   - Mathematical equations with MathJax 3 and harmonic tables.
   - Web Audio code snippet synthesis classes for each post.
5. **[Testing, Quality Assurance & TDD](file:///var/www/brain-beats/wiki/testing-and-qa.md)**
   - Comprehensive 14-phase TDD suite (`tests/audio-engine.test.js`).
   - Preset JSON schema validation across 25 databases.
   - Service Worker precache verification (209 URLs).
   - Automated zero-exit-code CI testing and regression prevention.
6. **[Deployment & Branch Synchronization](file:///var/www/brain-beats/wiki/deployment-and-branch-sync.md)**
   - Multi-branch synchronization (`main`, `master`, `dev`, `debug`, `gh-pages`).
   - Production asset compilation (`npm run build`).
   - GitHub Pages deployment via GitHub Actions and static worktrees.
   - Netlify Edge CDN configuration and zero-exit-code build rules.

---

## 🔑 Key Engineering Principles

> [!IMPORTANT]
> **Directory Preservation:**
> The `/lab` directory contains historical frequency research datasets and scripts. It MUST remain 100% intact and untouched during any automated cleanup, build, or deploy process.

> [!TIP]
> **Library & Performance Constraint:**
> Stick strictly to Bootstrap 5 and native JavaScript/Web Audio APIs. Do not introduce heavy third-party UI frameworks, bundler bloat, or redundant npm packages. The system is designed to be lightweight, offline-first, and lightning fast on in-house servers.
