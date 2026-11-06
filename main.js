/**
 * Kabilan Portfolio - Production Interactive Engine
 * Recreating reference aesthetics (therishithakor.com):
 * Verlet rope pull-cord switch, 3D doors, project room walkthrough, clock tunnel, and rolling odometer.
 */

// ============================================================================
// 1. EDITABLE PORTFOLIO CONTENT & CONFIGURATION (KABILAN)
// ============================================================================

const DOOR_DATA = [
  {
    "title": "Web Development",
    "sub": "End to end, from sketch to live site",
    "bullets": [
      "Discovery & planning",
      "UX & visual design",
      "Front-end & back-end development",
      "Technical SEO & performance",
      "Analytics, launch & ongoing support"
    ],
    "projects": [
      {
        "name": "Tax API Cost Calculator",
        "sub": "Pricing tool \u00b7 sandbox.co.in",
        "tag": "SANDBOX \u00b7 LIVE",
        "desc": "Estimates the cost of tax APIs for KYC, Income Tax, TDS and GST: choose a plan, add monthly usage and download a pricing estimate.",
        "tags": [
          "Pricing calculator",
          "Interactive UI",
          "Embedded tool"
        ],
        "url": "https://sandbox.co.in",
        "type": "sandbox-calc",
        "alt": false
      },
      {
        "name": "Tax P&L Report, explained",
        "sub": "Long-form guide \u00b7 pnl.page",
        "tag": "QUICKO \u00b7 LIVE",
        "desc": "A guide to every sheet of the Tax P&L report: capital gains on shares, mutual funds and real estate, intraday and F&O income, dividends and loss adjustment, with tables and FAQs.",
        "tags": [
          "Content page",
          "Data tables",
          "SEO"
        ],
        "url": "https://pnl.page",
        "type": "quicko-pnl",
        "alt": true
      },
      {
        "name": "Capital Gains Statement, explained",
        "sub": "Long-form guide \u00b7 pnl.page",
        "tag": "QUICKO \u00b7 LIVE",
        "desc": "Walks Indian investors through each section of the Capital Gains Statement: STCG and LTCG on equity shares, mutual funds and real estate.",
        "tags": [
          "Content page",
          "Data tables",
          "SEO"
        ],
        "url": "https://pnl.page",
        "type": "quicko-cg",
        "alt": false
      },
      {
        "name": "Nexus Cloud Observability Dashboard",
        "sub": "Real-time infra metrics \u00b7 nexusmetrics.io",
        "tag": "ENTERPRISE \u00b7 LIVE",
        "desc": "High-throughput telemetry platform rendering 60fps WebGL real-time server graphs, distributed trace waterfall charts, and instant latency threshold alerts.",
        "tags": [
          "WebGL",
          "WebSockets",
          "Time-Series Charts",
          "Next.js"
        ],
        "url": "https://nexusmetrics.io",
        "type": "web-nexus",
        "alt": true
      },
      {
        "name": "Kavalan \u2014 Cyber Threat Intelligence",
        "sub": "SOC Command Platform \u00b7 kavalan.sec",
        "tag": "SECURITY \u00b7 PRODUCTION",
        "desc": "Interactive dark-mode incident response console with dynamic geo-spatial attack vector mapping, live MITRE ATT&CK framework matrix, and automated rule builder.",
        "tags": [
          "D3.js",
          "GeoJSON",
          "Tailwind CSS",
          "Security Operations"
        ],
        "url": "https://kavalan.sec",
        "type": "web-kavalan",
        "alt": false
      },
      {
        "name": "Zenith Headless E-Commerce Experience",
        "sub": "Flagship Luxury Goods \u00b7 zenithcraft.in",
        "tag": "COMMERCE \u00b7 LIVE",
        "desc": "Ultra-snappy headless storefront featuring sub-50ms page transitions, custom 3D three.js product customizer, dynamic currency converter, and Stripe checkout.",
        "tags": [
          "Three.js",
          "Shopify Storefront",
          "Cart API",
          "Framer Motion"
        ],
        "url": "https://zenithcraft.in",
        "type": "web-zenith",
        "alt": true
      },
      {
        "name": "Vyapar \u2014 B2B Invoicing & GST Engine",
        "sub": "Automated Ledger \u00b7 vyaparcore.com",
        "tag": "FINTECH \u00b7 LIVE",
        "desc": "Full-featured cloud invoicing and e-way bill generation portal supporting multi-tier GST rates, automated reconciliation, and instant client PDF generation.",
        "tags": [
          "React",
          "TypeScript",
          "PDFKit",
          "PostgreSQL"
        ],
        "url": "https://vyaparcore.com",
        "type": "web-vyapar",
        "alt": false
      },
      {
        "name": "Artisan Studio Portfolio Engine",
        "sub": "Interactive Agency Showcase \u00b7 artisan.dev",
        "tag": "CREATIVE \u00b7 AWARD",
        "desc": "Award-winning creative portfolio engine featuring physics-based fluid cursor trails, custom shader typography, dynamic noise grain overlays, and smooth inertia scrolling.",
        "tags": [
          "GLSL Shaders",
          "Canvas API",
          "Web Audio",
          "Performance"
        ],
        "url": "https://artisan.dev",
        "type": "web-artisan",
        "alt": true
      }
    ]
  },
  {
    "title": "App Development",
    "sub": "Native iOS, Android and cross-platform apps",
    "bullets": [
      "iOS (Swift, SwiftUI)",
      "Android (Kotlin, Jetpack Compose)",
      "Cross-platform (Flutter, React Native)",
      "App Store & Play Store publishing",
      "Telemetry, crash-reporting & updates"
    ],
    "projects": [
      {
        "name": "FinTrack Mobile Wealth",
        "sub": "Personal wealth tracking \u00b7 fintrack.app",
        "tag": "FINTECH \u00b7 iOS / ANDROID",
        "desc": "Modern investment tracking companion with real-time portfolio rebalancing, unified mutual fund sync, and automated SIP intelligence.",
        "tags": [
          "React Native",
          "TypeScript",
          "Biometric Auth",
          "Charts"
        ],
        "url": "https://fintrack.app",
        "type": "phone-fintrack",
        "alt": false
      },
      {
        "name": "HealthPulse Companion",
        "sub": "Continuous vitals telemetry \u00b7 healthpulse.io",
        "tag": "HEALTH \u00b7 WATCH & MOBILE",
        "desc": "Medical-grade vitals monitoring app featuring live HRV telemetry, sleep phase architecture graphs, and automated physician summary export.",
        "tags": [
          "SwiftUI",
          "HealthKit",
          "CorePlot",
          "BLE Telemetry"
        ],
        "url": "https://healthpulse.io",
        "type": "phone-healthpulse",
        "alt": true
      },
      {
        "name": "ZenRoute Urban Mobility",
        "sub": "Multi-modal route engine \u00b7 zenroute.transit",
        "tag": "TRANSIT \u00b7 FLUTTER / GO",
        "desc": "Next-gen public transit navigator delivering sub-second intermodal route planning across suburban rail, metro, bus, and micro-mobility rentals.",
        "tags": [
          "Flutter",
          "Mapbox",
          "WebSockets",
          "Offline Sync"
        ],
        "url": "https://zenroute.transit",
        "type": "phone-zenroute",
        "alt": false
      },
      {
        "name": "PaySync UPI Merchant Terminal",
        "sub": "Instant Soundbox & QR \u00b7 paysync.in",
        "tag": "FINTECH \u00b7 ANDROID / POS",
        "desc": "Ultra-reliable merchant transaction app with multilingual text-to-speech soundbox announcements, dynamic QR generation, and daily settlement analytics.",
        "tags": [
          "Kotlin",
          "Jetpack Compose",
          "Text-to-Speech",
          "Room DB"
        ],
        "url": "https://paysync.in",
        "type": "phone-paysync",
        "alt": true
      },
      {
        "name": "Kural \u2014 Classical Audio Reader",
        "sub": "Literature Voice Studio \u00b7 kuralaudio.com",
        "tag": "EDUCATION \u00b7 iOS / IPADOS",
        "desc": "Immersive literary reader featuring synchronized syllable highlighting, offline high-fidelity audio engine, and semantic commentary lookup.",
        "tags": [
          "Swift",
          "AVAudioEngine",
          "CoreData",
          "Accessibility"
        ],
        "url": "https://kuralaudio.com",
        "type": "phone-kural",
        "alt": false
      },
      {
        "name": "TaskMaster Pro Autonomous Planner",
        "sub": "Offline-First Executive Hub \u00b7 taskmaster.pro",
        "tag": "PRODUCTIVITY \u00b7 CROSS-PLATFORM",
        "desc": "CRDT-powered collaborative task manager with instant conflict-free peer syncing, dynamic Pomodoro flows, and timeline Gantt views.",
        "tags": [
          "React Native",
          "CRDT Sync",
          "WatermelonDB",
          "Haptics"
        ],
        "url": "https://taskmaster.pro",
        "type": "phone-taskmaster",
        "alt": true
      },
      {
        "name": "AgriScan Crop Diagnostics",
        "sub": "Instant Leaf Pathology \u00b7 agriscan.farm",
        "tag": "AGRITECH \u00b7 ON-DEVICE AI",
        "desc": "On-device edge AI scanner detecting 80+ crop diseases in real-time without internet access, providing localized remedy protocols for farmers.",
        "tags": [
          "TensorFlow Lite",
          "CameraX",
          "Offline First",
          "Multilingual"
        ],
        "url": "https://agriscan.farm",
        "type": "phone-agriscan",
        "alt": false
      },
      {
        "name": "SoundScape Spatial Audio",
        "sub": "Generative Ambient Studio \u00b7 soundscape.audio",
        "tag": "AUDIO \u00b7 iOS / MACOS",
        "desc": "Bespoke generative binaural sound generator responding to user movement and local weather patterns for deep focus and sleep restoration.",
        "tags": [
          "AudioKit",
          "Metal Shaders",
          "CoreMotion",
          "Spatial Audio"
        ],
        "url": "https://soundscape.audio",
        "type": "phone-soundscape",
        "alt": true
      }
    ]
  },
  {
    "title": "UI/UX Design",
    "sub": "Design systems, product flows and wireframes",
    "bullets": [
      "User research & user journeys",
      "Wireframes & low-fidelity wireframes",
      "Design systems & component libraries",
      "Figma prototypes with micro-interactions",
      "Usability testing & design audits"
    ],
    "projects": [
      {
        "name": "Nova Enterprise System",
        "sub": "Multi-brand core library \u00b7 novads.co",
        "tag": "DESIGN SYSTEM \u00b7 FIGMA",
        "desc": "Tokenized design system powering 40+ products with 1,200+ accessible components, automated dark-mode contrast matrices, and Code Connect mappings.",
        "tags": [
          "Figma Variables",
          "Design Tokens",
          "WCAG AAA",
          "Documentation"
        ],
        "url": "https://novads.co",
        "type": "ui-nova",
        "alt": false
      },
      {
        "name": "CloudScale SaaS Console",
        "sub": "Kubernetes orchestrator \u00b7 cloudscale.dev",
        "tag": "PRODUCT DESIGN \u00b7 WEB",
        "desc": "Zero-clutter cloud infrastructure console designed to manage complex microservice topologies without cognitive overload.",
        "tags": [
          "Complex Workflows",
          "Information Architecture",
          "Data Viz"
        ],
        "url": "https://cloudscale.dev",
        "type": "ui-cloudscale",
        "alt": true
      },
      {
        "name": "Aura Spatial DAW",
        "sub": "Immersive 3D sequencer \u00b7 auradaw.studio",
        "tag": "SPATIAL UI \u00b7 VISIONOS",
        "desc": "Breakthrough 3D digital audio workstation interface allowing sound designers to position sonic stems spatially in physical space.",
        "tags": [
          "Spatial UX",
          "Volumetric UI",
          "Neumorphic Precision",
          "Micro-interactions"
        ],
        "url": "https://auradaw.studio",
        "type": "ui-aura",
        "alt": false
      },
      {
        "name": "Veda Ayurvedic Health Platform",
        "sub": "Holistic Wellness \u00b7 vedawellness.in",
        "tag": "HEALTHCARE \u00b7 MOBILE & TABLET",
        "desc": "Warm, editorial patient consultation app with intuitive dosha assessment quizzes, visual appointment timelines, and calming botanical palettes.",
        "tags": [
          "Editorial UX",
          "User Research",
          "Wireframing",
          "Prototyping"
        ],
        "url": "https://vedawellness.in",
        "type": "ui-veda",
        "alt": true
      },
      {
        "name": "Apex Trading Desk Interface",
        "sub": "Algorithmic Terminal \u00b7 apextrader.io",
        "tag": "FINTECH \u00b7 DESKTOP APP",
        "desc": "Ultra-dense, high-contrast trading workstation designed for zero latency decision-making with customizable modular dockable panes.",
        "tags": [
          "Density UX",
          "Keyboard-first UI",
          "Dark Theme Systems",
          "Usability"
        ],
        "url": "https://apextrader.io",
        "type": "ui-apex",
        "alt": false
      },
      {
        "name": "Lumina Smart Home Ecosystem",
        "sub": "Ambient Home Automation \u00b7 luminahome.tech",
        "tag": "IOT & SMART HOME \u00b7 WEARABLE",
        "desc": "Minimalist circular touch interface for wall panels and smart watches featuring tactile haptic feedback and context-aware scene sliders.",
        "tags": [
          "Haptic UI",
          "Circular UX",
          "Accessibility",
          "Protopie"
        ],
        "url": "https://luminahome.tech",
        "type": "ui-lumina",
        "alt": true
      },
      {
        "name": "CivicConnect Citizen Portal",
        "sub": "City Municipal Services \u00b7 civicconnect.gov",
        "tag": "PUBLIC SECTOR \u00b7 MOBILE & WEB",
        "desc": "Inclusive citizen interface for civic grievances, utility payments, and municipal permits, verified across 5 regional languages and elderly usability groups.",
        "tags": [
          "Multilingual UX",
          "Field User Testing",
          "GovTech",
          "Inclusive Design"
        ],
        "url": "https://civicconnect.gov",
        "type": "ui-civic",
        "alt": false
      },
      {
        "name": "Chronos Luxury Watch Configurator",
        "sub": "Bespoke Horology Studio \u00b7 chronosatelier.ch",
        "tag": "E-COMMERCE \u00b7 3D INTERACTIVE",
        "desc": "Sensory, tactile digital configurator allowing collectors to customize mechanical watch dials, bezels, materials, and engraving with real-time 3D lighting.",
        "tags": [
          "Micro-animations",
          "3D Interaction Design",
          "Luxury Aesthetics",
          "Conversion UX"
        ],
        "url": "https://chronosatelier.ch",
        "type": "ui-chronos",
        "alt": true
      }
    ]
  },
  {
    "title": "Graphic Design",
    "sub": "Brand identities, typography and visual assets",
    "bullets": [
      "Logo design & visual identities",
      "Brand guidelines & asset libraries",
      "Marketing collateral & pitch decks",
      "Custom illustration & iconography",
      "Print-ready packaging & merchandise"
    ],
    "projects": [
      {
        "name": "Apex Studio Rebrand",
        "sub": "Identity system \u00b7 apexstudio.agency",
        "tag": "IDENTITY \u00b7 BRANDING",
        "desc": "Complete visual overhaul featuring a custom geometric sans-serif typeface, tactile embossed business stationery, and motion guidelines.",
        "tags": [
          "Brand Identity",
          "Custom Typeface",
          "Stationery",
          "Brand Guidelines"
        ],
        "url": "https://apexstudio.agency",
        "type": "gfx-apex",
        "alt": false
      },
      {
        "name": "Series A Pitch Decks",
        "sub": "Fundraising narratives \u00b7 venturecraft.cc",
        "tag": "PRESENTATION \u00b7 VENTURE",
        "desc": "High-stakes pitch deck design series for AI, climate-tech, and fintech startups that collectively raised over $45M across 2024\u20132026.",
        "tags": [
          "Storyboarding",
          "Information Design",
          "Data Viz",
          "Typography"
        ],
        "url": "https://venturecraft.cc",
        "type": "gfx-decks",
        "alt": true
      },
      {
        "name": "Chronicle Magazine Layouts",
        "sub": "Quarterly design journal \u00b7 chroniclemag.com",
        "tag": "EDITORIAL \u00b7 PRINT & DIGITAL",
        "desc": "Experimental print and digital magazine featuring asymmetrical brutalist grids, duo-tone photography treatments, and foil-stamped covers.",
        "tags": [
          "Editorial Grid",
          "Art Direction",
          "Print Production",
          "Cover Design"
        ],
        "url": "https://chroniclemag.com",
        "type": "gfx-chronicle",
        "alt": false
      },
      {
        "name": "Madras Heritage Typography",
        "sub": "Vernacular Signage Revival \u00b7 madraslettering.art",
        "tag": "TYPOGRAPHY \u00b7 EXHIBITION",
        "desc": "Cultural design retrospective translating historic hand-painted Chennai signboards and Dravidian script architecture into modernist serigraph posters.",
        "tags": [
          "Screen Printing",
          "Vernacular Type",
          "Cultural Research",
          "Silkscreen"
        ],
        "url": "https://madraslettering.art",
        "type": "gfx-madras",
        "alt": true
      },
      {
        "name": "Kaapi Organic Coffee Packaging",
        "sub": "Artisanal Coffee Roasters \u00b7 kaapiorigins.in",
        "tag": "PACKAGING \u00b7 CPG",
        "desc": "Sustainable biodegradable packaging design featuring hand-carved block print patterns inspired by South Indian coffee estates.",
        "tags": [
          "Packaging Design",
          "Sustainable Materials",
          "Dielines",
          "Foil Stamping"
        ],
        "url": "https://kaapiorigins.in",
        "type": "gfx-kaapi",
        "alt": false
      },
      {
        "name": "Synthwave Music Festival",
        "sub": "Annual Electronic Festival \u00b7 neonwavefest.live",
        "tag": "EVENT BRANDING \u00b7 MOTION",
        "desc": "Comprehensive festival branding encompassing dynamic 3D animated stage visuals, holographic wristbands, social teasers, and festival app graphics.",
        "tags": [
          "Motion Graphics",
          "Stage Visuals",
          "Merchandise Design",
          "Holographic Foil"
        ],
        "url": "https://neonwavefest.live",
        "type": "gfx-synthwave",
        "alt": true
      },
      {
        "name": "Vector Iconography System",
        "sub": "Universal Enterprise Set \u00b7 vectorcraft.io",
        "tag": "ICONOGRAPHY \u00b7 VECTOR SYSTEM",
        "desc": "Pixel-perfect 24px and 16px icon family crafted across 3 distinct optical weights (Outline, Solid, Duotone) with sub-pixel alignment.",
        "tags": [
          "Vector Art",
          "Optical Weighting",
          "SVG System",
          "Micro-details"
        ],
        "url": "https://vectorcraft.io",
        "type": "gfx-icons",
        "alt": false
      },
      {
        "name": "Botanica Floral Gin Spirits",
        "sub": "Small-batch Distillers \u00b7 botanicaspirits.co",
        "tag": "LUXURY PACKAGING \u00b7 SPIRITS",
        "desc": "Luxury spirit packaging featuring custom glass debossing, intricate copper-foil botanical engraving, and serialized wax-sealed neck bands.",
        "tags": [
          "Bottle Packaging",
          "Copper Foil",
          "Botanical Illustration",
          "Luxury Print"
        ],
        "url": "https://botanicaspirits.co",
        "type": "gfx-botanica",
        "alt": true
      }
    ]
  }
];
if (typeof window !== 'undefined') window.DOOR_DATA = DOOR_DATA;
const TIMELINE = [
  {
    year: "2027",
    when: "Jan 2027 — Now",
    title: "Independent Freelancer",
    org: "Working for myself · Chennai & Remote Worldwide",
    bullets: [
      "Websites, mobile apps, interfaces, and visual assets carried from first sketch to production launch.",
      "Collaborating directly with global brands and founders on bespoke high-performance digital products."
    ]
  },
  {
    year: "2024",
    when: "2024 — 2026",
    title: "Lead Creative Developer & Product Designer",
    org: "Studio Orbital · Remote",
    bullets: [
      "Engineered interactive 3D web platforms and fluid design systems for emerging technology companies.",
      "Led creative direction across WebGL, Canvas physics simulations, and reactive interface architectures."
    ]
  },
  {
    year: "2022",
    when: "2022 — 2024",
    title: "Full-Stack Web & Mobile Engineer",
    org: "Synthetix Labs · Remote",
    bullets: [
      "Built cross-platform iOS and Android applications with native touch ergonomics and smooth haptic feedback.",
      "Architected low-latency client state synchronization and accessible multi-theme component libraries."
    ]
  },
  {
    year: "2020",
    when: "2020 — 2022",
    title: "UI/UX & Visual Identity Designer",
    org: "Vanguard Studio · Chennai",
    bullets: [
      "Designed end-to-end digital experiences, design tokens, and high-fidelity interactive prototypes in Figma.",
      "Authored brand guidelines, bespoke editorial typography, and visual identity systems for clients."
    ]
  },
  {
    year: "2018",
    when: "2018 — 2020",
    title: "Foundational Practice & Visual Photography",
    org: "Independent Creative Practice · Chennai",
    bullets: [
      "Where it all began: exploring creative computation, graphic design, composition, and editorial photography.",
      "Built the foundation connecting code, visual aesthetics, tactile physics, and human-centric design."
    ]
  }
];

