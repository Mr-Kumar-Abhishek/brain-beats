---
layout: post
title: "713 hz - Rife Frequency"
description: "Rife Frequency healing preset for mental relief for Influenza overnight TR, Influenza virus 1992 1993 secondary, Leukoencephalitis secondary, Malaria, Mucor racemosis secondary, Salmonella"
subject: "713 hz - Rife Frequency"
apple-title: "713 hz - Rife Frequency"
app-name: "713 hz - Rife Frequency"
tweet-title: "713 hz - Rife Frequency"
tweet-description: "Rife Frequency healing preset for mental relief for Influenza overnight TR, Influenza virus 1992 1993 secondary, Leukoencephalitis secondary, Malaria, Mucor racemosis secondary, Salmonella"
date: 2024-08-25
keywords: "frequency benefits, Brain Beats, Frequencies, brainwave entrainment, sound therapy, 713 hz, rife frequency, influenza resonance, CAFL frequencies"
---

The **713 Hz Rife Frequency** is a pivotal multi-target antimicrobial and antiviral resonant frequency cataloged in the Consolidated Annotated Frequency List (CAFL). Resonating in the fifth musical octave at approximately **F5 (+35.9 cents)**, this frequency is applied across several infectious pathogen categories: persistent seasonal influenza strains (**Influenza overnight TR**, **Influenza virus 1992–1993 secondary**), central nervous system inflammatory demyelination (**Leukoencephalitis secondary**), protozoan blood parasites (**Malaria** - *Plasmodium* species), zygomycete fungal molds (**Mucor racemosus secondary**), and enteric bacterial pathogens (**Salmonella** enterica).

In electro-acoustic medicine and sound therapy, 713 Hz acts as an acoustic neutralizer, targeting microbial metabolic enzymatic systems and supporting neuro-immune restoration.

---

### Core Biophysical Indications & Target Applications

The 713 Hz frequency preset is documented for the following clinical and bio-resonance targets:

- **Primary Pathological Targets:** *Influenza* overnight viral clusters, 1992–1993 flu variants, secondary neuro-inflammatory *Leukoencephalitis*, *Plasmodium* trophozoites (*Malaria*), fungal *Mucor racemosus*, *Salmonella* foodborne gastroenteritis.
- **Biophysical Resonance Mechanisms:** Destabilization of influenza hemagglutinin and neuraminidase envelope glycoproteins; mechanical vibratory interference with protozoal digestive vacuoles in erythrocytic stages of malaria; disruption of fungal hyphal septation in Mucor species; inhibition of salmonella bacterial flagellar motility.
- **Primary Delivery Modalities:** Pure Tone Synthesizers, Isochronic Modulation, Monaural/Binaural Beats, and Direct Contact Vibroacoustic Transducers.

```
+-------------------------------------------------------------------------+
|                  713 Hz ACOUSTIC HARMONIC STRUCTURE                    |
+-------------------------------------------------------------------------+
|  Sub-octaves:     178.25 <---> 356.50                                   |
|  Fundamental:     713.00 Hz  (F5 (+35.9 cents))                         |
|  Overtones:       1426.00 <---> 2139.00 <---> 2852.00                   |
+-------------------------------------------------------------------------+
```

---

### Mathematical and Acoustic Foundations

The fundamental frequency $f_0 = 713.0\text{ Hz}$ exhibits clean harmonic interval structures:

1. **Octave Sub-harmonics ($f_n = f_0 \times 2^{-n}$):**
   - **Sub-harmonic**: `356.50 Hz (Octave -1)`
   - **Sub-harmonic**: `178.25 Hz (Sub-octave -2)`
   - **Sub-harmonic**: `89.13 Hz (Gamma harmonic foundation)`

2. **Upper Harmonics & Overtones ($f_n = f_0 \times n$):**
   - **Overtone**: `1426.00 Hz (Octave +1)`
   - **Overtone**: `2139.00 Hz (Harmonic 3 - Perfect 5th overtone)`
   - **Overtone**: `2852.00 Hz (Octave +2)`

3. **Musical Scale Correspondence:**
   - Standard Pitch Baseline ($A_4 = 440\text{ Hz}$)
   - Calculated Semitone Position: **F5 (+35.9 cents)**
   - Interval Ratio: $\frac{713.0}{440} \approx 1.62045$

---

### Consolidated Annotated Frequency List (CAFL) Cross-References

Within CAFL and historical frequency databases, 713 Hz is integrated into systemic immune recovery protocols:

- **Influenza Overnight Protocol**: `713 Hz, 440 Hz, 465 Hz, 727 Hz, 776 Hz, 787 Hz, 880 Hz`
- **Leukoencephalitis Secondary Protocol**: `713 Hz, 324 Hz, 572 Hz, 932 Hz, 1035 Hz, 1079 Hz`
- **Malaria Comprehensive Series**: `713 Hz, 20 Hz, 28 Hz, 222 Hz, 555 Hz`
- **Salmonella Enteric Recovery**: `713 Hz, 1522 Hz, 972 Hz, 664 Hz, 718 Hz, 719 Hz`

Practitioners commonly run 713 Hz in alternation with 727 Hz and 787 Hz to achieve comprehensive respiratory and enteric pathogenic clearing.

---

### Web Audio API Implementation & Synthesis Engine

Synthesize the exact **713 Hz** pure tone directly in modern web browsers using the standard [Web Audio API](file:///var/www/brain-beats/js/main.js):

```javascript
/**
 * Brain Beats - Precision Pure Tone Generator
 * Target Frequency: 713 Hz (Influenza & Microbial Resonance Node)
 */
class PrecisionToneSynthesizer {
    constructor(frequency = 713.0) {
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

1. **Acoustic Waveform Selection:** Harmonic Sine Wave with soft 10 Hz Alpha pulsing to balance immune activation with parasympathetic nervous relaxation.
2. **Session Duration & Cadence:** 20–30 minutes daily; during acute febrile influenza or salmonella bouts, 2 to 3 sessions separated by several hours of rest.
3. **Headphones vs. Transducers:** Closed-back stereo headphones for systemic neurological relaxation; localized vibroacoustic transducers placed on the upper chest or abdomen for gut and lung resonance.
4. **Hydration Protocol:** Consume 500 mL of pure electrolyte water before each session to assist kidney excretion of metabolic debris.
5. **Volume Settings:** Set master volume between 40% and 55% for smooth acoustic assimilation.

---

### Interactive Generator & Experience

Listen to the 713 Hz frequency directly in the [Brain Beats Online Generator](file:///var/www/brain-beats/pure-tone-generator.html) or explore dedicated multi-frequency sweeps in our [Solfeggio & Rife Presets](file:///var/www/brain-beats/rife-frequencies-cafl-xref.html).
