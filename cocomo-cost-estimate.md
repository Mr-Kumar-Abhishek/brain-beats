# COCOMO Production Cost & Software Maintenance Valuation

This document provides a comprehensive software engineering cost and maintenance re-estimation for the **Brain Beats** web application and audio synthesis platform using the Constructive Cost Model (COCOMO 81 / Basic COCOMO & Maintenance Model) across three standard deployment modes: **Organic**, **Semi-Detached**, and **Embedded**.

---

## 1. Project Sizing & Language Breakdown

Based on full static analysis of the active source tree (excluding `node_modules`, `.git`, `.jekyll-cache`, `_site`, and build artifacts), the active codebase comprises **6,706 clean source files** totaling **533,963 Source Lines of Code (533.963 KLOC)**:

| Language / Format | Files | Source Lines (SLOC) | Percentage | Role in Architecture |
| :--- | :---: | :---: | :---: | :--- |
| **JSON Data Schemas** | 49 | 188,685 | 35.3% | 25 Frequency preset databases, laboratory matrices, Rife CAFL presets |
| **Markdown Knowledge Base** | 6,409 | 180,718 | 33.8% | Research blog posts, engineering wiki, frequency references, guides |
| **Text Data & Manifests** | 30 | 49,934 | 9.4% | Ads configuration, manifests, license matrices, robots/sitemap XML, edge redirects |
| **CSS & SCSS Styling** | 26 | 45,640 | 8.5% | Modular SCSS partials, responsive design, dark/light theme, layout animations |
| **JavaScript (Engine, UI & Build)** | 110 | 43,396 | 8.1% | Web Audio DSP synthesis, singleton AudioContext, PWA Service Worker, build scripts, search |
| **HTML UI & Jekyll Layouts** | 56 | 21,912 | 4.1% | Tone generators, mind machines, DRY Liquid layouts, meta tags, COCOMO report |
| **SVG Visual Assets** | 1 | 2,386 | 0.4% | Vector diagrams, mandala visualizers, UI iconography |
| **YAML, TOML & Meta Configs** | 10 | 526 | 0.1% | Jekyll configs, Netlify headers, GitHub Actions workflows, Bundler lockfile, root licenses |
| **Testing Harness** | 1 | 470 | 0.1% | Automated TDD Web Audio verification suite (69 unit & integration tests) |
| **AudioWorklets (ES Modules)** | 14 | 296 | 0.1% | Real-time multi-color noise generators (White, Pink, Brown, Green, Blue, Violet) |
| **Total Clean Source Code** | **6,706** | **533,963** | **100.0%** | **533.963 KLOC** |

---

## 2. COCOMO Model Assumptions & Mathematical Formulations

### 2.1 Baseline Parameters
- **Codebase Scale ($KLOC$):** $533.963$ KLOC ($533,963$ physical source lines)
- **Standard Labor Rate:** $\$8,000$ USD per person-month ($\$96,000$ USD / year fully burdened base)
- **Full-Time Equivalent Team Size:** $\text{Team} = \frac{\text{Effort (PM)}}{\text{TDEV (Months)}}$

### 2.2 Development Effort & Schedule Formulas
1. **Organic Mode:** Well-understood web application developed by experienced engineering teams with stable requirements.

   $$
   \text{Effort}_{nom} = 2.4 \times (KLOC)^{1.05} \quad \text{[Person-Months]}
   $$

   $$
   \text{TDEV} = 2.5 \times (\text{Effort}_{nom})^{0.38} \quad \text{[Months]}
   $$

2. **Semi-Detached Mode:** Medium-complexity system combining standard web frameworks with specialized DSP algorithms, real-time audio synthesis, and cross-browser AudioContext lifecycle management.

   $$
   \text{Effort}_{nom} = 3.0 \times (KLOC)^{1.12} \quad \text{[Person-Months]}
   $$

   $$
   \text{TDEV} = 2.5 \times (\text{Effort}_{nom})^{0.35} \quad \text{[Months]}
   $$