if (typeof window !== 'undefined') window.DOOR_DATA = DOOR_DATA;
if (typeof window !== 'undefined') window.TIMELINE = TIMELINE;
const CARD = {
  name: "Kabilan",
  role: "Developer, Designer & Photographer",
  rank: "SPECIALIST CLASS · FREELANCE CREATIVE",
  stats: {
    "UI/UX DESIGN": 90,
    "WEB DEV": 92,
    "APP DEV": 85,
    "GRAPHIC DESIGN": 88
  },
  specs: {
    disciplines: "Web Architecture, Native iOS/Android Apps, Design Systems, Editorial Photography",
    stack: "TypeScript, WebGL/Canvas, Swift, Kotlin, Figma, Blender, Capture One",
    location: "Chennai, Tamil Nadu, India — Remote-first worldwide",
    quote: "“Code is the structure, design is the soul, and light is the witness.”"
  }
};

// ============================================================================
// AUDIO SYNTHESIZER (Web Audio API for Zero-Asset Haptic Feedback)
// ============================================================================
class SoundEffects {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playLatch() {
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(820, now);
      osc.frequency.exponentialRampToValueAtTime(180, now + 0.045);
      gain.gain.setValueAtTime(0.24, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.045);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.045);
    } catch (e) {}
  }

  playClick() {
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(420, now);
      osc.frequency.exponentialRampToValueAtTime(140, now + 0.04);

      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.04);
    } catch (e) {}
  }

  playCordSnap() {
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(620, now);
      osc.frequency.exponentialRampToValueAtTime(200, now + 0.08);

      gain.gain.setValueAtTime(0.28, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.08);
    } catch (e) {}
  }

  playDoorOpen() {
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(140, now);
      osc.frequency.exponentialRampToValueAtTime(70, now + 0.35);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(400, now);

      gain.gain.setValueAtTime(0.22, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.35);
    } catch (e) {}
  }

  playDoorClose() {
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(280, now);
      osc.frequency.exponentialRampToValueAtTime(90, now + 0.06);

      gain.gain.setValueAtTime(0.24, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.06);
    } catch (e) {}
  }

  playCardFlip() {
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(920, now);
      osc.frequency.exponentialRampToValueAtTime(440, now + 0.12);

      gain.gain.setValueAtTime(0.14, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.12);
    } catch (e) {}
  }

  playHover() {
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(680, now);
      gain.gain.setValueAtTime(0.03, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.02);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.02);
    } catch (e) {}
  }
}

const sfx = new SoundEffects();

// ============================================================================
// SPRING HELPER (Semi-Implicit Euler Physics)
// ============================================================================
function spring({ tension = 120, friction = 14 }, onUpdate) {
  let pos = 0, vel = 0, target = 0, raf = 0, last = 0;

  function step(now) {
    if (!last) last = now;
    const dt = Math.min((now - last) / 1000, 0.064);
    last = now;

    const f = -tension * (pos - target) - friction * vel;
    vel += f * dt;
    pos += vel * dt;

    onUpdate(pos);

    if (Math.abs(pos - target) > 0.001 || Math.abs(vel) > 0.001) {
      raf = requestAnimationFrame(step);
    } else {
      pos = target;
      vel = 0;
      onUpdate(pos);
      raf = 0;
      last = 0;
    }
  }

  return {
    to(val) {
      target = val;
      if (!raf) raf = requestAnimationFrame(step);
    },
    set(val) {
      target = pos = val;
      vel = 0;
      onUpdate(pos);
    }
  };
}

// ============================================================================
// VERLET ROPE PULL CORD (LIGHT / CHARCOAL DARK THEME SWITCH)
// ============================================================================
class PullCord {
  constructor() {
    this.wrap = document.getElementById('cord');
    if (!this.wrap) return;
    this.cv = this.wrap.querySelector('.cord__cv');
    this.hit = document.getElementById('cordHit');
    if (!this.cv || !this.hit) return;

    this.ctx = this.cv.getContext('2d');
    this.N = 26;                          // segments
    this.G = 4600;                        // gravity, px/s^2
    this.STEP = 1 / 120;                  // fixed physics step
    this.ITER = 16;                       // constraint passes
    this.dpr = 1;
    this.W = 300;
    this.H = 500;
    this.L = 220;
    this.EXT_MAX = 46;
    this.HIDDEN = 70;
    this.seg = 10;
    this.ax = 200;
    this.thick = 3.2;
    this.knobS = 1;
    this.pts = [];                        // {x,y,px,py,w}
    this.ext = 0;
    this.extV = 0;
    this.armed = true;
    this.grab = -1;
    this.grabOff = { x: 0, y: 0 };
    this.target = null;
    this.ptr = null;
    this.ptrPrev = null;
    this.downAt = 0;
    this.downPos = null;
    this.moved = 0;
    this.acc = 0;
    this.lastT = 0;
    this.t = 0;
    this.dropped = true;
    this.live = true;
    this.sleeping = false;
    this.still = 0;
    this.touchedAt = performance.now();
    this.brush = { last: null };

    this.init();
  }

