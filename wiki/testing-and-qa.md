# Testing, Quality Assurance & TDD

This document details the Test-Driven Development (TDD) harness, automated test phases, and validation criteria implemented in **Brain Beats**.

---

## 1. Test Harness Architecture (`tests/audio-engine.test.js`)

Brain Beats uses a custom, lightweight Node.js test harness that does not require heavy test runners. It mocks standard browser APIs (`window`, `document`, `AudioContext`, `GainNode`, `OscillatorNode`, `StereoPannerNode`, `PannerNode`) and executes in sub-second time.

### Execution Command:
```bash
npm test
```

---

## 2. 14 Test Suite Phases

The test suite is partitioned into 14 distinct phases covering every layer of the application:

| Phase | Test Scope | Verification Focus |
| :--- | :--- | :--- |
| **Phase 1** | Code Parsing & Evaluation | Verifies that `js/main.js` contains no syntax or parsing errors. |
| **Phase 2** | Autoplay & AudioContext Lifecycle | Tests singleton `getAudioContext()` instantiation and transition to `'running'`. |
| **Phase 3** | Single Tone Synthesis | Validates pure tone (432 Hz), solfeggio (528 Hz), and angel (888 Hz) activation and deactivation. |
| **Phase 4** | Double Tone Synthesis | Validates stereo binaural and monaural beat pairs (e.g., 200 Hz / 208 Hz). |
| **Phase 5** | 3D Spatial Audio & Multi-Matrices | Validates orbital 3-point matrix initialization and cleanup. |
| **Phase 6** | Noise Synthesizers & Worklets | Tests White, Pink, Brown, Green, Blue, Violet (+6dB/oct), and Yellow noise generators. |
| **Phase 7** | Volume Control & Gain Dynamics | Checks logarithmic gain conversion (75% -> 0.75) and dynamic live volume adjustments across all 38 pages. |
| **Phase 8** | Frequency Shifting Algorithm | Verifies `adjustFrequency()` octave shifting for infrasound (<20 Hz) and ultrasound (>20 kHz). |
| **Phase 9** | Preset Database Schema Integrity | Parses and validates all 25 JSON database files in `json/`. |
| **Phase 10** | Service Worker Precache Verification | Verifies physical on-disk existence for all 209 precached assets and validates blog exclusion rules. |
| **Phase 11** | MathJax Rendering Verification | Confirms presence and syntax of `_includes/mathjax.html` and LaTeX configuration in `_config.yml`. |
| **Phase 12** | Node Runtime Pinning | Confirms `.node-version`, `.nvmrc`, and `package.json` are pinned to Node 24. |
| **Phase 13** | Documentation & Licensing Integrity | Validates README, DEVELOPMENT, CONTRIBUTING, and dual licensing (AGPLv3 for code / CC BY 4.0 for content). |
| **Phase 14** | Cloud CI/CD & Netlify Hardening | Asserts exclusion of failing plugins (`jekyll-github-metadata`, `@netlify/plugin-sitemap`) and verifies `sitemap.xml`. |

---

## 3. Precache Validation Philosophy

The Service Worker precache (`workbox-config.js`) enforces strict boundaries:
- **Core Web Application Included**: Root HTML pages, stylesheets, audio processors, scripts, icons, and preset JSON catalogs (~209 files totaling ~11.2 MB).
- **Blog Posts Excluded**: Over 1,400 blog posts are strictly excluded from the Service Worker precache to prevent client storage bloat, using a `NetworkOnly` runtime strategy for blog paths.

---

## 4. Zero-Exit-Code Hardening Rules

All build and test scripts are designed to return exit code `0` on success. Any syntax anomaly, missing precache file, or broken JSON schema immediately halts the process with exit code `1`, preventing flawed code from being pushed to tracking branches.
