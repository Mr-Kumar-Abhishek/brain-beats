---
layout: post
title: "705 hz - Rife Frequency"
description: "Rife Frequency healing preset for mental relief for Coxsackie B2, Fusarium oxysporum, Helicobacter pylori, Helicobacter pylori 2, Neurospora sitophila"
subject: "705 hz - Rife Frequency"
apple-title: "705 hz - Rife Frequency"
app-name: "705 hz - Rife Frequency"
tweet-title: "705 hz - Rife Frequency"
tweet-description: "Rife Frequency healing preset for mental relief for Coxsackie B2, Fusarium oxysporum, Helicobacter pylori, Helicobacter pylori 2, Neurospora sitophila"
date: 2024-08-19
keywords: "frequency benefits, Brain Beats, Frequencies, brainwave entrainment, sound therapy, 705 hz, rife frequency, CAFL frequencies"
---

The **705 Hz Rife Frequency** is a formidable gastric and mycotic resonance node cataloged in the Consolidated Annotated Frequency List (CAFL) for gastrointestinal bacteria (**Helicobacter pylori**, Helicobacter pylori 2), enteroviral strains (**Coxsackie B2**), and resilient agricultural/environmental fungal molds (**Fusarium oxysporum**, **Neurospora sitophila** / red bread mold). Positioned in the fifth musical octave at approximately **F5 (+16.3 cents)**, this frequency vibrates against stubborn peptic biofilms and fungal hyphae.

In clinical electro-frequency research, 705 Hz is applied to protect gastric mucosa, alleviate burning epigastric discomfort, and eradicate environmental mycotoxin producers from the digestive tract.

---

### Core Biophysical Indications & Target Applications

The 705 Hz frequency preset is documented for several critical clinical protocols:

- **Primary Pathological Targets:** *Helicobacter pylori* (gastric ulcers, chronic gastritis, duodenitis), Coxsackie virus B2 (pleurodynia, aseptic meningitis), *Fusarium oxysporum* (vascular wilt fungus, onychomycosis), *Neurospora sitophila* (red bread mold).
- **Biophysical Resonance Mechanisms:** Resonant destabilization of *H. pylori* urease enzymatic shell and outer membrane proteins; acoustic stress shearing fungal mycelial networks and septal walls; stimulation of gastric mucosal prostaglandin and bicarbonate secretion; inhibition of enteroviral capsid assembly.
- **Primary Delivery Modalities:** Pure Tone Synthesizers, Isochronic Modulation, Monaural/Binaural Beats, and Direct Epigastric Acoustic Transducers.

```
+-------------------------------------------------------------------------+
|                  705 Hz ACOUSTIC HARMONIC STRUCTURE                    |
+-------------------------------------------------------------------------+
|  Sub-octaves:     176.25 <---> 352.50                                   |
|  Fundamental:     705.00 Hz  (F5 (+16.3 cents))                         |
|  Overtones:       1410.00 <---> 2115.00 <---> 2820.00                   |
+-------------------------------------------------------------------------+
```

---

### Mathematical and Acoustic Foundations

The fundamental frequency $f_0 = 705.0\text{ Hz}$ exhibits orderly harmonic interval relationships:

1. **Octave Sub-harmonics ($f_n = f_0 \times 2^{-n}$):**
   - **Sub-harmonic**: `352.50 Hz (Octave -1)`
   - **Sub-harmonic**: `176.25 Hz (Sub-octave -2)`
   - **Sub-harmonic**: `88.13 Hz (Gamma foundation)`

2. **Upper Harmonics & Overtones ($f_n = f_0 \times n$):**
   - **Overtone**: `1410.00 Hz (Octave +1)`
   - **Overtone**: `2115.00 Hz (Perfect 5th overtone)`
   - **Overtone**: `2820.00 Hz (Octave +2)`

3. **Musical Scale Correspondence:**
   - Standard Pitch Baseline ($A_4 = 440\text{ Hz}$)
   - Calculated Semitone Position: **F5 (+16.3 cents)**
   - Interval Ratio: $\frac{705.0}{440} \approx 1.60227$

