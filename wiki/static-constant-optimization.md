# Static Constant Optimization & Computational Efficiency

This document details the core computational optimization philosophy implemented across **Brain Beats**: **pre-computing invariant constants to eliminate real-time CPU cycles, prevent audio thread jitter, and minimize battery and resource consumption.**

---

## 1. The Core Optimization Principle

> **"Never recompute at runtime what is mathematically invariant and can be provided directly as a static constant."**

In real-time digital signal processing (DSP) and client-side web applications, dynamic recalculations performed inside rendering loops, event listeners, or audio synthesis pipelines introduce unnecessary CPU overhead, floating-point rounding drift, and garbage collection pauses.

By resolving mathematical derivations into pre-computed static constants, Brain Beats achieves:
- **$O(1)$ Constant-Time Execution**: Lookups and parameter assignments execute in a single instruction without loop iterations or branching logic.
- **Glitch-Free Audio Performance**: Zero thread-stalling or buffer under-runs in the Web Audio thread.
- **Deterministic Mathematical Precision**: Guaranteed identical values across all hardware architectures, mobile browsers, and in-house server nodes.
- **Battery & Thermal Efficiency**: Minimizes power usage on client devices during long-duration audio sessions (e.g., overnight sleep or meditation presets).

---

## 2. Infrasound & Octave Threshold Pre-Calculations

Frequencies below the human auditory threshold ($< 20\text{ Hz}$) cannot be physically heard by human ears or reproduced faithfully by standard headphones without harmonic octave shifting ($f_{\text{audible}} = f \times 2^n$).

Instead of re-running dynamic iterative `while` loops during active playback, common sub-threshold targets are resolved into pre-computed static anchor constants:

| Target Brainwave / Biological Node | Original Sub-Threshold ($f$) | Multiplier ($2^n$) | Pre-Computed Static Pitch ($f_{\text{audible}}$) | Musical Note Equivalent |
| :--- | :--- | :--- | :--- | :--- |
| **Epsilon Wave** | `0.5 Hz` | $2^6 = 64$ | **`32.00 Hz`** | $C_1$ |
| **Deep Delta Wave** | `1.5 Hz` | $2^5 = 32$ | **`48.00 Hz`** | $G_0$ |
| **Delta Foundation** | `2.0 Hz` | $2^4 = 16$ | **`32.00 Hz`** | $C_1$ |
| **Delta / Theta Cusp** | `4.0 Hz` | $2^3 = 8$ | **`32.00 Hz`** | $C_1$ |
| **Theta Meditation** | `6.0 Hz` | $2^2 = 4$ | **`24.00 Hz`** | $F^\sharp_0$ |
| **Schumann Primary Resonance** | `7.83 Hz` | $2^2 = 4$ | **`31.32 Hz`** | $B_0$ |
| **Alpha Baseline** | `10.0 Hz` | $2^1 = 2$ | **`20.00 Hz`** | $E_0$ (auditory threshold) |
| **Beta Peak** | `14.0 Hz` | $2^1 = 2$ | **`28.00 Hz`** | $A_0$ |

---

## 3. Implementation Patterns Across the Codebase

### 3.1. Preset Databases (`json/*.json`)
All 25 preset catalog files store exact, ready-to-synthesize numerical values directly. Frequencies, channel panning coordinates, and phase offsets are pre-calculated before disk serialization, avoiding runtime string parsing or dynamic recalculations during preset switching.

### 3.2. Audio Engine Boundaries (`js/main.js`)
Where dynamic input is accepted from user-facing forms, `adjustFrequency(frequency)` utilizes fixed lower (`20`) and upper (`20000`) boundary constants with standard fallback constants (`440` Hz concert pitch), safeguarding the audio engine against invalid, zero, or out-of-range inputs in constant time.

### 3.3. Volume & Gain Mapping
Volume conversion avoids computationally expensive logarithmic re-derivations per audio buffer:
```javascript
// O(1) Linear Gain Scaling
var prog_volume = user_volume / 100;
```
For fixed step adjustments, the values are scaled directly to avoid audio thread floating-point drift.

---

## 4. Architectural Impact on In-House Server Deployments

Deploying Brain Beats on an in-house server allows the application to serve pre-computed static bundles with zero server-side computation:
- **Instant Client Hydration**: The client browser loads static HTML, compiled SCSS, and pre-indexed JSON catalogs without runtime compilation.
- **Zero API Latency**: The browser executes tone synthesis immediately using pre-computed parameters, bypassing telecommunication delays and WAN latency.
- **Predictable Resource Allocation**: The in-house server maintains near-zero CPU and memory usage, functioning purely as a high-speed static asset provider.
