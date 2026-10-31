---
layout: post
title: "913 hz - Rife Frequency"
description: "Comprehensive scientific analysis of 913 Hz Rife frequency: resonance models for the Pasteurella combination, covering Pasteurella multocida bite-wound infection and respiratory disease."
subject: "913 hz - Rife Frequency"
apple-title: "913 hz - Rife Frequency"
app-name: "913 hz - Rife Frequency"
tweet-title: "913 hz - Rife Frequency"
tweet-description: "Comprehensive scientific analysis of 913 Hz Rife frequency: resonance models for the Pasteurella combination, covering Pasteurella multocida bite-wound infection and respiratory disease."
date: 2024-12-26
keywords: "frequency benefits, Brain Beats Pro, Frequencies, brainwave entrainment, sound therapy, 913 hz, rife frequency, pasteurella combination, pasteurella multocida, animal bite infection, cellulitis, pasteurella multocida toxin, capsule, CAFL frequencies"
---

The **913 Hz Rife Frequency** is a combination preset for the *Pasteurella* genus, whose members live in the oral and respiratory flora of cats, dogs, cattle, rabbits and birds and are transmitted to people mainly by bites and scratches. Located at approximately **A#/Bb5 (-36.3 cents)** relative to concert pitch $A_4 = 440\text{ Hz}$, it is cataloged in the Consolidated Annotated Frequency List (CAFL) for the **Pasteurella combination**.

---

### 1. Microbiological & Pathological Profile

- **Organism Profile**: *Pasteurella multocida* is a small, non-motile, facultative anaerobic Gram-negative coccobacillus. Up to 70-90% of cats and many dogs carry it in the oropharynx. It is the most common cause of infection after cat and dog bites.
- **Bite-Wound Cellulitis**: Symptoms typically begin within 24 hours: rapid erythema, pain, swelling and serous or purulent drainage at the wound. Without treatment it can progress to abscess, tenosynovitis, septic arthritis and osteomyelitis, especially after deep puncture wounds over joints.
- **Respiratory and Systemic Disease**: In people with COPD, bronchiectasis or cirrhosis, *P. multocida* can cause pneumonia, empyema and bacteremia. Without animal contact, upper-respiratory colonization may be the source.
- **Virulence Factors**: A polysaccharide capsule (serogroups A, B, D, E, F) resists phagocytosis and complement, while the **Pasteurella multocida toxin (PMT)** deamidates heterotrimeric G proteins ($G_q$, $G_{12/13}$) and drives the bone and turbinate atrophy of progressive atrophic rhinitis in swine.

---

### 2. Biophysical Mechanism of Action

```
+-----------------------------------------------------------------------------------------+
|                                913 Hz MECHANISM OF ACTION                               |
+-----------------------------------------------------------------------------------------+
                                             |
                      Acoustic Longitudinal Compression Wave (913 Hz)
                                             |
[P. multocida Capsule]           [Wound Tissue]                   [Respiratory Mucosa]
|                                |                                |
Cyclic Shear Loading             Micro-Streaming in Exudate       Ciliary Beat Support
|                                |                                |
Reduced Antiphagocytic Shield    Improved Drainage                Mucus Clearance
                                             |
                               Proposed Downstream Outcomes:
   * Mechanical loading of the bacterial capsule
   * Support of wound drainage and perfusion
   * Respiratory mucosal clearance support
```

#### Resonance Breakdown
1. **Wound-Fluid Micro-Streaming**: In a fluid-filled wound track, steady streaming velocity near a boundary scales as $u_s \sim v_0^2 / (\omega\,\delta_v)$ with viscous layer thickness $\delta_v = \sqrt{2\eta / (\rho\omega)}$. At $913\text{ Hz}$ in water, $\delta_v \approx 0.02\text{ mm}$, so streaming acts only at the boundary and its effect is small.
2. **Perfusion Support**: Vibration raises cutaneous blood flow through endothelial shear stress $\tau_w = 4\eta Q / (\pi r^3)$, which may modestly improve delivery of antibiotics and immune cells to the wound margin.

> [!NOTE]
> These mechanisms are theoretical models. No controlled clinical trial has shown that audible-frequency sound treats the conditions described here.

---

### 3. Harmonic Hierarchy & Resonance Tree

```
[114.12 Hz] <--- [228.25 Hz] <--- [456.50 Hz] <--- [913 Hz] ---> [1826.00 Hz] ---> [2739.00 Hz] ---> [3652.00 Hz]
Autonomic   Lymphatic   Wound   Master   Capsule   Boundary   Broad
```

- **Fundamental ($f_0$)**: 913 Hz, the primary resonance driver for this preset.
- **Sub-Harmonic ($f_{-1} = 456.5\text{ Hz}$)**: Supports dermal and wound-bed perfusion.
- **Sub-Harmonic ($f_{-2} = 228.25\text{ Hz}$)**: Supports regional lymphatic drainage.
- **Harmonic ($2f_0 = 1826\text{ Hz}$)**: Second-order overtone for capsule shear loading.
- **Harmonic ($3f_0 = 2739\text{ Hz}$)**: Third-order overtone for boundary micro-streaming.

---

### 4. Practical Session Parameters