3. **Embedded Mode:** High-complexity real-time system with strict browser audio thread timing, DSP constraints, AudioWorklet thread isolation, and PWA offline precache guarantees.

   $$
   \text{Effort}_{nom} = 3.6 \times (KLOC)^{1.20} \quad \text{[Person-Months]}
   $$

   $$
   \text{TDEV} = 2.5 \times (\text{Effort}_{nom})^{0.32} \quad \text{[Months]}
   $$

### 2.3 Software Maintenance Formulas (COCOMO Maintenance Model)
In the COCOMO software maintenance model, annual ongoing engineering effort is proportional to the **Annual Change Traffic (ACT)**—the fraction of the software codebase that is added, modified, or deleted during a given year:

$$
\text{ACT} = \frac{\text{SLOC}_{\text{added}} + \text{SLOC}_{\text{modified}}}{\text{SLOC}_{\text{total}}}
$$

$$
\text{AME} = \text{ACT} \times \text{Effort}_{nom} \quad \text{[Annual Maintenance Effort in Person-Months/Year]}
$$

$$
\text{AMC} = \text{AME} \times \text{Labor Rate} \quad \text{[Annual Maintenance Cost in USD/Year]}
$$

$$
\text{FTE}_{\text{maint}} = \frac{\text{AME}}{12} \quad \text{[Full-Time Equivalent Maintenance Engineers]}
$$

$$
\text{TCO}_{5\text{yr}} = \text{Cost}_{dev} + 5 \times \text{AMC} \quad \text{[5-Year Total Cost of Ownership]}
$$

---

## 3. Comprehensive Valuation & Maintenance Summary

| Model Variant | Initial Dev Effort | Schedule (TDEV) | Dev Staff Size | Initial Dev Cost | Annual Change Traffic (ACT) | Annual Maint Effort (AME) | Annual Maint Staff (FTE) | Annual Maint Cost (AMC) | 5-Year Total Cost of Ownership (TCO) |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Organic** | **1,754.28 PM** | **42.73 mos** | **41.06 devs** | **$14,034,209.37** | **15%** | **263.14 PM/yr** | **21.93 FTE** | **$2,105,131.41/yr** | **$24,559,866.40** |
| **Semi-Detached** | **3,403.56 PM** | **43.06 mos** | **79.03 devs** | **$27,228,501.81** | **20%** | **680.71 PM/yr** | **56.73 FTE** | **$5,445,700.36/yr** | **$54,457,003.62** |
| **Embedded** | **6,750.19 PM** | **42.01 mos** | **160.69 devs** | **$54,001,507.67** | **25%** | **1,687.55 PM/yr** | **140.63 FTE** | **$13,500,376.92/yr** | **$121,503,392.25** |

---

## 4. Granular Work Breakdown Structure (WBS): Development & Maintenance

The table below delineates the specialized engineering work packages spanning historical development, recent CI/CD remediation, modular SCSS architecture, and ongoing maintenance infrastructure:

