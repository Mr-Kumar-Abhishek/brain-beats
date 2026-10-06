---
layout: post
title: "664 hz - Rife Frequency"
description: "Rife Frequency healing preset for mental relief for Bacterial infections general, Cancer general 2, Cancer glioblastoma, Cancer maintenance secondary, Chemtrail detox, Chronic fatigue syndrome, Complete early crane, Crohns and other bowel problems v, Dental infection 2, Eczema, Emotional ties to diseases, Fatigue general, Fibromyalgia, General prophylaxis, Herpes simplex I, Herpes TR, Herpes zoster, Influenza 2005 fall TR, Influenza grippe 1986 tri, Influenza overnight TR, Lupus SLE secondary, Lyme 2, Mycoplasma general, Psoriasis, Salmonella, Salmonella comp, Salmonella typhi, Stomach disorders, Tuberculinum, Ulcers general, West Nile 2"
subject: "664 hz - Rife Frequency"
apple-title: "664 hz - Rife Frequency"
app-name: "664 hz - Rife Frequency"
tweet-title: "664 hz - Rife Frequency"
tweet-description: "Rife Frequency healing preset for mental relief for Bacterial infections general, Cancer general 2, Cancer glioblastoma, Cancer maintenance secondary, Chemtrail detox, Chronic fatigue syndrome, Complete early crane, Crohns and other bowel problems v, Dental infection 2, Eczema, Emotional ties to diseases, Fatigue general, Fibromyalgia, General prophylaxis, Herpes simplex I, Herpes TR, Herpes zoster, Influenza 2005 fall TR, Influenza grippe 1986 tri, Influenza overnight TR, Lupus SLE secondary, Lyme 2, Mycoplasma general, Psoriasis, Salmonella, Salmonella comp, Salmonella typhi, Stomach disorders, Tuberculinum, Ulcers general, West Nile 2"
date: 2024-07-27
keywords: "frequency benefits, Brain Beats, Frequencies, brainwave entrainment, sound therapy, 664 hz, rife frequency, CAFL frequencies"
---

The **664 Hz Rife Frequency** is one of the premier master therapeutic resonance nodes cataloged throughout the Consolidated Annotated Frequency List (CAFL) and John Crane's historical clinical protocols. Resonating within the fifth musical octave at approximately **E5 (+12.5 cents)**, this frequency is documented for broad-spectrum anti-pathogenic shear, immune modulation, inflammatory bowel soothing (Crohn's, Ulcers), and resolving multi-system autoimmune fatigue syndromes (CFS, Fibromyalgia, Lupus).

In bio-resonance science, 664 Hz represents a cornerstone systemic frequency—providing potent acoustic energy capable of simultaneously dismantling complex bacterial biofilms, dampening neuro-inflammatory triggers, and revitalizing exhausted mitochondrial energetics.

---

### Core Biophysical Indications & Target Applications

The 664 Hz frequency preset has been historically documented across an extensive array of chronic clinical indications:

