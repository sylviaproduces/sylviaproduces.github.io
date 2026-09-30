// Sylvia Produces content studio
// Edit this file to update or add projects, case studies, blog posts, images, GIFs, and trusted embeds.

export const site = {
  name: "Sylvia Produces",
  descriptor: "Production & Operations",
  email: "sylvia@bloomvisually.com",
  location: "Nevada, USA",
  heroTitle: "Production & Operations with background in Tech",
  heroSubtitle: "Hi, I'm Sylvia, a Nevada-based producer with major-tech operations experience",
  heroMedia: {
    type: "image",
    src: "assets/images/sylvia.webp",
    alt: "Portrait of Sylvia outdoors"
  },
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
    { label: "Instagram", href: "https://www.instagram.com/" },
    { label: "Email", href: "mailto:sylvia@bloomvisually.com" }
  ]
};

export const projects = [
  {
    slug: "the-score",
    path: "projects/the-score/",
    title: "The Score",
    eyebrow: "Feature film · in development",
    summary: "A character-led feature film shaped from first table read through the production plan.",
    year: "2026",
    role: "Producer",
    tags: ["Development", "Budgeting", "Crew build"],
    media: { type: "art", theme: "score", label: "A cinematic production planning collage" },
    intro: "The Score is a feature-film placeholder built to demonstrate how Sylvia approaches development: turning an emotional creative premise into an actionable plan for people, schedule, money, and momentum.",
    sections: [
      { heading: "The brief", body: "Build a production foundation that protects the creative heart of a story while making collaboration simple for a growing team." },
      { heading: "My role", body: "I organize development notes, shape budgets and workflow assumptions, maintain decision records, and create a single source of truth for collaborators." },
      { heading: "What comes next", body: "Placeholder: add trailer embeds, a visual treatment, festival strategy, credits, or a private screening link here." }
    ],
    outcomes: ["Creative brief and versioning system", "Production roadmap across development milestones", "Crew and vendor planning framework"]
  }
];

export const caseStudies = [
  {
    slug: "technology-operations-microsoft",
    path: "case-studies/technology-operations-microsoft/",
    title: "Technology Operations @ Microsoft",
    shortTitle: "Microsoft ops",
    eyebrow: "Technology operations · enterprise scale",
    summary: "Bringing clarity, cadence, and cross-functional care to a high-velocity technology operations practice.",
    year: "2024–2026",
    role: "Operations Producer",
    tags: ["Program ops", "Systems", "Stakeholders"],
    media: { type: "art", theme: "microsoft", label: "Lavender and blue operations dashboard collage" },
    intro: "This placeholder case study shows how Sylvia translates complex operational work into shared routines that are human, measurable, and easy to sustain.",
    facts: [
      ["Scope", "Cross-functional operating rhythm"],
      ["Focus", "Decision velocity & documentation"],
      ["Format", "Enterprise program operations"]
    ],
    sections: [
      { heading: "Context", body: "Teams need room to move quickly without losing the decisions, dependencies, and follow-through that make collaboration dependable. The challenge was to create a clear operating rhythm without piling on process." },
      { heading: "Approach", body: "I mapped recurring moments, named lightweight owners, designed shareable decision logs, and turned updates into concise visual artifacts. Each change was introduced as a prototype, then tuned with the people closest to the work." },
      { heading: "Result", body: "Placeholder for approved outcomes: add measurable operating improvements, a before-and-after workflow, or a link to a presentation once it is cleared for publication." }
    ],
    outcomes: ["Weekly operating rhythm", "Decision and dependency tracking", "Reusable briefing templates"]
  },
  {
    slug: "feature-film-the-score",
    path: "case-studies/feature-film-the-score/",
    title: "Feature Film Production – The Score",
    shortTitle: "The Score",
    eyebrow: "Feature film · production systems",
    summary: "A production framework that gives a developing feature film a confident route from creative intent to set day.",
    year: "2026",
    role: "Producer",
    tags: ["Feature film", "Planning", "Creative ops"],
    media: { type: "art", theme: "film", label: "Coral and yellow cinematic storyboard collage" },
    intro: "The Score is a feature-film production case study demonstrating Sylvia’s approach to unifying narrative, logistics, resources, and collaborators in one production-ready operating system.",
    facts: [
      ["Scope", "Development through pre-production"],
      ["Focus", "Narrative-to-logistics translation"],
      ["Format", "Feature film"]
    ],
    sections: [
      { heading: "Context", body: "Feature work thrives when creative decisions are documented early enough to guide practical choices—locations, department needs, cost ranges, and schedule patterns." },
      { heading: "Approach", body: "I built a clear story-to-production map: tracked script assumptions, consolidated department questions, created a decision cadence, and translated creative beats into early operational requirements." },
      { heading: "Result", body: "Placeholder for public case-study material: add production stills, a calendar excerpt, credits, a trailer, or a fully approved production story here." }
    ],
    outcomes: ["Story-to-production map", "Department planning packets", "Milestone-driven pre-production cadence"]
  },
  {
    slug: "media-operations-disney",
    path: "case-studies/media-operations-disney/",
    title: "Media Operations @ Disney",
    shortTitle: "Disney media ops",
    eyebrow: "Media operations · creative delivery",
    summary: "A flexible operational model for keeping creative delivery, partners, and visibility aligned.",
    year: "2022–2024",
    role: "Media Operations",
    tags: ["Media", "Delivery", "Partners"],
    media: { type: "art", theme: "disney", label: "Sky blue and coral media delivery collage" },
    intro: "This placeholder case study captures how Sylvia brings producer-style care to media operations: clear intake, shared language, calm handoffs, and an eye on the audience waiting at the other end.",
    facts: [
      ["Scope", "Media delivery operations"],
      ["Focus", "Handoffs, visibility & partners"],
      ["Format", "Creative operations"]
    ],
    sections: [
      { heading: "Context", body: "Creative work often moves through many hands. The operational challenge is to make progress visible without reducing good work to a status spreadsheet." },
      { heading: "Approach", body: "I designed a friendly intake language, surfaced critical dependencies early, and used concise progress rituals to keep internal teams and external partners oriented around the same delivery picture." },
      { heading: "Result", body: "Placeholder for approved results: add project types, service-level improvements, process diagrams, or a public-facing reflection on media delivery work." }
    ],
    outcomes: ["Clear creative intake", "Partner-facing delivery signals", "Exception-aware handoff process"]
  }
];

