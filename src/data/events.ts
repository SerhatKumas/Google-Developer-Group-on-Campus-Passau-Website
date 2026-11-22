import { EventItem } from "@/types";

export const eventsData: EventItem[] = [
  {
    id: "event-1",
    slug: "prompt-engineering-gemini-championship",
    title: "Prompt Engineering & Gemini API Championship",
    summary: "Hands-on workshop and competitive 3-hour hack sprint building multimodal agents with Google's Gemini 1.5 Pro and Flash models.",
    description: `Dive deep into cutting-edge multimodal prompting, function calling, and structured outputs using the Gemini API. In the first half, our technical mentors will guide you through system prompting, temperature control, and few-shot calibration. 

In the second half, participants will form cross-disciplinary pairs (Computer Science + Law/Business) to build a prototype solving a tangible campus problem within 3 hours. Free API credits, pizza, and Google swag included!`,
    category: "Workshops & Peer Training",
    status: "Open for Registration",
    startDate: "2026-12-05T16:00:00+01:00",
    endDate: "2026-12-05T20:30:00+01:00",
    location: "University of Passau, IM Building (Informatik & Mathematik)",
    room: "Room IM 025 (CIP-Pool 1)",
    coverImage: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    ],
    registrationUrl: "https://forms.gle/gdgpassau-gemini-championship",
    speakers: [
      {
        name: "Maximilian Brunner",
        role: "Tech Lead & Cloud Specialist",
        organization: "GDG on Campus Passau",
        linkedinUrl: "https://www.linkedin.com/in/maximilian-brunner/",
      },
      {
        name: "Lukas Wagner",
        role: "AI & ML Specialist",
        organization: "University of Passau AI Lab",
        linkedinUrl: "https://www.linkedin.com/in/lukas-wagner-ai/",
      },
    ],
    agenda: [
      { time: "16:00 - 16:20", title: "Welcome & Multimodal LLM Foundations" },
      { time: "16:20 - 17:15", title: "Gemini API Deep Dive: Function Calling & JSON Outputs" },
      { time: "17:15 - 17:30", title: "Team Formation & Challenge Reveal" },
      { time: "17:30 - 20:00", title: "3-Hour Sprint: Hackathon Build Session & Pizza" },
      { time: "20:00 - 20:30", title: "3-Minute Demos, Jury Feedback & Winner Ceremony" },
    ],
    prerequisites: [
      "Bring your own laptop with Python 3.10+ or Node.js 18+ installed",
      "Basic programming literacy in any language (CS and non-CS both welcome)",
      "Curiosity for generative AI applications",
    ],
    featured: true,
  },
  {
    id: "event-2",
    slug: "gdpr-speed-audit-tech-meets-law",
    title: "GDPR & AI Speed Audit: Tech Meets Law",
    summary: "An interdisciplinary clinic where Technical Law students team up with Computer Science engineers to stress-test real web architectures.",
    description: `Passau is internationally recognized for its leading law faculty and pioneering tech curriculum. In this signature interdisciplinary event, student developers bring their active GitHub web apps or startup ideas, and technical law peers conduct a guided "GDPR & EU AI Act Speed Audit".

Learn about data privacy by design, consent logging, cross-border telemetry, and automated compliance frameworks before deploying your product.`,
    category: "AI & Tech-Law",
    status: "Spots Limited",
    startDate: "2026-12-12T17:00:00+01:00",
    endDate: "2026-12-12T19:45:00+01:00",
    location: "University of Passau, Juridicum Building (JUR)",
    room: "Room JUR 014",
    coverImage: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80",
    registrationUrl: "https://forms.gle/gdgpassau-gdpr-speed-audit",
    speakers: [
      {
        name: "Hannah Becker",
        role: "Community & Legal Lead",
        organization: "Chair for Technical Law & Data Protection",
        linkedinUrl: "https://www.linkedin.com/in/hannah-becker-law/",
      },
      {
        name: "Laura Krämer",
        role: "GDPR & AI Ethics Advisor",
        organization: "GDG on Campus Passau",
        linkedinUrl: "https://www.linkedin.com/in/laura-kraemer-legal/",
      },
    ],
    agenda: [
      { time: "17:00 - 17:30", title: "Keynote: What Developers Overlook in the EU AI Act & GDPR" },
      { time: "17:30 - 18:30", title: "Interactive Pair Audits: Code Review for Privacy" },
      { time: "18:30 - 19:15", title: "Case Studies: From Cookie Banners to Vector Embeddings" },
      { time: "19:15 - 19:45", title: "Open Discussion & Interdisciplinary Q&A" },
    ],
    prerequisites: [
      "Open to all faculties: Law, Computer Science, Business, and Humanities",
      "No prior legal expertise required for engineers",
    ],
    featured: true,
  },
  {
    id: "event-3",
    slug: "code-for-passau-civic-hackathon",
    title: "Code for Passau: Civic Hackathon 2026",
    summary: "48-hour campus hackathon addressing local sustainability, public mobility, and student life in the Three-River City.",
    description: `Join over 100 students for the flagship university hackathon of the semester! Teams will receive open dataset feeds from regional public transport, university dining halls, and ecological sensors across the Danube, Inn, and Ilz rivers.

Mentors from local tech companies, the City of Passau, and Google alumni will provide on-site technical guidance. Prizes worth over €3,000, sponsor booths, around-the-clock catering, and high-speed fiber internet provided.`,
    category: "Hackathons & Startups",
    status: "Open for Registration",
    startDate: "2027-01-16T18:00:00+01:00",
    endDate: "2027-01-18T16:00:00+01:00",
    location: "University of Passau, IT-Zentrum (ITZ)",
    room: "Auditorium & Open Atrium",
    coverImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    registrationUrl: "https://forms.gle/gdgpassau-code-for-passau",
    speakers: [
      {
        name: "Serhat Kumaş",
        role: "Chapter Lead",
        organization: "GDG on Campus Passau",
        linkedinUrl: "https://www.linkedin.com/in/serhatkumas/",
      },
      {
        name: "Dr. Stefan Meier",
        role: "Director of Digital Innovation",
        organization: "Passau Tech Initiative",
      },
    ],
    agenda: [
      { time: "Friday 18:00", title: "Opening Ceremony, Challenge Briefings & Team Pitching" },
      { time: "Friday 20:00", title: "Hacking Begins & Late Night Pizza" },
      { time: "Saturday 11:00", title: "Mentor Checkpoint: Architecture & Pitch Review" },
      { time: "Saturday 23:59", title: "Midnight Coding Marathon & Energy Bar Drop" },
      { time: "Sunday 14:00", title: "Code Freeze & Submission Deadline" },
      { time: "Sunday 15:00", title: "Public Demo Fair & Award Ceremony" },
    ],
    prerequisites: [
      "Enrolled student at University of Passau or Bavarian partner universities",
      "All skill levels: developers, UI designers, product owners, and domain experts",
    ],
    featured: true,
  },
  {
    id: "event-4",
    slug: "google-munich-technical-trip",
    title: "Google Munich Technical Trip & Engineering Q&A",
    summary: "Exclusive site visit to Google's engineering hub in Munich for GDG Passau members, including privacy tech tours and career panels.",
    description: `We are taking a dedicated bus from Passau Central Station directly to Google's Munich Development Centre at Arnulfstraße. 

Highlights include an insider tour of Google Safety Engineering Center (GSEC), a deep-dive technical talk by Staff Software Engineers, an open panel on technical interviewing (algorithmic, system design, Googliness), and informal networking over lunch at the Google cafeteria.`,
    category: "Career & Industry",
    status: "Spots Limited",
    startDate: "2027-01-29T07:30:00+01:00",
    endDate: "2027-01-29T19:00:00+01:00",
    location: "Google Munich Engineering Hub, Arnulfstraße 126, 80636 München",
    coverImage: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?auto=format&fit=crop&w=1200&q=80",
    registrationUrl: "https://forms.gle/gdgpassau-munich-trip",
    agenda: [
      { time: "07:30", title: "Bus Departure from Passau Main Station" },
      { time: "10:00 - 10:30", title: "Arrival, Badging & Security at Google Munich" },
      { time: "10:30 - 12:00", title: "GSEC Tech Tour: Privacy Engineering at Global Scale" },
      { time: "12:00 - 13:30", title: "Networking Lunch with Google Software Engineers" },
      { time: "13:30 - 15:00", title: "Panel Discussion: Cracking the Technical Interview" },
      { time: "15:00 - 16:30", title: "Breakout Mentorship & Student Q&A" },
      { time: "16:45", title: "Bus Return to Passau" },
    ],
    prerequisites: [
      "Active GDG on Campus Passau member",
      "Valid Student ID and Photo ID for campus entrance",
    ],
    featured: false,
  },

  // Past Events (Recaps & Photo Proof)
  {
    id: "event-past-1",
    slug: "open-air-social-mixer-inn-river",
    title: "Open-Air Social Mixer: Inn River Tech Sunset",
    summary: "Over 80 students gathered by the picturesque Inn River for cold drinks, tech conversations, and project showcase pitches.",
    description: `Our semester kickoff brought together students from Computer Science, AI, Business, and Law for an informal mixer along the Innwiese. 

Members pitched their side projects, met potential co-founders, and connected with senior Master's student mentors over Bavarian pretzels and refreshments.`,
    category: "Social & Mixers",
    status: "Completed",
    startDate: "2026-10-18T17:30:00+02:00",
    endDate: "2026-10-18T21:00:00+02:00",
    location: "Innwiese & Nikolakloster, University of Passau",
    coverImage: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
    ],
    speakers: [
      {
        name: "Serhat Kumaş",
        role: "Chapter Lead",
        organization: "GDG on Campus Passau",
      },
      {
        name: "Elena Weber",
        role: "Vice Lead",
        organization: "GDG on Campus Passau",
      },
    ],
    agenda: [
      { time: "17:30", title: "Arrival, Nametags & Welcome Drinks" },
      { time: "18:00", title: "Semester Roadmap Presentation by Core Leads" },
      { time: "18:30", title: "Speed-Networking: Find Your Coding Partner" },
      { time: "19:30", title: "Casual Sunset Hangout & Bavarian Brezn" },
    ],
    featured: false,
  },
  {
    id: "event-past-2",
    slug: "coffee-and-tech-cloud-architecture-101",
    title: "Coffee & Tech: Modern Cloud Architecture 101",
    summary: "Interactive discussion on serverless computing, Docker containerization, and cost-effective cloud deployments on Google Cloud.",
    description: `A relaxed Sunday afternoon technical discussion breaking down microservices vs. serverless patterns, cold start mitigations, and setting up free-tier Google Cloud environments for student capstones.`,
    category: "Workshops & Peer Training",
    status: "Completed",
    startDate: "2026-11-08T14:00:00+01:00",
    endDate: "2026-11-08T16:30:00+01:00",
    location: "Café Museum, Passau Old Town",
    coverImage: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
    ],
    speakers: [
      {
        name: "Maximilian Brunner",
        role: "Tech Lead",
        organization: "GDG on Campus Passau",
      },
    ],
    featured: false,
  },
];