  init() {
    // Restore or initialize mode
    try {
      const isLightUrl = location.hash.includes('light') || location.search.includes('mode=light');
      const isDarkUrl = location.hash.includes('dark') || location.search.includes('mode=dark');
      const saved = localStorage.getItem('kabilan-theme');
      if (isLightUrl || (!isDarkUrl && saved === 'light')) {
        delete document.documentElement.dataset.mode;
        document.documentElement.removeAttribute('data-mode');
      } else {
        document.documentElement.dataset.mode = 'dark';
        document.documentElement.setAttribute('data-mode', 'dark');
      }
      this.hit.setAttribute('aria-checked', String(document.documentElement.dataset.mode === 'dark'));
    } catch (e) {}

    this.layout();

    // Event listeners
    const local = (e) => {
      const r = this.wrap.getBoundingClientRect();
      return { x: e.clientX - r.left, y: e.clientY - r.top };
    };

    const onMove = (e) => {
      if (this.grab < 0) return;
      e.preventDefault();
      this.ptrPrev = this.ptr;
      this.ptr = local(e);
      this.moved = Math.max(this.moved, Math.hypot(this.ptr.x - this.downPos.x, this.ptr.y - this.downPos.y));
    };

    const endDrag = () => {
      if (this.grab < 0) return;
      const g = this.pts[this.grab];
      if (this.ptr && this.ptrPrev) {
        const vx = this.ptr.x - this.ptrPrev.x, vy = this.ptr.y - this.ptrPrev.y;
        g.px = g.x - vx * 0.5;
        g.py = g.y - vy * 0.5;
      }
      const tap = this.moved < 6 && (performance.now() - this.downAt < 300);
      this.grab = -1;
      this.target = null;
      this.ptr = this.ptrPrev = null;
      this.wrap.classList.remove('dragging');
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', endDrag);
      window.removeEventListener('pointercancel', endDrag);
      if (tap) this.tug();
    };

    const startDrag = (e, idx) => {
      this.wake();
      this.grab = idx;
      const p = local(e), g = this.pts[idx];
      this.grabOff = { x: p.x - g.x, y: p.y - g.y };
      this.ptr = this.ptrPrev = p;
      this.target = { x: g.x, y: g.y };
      this.downAt = performance.now();
      this.downPos = p;
      this.moved = 0;
      this.wrap.classList.add('dragging');
      window.addEventListener('pointermove', onMove, { passive: false });
      window.addEventListener('pointerup', endDrag);
      window.addEventListener('pointercancel', endDrag);
      sfx.playClick();
    };

    this.hit.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      try { this.hit.setPointerCapture(e.pointerId); } catch (_) {}
      startDrag(e, this.N);
    });

    this.hit.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.tug();
      }
    });

    this.hit.addEventListener('click', (e) => e.preventDefault());

    // Desktop: grabbing the rope anywhere along its length
    document.addEventListener('pointerdown', (e) => {
      if (e.pointerType !== 'mouse' || e.button !== 0 || this.grab >= 0 || e.target === this.hit) return;
      const p = local(e);
      if (p.x < 0 || p.y < 0 || p.x > this.W || p.y > this.H) return;
      let best = -1, bd = 12;
      for (let i = 2; i <= this.N; i++) {
        if (this.pts[i].y < 0) continue;
        const d = Math.hypot(this.pts[i].x - p.x, this.pts[i].y - p.y);
        if (d < bd) { bd = d; best = i; }
      }
      if (best > 0) {
        e.preventDefault();
        startDrag(e, best);
      }
    });

    // Mouse brushing past rope nudges it
    window.addEventListener('pointermove', (e) => {
      if (this.grab >= 0 || e.pointerType !== 'mouse') return;
      const p = local(e);
      if (p.x < -20 || p.y < -20 || p.x > this.W + 20 || p.y > this.H + 20) {
        this.brush.last = null;
        return;
      }
      if (this.brush.last) {
        this.wake();
        const vx = p.x - this.brush.last.x, vy = p.y - this.brush.last.y;
        for (let i = 2; i <= this.N; i++) {
          const q = this.pts[i], d = Math.hypot(q.x - p.x, q.y - p.y);
          if (d < 16) {
            const f = (1 - d / 16) * 0.35;
            q.x += vx * f;
            q.y += vy * f * 0.5;
          }
        }
      }
      this.brush.last = p;
    }, { passive: true });

    window.addEventListener('resize', () => {
      this.wake();
      clearTimeout(this._resizeT);
      this._resizeT = setTimeout(() => { this.layout(); this.wake(); }, 80);
    });

    new MutationObserver(() => this.wake()).observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-mode']
    });

    window.__cordWake = () => this.wake();

    requestAnimationFrame((now) => this.loop(now));
  }

  layout() {
    const root = document.documentElement;
    const rem = parseFloat(getComputedStyle(root).fontSize) || 16;
    const vw = window.innerWidth, vh = window.innerHeight;

    if (vw >= 1024) {
      this.L = Math.min(270, Math.max(190, vh * 0.3));
      this.EXT_MAX = 72;
      this.thick = 3.7;
      this.knobS = 1.3;
    } else if (vw >= 640) {
      this.L = Math.min(220, Math.max(160, vh * 0.2));
      this.EXT_MAX = 62;
      this.thick = 3.4;
      this.knobS = 1.2;
    } else {
      this.L = 70;
      this.EXT_MAX = 54;
      this.thick = 3.1;
      this.knobS = 1.1;
    }

    this.HIDDEN = this.EXT_MAX + 18;
    this.W = Math.min(vw, 340);
    this.H = Math.round(this.L + this.EXT_MAX + 170);
    this.wrap.style.height = this.H + 'px';

    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.cv.width = Math.round(this.W * this.dpr);
    this.cv.height = Math.round(this.H * this.dpr);

    const ck = document.querySelector('.hdr .clock');
    let newAx;
    if (ck && ck.offsetWidth && vw >= 768) {
      const targetX = ck.getBoundingClientRect().right + 2.5 * rem;
      newAx = Math.max(28, Math.min(this.W - 28, targetX - (vw - this.W)));
    } else {
      newAx = this.W - (vw >= 1024 ? 4.25 * rem : 3.5 * rem);
    }

    const total = this.L + this.HIDDEN;
    this.seg = total / this.N;

    if (!this.pts.length) {
      for (let i = 0; i <= this.N; i++) {
        const x = newAx + Math.sin(i * 0.4) * 0.5, y = -this.HIDDEN + i * this.seg;
        this.pts.push({ x, y, px: x, py: y, w: i === 0 ? 0 : i === this.N ? 0.28 : 1 });
      }
    } else {
      const dx = newAx - this.ax;
      for (const p of this.pts) {
        p.x += dx;
        p.px += dx;
      }
    }
    this.ax = newAx;
  }

  tug() {
    this.wake();
    this.extV = this.EXT_MAX * 44;
    this.pts[this.N].px = this.pts[this.N].x + 1.5;
    sfx.playClick();
  }

  wake() {
    this.still = 0;
    this.touchedAt = performance.now();
    if (!this.sleeping) return;
    this.sleeping = false;
    this.lastT = 0;
    this.acc = 0;
    requestAnimationFrame((now) => this.loop(now));
  }

  toggleMode() {
    const root = document.documentElement;
    const isDark = root.dataset.mode === 'dark';
    const next = isDark ? 'light' : 'dark';

    const apply = () => {
      if (next === 'dark') {
        root.dataset.mode = 'dark';
        root.setAttribute('data-mode', 'dark');
      } else {
        delete root.dataset.mode;
        root.removeAttribute('data-mode');
      }
      const themeMeta = document.querySelector('meta[name="theme-color"]');
      if (themeMeta) themeMeta.setAttribute('content', next === 'dark' ? '#1A1818' : '#EEEAE6');
      if (this.hit) this.hit.setAttribute('aria-checked', String(next === 'dark'));
      try {
        localStorage.setItem('kabilan-theme', next);
      } catch (e) {}
    };

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduced && document.startViewTransition) {
      document.startViewTransition(() => apply());
    } else {
      apply();
    }
  }

  step(dt) {
    this.t += dt;

    if (this.grab < 0) {
      const K = 760, C = 21;
      this.extV += (-K * this.ext - C * this.extV) * dt;
      this.ext += this.extV * dt;
    }

    if (this.ext > this.EXT_MAX * 0.8 && this.armed && this.live) {
      this.armed = false;
      this.toggleMode();
      sfx.playCordSnap();
      try { navigator.vibrate?.(12); } catch (e) {}
    }
    if (this.ext < this.EXT_MAX * 0.22) {
      this.armed = true;
    }

    const a = this.pts[0];
    a.x = a.px = this.ax;
    a.y = a.py = -this.HIDDEN + this.ext;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const wind = reduced ? 0 : (Math.sin(this.t * 0.63) * 16 + Math.sin(this.t * 1.71 + 1.3) * 7);
    const damp = this.grab >= 0 ? 0.992 : 0.9875;

    for (let i = 1; i <= this.N; i++) {
      if (i === this.grab) continue;
      const p = this.pts[i];
      const vx = (p.x - p.px) * damp, vy = (p.y - p.py) * damp;
      p.px = p.x;
      p.py = p.y;
      p.x += vx + wind * dt * dt * (i / this.N);
      p.y += vy + this.G * dt * dt;
    }

    if (this.grab >= 0 && this.target) {
      const g = this.pts[this.grab];
      g.px = g.x;
      g.py = g.y;
      g.x = this.target.x;
      g.y = this.target.y;
    }

    for (let k = 0; k < this.ITER; k++) {
      for (let i = 0; i < this.N; i++) {
        const p1 = this.pts[i], p2 = this.pts[i + 1];
        const w1 = (i === this.grab) ? 0 : p1.w, w2 = (i + 1 === this.grab) ? 0 : p2.w;
        const sw = w1 + w2;
        if (!sw) continue;
        const dx = p2.x - p1.x, dy = p2.y - p1.y;
        const d = Math.hypot(dx, dy) || 1e-6;
        const diff = (d - this.seg) / d / sw;
        p1.x += dx * diff * w1;
        p1.y += dy * diff * w1;
        p2.x -= dx * diff * w2;
        p2.y -= dy * diff * w2;
      }
    }

    for (let i = 1; i <= this.N; i++) {
      const p = this.pts[i];
      if (p.x < 14) p.x = 14;
      else if (p.x > this.W - 14) p.x = this.W - 14;
      if (p.y > this.H - 46) p.y = this.H - 46;
    }
  }

  updateDrag() {
    if (this.grab < 0 || !this.ptr) return;
    let tx = this.ptr.x - this.grabOff.x, ty = this.ptr.y - this.grabOff.y;
    const bx = this.ax, by = -this.HIDDEN;
    const reach = this.grab * this.seg;
    const dx = tx - bx, dy = ty - by, d = Math.hypot(dx, dy) || 1e-6;
    let need = d - reach;
    if (need > this.EXT_MAX) {
      const over = need - this.EXT_MAX;
      const allowed = reach + this.EXT_MAX + over * 0.14 / (1 + over / 160);
      tx = bx + dx / d * allowed;
      ty = by + dy / d * allowed;
      need = this.EXT_MAX;
    }
    const targetExt = Math.max(0, need);
    const prevExt = this.ext;
    this.ext += (targetExt - this.ext) * 0.55;
    this.extV = (this.ext - prevExt) * 60;
    this.target = { x: Math.max(14, Math.min(this.W - 14, tx)), y: Math.min(this.H - 46, ty) };
  }

  pathThrough(c, ps) {
    c.beginPath();
    c.moveTo(ps[0].x, ps[0].y);
    for (let i = 1; i < ps.length - 1; i++) {
      const mx = (ps[i].x + ps[i + 1].x) / 2, my = (ps[i].y + ps[i + 1].y) / 2;
      c.quadraticCurveTo(ps[i].x, ps[i].y, mx, my);
    }
    const l = ps[ps.length - 1];
    c.lineTo(l.x, l.y);
  }

  samples(ps, spacing) {
    const out = [];
    let carry = 0;
    for (let i = 0; i < ps.length - 1; i++) {
      const a = ps[i], b = ps[i + 1];
      const dx = b.x - a.x, dy = b.y - a.y, len = Math.hypot(dx, dy) || 1e-6;
      let s = carry;
      while (s < len) {
        out.push({ x: a.x + dx * s / len, y: a.y + dy * s / len, tx: dx / len, ty: dy / len });
        s += spacing;
      }
      carry = s - len;
    }
    return out;
  }

  knobPath(c) {
    c.beginPath();
    c.moveTo(-3.1, 6.2);
    c.bezierCurveTo(-3.6, 10.5, -9.6, 13.5, -9.6, 22.5);
    c.bezierCurveTo(-9.6, 30.5, -5.4, 35, 0, 35);
    c.bezierCurveTo(5.4, 35, 9.6, 30.5, 9.6, 22.5);
    c.bezierCurveTo(9.6, 13.5, 3.6, 10.5, 3.1, 6.2);
    c.closePath();
  }

  drawKnob(c, x, y, ang, shadowOnly) {
    c.save();
    c.translate(x, y);
    c.rotate(ang - Math.PI / 2);
    c.scale(this.knobS, this.knobS);

    if (shadowOnly) {
      this.knobPath(c);
      c.fill();
      c.fillRect(-3.4, -0.5, 6.8, 7.5);
      c.restore();
      return;
    }

    // Brass ferrule where the cord is crimped
    const fg = c.createLinearGradient(-3.6, 0, 3.6, 0);
    fg.addColorStop(0, '#5b4a2c');
    fg.addColorStop(0.3, '#e8d59e');
    fg.addColorStop(0.55, '#b0924f');
    fg.addColorStop(1, '#4a3a1f');
    c.fillStyle = fg;
    c.beginPath();
    c.roundRect ? c.roundRect(-3.5, -0.6, 7, 7.6, 1.2) : c.rect(-3.5, -0.6, 7, 7.6);
    c.fill();

    c.fillStyle = 'rgba(0,0,0,.25)';
    c.fillRect(-3.5, 2.6, 7, 0.7);
    c.fillRect(-3.5, 4.4, 7, 0.6);

    // Turned walnut body (warm acorn shape)
    this.knobPath(c);
    const bg = c.createLinearGradient(-9.6, 0, 9.6, 0);
    bg.addColorStop(0, '#24150c');
    bg.addColorStop(0.22, '#6b3f22');
    bg.addColorStop(0.4, '#a8693d');
    bg.addColorStop(0.58, '#7c4828');
    bg.addColorStop(0.85, '#3b2213');
    bg.addColorStop(1, '#1d110a');
    c.fillStyle = bg;
    c.fill();

    c.save();
    this.knobPath(c);
    c.clip();

    // Wood grain lines
    c.strokeStyle = 'rgba(30,14,6,.28)';
    c.lineWidth = 0.55;
    for (let k = -3; k <= 3; k++) {
      c.beginPath();
      c.moveTo(k * 2.4 - 0.6, 8);
      c.bezierCurveTo(k * 2.9 + 1, 16, k * 2.2 - 1, 26, k * 1.6, 35);
      c.stroke();
    }

    // Soft top-left key light
    const hl = c.createRadialGradient(-3.6, 17, 0.5, -3.6, 17, 9);
    hl.addColorStop(0, 'rgba(255,226,190,.42)');
    hl.addColorStop(1, 'rgba(255,226,190,0)');
    c.fillStyle = hl;
    c.fillRect(-10, 6, 20, 30);

    // Bottom occlusion shadow
    const bo = c.createLinearGradient(0, 24, 0, 35.5);
    bo.addColorStop(0, 'rgba(0,0,0,0)');
    bo.addColorStop(1, 'rgba(0,0,0,.35)');
    c.fillStyle = bo;
    c.fillRect(-10, 6, 20, 30);
    c.restore();

    // Crisp specular highlight streak
    c.fillStyle = 'rgba(255,240,220,.38)';
    c.beginPath();
    c.ellipse(-4.4, 20.5, 1.1, 5.2, -0.08, 0, Math.PI * 2);
    c.fill();

    c.restore();
  }

  draw() {
    const c = this.ctx;
    c.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    c.clearRect(0, 0, this.W, this.H);
    const ps = this.pts;
    const last = ps[this.N], prev = ps[this.N - 1];
    const ang = Math.atan2(last.y - prev.y, last.x - prev.x);

    // Cast soft shadow on the wall behind
    const root = document.documentElement;
    const sa = parseFloat(getComputedStyle(root).getPropertyValue('--cord-shadow')) || 0.2;
    c.save();
    c.translate(7, 11);
    if ('filter' in c) c.filter = 'blur(3px)';
    c.strokeStyle = `rgba(0,0,0,${sa * 0.8})`;
    c.lineWidth = this.thick + 1;
    c.lineCap = 'round';
    this.pathThrough(c, ps);
    c.stroke();
    c.fillStyle = `rgba(0,0,0,${sa})`;
    this.drawKnob(c, last.x, last.y, ang, true);
    c.restore();

    // Braided cotton cord: dark edge, cream body, lit highlight, diagonal braid twists
    c.lineCap = 'round';
    c.lineJoin = 'round';
    this.pathThrough(c, ps);
    c.strokeStyle = '#6f6455';
    c.lineWidth = this.thick + 1.3;
    c.stroke();

    c.strokeStyle = '#d6ccba';
    c.lineWidth = this.thick;
    c.stroke();

    const sm = this.samples(ps, this.thick * 1.05);
    c.lineWidth = Math.max(0.6, this.thick * 0.24);
    c.strokeStyle = 'rgba(96,82,64,.55)';
    c.beginPath();
    for (const q of sm) {
      if (q.y < -2) continue;
      const nx = -q.ty, ny = q.tx, h = this.thick * 0.5;
      c.moveTo(q.x - nx * h - q.tx * h * 0.7, q.y - ny * h - q.ty * h * 0.7);
      c.lineTo(q.x + nx * h + q.tx * h * 0.7, q.y + ny * h + q.ty * h * 0.7);
    }
    c.stroke();

    // Highlight along the lit side
    c.save();
    c.translate(-this.thick * 0.2, -this.thick * 0.05);
    this.pathThrough(c, ps);
    c.strokeStyle = 'rgba(255,252,244,.55)';
    c.lineWidth = this.thick * 0.28;
    c.stroke();
    c.restore();

    // Draw the wooden acorn knob
    this.drawKnob(c, last.x, last.y, ang, false);

    // Keep the hit target centered on the wooden knob
    const kx = last.x + Math.cos(ang) * 20 * this.knobS;
    const ky = last.y + Math.sin(ang) * 20 * this.knobS;
    this.hit.style.transform = `translate(${kx}px, ${ky}px)`;
  }

  loop(now) {
    if (!this.lastT) this.lastT = now;
    let dt = Math.min((now - this.lastT) / 1000, 1 / 20);
    this.lastT = now;
    this.updateDrag();
    this.acc += dt;
    while (this.acc >= this.STEP) {
      this.step(this.STEP);
      this.acc -= this.STEP;
    }

    if (this.dropped && this.live && this.grab < 0 && now - this.touchedAt > 2500) {
      for (const q of this.pts) {
        q.px += (q.x - q.px) * 0.06;
        q.py += (q.y - q.py) * 0.06;
      }
    }

    this.draw();

    let motion = Math.abs(this.extV) + Math.abs(this.ext);
    for (const q of this.pts) {
      motion = Math.max(motion, Math.abs(q.x - q.px) + Math.abs(q.y - q.py));
    }

    if (this.dropped && this.live && this.grab < 0 && motion < 0.06) {
      if (++this.still > 30) {
        for (const q of this.pts) {
          q.px = q.x;
          q.py = q.y;
        }
        this.sleeping = true;
        return;
      }
    } else {
      this.still = 0;
    }

    requestAnimationFrame((ts) => this.loop(ts));
  }
}