| Parameter | Recommended Specification | Research Objective |
| :--- | :--- | :--- |
| **Delivery Medium** | Circumaural headphones; contact transducer near (not on) an open wound | Even, low-distortion acoustic delivery |
| **Waveform Dynamic** | Pure sine wave with gentle 0.1 Hz amplitude modulation | Avoids sensory adaptation during extended sessions |
| **Exposure Schedule** | 30 minutes once daily for 7 to 10 days | Matches the biological timescale of the condition |
| **Supportive Regimen** | Wound cleaning, tetanus review and prescribed antibiotics after any bite | Supports recovery; does not replace standard medical care |

> **Interactive Sound Laboratory:** Experience the **913 Hz** frequency live on the **[Brain Beats Pro Pure Tone Generator](/pure-tone-generator.html)**, test multi-wave entrainment with the **[Binaural Beats Generator](/binaural-beats-generator.html)**, or cross-reference complementary targets in the **[Rife Frequencies CAFL Directory](/rife-frequencies-cafl-xref.html)**.
>
> **Medical Disclaimer:** The vibrational protocols discussed herein are intended for scientific modeling, psychoacoustic research, and complementary sound therapy. They do not constitute medical diagnosis, clinical advice, or treatment. Any animal bite with redness, swelling or drainage needs same-day medical care, because *Pasteurella* infections progress within hours. Always consult licensed healthcare practitioners for medical concerns.

---

### 5. Web Audio API Master Synthesizer

```javascript
/**
 * Rife913Synthesizer - Web Audio API Synthesis Engine for 913 Hz
 * Calibrated for the 913 Hz Pasteurella combination preset.
 */
class Rife913Synthesizer {
  constructor() {
    this.audioCtx = null;
    this.carrier = null;
    this.subOctave = null;
    this.masterGain = null;
    this.isActive = false;
  }

  init() {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    this.audioCtx = new AudioCtx();

    this.masterGain = this.audioCtx.createGain();
    this.masterGain.gain.setValueAtTime(0.0001, this.audioCtx.currentTime);
    this.masterGain.connect(this.audioCtx.destination);
  }

  start(durationMinutes = 30) {
    if (!this.audioCtx) this.init();
    if (this.isActive) return;

    const t = this.audioCtx.currentTime;

    // 913 Hz primary carrier
    this.carrier = this.audioCtx.createOscillator();
    this.carrier.type = 'sine';
    this.carrier.frequency.setValueAtTime(913, t);

    // 456.5 Hz sub-harmonic
    this.subOctave = this.audioCtx.createOscillator();
    this.subOctave.type = 'sine';
    this.subOctave.frequency.setValueAtTime(456.5, t);

    const subGain = this.audioCtx.createGain();
    subGain.gain.setValueAtTime(0.22, t);

    this.carrier.connect(this.masterGain);
    this.subOctave.connect(subGain);
    subGain.connect(this.masterGain);

    // Smooth attack ramp
    this.masterGain.gain.exponentialRampToValueAtTime(0.3, t + 3);

    this.carrier.start(t);
    this.subOctave.start(t);
    this.isActive = true;

    // Scheduled session shutdown
    const stopTime = t + (durationMinutes * 60);
    this.masterGain.gain.setValueAtTime(0.3, stopTime - 3);
    this.masterGain.gain.exponentialRampToValueAtTime(0.0001, stopTime);
    this.carrier.stop(stopTime);
    this.subOctave.stop(stopTime);

    this.carrier.onended = () => {
      this.isActive = false;
    };
  }

  stop() {
    if (!this.isActive || !this.audioCtx) return;
    const t = this.audioCtx.currentTime;
    this.masterGain.gain.linearRampToValueAtTime(0.0001, t + 1);
    setTimeout(() => {
      if (this.carrier) this.carrier.stop();
      if (this.subOctave) this.subOctave.stop();
      this.isActive = false;
    }, 1000);
  }
}

// Example usage:
// const session = new Rife913Synthesizer();
// document.getElementById('btnStart').addEventListener('click', () => session.start(30));
```

---

### 6. Summary & Academic Citations

The **913 Hz Rife Frequency** is the CAFL combination entry for *Pasteurella*. It is presented as a psychoacoustic reference, not as wound treatment.

1. **Wilson, B. A., & Ho, M.** (2013). *Pasteurella multocida: from zoonosis to cellular microbiology*. Clinical Microbiology Reviews, 26(3), 631-655.
2. **Weber, D. J., et al.** (1984). *Pasteurella multocida infections: report of 34 cases and review of the literature*. Medicine, 63(3), 133-154.
3. **Abrahamian, F. M., & Goldstein, E. J.** (2011). *Microbiology of animal bite wound infections*. Clinical Microbiology Reviews, 24(2), 231-246.
4. **Harper, M., et al.** (2006). *Pasteurella multocida pathogenesis: 125 years after Pasteur*. FEMS Microbiology Letters, 265(1), 1-10.

---

<div align="center">
<sub>&copy; Brain Beats Pro. Written content and research documentation are licensed under <a href="/licenses.html" rel="license">CC BY 4.0</a>. Web Audio synthesis mechanics and source code are copyleft protected under <a href="/licenses.html">GNU AGPLv3</a>.</sub>
</div>
