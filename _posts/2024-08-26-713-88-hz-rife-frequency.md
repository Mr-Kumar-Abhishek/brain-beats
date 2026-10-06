---
layout: post
title: "713.88 hz - Rife Frequency"
description: "Rife Frequency healing preset for mental relief for Griseofulvin"
subject: "713.88 hz - Rife Frequency"
apple-title: "713.88 hz - Rife Frequency"
app-name: "713.88 hz - Rife Frequency"
tweet-title: "713.88 hz - Rife Frequency"
tweet-description: "Rife Frequency healing preset for mental relief for Griseofulvin"
date: 2024-08-26
keywords: "frequency benefits, Brain Beats, Frequencies, brainwave entrainment, sound therapy, 713.88 hz, rife frequency, griseofulvin, antifungal resonance, CAFL frequencies"
---

The **713.88 Hz Rife Frequency** is a specialized fractional electro-acoustic resonance frequency documented in the Consolidated Annotated Frequency List (CAFL) for biophysical tuning associated with **Griseofulvin** molecular resonance and secondary fungal mitigation. Vibrating in the fifth musical octave at approximately **F5 (+38.0 cents)**, this precise decimal frequency aligns with the molecular vibratory signature of griseofulvin—the antifungal compound historically produced by *Penicillium griseofulvum* to disrupt fungal tubulin microtubules.

In vibrational biology and frequency therapy, 713.88 Hz is used to mimic the antimycotic energetic properties of griseofulvin without pharmaceutical side effects, inhibiting fungal mitosis in dermatophyte infections of the skin, hair, and nails (ringworm, tinea cruris, tinea pedis).

---

### Core Biophysical Indications & Target Applications

The 713.88 Hz frequency preset is documented for dermatophyte and fungal cellular regulation:

- **Primary Pathological Targets:** Dermatophytoses (*Trichophyton*, *Microsporum*, *Epidermophyton* species), tinea capitis, onychomycosis (nail fungal infections), energetic cellular detoxification of griseofulvin residues.
- **Biophysical Resonance Mechanisms:** Micro-acoustic oscillation matching the spindle-microtubule binding resonance of griseofulvin; sonic inhibition of fungal mitotic spindle formation and arrest of fungal cell division at metaphase; promotion of healthy keratinocyte turnover without systemic hepatic strain.
- **Primary Delivery Modalities:** Pure Tone Synthesizers, Isochronic Modulation, Monaural/Binaural Beats, and Direct Contact Vibroacoustic Transducers.

```
+-------------------------------------------------------------------------+
|                 713.88 Hz ACOUSTIC HARMONIC STRUCTURE                   |
+-------------------------------------------------------------------------+
|  Sub-octaves:     178.47 <---> 356.94                                   |
|  Fundamental:     713.88 Hz  (F5 (+38.0 cents))                         |
|  Overtones:       1427.76 <---> 2141.64 <---> 2855.52                   |
+-------------------------------------------------------------------------+
```

---

### Mathematical and Acoustic Foundations

The fundamental frequency $f_0 = 713.88\text{ Hz}$ exhibits the following harmonic relationships:

1. **Octave Sub-harmonics ($f_n = f_0 \times 2^{-n}$):**
   - **Sub-harmonic**: `356.94 Hz (Octave -1)`
   - **Sub-harmonic**: `178.47 Hz (Sub-octave -2)`
   - **Sub-harmonic**: `89.24 Hz (High Gamma foundation)`

2. **Upper Harmonics & Overtones ($f_n = f_0 \times n$):**
   - **Overtone**: `1427.76 Hz (Octave +1)`
   - **Overtone**: `2141.64 Hz (Harmonic 3 - Perfect 5th overtone)`
   - **Overtone**: `2855.52 Hz (Octave +2)`

3. **Musical Scale Correspondence:**
   - Standard Pitch Baseline ($A_4 = 440\text{ Hz}$)
   - Calculated Semitone Position: **F5 (+38.0 cents)**
   - Interval Ratio: $\frac{713.88}{440} \approx 1.62245$

---

### Consolidated Annotated Frequency List (CAFL) Cross-References

Within specialized CAFL molecular and antifungal series, 713.88 Hz is integrated into dermatophyte regimens:

- **Griseofulvin Molecular Signature**: `713.88 Hz`
- **Dermatophytosis / Ringworm Comprehensive**: `713.88 Hz, 465 Hz, 784 Hz, 880 Hz, 344 Hz`
- **Tinea Pedis / Athlete's Foot Protocol**: `713.88 Hz, 752 Hz, 922 Hz, 1550 Hz`
- **Onychomycosis Nail Protocol**: `713.88 Hz, 802 Hz, 880 Hz, 1550 Hz`

Practitioners frequently pair 713.88 Hz with general lymphatic and detox frequencies (787 Hz, 880 Hz) to clear fungal debris safely through the bloodstream.

---

### Web Audio API Implementation & Synthesis Engine

Synthesize the exact **713.88 Hz** pure tone directly in modern web browsers using the standard [Web Audio API](file:///var/www/brain-beats/js/main.js):

```javascript
/**
 * Brain Beats - Precision Pure Tone Generator
 * Target Frequency: 713.88 Hz (Griseofulvin & Dermatophyte Resonance Node)
 */
class PrecisionToneSynthesizer {
    constructor(frequency = 713.88) {
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

1. **Acoustic Waveform Selection:** Ultra-clean Sine Wave with 8 Hz Alpha rhythm pulsing to encourage cutaneous cellular repair while maintaining calming bio-entrainment.
2. **Session Duration & Cadence:** 20–30 minutes daily; during active skin fungal outbreaks, up to twice daily until symptoms diminish.
3. **Headphones vs. Transducers:** Stereo headphones for auditory entrainment; localized acoustic probes or water-immersion transducers for nail and dermal contact.
4. **Hydration Protocol:** Drink 400–500 mL of clean mineralized water before and after sessions to optimize cellular conductivity.
5. **Volume Settings:** Moderate volume between 45% and 60% for a smooth listening session.

---

### Interactive Generator & Experience

Listen to the 713.88 Hz frequency directly in the [Brain Beats Online Generator](file:///var/www/brain-beats/pure-tone-generator.html) or explore dedicated multi-frequency sweeps in our [Solfeggio & Rife Presets](file:///var/www/brain-beats/rife-frequencies-cafl-xref.html).