| Work Package (WBS) | Engineering Domain & Scope | Estimated Hours | Effort (PM) | Valuation (@ $8k/PM) |
| :--- | :--- | :---: | :---: | :---: |
| **WP1: Web Audio DSP Synthesis Engine** | Developed singleton `AudioContext` architecture, user interaction unlock listeners, dual stereo panning nodes, square/sine/sawtooth oscillators, and AudioWorklet noise pipelines. | 140.0 hrs | 0.875 PM | $7,000.00 |
| **WP2: Rife CAFL Presets & Frequency Catalogs** | Curated and structured 25 JSON databases (49 files, 188k lines) encompassing Rife CAFL presets, Solfeggio, Angel, KHZ, 3D, and Monaural frequency matrices with UI generators. | 120.0 hrs | 0.750 PM | $6,000.00 |
| **WP3: PWA Offline Precache & Service Worker** | Configured Google Workbox CLI toolchain, local service worker pre-compilation (`sw-generated.js`), runtime precaching of 209 assets (11.2MB), and zero-network offline fallbacks. | 45.0 hrs | 0.281 PM | $2,250.00 |
| **WP4: Automated TDD Verification Suite** | Engineered 69 automated unit and integration tests across 14 phases (`tests/audio-engine.test.js`) testing Web Audio graphs, frequency schema assertions, autoplay triggers, and precache integrity. | 48.0 hrs | 0.300 PM | $2,400.00 |
| **WP5: GitHub Pages CI/CD Modernization** | Created dual-mode deployment pipeline in `.github/workflows/pages.yml` supporting GitHub Actions Pages artifacts and automated conventional `gh-pages` branch publisher. | 28.0 hrs | 0.175 PM | $1,400.00 |
| **WP6: Netlify Cloud Build & Rate-Limit Fixes** | Eliminated AWS IP unauthenticated GitHub API rate limits (removed `jekyll-github-metadata`), fixed duplicate sitemap plugin conflicts (Exit Code 10 & 1), and streamlined `netlify.toml`. | 16.0 hrs | 0.100 PM | $800.00 |
| **WP7: Multi-Branch Synchronization & Hygiene** | Reconciled divergent commit histories across core tracking branches (`main`, `master`, `dev`, `debug`, `gh-pages`), standardized deployment logs, and preserved 55 `/lab` research assets. | 24.0 hrs | 0.150 PM | $1,200.00 |
| **WP8: DRY Jekyll Architecture & SEO Layouts** | Standardized Liquid layout templates, dynamic metadata tags (OpenGraph, Twitter Cards, CNAME), search index generator, and responsive Bootstrap 5 styling across 6,400+ blog pages. | 60.0 hrs | 0.375 PM | $3,000.00 |
| **WP9: Ongoing Annual Maintenance Operations** | Continuous browser Web Audio API deprecation handling, dependency security patching, Service Worker cache invalidation, and multi-remote git maintenance. | 219.0 hrs/yr | 1.369 PM/yr | $10,950.00/yr |
| **WP10: Modular SCSS & Glassmorphic UI/UX** | Restructured CSS into modular `_sass/` partials (`variables`, `base`, `layout`, `components`, `footer`), engineered Dart Sass build script, glassmorphic blur filters, card elevations, and touch micro-interactions. | 42.0 hrs | 0.263 PM | $2,100.00 |
| **WP11: Engineering Wiki & Architecture Documentation** | Authored comprehensive 7-part engineering wiki knowledge base covering development workflows, DSP audio architecture, UI/UX systems, static constant optimization, and QA standards. | 32.0 hrs | 0.200 PM | $1,600.00 |
| **Total Specialized Engineering** | **Core Audio Platform, Modular SCSS Pipeline, Wiki & Maintenance** | **774.0 hrs** | **4.838 PM** | **$38,700.00** |

---

## 5. COCOMO Intermediate Cost Driver Adjustments (EAF)

To adjust nominal development and maintenance effort for the Brain Beats platform, specific Cost Drivers are evaluated:

