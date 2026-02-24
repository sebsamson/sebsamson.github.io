import type { ProjectEntry } from "@/content/types"

export const PROJECTS: ProjectEntry[] = [
  {
    slug: "finalfury-vr",
    title: "Final Fury (VR)",
    metaLine: "Platform: VR | Status: Playtests | Role: Design leadership",
    media: [
      {
        type: "image",
        src: "/images/finalfury-cover.jpg",
        alt: "Final Fury VR cover art",
        width: 1280,
        height: 720,
      },
    ],
    paragraphs: [
      "Arcade-inspired VR fighting game. I drove the design direction and hands-on systems work, establishing a tight playtest-to-backlog loop to iterate on core mechanics, onboarding, and encounter pacing.",
    ],
    bullets: [
      "Partnered with product, engineering, and art to align goals and delivery.",
      "Defined prototypes and evaluation criteria; consolidated feedback into actionable backlogs.",
    ],
    referenceLinks: [{ label: "finalfuryvr.com", href: "https://finalfuryvr.com/" }],
  },
  {
    slug: "synthriders-vr",
    title: "Synth Riders (VR/MR)",
    metaLine: "Platform: VR/MR | Status: Live | Role: Advisory (design/product)",
    media: [
      {
        type: "image",
        src: "/images/synthriders-hero.jpg",
        alt: "Synth Riders promotional image",
        width: 1280,
        height: 720,
      },
    ],
    paragraphs: [
      "Provided advisory support on systems design and product strategy for an established live service rhythm game, with a focus on sustainable operations and player experience.",
    ],
    bullets: [
      "Collaborated with the team to assess features against roadmap and live cadence.",
      "Supported tuning and content planning discussions with a player-first lens.",
    ],
    referenceLinks: [{ label: "synthridersvr.com", href: "https://synthridersvr.com/" }],
  },
  {
    slug: "ugc",
    title: "UGC Platforms - Horizon Worlds, Roblox, UEFN",
    metaLine: "Platform: UGC (VR/PC/Console) | Status: Live | Role: UGC platform & multi-title design support",
    media: [
      {
        type: "image",
        src: "/images/horizonworlds-hero.jpg",
        alt: "Horizon Worlds promotional image",
        width: 720,
        height: 405,
      },
      {
        type: "image",
        src: "/images/roblox-ugc.jpg",
        alt: "Collage of Roblox experiences",
      },
      {
        type: "image",
        src: "/images/uefn-square.jpg",
        alt: "Fortnite / UEFN key art",
      },
    ],
    paragraphs: [
      "Contributions across user-generated content ecosystems - Horizon Worlds, Roblox, and Unreal Editor for Fortnite (UEFN). Work spanned creator UX, design systems, and live operations support.",
    ],
    bullets: [
      "Horizon Worlds: Multi-title support with dotted-line management across design teams; aligned best practices, clarified product/design interfaces, and supported iteration in a live service cadence.",
      "Roblox: Guidance on experience structure, economy hooks, and onboarding flows tailored to Roblox's player/creator audience.",
      "UEFN: Support for modular content pipelines and encounter design patterns suitable for Fortnite's UGC surface.",
    ],
    referenceLinks: [
      { label: "Horizon Worlds", href: "https://www.meta.com/horizon-worlds/" },
      { label: "Roblox", href: "https://www.roblox.com/" },
      { label: "UEFN", href: "https://www.fortnite.com/creative/editor" },
    ],
  },
  {
    slug: "jurassicworldalive-mobile",
    title: "Jurassic World Alive (Mobile)",
    metaLine: "Platform: Mobile | Status: Live | Role: Studio Director, Design (support)",
    media: [
      {
        type: "image",
        src: "/images/jw-alive-hero.jpg",
        alt: "Jurassic World Alive",
        width: 1200,
        height: 675,
      },
    ],
    paragraphs: [
      "Geolocation character collector RPG. Supported the team with studio-level design leadership focusing on roadmap clarity, sustainable live operations, and player experience.",
    ],
    bullets: [
      "Aligned feature planning with live cadence and content pipeline.",
      "Facilitated cross-team communication and design best practices.",
      "Partnered with product and analytics for data-informed iteration.",
    ],
  },
  {
    slug: "jurassicworldthegame-mobile",
    title: "Jurassic World: The Game (Mobile)",
    metaLine: "Platform: Mobile | Status: Live | Role: Studio Director, Design (support)",
    media: [
      {
        type: "image",
        src: "/images/jwthegame.jpg",
        alt: "Jurassic World: The Game",
      },
    ],
    paragraphs: [
      "Builder/RPG title. Provided studio-level design support with an emphasis on feature prioritisation, content flow, and maintaining a healthy live cadence.",
    ],
    bullets: [
      "Reviewed systems and economy proposals for clarity and feasibility.",
      "Supported delivery planning with production and engineering.",
      "Encouraged documentation standards and cross-team knowledge sharing.",
    ],
  },
  {
    slug: "lovelink-mobile",
    title: "Love Link (Mobile)",
    metaLine: "Platform: Mobile | Status: Live | Role: Studio Director, Design (support)",
    media: [
      {
        type: "image",
        src: "/images/lovelink-hero.jpg",
        alt: "Love Link",
        width: 1200,
        height: 675,
      },
    ],
    paragraphs: [
      "Inclusive dating sim. Helped foster cross-team collaboration and a sustainable content pipeline while keeping player experience and inclusivity principles at the forefront.",
    ],
    bullets: [
      "Supported content cadence planning and event structuring.",
      "Encouraged UX clarity and narrative/design alignment.",
      "Promoted studio-wide design best practices and knowledge sharing.",
    ],
  },
  {
    slug: "dragonsriseofberk-mobile",
    title: "Dragons: Rise of Berk (Mobile)",
    metaLine: "Platform: Mobile | Status: Live | Role: Studio Director, Design (support)",
    media: [
      {
        type: "image",
        src: "/images/dragons-berk-hero.jpg",
        alt: "Dragons: Rise of Berk",
        width: 1200,
        height: 675,
      },
    ],
    paragraphs: [
      "Builder title in the How to Train Your Dragon universe. Assisted the team on roadmap alignment, features planning, and operations in a live environment.",
    ],
    bullets: [
      "Reviewed design proposals for clarity and scope.",
      "Supported production in scheduling and prioritisation discussions.",
      "Maintained a player-first perspective across updates and events.",
    ],
  },
  {
    slug: "dcheroesvillains-mobile",
    title: "DC Heroes & Villains (Mobile)",
    metaLine: "Platform: Mobile | Status: Soft-launch | Role: Studio Director, Design (support)",
    media: [
      {
        type: "image",
        src: "/images/dchv-hero.svg",
        alt: "DC Heroes & Villains",
        width: 1200,
        height: 675,
      },
    ],
    paragraphs: [
      "Match-3 RPG set in the DC universe. Supported the team with design direction, content planning, and readiness for soft-launch milestones.",
    ],
    bullets: [
      "Contributed to feature prioritisation and soft-launch scope.",
      "Aligned roadmaps and delivery with partner expectations.",
      "Encouraged data-informed iteration and clear success criteria.",
    ],
  },
  {
    slug: "projectcarsgo-mobile",
    title: "Project CARS GO (Mobile)",
    metaLine: "Platform: Mobile | Status: Launched | Role: Game Director",
    media: [
      {
        type: "image",
        src: "/images/pcgo01.jpeg",
        alt: "Project CARS GO mobile racing",
        width: 1200,
        height: 675,
      },
    ],
    paragraphs: [
      "Project CARS GO is a mobile one-touch racing experience developed by EA's Slightly Mad Studios and published by GAMEVIL. The game brings real-world vehicles and tracks to casual play with high-fidelity visuals and sound.",
      "Players collect, customize, and tune cars across multiple classes (GT3, Open-Wheel, Prototype, Road, and more) and compete across modes including World Tour, Invitationals, and Time Trials.",
      "Genre: Mobile, Racing, Free-to-play",
    ],
    bullets: [],
  },
  {
    slug: "legolife-mobile",
    title: "LEGO Life (Mobile)",
    metaLine: "Platform: Mobile | Status: Live | Role: Senior Gamification Design Manager",
    media: [
      {
        type: "image",
        src: "/images/Legolife.jpg",
        alt: "LEGO Life app",
        width: 1200,
        height: 675,
      },
    ],
    paragraphs: [
      "LEGO Life is a creative, kid-friendly platform for sharing builds and inspiration in a safe environment. I contributed as Senior Gamification Design Manager, focusing on engagement systems and a healthy, age-appropriate experience.",
      "Genre: Mobile, Social, Creative",
    ],
    bullets: [],
  },
  {
    slug: "spymaster-mobile",
    title: "Spymaster (Mobile F2P)",
    metaLine: "Platform: Mobile | Status: Soft-launch | Role: Lead Game Designer",
    media: [
      {
        type: "image",
        src: "/images/Spymaster.png",
        alt: "Spymaster mobile game",
        width: 1200,
        height: 675,
      },
    ],
    paragraphs: [
      "At Playraven I supported the Game Director and team on a reboot of the Spymaster IP, shifting from tabletop single-player to a social, collection-driven F2P strategy experience.",
      "Genre: Mobile, F2P, Strategy",
    ],
    bullets: [],
  },
  {
    slug: "farmerama-web",
    title: "Farmerama - Online CMMO (Bigpoint, 2013-2015)",
    metaLine: "Platform: Web | Status: Live | Role: Lead Game Designer",
    media: [
      {
        type: "image",
        src: "/images/Farmerama.jpg",
        alt: "Farmerama web MMO",
        width: 1200,
        height: 675,
      },
    ],
    paragraphs: [
      "From 2013 to 2015, I had the opportunity to serve as the Lead Game Designer on Farmerama, an online CMMO. Leading a team of designers and working with the producer to establish the creative vision and set up the roadmap taught me a lot about live game lifecycles and monetization strategies.",
      "As the Farmerama team was quite large, I enjoyed working with the other leads to streamline the production pipeline and optimize collaboration within design and across departments.",
      "Genre: Online CMMO, Simulation",
    ],
    bullets: [],
  },
  {
    slug: "skylandersuniverse-web",
    title: "Skylanders: Spyro's Universe (Web MMO)",
    metaLine: "Platform: Web | Status: Launched | Role: Game Designer",
    media: [
      {
        type: "image",
        src: "/images/skylanders.jpg",
        alt: "Skylanders: Spyro's Universe",
        width: 960,
        height: 540,
      },
    ],
    paragraphs: [
      "In 2011 I contributed design work to Skylanders: Spyro's Universe, a Flash-based MMO for kids 7-10 developed by Frima Studio for Activision Blizzard. I focused on minigames such as Ground Defense, Castle Assault, and Sky Defense, and supported economy tuning and broader game systems.",
      "Genre: MMO, Action, Adventure",
    ],
    bullets: [],
  },
  {
    slug: "combatofgiants-wii",
    title: "Combat of Giants: Dinosaur Strike (Wii, 2010)",
    metaLine: "Platform: Wii | Status: Shipped | Role: Game Designer",
    media: [
      {
        type: "image",
        src: "/images/dinosaurstrike.jpg",
        alt: "Combat of Giants: Dinosaur Strike",
        width: 960,
        height: 540,
      },
    ],
    paragraphs: [
      "Worked on balancing the single-player ladder mode, improving signs and feedback, and supporting AI design. First experience on Wii, exploring the possibilities of Wiimote/Nunchuk and physically engaged play.",
      "Genre: Wii, Action, Adventure",
    ],
    bullets: [],
  },
  {
    slug: "petzfantasy-ds",
    title: "Petz Fantasy - Nintendo DS/DSi (Ubisoft, 2010)",
    metaLine: "Platform: Nintendo DS/DSi | Status: Shipped | Role: Main Game Designer",
    media: [
      {
        type: "image",
        src: "/images/petzsunshine.jpg",
        alt: "Petz Fantasy - Sunshine Magic",
        width: 960,
        height: 540,
      },
      {
        type: "image",
        src: "/images/petzmoonlight.jpg",
        alt: "Petz Fantasy - Moonlight Magic",
        width: 960,
        height: 540,
      },
    ],
    paragraphs: [
      "Main Game Designer on Petz Fantasy, a two-SKU DS title (Sunshine Magic and Moonlight Magic). Designed collections of magical pets, stylus-based minigames, and care systems balancing needs and powers.",
      "Genre: Nintendo DS/DSi, Life Simulation",
    ],
    bullets: [],
  },
  {
    slug: "myweightlosscoach-iphone",
    title: "My Weight Loss Coach - iPhone & iPod touch",
    metaLine: "Platform: iPhone & iPod touch | Status: Shipped | Role: Lead Game Designer (port)",
    media: [
      {
        type: "image",
        src: "/images/mwlc41.jpg",
        alt: "My Weight Loss Coach iPhone app",
        width: 1200,
        height: 675,
      },
    ],
    paragraphs: [
      "Led the design for the iPhone port of the DS title 'My Weight Loss Coach.' With very few mobile apps or games to reference at the time, the core challenge was inventing intuitive touch-based interactions and UX patterns suited to early iPhone and iPod touch. Focused on adapting DS mechanics to multitouch and simplifying flows for mobile.",
      "Genre: iPhone, Education, Casual",
    ],
    bullets: [],
  },
  {
    slug: "iquit-iphone",
    title: "I Quit (My Stop Smoking Coach with Allen Carr) - iPhone",
    metaLine: "Platform: iPhone | Status: Shipped | Role: Game Designer",
    media: [
      {
        type: "image",
        src: "/images/iquit.png",
        alt: "I Quit (My Stop Smoking Coach) screenshot",
      },
    ],
    paragraphs: [
      "My journey as a Game Designer began with the adaptation of the Nintendo DS game 'My Stop Smoking Coach with Allen Carr' for iPod touch and iPhone. The iPhone version, 'I Quit,' offered personalized feedback and motivation to help users quit smoking.",
      "Genre: iPhone, Education, Casual",
    ],
    bullets: [],
  },
  {
    slug: "kilojam-installation",
    title: "Kilo-Jam (2006)",
    media: [
      {
        type: "iframe",
        src: "https://www.dailymotion.com/embed/video/x1mqqj?autoplay=0",
        title: "Dailymotion Video Player",
      },
    ],
    paragraphs: [
      "Kilo-Jam is an interactive visual and sound performance installation created by the BANG! collective. Gym equipment (punching bags, a stationary bike, a step) were converted into musical instruments using sensors and computers. Participants produced a collaborative 'jam,' evolving computer-generated music from trip-hop to electro to drum & bass; synchrony was visualised on a projected display.",
      "Date: April 30, 2006",
      "Location: Montreal, Canada",
      "Artists: Sebastien Samson (realisation, programming), Olivier Lalonde (sound, programming), Renaud Granda (video, programming), Sophie Chabot (production), Nestor Navarez (logistics)",
    ],
    bullets: [],
  },
  {
    slug: "projetxion-installation",
    title: "Projet Xion (2002)",
    media: [
      {
        type: "iframe",
        src: "https://www.dailymotion.com/embed/video/x1mw01",
        title: "Dailymotion Video Player",
      },
    ],
    paragraphs: [
      "Presented as the final project for my media arts studies, Projet Xion is a media installation created with the assistance of Marie-Christine Perron Marier.",
      "The piece stages a controlled sensory environment for a voluntary participant: peripheral vision is constrained, headphones provide audio isolation, and a heart-rate sensor tracks arousal throughout. A large screen presents a sequence moving from relaxation to sensory aggression to dynamic stimuli; a second projection shows the participant's eyes to an outside audience, along with periodic heart-rate readouts.",
      "Genre: Media art, installation",
    ],
    bullets: [],
  },
  {
    slug: "sanscoeurcircuit-installation",
    title: "Sans Coeur Circuit (2005)",
    media: [
      {
        type: "image",
        src: "/images/sans_coeur_circuit_diagram.jpg",
        alt: "Diagram of Sans Coeur Circuit installation showing laser path and buttons",
        width: 800,
        height: 600,
      },
    ],
    paragraphs: [
      "Playful interactive installation co-created with Sophie Chabot, Olivier Lalonde, and Renaud Granda. Players switch off lights by pressing spatially distributed buttons while avoiding a moving laser tracked by sonic detection.",
    ],
    bullets: [],
  },
]

export const PROJECTS_BY_SLUG: Record<string, ProjectEntry> = Object.fromEntries(
  PROJECTS.map((project) => [project.slug, project]),
)

export const PROJECT_SLUGS = PROJECTS.map((project) => project.slug)
