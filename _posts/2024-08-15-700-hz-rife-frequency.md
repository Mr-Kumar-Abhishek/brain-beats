---
layout: post
title: "700 hz - Rife Frequency"
description: "Rife Frequency healing preset for mental relief for Complete early crane, Diabetic loading, Epilepsy, Geotrichum candidum, Herpes simplex I 1, Herpes type 1 anec comp, Infections general secondary, Leprosy secondary infection, Malassezia furfur, Sporobolomyces, Tetanus, Trypanosoma gambiense"
subject: "700 hz - Rife Frequency"
apple-title: "700 hz - Rife Frequency"
app-name: "700 hz - Rife Frequency"
tweet-title: "700 hz - Rife Frequency"
tweet-description: "Rife Frequency healing preset for mental relief for Complete early crane, Diabetic loading, Epilepsy, Geotrichum candidum, Herpes simplex I 1, Herpes type 1 anec comp, Infections general secondary, Leprosy secondary infection, Malassezia furfur, Sporobolomyces, Tetanus, Trypanosoma gambiense"
date: 2024-08-15
keywords: "frequency benefits, Brain Beats, Frequencies, brainwave entrainment, sound therapy, 700 hz, rife frequency, CAFL frequencies"
---

The **700 Hz Rife Frequency** is a renowned foundational harmonic frequency within the Consolidated Annotated Frequency List (CAFL) and historic Crane frequency lineages. Calibrated for extensive dermatological anti-fungal action (*Malassezia furfur*, *Geotrichum candidum*), neurological stabilizing protocols (*Epilepsy*, Diabetic loading), neuromuscular anaerobic neurotoxin neutralization (*Clostridium tetani* / Tetanus), and protozoan clearing (*Trypanosoma gambiense*), 700 Hz sits in the fifth musical octave at approximately **F5 (+4.1 cents)**.

In historical resonance therapeutics, 700 Hz is celebrated as a "master clearing node" that combines potent superficial cutaneous mycotic elimination with profound autonomic and neurological soothing effects.

---

### Core Biophysical Indications & Target Applications

The 700 Hz frequency preset is indicated across multiple major biological domains:

- **Primary Pathological Targets:** *Malassezia furfur* (Tinea versicolor, seborrheic dermatitis, dandruff), *Geotrichum candidum*, *Clostridium tetani* (Tetanus), *Trypanosoma gambiense* (African sleeping sickness), Herpes simplex I secondary, Leprosy secondary infections, Complete early crane master series, Diabetic metabolic loading, Epilepsy neural stabilization.
- **Biophysical Resonance Mechanisms:** Resonant destabilization of lipophilic lipid membranes in *Malassezia*; oscillatory neutralization of tetanus neurotoxin (tetanospasmin) synaptic docking proteins; harmonization of hyper-excitable cortical epileptic foci into coherent rhythmic pacing; enhancement of peripheral insulin receptor sensitivity via acoustic micro-vibration.
- **Primary Delivery Modalities:** Pure Tone Synthesizers, Isochronic Modulation, Monaural/Binaural Beats, and Direct Contact Vibroacoustic Transducers.

```
+-------------------------------------------------------------------------+
|                  700 Hz ACOUSTIC HARMONIC STRUCTURE                    |
+-------------------------------------------------------------------------+
|  Sub-octaves:     175.00 <---> 350.00                                   |
|  Fundamental:     700.00 Hz  (F5 (+4.1 cents))                          |
|  Overtones:       1400.00 <---> 2100.00 <---> 2800.00                   |
+-------------------------------------------------------------------------+
```

---

### Mathematical and Acoustic Foundations

The fundamental frequency $f_0 = 700.0\text{ Hz}$ exhibits orderly harmonic interval relationships:

1. **Octave Sub-harmonics ($f_n = f_0 \times 2^{-n}$):**
   - **Sub-harmonic**: `350.00 Hz (Octave -1)`
   - **Sub-harmonic**: `175.00 Hz (Sub-octave -2)`
   - **Sub-harmonic**: `87.50 Hz (Gamma foundation)`

2. **Upper Harmonics & Overtones ($f_n = f_0 \times n$):**
   - **Overtone**: `1400.00 Hz (Octave +1)`
   - **Overtone**: `2100.00 Hz (Perfect 5th overtone)`
   - **Overtone**: `2800.00 Hz (Octave +2)`

3. **Musical Scale Correspondence:**
   - Standard Pitch Baseline ($A_4 = 440\text{ Hz}$)
   - Calculated Semitone Position: **F5 (+4.1 cents)**
   - Interval Ratio: $\frac{700.0}{440} \approx 1.59091$

---

### Consolidated Annotated Frequency List (CAFL) Cross-References

Within historical frequency compendiums, 700 Hz is an anchor frequency across multi-target protocols:

- **Malassezia Furfur (Tinea Versicolor)**: `700 Hz, 222 Hz, 465 Hz, 727 Hz, 787 Hz`
- **Complete Early Crane Series**: `700 Hz, 727 Hz, 776 Hz, 787 Hz, 802 Hz, 880 Hz`
- **Tetanus Neutralization**: `700 Hz, 554 Hz, 628 Hz, 787 Hz`
- **Epilepsy / Neurological Soothing**: `700 Hz, 120 Hz, 125 Hz, 650 Hz`
- **Diabetic Loading**: `700 Hz, 35 Hz, 2127 Hz, 465 Hz`

Because of its versatile multi-system clearance properties, 700 Hz often precedes general antiseptic sweeps (727 Hz, 787 Hz, 880 Hz) in clinical bio-resonance regimens.

---

### Web Audio API Implementation & Synthesis Engine

Synthesize the exact **700 Hz** pure tone directly in modern web browsers using the standard [Web Audio API](file:///var/www/html/js/main.js):

```javascript
/**
 * Brain Beats - Precision Pure Tone Generator
 * Target Frequency: 700 Hz (Master Anti-Mycotic & Crane Node)
 */
class PrecisionToneSynthesizer {
    constructor(frequency = 700.0) {
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

1. **Acoustic Waveform Selection:** Harmonic Pure Sine Wave with gentle 10 Hz Alpha isochronic entrainment for dual cortical stabilization and anti-inflammatory benefit.
2. **Session Duration & Cadence:** 25–35 minutes daily, preferably during evening rest periods.
3. **Headphones vs. Transducers:** Over-ear open-back headphones or full-body vibroacoustic mattresses for systemic delivery.
4. **Hydration Protocol:** Drink 500 mL of clean structured water with trace minerals before and after the session to assist metabolic balance.
5. **Volume Settings:** Keep volume moderate, approximately 45% to 65%, avoiding acoustic discomfort.

---

### Interactive Generator & Experience

Listen to the 700 Hz frequency directly in the [Brain Beats Online Generator](file:///var/www/html/pure-tone.html) or explore dedicated multi-frequency sweeps in our [Solfeggio & Rife Presets](file:///var/www/html/presets.html).