| Cost Driver Attribute | Rating | Multiplier | Engineering Rationale |
| :--- | :---: | :---: | :--- |
| **RELY (Required Software Reliability)** | High | 1.15 | Audio DSP crashes or autoplay lockups disrupt user brainwave entrainment sessions. |
| **DATA (Database Size / Complexity)** | High | 1.08 | 25 JSON catalogs comprising 188k lines of frequency tables loaded and searched client-side. |
| **CPLX (Product Complexity)** | High | 1.15 | Real-time Web Audio synthesis, AudioWorklet thread management, and multi-channel stereo panning. |
| **TIME (Execution Time Constraint)** | High | 1.11 | Strict low-latency 44.1kHz / 48kHz audio buffer scheduling without audible glitching or frame drops. |
| **STOR (Main Storage Constraint)** | Nominal | 1.00 | Standard browser RAM consumption; PWA precache optimized to 11.2MB. |
| **VIRT (Virtual Machine Volatility)** | High | 1.15 | Rapidly evolving mobile browser autoplay policies, Web Audio standards, and Service Worker APIs. |
| **TURN (Computer Turnaround Time)** | Low | 0.87 | Automated GitHub Actions CI/CD workflows and fast local pre-compilation. |
| **ACAP (Analyst Capability)** | Very High | 0.71 | Specialized understanding of acoustic entrainment, psychoacoustics, and DSP audio synthesis. |
| **AEXP (Applications Experience)** | High | 0.91 | Deep experience with Jekyll static site generation, PWA Workbox, modular SCSS, and Web Audio APIs. |
| **PCAP (Programmer Capability)** | Very High | 0.70 | High-efficiency modern JavaScript, automated TDD testing harness, and Git release engineering. |
| **TOOL (Modern Programming Tools)** | High | 0.91 | Advanced CI/CD pipelines, Dart Sass compiler, Bundler, Workbox CLI, and automated Node.js test runners. |
| **MODP (Modern Programming Practices)** | High | 0.91 | TDD verification, declarative GitHub Actions, DRY Liquid layouts, modular SCSS, and conventional commits. |

### Effort Adjustment Factor (EAF) Formulation & Valuation

In the COCOMO 81 Intermediate model, the **Effort Adjustment Factor (EAF)** is computed as the composite product of all cost driver attribute ratings:

$$
\begin{aligned}
\text{EAF} &= \prod_{i=1}^{15} \text{Cost Driver}_i \\
&= 1.15 \times 1.08 \times 1.15 \times 1.11 \times 1.00 \times 1.15 \times 0.87 \\
&\quad \times 0.71 \times 0.91 \times 0.70 \times 0.91 \times 0.91 \\
&= \mathbf{0.672}
\end{aligned}
$$

### Post-Adjustment Platform Valuation ($\text{Effort}_{\text{adj}} = \text{Effort}_{\text{nominal}} \times \text{EAF}$):

| Deployment Mode | Nominal Effort | Adjusted Effort (EAF 0.672) | Adjusted Dev Cost ($8k/PM) |
| :--- | :---: | :---: | :---: |
| **Organic Mode** | 1,754.28 PM | **1,178.87 PM** | **$9,430,988.70 USD** |
| **Semi-Detached Mode (Baseline)** | 3,403.56 PM | **2,287.19 PM** | **$18,297,553.22 USD** |
| **Embedded Mode** | 6,750.19 PM | **4,536.13 PM** | **$36,289,013.15 USD** |

---

## 6. Supply-Chain Cost Segregation

COCOMO estimates engineering labor; it does not price third-party model access, developer seats, hosting, or CI/CD consumption. The **$8,000 per person-month rate is labor only**. The AI and service usage in scope was covered by free credits provided by the respective companies, so the direct cash cost during the credit-covered period was **$0**. Credit consumption and its equivalent list-price value were not provided; that in-kind value is therefore unquantified. Costs after credits expire or are exhausted are not included.

The WBS below reorganizes the specialized engineering estimate from Section 4. Its targeted work-package scope is separate from the full-codebase COCOMO scenarios in Sections 3 and 5; **do not add the two labor estimates together**.

| Supply-chain stream | Included scope / dependencies | WBS mapping | Estimated labor | Labor valuation |
| :--- | :--- | :---: | :---: | :---: |
| **Product engineering** | Web Audio DSP, frequency catalogs, Jekyll layouts, modular SCSS | WP1, WP2, WP8, WP10 | 362 hrs (2.263 PM) | $18,100 one-time |
| **Quality assurance** | Automated TDD and integration verification | WP4 | 48 hrs (0.300 PM) | $2,400 one-time |
| **Build, CI/CD & release** | Workbox/PWA build, GitHub Pages pipeline, Netlify configuration, branch/release hygiene | WP3, WP5, WP6, WP7 | 113 hrs (0.706 PM) | $5,650 one-time |
| **Engineering documentation** | Developer wiki and architecture documentation | WP11 | 32 hrs (0.200 PM) | $1,600 one-time |
| **AI-assisted development tools** | Gemini, Anthropic Claude (Claude Code), Qwen, DeepSeek R1, and GitHub Copilot using selected OpenAI model(s) | Not separately estimated in WBS | Not provided | $0 direct spend while covered by free quota / credits |
| **Ongoing maintenance** | Browser/API updates, dependency patches, cache and repository maintenance | WP9 | 219 hrs/year (1.369 PM/year) | $10,950/year |
| **Specialized WBS subtotal** | One-time work above plus one year of WP9 maintenance | WP1–WP11 | 774 hrs in year one | $38,700 in year one |