- **Primary Pathological Targets:** Bacterial infections general (*Salmonella typhi*, Dental infection 2), Chronic Fatigue Syndrome (CFS) & Fibromyalgia, Autoimmune flare-ups (Lupus SLE secondary, Psoriasis, Eczema), Inflammatory bowel disease (Crohn's, Peptic ulcers), Viral syndromes (Herpes zoster, West Nile 2, Influenza overnight TR), Lyme 2 & Mycoplasma.
- **Biophysical Resonance Mechanisms:** Resonant destabilization of bacterial outer lipid membranes; acoustic suppression of hyper-active pro-inflammatory cytokines (TNF-alpha, IL-6) in mucosal linings; restoration of enteric nervous system signaling in gastrointestinal tissues; stimulation of cellular lymphatic clearance.
- **Primary Delivery Modalities:** Pure Tone Synthesizers, Isochronic Modulation, Monaural/Binaural Beats, and Full-Body Vibroacoustic Sound Beds.

```
+-------------------------------------------------------------------------+
|                  664 Hz ACOUSTIC HARMONIC STRUCTURE                    |
+-------------------------------------------------------------------------+
|  Sub-octaves:     166.00 <---> 332.00                                   |
|  Fundamental:     664.00 Hz  (E5 (+12.5 cents))                         |
|  Overtones:       1328.00 <---> 1992.00 <---> 2656.00                   |
+-------------------------------------------------------------------------+
```

---

### Mathematical and Acoustic Foundations

The fundamental frequency $f_0 = 664.0\text{ Hz}$ exhibits clean harmonic intervals throughout the audible spectrum:

1. **Octave Sub-harmonics ($f_n = f_0 \times 2^{-n}$):**
   - **Sub-harmonic**: `332.00 Hz (Octave -1)`
   - **Sub-harmonic**: `166.00 Hz (Sub-octave -2)`
   - **Sub-harmonic**: `83.00 Hz (Gamma foundation)`

2. **Upper Harmonics & Overtones ($f_n = f_0 \times n$):**
   - **Overtone**: `1328.00 Hz (Octave +1)`
   - **Overtone**: `1992.00 Hz (Perfect 5th overtone)`
   - **Overtone**: `2656.00 Hz (Octave +2)`

3. **Musical Scale Correspondence:**
   - Standard Pitch Baseline ($A_4 = 440\text{ Hz}$)
   - Calculated Semitone Position: **E5 (+12.5 cents)**
   - Interval Ratio: $\frac{664.0}{440} \approx 1.50909$

---

### Consolidated Annotated Frequency List (CAFL) Cross-References

Within historical frequency compendiums, 664 Hz appears as a cornerstone node in foundational protocols:

- **Bacterial Infections General**: `664 Hz, 727 Hz, 787 Hz, 880 Hz, 802 Hz`
- **Chronic Fatigue & Fibromyalgia**: `664 Hz, 120 Hz, 424 Hz, 464 Hz, 880 Hz`
- **Crohn's & Bowel Problems**: `664 Hz, 727 Hz, 787 Hz, 880 Hz, 10000 Hz`
- **Salmonella typhi**: `664 Hz, 1522 Hz, 972 Hz, 727 Hz`
- **Complete Early Crane Series**: `664 Hz, 727 Hz, 787 Hz, 800 Hz, 880 Hz`

As a master general frequency, 664 Hz is routinely incorporated at both the beginning and conclusion of comprehensive electro-therapy sessions to ensure broad systemic stabilization.

---

### Web Audio API Implementation & Synthesis Engine

Synthesize the exact **664 Hz** pure tone directly in modern web browsers using the standard [Web Audio API](file:///var/www/html/js/main.js):

```javascript
/**
 * Brain Beats - Precision Pure Tone Generator
 * Target Frequency: 664 Hz (Crane Master Node)
 */
class PrecisionToneSynthesizer {
    constructor(frequency = 664.0) {
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

1. **Acoustic Waveform Selection:** Harmonic Pure Sine Wave with gentle 10 Hz Alpha isochronic entrainment for whole-body immune regulation and parasympathetic recovery.
2. **Session Duration & Cadence:** 20–30 minutes daily; ideal for full-body revitalizing meditation and fatigue recovery.
3. **Headphones vs. Transducers:** Over-ear studio headphones for neurological entrainment; full-body vibroacoustic cushions for deep somatic and visceral absorption.
4. **Hydration Protocol:** Drink 500 mL of pure spring water with electrolyte minerals 15 minutes before the session to assist metabolic clearance.
5. **Volume Settings:** Keep volume between 40% and 65% for comfortable, sustained auditory immersion without fatigue.

---

### Interactive Generator & Experience

Listen to the 664 Hz frequency directly in the [Brain Beats Online Generator](file:///var/www/html/pure-tone.html) or explore dedicated multi-frequency sweeps in our [Solfeggio & Rife Presets](file:///var/www/html/presets.html).