// ============================================================================
// DESK FLIP CALENDAR (HERO SKILLS CYCLER)
// ============================================================================
class FlipCalendar {
  constructor() {
    this.cal = document.getElementById('cal');
    if (!this.cal) return;

    this.skills = [
      'Web Developer',
      'App Developer',
      'UI/UX Designer',
      'Graphic Designer'
    ];
    this.HOLD = 1800;
    this.FLIP = 1100;
    this.body = this.cal.querySelector('.cal__body');
    this.leaf = this.cal.querySelector('.cal__leaf');
    this.under = this.cal.querySelector('[data-under]');
    this.face = this.cal.querySelector('.cal__face');
    this.rear = this.cal.querySelector('.cal__rear');
    this.rings = this.cal.querySelector('.cal__rings');
    this.meas = this.cal.querySelector('.cal__measure');
    this.n = this.skills.length;
    this.i = 0;
    this.timer = 0;
    this.flipping = false;

    this.init();
  }

  init() {
    this.paint(this.face, 0);
    this.paint(this.under, 1);
    this.fit();

    document.fonts?.ready.then(() => this.fit());
    window.addEventListener('resize', () => {
      clearTimeout(this._rt);
      this._rt = setTimeout(() => this.fit(), 100);
    });

    const start = () => {
      this.timer = setTimeout(() => this.flip(), 1200);
    };

    if (document.body.classList.contains('ready')) start();
    else window.addEventListener('load', start, { once: true });
  }

  paint(page, k) {
    if (!page) return;
    const w = page.querySelector('.cal__word');
    const no = page.querySelector('.cal__no');
    if (w) w.textContent = this.skills[k];
    if (no) no.textContent = `${String(k + 1).padStart(2, '0')} / ${String(this.n).padStart(2, '0')}`;
  }

  fit() {
    this.cal.style.fontSize = '';
    const fs = parseFloat(getComputedStyle(this.cal).fontSize) || 16;
    let max = 0;
    for (const w of this.skills) {
      if (this.meas) {
        this.meas.textContent = w;
        max = Math.max(max, this.meas.getBoundingClientRect().width);
      }
    }
    const wEm = Math.max(6.5, (max / fs) + 0.9);
    this.body.style.setProperty('--cal-w', wEm.toFixed(3) + 'em');
    this.cal.style.setProperty('--cal-w', wEm.toFixed(3) + 'em');

    const h1El = this.cal.closest('.h1') || this.cal.parentElement;
    const avail = h1El ? (h1El.getBoundingClientRect().width - fs * 0.3) : window.innerWidth * 0.85;
    const need = wEm * fs;
    if (need > avail && avail > 0) {
      this.cal.style.fontSize = (fs * avail / need).toFixed(2) + 'px';
    }

    const count = Math.max(5, Math.round((wEm - 0.6) / 0.7) + 1);
    if (this.rings) this.rings.innerHTML = '<i></i>'.repeat(count);
    this.cal.querySelectorAll('.cal__holes').forEach(h => {
      h.innerHTML = '<i></i>'.repeat(count);
    });
  }

  flip() {
    if (document.hidden) {
      this.timer = setTimeout(() => this.flip(), 600);
      return;
    }
    this.flipping = true;
    const next = (this.i + 1) % this.n;

    const timing = { duration: this.FLIP, easing: 'cubic-bezier(.5,.05,.2,1)', fill: 'forwards' };
    if (this.face) {
      this.face.animate([
        { opacity: 1 },
        { opacity: 1, offset: 0.28 },
        { opacity: 0, offset: 0.29 },
        { opacity: 0 }
      ], { duration: this.FLIP, easing: 'linear', fill: 'forwards' });
    }

    if (this.rear) {
      this.rear.animate([
        { filter: 'brightness(1)' },
        { filter: 'brightness(1.02)', offset: 0.29 },
        { filter: 'brightness(0.96)', offset: 0.45 },
        { filter: 'brightness(0.9)' }
      ], { duration: this.FLIP, easing: 'linear', fill: 'forwards' });
    }

    const a = this.leaf.animate([
      { transform: 'translateZ(.004em) rotateX(0deg)' },
      { transform: 'translateZ(.004em) rotateX(352deg)' }
    ], timing);

    a.onfinish = () => {
      this.i = next;
      this.paint(this.face, this.i);
      this.leaf.getAnimations({ subtree: true }).forEach(x => x.cancel());
      this.paint(this.under, (this.i + 1) % this.n);
      this.flipping = false;
      this.timer = setTimeout(() => this.flip(), this.HOLD);
    };
  }
}

// ============================================================================
// LIQUID COLOR REVEAL & 3D PARALLAX (PORTRAIT STAGE CANVAS)
// ============================================================================
class LiquidReveal {
  constructor() {
    this.fig = document.getElementById('fig');
    this.cv = document.getElementById('figCanvas');
    this.img = document.getElementById('figBase');
    if (!this.fig || !this.cv) return;

    this.ctx = this.cv.getContext('2d');
    this.points = [];
    this.particles = [];

    this.init();
  }

  init() {
    this.resize();
    window.addEventListener('resize', () => this.resize());

    const onPointer = (e) => {
      const rect = this.cv.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      this.points.push({ x, y, r: 60, a: 1 });
      if (this.points.length > 28) this.points.shift();

      // Emit subtle luminous particles
      for (let k = 0; k < 2; k++) {
        this.particles.push({
          x: x + (Math.random() - 0.5) * 30,
          y: y + (Math.random() - 0.5) * 30,
          vx: (Math.random() - 0.5) * 1.5,
          vy: -0.8 - Math.random() * 1.2,
          r: 1.2 + Math.random() * 1.8,
          a: 0.9,
          color: Math.random() > 0.5 ? '#E2B05E' : '#5C84CA'
        });
      }
      if (this.particles.length > 45) this.particles.shift();
    };

    this.fig.addEventListener('mousemove', onPointer);
    this.fig.addEventListener('touchmove', (e) => {
      if (e.touches[0]) onPointer(e.touches[0]);
    }, { passive: true });

    // Subtle 3D mouse parallax tilt across hero stage
    const hero = document.getElementById('home');
    if (hero) {
      hero.addEventListener('mousemove', (e) => {
        const hr = hero.getBoundingClientRect();
        const nx = (e.clientX - hr.left) / hr.width - 0.5;
        const ny = (e.clientY - hr.top) / hr.height - 0.5;
        if (this.img) {
          this.img.style.transform = `translate3d(${(-nx * 14).toFixed(1)}px, ${(-ny * 10).toFixed(1)}px, 0) rotateY(${(nx * 6).toFixed(1)}deg) rotateX(${(-ny * 4).toFixed(1)}deg)`;
        }
      });
      hero.addEventListener('mouseleave', () => {
        if (this.img) this.img.style.transform = '';
      });
    }

    this.loop();
  }

  resize() {
    const r = this.fig.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.w = r.width || 340;
    this.h = r.height || 420;
    this.cv.width = this.w * dpr;
    this.cv.height = this.h * dpr;
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  loop() {
    this.ctx.clearRect(0, 0, this.w, this.h);
    const isDark = document.documentElement.dataset.mode === 'dark';

    this.ctx.save();
    this.ctx.globalCompositeOperation = isDark ? 'screen' : 'source-over';

    for (let i = 0; i < this.points.length; i++) {
      const p = this.points[i];
      p.a -= 0.016;
      p.r += 0.45;

      if (p.a > 0) {
        const rad = this.ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
        if (isDark) {
          rad.addColorStop(0, `rgba(226, 176, 94, ${(p.a * 0.45).toFixed(3)})`);
          rad.addColorStop(0.5, `rgba(92, 132, 202, ${(p.a * 0.25).toFixed(3)})`);
          rad.addColorStop(1, 'transparent');
        } else {
          rad.addColorStop(0, `rgba(164, 85, 44, ${(p.a * 0.22).toFixed(3)})`);
          rad.addColorStop(0.5, `rgba(74, 53, 64, ${(p.a * 0.12).toFixed(3)})`);
          rad.addColorStop(1, 'transparent');
        }

        this.ctx.fillStyle = rad;
        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        this.ctx.fill();
      }
    }
    this.points = this.points.filter(p => p.a > 0);

    // Render luminous floating particles
    for (let i = 0; i < this.particles.length; i++) {
      const pt = this.particles[i];
      pt.x += pt.vx;
      pt.y += pt.vy;
      pt.a -= 0.02;

      if (pt.a > 0) {
        this.ctx.fillStyle = pt.color;
        this.ctx.globalAlpha = Math.max(0, pt.a);
        this.ctx.beginPath();
        this.ctx.arc(pt.x, pt.y, pt.r, 0, Math.PI * 2);
        this.ctx.fill();
      }
    }
    this.particles = this.particles.filter(pt => pt.a > 0);
    this.ctx.restore();

    requestAnimationFrame(() => this.loop());
  }
}

// ============================================================================
// 3D SKILL DOORS & PROJECT ROOM WALKTHROUGH
// ============================================================================
// ============================================================================
// CASE STUDY MODAL
// ============================================================================
class CaseStudyModal {
  constructor() {
    this.modal = document.getElementById('csModal');
    if (!this.modal) return;

    this.backdrop = document.getElementById('csBackdrop');
    this.closeBtn = document.getElementById('csClose');
    this.closeFoot = document.getElementById('csCloseFoot');
    this.title = document.getElementById('csTitle');
    this.subtitle = document.getElementById('csSubtitle');
    this.tag = document.getElementById('csTag');
    this.metrics = document.getElementById('csMetrics');
    this.tabDemo = document.getElementById('csTabDemo');
    this.tabSpecs = document.getElementById('csTabSpecs');
    this.viewDemo = document.getElementById('csViewDemo');
    this.viewSpecs = document.getElementById('csViewSpecs');
    this.demoStage = document.getElementById('csDemoStage');
    this.highlights = document.getElementById('csHighlights');
    this.techStack = document.getElementById('csTechStack');
    this.benchmarks = document.getElementById('csBenchmarks');
    this.inquireBtn = document.getElementById('csInquireBtn');

    this.currentProject = null;
    this.activeSimLoop = null;

    this.init();
  }

