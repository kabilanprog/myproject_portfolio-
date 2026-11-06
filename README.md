# Kabilan — Freelance Developer, UI/UX Designer & Photographer

A premium, bespoke portfolio experience inspired by high-craft spatial and interactive web design. Built with native HTML5, modern CSS3, and ES6+ vanilla modules — delivering 60+ FPS physics simulations, 3D doors, and tactile interactions with zero external runtime dependencies.

---

## ⚡ Key Features & Interactive Architecture

### 1. Verlet Physics Pull-Cord (Theme Switcher)
- **Physics**: Real-time Verlet-integrated string rope with 20 segments, gravity, Euler spring damping, and distance constraints on an HTML5 `<canvas>`.
- **Interaction**: Click, drag, or swing the wooden/brass pull knob. Pulling downwards past the threshold triggers a tactile audio click (synthesized via the Web Audio API) and toggles between **Charcoal Dark Mode (`#121111` / `#1A1818`)** and **Warm Stone Light Mode (`#E8E4E0`)**.

### 2. Desk Flip-Calendar Hero Section
- **3D Desk Calendar**: Displays core disciplines (**Photographer · Graphic Designer · UI/UX Designer · Web Developer · App Developer**) with realistic spiral rings, punched holes, 3D paper fold transitions, and lighting gradients.
- **Dynamic Width Fitting**: Smoothly calculates text width so titles never truncate or wrap awkwardly even on 390px mobile viewports.
- **Liquid Reveal Canvas**: Interactive portrait stage where sweeping the mouse or touch across Kabilan's cutout paints a liquid color reveal trail with glowing particle embers.
- **Hero Parallax**: 3D responsive perspective tilt reacting to mouse position across the hero viewport.

### 3. Skill Showcase: 3D Doors Wall ("One Door Per Skill")
- **5 Muted Editorial Doorways**:
  1. **Web Developer** (`#22304a` navy)
  2. **App Developer** (`#4a3540` plum)
  3. **UI/UX Designer** (`#7a8670` sage)
  4. **Graphic Designer** (`#a4552c` terracotta)
  5. **Photographer** (`#262523` charcoal)
- **Hover Spring Physics**: Hovering any door cracks it open (`rotateY(-22deg)`), leaking ambient room light onto the floor and updating the floating info card (`#dinfo`) and dot indicators in real time.
- **Full Swing & Room Walkthrough**: Clicking any door swings it open and zooms through the doorway into a full-screen discipline room walkthrough featuring live stats, project cards, tech tags, and a "← Back to doors" exit.
- **Touch Gesture Support**: Full horizontal swipe recognition on mobile devices to effortlessly navigate through all 5 doors.

### 4. Interactive Case Study Drawer & Live Simulation Engine (`#csModal`)
- **Dual Tab Mode**: Seamlessly switch between a **Live Interactive Simulation** (draggable interactive canvas widgets with real-time frame rates and controls) and **Technical Architecture Specifications** (engineering highlights, data architecture, stack badges, and terminal code blocks).
- **Smooth Drawer Mechanics**: Touch swipe-down or escape key to dismiss, complete with background blur and spring easing.

### 5. Holographic 3D Ability Card (`#holo`)
- **Tactile Card Experience**: Click "My ability card" to open a floating collectible card.
- **3D Gyroscopic Tilt & Specular Shine**: Mouse movements rotate the card in 3D perspective while dynamic CSS gradients calculate light reflections, iridescence, and specular gleam.
- **Card Flip Interaction**: Click anywhere on the card to flip between front face (Kabilan's framed suited portrait, core abilities, power ratings) and reverse face (gold-foil embossed technical specs and verification seal).

### 6. Rolling Time Machine ("Let's go back in time")
- **Scroll-Driven Odometer**: Smooth rolling mechanical year numbers (`2026` → `2025` → `2024` → `2023` → `2021`) as you scroll through Kabilan's career chapters.
- **Atmospheric Peach/Blush Ambient Glows**: In light mode, soft ambient radial glows radiate in the corners while the center stays paper-clean for readability.
- **Depth Compass Canvas**: 16 concentric rotating time dials with tick marks, depth fog, and dust motes.
- **Progress Gauge & Rewind Icon**: Shows current chapter counter (`01 / 05`) and active timeline dot tracking the journey.

### 7. Footer & Contact Experience
- **Live Work Badge**: Pulsing green dot with `AVAILABLE FOR NEW WORK`.
- **Editorial Typography**: High-contrast headline `Need something built? Let's make it happen.`
- **3-Column Navigation Grid**: `WORK` (3-column subgrid across the 5 disciplines), `NAVIGATE`, and `STATUS` (live Kolkata/Chennai time).
- **Interactive Contact Modal**: Client form with honeypot spam protection, validation, and automated mailto link generator.
- **Floating Back to Top**: Smooth scroll-to-top button with circular tracking.

---

## 🚀 Running the Project

You can run this project locally using any static web server:

### Option A: Using Python (Pre-installed on most systems)
```bash
python -m http.server 3000
```
Then open [http://localhost:3000](http://localhost:3000) in your browser.

### Option B: Using Node.js
```bash
npx serve .
```

---

## 🛠 Tech Stack
- **HTML5**: Semantic tags, ARIA accessibility attributes, dialog modals.
- **CSS3**: Custom properties, 3D transforms (`transform-style: preserve-3d`), flexbox, grid, keyframe physics, and backdrop blur filters.
- **JavaScript**: Pure vanilla ES6+ modules, zero external runtime dependencies.
- **Typography**: [Onest](https://fonts.google.com/specimen/Onest) via Google Fonts (weights 100–900).