The year-one subtotal combines one-time work ($27,750) with one year of estimated maintenance ($10,950). For later years, use the annual maintenance line rather than repeating the one-time WBS work.

### External supplier and service cost ledger

| Supplier / service | Cost classification | Cost driver / credit treatment | Current estimate |
| :--- | :--- | :--- | :---: |
| **Google Gemini** | AI model access | Usage covered by company-provided free credits; token usage and credit value not supplied | $0 direct spend during covered period |
| **Anthropic Claude (Claude Code)** | AI model access & code reasoning | Usage covered by company-provided free quota / trial credits; token usage and context window in-kind value tracked | $0 direct spend during covered period |
| **Qwen** | AI model access or self-hosted inference | Usage covered by company-provided free credits; token usage and credit value not supplied | $0 direct spend during covered period |
| **DeepSeek R1** | AI model access or self-hosted inference | Usage covered by company-provided free credits; token usage and credit value not supplied | $0 direct spend during covered period |
| **GitHub Copilot / selected OpenAI model(s)** | Developer-tool seats; model access per the selected Copilot plan | Usage covered by company-provided free credits; seat and model usage breakdown not supplied | $0 direct spend during covered period |
| **GitHub Actions and Pages** | CI/CD and hosting | Usage covered by company-provided free credits; runner, storage, and bandwidth consumption not supplied | $0 direct spend during covered period |
| **Netlify** | CI/CD and hosting | Usage covered by company-provided free credits; build, bandwidth, and hosting consumption not supplied | $0 direct spend during covered period |
| **Workbox and other open-source build tools** | Build tooling | Open-source license cost; engineering labor is counted in the WBS | $0 license cost assumed |

The $0 figures describe direct cash spend only while the reported credits covered usage; they do not imply that the services have no list-price or economic value, nor that future usage will remain free. For a retrospective economic-value estimate, record each provider's credited amount or usage and apply the relevant rate card. For future budgets, use the applicable post-credit rates and projected usage. For self-hosted models, include inference infrastructure and operating labor if applicable. Do not count a Copilot seat as separate API spend unless billing records show an additional charge.

### Lifetime Git Patch and Dependency Add-On Totals

Patch totals cover all history reachable from the current `HEAD`, computed with `git log --no-merges --no-renames --numstat`. They include text changes to all tracked paths, exclude binary line counts and merge commits, and count renamed files as deletions plus additions.

| Lifetime patch scope | Non-merge commits | File-change rows | Added patch lines | Deleted patch lines | Gross patch churn |
| :--- | ---: | ---: | ---: | ---: | ---: |
| **All history reachable from HEAD** | 9,452 | 173,440 | 14,909,599 | 3,987,855 | 18,897,454 |

Using the report's 533,963-SLOC baseline, lifetime gross patch churn is `18,897,454 / 533,963 = 35.39x` (3,539.09%). These are cumulative patch operations, not unique source lines or COCOMO Annual Change Traffic (ACT): repeated edits count repeatedly, and a modified line can appear as both an addition and a deletion. Do not substitute this measure for the scenario ACT assumptions in Section 3.

Current dependency add-ons are counted from the committed npm and Ruby lockfiles. Lockfile entries include transitive dependencies and platform-specific variants; the unique-name total counts names separately by ecosystem. These are locked dependency records, not a claim that every package is currently installed or used at runtime.