  init() {
    if (this.backdrop) this.backdrop.addEventListener('click', () => this.close());
    if (this.closeBtn) this.closeBtn.addEventListener('click', () => this.close());
    if (this.closeFoot) this.closeFoot.addEventListener('click', () => this.close());

    if (this.tabDemo && this.tabSpecs) {
      this.tabDemo.addEventListener('click', () => this.switchTab('demo'));
      this.tabSpecs.addEventListener('click', () => this.switchTab('specs'));
    }

    if (this.inquireBtn) {
      this.inquireBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.close();
        const contactModal = document.getElementById('modal');
        if (contactModal) {
          const m = new ContactModal();
          setTimeout(() => m.open(), 250);
        }
      });
    }

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !this.modal.hidden) {
        this.close();
      }
    });
  }

  open(project, disciplineTitle, defaultTab = 'demo') {
    sfx.playClick();
    this.currentProject = project;

    if (this.title) this.title.textContent = project.name;
    if (this.subtitle) this.subtitle.textContent = project.desc;
    if (this.tag) this.tag.textContent = disciplineTitle;

    if (this.metrics && project.metrics) {
      this.metrics.innerHTML = project.metrics.map(m => `
        <div class="csmodal__metric">
          <strong>${m.val}</strong>
          <span>${m.lbl}</span>
        </div>
      `).join('');
    }

    if (this.highlights && project.highlights) {
      this.highlights.innerHTML = project.highlights.map(h => `<li>${h}</li>`).join('');
    }

    if (this.techStack && project.techDetails) {
      this.techStack.innerHTML = `
        <p style="font-size:0.9rem;line-height:1.55;color:var(--foreground);margin-bottom:0.75rem">${project.techDetails}</p>
        <div style="display:flex;flex-wrap:wrap;gap:0.4rem">
          ${project.tags ? project.tags.map(t => `<span class="csspecs__tag">${t}</span>`).join('') : ''}
        </div>
      `;
    }

    if (this.benchmarks && project.benchmarks) {
      this.benchmarks.innerHTML = project.benchmarks.map(b => `
        <div class="csspecs__bench">
          <span>${b.name}</span>
          <strong>${b.score}</strong>
        </div>
      `).join('');
    }

    this.switchTab(defaultTab);
    this.modal.hidden = false;
    requestAnimationFrame(() => this.modal.classList.add('open'));
  }

  close() {
    sfx.playClick();
    this.modal.classList.remove('open');
    if (this.activeSimLoop) {
      cancelAnimationFrame(this.activeSimLoop);
      this.activeSimLoop = null;
    }
    setTimeout(() => {
      this.modal.hidden = true;
      if (this.demoStage) this.demoStage.innerHTML = '';
    }, 320);
  }

  switchTab(tab) {
    sfx.playHover();
    if (tab === 'demo') {
      this.tabDemo?.classList.add('on');
      this.tabDemo?.setAttribute('aria-selected', 'true');
      this.tabSpecs?.classList.remove('on');
      this.tabSpecs?.setAttribute('aria-selected', 'false');
      if (this.viewDemo) { this.viewDemo.classList.add('on'); this.viewDemo.hidden = false; }
      if (this.viewSpecs) { this.viewSpecs.classList.remove('on'); this.viewSpecs.hidden = true; }
    } else {
      this.tabSpecs?.classList.add('on');
      this.tabSpecs?.setAttribute('aria-selected', 'true');
      this.tabDemo?.classList.remove('on');
      this.tabDemo?.setAttribute('aria-selected', 'false');
      if (this.viewSpecs) { this.viewSpecs.classList.add('on'); this.viewSpecs.hidden = false; }
      if (this.viewDemo) { this.viewDemo.classList.remove('on'); this.viewDemo.hidden = true; }
    }
  }
}


class DoorsController {
  constructor(csModal) {
    this.csModal = csModal;
    this.sec = document.getElementById('works');
    if (!this.sec) return;

    this.units = [...this.sec.querySelectorAll('.unit')];
    this.row = this.sec.querySelector('.doors__row');
    this.wall = this.sec.querySelector('.doors__wall') || this.sec;
    this.dinfo = document.getElementById('dinfo');
    this.dots = [...this.sec.querySelectorAll('.doors__dots i')];
    this.cursor = document.getElementById('doorCursor');

    // Room elements
    this.wallv = document.getElementById('wallv');
    this.roomHdr = document.getElementById('roomHdr');
    this.roomScroll = document.getElementById('roomScroll');
    this.deckStack = document.getElementById('deckStack');
    this.roomBackBtn = document.getElementById('roomBackBtn');
    this.roomTopBtn = document.getElementById('roomTopBtn');
    this.roomHireBtn = document.getElementById('roomHireBtn');
    this.roomWorkBtn = document.getElementById('roomWorkBtn');
    this.roomClock = document.getElementById('roomClock');
    this.roomFooterTime = document.getElementById('roomFooterTime');

    this.ANG = 85;
    this.active = 0;
    this.isTransitioning = false;
    this.inRoom = false;

    window.doorsController = this;
    this.init();
  }

  init() {
    // 1. Spring physics for 3D doors
    this.doorsState = this.units.map((u, i) => {
      const door = u.querySelector('.door');
      const s = spring({ tension: 120, friction: 14 }, o => {
        if (door) door.style.transform = `rotateY(${Math.max(0, o) * this.ANG}deg)`;
        u.style.setProperty('--o', Math.max(0, o).toFixed(4));
      });
      return { u, door, s, way: u.querySelector('.doorway') };
    });

    // 2. Custom Magnetic Cursor
    if (this.cursor) {
      this.cursor.innerHTML = '<span>Click to enter</span>';
      window.addEventListener('pointermove', (e) => {
        this.cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }, { passive: true });
    }

    // 3. Attach hover, leave, and click to door units
    this.units.forEach((u, idx) => {
      const doorway = u.querySelector('.doorway') || u;

      doorway.addEventListener('pointerenter', (e) => {
        if (!this.isTransitioning && !this.inRoom) {
          this.cursor?.classList.add('on');
          this.hoverDoor(idx);
        }
      });

      doorway.addEventListener('pointerleave', () => {
        if (!this.isTransitioning && !this.inRoom) {
          this.cursor?.classList.remove('on');
          this.leaveDoor(idx);
        }
      });

      const handleDoorClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.openRoom(idx);
      };

      doorway.addEventListener('click', handleDoorClick);
      u.addEventListener('click', (e) => {
        if (e.target.closest('.dinfo')) return;
        this.openRoom(idx);
      });
    });

