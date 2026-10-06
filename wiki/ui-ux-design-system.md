# UI/UX Design Standards & Responsive System

This document outlines the User Interface (UI) and User Experience (UX) standards, visual design patterns, and responsive CSS architecture implemented across **Brain Beats**.

---

## 1. Design System Foundations

The design architecture is built around three core constraints:
1. **Bootstrap 5 Framework Alignment**: Strict reliance on Bootstrap 5 utility classes, responsive grid systems, and components.
2. **Zero Third-Party UI Bloat**: No heavy UI libraries or runtime dependencies. All visual polish is crafted through modular Sass/SCSS transpiled via Node.
3. **High-Contrast, Distraction-Free Audio Interface**: Clean typography, accessible tap targets, and ambient visual states that guide the user during sound therapy sessions.

---

## 2. SCSS Architecture (`_sass/`)

Styles are organized into modular SCSS partials and transpiled into `css/main.css` and `blog/css/main.css`:

```
_sass/
├── _base.scss        # Typography, CSS resets, links, blockquotes, print styles
├── _components.scss  # Buttons, cards, search affordance, volume box, loading spinner
├── _footer.scss      # Footer layout, social icon links, copyright/license metadata
├── _layout.scss      # Fixed header, fluidaner containers, tables, responsive wrappers
└── _variables.scss   # Color tokens, breakpoints, font family definitions
```

---

## 3. UI/UX Interaction Standards

### 3.1. Visual Audio Playback State (`.is-playing`)
When any frequency or noise generator is active, auditory output is reinforced with visual feedback:
```scss
.btn-play-stop {
  transition: all 0.25s ease-in-out;

  &.is-playing {
    box-shadow: 0 0 12px rgba(13, 110, 253, 0.75);
    border-color: #0d6efd;
    transform: scale(1.04);
    animation: pulse-playback 1.8s infinite ease-in-out;
  }
}

@keyframes pulse-playback {
  0%   { box-shadow: 0 0 4px rgba(13, 110, 253, 0.4); }
  50%  { box-shadow: 0 0 14px rgba(13, 110, 253, 0.85); }
  100% { box-shadow: 0 0 4px rgba(13, 110, 253, 0.4); }
}
```

### 3.2. Expandable Search Input Affordance (`.search-me`)
Rather than starting as an invisible `0px` box, the search input provides an accessible initial hit target (`44px`) that expands smoothly into an active input field upon focus or click:
```scss
.search-me {
  width: 44px;
  min-width: 44px;
  border-radius: 30px;
  border: 6px solid rgb(209, 208, 209);
  transition: width 0.4s ease, border-radius 0.4s ease, border-color 0.4s ease, background 0.4s ease;

  &:focus,
  &.on {
    width: 85%;
    border-radius: 20px;
    cursor: text;

    @media (min-width: 768px) {
      width: 70%;
    }
  }
}
```

### 3.3. Favorites Heart Micro-Interactions (`.fav` / `.faved`)
Preset cards feature heart icons that users can click to bookmark items into `localStorage`. Elastic scaling animations and text-selection prevention provide tactile feedback:
```scss
.fav, .faved {
  font-size: 2rem;
  color: $fav-pink;
  cursor: pointer;
  display: inline-block;
  user-select: none;
  transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275), color 0.2s ease;

  &:hover  { transform: scale(1.15); }
  &:active { transform: scale(0.9); }
}
```

### 3.4. Glassmorphic Fixed Navigation & Volume Control
Both the top fixed header and bottom fixed volume controller feature translucent glassmorphism to preserve background visibility while maintaining high text legibility:
- **Header**: `background-color: rgba(255, 255, 255, 0.95); backdrop-filter: blur(8px); z-index: 1030;`
- **Volume Box**: `background: rgba(255, 255, 255, 0.96); backdrop-filter: blur(8px); border-radius: 12px 12px 0 0; box-shadow: 0px -4px 20px rgba(0, 0, 0, 0.12);`

### 3.5. Preset & Article Card Elevation
Cards have a light border and rounded corners that subtly lift on mouse hover:
```scss
.card {
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.06);
    border-color: rgba(0, 0, 0, 0.16);
  }
}
```

---

## 4. Responsive Breakpoint Rules

To prevent navbar wrapping and content collisions across various screen widths, `.fluidaner` top margins adapt dynamically:
- **Mobile (<576px)**: `margin-top: 85px;`
- **Small Tablet (576px–767px)**: `margin-top: 95px;`
- **Tablet / Small Laptop (768px–991px)**: `margin-top: 105px;`
- **Desktop (992px–1250px)**: `margin-top: 120px;` (accommodates wrapped multi-item navigation)
- **Wide Desktop (>1250px)**: `margin-top: 110px;`

---

## 5. Modal Dismissal Persistence Pattern

The onboarding disclaimer and instruction modal (`#instructionModal`) uses both `localStorage` and `sessionStorage` caching:
```javascript
if (modalName === 'instructionModal') {
  try {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('instruction_modal_dismissed') === 'true') {
      return;
    }
  } catch (e) {}
}
```
When closed, `instruction_modal_dismissed = 'true'` is recorded, ensuring users are never interrupted upon subsequent page navigations.