| Dependency ecosystem | Lockfile entries | Unique ecosystem-package names |
| :--- | ---: | ---: |
| **npm** (`package-lock.json`) | 571 | 520 |
| **Ruby gems** (`Gemfile.lock`) | 75 | 43 |
| **Total current add-ons** | **646** | **563** |

Under the report's existing assumption that these dependencies have no license fees, direct add-on license cost is **$0 assumed**. Package counts do not establish integration or maintenance labor; that labor is not separately priced here.

### Lifetime Patch-Volume-Equivalent COCOMO Cost

For a volume-based comparison only, the 14,909,599 added patch lines are treated as if they were 14,909.599 KLOC of newly developed, unique source code. The resulting figures are **not actual historical spend or a valuation of unique surviving code**: Git counts repeated additions across commits, including revisions to the same lines. Do not add these alternative estimates to the current-codebase valuation or the WBS/TCO.

| COCOMO mode | Nominal effort | Nominal cost (@ $8,000/PM) | EAF-adjusted effort (0.672) | EAF-adjusted cost |
| :--- | ---: | ---: | ---: | ---: |
| **Organic** | 57,856.28 PM | $462,850,236.46 | 38,879.42 PM | $311,035,358.90 |
| **Semi-Detached** | 141,710.86 PM | $1,133,686,879.27 | 95,229.70 PM | $761,837,582.87 |
| **Embedded** | 366,827.31 PM | $2,934,618,448.78 | 246,507.95 PM | $1,972,063,597.58 |

**Deployment record (2026-10-31):** Source commit `908a0f369` is published on `main` and `master`. GitHub Actions generated `gh-pages` deployment commit `bdbfdf896`, which includes the COCOMO patch-volume cost section.

**Fully loaded five-year TCO (constant annual run rate):**

$$
\text{TCO}_{5\text{yr},\text{loaded}} = \text{COCOMO TCO}_{5\text{yr}} + \sum_{y=1}^{5} \left( \text{AI / Tool Charges after Credits}_y + \text{CI/CD \& Hosting Charges after Credits}_y \right)
$$

For the credit-covered period, the reported direct operating charge is $0. Future-year charges should only be added for usage not covered by available credits. This adds non-labor operating charges to the selected COCOMO scenario, whose existing maintenance estimate already includes maintenance labor. Credit value is excluded from cash TCO; add it separately only when producing an economic-value view. Future charges remain unestimated until credit balances, expiry, usage forecasts, and applicable rates are known.

---

## 7. Key Value Drivers & Strategic Assets

1. **Rife CAFL Presets & Frequency Research Library:** Comprehensive digital archive of 25 structured laboratory catalogs, providing instant client-side frequency lookup and multi-wave audio playback.
2. **Deterministic Web Audio DSP Engine:** Robust singleton audio architecture with seamless mobile autoplay unlock, stereo panning, dynamic gain smoothing, and AudioWorklet noise synthesis.
3. **Modular SCSS Architecture & Dart Sass Transpiler:** Scalable SCSS partials architecture with automated npm compilation pipeline and cross-device responsive layout consistency.
4. **PWA Offline Precache Capability:** Full Progressive Web App functionality backed by Google Workbox, allowing zero-latency offline operation with 209 precached core assets.
5. **Automated TDD Quality Assurance:** Comprehensive 69-test suite across 14 phases ensuring 100% regression-free updates across synthesis logic, frequency schemas, and service worker assets.
6. **Unified Multi-Cloud CI/CD Infrastructure:** Dual automated deployment pipelines for GitHub Pages and Netlify, fully resilient against cloud API rate-limiting and build timeouts.
7. **Comprehensive Engineering Wiki & Knowledge Base:** Documented 7-part internal technical wiki detailing development workflows, DSP audio pipelines, UI/UX systems, static constant optimization, and QA standards.

---

<div align="center">
<sub>&copy; Brain Beats Pro. All calculations based on COCOMO 81 software economics and maintenance models.</sub>
</div>