    // Header and external discipline buttons
    document.querySelectorAll('[data-door]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const dIdx = parseInt(btn.dataset.door, 10) || 0;
        if (this.inRoom) {
          this.switchRoomWithDoorAnimation(dIdx);
        } else {
          this.sec.scrollIntoView({ behavior: 'smooth' });
          setTimeout(() => {
            this.openRoom(dIdx);
          }, 350);
        }
      });
    });

    // 4. Dot Navigation
    this.dots.forEach((dot, idx) => {
      dot.style.cursor = 'pointer';
      dot.addEventListener('click', () => {
        try { sfx.playClick(); } catch (e) {}
        this.hoverDoor(idx);
      });
    });

    // 5. Room Controls & Navigation
    if (this.roomBackBtn) {
      this.roomBackBtn.addEventListener('click', () => this.leaveWall());
    }
    if (this.roomTopBtn) {
      this.roomTopBtn.addEventListener('click', () => {
        this.roomScroll?.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
    if (this.roomWorkBtn) {
      this.roomWorkBtn.addEventListener('click', () => {
        this.roomScroll?.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
    if (this.roomHireBtn) {
      this.roomHireBtn.addEventListener('click', () => {
        if (typeof window.openContactModal === 'function') {
          window.openContactModal();
        } else {
          document.getElementById('contactModal')?.removeAttribute('hidden');
        }
      });
    }

    // Header Discipline Switchers inside Room
    document.querySelectorAll('[data-room-switch]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const d = parseInt(btn.dataset.roomSwitch, 10) || 0;
        if (this.inRoom) {
          this.switchRoomWithDoorAnimation(d);
        } else {
          this.openRoom(d);
        }
      });
    });

    // Room Header external links
    document.querySelectorAll('[data-room-nav]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const target = btn.dataset.roomNav;
        this.leaveWall();
        setTimeout(() => {
          if (target === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } else if (target === 'story') {
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          } else if (target === 'contact') {
            if (typeof window.openContactModal === 'function') {
              window.openContactModal();
            } else {
              document.getElementById('contactModal')?.removeAttribute('hidden');
            }
          }
        }, 500);
      });
    });

    // Keyboard navigation (Escape exits room)
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.inRoom) {
        this.leaveWall();
      }
    });

    // Live Room Time Sync
    this.updateClock();
    setInterval(() => this.updateClock(), 15000);

    // Initial info setup
    this.setInfo(0);
  }

  updateClock() {
    try {
      const now = new Date();
      const options = { hour: 'numeric', minute: '2-digit', hour12: true };
      const timeStr = now.toLocaleTimeString('en-US', options).toLowerCase();
      const dateStr = now.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
      const fullStr = `Local time ${timeStr} · ${dateStr}`;
      if (this.roomClock) this.roomClock.textContent = fullStr;
      if (this.roomFooterTime) this.roomFooterTime.textContent = `Local time ${timeStr}`;
    } catch (e) {}
  }

  setInfo(i) {
    const d = DOOR_DATA[i];
    if (!d || !this.dinfo) return;

    const h = this.dinfo.querySelector('.dinfo__h');
    const t = this.dinfo.querySelector('.dinfo__t');
    const p = this.dinfo.querySelector('.dinfo__p');

    if (h) h.textContent = d.title;
    if (t) t.textContent = d.sub;
    if (p) p.innerHTML = d.bullets.map(b => `<li>${b}</li>`).join('');

    this.dots.forEach((dot, k) => dot.classList.toggle('on', k === i));
  }

  hoverDoor(i) {
    if (this.isTransitioning || this.inRoom) return;
    this.active = i;
    this.units.forEach((u, k) => u.classList.toggle('on', k === i));
    this.sec.classList.add('focus');

    // Crack open the hovered door
    this.doorsState.forEach((ds, k) => {
      if (k === i) ds.s.to(0.24);
      else ds.s.to(0);
    });

    this.setInfo(i);

    // Dynamic placement of dinfo in available wall space
    if (this.dinfo && this.units[i]) {
      const uRect = this.units[i].getBoundingClientRect();
      const wRect = this.sec.getBoundingClientRect();
      const toRight = i < 2;

      const leftPos = toRight
        ? (uRect.right - wRect.left + 40)
        : (uRect.left - wRect.left - 380);

      this.dinfo.style.left = `${Math.max(20, leftPos)}px`;
      this.dinfo.style.top = `${uRect.top - wRect.top + uRect.height * 0.22}px`;
      this.dinfo.classList.add('on');
    }

    try { sfx.playHover(); } catch (e) {}
  }

  leaveDoor(i) {
    if (this.isTransitioning || this.inRoom) return;
    this.sec.classList.remove('focus');
    this.units.forEach(u => u.classList.remove('on'));
    this.doorsState[i]?.s.to(0);
    if (this.dinfo) this.dinfo.classList.remove('on');
  }

  openRoom(i) {
    if (this.inRoom && this.active === i) return;
    this.isTransitioning = true;
    this.active = i;

    const unit = this.units[i];
    const doorway = unit ? (unit.querySelector('.doorway') || unit) : null;

    // -------------------------------------------------------------------------
    // 1. HANDLE LATCH PRESS DOWN (0ms -> 120ms)
    // -------------------------------------------------------------------------
    if (unit) unit.classList.add('press');
    try { sfx.playLatch(); } catch (e) {}

    this.cursor?.classList.remove('on');
    this.dinfo?.classList.remove('on');
    this.sec.classList.remove('focus');

    // -------------------------------------------------------------------------
    // 2. DOOR SWINGS FULLY OPEN INWARDS INTO THE ROOM (120ms -> 560ms)
    // -------------------------------------------------------------------------
    setTimeout(() => {
      if (unit) {
        unit.classList.remove('press');
        unit.classList.add('door-open');
      }
      // Spring swings door to 85deg INWARD into the room
      this.doorsState[i]?.s.to(1.0);
      try { sfx.playDoorOpen(); } catch (e) {}

      // -----------------------------------------------------------------------
      // 3. ONLY AFTER DOOR IS FULLY OPEN INWARDS: CAMERA ZOOM THROUGH DOORWAY (560ms)
      // -----------------------------------------------------------------------
      setTimeout(() => {
        let tx = 0, ty = 0, sEnd = 5;
        if (doorway) {
          const r = doorway.getBoundingClientRect();
          const cx = r.left + r.width * 0.52;
          const cy = r.top + r.height * 0.46;
          const sr = this.sec.getBoundingClientRect();

          tx = window.innerWidth * 0.5 - cx;
          ty = window.innerHeight * 0.5 - cy;
          sEnd = Math.max(
            window.innerWidth / Math.max(r.width * 0.5, 60),
            window.innerHeight / Math.max(r.height * 0.5, 90)
          ) * 1.5;

          this.sec.style.transformOrigin = `${cx - sr.left}px ${cy - sr.top}px`;
        }

        this.sec.classList.add('through');
        this.sec.style.transition = 'transform 0.55s cubic-bezier(0.22, 1, 0.36, 1)';
        this.sec.style.transform = `translate(${tx}px, ${ty}px) scale(${sEnd})`;

        // ---------------------------------------------------------------------
        // 4. CROSS THE THRESHOLD INTO THE ROOM (920ms)
        // ---------------------------------------------------------------------
        setTimeout(() => {
          this.inRoom = true;
          this.switchDiscipline(i);
          this.wallv?.classList.add('on', 'live');
          document.body.style.overflow = 'hidden';
          this.roomScroll?.scrollTo({ top: 0, behavior: 'instant' });
          this.isTransitioning = false;
        }, 360);
      }, 440); // 120ms + 440ms = 560ms: Exactly after door reaches full 85deg inward open position!
    }, 120);

    setTimeout(() => {
      this.isTransitioning = false;
    }, 1300);
  }

  leaveWall() {
    if (this.isTransitioning || !this.inRoom) return;
    this.isTransitioning = true;
    try { sfx.playDoorClose(); } catch (e) {}

    // Fade out room view
    this.wallv?.classList.remove('live', 'on');
    document.body.style.overflow = '';

    // Step 1: Smoothly zoom camera backward out of doorway back to the 4-door wall
    this.sec.style.transition = 'transform 0.48s cubic-bezier(0.16, 1, 0.3, 1)';
    this.sec.style.transform = 'none';

    // Step 2: Door swings smoothly shut from -84deg back to 0deg
    setTimeout(() => {
      this.units.forEach(u => {
        u.classList.remove('door-open', 'press');
      });
      this.doorsState.forEach(ds => ds.s.to(0));
    }, 100);

    // Step 3: Settle back on the pristine 4-door wall
    setTimeout(() => {
      this.sec.classList.remove('through');
      this.sec.style.transition = '';
      this.sec.style.transformOrigin = '';
      this.inRoom = false;
      this.isTransitioning = false;
      this.units[this.active]?.querySelector('.doorway')?.focus();
    }, 480);

    setTimeout(() => {
      this.isTransitioning = false;
    }, 800);
  }

  switchRoomWithDoorAnimation(targetIdx) {
    if (targetIdx === this.active && this.inRoom) {
      this.roomScroll?.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    this.isTransitioning = true;
    const oldIdx = this.active;
    const oldUnit = this.units[oldIdx];
    const newUnit = this.units[targetIdx];

    // -------------------------------------------------------------------------
    // STEP 1: EXIT CURRENT ROOM & WALK OUT OF CURRENT DOOR (0ms -> 450ms)
    // -------------------------------------------------------------------------
    try { sfx.playDoorClose(); } catch (e) {}

    // Fade out room view immediately
    this.wallv?.classList.remove('live', 'on');
    document.body.style.overflow = '';

    // Camera zooms backward out of current doorway back to 4-door wall
    this.sec.style.transition = 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)';
    this.sec.style.transform = 'none';

    // Current door swings shut from 85deg back to 0deg
    setTimeout(() => {
      if (oldUnit) {
        oldUnit.classList.remove('door-open', 'press', 'on');
      }
      this.doorsState[oldIdx]?.s.to(0);
    }, 80);

    // -------------------------------------------------------------------------
    // STEP 2: WALL SETTLES & PREPARE TARGET DOOR (450ms)
    // -------------------------------------------------------------------------
    setTimeout(() => {
      this.sec.classList.remove('through');
      this.sec.style.transition = '';
      this.sec.style.transformOrigin = '';
      this.inRoom = false;
      this.isTransitioning = false;

      // Highlight target door
      this.active = targetIdx;
      this.units.forEach((u, k) => u.classList.toggle('on', k === targetIdx));

      // -----------------------------------------------------------------------
      // STEP 3: OPEN TARGET DOOR WITH FULL INWARD ANIMATION & WALKTHROUGH ZOOM!
      // -----------------------------------------------------------------------
      this.openRoom(targetIdx);
    }, 450);
  }

  switchDiscipline(dIdx) {
    this.active = dIdx;
    const discipline = DOOR_DATA[dIdx];
    if (!discipline) return;

    // Update active tab in header
    document.querySelectorAll('[data-room-switch]').forEach(btn => {
      const idx = parseInt(btn.dataset.roomSwitch, 10);
      btn.classList.toggle('on', idx === dIdx);
    });

    // Render projects inside stacked deck
    this.renderDeck(discipline, dIdx);
  }

  renderDeck(discipline, dIdx) {
    if (!this.deckStack) return;

    this.deckStack.innerHTML = discipline.projects.map((p, pIdx) => {
      const isAlt = p.alt ? 'deck__card--alt' : '';
      const visualHtml = this.renderVisual(p, dIdx, pIdx);

      return `
        <article class="deck__card ${isAlt}" style="--card-i:${pIdx};" data-card-idx="${pIdx}">
          <div class="deck__info">
            <div class="deck__meta">
              <span class="live-dot"></span>
              <span>${p.tag}</span>
            </div>
            <h3 class="deck__title">${p.name}</h3>
            <p class="deck__sub">${p.sub}</p>
            <p class="deck__desc">${p.desc}</p>
            <div class="deck__tags">
              ${p.tags.map(t => `<span class="deck__tag">${t}</span>`).join('')}
            </div>
            <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="deck__btn">
              <span>Visit live site</span>
              <span class="deck__btn-arrow">↗</span>
            </a>
          </div>
          <div class="deck__visual">
            ${visualHtml}
          </div>
        </article>
      `;
    }).join('');
  }

      renderVisual(p, dIdx, pIdx) {
    const cursorSvg = `<svg class="sim-cursor" viewBox="0 0 24 24"><path d="M4 2l16 12-7 1 4 7-3 1-4-7-6 4z" fill="#ffffff" stroke="#111110" stroke-width="1.5"/></svg>`;
    const liveTag = `<div class="screen-live-tag"><span class="rec-dot"></span> LIVE DEMO</div>`;

    // 1. Web Development Screens
    if (p.type === 'sandbox-calc') {
      return `
        <div class="monitor">
          <div class="monitor__body">
            <div class="monitor__screen sandbox-screen" style="position:relative">
              ${liveTag}
              ${cursorSvg}
              <div class="sandbox-cards">
                <div class="sb-card">
                  <strong>₹899 <small>/mo</small></strong>
                  <span>1,000 calls / month</span>
                </div>
                <div class="sb-card active">
                  <strong>₹8,599 <small>/mo</small></strong>
                  <span>15,000 calls / month</span>
                </div>
                <div class="sb-card">
                  <strong>₹16,699 <small>/mo</small></strong>
                  <span>120,000 calls / month</span>
                </div>
              </div>
              <div class="sandbox-form">
                <h5>Choose products</h5>
                <div class="sandbox-row">
                  <div class="sandbox-input" style="border-color:#38bdf8">Income Tax API ✓</div>
                  <div class="sandbox-input">ITR Filing Verification</div>
                </div>
                <div class="sandbox-row">
                  <div class="sandbox-input">API Volume: 1,000 calls/mo</div>
                  <div class="sandbox-input" style="background:#111;color:#10b981;text-align:center;font-weight:700;border:1px solid #10b981">
                    ✓ Estimate Ready (₹8,599)
                  </div>
                </div>
              </div>
              <div class="sandbox-footer-promo">
                <strong>HOW IT WORKS: Calculate API costs in minutes</strong>
                <span>Use Sandbox's API cost calculator to estimate pricing based on selected APIs, expected usage, and pricing plans.</span>
              </div>
            </div>
          </div>
          <div class="monitor__stand">
            <div class="monitor__neck"></div>
            <div class="monitor__base"></div>
          </div>
        </div>
      `;
    }

    if (p.type === 'quicko-pnl') {
      return `
        <div class="monitor">
          <div class="monitor__body">
            <div class="monitor__screen quicko-screen" style="position:relative">
              ${liveTag}
              ${cursorSvg}
              <div class="quicko-top-summary">
                <div>
                  <small>Non-speculative B&P (F&O)</small>
                  <b style="color:#10b981">₹22,800 ↗</b>
                </div>
                <div>
                  <small>Income from other sources</small>
                  <b>₹6,900</b>
                </div>
              </div>
              <div class="quicko-section-title">Capital Gains from Securities</div>
              <div class="quicko-tabs">
                <span class="qtab active" style="background:rgba(255,255,255,0.15)">Long Term vs Short Term</span>
                <span class="qtab">FIFO</span>
                <span class="qtab">Scriptwise Delivery</span>
                <span class="qtab">Schedule 11A</span>
              </div>
              <table class="quicko-table">
                <thead>
                  <tr><th>Asset</th><th>Holding Period</th><th>LTCG Rate</th><th>STCG Rate</th></tr>
                </thead>
                <tbody>
                  <tr style="background:rgba(16,185,129,0.08)"><td>Equity Shares</td><td>> 12 Months</td><td style="color:#10b981;font-weight:700">12.5%</td><td>20%</td></tr>
                  <tr><td>Mutual Funds</td><td>> 24 Months</td><td style="color:#10b981;font-weight:700">12.5%</td><td>20%</td></tr>
                  <tr><td>Listed Bonds</td><td>> 12 Months</td><td style="color:#10b981;font-weight:700">Slab Rate</td><td>Slab Rate</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="monitor__stand">
            <div class="monitor__neck"></div>
            <div class="monitor__base"></div>
          </div>
        </div>
      `;
    }

    if (p.type === 'quicko-cg') {
      return `
        <div class="monitor">
          <div class="monitor__body">
            <div class="monitor__screen cg-screen" style="position:relative">
              ${liveTag}
              ${cursorSvg}
              <div class="cg-tabs">
                <span class="cg-tab active">Taxable Income</span>
                <span class="cg-tab">Capital Gain</span>
                <span class="cg-tab">Loss Adjustment</span>
                <span class="cg-tab">Expenses</span>
              </div>
              <div class="cg-box">
                <div style="font-size:10px;font-weight:700;margin-bottom:0.35rem">Capital Gains Statement Summary</div>
                <div style="display:flex;justify-content:space-between;border-bottom:1px solid rgba(255,255,255,0.06);padding:0.25rem 0">
                  <span style="color:#9ca3af">Long Term Capital Gain</span>
                  <span style="font-weight:700;color:#10b981">₹1,42,850</span>
                </div>
                <div style="display:flex;justify-content:space-between;border-bottom:1px solid rgba(255,255,255,0.06);padding:0.25rem 0">
                  <span style="color:#9ca3af">Short Term Capital Gain</span>
                  <span style="font-weight:700;color:#ef4444">-₹18,400</span>
                </div>
                <div style="display:flex;justify-content:space-between;padding:0.25rem 0">
                  <span style="color:#9ca3af">Net Tax Liability (FY 24-25)</span>
                  <span style="font-weight:700;color:#f59e0b">₹15,556</span>
                </div>
              </div>
              <div class="cg-box" style="margin-top:0.4rem;font-size:9px;color:#9ca3af;line-height:1.4">
                The most important variable in calculating capital gains tax is how long you held the asset before selling.
              </div>
            </div>
          </div>
          <div class="monitor__stand">
            <div class="monitor__neck"></div>
            <div class="monitor__base"></div>
          </div>
        </div>
      `;
    }

    // 2. High-Tech Web Observability & Security Consoles
    if (p.type.startsWith('web-')) {
      return `
        <div class="monitor">
          <div class="monitor__body">
            <div class="monitor__screen" style="background:#09090b;color:#f4f4f5;padding:1.25rem;font-family:monospace;display:flex;flex-direction:column;gap:0.75rem;position:relative;">
              ${liveTag}
              ${cursorSvg}
              <div style="display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid rgba(255,255,255,0.08);padding-bottom:0.5rem;">
                <span style="display:inline-flex;align-items:center;gap:0.35rem;font-size:11px;font-weight:700;color:#38bdf8;">
                  <span style="width:7px;height:7px;border-radius:50%;background:#10b981;box-shadow:0 0 8px #10b981"></span>
                  ${p.name.slice(0, 24)}
                </span>
                <span style="font-size:9px;color:#71717a;border:1px solid rgba(255,255,255,0.1);padding:2px 6px;border-radius:4px;">PRODUCTION</span>
              </div>
              <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.5rem;font-size:9px;">
                <div style="background:rgba(255,255,255,0.03);padding:0.5rem;border-radius:6px;border:1px solid rgba(255,255,255,0.05)">
                  <div style="color:#a1a1aa">Throughput</div>
                  <div style="font-size:14px;font-weight:700;color:#f4f4f5;margin-top:2px;">48.2k <small style="font-size:8px;color:#a1a1aa">req/s</small></div>
                </div>
                <div style="background:rgba(255,255,255,0.03);padding:0.5rem;border-radius:6px;border:1px solid rgba(255,255,255,0.05)">
                  <div style="color:#a1a1aa">P99 Latency</div>
                  <div style="font-size:14px;font-weight:700;color:#10b981;margin-top:2px;">12.4 <small style="font-size:8px;color:#a1a1aa">ms</small></div>
                </div>
                <div style="background:rgba(255,255,255,0.03);padding:0.5rem;border-radius:6px;border:1px solid rgba(255,255,255,0.05)">
                  <div style="color:#a1a1aa">Error Rate</div>
                  <div style="font-size:14px;font-weight:700;color:#38bdf8;margin-top:2px;">0.001%</div>
                </div>
              </div>
              <div style="background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.05);border-radius:6px;padding:0.6rem;height:95px;position:relative;overflow:hidden;">
                <div style="font-size:9px;color:#71717a;margin-bottom:4px;display:flex;justify-content:space-between">
                  <span>LIVE CLUSTER TRAFFIC SPECTRUM</span>
                  <span style="color:#10b981">60 FPS</span>
                </div>
                <svg viewBox="0 0 300 65" style="width:100%;height:50px;">
                  <path d="M0,45 Q30,10 60,35 T120,20 T180,40 T240,15 T300,30 L300,65 L0,65 Z" fill="rgba(56,189,248,0.12)" />
                  <path d="M0,45 Q30,10 60,35 T120,20 T180,40 T240,15 T300,30" fill="none" stroke="#38bdf8" stroke-width="2" />
                  <path d="M0,50 Q40,25 80,45 T160,30 T240,50 T300,40" fill="none" stroke="#10b981" stroke-width="1.5" stroke-dasharray="3,3" />
                </svg>
              </div>
            </div>
          </div>
          <div class="monitor__stand">
            <div class="monitor__neck"></div>
            <div class="monitor__base"></div>
          </div>
        </div>
      `;
    }

    // 3. Mobile App Dedicated Phone Mockup
    if (p.type.startsWith('phone-')) {
      const isFin = p.type.includes('fintrack') || p.type.includes('paysync');
      const isHealth = p.type.includes('health') || p.type.includes('agri');
      const accent = isFin ? '#10b981' : (isHealth ? '#f43f5e' : '#38bdf8');

      return `
        <div class="phone-mockup">
          <div class="phone-notch"></div>
          <div class="phone-screen" style="background:linear-gradient(180deg,#18181b 0%,#09090b 100%);padding-top:1.8rem;display:flex;flex-direction:column;gap:0.6rem;position:relative;">
            <div class="screen-live-tag" style="top:24px;right:12px;"><span class="rec-dot"></span> LIVE</div>
            <div style="display:flex;justify-content:space-between;align-items:center;padding:0 0.2rem">
              <span style="font-size:10px;font-weight:700;color:#fff">${p.name.slice(0, 18)}</span>
              <span style="font-size:8px;padding:2px 6px;border-radius:999px;background:${accent}22;color:${accent};font-weight:700">60 FPS</span>
            </div>
            <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.06);padding:0.75rem;border-radius:14px;">
              <span style="font-size:8px;color:#a1a1aa;text-transform:uppercase;letter-spacing:0.04em;">Telemetry Overview</span>
              <div style="font-size:18px;font-weight:800;color:#f4f4f5;margin:0.2rem 0;">₹4,28,490</div>
              <div style="display:flex;align-items:center;gap:0.35rem;font-size:9px;color:${accent};font-weight:600">
                <span>↗ +18.4%</span>
                <span style="color:#71717a">vs last cycle</span>
              </div>
            </div>
            <div style="background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.04);padding:0.6rem;border-radius:12px;display:flex;flex-direction:column;gap:0.4rem;">
              <div style="display:flex;justify-content:space-between;font-size:9px;">
                <span style="color:#d4d4d8">${p.tags[0] || 'Real-time Sync'}</span>
                <span style="color:${accent};font-weight:600">Active</span>
              </div>
              <div style="width:100%;height:4px;border-radius:999px;background:rgba(255,255,255,0.1);overflow:hidden">
                <div style="width:78%;height:100%;background:${accent};border-radius:999px;"></div>
              </div>
            </div>
            <div style="background:rgba(255,255,255,0.03);padding:0.6rem;border-radius:12px;font-size:8.5px;color:#a1a1aa;line-height:1.4">
              ${p.desc.slice(0, 75)}...
            </div>
          </div>
        </div>
      `;
    }

    // 4. UI/UX Design System & Spatial Board Mockup
    if (p.type.startsWith('ui-')) {
      return `
        <div class="monitor">
          <div class="monitor__body">
            <div class="monitor__screen" style="background:#111215;color:#e4e4e7;padding:1.25rem;display:flex;flex-direction:column;gap:0.65rem;position:relative;">
              ${liveTag}
              ${cursorSvg}
              <div style="display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid rgba(255,255,255,0.07);padding-bottom:0.45rem;">
                <span style="font-size:11px;font-weight:700;color:#e4e4e7;display:flex;align-items:center;gap:0.35rem">
                  <span style="width:7px;height:7px;border-radius:2px;background:#a78bfa"></span>
                  ${p.name}
                </span>
                <span style="font-size:8.5px;background:rgba(167,139,250,0.15);color:#c4b5fd;padding:2px 7px;border-radius:999px;font-weight:600">FIGMA DESIGN SYSTEM</span>
              </div>
              <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:0.4rem;font-size:8.5px;">
                <div style="background:#18181b;padding:0.45rem;border-radius:6px;border:1px solid rgba(255,255,255,0.06);text-align:center">
                  <div style="color:#a1a1aa">Components</div>
                  <div style="font-weight:700;color:#fff;margin-top:2px">1,200+</div>
                </div>
                <div style="background:#18181b;padding:0.45rem;border-radius:6px;border:1px solid rgba(255,255,255,0.06);text-align:center">
                  <div style="color:#a1a1aa">Tokens</div>
                  <div style="font-weight:700;color:#38bdf8;margin-top:2px">340 Var</div>
                </div>
                <div style="background:#18181b;padding:0.45rem;border-radius:6px;border:1px solid rgba(255,255,255,0.06);text-align:center">
                  <div style="color:#a1a1aa">Contrast</div>
                  <div style="font-weight:700;color:#10b981;margin-top:2px">AAA Pass</div>
                </div>
                <div style="background:#18181b;padding:0.45rem;border-radius:6px;border:1px solid rgba(255,255,255,0.06);text-align:center">
                  <div style="color:#a1a1aa">Code Sync</div>
                  <div style="font-weight:700;color:#f59e0b;margin-top:2px">100%</div>
                </div>
              </div>
              <div style="background:#18181b;border:1px solid rgba(255,255,255,0.06);border-radius:8px;padding:0.6rem;display:flex;gap:0.5rem;align-items:center;">
                <div style="display:flex;gap:0.35rem">
                  <span style="width:20px;height:20px;border-radius:4px;background:#6366f1"></span>
                  <span style="width:20px;height:20px;border-radius:4px;background:#38bdf8"></span>
                  <span style="width:20px;height:20px;border-radius:4px;background:#10b981"></span>
                  <span style="width:20px;height:20px;border-radius:4px;background:#f59e0b"></span>
                </div>
                <div style="font-size:9px;color:#a1a1aa;line-height:1.3">
                  Tokenized atomic variables configured with auto-layout and dark-mode inheritance.
                </div>
              </div>
            </div>
          </div>
          <div class="monitor__stand">
            <div class="monitor__neck"></div>
            <div class="monitor__base"></div>
          </div>
        </div>
      `;
    }

    // 5. Graphic Design Brand & Editorial Studio Showcase
    if (p.type.startsWith('gfx-')) {
      return `
        <div class="monitor">
          <div class="monitor__body">
            <div class="monitor__screen foil-sweep" style="background:#181513;color:#f5ede8;padding:1.25rem;display:flex;flex-direction:column;gap:0.65rem;position:relative;">
              ${liveTag}
              <div style="display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid rgba(255,255,255,0.08);padding-bottom:0.45rem;">
                <span style="font-size:11px;font-weight:800;letter-spacing:0.04em;color:#f5ede8">${p.name.toUpperCase()}</span>
                <span style="font-size:8.5px;background:rgba(217,119,6,0.2);color:#fbbf24;padding:2px 7px;border-radius:999px;font-weight:600">IDENTITY & PRINT</span>
              </div>
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.5rem;">
                <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);border-radius:8px;padding:0.75rem;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;">
                  <span style="font-size:24px;font-weight:900;letter-spacing:-0.03em;color:#fff;line-height:1">Aa</span>
                  <span style="font-size:8px;color:#a8a29e;margin-top:4px">Custom Typographic Cut</span>
                </div>
                <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);border-radius:8px;padding:0.75rem;display:flex;flex-direction:column;justify-content:center;gap:0.3rem">
                  <div style="font-size:8.5px;color:#d6d3d1;font-weight:600">PANTONE 18-1248</div>
                  <div style="display:flex;gap:4px">
                    <span style="width:16px;height:16px;border-radius:3px;background:#a4552c"></span>
                    <span style="width:16px;height:16px;border-radius:3px;background:#2b2623"></span>
                    <span style="width:16px;height:16px;border-radius:3px;background:#e5ded6"></span>
                  </div>
                </div>
              </div>
              <div style="background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.05);border-radius:8px;padding:0.6rem;font-size:9px;color:#a8a29e;line-height:1.4">
                ${p.desc.slice(0, 95)}...
              </div>
            </div>
          </div>
          <div class="monitor__stand">
            <div class="monitor__neck"></div>
            <div class="monitor__base"></div>
          </div>
        </div>
      `;
    }

    // Default Fallback
    return `
      <div class="monitor">
        <div class="monitor__body">
          <div class="monitor__screen" style="padding:1.5rem;background:#18181b;color:#f4f4f5;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;position:relative;">
            ${liveTag}
            <div style="font-size:16px;font-weight:700;margin-bottom:0.5rem">${p.name}</div>
            <div style="font-size:11px;color:#a1a1aa;max-width:320px">${p.desc}</div>
            <div style="margin-top:1rem;display:flex;gap:0.4rem;flex-wrap:wrap;justify-content:center">
              ${p.tags.map(t => `<span style="font-size:9px;padding:0.25rem 0.5rem;border-radius:999px;background:rgba(255,255,255,0.08);color:#d4d4d8">${t}</span>`).join('')}
            </div>
          </div>
        </div>
        <div class="monitor__stand">
          <div class="monitor__neck"></div>
          <div class="monitor__base"></div>
        </div>
      </div>
    `;
  }
}

