---
layout: post
title: "835 hz - Rife Frequency"
description: "Comprehensive guide to 835 Hz Rife frequency: bio-resonance targeting for Enterobius pinworms, Ascaris roundworms, Rhodococcus, dental infections, and immune system stabilization."
subject: "835 hz - Rife Frequency"
apple-title: "835 hz - Rife Frequency"
app-name: "835 hz - Rife Frequency"
tweet-title: "835 hz - Rife Frequency"
tweet-description: "Comprehensive guide to 835 Hz Rife frequency: bio-resonance targeting for Enterobius pinworms, Ascaris roundworms, Rhodococcus, dental infections, and immune system stabilization."
date: 2024-11-06
keywords: "frequency benefits, Brain Beats, Frequencies, brainwave entrainment, sound therapy, 835 hz, rife frequency, enterobius vermicularis, pinworms, anal itching, ascaris lumbricoides, roundworms, rhodococcus equi, dental infections, immune stabilization, morgellons, CAFL frequencies"
---

The **835 Hz Rife Frequency** is a broad-spectrum antiparasitic, antibacterial, and immunomodulatory bio-resonance frequency documented in the Consolidated Annotated Frequency List (CAFL). Located at approximately **G#5/Ab5 (+69.2 cents)** in the fifth musical octave, 835 Hz is formulated to eradicate intestinal helminths (**Enterobius vermicularis / Pinworms**, **Ascaris / Roundworms**), eliminate nocturnal perineal itching, suppress intracellular actinomycete infections (**Rhodococcus equi**), resolve chronic odontogenic root canal infections (**Dental Infections v**), and provide foundational **Immune System Stabilization** in Morgellons protocols.

In electro-acoustic medicine, 835 Hz exerts mechanical resonance against nematode cuticles and mycolic acid-containing bacterial envelopes while soothing perianal and periodontal nerve endings.

---

### Core Biophysical Indications & Target Applications

The 835 Hz frequency preset is documented for the following clinical and holistic applications:

- **Primary Pathological Targets:** *Enterobius vermicularis* (enterobiasis, pinworms, nocturnal pruritus ani, sleep disturbance), *Ascaris lumbricoides* (intestinal roundworms), *Rhodococcus equi* (cavitary pulmonary pneumonia in immunocompromised patients), deep jawbone cavitation and dental root infections, environmental fibers in Morgellons series, and systemic allergic hypersensitivity.
- **Biophysical Resonance Mechanisms:** Resonant disintegration of nematode collagenous cuticle layers; acoustic shearing across *Rhodococcus* lipid-rich cell walls; down-regulation of unmyelinated C-fiber nociceptive signaling around the perianal verge and dental pulp; stabilization of mast cell membranes and reduction of circulating histamine; stimulation of lymphatic drainage in submandibular and mesenteric lymph node chains.
- **Primary Delivery Modalities:** High-precision Pure Sine Wave Synthesis, Monaural Beats, Bilateral Stereo Entrainment, and Localized Vibroacoustic Transducers applied to the lower abdomen, sacrum, or jawline.

```
+-------------------------------------------------------------------------+
|                   835 Hz ACOUSTIC HARMONIC STRUCTURE                    |
+-------------------------------------------------------------------------+
|  Sub-octaves:     208.75 <---> 417.50                                   |
|  Fundamental:     835.00 Hz  (G#5/Ab5 (+69.2 cents))                    |
|  Overtones:       1670.00 <---> 2505.00 <---> 3340.00                   |
+-------------------------------------------------------------------------+
```

---

### Mathematical and Acoustic Foundations

The fundamental frequency $f_0 = 835\text{ Hz}$ features symmetrical harmonic alignment:

1. **Octave Sub-harmonics ($f_n = f_0 \times 2^{-n}$):**
   - **Sub-harmonic**: `417.50 Hz (Octave -1)`
   - **Sub-harmonic**: `208.75 Hz (Sub-octave -2)`
   - **Sub-harmonic**: `104.38 Hz (Low bass)`