---

### Consolidated Annotated Frequency List (CAFL) Cross-References

Within historical frequency compendiums, 705 Hz is a key component in gastrointestinal and mycotic suites:

- **Helicobacter Pylori Protocol**: `705 Hz, 676 Hz, 677 Hz, 727 Hz, 880 Hz`
- **Coxsackie B2 Series**: `705 Hz, 465 Hz, 727 Hz, 802 Hz, 880 Hz`
- **Fusarium Mold Cleansing**: `705 Hz, 102 Hz, 465 Hz, 727 Hz, 787 Hz`
- **Neurospora Sitophila**: `705 Hz, 362 Hz, 465 Hz, 728 Hz, 800 Hz`

Practitioners often recommend alternating 705 Hz with 676 Hz and 727 Hz for full gastric clearance of ulcer-causing bacterial colonies.

---

### Web Audio API Implementation & Synthesis Engine

Synthesize the exact **705 Hz** pure tone directly in modern web browsers using the standard [Web Audio API](file:///var/www/html/js/main.js):

```javascript
/**
 * Brain Beats - Precision Pure Tone Generator
 * Target Frequency: 705 Hz (Helicobacter & Fusarium Node)
 */
class PrecisionToneSynthesizer {
    constructor(frequency = 705.0) {
        this.frequency = frequency;
        this.audioCtx = null;
        this.oscillator = null;
        this.gainNode = null;
    }

    initialize() {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        this.audioCtx = new AudioContextClass();
        this.gainNode = this.audioCtx.createGain();
        this.gainNode.connect(this.audioCtx.destination);
    }

    start(volume = 0.5) {
        if (!this.audioCtx) this.initialize();
        if (this.audioCtx.state === 'suspended') {
            this.audioCtx.resume();
        }

        // Configure Oscillator Node
        this.oscillator = this.audioCtx.createOscillator();
        this.oscillator.type = 'sine';
        this.oscillator.frequency.setValueAtTime(this.frequency, this.audioCtx.currentTime);

        // Anti-click Soft Ramp Envelope
        const now = this.audioCtx.currentTime;
        this.gainNode.gain.setValueAtTime(0.001, now);
        this.gainNode.gain.exponentialRampToValueAtTime(Math.max(volume, 0.001), now + 0.05);

        this.oscillator.connect(this.gainNode);
        this.oscillator.start(now);
        console.log(`[Brain Beats] Synthesizing ${this.frequency} Hz with ${volume * 100}% output gain`);
    }

    stop() {
        if (!this.oscillator || !this.audioCtx) return;
        const now = this.audioCtx.currentTime;
        this.gainNode.gain.setValueAtTime(this.gainNode.gain.value, now);
        this.gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.05);
        this.oscillator.stop(now + 0.06);
        setTimeout(() => {
            if (this.oscillator) {
                this.oscillator.disconnect();
                this.oscillator = null;
            }
        }, 70);
    }
}

// Example usage:
// const generator = new PrecisionToneSynthesizer();
// generator.start(0.60);
```

---

### Optimal Listening & Clinical Protocol Guidelines

1. **Acoustic Waveform Selection:** Harmonic Pure Sine Wave with gentle 10 Hz Alpha pulsing to balance the enteric nervous system (gut-brain axis).
2. **Session Duration & Cadence:** 20–30 minutes daily, preferably on an empty stomach 30 minutes before meals.
3. **Headphones vs. Transducers:** Over-ear headphones or vibroacoustic transducers placed over the solar plexus / upper epigastrium.
4. **Hydration Protocol:** Drink 300–400 mL of cabbage juice or pure spring water prior to the session to soothe mucosal lining.
5. **Volume Settings:** Moderate volume between 40% and 60% is optimal.

---

### Interactive Generator & Experience

Listen to the 705 Hz frequency directly in the [Brain Beats Online Generator](file:///var/www/html/pure-tone.html) or explore dedicated multi-frequency sweeps in our [Solfeggio & Rife Presets](file:///var/www/html/presets.html).