// ============================================================================
// ABILITY CARD
// ============================================================================


// ============================================================================
// STORY TIMELINE (ROLLING ROLEX ODOMETER & 3D CLOCK TUNNEL)
// ============================================================================
class StoryTimeline {
  constructor() {
    this.sec = document.getElementById('about');
    if (!this.sec) return;

    this.line = this.sec.querySelector('.story__line');
    this.list = this.sec.querySelector('.story__list');
    this.chs = [...this.sec.querySelectorAll('.ch')];
    this.cols = [...this.sec.querySelectorAll('.dg__c')];
    this.when = this.sec.querySelector('.story__when');
    this.count = this.sec.querySelector('.story__count');
    this.dot = this.sec.querySelector('.story__dot');
    this.tail = this.sec.querySelector('.story__tail');
    this.bar = this.sec.querySelector('.story__bar b');
    this.cv = this.sec.querySelector('.story__bg');
    this.ctx = this.cv?.getContext('2d');

    this.shownYear = '';
    this.shown = -1;

    this.init();
  }

  init() {
    this.initTunnel();
    this.measure();
    this.show(0);
    this.update();

    window.addEventListener('scroll', () => this.update(), { passive: true });
    window.addEventListener('resize', () => {
      this.measure();
      this.update();
    });
  }

  setYear(y) {
    if (y === this.shownYear) return;
    this.shownYear = y;
    String(y).split('').forEach((d, k) => {
      if (this.cols[k]) this.cols[k].style.setProperty('--d', d);
    });
  }

  show(i) {
    if (i === this.shown) return;
    this.shown = i;

    this.chs.forEach((c, k) => c.classList.toggle('on', k === i));
    const ch = this.chs[i];
    if (ch) {
      this.setYear(ch.dataset.y);
      if (this.when) this.when.textContent = ch.dataset.when;
      if (this.count) this.count.textContent = String(i + 1).padStart(2, '0');
      if (this.bar) this.bar.style.width = `${((i + 1) / this.chs.length) * 100}%`;
    }
  }

  initTunnel() {
    if (!this.cv || !this.ctx) return;
    const size = () => {
      this.dpr = Math.min(2, window.devicePixelRatio || 1);
      this.w = this.cv.clientWidth;
      this.h = this.cv.clientHeight;
      this.cv.width = this.w * this.dpr;
      this.cv.height = this.h * this.dpr;
    };
    size();

    const RINGS = 16, GAP = 340, FOCAL = 520, R = 620, TICKS = 60;
    const dust = Array.from({ length: 60 }, () => ({
      a: Math.random() * Math.PI * 2,
      r: 120 + Math.random() * 720,
      z: Math.random() * RINGS * GAP,
      s: 0.6 + Math.random() * 1.4
    }));

    const render = (p, t) => {
      this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
      this.ctx.clearRect(0, 0, this.w, this.h);

      const cx = this.w * 0.5, cy = this.h * 0.55;
      const k = Math.min(this.w, this.h) / 900;
      const camZ = p * (this.chs.length - 1) * GAP * 1.6 + t * 16;
      const spin = -p * Math.PI * 1.5 - t * 0.02;
      const len = RINGS * GAP;
      const isDark = document.documentElement.dataset.mode === 'dark';
      const rgb = isDark ? '232,228,224' : '26,24,24';

      this.ctx.lineCap = 'round';
      for (let i = 0; i < RINGS; i++) {
        const z = ((i * GAP - camZ) % len + len) % len + 60;
        const s = (FOCAL / z) * k;
        const fog = Math.min(1, Math.max(0, (z - 260) / 1100)) * Math.max(0, 1 - z / len);
        if (fog <= 0.01) continue;

        const rr = R * s, rot = spin + i * 0.21;
        this.ctx.strokeStyle = `rgba(${rgb},${(fog * 0.12).toFixed(3)})`;
        this.ctx.lineWidth = Math.max(0.5, 1.2 * s);
        this.ctx.beginPath();
        this.ctx.arc(cx, cy, rr, 0, Math.PI * 2);
        this.ctx.stroke();

        const T = TICKS, every = T / 12;
        for (const hour of [false, true]) {
          const l = (hour ? 44 : 16) * s;
          this.ctx.beginPath();
          for (let j = 0; j < T; j++) {
            if ((j % every === 0) !== hour) continue;
            const a = rot + (j / T) * Math.PI * 2, c = Math.cos(a), d = Math.sin(a);
            this.ctx.moveTo(cx + c * (rr - l), cy + d * (rr - l));
            this.ctx.lineTo(cx + c * rr, cy + d * rr);
          }
          this.ctx.strokeStyle = `rgba(${rgb},${(fog * (hour ? 0.28 : 0.12)).toFixed(3)})`;
          this.ctx.lineWidth = Math.max(0.5, (hour ? 2.6 : 1.2) * s);
          this.ctx.stroke();
        }
      }

      for (const q of dust) {
        const z = ((q.z - camZ * 1.1) % len + len) % len + 40;
        const s = (FOCAL / z) * k;
        const fog = Math.min(1, Math.max(0, (z - 300) / 900)) * Math.max(0, 1 - z / len);
        const a = q.a + spin * 0.3;
        this.ctx.fillStyle = `rgba(${rgb},${(fog * 0.35).toFixed(3)})`;
        this.ctx.beginPath();
        this.ctx.arc(cx + Math.cos(a) * q.r * s, cy + Math.sin(a) * q.r * s, Math.max(0.4, q.s * s * 2.2), 0, Math.PI * 2);
        this.ctx.fill();
      }
    };

    let startT = performance.now();
    const anim = (now) => {
      const t = (now - startT) / 1000;
      render(this.p || 0, t);
      requestAnimationFrame(anim);
    };
    requestAnimationFrame(anim);
  }

  measure() {
    if (!this.line || !this.list || !this.chs.length) return;
    const mark = c => this.list.offsetTop + c.offsetTop + c.firstElementChild.offsetTop + 8;
    this.firstY = mark(this.chs[0]);
    this.lastY = mark(this.chs[this.chs.length - 1]);
  }

  update() {
    if (!this.line || !this.chs.length) return;
    const lr = this.line.getBoundingClientRect();
    const mid = window.innerHeight * 0.5;

    const y = Math.min(this.lastY, Math.max(this.firstY, mid - lr.top));
    this.p = (y - this.firstY) / Math.max(1, this.lastY - this.firstY);

    let activeIdx = 0;
    for (let k = 0; k < this.chs.length; k++) {
      if (lr.top + this.list.offsetTop + this.chs[k].offsetTop < mid + 40) {
        activeIdx = k;
      }
    }
    this.show(activeIdx);

    const pct = (this.p * 100).toFixed(1) + '%';
    if (this.dot) this.dot.style.top = pct;
    if (this.tail) this.tail.style.height = pct;
  }
}


class AbilityCard {
  constructor() {
    this.layer = document.getElementById('holo');
    this.openBtn = document.getElementById('holoOpen');
    this.closeBtn = document.getElementById('holoClose');
    this.card = document.getElementById('hc');
    this.ld = document.getElementById('holoLd');
    this.pct = document.getElementById('holoPct');
    this.lite = document.getElementById('holoLite');

    this.init();
  }