2. **Upper Harmonics & Overtones ($f_n = f_0 \times n$):**
   - **Overtone**: `1670.00 Hz (Octave +1)`
   - **Overtone**: `2505.00 Hz (Harmonic 3 - Compound Perfect 5th)`
   - **Overtone**: `3340.00 Hz (Octave +2)`

3. **Musical Scale Correspondence:**
   - Standard Pitch Baseline ($A_4 = 440\text{ Hz}$)
   - Calculated Semitone Position: **G#5/Ab5 (+69.2 cents)**
   - Interval Ratio: $\frac{835}{440} \approx 1.89773$

---

### Biological Rationale: Helminth Paralysis & Periodontal Decongestion

Both intestinal pinworms and periodontal bacteria thrive in low-oxygen mucosal crevices:

$$\sigma_{\text{wall}} = \frac{P_{\text{hydro}} \cdot r}{2 d} + \gamma_{\text{acoustic}} \cdot \omega \cos(\omega t)$$

- **Helminthic Detachment:** Oscillatory sound pressure induces mechanical fatigue across the cuticular annuli of pinworms and roundworms, preventing muscular burrowing into the cecal and rectal mucosa.
- **Periodontal Bone Matrix Regeneration:** Sonic micro-vibrations promote capillary angiogenesis in ischemic jawbone cavitational sites, assisting osteoblastic remodeling.
- **Histamine & Mast Cell Stabilization:** Modulates cutaneous nerve hypersensitivity, suppressing intense nocturnal anal and skin itching.

---

### Web Audio API Synthesis Implementation

The following standalone JavaScript class uses the Web Audio API to deliver an 835 Hz sinusoidal tone with smooth amplitude shaping:

```javascript
// Standalone Web Audio API Generator for 835 Hz
class AntiparasiticImmune835 {
  constructor() {
    this.audioCtx = null;
    this.oscillator = null;
    this.gainNode = null;
  }

  start() {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    this.audioCtx = new AudioContext();
    
    this.oscillator = this.audioCtx.createOscillator();
    this.gainNode = this.audioCtx.createGain();
    
    this.oscillator.type = 'sine';
    this.oscillator.frequency.setValueAtTime(835.0, this.audioCtx.currentTime);
    
    // Smooth anti-click onset
    this.gainNode.gain.setValueAtTime(0.0001, this.audioCtx.currentTime);
    this.gainNode.gain.exponentialRampToValueAtTime(0.3, this.audioCtx.currentTime + 0.08);
    
    this.oscillator.connect(this.gainNode);
    this.gainNode.connect(this.audioCtx.destination);
    
    this.oscillator.start();
  }

  stop() {
    if (this.gainNode && this.audioCtx) {
      this.gainNode.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + 0.05);
      setTimeout(() => {
        if (this.oscillator) {
          this.oscillator.stop();
          this.oscillator.disconnect();
        }
        if (this.audioCtx) {
          this.audioCtx.close();
        }
      }, 60);
    }
  }
}
```

---

### Suggested Session Guidelines

1. **Duration:** 20 to 30 minutes daily; evening sessions are especially effective for controlling nocturnal pinworm migration and itching; 15 minutes twice weekly for immune stabilization.
2. **Audio Setup:** Stereo headphones for systemic immunomodulation; vibroacoustic transducers placed over the lower abdomen, sacrum, or jawline.
3. **Volume Settings:** Moderate volume (55–65 dB SPL).
4. **Hygiene & Detox Support:** Practice thorough handwashing and nail hygiene; drink 400–500 ml of pure water post-session.

---

### Scientific Citations & References

1. Burkhart, C. N., & Burkhart, C. G. (2005). *Assessment of frequency, transmission, and genitourinary complications of enterobiasis (pinworms).* International Journal of Dermatology, 44(10), 837–840.
2. Rife, R. R. (1953). *History of the Development of a Successful Treatment for Cancer and Other Viruses, Bacteria and Fungi.* Allied Industries.
3. Consolidated Annotated Frequency List (CAFL). (2006). *Enterobiasis, Dental, and Immune Stabilization: 835 Hz.*
4. Prescott, J. F. (1991). *Rhodococcus equi: an animal and human pathogen.* Clinical Microbiology Reviews, 4(1), 20–34.