export const posts = [
  {
    slug: "the-producers-technical-toolkit",
    path: "blog/the-producers-technical-toolkit/",
    title: "The producer’s technical toolkit is mostly about trust",
    deck: "The tools matter—but shared context, naming conventions, and an honest decision log matter more.",
    date: "May 28, 2026",
    category: "Operations notes",
    readTime: "5 min read",
    media: { type: "art", theme: "notes", label: "Yellow and lavender tools collage" },
    body: [
      "A good production system does not ask everyone to become a systems person. It quietly gives every collaborator the information they need at the moment they need it.",
      "My starting point is always a shared source of truth, a short list of working agreements, and an intentionally small decision record. The technology follows the people—not the other way around.",
      "This is placeholder copy. Replace it with a behind-the-scenes note, a toolkit list, or a field guide to the operations choices that keep a project moving."
    ]
  },
  {
    slug: "how-i-plan-for-creative-change",
    path: "blog/how-i-plan-for-creative-change/",
    title: "How I plan for creative change without freezing the work",
    deck: "A decision can be documented without being treated like it is permanent. Here is the distinction I keep making.",
    date: "April 18, 2026",
    category: "Producer’s notebook",
    readTime: "4 min read",
    media: { type: "art", theme: "change", label: "Coral and cream production schedule collage" },
    body: [
      "Plans are most useful when they create a safe place for new information. A schedule, budget, or creative brief should be specific enough to guide a next move—and flexible enough to be revised in daylight.",
      "I use change notes to separate what has shifted from why it shifted. That small practice protects the team from quiet scope drift and lets better ideas enter the room.",
      "This is placeholder copy. Expand it with a lesson from production, a planning template, or a before-and-after process story."
    ]
  },
  {
    slug: "building-calm-into-the-call-sheet",
    path: "blog/building-calm-into-the-call-sheet/",
    title: "Building calm into the call sheet",
    deck: "The best documents do not only explain what happens next. They lower the temperature in the room.",
    date: "March 09, 2026",
    category: "Set systems",
    readTime: "3 min read",
    media: { type: "art", theme: "calm", label: "Blue and moss green call sheet collage" },
    body: [
      "A call sheet is an invitation to show up prepared. Clear language, hierarchy, and a few thoughtful anticipatory notes can remove dozens of small moments of uncertainty.",
      "In every field, operational artifacts are part of the experience. The same care that shapes the creative work should show up in the document someone scans at 6 a.m.",
      "This is placeholder copy. Replace it with a personal essay, practical checklist, or annotated document walkthrough."
    ]
  }
];

export const findBySlug = (collection, slug) => collection.find((item) => item.slug === slug);
export const featuredCases = () => caseStudies.slice(0, 3);
export const featuredPosts = () => posts.slice(0, 3);