  init() {
    if (this.openBtn) this.openBtn.addEventListener('click', () => this.show());
    if (this.closeBtn) this.closeBtn.addEventListener('click', () => this.hide());

    if (this.card) {
      this.card.addEventListener('click', () => {
        this.card.classList.toggle('flip');
        sfx.playCardFlip();
      });

      window.addEventListener('mousemove', (e) => {
        if (this.layer.hidden || this.card.classList.contains('flip')) return;
        const r = this.card.getBoundingClientRect();
        const x = e.clientX - r.left, y = e.clientY - r.top;
        const cx = r.width * 0.5, cy = r.height * 0.5;
        const dx = Math.max(-1, Math.min(1, (x - cx) / cx));
        const dy = Math.max(-1, Math.min(1, (y - cy) / cy));

        this.card.style.setProperty('--rx', `${(-dy * 14).toFixed(2)}deg`);
        this.card.style.setProperty('--ry', `${(dx * 14).toFixed(2)}deg`);
        this.card.style.setProperty('--px', dx.toFixed(3));
        this.card.style.setProperty('--py', dy.toFixed(3));
        this.card.style.setProperty('--lift', Math.max(0, 1 - Math.hypot(dx, dy)).toFixed(3));
      });
    }

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !this.layer.hidden) this.hide();
    });
  }

  show(immediate = false) {
    sfx.playClick();
    this.layer.hidden = false;
    this.layer.classList.add('on');
    document.body.style.overflow = 'hidden';

    if (immediate) {
      if (this.ld) this.ld.classList.add('out');
      if (this.lite) this.lite.classList.add('in');
      if (this.pct) this.pct.textContent = '100%';
      return;
    }

    let p = 0;
    const iv = setInterval(() => {
      p += 15;
      if (p >= 100) {
        p = 100;
        clearInterval(iv);
        setTimeout(() => {
          if (this.ld) this.ld.classList.add('out');
          if (this.lite) this.lite.classList.add('in');
        }, 150);
      }
      if (this.pct) this.pct.textContent = `${p}%`;
    }, 30);
  }

  hide() {
    sfx.playClick();
    this.layer.hidden = true;
    this.layer.classList.remove('on');
    document.body.style.overflow = '';
    if (this.card) this.card.classList.remove('flip');
    if (this.ld) this.ld.classList.remove('out');
    if (this.lite) this.lite.classList.remove('in');
  }
}

// ============================================================================
// CONTACT MODAL SYSTEM
// ============================================================================
class ContactModal {
  constructor() {
    this.modal = document.getElementById('modal');
    this.closeBtn = document.getElementById('mClose');
    this.form = document.getElementById('reqForm');
    this.mForm = document.getElementById('mForm');
    this.success = document.getElementById('mSuccess');
    this.doneBtn = document.getElementById('mDone');
    this.sendBtn = document.getElementById('mSend');
    this.sendLbl = document.getElementById('mSendLbl');

    this.init();
  }

  init() {
    document.querySelectorAll('[data-contact]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        this.open();
      });
    });

    if (this.closeBtn) this.closeBtn.addEventListener('click', () => this.close());
    if (this.doneBtn) this.doneBtn.addEventListener('click', () => this.close());

    if (this.form) {
      this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !this.modal.hidden) this.close();
    });
  }

  open() {
    sfx.playClick();
    this.modal.hidden = false;
    this.modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    const first = this.modal.querySelector('input');
    if (first) setTimeout(() => first.focus(), 120);
  }

  close() {
    sfx.playClick();
    this.modal.hidden = true;
    this.modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  handleSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('f-name').value.trim();
    const email = document.getElementById('f-email').value.trim();
    const phone = document.getElementById('f-phone').value.trim();
    const project = document.getElementById('f-project').value.trim();

    if (!name || !email || !project) {
      alert('Please fill out all required fields.');
      return;
    }

    if (this.sendLbl) this.sendLbl.textContent = 'Formatting message...';
    if (this.sendBtn) this.sendBtn.disabled = true;

    sfx.playClick();

    setTimeout(() => {
      const subject = encodeURIComponent(`Project Inquiry from ${name}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\n\nProject Scope & Timeline:\n${project}`
      );
      const mailtoUrl = `mailto:kabilan.officialid@gmail.com?subject=${subject}&body=${body}`;

      try {
        window.location.href = mailtoUrl;
      } catch (err) {}

      if (this.sendLbl) this.sendLbl.textContent = 'Write the email';
      if (this.sendBtn) this.sendBtn.disabled = false;

      this.mForm.hidden = true;
      this.success.hidden = false;
      sfx.playCordSnap();
    }, 400);
  }
}

// ============================================================================
// LIVE CLOCK & GENERAL NAVIGATION UTILITIES
// ============================================================================
function initHeaderAndClock() {
  const times = document.querySelectorAll('[data-time]');
  const dates = document.querySelectorAll('[data-date]');
  const dshorts = document.querySelectorAll('[data-dshort]');
  const ftimes = document.querySelectorAll('[data-ftime]');
  const fyears = document.querySelectorAll('[data-fyear]');
  const menuBtn = document.getElementById('menuBtn');
  const navm = document.getElementById('navm');
  const navmClose = document.getElementById('navmClose');
  const totop = document.querySelector('.totop');
  if (totop) {
    totop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
  const hdr = document.querySelector('.hdr');

  // Live Clock locked to Asia/Kolkata
  const update = () => {
    const d = new Date();
    const timeStr = d.toLocaleTimeString('en-US', {
      timeZone: 'Asia/Kolkata',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    }).toLowerCase();
    const dateStr = d.toLocaleDateString('en-GB', {
      timeZone: 'Asia/Kolkata',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
    const shortDate = d.toLocaleDateString('en-GB', {
      timeZone: 'Asia/Kolkata',
      day: 'numeric',
      month: 'short'
    });

    times.forEach(t => t.textContent = timeStr);
    dates.forEach(d => d.textContent = dateStr);
    dshorts.forEach(s => s.textContent = shortDate);
    ftimes.forEach(f => f.textContent = timeStr);
    fyears.forEach(y => y.textContent = d.getFullYear());
  };
  update();
  setInterval(update, 1000);

  // Scroll Header Backing & Back to Top
  window.addEventListener('scroll', () => {
    const sy = window.scrollY;
    if (hdr) hdr.classList.toggle('scrolled', sy > 40);
    if (totop) {
      const isScrolled = sy > 350;
      totop.classList.toggle('show', isScrolled);
      totop.classList.toggle('visible', isScrolled);
    }
  }, { passive: true });

  // Mobile Navigation
  if (menuBtn && navm) {
    menuBtn.addEventListener('click', () => {
      sfx.playClick();
      navm.hidden = false;
      navm.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }
  if (navmClose && navm) {
    navmClose.addEventListener('click', () => {
      sfx.playClick();
      navm.classList.remove('open');
      setTimeout(() => {
        navm.hidden = true;
        document.body.style.overflow = '';
      }, 300);
    });
  }
  if (navm) {
    navm.querySelectorAll('button').forEach(b => {
      b.addEventListener('click', () => {
        document.body.style.overflow = '';
        navm.classList.remove('open');
        setTimeout(() => {
          navm.hidden = true;
        }, 300);
      });
    });
  }

  // Smooth scroll links
  document.querySelectorAll('[data-go]').forEach(b => {
    b.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.getElementById(b.dataset.go);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Cookie banner choice
  const ck = document.getElementById('ck');
  if (ck) {
    try {
      if (localStorage.getItem('kabilan-analytics')) ck.hidden = true;
    } catch (e) {}
    ck.querySelectorAll('button').forEach(b => {
      b.addEventListener('click', () => {
        try { localStorage.setItem('kabilan-analytics', b.dataset.ck); } catch (e) {}
        ck.hidden = true;
      });
    });
  }
}

// ============================================================================
// PAGE LOADER SEQUENCE
// ============================================================================
function initPageLoader() {
  const loader = document.getElementById('loader');
  const num = document.getElementById('ldCount');
  if (!loader) {
    document.body.classList.add('ready');
    return;
  }

  if (location.hash && location.hash !== '#') {
    loader?.remove();
    document.body.classList.add('ready');
    try {
      const cleanId = location.hash.replace(/^#/, '');
      if (/^[a-zA-Z0-9_\-]+$/.test(cleanId)) {
        const target = document.getElementById(cleanId);
        if (target) {
          const top = target.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({ top, behavior: 'instant' });
        }
      }
    } catch (e) {}
    return;
  }

  const pills = [...loader.querySelectorAll('.ld__pill')];
  const paint = p => {
    loader.style.setProperty('--p', p.toFixed(3));
    pills.forEach((el, k) => el.classList.toggle('on', p >= k / 6 + 0.02 || p >= 1));
  };

  let t0 = null, shown = 0;
  const FILL = 350; // Snappy intro loader

  function loadTick(now) {
    if (t0 === null) t0 = now;
    const want = Math.min(1, (now - t0) / FILL);
    shown += (want - shown) * 0.45;
    if (want - shown < 0.005) shown = want;
    paint(shown);
    if (num) num.textContent = String(Math.round(shown * 100)).padStart(3, '0');

    if (shown < 1) {
      requestAnimationFrame(loadTick);
    } else {
      finish();
    }
  }

  function finish() {
    loader.classList.add('out');
    document.body.classList.add('ready');
    setTimeout(() => {
      try { loader.remove(); } catch (e) {}
    }, 250);
  }

  requestAnimationFrame(loadTick);
}

// ============================================================================
// BOOTSTRAP ALL SYSTEMS
// ============================================================================
function bootstrap() {
  initPageLoader();
  const cord = new PullCord();
  const cal = new FlipCalendar();
  const reveal = new LiquidReveal();
  const csModal = new CaseStudyModal();
  const doors = new DoorsController(csModal);
  const story = new StoryTimeline();
  const card = new AbilityCard();
  const modal = new ContactModal();
  initHeaderAndClock();

  // Unified parameter parser supporting both search query and hash parameters
  const params = new URLSearchParams(window.location.search);
  const hash = window.location.hash.replace(/^#/, '');
  if (hash.includes('=')) {
    hash.split('&').forEach(pair => {
      const [k, v] = pair.split('=');
      if (k && v) params.set(k, v);
    });
  } else if (hash) {
    if (['doors', 'works', 'room', 'cs', 'cs-specs', 'story', 'about', 'card', 'card-flip', 'navm', 'modal', 'footer', 'contact'].includes(hash)) {
      params.set('view', hash === 'works' ? 'doors' : (hash === 'about' ? 'story' : (hash === 'contact' ? 'footer' : hash)));
    } else if (hash === 'light' || hash === 'dark') {
      params.set('mode', hash);
    } else if (hash === 'doors-light') {
      params.set('view', 'doors');
      params.set('mode', 'light');
    } else if (hash === 'story-light') {
      params.set('view', 'story');
      params.set('mode', 'light');
      params.set('ch', '0');
    } else if (hash === 'story-2025') {
      params.set('view', 'story');
      params.set('mode', 'light');
      params.set('ch', '1');
    } else if (hash === 'footer-dark') {
      params.set('view', 'footer');
      params.set('mode', 'dark');
    }
  }

  if (params.get('mode') === 'light') {
    document.documentElement.removeAttribute('data-mode');
  } else if (params.get('mode') === 'dark') {
    document.documentElement.setAttribute('data-mode', 'dark');
  }

  const v = params.get('view');
  if (v) {
    const ld = document.getElementById('loader');
    if (ld) ld.remove();
    document.body.classList.add('ready');

    if (v === 'doors') {
      if (doors.sec) {
        doors.sec.classList.remove('pre');
        doors.sec.classList.add('in');
      }
      const row = document.getElementById('doorsRow') || doors.sec;
      if (row) row.scrollIntoView({ behavior: 'instant', block: 'center' });
      if (params.get('hover') === 'true') {
        doors.hoverDoor(0);
        if (doors.cursor) {
          const rect = doors.units[0]?.getBoundingClientRect();
          const cx = rect ? (rect.left + rect.width * 0.5) : 320;
          const cy = rect ? (rect.top + rect.height * 0.5) : 450;
          doors.cursor.style.transform = `translate3d(${cx}px, ${cy}px, 0) translate(-50%, -50%)`;
          doors.cursor.classList.add('on');
        }
      }
    } else if (v === 'room') {
      doors.inRoom = true;
      doors.active = parseInt(params.get('door') || '0', 10);
      doors.switchDiscipline(doors.active);
      doors.wallv?.classList.add('on', 'live');
      document.body.style.overflow = 'hidden';
      const sc = params.get('scroll');
      if (sc && doors.roomScroll) {
        doors.roomScroll.style.scrollBehavior = 'auto'; doors.roomScroll.scrollTop = parseInt(sc, 10);
      }
    } else if (v === 'cs') {
      doors.openRoom(0);
      setTimeout(() => {
        csModal.open(DOOR_DATA[0].projects[0], DOOR_DATA[0].title, 'demo');
      }, 500);
    } else if (v === 'cs-specs') {
      doors.openRoom(0);
      setTimeout(() => {
        csModal.open(DOOR_DATA[0].projects[0], DOOR_DATA[0].title, 'specs');
      }, 500);
    } else if (v === 'story') {
      const target = document.getElementById('about');
      if (target) {
        const top = target.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top, behavior: 'instant' });
      }
      const chNum = params.get('ch') !== null ? parseInt(params.get('ch'), 10) : 0;
      story.show(chNum);
      const totop = document.querySelector('.totop');
      if (totop) totop.classList.add('show', 'visible');
    } else if (v === 'footer' || v === 'contact') {
      const sf = document.getElementById('contact-footer');
      if (sf) {
        const top = sf.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top, behavior: 'instant' });
      } else {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'instant' });
      }
      const totop = document.querySelector('.totop');
      if (totop) totop.classList.add('show', 'visible');
    } else if (v === 'card') {
      card.show(true);
    } else if (v === 'card-flip') {
      card.show(true);
      if (card.card) {
        card.card.classList.add('flip');
        const cin = card.card.querySelector('.hc__in');
        if (cin) cin.style.transition = 'none';
      }
    } else if (v === 'navm') {
      if (navm) {
        navm.hidden = false;
        navm.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    } else if (v === 'modal') {
      modal.open();
    }
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootstrap);
} else {
  bootstrap();
}