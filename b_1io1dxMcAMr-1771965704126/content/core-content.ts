import type {
  ContactAction,
  HomeServiceCard,
  NavLink,
  ProofCaseStudy,
  SelectedOutcome,
  ServiceOffer,
  Testimonial,
  WritingSection,
} from "@/content/types"

export const SITE_URL = "https://sebsamson.com"

export const SITE_NAME = "Sebastien Samson"

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Proof", href: "/proof" },
  { label: "Credits", href: "/games" },
  { label: "Writings", href: "/essays-and-talks" },
  { label: "Contact", href: "/contact" },
]

export const INTRO_CALL_HREF = "mailto:contact@sebsamson.com?subject=Contact"
export const ONE_PAGER_HREF = "/pdf/Sebastien_Samson_CV.pdf"
export const LINKEDIN_HREF = "https://www.linkedin.com/in/sebsamson"

export const FOOTER_LEGAL_TEXT =
  "All product names, logos, brands, and images are property of their respective owners and are used here for identification and portfolio purposes only. This site is not affiliated with or endorsed by the respective publishers or rights holders."

export const HOME_CONTENT = {
  heroTitle: "Game Director and Design Leader",
  heroLead:
    "17+ years shaping games across console, mobile F2P, PC, and VR, with a focus on product vision, design leadership, roadmap clarity, and team alignment.",
  heroImage: {
    src: "/images/Seb_1Mb.jpg",
    alt: "Portrait of Sebastien Samson",
  },
  whatIDo: [
    "Lead product vision, player promise, and design direction across multidisciplinary teams.",
    "Turn broad goals into roadmaps, priorities, decision rules, and shippable slices.",
    "Build operating cadence across design, production, product, stakeholders, and leadership.",
  ],
  howIWork: [
    {
      title: "Product Vision",
      summary: "Clarifying the player promise, creative pillars, success criteria, and tradeoff rules behind a game.",
    },
    {
      title: "Design Leadership",
      summary: "Guiding designers, producers, and cross-functional partners through prioritization, iteration, and delivery.",
    },
    {
      title: "Execution Systems",
      summary: "Creating practical roadmaps, review cadences, decision logs, and delivery rituals that reduce churn.",
    },
  ] satisfies HomeServiceCard[],
  selectedOutcomes: [
    {
      title: "Vision reset under delivery pressure",
      description: "Clarified decision rules, stabilized roadmap priorities, and reduced churn.",
      href: "/proof#vision-reset",
    },
    {
      title: "Backlog triage to shippable plan",
      description: "Rebuilt priority stack and acceptance criteria to improve predictability.",
      href: "/proof#backlog-triage",
    },
    {
      title: "Retention feature discovery and delivery",
      description: "Identified a missing retention lever and scoped a buildable solution.",
      href: "/proof#retention-feature",
    },
  ] satisfies SelectedOutcome[],
  whereDoneIt:
    "Selected credits include work across VR, mobile F2P, and live operations with teams from startup to AAA scale.",
  experienceTools: [
    {
      label: "Unity",
      src: "/images/unity-icon.png",
      alt: "Unity logo",
      width: 398,
      height: 398,
    },
    {
      label: "Unreal Engine",
      src: "/images/Unreal_Engine-Logo.wine.png",
      alt: "Unreal Engine logo",
      width: 1399,
      height: 1447,
    },
  ],
  closingCta:
    "This site collects selected work, outcomes, credits, and writing from my career in game direction and design leadership.",
}

export const SERVICES_CONTENT = {
  lead: "Professional focus areas from director and manager roles across game teams, live products, and cross-functional delivery.",
  offers: [
    {
      title: "Product Vision and Creative Direction",
      duration: "Leadership focus",
      useCase: "Defining the player promise, experience pillars, product goals, and practical tradeoff rules that guide a team.",
      deliverables: [
        "Player promise and north-star goals",
        "Creative pillars and design constraints",
        "Decision rules for explicit tradeoffs",
        "Roadmap clarity and scope boundaries",
        "Stakeholder alignment materials",
      ],
    },
    {
      title: "Design Management and Team Alignment",
      duration: "Management focus",
      useCase: "Supporting designers, producers, and cross-discipline partners through prioritization, critique, and delivery rhythm.",
      deliverables: [
        "Design team leadership",
        "Review cadence and decision checkpoints",
        "Ownership clarity",
        "Backlog triage and sequencing",
        "Cross-functional communication rhythm",
      ],
    },
    {
      title: "Live Product and Retention Systems",
      duration: "Product focus",
      useCase: "Connecting player behavior, product goals, and buildable features to improve long-term engagement.",
      deliverables: [
        "Retention hypothesis framing",
        "Feature definition and scope boundaries",
        "Success criteria",
        "Rollout and iteration loops",
        "Risk and dependency mapping",
      ],
    },
  ] satisfies ServiceOffer[],
  closingCta: "These areas summarize recurring patterns across my professional work.",
}

