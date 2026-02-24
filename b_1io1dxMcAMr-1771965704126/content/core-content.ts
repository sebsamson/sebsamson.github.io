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
  { label: "Services", href: "/services" },
  { label: "Proof", href: "/proof" },
  { label: "Credits", href: "/games" },
  { label: "Writings", href: "/essays-and-talks" },
  { label: "Contact", href: "/contact" },
]

export const INTRO_CALL_HREF = "mailto:contact@sebsamson.com?subject=Intro%20Call"
export const ONE_PAGER_HREF = "/pdf/CV 1 page - Sebastien Samson.pdf"
export const LINKEDIN_HREF = "https://www.linkedin.com/in/sebsamson"

export const FOOTER_LEGAL_TEXT =
  "All product names, logos, brands, and images are property of their respective owners and are used here for identification and portfolio purposes only. This site is not affiliated with or endorsed by the respective publishers or rights holders."

export const HOME_CONTENT = {
  heroTitle: "Fractional Game Director for vision clarity and prioritization",
  heroLead:
    "I help leaders align strategy, sharpen the product promise, and turn priorities into a roadmap teams can ship.",
  heroImage: {
    src: "/images/Seb_1Mb.jpg",
    alt: "Portrait of Sebastien Samson",
  },
  whatIDo: [
    "Clarify product vision with explicit player promise, goals, and tradeoff rules.",
    "Reset priorities into ship-ready roadmaps, cut lists, and ownership clarity.",
    "Establish decision cadence so cross-discipline teams move faster with less churn.",
  ],
  howIWork: [
    {
      title: "Vision and Prioritization Reset",
      summary: "Ten business days to align leadership and produce a roadmap teams can execute.",
    },
    {
      title: "Execution Alignment Sprint",
      summary: "Four to six weeks to convert strategy into shippable slices, cadence, and readiness.",
    },
    {
      title: "Fractional Game Direction",
      summary: "Ongoing support for weekly priorities, difficult tradeoffs, and executive alignment.",
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
    "Selected credits include work across VR, mobile F2P, and live operations with Kluge Interactive, Jam City/Ludia, EA/Slightly Mad Studios, LEGO, Bigpoint, Frima, and Ubisoft.",
  closingCta:
    "Need clarity before your next milestone? I can help you make the next decisions explicit and executable.",
}

export const SERVICES_CONTENT = {
  lead: "Productized support for leaders who need fast clarity, sharper priorities, and delivery rhythm that holds under pressure.",
  offers: [
    {
      title: "Vision and Prioritization Reset",
      duration: "10 business days",
      useCase: "Use this when vision drift and priority churn are blocking delivery.",
      deliverables: [
        "Product promise and north-star goals",
        "Decision rules for explicit tradeoffs",
        "Now / Next / Later roadmap",
        "Cut list with owner clarity",
        "30/60 day action plan",
        "Risk and dependency map",
        "Operating cadence template",
      ],
    },
    {
      title: "Execution Alignment Sprint",
      duration: "4 to 6 weeks",
      useCase: "Use this when teams need concrete slices, tighter reviews, and release readiness.",
      deliverables: [
        "Shippable work slices",
        "Spec pack with acceptance criteria",
        "Review cadence and decision checkpoints",
        "Release readiness checklist",
        "Stakeholder communication rhythm",
      ],
    },
    {
      title: "Fractional Game Direction Retainer",
      duration: "Ongoing",
      useCase: "Use this when leadership needs recurring decision support and sustained alignment.",
      deliverables: [
        "Weekly priority and risk review",
        "Decision log and tradeoff tracking",
        "Leadership coaching for leads and producers",
        "Cross-team alignment support",
        "Monthly executive readout",
      ],
    },
  ] satisfies ServiceOffer[],
  closingCta: "Choose the format that matches your current pressure point and timeline.",
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
    "If your team needs this level of clarity and prioritization support, we can map your next step in one intro call.",
}

export const CONTACT_CONTENT = {
  intro:
    "If you need fast clarity on product direction, roadmap priorities, or leadership alignment, reach out directly.",
  directActions: [
    { label: "Book an intro call", href: INTRO_CALL_HREF },
    { label: "Connect on LinkedIn", href: LINKEDIN_HREF, external: true },
    { label: "Download one-pager", href: ONE_PAGER_HREF },
  ] satisfies ContactAction[],
  engagementFitChecklist: [
    "You have a milestone or release window that needs tighter priorities.",
    "Leadership or cross-discipline alignment is slowing decisions.",
    "Your roadmap needs explicit tradeoffs, cuts, and ownership.",
    "You want a lightweight, practical operating cadence that sticks.",
  ],
  responseExpectations: [
    "Initial response with availability and fit questions.",
    "Intro call focused on context, constraints, and desired outcomes.",
    "Recommended engagement format and next-step deliverables.",
  ],
}

export const GAMES_CONTENT = {
  intro:
    "These credits are the operating context behind my current services in vision clarity, prioritization, and execution alignment. They show the environments where I have led teams, reset roadmaps, and supported live delivery.",
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
