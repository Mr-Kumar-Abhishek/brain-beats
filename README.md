# Brain Beats - Brainwave Entrainment & Web Audio Synthesis Engine

[![Node.js Version](https://img.shields.io/badge/Node.js-24%20LTS-339933?logo=nodedotjs)](https://nodejs.org/)
[![Test Suite](https://img.shields.io/badge/Tests-63%20Passed%20(100%25)-success?logo=jest)](TEST_REPORT.md)
[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](LICENSE)
[![Content License: CC BY 4.0](https://img.shields.io/badge/Content_License-CC_BY_4.0-lightgrey.svg)](LICENSE-CONTENT.txt)
[![PWA: Offline-First](https://img.shields.io/badge/PWA-Offline--First-orange?logo=pwa)](sw.js)
[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/Mr-Kumar-Abhishek/brain-beats)

**Brain Beats** is an offline-first Progressive Web Application (PWA) and digital sound laboratory built with the **Web Audio API**. It is designed to synthesize pure acoustic waveforms, binaural beats, monaural modulations, isochronic tones, 3D spatial matrices, and calibrated noise spectra to assist in meditation, focus, sleep enhancement, and psychoacoustic research.

---

## 📚 Developer Documentation & Architecture Index

For detailed technical guides, architectural blueprints, test reports, and contribution policies, consult the dedicated developer documentations:

| Document | Description | Key Topics |
| :--- | :--- | :--- |
| 📘 **[Developer Guide](DEVELOPMENT.md)** | Comprehensive developer manual & architecture | Web Audio synthesis pipeline, modular SCSS architecture, Dart Sass compilation, DRY Jekyll layout inheritance, PWA offline precaching, Netlify & GitHub Pages CI/CD |
| 🧪 **[Test Verification Report](TEST_REPORT.md)** | Test-Driven Development (TDD) verification suite | 63 automated unit & integration tests, 14 test phases, Red-Green-Refactor audit matrix, execution logs |
| 🤝 **[Contributing Guidelines](CONTRIBUTING.md)** | Contribution standards & code style | PR workflows, bug reporting, XSS prevention, safe DOM handling, branch management |
| 📊 **[COCOMO Cost Estimation](cocomo-cost-estimate.md)** | Formal software engineering economic analysis | Constructive Cost Model effort estimation, 469+ KLOC codebase metrics, work packages (also at [cocomo.html](https://brain-beats.in/cocomo.html)) |
| ⚖️ **[Source Code & Config License (AGPLv3)](LICENSE)** | Software, mechanics, configs & server configurations | GNU Affero General Public License v3.0 covering all software programming code, audio DSP algorithms, worklets, mechanics, configuration files, and server configurations |
| 📝 **[Content License (CC BY 4.0)](LICENSE-CONTENT.txt)** | Content & documentation license | Creative Commons Attribution 4.0 International license covering written articles, documentation, and audio preset datasets (strictly excluding code, mechanics, configuration files, and server configurations) |

---

## 🎧 Features & Acoustic Sound Types

Brain Beats performs **100% client-side Web Audio synthesis** without external audio file streaming, providing instant offline playback:

### 1. Sound Types & Preset Catalogs
* **Colours of Noise:** 13 calibrated noise profiles including White, Pink, Brown, Green, Blue, Violet (+6 dB/octave differentiation), Yellow (200 Hz lowpass filter), Grey, Velvet, Black, Red, Orange, and Turquoise noise.
* **Solfeggio Frequencies:** Ancient harmonic scale tones (174 Hz, 285 Hz, 396 Hz, 417 Hz, 528 Hz, 639 Hz, 741 Hz, 852 Hz, 963 Hz) for meditation and resonant acoustic balance.
* **Angel Frequencies:** Harmonic vibrational tones (111 Hz through 999 Hz).
* **Pure Tones:** Single-frequency pure sine-wave synthesis with automatic octave range shifting (20 Hz - 20,000 Hz).
* **Binaural Beats:** Dual-channel synthesis where left and right ears receive slightly offset frequencies, creating a perceived perceptual beat in the brain's superior olivary complex (Delta, Theta, Alpha, Beta, Gamma).
* **Monaural Beats:** Acoustic wave interference produced by summing two distinct carrier frequencies prior to output, generating physical amplitude modulation.
* **Square Wave Monaural Beats:** Monaural beat synthesis using square waveforms for rich harmonic overtone series.
* **3D Spatial Audio & Multi-Frequency Matrices:** Tri-coordinate dynamic panning utilizing Web Audio `PannerNode` and `StereoPannerNode` algorithms to simulate 3D rotation around the listener.
* **Royal Rife & CAFL Frequencies:** Extensive research frequency catalogs based on Royal Rife and Consolidated Annotated Frequency Lists (CAFL) available in 3D spatial and monaural configurations.
* **Dr. Hulda Clark (HC) Frequencies:** ~280 therapeutic resonance presets with 3D coordinate distribution.
* **Kilohertz (KHZ) & Bio-Resonance (BIO) Presets:** High-frequency and biological oscillation datasets.
* **Planetary & ALT Frequencies:** Hans Cousto "Cosmic Octave" astronomical calculations and alternative metaphysical frequencies.

### 2. Interactive Tone & Beat Generators
* **Pure Tone Generator:** Custom sine oscillator with real-time frequency selection.
* **Binaural Beats Generator:** Configurable base carrier frequency and beat delta.
* **Binaural Mind Machine:** Programmable state sequencer for multi-stage entrainment sessions.
* **Monaural Beats Generator & Square Wave Generator:** Custom dual-oscillator acoustic mixer.
* **Isochronic Tone Generator:** Pulsed amplitude modulation rhythm synthesizer with adjustable pulse rate.
* **Sine Wave & Rife 3D Generators (Auto & Manual):** Multi-point spatial matrix generators with dynamic orbit controls.
* **Sine Wave & Rife Monaural Generators:** Interactive monaural beat formulators.
* **Dreamachine Generator:** Combined stroboscopic flickering visual canvas and synchronous binaural beat entrainment.

### 3. Custom Presets & User Tools
* **Kundalini Ascension & Astral Broadcaster:** Specialized multi-tone harmonic sweeps timed to the golden ratio ($\phi$).
* **Favorites System:** Client-side local storage bookmarking for one-click access to preferred presets across all 38 generator pages.
* **Real-Time Instant Search:** Fuzzy client-side search across all 25 JSON databases and research articles.
* **Unified Dynamic Gain Control:** Linear volume attenuation ($user\_volume / 100$) dynamically bound to active audio nodes across all pages.

---

## 📖 Usage Instructions & Safety Guidelines

### How to Use
1. **Navigate:** Select a category from the navigation bar (Single Tones, Beats, Generators, Custom Presets, or Blog).
2. **Select Preset or Configure Generator:** Choose a pre-configured frequency preset or enter custom carrier/beat values.
3. **Set Volume:** Use the unified volume slider at the bottom of the page. Always begin at a low level and increase gradually.
4. **Playback:** Click **Play** to initialize the Web Audio Context and begin synthesis; click **Stop** to terminate oscillators and release audio hardware.

### ⚠️ Important Listening Guidelines & Disclaimer

> [!IMPORTANT]
> **Headphones vs. Speakers:**
> * **Headphones/Earphones are REQUIRED** for all **Binaural Beats** and **3D Spatial Audio** presets to deliver separate acoustic channels to each ear.
> * **Headphones are OPTIONAL** for **Monaural Beats**, **Pure Tones**, **Isochronic Tones**, and **Noise Generators**, which function effectively over stereo or mono loudspeakers.

> [!WARNING]
> **Volume Safety:** Listening at excessive volumes can cause permanent hearing damage. Keep volumes moderate and take regular listening breaks.

> [!CAUTION]
> **Photosensitive Warning (Dreamachine):** The Dreamachine Generator produces rapid visual strobe effects. **Do not use** if you have photosensitive epilepsy or a history of seizures. Always use with eyes closed in a darkened room.

> [!NOTE]
> **Medical Disclaimer:** Brain Beats is designed for acoustic research, meditation, and relaxation. It is **not** a substitute for professional medical advice, diagnosis, or treatment.

---

## 💻 Development Setup & Quickstart

### Prerequisites
* **Node.js:** v24.0.0+ (managed via [`.node-version`](.node-version) and [`.nvmrc`](.nvmrc))
* **npm:** v10.0.0+
* **Ruby & Bundler:** Ruby v3.0+ / Bundler v2.3+ (for Jekyll blog builds)
* **Git:** v2.30+

### Installation

```bash
# Clone the repository
git clone https://github.com/Mr-Kumar-Abhishek/brain-beats.git
cd brain-beats

# Install Node.js dependencies
npm install

# Install Ruby dependencies for Jekyll blog
bundle install
```

### Running Locally

```bash
# Start the unified Jekyll local development server
npm run serve:jekyll
# or: bundle exec jekyll serve
```

The application will be accessible at:
* Main Web Application: `http://localhost:4000/`
* Research Blog: `http://localhost:4000/blog/`
* Instant Search: `http://localhost:4000/blog/search/`

---

## 🧪 Automated Testing (TDD Suite)

Brain Beats maintains a strict **Test-Driven Development (TDD)** verification suite in [`tests/audio-engine.test.js`](tests/audio-engine.test.js) validating syntax, Web Audio lifecycle, DSP synthesis, volume gain scaling, JSON schemas, offline precaching, MathJax typography, and Node.js 24 deployment environments.

Execute the test suite locally:

```bash
npm test
```

### Test Suite Summary:
```
==================================================
   Brain Beats Web Audio Engine Test Suite (TDD)  
==================================================
Phase 1: Code Parsing & Evaluation ............. [PASS]
Phase 2: Autoplay & AudioContext Lifecycle ..... [PASS]
Phase 3: Single Tone Synthesis & Safety ........ [PASS]
Phase 4: Double Tone (Binaural/Monaural) ....... [PASS]
Phase 5: 3D Spatial Audio Matrices ............. [PASS]
Phase 6: Noise Synthesizers & Worklets ......... [PASS]
Phase 7: Volume Control & Gain Dynamics ........ [PASS]
Phase 8: Frequency Range Shifting (20Hz-20kHz) . [PASS]
Phase 9: Preset Database Schema Integrity ...... [PASS]
Phase 10: Service Worker Precache (209 URLs) ... [PASS]
Phase 11: MathJax Configuration & Rendering .... [PASS]
Phase 12: Node.js 24 Deployment Verification ... [PASS]
Phase 13: Developer Docs & Patch Verification .. [PASS]
Phase 14: Cloud CI/CD & Netlify Hardening ...... [PASS]
==================================================
   Test Results: 63 Passed, 0 Failed
==================================================
```

For full test reports and architectural history, refer to [`TEST_REPORT.md`](TEST_REPORT.md).

---

## ⚙️ Modular SCSS & Offline PWA Pipeline

```bash
# Transpile modular SCSS into css/main.css and blog/css/main.css
npm run build:css

# Rebuild sitemap XML
npm run build:sitemap

# Rebuild Service Worker precache manifest
npm run build:sw

# Complete production build
npm run build
```

---

## 🚀 CI/CD & Deployment Architecture

* **GitHub Pages CI/CD ([`.github/workflows/pages.yml`](.github/workflows/pages.yml)):** Automated GitHub Actions pipeline running on Node.js 24 and Ruby 3.3. Executes test gates, transpiles SCSS, builds Jekyll assets, compiles the Service Worker, and deploys directly to GitHub Pages and the [`gh-pages`](https://github.com/Mr-Kumar-Abhishek/brain-beats/tree/gh-pages) branch.
* **Netlify Production ([`netlify.toml`](netlify.toml)):** Automated cloud edge deployment with strict HTTP security headers, immutable caching for audio worklets/fonts, and domain canonicalization to `brain-beats.in`.
* **Multi-Remote Synchronization:** Maintains realigned branch tips across `origin` (`Mr-Kumar-Abhishek/brain-beats`) and `upstream` (`cybernetics-decentral/brain-beats`).

---

## 📂 Repository Structure

```
├── .github/
│   └── workflows/
│       ├── pages.yml                   # GitHub Actions Pages CI/CD workflow (Node 24)
│       └── codeql.yml                  # Automated CodeQL static analysis security scan
├── _includes/
│   └── mathjax.html                    # MathJax 3 typography configuration & offline loader
├── _layouts/
│   ├── compress.html                   # HTML minification layout
│   ├── default.html                    # DRY parent layout with SEO metadata fallback chain
│   └── post.html                       # Blog post template with Disqus integration
├── _posts/                             # Thousands of Jekyll research blog markdown posts
├── _sass/                              # Modular SCSS partials (variables, base, layout, components, footer)
├── css/
│   ├── main.scss                       # Main application SCSS entrypoint
│   └── main.css                        # Transpiled main application stylesheet
├── blog/
│   └── css/
│       ├── main.scss                   # Research blog SCSS entrypoint
│       └── main.css                    # Transpiled research blog stylesheet
├── img/                                # PWA icons, vector artwork, and UI graphics
├── js/
│   ├── main.js                         # Core Web Audio synthesis engine & DSP algorithms
│   ├── search.js                       # Client-side instant JSON preset search engine
│   └── webring.js                      # Webring integration script
├── json/                               # 25 Structured JSON frequency preset databases
├── noise-processor/                    # AudioWorklet processor scripts for noise shaping
├── scripts/
│   ├── build-css.js                    # Dart Sass transpilation build script
│   └── generate-sitemap.js             # Automated sitemap.xml generator
├── tests/
│   └── audio-engine.test.js            # Automated TDD unit/integration test suite (63 tests)
├── .node-version                       # Node.js 24 environment version file
├── .nvmrc                              # NVM runtime configuration (Node 24)
├── 3d-*.html                           # 3D spatial audio generators & preset pages
├── binaural-*.html                     # Binaural beat generators & mind machine pages
├── monaural-*.html                     # Monaural beat generators & preset pages
├── isochronic-*.html                   # Isochronic pulse generator & preset pages
├── rife-*.html                         # Royal Rife 3D and monaural generator pages
├── pure-*.html                         # Pure tone and frequency generators
├── dreamachine-*.html                  # Dreamachine stroboscopic & binaural generator
├── noise.html                          # Noise color spectrum generator
├── favorites.html                      # User preset bookmarking dashboard
├── search.html                         # Full-text research & preset search portal
├── cocomo.html                         # Interactive COCOMO cost estimation report
├── cocomo-cost-estimate.md             # Formal COCOMO economic analysis & metrics
├── CONTRIBUTING.md                     # Contributor guidelines & code style rules
├── DEVELOPMENT.md                      # Developer manual & architectural blueprint
├── TEST_REPORT.md                      # Automated test suite execution & audit report
├── netlify.toml                        # Netlify build configuration & security headers
├── package.json                        # Node.js dependencies, scripts & engines (Node 24)
├── sw.js / sw-generated.js             # Workbox Service Worker offline precaching
└── workbox-config.js                   # Workbox precaching manifest configuration
```

---

## 🤝 Contributing & Community

Contributions are welcome! Please review [CONTRIBUTING.md](CONTRIBUTING.md) before submitting pull requests.

* **Author & Maintainer:** Abhishek Kumar
* **Official Website:** [brain-beats.in](https://brain-beats.in)
* **Research Blog:** [brain-beats.in/blog/](https://brain-beats.in/blog/)
* **Support Email:** `support@brain-beats.in`
* **Discord Community:** [Join Discord Server](https://discord.gg/JNRPJDFWdY)
* **Support the Project:** [Buy Me a Coffee](https://ko-fi.com/brainbeats)

---

## 📄 Dual Licensing Model & Governance

This project enforces a strict boundary separating software programming, configuration files, and server configurations from creative and educational content:

* **Software, Programming Mechanics, Configuration Files & Server Configurations:** Strictly licensed under the **GNU Affero General Public License v3.0 (AGPL-3.0)**. Covers all application source code, JavaScript synthesis algorithms, AudioWorklet processors, scripts, interactive generative mechanics, configuration files, and server configurations (`package.json`, `.node-version`, `.nvmrc`, `netlify.toml`, `_config.yml`, Workbox configs, web server headers/redirects, and CI/CD pipelines). See [`LICENSE`](LICENSE) for complete terms.
* **Content & Documentation:** Licensed under the **Creative Commons Attribution 4.0 International (CC BY 4.0)** license. Applies exclusively to written documentation, research guides, blog articles, and audio frequency preset catalogs. Does *not* apply to software programming, audio engines, technical mechanics, configuration files, or server configurations. See [`LICENSE-CONTENT.txt`](LICENSE-CONTENT.txt) for complete terms.