export const PROOF_CONTENT = {
  intro:
    "Selected outcomes from director and manager roles. Details are NDA-safe and focused on leadership systems, decisions, and delivery impact.",
  caseStudies: [
    {
      id: "vision-reset",
      title: "Vision and prioritization reset under pressure",
      context: "Design Director role, multi-discipline team, production phase.",
      problem:
        "Vision drift, repeated reprioritization, and stakeholder disagreement slowed execution.",
      whatIDid: [
        "Ran alignment workshops to define player promise, goals, and constraints.",
        "Established explicit decision rules for recurring tradeoffs.",
        "Rebuilt roadmap into Now / Next / Later with clear ownership.",
        "Introduced cut list discipline and weekly priority reviews.",
        "Maintained a decision log to reduce reversals.",
      ],
      artifactsDelivered: [
        "Vision one-pager",
        "Decision rules",
        "Roadmap and cut list",
        "Risk and dependency map",
        "Operating cadence template",
      ],
      result:
        "Faster decisions, reduced roadmap churn, clearer ownership, and more predictable milestone delivery.",
    },
    {
      id: "backlog-triage",
      title: "Turning a messy backlog into a shippable plan",
      context:
        "Game Director / Design Manager context, cross-functional team, multiple competing initiatives.",
      problem:
        "Backlog bloat and unresolved priority debates created blockers and late scope changes.",
      whatIDid: [
        "Audited initiatives against goals, player impact, and delivery cost.",
        "Grouped work into shippable slices with explicit acceptance criteria.",
        "Sequenced dependencies with production to reduce rework.",
        "Added lightweight early reviews that forced decisions before implementation.",
      ],
      artifactsDelivered: [
        "Prioritized backlog",
        "Shippable slice plan",
        "Acceptance criteria set",
        "Dependency map",
        "Review checklist",
      ],
      result:
        "Improved throughput, fewer late reversals, better predictability, and less wasted work.",
    },
    {
      id: "retention-feature",
      title: "Retention feature discovery and delivery",
      context: "Advisory engagement with a live VR title and existing roadmap pressure.",
      problem:
        "Acquisition and quality were strong, but a missing retention mechanism limited longer-term engagement.",
      whatIDid: [
        "Diagnosed where retention behavior dropped and why.",
        "Defined a retention hypothesis aligned with current product tone and constraints.",
        "Scoped a buildable slice with clear boundaries and success criteria.",
        "Prepared rollout and iteration loop without destabilizing other roadmap commitments.",
      ],
      artifactsDelivered: [
        "Retention hypothesis map",
        "Feature definition and scope boundaries",
        "Rollout plan",
        "Success criteria",
      ],
      result: "The team shipped a missing retention lever while keeping overall delivery on track.",
    },
  ] satisfies ProofCaseStudy[],
  ultraShortProof: [
    "Clarified vision and decision rules, created a prioritized roadmap and cut list, aligned stakeholders, stabilized delivery cadence.",
    "Rebuilt backlog into shippable slices with acceptance criteria and reduced late scope churn.",
    "Aligned creative and business priorities through measurable success criteria and recurring executive readouts.",
  ],
  testimonials: [
    {
      quote:
        "It was a total pleasure working with Seb. His vast experience and knowledge around all areas of production was a massive help. His ability to stay calm and solve curveballs was exceptional.",
      cite: "Kevin Watts, Development Director, EA",
    },
    {
      quote:
        "From the beginning of our collaboration, Sebastien was an invaluable mentor during my transition to a new role. He stands out for analytical thinking and process optimization.",
      cite: "Sebastien Charette, Game Designer, Ubisoft Montreal",
    },
  ] satisfies Testimonial[],
  closingCta:
    "These examples summarize how I approach product clarity, team alignment, and delivery systems in professional game development contexts.",
}

export const CONTACT_CONTENT = {
  intro:
    "Professional links, writing, credits, and CV access for reference.",
  directActions: [
    { label: "Email", href: INTRO_CALL_HREF },
    { label: "Connect on LinkedIn", href: LINKEDIN_HREF, external: true },
    { label: "Download CV", href: ONE_PAGER_HREF },
  ] satisfies ContactAction[],
  engagementFitChecklist: [
    "Game direction, design leadership, and product vision.",
    "Console, mobile F2P, PC, VR, and applied gamification experience.",
    "Roadmap prioritization, stakeholder alignment, and delivery systems.",
    "Mentorship, critique, team cadence, and cross-discipline communication.",
  ],
  responseExpectations: [
    "This site is maintained as a professional portfolio.",
    "Current availability is not listed here.",
    "For background, see credits, proof, writing, LinkedIn, or CV.",
  ],
}

export const GAMES_CONTENT = {
  intro:
    "These credits are the operating context behind my professional work in vision clarity, prioritization, and execution alignment. They show the environments where I have led teams, reset roadmaps, and supported live delivery.",
}

export const WRITINGS_CONTENT = {
  intro:
    "I speak and write about game production, player psychology, and systems design. My lens is practical: principles that help teams plan roadmaps, operate live-services, and build engaging experiences. I also mentor designers and advocate for healthy, data-informed iteration.",
  sections: [
    {
      title: "Gamification & Player Psychology",
      items: [
        {
          title: "The Big Gamification Challenge: Compulsion Loops & Dopamine",
          tag: "2018 | Gamification, Player Engagement",
          summary:
            "Explains how compulsion loops underpin anticipation, progression, and retention in games and gamified apps. Covers extrinsic vs. intrinsic rewards, calibrating challenge/skill, and ethical considerations when designing for engagement.",
          links: [
            {
              label: "View slides (PDF)",
              href: "/pdf/The Big Gamification Challenge  2018.pdf",
            },
            {
              label: "Read article (PDF)",
              href: "/pdf/Compulsion Loops & Dopamine in Games and Gamification.pdf",
            },
          ],
        },
      ],
    },
    {
      title: "Game Design Theory",
      items: [
        {
          title: "Series: The Promise Framework",
          tag: "2026 | Framework | Vision, Delivery",
          summary:
            "A practical framework to keep game vision coherent from early pitch through live operations, with concrete guardrails teams can use during prioritization and execution.",
          links: [
            {
              label: "Read article (PDF)",
              href: "/pdf/Series_%20The%20Promise%20Framework%20%E2%80%94%20Keeping%20Game%20Vision%20Coherent%20from%20Pitch%20to%20Live%20Ops.pdf",
            },
          ],
        },
        {
          title: "Debugging Player Learning",
          tag: "2026 | Framework | Onboarding, UX",
          summary:
            "A six-step diagnostic approach for identifying where players hit friction while learning mechanics, then turning those findings into targeted design fixes.",
          links: [
            {
              label: "Read article (PDF)",
              href: "/pdf/Debugging%20Player%20Learning_%20A%206-Step%20Framework%20for%20Finding%20%E2%80%9CFriction%E2%80%9D%20in%20Your%20Mechanics.pdf",
            },
          ],
        },
        {
          title: "Flow and Difficulty Adjustment in Video Games",
          tag: "2010 | Flow, Player Experience",
          summary:
            "Discusses balancing challenge and player skill to keep players in a flow state. Outlines tuning strategies and the trade-offs between dynamic vs. static difficulty for different genres and audiences.",
          links: [
            {
              label: "Read article (PDF)",
              href: "/pdf/Flow and Difficulty Adjustment in Video Games.pdf",
            },
          ],
        },
      ],
    },
    {
      title: "Interactive Art & Technology",
      items: [
        {
          title: "Video Games and Cybernetics",
          tag: "2008 | Cybernetics, Emergence",
          summary:
            "Frames games as cybernetic systems governed by feedback loops between player and simulation. Connects loop design to emergent play patterns.",
          links: [
            {
              label: "Read article (PDF)",
              href: "/pdf/Video games and Cybernetics.pdf",
            },
          ],
        },
        {
          title: "Interactivity, Arts and New Technologies",
          tag: "2007 | Interactive Art",
          summary:
            "Explores how new technologies enable novel forms of interactive art, and the practical constraints creators must navigate.",
          links: [
            {
              label: "Read article (PDF)",
              href: "/pdf/Interactivity, arts and new technologies.pdf",
            },
          ],
        },
        {
          title: "Strategies of Dramatization in Live-Action Role-Playing",
          tag: "2006 | LARP, Dramaturgy",
          summary:
            "Analyzes immersion, costuming, space, and rules as tools for shaping participant experience in live-action role-playing.",
          links: [
            {
              label: "Read article (PDF)",
              href: "/pdf/LARP as interactive work.pdf",
            },
          ],
        },
      ],
    },
  ] satisfies WritingSection[],
}
