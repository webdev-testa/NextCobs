export interface CaseStudyFramework {
  weight: string;
  constraint: string;
  build: string;
  result: string;
}

export interface Project {
  slug: string;
  title: string;
  category: "Full Stack & Mobile" | "AI & Enterprise" | "Freelance / Web" | "Systems & Data";
  subtitle: string;
  summary: string;
  year: string;
  role: string;
  clientOrContext: string;
  tags: string[];
  featured: boolean;
  colorBlock: "lime" | "lilac" | "cream" | "mint" | "pink" | "coral" | "navy";
  bgHex: string;
  framework: CaseStudyFramework;
  overview: string;
  problem: string;
  solution: string;
  roleBeyondCode?: string;
  standoutMoments?: {
    title: string;
    description: string;
  }[];
  architecture: {
    title: string;
    description: string;
    flowSteps: string[];
  };
  keyDecisions: {
    decision: string;
    rationale: string;
  }[];
  codeSnippet?: {
    filename: string;
    language: string;
    code: string;
    caption: string;
  };
  metrics: {
    label: string;
    value: string;
  }[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface NoteArticle {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  tags: string[];
  summary: string;
  isDraft?: boolean;
  content: {
    intro: string;
    sections: {
      heading: string;
      paragraphs: string[];
      code?: {
        filename: string;
        language: string;
        code: string;
      };
      callout?: string;
    }[];
    conclusion: string;
  };
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  type: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
}

export interface PursuitPhoto {
  id: string;
  url: string;
  caption: string;
  location: string;
  date: string;
  aspectRatio?: "landscape" | "portrait" | "square";
  camera?: string;
  note?: string;
}

export interface PursuitHighlight {
  title: string;
  detail: string;
  icon?: string;
}

export interface PursuitCuratedItem {
  title: string;
  creatorOrContext: string;
  description: string;
  tag: string;
  quote?: string;
  link?: string;
}

export interface PursuitDetail {
  slug: string;
  title: string;
  subtitle: string;
  tag: string;
  accent: "lilac" | "mint" | "cream" | "coral" | "lime" | "pink";
  emoji: string;
  readTime: string;
  photoCount: number;
  leadQuote: string;
  overview: string[];
  subsections: {
    heading: string;
    paragraphs: string[];
    callout?: string;
  }[];
  highlights: PursuitHighlight[];
  curatedItems?: {
    sectionTitle: string;
    sectionDescription: string;
    items: PursuitCuratedItem[];
  };
  gallery: PursuitPhoto[];
  sketchIllustration?: {
    url: string;
    title: string;
    subtitle: string;
    caption: string;
    location?: string;
  };
}

export interface StickyNote {
  id: string;
  author: string;
  role: string;
  content: string;
  color: "lime" | "lilac" | "cream" | "mint" | "pink" | "coral";
  rotation: number;
  likes: number;
  tag: string;
  stamp?: string;
  sketchImage?: string;
  sketchCaption?: string;
}

export interface DeveloperInfo {
  name: string;
  shortName: string;
  role: string;
  tagline: string;
  greeting?: string;
  bioIntro?: string;
  howICanHelp?: string;
  caseStudiesDisclaimer?: string;
  location: string;
  availability: string;
  email: string;
  github: string;
  linkedin: string;
  stats: {
    label: string;
    value: string;
  }[];
}

export const DEVELOPER_INFO: DeveloperInfo = {
  name: "Ammardito Shafaat",
  shortName: "Dito",
  role: "Software Engineer | AI & Systems",
  tagline: "I build practical software & AI solutions—with a dash of creative spark—so teams can work faster and carry less.",
  greeting: "Hello.",
  bioIntro: "I’m Dito, a software engineer from Jakarta. I build practical software solutions so teams can carry less. From enterprise AI knowledge assistants to zero-overhead business systems, I love turning messy real-world operational friction into smooth, reliable software.",
  howICanHelp: "I help teams identify technical bottlenecks and collaborate with stakeholders to develop effective solutions. From system architecture and AI workflows to full-stack engineering and testing, I streamline projects to ship reliable products to production efficiently across both web and backend systems.",
  caseStudiesDisclaimer: "Heads up! These case studies are a bit lengthy. I share a lot about my approach, architecture trade-offs, and technical problem-solving. Not a ton of fluff, but hopefully plenty of insights. Thanks for stopping by—I hope you find something useful.",
  location: "Jakarta, Indonesia (UTC+7)",
  availability: "Open to New Opportunities",
  email: "ammarditoshafaat2001@gmail.com",
  github: "https://github.com/webdev-testa",
  linkedin: "https://www.linkedin.com/in/ammardito-shafaat-65a255216/",
  stats: [
    { label: "Focus", value: "Practical Systems & AI" },
    { label: "Approach", value: "Pragmatic & Zero-Overhead" },
    { label: "Mentorship", value: "50+ Engineers Guided" },
    { label: "Mindset", value: "Done Is Better Than Perfect" },
  ],
};

export const INITIAL_STICKY_NOTES: StickyNote[] = [
  {
    id: "note-1",
    author: "Dito",
    role: "Creator",
    content: "I build practical software solutions so teams can carry less. Stick a note, leave a thought, or just say hi!",
    color: "lime",
    rotation: -2,
    likes: 58,
    tag: "Philosophy",
    stamp: "sparkle",
  },
  {
    id: "note-2",
    author: "Dr. Meoww Clinic",
    role: "Client Impact",
    content: "Payroll went from 2 days of paper math to 3 minutes with native GPS attendance. Zero monthly server fees!",
    color: "lilac",
    rotation: 2.5,
    likes: 39,
    tag: "Result",
    stamp: "code",
  },
  {
    id: "note-3",
    author: "byGewa Florist",
    role: "UMKM Partner",
    content: "No more copying WhatsApp chats at midnight. Orders flow straight into Google Sheets and printable slips!",
    color: "mint",
    rotation: -3,
    likes: 34,
    tag: "Automation",
    stamp: "coffee",
  },
  {
    id: "note-4",
    author: "Approach",
    role: "Engineering Mindset",
    content: "Strategy and details matter: start with baseline requirements, then polish the critical 30% that actually counts.",
    color: "coral",
    rotation: 1.5,
    likes: 29,
    tag: "Mindset",
    stamp: "gamepad",
  },
];

export const THINGS_I_SPEND_TIME_ON = [
  {
    slug: "stories",
    title: "Stories",
    subtitle: "Books, Film, Anime",
    description: "Living inside someone else's perspective for a few hours. Fastest way to shake off your own assumptions.",
    emoji: "📖",
    tag: "Perspective",
    accent: "lilac" as const,
    photoCount: 6,
    readTime: "4 min read",
  },
  {
    slug: "games",
    title: "Games",
    subtitle: "Souls-likes, Chess",
    description: "Less about plot, more about the grind. Effort cleanly equals outcome — no noise, no politics.",
    emoji: "♟️",
    tag: "Deliberate Practice",
    accent: "coral" as const,
    photoCount: 4,
    readTime: "3 min read",
  },
  {
    slug: "getting-better-at-things",
    title: "Getting Better at Things",
    subtitle: "Gym, Running, Badminton, Archery",
    description: "Everyone starts bad at everything. Watching yourself slowly improve never stops feeling good.",
    emoji: "🏹",
    tag: "Practice & Discipline",
    accent: "mint" as const,
    photoCount: 6,
    readTime: "5 min read",
  },
  {
    slug: "travel",
    title: "Travel",
    subtitle: "Safar & Broad Horizons",
    description: "Safar is encouraged in Islam, and I understand why. Unfamiliar places make you feel small in the best way.",
    emoji: "🌍",
    tag: "Exploration",
    accent: "cream" as const,
    photoCount: 8,
    readTime: "5 min read",
  },
];

export const CURRENTLY_DATA = [
  { label: "Reading", value: "Dubliners by James Joyce -> Collection of short stories which inspires me to write one", icon: "book" },
  { label: "Playing", value: "Pattern-heavy boss encounters (Souls-likes & Chess)", icon: "gamepad" },
  { label: "Training", value: "10km pacing, progressive push-pull volume", icon: "activity" },
  { label: "Building", value: "Offline-first sync patterns & lightweight tools", icon: "code" },
];

export const WHY_I_WORK_MANIFESTO = {
  quoteParagraph1:
    "I wanted a comfortable life, room to explore my own curiosity, and work I genuinely enjoy doing. I don't think wanting that makes work meaningless. I just want the things I build to be useful while I'm doing it.",
  quoteParagraph2:
    "I can't carry what other people carry. But I can build things that make the weight lighter.",
  quoteParagraph3:
    "That's what solving problems means to me: building things well enough that someone else's job gets easier.",
};

export const ABOUT_ESSAY = {
  title: "How I Got Here",
  eyebrow: "ABOUT — HOW I GOT HERE",
  leadQuote: "I can't carry what people carry by planning around their problems from a distance. But I can carry some of it by actually building the thing that lightens their load.",
  paragraphs: [
    "Growing up, the people held up as models of purpose were doctors, soldiers, teachers — anyone whose whole career exists for others at personal cost. That was never what I wanted. I wanted a comfortable life, room to experiment, curiosity without guilt.",
    "I studied Information Systems Technology — not computer science. It's a solid major if you want to end up in strategy, analysis, documentation. I didn't. Somewhere in my first internship, doing InfoSec work, I got handed a task with nothing to do with my actual job: build a chatbot using Google Sheets. It was small and a little absurd, and it stuck with me more than any planning deck I'd made up to that point.",
    "That was the moment I realized I care less about analyzing a problem and more about actually building the thing that fixes it. Planning tells you what should exist. Building is where you find out if it actually works — and where you learn the most, fast, by breaking things and fixing them yourself.",
    "From there I went looking for a way in — machine learning through Bangkit, full-stack courses, Google Cloud Arcade, anything that got me building instead of documenting. Eventually that pointed pretty clearly toward software engineering, and I stuck with it.",
    "I can't carry what people carry by planning around their problems from a distance. But I can carry some of it by actually building the thing that lightens their load.",
  ],
};

export const PROJECTS_DATA: Project[] = [
  {
    slug: "lg-sm-wiki",
    title: "LG SM Wiki",
    category: "AI & Enterprise",
    subtitle: "Balancing AI Innovation with Legacy Enterprise Systems",
    summary:
      "In a large enterprise, employees spent hours digging through scattered drives and pinging HR for routine policy answers. Built an end-to-end RAG assistant with PaddleOCR layout parsing, row-level privacy boundaries, and an automated knowledge gap ticket escalation loop.",
    year: "2025 — Present",
    role: "Software Engineer & AI Project Lead",
    clientOrContext: "LG Sinarmas",
    tags: ["RAG Pipeline", "PaddleOCR", "Row-Level Security", "Self-Healing Docs"],
    featured: true,
    colorBlock: "mint",
    bgHex: "#c8e6cd",
    framework: {
      weight: "Scattered docs & HR bottleneck. Employees spent hours digging through intranet drives, pinging HR leads repeatedly for routine policy and benefits questions.",
      constraint: "Messy real-world scanned documents, strict departmental privacy boundaries, and zero room for hallucinated corporate guidance.",
      build: "End-to-end RAG architecture with OCR ingestion, vector chunk boundary detection, RBAC row-level access filters, and self-healing ticket escalation for unanswered queries.",
      result: "Instant cited answers in under 2 seconds, eliminating routine HR support bottlenecks while missing knowledge gaps auto-generate documentation tasks.",
    },
    overview:
      "This case study showcases how I balanced modern AI innovation with practicality inside a legacy enterprise environment. At LG Sinarmas, employees routinely faced fragmented documentation across intranet drives, cloud folders, and legacy file shares. HR and administrative teams were overwhelmed with repetitive questions regarding company policies, health benefits, and operating procedures.",
    roleBeyondCode:
      "At LG Sinarmas, our lean team operated directly between business stakeholders, HR heads, and infrastructure leads. My role went beyond writing code to aligning privacy compliance, mapping actual employee query patterns, and designing an experience that required minimal training for non-technical staff.",
    problem:
      "Navigating Technical & Security Constraints: Standard LLM integrations fail in enterprise environments because raw policy documents are frequently stored in scanned PDF formats with complex tables. Furthermore, strict confidentiality requires that HR, finance, and engineering documentation remain strictly isolated per user role tier, with zero room for hallucinated corporate guidance.",
    solution:
      "To strike the right balance between constraints and usability, I architected an end-to-end RAG assistant combining PaddleOCR and layout parsers to ingest complex company docs accurately. Vector searches are wrapped with row-level security (RLS) enforcement in PostgreSQL (pgvector). When an answer is missing or low-confidence, the system automatically logs a self-healing knowledge gap ticket directly for the HR owner.",
    standoutMoments: [
      {
        title: "Progress Within Constraints",
        description: "Successfully delivered enterprise AI on existing PostgreSQL infrastructure with pgvector, avoiding costly external proprietary SaaS platforms.",
      },
      {
        title: "Strategy and Details Matter",
        description: "Document boundary chunking preserved table hierarchies and policy clause contexts, cutting hallucination rates from 18% to under 1.2%.",
      },
      {
        title: "For the Greater Good",
        description: "Built a self-healing feedback loop that transforms failed queries into actionable documentation tasks for HR, improving company knowledge over time.",
      },
    ],
    architecture: {
      title: "RAG & Governance Ingestion Pipeline",
      description: "Secure OCR chunking, tenant-aware vector indexing, and automated knowledge loop",
      flowSteps: [
        "Internal PDFs & policy docs ingested through multi-stage OCR & layout parser",
        "Document boundary chunker indexes semantic passages into pgvector with department RBAC metadata",
        "Employee submits query in natural language via web chat interface",
        "Retrieval engine executes hybrid semantic + keyword search strictly within caller's permission group",
        "Response generator provides verified answer with explicit doc citations",
        "Low-confidence or unindexed questions automatically escalate as pending doc tickets for HR",
      ],
    },
    keyDecisions: [
      {
        decision: "Document boundary chunking over naive character splits",
        rationale: "Preserved table hierarchies and policy clause contexts, cutting hallucination rates from 18% to under 1.2%.",
      },
      {
        decision: "Self-healing ticket escalation for unanswered queries",
        rationale: "Transformed failed searches from dead-ends into proactive prompts for HR to update missing policies.",
      },
    ],
    codeSnippet: {
      filename: "ragQueryRetriever.py",
      language: "python",
      code: `def retrieve_governed_chunks(query_vector: list[float], user_dept_roles: list[str], limit: int = 5):
    """
    Executes cosine vector similarity search strictly bounded by
    the employee's department and role clearance boundaries.
    """
    sql = """
        SELECT chunk_text, document_title, page_number,
               1 - (embedding <=> %s::vector) AS similarity
        FROM document_chunks
        WHERE department_tag = ANY(%s)
          AND clearance_level <= %s
        ORDER BY embedding <=> %s::vector
        LIMIT %s;
    """
    return db.execute(sql, (query_vector, user_dept_roles, user_clearance, query_vector, limit))`,
      caption: "Tenant-isolated vector similarity search enforcing department access boundaries at database layer.",
    },
    metrics: [
      { label: "Query Turnaround", value: "< 1.8s cited" },
      { label: "Access Isolation", value: "100% RBAC Enforced" },
      { label: "HR Repetitive Pings", value: "Down by 70%" },
    ],
  },
  {
    slug: "dr-meoww",
    title: "Dr. Meoww",
    category: "Full Stack & Mobile",
    subtitle: "Chaos Meets Simplicity: Clinic Operations with Zero Server Overhead",
    summary:
      "A busy veterinary clinic was drowning in paper logbooks, medical treatment histories, attendance sheets, and manual payroll math—with zero budget for an enterprise ERP. Built a unified system using React, Supabase Row-Level Security, and Capacitor native hardware GPS.",
    year: "2026",
    role: "Full Stack Lead (Freelance)",
    clientOrContext: "Freelance — Pet Clinic & Store",
    tags: ["React / TypeScript", "Supabase RLS", "Capacitor Geolocation", "Zero-Cost Infra"],
    featured: true,
    colorBlock: "lilac",
    bgHex: "#c5b0f4",
    framework: {
      weight: "Fragmented clinic operations drowning in paper logbooks, medical treatment histories, manual cashier receipts, and tedious end-of-month payroll reconciliation.",
      constraint: "Zero budget for expensive enterprise ERP subscriptions, and inaccurate browser-based GPS on mobile staff devices.",
      build: "React and TypeScript web interface packaged into a native Android app via Capacitor, integrated with native geolocation hardware and Supabase Row Level Security.",
      result: "Enterprise-grade operational control at near-zero recurring hosting costs; staff attendance and payroll prep compressed from 2 days down to 3 minutes.",
    },
    overview:
      "This case study details how I tackled operational chaos for a bustling pet clinic and veterinary store. Daily operations involved tracking clinical examinations, vaccination reminders, cashier checkout, employee attendance, and cash advance calculations—all handled on fragmented paper logs.",
    roleBeyondCode:
      "As the sole engineer on this freelance project, I handled everything from shadowing clinic receptionists during peak morning rushes to setting up Android tablets on the counter, defining permission tiers, and training veterinary staff on digital patient intake.",
    problem:
      "Inheriting a Manual Slog Under Fixed Budgets: Off-the-shelf medical ERP SaaS solutions demanded steep monthly subscriptions per seat that small veterinary clinics cannot sustain. Meanwhile, free spreadsheets caused constant data overwrites, lost animal histories, and inaccurate attendance records due to flaky web browser geolocation drift.",
    solution:
      "Applying Out-of-the-Box Efficiency: Built a unified cross-platform system using React and TypeScript, packaged for Android tablets via Capacitor to tap into native device GPS APIs for tamper-proof clock-ins. Implemented PostgreSQL Row Level Security (RLS) on Supabase so cashiers, veterinarians, and owners access only their authorized views, achieving enterprise reliability at $0 monthly infrastructure cost.",
    standoutMoments: [
      {
        title: "Sanity with Out-of-the-Box Efficiency",
        description: "Used Supabase RLS and Capacitor plugins to cover 80% of backend and mobile needs out of the box, reserving custom code for business-specific logic.",
      },
      {
        title: "The Small Details That Make All the Difference",
        description: "Switched from HTML5 browser geolocation to native Capacitor hardware GPS providers, eliminating a 500m drift issue that falsely rejected on-site staff.",
      },
      {
        title: "Measurable Operational Relief",
        description: "Staff attendance and monthly payroll reconciliation compressed from 2 days of manual paper math down to 3 minutes.",
      },
    ],
    architecture: {
      title: "Mobile Native Bridge & Supabase Architecture",
      description: "Hardware GPS verification linked to real-time relational persistence",
      flowSteps: [
        "Staff clocks in on Android tablet: Capacitor native bridge checks physical GPS coordinates against geofence",
        "Verified timestamp and staff ID committed to Supabase with Row Level Security",
        "Veterinarians update patient records and prescription logs with real-time sync",
        "POS module conducts checkout and triggers atomic inventory decrement",
        "Monthly payroll engine calculates gross wages, present days, and active kasbon deductions in seconds",
      ],
    },
    keyDecisions: [
      {
        decision: "Capacitor native geolocation bridge instead of HTML5 browser GPS",
        rationale: "HTML5 geolocation was frequently spoofed or drifted up to 500m indoors; Capacitor's native hardware provider achieved sub-15m accuracy.",
      },
      {
        decision: "Supabase RLS over custom Node middleware server",
        rationale: "Eliminated server hosting bills while enforcing strict authorization directly inside PostgreSQL tables.",
      },
    ],
    codeSnippet: {
      filename: "useNativeGeofence.ts",
      language: "typescript",
      code: `import { Geolocation } from '@capacitor/geolocation';

export async function verifyClinicClockIn(clinicCoords: { lat: number; lng: number; radiusMeters: number }) {
  const position = await Geolocation.getCurrentPosition({ enableHighAccuracy: true, timeout: 8000 });
  const distance = calculateHaversine(
    position.coords.latitude, position.coords.longitude,
    clinicCoords.lat, clinicCoords.lng
  );
  if (distance > clinicCoords.radiusMeters) {
    throw new Error(\`Clock-in rejected: \${Math.round(distance)}m outside clinic boundary\`);
  }
  return { verified: true, coords: position.coords, timestamp: Date.now() };
}`,
      caption: "Native Capacitor hardware GPS check preventing remote clock-in abuse.",
    },
    metrics: [
      { label: "Payroll Processing", value: "2 days → 3 mins" },
      { label: "Monthly Infra Bill", value: "$0 / month" },
      { label: "Active Pet Profiles", value: "500+ Patients" },
    ],
  },
  {
    slug: "bygewa",
    title: "byGewa",
    category: "Freelance / Web",
    subtitle: "Out-of-the-Box Efficiency: Zero-Cost Web Ordering Engine",
    summary:
      "A boutique florist lost hours every night manually transcribing WhatsApp orders, checking delivery radiuses, and writing invoices. Replaced it with a lightweight ordering engine running on Vercel, Google Maps API, and Google Apps Script directly into Google Sheets.",
    year: "2025",
    role: "Freelance Web Engineer",
    clientOrContext: "Freelance — Boutique Florist",
    tags: ["Vercel", "Google Apps Script", "Google Sheets DB", "$0/mo Overhead"],
    featured: true,
    colorBlock: "lime",
    bgHex: "#dceeb1",
    framework: {
      weight: "Manual WhatsApp order entry. The boutique florist owner spent late nights manually calculating delivery distances, replying to repetitive catalog questions, and copy-pasting customer addresses.",
      constraint: "Small-business margins couldn't absorb recurring monthly Shopify or delivery platform fees (up to 25% take rates).",
      build: "Vercel-hosted lightweight web ordering client + Google Maps Distance API + Google Apps Script serverless webhook pipeline into Google Sheets and Drive.",
      result: "$0/mo overhead, owner back to designing flower bouquets instead of manual data entry, 100% direct customer orders.",
    },
    overview:
      "This case study shares how I built an automated commerce engine for byGewa, an independent boutique florist in Malang. Steady customer growth through social media had turned manual WhatsApp order taking into an exhausting late-night bottleneck.",
    roleBeyondCode:
      "Collaborating with a solo non-technical business owner required stripping away developer jargon. Instead of forcing a complex admin dashboard, I designed the system around Google Sheets—a tool the owner already knew and loved on her phone.",
    problem:
      "Inheriting an Exhausting Manual Loop: Every custom bouquet required lengthy back-and-forth WhatsApp chats to determine flower types, ribbon colors, greeting card text, delivery date, and calculate delivery courier fees based on distance. Small-business margins couldn't absorb recurring monthly Shopify fees or delivery platform commissions.",
    solution:
      "Engineered an elegant, lightweight web ordering portal hosted on Vercel. Customers configure custom arrangements, write gift card messages, and pin their exact address via Google Maps. Orders are dispatched directly into the owner's Google Sheet via an Apps Script webhook, and automated invoices generate instantly in Google Drive.",
    standoutMoments: [
      {
        title: "Familiar Interfaces Over Complex Portals",
        description: "Using Google Sheets as the operational florist backend meant zero learning curve and zero admin maintenance.",
      },
      {
        title: "Zero-Dollar Architecture",
        description: "Combined static Vercel hosting with Google Apps Script to achieve 100% uptime with zero monthly subscription overhead.",
      },
      {
        title: "Immediate Life Impact",
        description: "Freed up the owner from 2+ hours of late-night manual data entry every evening, letting her focus entirely on floral craft.",
      },
    ],
    architecture: {
      title: "Zero-Cost Serverless Webhook Flow",
      description: "Client-side geospatial computation piping into Google Apps Script backend",
      flowSteps: [
        "Customer selects bouquet arrangement and custom add-ons on responsive web UI",
        "Google Maps Places API autocompletes address and computes exact delivery radius",
        "Validated order payload dispatches to Google Apps Script Webhook endpoint",
        "Apps Script appends order to Google Sheet and formats printable packing slip in Google Drive",
        "Customer receives instantaneous WhatsApp order summary and confirmation link",
      ],
    },
    keyDecisions: [
      {
        decision: "Google Sheets as kitchen/florist operational backend",
        rationale: "The owner already used Sheets on their phone; zero learning curve and zero recurring subscription fees.",
      },
      {
        decision: "Static Vercel deployment with zero runtime Node server",
        rationale: "Guaranteed 100% uptime and sub-second load times on spotty mobile connections with zero server maintenance.",
      },
    ],
    codeSnippet: {
      filename: "appsScriptOrderWebhook.js",
      language: "javascript",
      code: `function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Orders");
    const data = JSON.parse(e.postData.contents);
    const orderId = "BGW-" + Utilities.formatDate(new Date(), "GMT+7", "yyyyMMdd-HHmmss");
    
    sheet.appendRow([
      orderId, data.timestamp, data.customerName, data.whatsapp,
      data.itemsSummary, data.deliveryAddress, data.distanceKm,
      data.deliveryFee, data.totalPrice, "NEW"
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({ status: "SUCCESS", orderId: orderId }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: "ERROR", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}`,
      caption: "Serverless Google Apps Script webhook handling order ingestion at zero cost.",
    },
    metrics: [
      { label: "Monthly Cloud Bill", value: "$0.00 / month" },
      { label: "Platform Take Rate", value: "0% (Direct Sales)" },
      { label: "Order Admin Time", value: "Cut by 85%" },
    ],
  },
  {
    slug: "automated-fleet-metrics",
    title: "Automated Fleet Metric Extraction",
    category: "Systems & Data",
    subtitle: "The Small Details That Matter: Headless OCR Telemetry Pipeline",
    summary:
      "Turned a full day of manually checking 100+ isolated server consoles into a 2-hour unattended script using Python headless browser orchestration and PaddleOCR.",
    year: "2024",
    role: "Automation & Systems Engineer",
    clientOrContext: "Personal Project / Operations",
    tags: ["Python", "PaddleOCR", "Headless Automation", "Audit Reporting"],
    featured: true,
    colorBlock: "coral",
    bgHex: "#f3c9b6",
    framework: {
      weight: "Full day of manual server checks. System administrators spent an entire working day clicking through legacy dashboard pages across 100+ isolated server instances to log health telemetry.",
      constraint: "No centralized REST API or metrics export telemetry available on legacy host nodes.",
      build: "Python headless browser orchestration + automated screen capture + PaddleOCR optical character extraction + structured Excel audit report generation.",
      result: "Transformed an 8-hour manual slog into a 2-hour completely unattended automated script with 100% data fidelity.",
    },
    overview:
      "Managing disparate server clusters without centralized observability frequently forces system engineers into tedious manual inspection loops. In this environment, 100+ machines required weekly status verification.",
    roleBeyondCode:
      "Partnered directly with infrastructure technicians to observe their weekly audit routine. Rather than proposing an expensive multi-month monitoring overhaul, I built a lightweight automated bridge that fit right into their existing workflow.",
    problem:
      "Legacy Systems Without Modern APIs: The appliance firmware lacked SNMP or REST export endpoints, meaning operators had to log in through web consoles, navigate multiple tabs, read numbers visually, and type them into spreadsheets—eating an entire workday.",
    solution:
      "Wrote an unattended Python pipeline that launches headless browser sessions, navigates appliance consoles with automated auth token rotation, captures viewport screenshots of metric gauges, runs PaddleOCR with high-accuracy bounding box extraction, and generates verified Excel audit summaries.",
    standoutMoments: [
      {
        title: "Choosing the Right Tool for the Job",
        description: "PaddleOCR demonstrated superior accuracy over Tesseract on low-contrast dashboard fonts, eliminating character misrecognition on digits 0, 8, and B.",
      },
      {
        title: "Done is Better Than Perfect",
        description: "Instead of waiting for an impossible enterprise monitoring migration, this automated script solved the problem immediately within existing constraints.",
      },
      {
        title: "Unattended Reliability",
        description: "Reclaimed 6 hours of weekly engineering time with zero manual intervention required.",
      },
    ],
    architecture: {
      title: "Headless OCR Pipeline Architecture",
      description: "Session orchestration, image preprocessing, and structured tabular extraction",
      flowSteps: [
        "Headless browser worker loads server console endpoint with secure credential injection",
        "Captures high-resolution canvas snapshot of system resource gauges",
        "Image preprocessor crops region of interest and enhances contrast for OCR",
        "PaddleOCR engine detects numeric strings, memory utilization, and network throughput",
        "Validation parser checks sanity ranges before compiling findings into Excel audit sheet",
      ],
    },
    keyDecisions: [
      {
        decision: "PaddleOCR over Tesseract",
        rationale: "PaddleOCR demonstrated superior accuracy on low-contrast dashboard fonts, eliminating character misrecognition on digits 0, 8, and B.",
      },
      {
        decision: "Self-validating sanity ranges",
        rationale: "Flagged unexpected anomalies immediately rather than silently writing erroneous values.",
      },
    ],
    codeSnippet: {
      filename: "fleetMetricsExtractor.py",
      language: "python",
      code: `from paddleocr import PaddleOCR
import pandas as pd

ocr = PaddleOCR(use_angle_cls=True, lang='en', show_log=False)

def extract_metrics_from_capture(image_path: str) -> dict:
    result = ocr.ocr(image_path, cls=True)
    extracted_text = " ".join([line[1][0] for block in result for line in block])
    
    cpu_match = re.search(r"CPU\\s*:\\s*([0-9.]+)\\s*%", extracted_text)
    ram_match = re.search(r"RAM\\s*:\\s*([0-9.]+)\\s*GB", extracted_text)
    
    return {
        "cpu_usage_pct": float(cpu_match.group(1)) if cpu_match else None,
        "ram_usage_gb": float(ram_match.group(1)) if ram_match else None,
        "raw_ocr": extracted_text
    }`,
      caption: "PaddleOCR extraction worker parsing metrics from headless canvas captures.",
    },
    metrics: [
      { label: "Execution Time", value: "8 hrs → 2 hrs" },
      { label: "Human Intervention", value: "0 mins (Unattended)" },
      { label: "Server Instances", value: "100+ Nodes" },
    ],
  },
  {
    slug: "internal-microservices-migration",
    title: "Internal Microservices Migration",
    category: "Systems & Data",
    subtitle: "Migrating Live Enterprise Systems with Zero Downtime",
    summary:
      "Decoupled a monolithic assessment platform into independent microservices with Single Sign-On (SSO), inline-editable high-speed tables, and a shared internal npm design package.",
    year: "2025",
    role: "Frontend & Microservices Engineer",
    clientOrContext: "LG Sinarmas",
    tags: ["Microservices", "Single Sign-On (SSO)", "React / TS", "Shared npm Package", "Zero Downtime"],
    featured: true,
    colorBlock: "cream",
    bgHex: "#f4ecd6",
    framework: {
      weight: "Brittle monolith architecture and frequent cross-service breakage during high-volume internal assessment rounds.",
      constraint: "Migrate mission-critical live internal tools without downtime or transactional disruption.",
      build: "Led frontend migration onto decoupled SSO-based microservices, inline-editable high-speed data tables, and a shared internal npm design package.",
      result: "Decoupled engineering team dependencies, kept peak assessment query latency under 45ms, and established consistent frontend standards.",
    },
    overview:
      "This case study outlines how I led the frontend architecture migration for enterprise candidate assessment and employee evaluation portals at LG Sinarmas, moving from a tightly coupled monolith to decoupled microservices.",
    roleBeyondCode:
      "Coordinated cross-functional alignment between 4 engineering squads and HR evaluators to ensure design tokens, keyboard navigation standards, and deployment schedules aligned without conflict.",
    problem:
      "Navigating Cross-Team Friction: During campus recruitment drives, hundreds of employees and candidates took simultaneous assessment exams. Any monolithic redeployment risked interrupting active test sessions or corrupting evaluation scores.",
    solution:
      "Architected the frontend separation into independent modular applications communicating through enterprise Single Sign-On (SSO) and API gateways. Created an internal shared npm design system package to standardize data tables, form validations, and keyboard navigation across all microservices.",
    standoutMoments: [
      {
        title: "Stakeholder Management & Alignment",
        description: "Kept 4 engineering teams aligned by introducing a shared npm package with strict semantic versioning.",
      },
      {
        title: "The Small Details That Matter",
        description: "Optimistic UI updates on inline-editable tables provided desktop-spreadsheet responsiveness for evaluators grading hundreds of candidates.",
      },
      {
        title: "Zero Downtime",
        description: "Successfully migrated production assessment portals during high-volume testing rounds without a single interrupted session.",
      },
    ],
    architecture: {
      title: "Federated Micro-Frontend & SSO Flow",
      description: "Token delegation, shared UI package, and decoupled service endpoints",
      flowSteps: [
        "Employee authenticates via Central Enterprise SSO Gateway",
        "OAuth2 JWT token with departmental claims dispatched to client storage",
        "Decoupled React micro-application mounts using shared internal npm design components",
        "Inline-editable assessment table synchronizes changes via debounced REST endpoints",
        "Independent deployments succeed continuously with zero disruption to neighboring tools",
      ],
    },
    keyDecisions: [
      {
        decision: "Shared internal npm package for tables and forms",
        rationale: "Enforced UX consistency and eliminated code duplication across 4 separate engineering squads.",
      },
      {
        decision: "Optimistic UI updates on inline-editable tables",
        rationale: "Provided desktop-spreadsheet responsiveness for evaluators grading hundreds of candidates.",
      },
    ],
    codeSnippet: {
      filename: "OptimisticScoreCell.tsx",
      language: "typescript",
      code: `export function OptimisticScoreCell({ candidateId, initialScore, onSave }: Props) {
  const [score, setScore] = useState(initialScore);
  const [isSyncing, setIsSyncing] = useState(false);

  const handleChange = async (newVal: number) => {
    setScore(newVal); // Optimistic UI update immediately
    setIsSyncing(true);
    try {
      await onSave(candidateId, newVal);
    } catch {
      setScore(initialScore); // Revert on network failure
    } finally {
      setIsSyncing(false);
    }
  };

  return (
    <input
      type="number"
      value={score}
      onChange={(e) => handleChange(Number(e.target.value))}
      className={\`w-16 px-2 py-1 border rounded text-xs \${isSyncing ? "opacity-50" : ""}\`}
    />
  );
}`,
      caption: "Optimistic inline cell update with rollback safety for enterprise assessment grading.",
    },
    metrics: [
      { label: "Deployment Downtime", value: "0 seconds" },
      { label: "Table Edit Latency", value: "< 20ms optimistic" },
      { label: "Code Duplication", value: "Reduced by 65%" },
    ],
  },
];

export const ARCHIVED_PROJECTS: Project[] = [
  {
    slug: "calorielens-cv",
    title: "CalorieLens Food Vision Detector",
    category: "AI & Enterprise",
    subtitle: "Deep Learning Bounding Box Classification & Calorie Estimation",
    summary:
      "Trained a convolutional neural network to locate food items in smartphone photos and estimate nutritional values with real-time bounding boxes.",
    year: "2024",
    role: "ML Engineer & Capstone Lead",
    clientOrContext: "Bangkit Capstone / Research",
    tags: ["Python", "TensorFlow", "FastAPI", "OpenCV", "Pandas"],
    featured: false,
    colorBlock: "coral",
    bgHex: "#f3c9b6",
    framework: {
      weight: "Manual dietary logging fatigue. Users abandoned calorie tracking because entering ingredients manually was too tedious.",
      constraint: "Multiple overlapping dishes on a single plate and mobile latency limitations.",
      build: "Customized CNN with anchor-box regression and non-maximum suppression deployed on FastAPI.",
      result: "89.2% mAP detection accuracy with 115ms inference latency across 120+ food classes.",
    },
    overview: "Applied computer vision project to classify multiple dishes in a single smartphone photo and calculate portion-based calories.",
    problem: "Single-label classifiers fail when multiple food items exist on one plate.",
    solution: "Trained multi-class anchor box regression with non-maximum suppression deployed via ONNX runtime.",
    architecture: {
      title: "Vision Pipeline",
      description: "Image preprocessing to bounding box estimation",
      flowSteps: ["Upload photo", "Resize to 416x416", "TensorFlow prediction", "NMS filtering", "Nutrition computation"],
    },
    keyDecisions: [{ decision: "ONNX Runtime conversion", rationale: "Cut latency from 340ms to 115ms." }],
    metrics: [
      { label: "Model Accuracy", value: "89.2% mAP" },
      { label: "Inference Latency", value: "115ms" },
    ],
  },
  {
    slug: "supply-chain-radar",
    title: "Real-Time Supply Chain Telemetry Radar",
    category: "Systems & Data",
    subtitle: "Reactive WebSocket Stream & Low-Latency Event Dispatcher",
    summary:
      "High-frequency reactive monitoring system streaming warehouse telemetry and shortage alerts with sub-20ms propagation.",
    year: "2024",
    role: "Backend Architect",
    clientOrContext: "Independent System",
    tags: ["Java", "Spring Boot", "WebSockets", "Redis Pub/Sub", "React"],
    featured: false,
    colorBlock: "cream",
    bgHex: "#f4ecd6",
    framework: {
      weight: "Stale inventory records causing stockouts across distributed fulfillment centers.",
      constraint: "Legacy database polling overwhelmed database nodes under high write volumes.",
      build: "Spring Boot STOMP WebSockets with a Redis Pub/Sub cluster backplane.",
      result: "Propagated 5,000+ pulses per second with under 18ms latency to client dashboards.",
    },
    overview: "Distributed telemetry dispatcher handling high-frequency stock level changes across multi-regional centers.",
    problem: "Polling architectures delayed inventory alerts by several minutes.",
    solution: "STOMP WebSocket cluster with Redis Pub/Sub backplane.",
    architecture: {
      title: "Telemetry Stream",
      description: "Sensor delta to Redis backplane to WebSocket broadcast",
      flowSteps: ["Sensor pulse", "Spring Boot ingest", "Redis Pub/Sub", "WebSocket push to client"],
    },
    keyDecisions: [{ decision: "Redis backplane", rationale: "Horizontal scaling without sticky sessions." }],
    metrics: [
      { label: "Broadcast Latency", value: "< 18ms" },
      { label: "Telemetry Pulses", value: "5,000+ / sec" },
    ],
  },
  {
    slug: "zero-knowledge-vault",
    title: "Zero-Knowledge Browser Encrypted Vault",
    category: "Systems & Data",
    subtitle: "Client-Side AES-256 GCM File Encryption with Web Crypto API",
    summary:
      "A zero-trust cryptographic cloud storage system where encryption keys are derived in the browser via PBKDF2 and never touch the server memory.",
    year: "2024",
    role: "Security & Full Stack Engineer",
    clientOrContext: "Independent Research",
    tags: ["TypeScript", "Web Crypto API", "Node.js", "AES-256"],
    featured: false,
    colorBlock: "navy",
    bgHex: "#1f1d3d",
    framework: {
      weight: "Third-party cloud storage risks where server compromise exposes client unencrypted data.",
      constraint: "Perform heavy cryptographic math without slowing down browser responsiveness.",
      build: "Client-side Web Crypto API key derivation via PBKDF2 (250,000 iterations) + AES-256 GCM streaming chunks.",
      result: "Mathematical guarantee of zero server knowledge: server stores only raw opaque ciphertext.",
    },
    overview: "Cryptographic cloud storage guaranteeing that even root server admins cannot view plaintext files.",
    problem: "Server-side encryption leaves keys vulnerable to insider threats.",
    solution: "PBKDF2 key derivation and AES-256 GCM encryption inside client browser runtime.",
    architecture: {
      title: "Client Encryption",
      description: "Passphrase to PBKDF2 key to ciphertext chunk upload",
      flowSteps: ["Passphrase input", "PBKDF2 derivation", "AES-256 GCM chunking", "Ciphertext storage in GridFS"],
    },
    keyDecisions: [{ decision: "Native Web Crypto API", rationale: "Protected against JavaScript timing attacks." }],
    metrics: [
      { label: "Cipher Strength", value: "AES-256 GCM" },
      { label: "Server Key Exposure", value: "0% Zero-Knowledge" },
    ],
  },
];

export const NOTES_DATA: NoteArticle[] = [
  {
    slug: "why-i-work",
    title: "Why I Work: Building to Lighten the Load",
    subtitle: "A candid reflection on comfortable living, pragmatic engineering, and why building things that actually work beats strategic theory every time.",
    date: "November 2025",
    readTime: "5 min read",
    tags: ["Philosophy", "Pragmatism", "Career", "Mindset"],
    summary:
      "I wanted a comfortable life, room to explore curiosity, and work I genuinely enjoy. But solving problems means building well enough that someone else's daily weight gets lighter.",
    content: {
      intro:
        "Growing up, the people held up as models of purpose were always framed around radical self-sacrifice—doctors, humanitarians, soldiers, anyone whose entire career exists for others at heavy personal cost. That was never what I wanted. I wanted a comfortable life, room to experiment, and curiosity without guilt. For a long time, tech culture made that sound almost selfish. But over years of shipping software, I came to understand that wanting a good life and doing meaningful work aren't in conflict. You just have to be honest about what solving problems actually means.",
      sections: [
        {
          heading: "The Shift from Strategy to Hands-on Building",
          paragraphs: [
            "I studied Information Systems Technology rather than pure computer science. It's a discipline built for strategy, enterprise architecture decks, and high-level documentation. In theory, planning sounds prestigious: you sit back and tell everyone what the perfect system should look like.",
            "During my first internship doing InfoSec work, I was handed an odd side task: build a customer service chatbot using Google Sheets. It was small, unglamorous, and technically absurd. Yet it was the first time I watched someone's actual workday change because of something I built with my hands. That was the turning point. Planning tells you what should exist; building is where you find out if it actually works—and where you learn the fastest by breaking things and fixing them yourself.",
          ],
          callout: "Planning tells you what should exist. Building is where you find out if it actually works.",
        },
        {
          heading: "I Can't Carry What You Carry",
          paragraphs: [
            "When you collaborate with doctors running veterinary clinics, small business owners packing flowers at midnight, or enterprise teams drowning under repetitive HR policy queries, you realize you can't live their lives or shoulder their specific burdens.",
            "I can't carry what they carry. But I can build systems that make the weight lighter. When an automated script turns two days of painful paper payroll math into a three-minute review, or when an AI assistant answers a confusing benefits question in two seconds without pinging an exhausted lead, real stress leaves the room. That is where engineering derives its purpose—not from theoretical elegance, but from human relief.",
          ],
        },
        {
          heading: "The 70-20-10 Rule: Pragmatism Over Perfection",
          paragraphs: [
            "In software engineering, the enemy of real impact is often ideological perfectionism. Developers love over-engineering: deploying Kubernetes clusters for 50 daily users, debating microservices versus monoliths for months, or writing exhaustive 50-page architecture RFCs before validating a single user workflow.",
            "My approach is grounded in the 70-20-10 principle. First, get the baseline 70% working out-of-the-box using the simplest, lowest-friction tools available. Then, spend the next 20% rigorously polishing the critical details that users actually feel—speed, error recovery, responsive ergonomics, and offline resilience. The final 10% is left for innovation, experimentation, and edge cases. Done is better than perfect, because software that doesn't ship lightens nobody's load.",
          ],
          callout: "Done is better than perfect. Software that sits unreleased in a repository lightens nobody's load.",
        },
        {
          heading: "Useful Work Without Pretense",
          paragraphs: [
            "I don't believe in romanticizing engineering as heroic savior work. I like clean code, well-structured databases, and fast UI micro-interactions because I genuinely love the craft. And I value being compensated fairly so I have the space to travel, run, read, and live well.",
            "The synthesis is simple: enjoy the work, respect the craft, and ensure that every line of code you commit eliminates friction for someone else. Build practical software—with a dash of creative spark—so teams can work faster and carry less.",
          ],
        },
      ],
      conclusion:
        "That's what solving problems means to me: building things well enough that someone else's job gets easier. Everything else is just noise.",
    },
  },
  {
    slug: "the-zero-dollar-backend",
    title: "The $0 Backend: Why Postgres Is Sometimes the Wrong Tool",
    subtitle: "How small businesses and internal tools can run reliably on Google Apps Script, Sheets, and Drive without incurring cloud server bills or maintenance fatigue.",
    date: "August 2025",
    readTime: "5 min read",
    tags: ["Architecture", "Pragmatism", "Zero-Cost Infra", "Google Apps Script"],
    summary:
      "Before reaching for Postgres, Docker, and a cloud VPS for a small client, ask: can their actual business reality survive the operational tax of your tech stack?",
    content: {
      intro:
        "Every junior software engineer is trained to assemble a standard modern web stack: Next.js or React frontend, Node or Python API server, PostgreSQL database, Docker containerization, and AWS or Supabase cloud hosting. But for a local boutique florist or a micro-business owner, this textbook stack is often a disaster waiting to happen.",
      sections: [
        {
          heading: "The Operational Tax of Enterprise Tech",
          paragraphs: [
            "When you build a system for a solo founder or a 3-person business, their greatest constraint isn't throughput—it is operational stamina. A standard relational database hosted on a cloud tier costs money every single month regardless of whether the business has 10 orders or 1,000.",
            "Worse than the bill is the interface mismatch. If a boutique owner wants to quickly correct a customer's phone number or mark an order as picked up, giving them an admin table that requires database migrations or a custom CRUD interface is overkill. They already have Google Sheets on their smartphone. They know how to sort a column, color-code a row, and export to PDF with their eyes closed.",
          ],
          callout: "The best tool for a client is the tool they already know how to operate without calling you at 11 PM on a Sunday.",
        },
        {
          heading: "The Google Apps Script Architecture",
          paragraphs: [
            "For byGewa, a boutique florist, we deployed a static, blazing-fast web ordering frontend on Vercel (free tier). When the customer configures their floral bouquet and pins their delivery location using the Google Maps API, the payload posts to a simple Google Apps Script Webhook endpoint.",
            "Apps Script acts as a serverless execution environment. It appends the order to a designated Google Sheet, computes totals, and formats a printable packing slip directly in Google Drive. Total hosting cost: $0.00 per month.",
          ],
          code: {
            filename: "webhook.js",
            language: "javascript",
            code: `function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("LiveOrders");
  const order = JSON.parse(e.postData.contents);
  
  // Atomic row append with timestamp
  sheet.appendRow([
    new Date(),
    order.customerName,
    order.whatsapp,
    order.itemsSummary,
    order.deliveryAddress,
    order.deliveryFee,
    order.grandTotal
  ]);
  
  return ContentService
    .createTextOutput(JSON.stringify({ status: "OK" }))
    .setMimeType(ContentService.MimeType.JSON);
}`,
          },
        },
        {
          heading: "When Does This Break?",
          paragraphs: [
            "Of course, Google Sheets is not ACID-compliant at scale. Apps Script has a 6-minute execution timeout per trigger and daily quota limits. If your application handles hundreds of concurrent writes per second or requires complex multi-table relational joins, Sheets will fail you.",
            "But for hundreds of real-world small businesses, transactions occur at human speed: 5 to 50 orders a day. For this reality, the $0 backend is resilient, transparent, and completely free of server maintenance panic.",
          ],
        },
      ],
      conclusion:
        "Engineering maturity isn't about how complex a system you can build. It's about how much complexity you can eliminate while solving the actual problem.",
    },
  },
  {
    slug: "escaping-webview-limitations-with-capacitor",
    title: "Escaping Webview Limitations with Capacitor",
    subtitle: "Bridging hardware sensors, accurate geolocation, and offline file access when a pure PWA hits the mobile browser wall.",
    date: "October 2025",
    readTime: "6 min read",
    tags: ["Mobile", "React", "Capacitor", "Hardware APIs"],
    summary:
      "Browser geolocation on mobile web is notorious for throttling and dropping accuracy. Here is how wrapping React in Capacitor unlocked hardware-level precision for zero extra cost.",
    content: {
      intro:
        "Progressive Web Apps (PWAs) are great in theory: write once in React, pin to home screen, and run everywhere. But the moment you take a web app into real physical operations—like floor staff clocking in at a clinic—the browser sandbox starts showing its deep limitations.",
      sections: [
        {
          heading: "The HTML5 Geolocation Trap",
          paragraphs: [
            "When developing the clinic operations system for Dr. Meoww, staff attendance required verifying that the employee was physically inside the clinic building before clocking in. Using standard browser navigator.geolocation, we encountered severe real-world failures.",
            "Mobile Chrome and Safari aggressively throttle GPS polling in background tabs. Indoors, browser geolocation frequently relies on cached Wi-Fi beacons or cellular towers, resulting in accuracy radiuses that drift by 300 to 800 meters. Staff standing right at the reception desk were routinely rejected by our geofence.",
          ],
        },
        {
          heading: "Why Capacitor Beats React Native for Web Teams",
          paragraphs: [
            "We didn't want to maintain two completely separate codebases (a web admin portal in React and a separate mobile app in React Native or Flutter). Capacitor solved this cleanly by providing a lightweight native container around the exact same React/TypeScript build.",
            "Through Capacitor plugins, our existing web code gains direct access to Android and iOS native hardware APIs. Instead of an emulated browser GPS request, Capacitor invokes Android's FusedLocationProviderClient with native GPS satellites.",
          ],
          code: {
            filename: "geolocationCheck.ts",
            language: "typescript",
            code: `import { Geolocation } from '@capacitor/geolocation';

export async function checkClinicGeofence(clinicLat: number, clinicLng: number, maxRadiusM: number) {
  // Directly activates device native GPS hardware with high accuracy
  const coordinates = await Geolocation.getCurrentPosition({
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 0
  });

  const distance = haversineDistance(
    coordinates.coords.latitude,
    coordinates.coords.longitude,
    clinicLat,
    clinicLng
  );

  return {
    withinBounds: distance <= maxRadiusM,
    accuracyMeters: coordinates.coords.accuracy,
    distanceMeters: distance
  };
}`,
          },
          callout: "Capacitor bridges the physical hardware gap while preserving 100% web code reuse.",
        },
        {
          heading: "Native Hardware Benefits Beyond GPS",
          paragraphs: [
            "Once wrapped in Capacitor, we also gained native local storage that never clears under OS memory pressure, native camera barcode scanning for pet vaccination microchips, and persistent background push notifications.",
            "The lesson: you don't always need to rewrite your entire stack in Kotlin or Swift to achieve production-grade mobile reliability. A web core with native hardware escape hatches is often the sweet spot.",
          ],
        },
      ],
      conclusion:
        "Know where the browser sandbox ends and where native hardware begins. That boundary is where the most pragmatic software lives.",
    },
  },
  {
    slug: "enterprise-ai-chunking-beats-prompting",
    title: "The Illusion of Enterprise AI: Why Chunking Beats Prompting",
    subtitle: "Prompt engineering won't save a broken knowledge retrieval pipeline. The hard work of RAG is in OCR cleanup, boundary chunking, and RBAC.",
    date: "Upcoming Essay",
    readTime: "4 min read (Preview)",
    isDraft: true,
    tags: ["AI Systems", "RAG", "Enterprise", "Python"],
    summary:
      "Everyone obsesses over system prompts and temperature tuning. In reality, 90% of RAG accuracy happens before the model ever sees a single token.",
    content: {
      intro:
        "In the hype cycle of generative AI, 'prompt engineering' gets 90% of the public attention. But when you build an internal knowledge assistant like LG SM Wiki for an enterprise organization, prompt engineering is the easiest 5% of the problem. The real war is fought in document ingestion.",
      sections: [
        {
          heading: "The Document Boundary Problem",
          paragraphs: [
            "Corporate policy manuals are not clean plain-text markdown files. They are 80-page scanned PDFs with nested tables, multi-column footnotes, and clauses that cross page boundaries.",
            "If your vector ingestion pipeline naively chunks text into 500-character windows, a single company leave policy is split right in the middle of an eligibility table. The LLM will either hallucinate the remaining rows or confidently answer with the wrong department's rules.",
          ],
        },
        {
          heading: "Row-Level Security in Knowledge Retrieval",
          paragraphs: [
            "In an enterprise, search isn't just about finding the right text—it's about knowing who is asking. An intern asking about medical benefits should never retrieve compensation spreadsheets stored on the same vector database.",
            "The solution is filtering at the database layer using Row-Level Security (RLS) and metadata pre-filtering, never relying on post-generation prompt instructions like 'please do not disclose executive salaries'.",
          ],
        },
      ],
      conclusion:
        "Full essay coming soon. Covers layout-aware OCR parsing, semantic boundary detection, and self-healing knowledge loops.",
    },
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "lg-sinarmas",
    role: "Software Engineer & AI Project Lead",
    company: "LG Sinarmas",
    type: "Contract",
    period: "May 2025 — Present",
    location: "Jakarta, Indonesia · On-site",
    description: [
      "Leading an internal AI initiative and enterprise systems architecture: balanced modern LLMs with legacy document constraints, architecting an end-to-end RAG assistant with PaddleOCR layout parsing and row-level security.",
      "Collaborated with HR stakeholders, department heads, and engineering squads to streamline high-volume recruitment assessment portals into decoupled microservices, keeping peak query latency under 45ms with zero downtime.",
      "Developed a shared internal npm design package to unify high-speed data tables, form validation, and keyboard accessibility standards across 4 engineering squads.",
      "Engineered high-throughput Java (Spring Boot 3) and C#/.NET REST services, optimizing PostgreSQL database execution plans and connection pools.",
    ],
    technologies: ["Python", "RAG / LLMs", "Java", "Spring Boot", "C#", ".NET Core", "PostgreSQL", "Docker", "REST APIs"],
  },
  {
    id: "freelance-fullstack",
    role: "Full Stack Engineer & Consultant",
    company: "Freelance",
    type: "Freelance & Consulting",
    period: "Dec 2025 — Present",
    location: "Jakarta · Remote",
    description: [
      "Partnered directly with founders and business owners to solve operational bottlenecks through pragmatic, zero-overhead software.",
      "Built Dr. Meoww: an end-to-end clinic operations platform and Android tablet app using React, Capacitor native hardware GPS, and Supabase RLS—compressing attendance and payroll from 2 days of paper math down to 3 minutes.",
      "Engineered byGewa custom ordering engine: location-aware portal running on Vercel, Google Maps API, and Google Apps Script with $0/mo hosting overhead for a boutique florist.",
      "Focused on out-of-the-box efficiency: using off-the-shelf and low-code primitives for 70% of needs, reserving custom engineering for the critical 30% that delivers immediate business value.",
    ],
    technologies: ["React", "TypeScript", "Capacitor", "Android", "Supabase RLS", "Google Apps Script", "Vercel", "Google Maps API"],
  },
  {
    id: "bi-trainer",
    role: "Design Thinking Co-Trainer",
    company: "Central Bank of Indonesia (Bank Indonesia)",
    type: "Part-time",
    period: "Apr 2026 — Jul 2026",
    location: "Indonesia · Remote",
    description: [
      "Co-trained professionals on Design Thinking frameworks, human-centered problem solving, and iterative prototyping.",
      "Facilitated collaborative workshops guiding cross-functional teams from ambiguous business problems to practical digital prototypes.",
    ],
    technologies: ["Design Thinking", "User Research", "Systems Thinking", "Prototyping"],
  },
  {
    id: "gcp-arcade",
    role: "Facilitator Google Cloud Arcade 2025",
    company: "Google Cloud Arcade Facilitator Program",
    type: "Part-time",
    period: "Jul 2025 — Oct 2025",
    location: "Indonesia · Remote",
    description: [
      "Facilitated Google Cloud Platform hands-on learning labs for hundreds of developers and aspiring cloud engineers.",
      "Guided participants through cloud architecture, IAM security policies, containerized workloads on GKE, and serverless Cloud Run functions.",
    ],
    technologies: ["Google Cloud Platform", "GKE", "Cloud Run", "IAM", "Cloud Architecture"],
  },
  {
    id: "bangkit-mentor",
    role: "Mentor Bangkit Batch 1 2024",
    company: "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
    type: "Mentorship",
    period: "Feb 2024 — Jul 2024",
    location: "Remote",
    description: [
      "Mentored 50+ prospective AI engineers through Google's flagship machine learning curriculum across deep learning, computer vision, and NLP.",
      "Conducted weekly live technical consultation sessions, debugging complex model convergence issues and helping students bridge academic theory with production deployment.",
    ],
    technologies: ["Python", "TensorFlow", "FastAPI", "Computer Vision", "Scikit-Learn"],
  },
  {
    id: "mekari-infosec",
    role: "Information Security & Compliance",
    company: "Mekari",
    type: "Internship",
    period: "Jun 2023 — Jun 2024",
    location: "Jakarta, Indonesia · Hybrid",
    description: [
      "Where building clicked: built an automated security policy chatbot using Google Sheets, sparking the transition from analyzing problems to building software.",
      "Audited application logs, API endpoints, and network activity to proactively surface vulnerabilities and enforce ISO 27001 standard practices.",
    ],
    technologies: ["Python", "OpenAI API", "AWS Lambda", "ISO 27001", "Google Apps Script"],
  },
  {
    id: "bangkit-graduate",
    role: "Machine Learning Cohort Graduate",
    company: "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
    type: "Certification",
    period: "Feb 2023 — Jul 2023",
    location: "Remote",
    description: [
      "Completed 900+ hour curriculum covering statistical analysis, deep neural networks, and model deployment.",
      "Led computer vision capstone project recognized among top submissions.",
    ],
    technologies: ["Python", "TensorFlow", "SQL", "Computer Vision", "Pandas"],
  },
];

export const PURSUITS_DATA: Record<string, PursuitDetail> = {
  stories: {
    slug: "stories",
    title: "Stories",
    subtitle: "Books, Speculative Fiction, Film & Anime",
    tag: "Perspective",
    accent: "lilac",
    emoji: "📖",
    readTime: "4 min read",
    photoCount: 6,
    leadQuote: "Fiction is systems engineering for human empathy. It is the only technology that lets you inhabit someone else's operating system without overwriting your own.",
    overview: [
      "Most of our waking hours are spent locked inside our own skulls — our deadlines, our biases, our immediate sensory bubble. When you build software all day, your mind naturally tries to reduce the universe to deterministic workflows, logic gates, and edge cases.",
      "Stories are the antidote to that narrowness. Whether it's a 400-page speculative fiction novel, a quiet anime episode, or a film where the dialogue happens in the pauses between words, great storytelling forces you to step outside your ego and live another life for a few hours.",
      "I don't read or watch fiction to escape reality; I consume it to return to reality with more patience and sharper perception."
    ],
    subsections: [
      {
        heading: "The Empathy Machine: Why Fiction Matters for Engineers",
        paragraphs: [
          "Engineers often pride themselves on pure objectivity. But every piece of software we build will eventually be touched by a tired person at 8 PM on a Tuesday who is frustrated, anxious, or trying to solve an urgent problem for their family.",
          "Reading speculative fiction is essentially training in consequence modeling. Writers like Ted Chiang or Ursula K. Le Guin ask: 'What happens to human dignity and relationships if this one fundamental rule changes?' That is the exact same discipline required to design compassionate systems that don't break when human life gets messy."
        ],
        callout: "The best systems aren't the ones with the cleverest algorithms; they are the ones designed with deep empathy for the person using them on their worst day."
      },
      {
        heading: "The Discipline of Slow Narrative",
        paragraphs: [
          "In an algorithmic internet designed to provoke immediate dopamine spikes, a long-form story demands something radical: patience. You have to sit with unresolved tension, sit with flawed characters who make terrible choices, and wait for understanding to arrive gradually.",
          "That patience directly carries over to debugging and architecture. When a distributed system fails intermittently, quick hacks usually create worse debt. You need the narrative patience to trace causality step by step."
        ]
      }
    ],
    highlights: [
      { title: "Perspective Shifting", detail: "Inhabiting other minds to dissolve stubborn preconceptions." },
      { title: "Consequence Modeling", detail: "Speculative fiction as a mental sandbox for edge-case reasoning." },
      { title: "Slow Attention", detail: "Rebuilding sustained focus away from short-form dopamine loops." },
      { title: "Quiet Craft", detail: "Appreciating works where atmosphere and restraint speak loudest." }
    ],
    curatedItems: {
      sectionTitle: "Standout Works That Lingered",
      sectionDescription: "Stories that fundamentally rearranged how I view time, morality, and purpose.",
      items: [
        {
          title: "Exhalation",
          creatorOrContext: "Ted Chiang · Book / Short Stories",
          description: "Nine mind-bending philosophical explorations of free will, entropy, and memory. Crystalline prose that treats emotional dilemmas with mathematical precision.",
          tag: "Sci-Fi / Philosophy",
          quote: "The universe began as an enormous breath being held. Who knows why? But whatever the reason, I am glad it did."
        },
        {
          title: "Vinland Saga",
          creatorOrContext: "Makoto Yukimura · Manga / Anime",
          description: "A monumental masterclass on violence, grief, and the radical courage of peace. Thorfinn's transition from vengeance to redemption is unmatched.",
          tag: "Historical Fiction",
          quote: "You have no enemies. No one has any enemies. There is no one in this world that you should hurt."
        },
        {
          title: "Sousou no Frieren",
          creatorOrContext: "Kanehito Yamada & Tsukasa Abe · Anime",
          description: "A quiet, melancholic contemplation of time, elf longevity, and the subtle tragedy of realizing someone's value only after they are gone.",
          tag: "Fantasy / Drama",
          quote: "It was only a ten-year journey... but why am I crying?"
        },
        {
          title: "The Dispossessed",
          creatorOrContext: "Ursula K. Le Guin · Novel",
          description: "An unsparing contrast between an arid anarcho-syndicalist moon and an affluent capitalist planet. Explores what genuine freedom and community actually cost.",
          tag: "Speculative Social Fiction",
          quote: "You cannot buy the revolution. You cannot make the revolution. You can only be the revolution."
        },
        {
          title: "Monster",
          creatorOrContext: "Naoki Urasawa · Manga / Anime",
          description: "Dr. Kenzo Tenma's moral odyssey across post-Cold War Germany, grappling with the weight of saving a human life without knowing what that life would become.",
          tag: "Psychological Thriller",
          quote: "The only thing humans are equal in is death."
        }
      ]
    },
    gallery: [
      {
        id: "stories-1",
        url: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1200&q=80",
        caption: "A quiet stack of paperbacks on a Saturday morning. Physical print anchors the mind.",
        location: "Home Study, Jakarta",
        date: "January 2026",
        aspectRatio: "landscape",
        camera: "Fujifilm X100V · 23mm · f/2.8"
      },
      {
        id: "stories-2",
        url: "https://images.unsplash.com/photo-1507842229451-7f01be7f7a26?auto=format&fit=crop&w=1200&q=80",
        caption: "Browsing tall shelves in a quiet bookstore. Nothing beats the tactile hunt for an unknown author.",
        location: "Kuningan, Jakarta",
        date: "November 2025",
        aspectRatio: "portrait",
        camera: "Sony A7 IV · 35mm · f/1.8"
      },
      {
        id: "stories-3",
        url: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=80",
        caption: "Annotating speculative fiction notebooks over black coffee. Tracing narrative threads.",
        location: "Senopati, Jakarta",
        date: "September 2025",
        aspectRatio: "landscape",
        camera: "Ricoh GR IIIx · 40mm · f/2.8"
      },
      {
        id: "stories-4",
        url: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=1200&q=80",
        caption: "Worn pages and marginal notes. Books you return to feel different every three years.",
        location: "Personal Library",
        date: "July 2025",
        aspectRatio: "landscape",
        camera: "Fujifilm X-T5 · 33mm · f/1.4"
      },
      {
        id: "stories-5",
        url: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80",
        caption: "Late afternoon light cutting across the desk while finishing the final chapters of Exhalation.",
        location: "Jakarta",
        date: "May 2025",
        aspectRatio: "portrait",
        camera: "iPhone 15 Pro · 24mm"
      },
      {
        id: "stories-6",
        url: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=1200&q=80",
        caption: "Quiet cafe sanctuary when the city outside is humid and loud. Best hour of the weekend.",
        location: "Blok M, Jakarta",
        date: "March 2025",
        aspectRatio: "landscape",
        camera: "Fujifilm X100V · 23mm · f/2.0"
      }
    ]
  },
  "getting-better-at-things": {
    slug: "getting-better-at-things",
    title: "Getting Better at Things",
    subtitle: "Running, Gym Progression, Badminton & Archery",
    tag: "Practice & Discipline",
    accent: "mint",
    emoji: "🏹",
    readTime: "5 min read",
    photoCount: 6,
    leadQuote: "Everyone starts bad at everything. Watching yourself slowly, agonizingly improve through sheer consistency never stops feeling like magic.",
    overview: [
      "There is an uncomfortable truth about learning any physical discipline: the first hundred hours will make you feel clumsy, uncoordinated, and painfully slow. Your lungs burn at kilometer two, your bench press stalls at rookie numbers, your arrows scatter across the cardboard, and you miss routine smashes on the court.",
      "And yet, that friction is the entire point. In intellectual work or software engineering, feedback is often noisy — you can spend three weeks refactoring code and wonder if you made things genuinely better or just moved complexity around. Physical discipline gives you uncorrupted feedback.",
      "The barbell either moves or it stays glued to the floor. Your 10km split is either 52 minutes or it isn't. The arrow either hit the yellow inner ring or it bit into the wooden stand. No excuses, no committee meetings, no political spin."
    ],
    subsections: [
      {
        heading: "Running: Pacing, Breath & The 10km Progression",
        paragraphs: [
          "I used to despise running because I ran with my ego. I would bolt out of the gate at 4:30/km pace, gasp for oxygen at kilometer two, and walk home defeated. Discovering low-heart-rate Zone 2 pacing completely rebuilt my relationship with endurance.",
          "When you slow down to a conversational cadence where you can nasal-breathe, your aerobic system actually builds. Suddenly 5km feels like a warm-up, 8km becomes routine, and a Sunday 10km run along the Jakarta car-free day or morning streets becomes the most peaceful hour of the entire week."
        ],
        callout: "Running teaches you that panic does not make the hill shorter. Relax your shoulders, lower your chin, and let your cadence do the work."
      },
      {
        heading: "The Barbell: Progressive Overload as Life Philosophy",
        paragraphs: [
          "Strength training is compound interest in biological form. You don't build a strong back or clean posture through 'heroic workouts' once a month; you build it by showing up on Thursday at 7 PM when your brain is tired, adding 2.5kg to the bar, and completing your reps.",
          "It forces you to respect fundamentals: sleep, recovery, joint positioning, and mechanical advantage. There are zero shortcuts."
        ]
      },
      {
        heading: "Archery & Badminton: Stillness vs. Velocity",
        paragraphs: [
          "Archery is pure internal stillness. When you draw the recurve bowstring to your anchor point under your jaw, your heartbeat slows, your breath stops at the bottom of the exhale, and you let the arrow release itself without flinching. Any anxiety in your fingertips sends the shot wide.",
          "Badminton is the exact polar opposite: explosive reaction time, court geometry, and reading your opponent's shoulder angle in 200 milliseconds. Playing doubles requires instantaneous non-verbal communication with your partner. One sport teaches stillness; the other teaches lightning reflex."
        ]
      }
    ],
    highlights: [
      { title: "10km Target Pace", detail: "Consistently running sub-54min 10k sessions with low perceived exertion." },
      { title: "Weekly Volume", detail: "4x gym strength sessions (push/pull/legs) + 2x road running sessions." },
      { title: "Recurve Archery", detail: "Developing calm breath control and consistent 20m target clustering." },
      { title: "Badminton Doubles", detail: "Refining rotational court coverage and aggressive net-kill timing." }
    ],
    curatedItems: {
      sectionTitle: "Gear & Protocols That Actually Mattered",
      sectionDescription: "The few pieces of training equipment and habits that made a tangible difference.",
      items: [
        {
          title: "Garmin Forerunner & Heart Rate Pacing",
          creatorOrContext: "Running Tool",
          description: "Stops you from sabotaging your recovery runs. Keeping heart rate under 145 bpm during base mileage is the cheat code to running injury-free.",
          tag: "Bio-feedback"
        },
        {
          title: "Simple Daily Push-Pull-Legs Split",
          creatorOrContext: "Gym Protocol",
          description: "Forget fancy Instagram routines. Barbell squats, Romanian deadlifts, pull-ups, overhead press, and dips. Track weights in a basic spreadsheet.",
          tag: "Strength"
        },
        {
          title: "24-Pound Recurve Bow & Finger Tab",
          creatorOrContext: "Archery Gear",
          description: "Starting light is essential. Heavy poundage ruins your shoulder form before you ever learn how to use your back rhomboids.",
          tag: "Focus"
        },
        {
          title: "Electrolyte Hydration & Sleep Hygiene",
          creatorOrContext: "Recovery Routine",
          description: "You don't grow in the gym; you grow while sleeping. 7.5 hours of dark, cool sleep beats every supplement on the shelf.",
          tag: "Recovery"
        }
      ]
    },
    gallery: [
      {
        id: "getting-better-1",
        url: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1200&q=80",
        caption: "Early morning pavement before the city awakens. Cool air and rhythmic footstrikes.",
        location: "GBK Senayan, Jakarta",
        date: "February 2026",
        aspectRatio: "landscape",
        camera: "Sony A7 IV · 50mm · f/2.0"
      },
      {
        id: "getting-better-2",
        url: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
        caption: "Chalk, iron, and a disciplined notebook. Logging every set keeps honesty alive.",
        location: "Training Facility, Jakarta",
        date: "January 2026",
        aspectRatio: "portrait",
        camera: "Fujifilm X-T5 · 33mm · f/1.8"
      },
      {
        id: "getting-better-3",
        url: "https://images.unsplash.com/photo-1511067007770-33756711c304?auto=format&fit=crop&w=1200&q=80",
        caption: "Target face at 20 meters. Grouping arrows tightly is a test of emotional steadiness.",
        location: "Archery Range, South Jakarta",
        date: "October 2025",
        aspectRatio: "landscape",
        camera: "iPhone 15 Pro · 77mm"
      },
      {
        id: "getting-better-4",
        url: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=1200&q=80",
        caption: "Shuttlecocks and court grips after a 90-minute doubles drill. Quick feet, high tempo.",
        location: "Badminton Hall, Jakarta",
        date: "August 2025",
        aspectRatio: "landscape",
        camera: "Sony A7 IV · 35mm · f/2.8"
      },
      {
        id: "getting-better-5",
        url: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=1200&q=80",
        caption: "Reaching the 10km turnaround mark as the sun clears the tree line.",
        location: "Sudirman Boulevard, Jakarta",
        date: "June 2025",
        aspectRatio: "portrait",
        camera: "Ricoh GR IIIx · 40mm"
      },
      {
        id: "getting-better-6",
        url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80",
        caption: "Post-run stretch and cooldown hydration. The feeling of earned clarity for the rest of the day.",
        location: "Senayan Park, Jakarta",
        date: "April 2025",
        aspectRatio: "landscape",
        camera: "Fujifilm X100V · 23mm"
      }
    ]
  },
  travel: {
    slug: "travel",
    title: "Travel & Safar",
    subtitle: "Safar, Sacred Ground & Broad Horizons",
    tag: "Exploration",
    accent: "cream",
    emoji: "🌍",
    readTime: "5 min read",
    photoCount: 8,
    leadQuote: "Safar is encouraged in Islam, and I understand why. Unfamiliar places make you feel small in the best way.",
    overview: [
      "In Islamic tradition, travel (*Safar*) is not merely consumer tourism or checking monuments off an itinerary. The Arabic root of the word *Safar* shares its linguistic foundation with *safara* — meaning to unveil, reveal, or manifest.",
      "When you remain in the sheltered familiarity of your hometown, your routines reinforce your assumptions. But the moment you leave your comfort zone, your true nature is unveiled: how you respond when a flight is canceled, how you treat a stranger when you don't speak their language, and how humble you feel standing before vast landscapes.",
      "Jakarta is loud, hurried, and dense. Journeying across quiet stone alleys, mountain calderas, or the serene marble courtyards of the Haramain recalibrates your spirit. It shrinks your daily worries down to their proper, microscopic size."
    ],
    subsections: [
      {
        heading: "The Haramain: The Gravity of Sacred Silence",
        paragraphs: [
          "Walking into the Prophet's Mosque in Madinah is an experience unlike anywhere else on earth. There are hundreds of thousands of people gathered from every continent, language, and walk of life — and yet there is an overarching quiet dignity that settles over the courtyard like morning mist.",
          "In Mecca, watching the circular flow around the Kaaba at 2 AM strips away every distinction of social status, job title, and nationality. Everyone stands in the exact same simple white cloth. It is the most powerful reminder I know that we all arrive with nothing and leave with nothing."
        ],
        callout: "In the courtyard of Madinah, time doesn't feel like a resource you're spending. It feels like a space you are quietly inhabiting."
      },
      {
        heading: "Japan: The Dignity of Everyday Craft",
        paragraphs: [
          "What struck me most in Japan wasn't the futuristic skyline of Tokyo, but the quiet pride people take in seemingly routine work. The subway conductor pointing with crisp precision, the elderly ramen master tending a single broth for forty years, the carpenter smoothing cedar joints in a Kyoto temple.",
          "There is a cultural reverence for doing simple things with exquisite care (*kodawari*). As a software engineer, it challenged me: do I write code with that level of deliberate respect, or do I just rush to hit a deadline?"
        ]
      },
      {
        heading: "The Archipelago: Bromo Caldera & Ancient Stones",
        paragraphs: [
          "We often look abroad for awe while forgetting what exists in our own backyard. Standing on the rim of Mount Bromo at dawn, watching the sea of sand emerge from the darkness under a biting mountain wind, reminds you of the raw tectonic power shaping Indonesia.",
          "Wandering through Prambanan and Borobudur in Central Java tells a story of centuries of architectural ambition built entirely by hand. Unfamiliar places remind you that human history is vast, and our modern era is merely the latest chapter."
        ]
      }
    ],
    highlights: [
      { title: "Safar as Unveiling", detail: "Testing patience, humility, and presence outside familiar walls." },
      { title: "Spiritual Stillness", detail: "The serene white umbrellas and marble floors of the Haramain." },
      { title: "Everyday Craft", detail: "Observing devotion to small details in Tokyo and Kyoto alleys." },
      { title: "Archipelago Wonder", detail: "Volcanic winds in Bromo and ancient stone history in Central Java." }
    ],
    curatedItems: {
      sectionTitle: "Memorable Journeys & Coordinates",
      sectionDescription: "Places that left an indelible mark on my memory and perspective.",
      items: [
        {
          title: "Madinah Al-Munawwarah",
          creatorOrContext: "Saudi Arabia · Spiritual Reflection",
          description: "The serene shaded umbrellas, the green dome at twilight, and the peaceful evening prayers in the courtyard of the Prophet's Mosque.",
          tag: "Safar / Faith"
        },
        {
          title: "Mecca Al-Mukarramah",
          creatorOrContext: "Saudi Arabia · Umrah",
          description: "The continuous human tide circumambulating the Kaaba beneath towering desert skies. Absolute equality of all souls.",
          tag: "Spiritual Anchor"
        },
        {
          title: "Kyoto & Gion Historical Alleys",
          creatorOrContext: "Kansai, Japan · Urban Craft",
          description: "Wooden machiya townhouses, moss gardens, and the scent of incense in centuries-old cedar temples.",
          tag: "Tradition & Craft"
        },
        {
          title: "Mount Bromo Caldera",
          creatorOrContext: "East Java, Indonesia · Volcanic Landscape",
          description: "Sub-zero morning air, sulfur plumes against the sunrise, and the vast silence of the Tengger sand sea.",
          tag: "Raw Nature"
        }
      ]
    },
    gallery: [
      {
        id: "travel-1",
        url: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1200&q=80",
        caption: "The grand courtyard umbrellas opening at sunrise in Madinah. A profound, quiet grace.",
        location: "Madinah, Saudi Arabia",
        date: "December 2025",
        aspectRatio: "landscape",
        camera: "Sony A7 IV · 24-70mm · f/4.0"
      },
      {
        id: "travel-2",
        url: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&q=80",
        caption: "Narrow lantern-lit alleys in Kyoto after evening rain. Reflections on wet stone.",
        location: "Kyoto, Japan",
        date: "October 2025",
        aspectRatio: "portrait",
        camera: "Fujifilm X-T5 · 23mm · f/2.0"
      },
      {
        id: "travel-3",
        url: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1200&q=80",
        caption: "The volcanic crest of Mount Bromo catching the first golden rays above the sea of clouds.",
        location: "East Java, Indonesia",
        date: "July 2025",
        aspectRatio: "landscape",
        camera: "Fujifilm X100V · 23mm · f/5.6"
      },
      {
        id: "travel-4",
        url: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80",
        caption: "Tokyo subway platform at rush hour: thousands moving with immaculate order and silence.",
        location: "Shibuya, Tokyo",
        date: "October 2025",
        aspectRatio: "landscape",
        camera: "Ricoh GR IIIx · 40mm · f/2.8"
      },
      {
        id: "travel-5",
        url: "https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&w=1200&q=80",
        caption: "Intricate stone reliefs at sunset, weathered by a thousand years of monsoons.",
        location: "Yogyakarta, Indonesia",
        date: "May 2025",
        aspectRatio: "portrait",
        camera: "Sony A7 IV · 35mm · f/2.8"
      },
      {
        id: "travel-6",
        url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=80",
        caption: "Desert horizon stretching endlessly into the late afternoon haze.",
        location: "Hejaz Region, Saudi Arabia",
        date: "December 2025",
        aspectRatio: "landscape",
        camera: "iPhone 15 Pro · 24mm"
      },
      {
        id: "travel-7",
        url: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80",
        caption: "Traditional wooden gate leading into an ancient temple forest. Timeless cedar aroma.",
        location: "Nara, Japan",
        date: "October 2025",
        aspectRatio: "landscape",
        camera: "Fujifilm X-T5 · 33mm · f/2.0"
      },
      {
        id: "travel-8",
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
        caption: "Quiet southern coastline with breaking waves and empty sandbars.",
        location: "Gunungkidul, Yogyakarta",
        date: "May 2025",
        aspectRatio: "landscape",
        camera: "Fujifilm X100V · 23mm · f/4.0"
      }
    ],
    sketchIllustration: {
      url: "/images/sketches/street-sketch.png",
      title: "Pen & Ink Study: Everyday Alleys & Powerlines",
      subtitle: "Residential Tokyo & Kyoto Side Streets · Freehand Ink",
      caption: "What struck me most in Japan was the quiet pride in routine craft. Powerlines cutting through clean skies, quiet stone, and the silence of side streets.",
      location: "Kyoto / Tokyo Alleys",
    },
  },
  games: {
    slug: "games",
    title: "Games & Boss Encounters",
    subtitle: "Souls-likes, Chess & The Honest Grind",
    tag: "Deliberate Practice",
    accent: "coral",
    emoji: "♟️",
    readTime: "3 min read",
    photoCount: 4,
    leadQuote: "Souls-likes & Chess teach the same lesson: effort cleanly equals outcome. No noise, no politics, no shortcuts.",
    overview: [
      "In modern corporate work, causality is often obscured. You can build a technically brilliant feature that gets killed by executive reprioritization. You can pour days into a proposal that gets sidelined by organizational politics.",
      "Games provide an uncorrupted arena. When you sit down across a chessboard against a formidable opponent, or step through the fog gate to face Malenia or Sword Saint Isshin, the universe is stripped of unfair excuses.",
      "If you take damage, it's because you rolled too early or greedily swung during an open recovery frame. If your king gets pinned on move 22, it's because you neglected candidate moves on move 16. The fault is completely, beautifully yours."
    ],
    subsections: [
      {
        heading: "The Geometry of Boss Encounters",
        paragraphs: [
          "FromSoftware games are often labeled 'punishing,' but that misses their core design philosophy. They are not cruel; they are strictly fair. Every attack has a tell: a shoulder twitch, a raised blade, a windup timing.",
          "Beating a boss on your 40th attempt isn't about reflexes; it's about composure and pattern recognition. You stop fighting the boss and start dancing with the rhythm of the animation frames."
        ],
        callout: "Panic is the true boss. The moment you panic-roll, you die. The moment you breathe and wait for your window, the encounter slows down."
      },
      {
        heading: "Chess as Mental Stoicism",
        paragraphs: [
          "Chess is the ultimate test of intellectual honesty. You cannot bluff a passed pawn. You cannot talk your way out of a knight fork.",
          "It forces you to confront your own cognitive biases: hope chess (playing a move hoping your opponent won't see your flaw) will always be punished by a disciplined adversary. It teaches you to look for the strongest rebuttal before committing to an idea."
        ]
      }
    ],
    highlights: [
      { title: "Pure Causality", detail: "Clear rules where outcome directly reflects preparation and focus." },
      { title: "Pattern Mastery", detail: "Decoding enemy attack windows and positional chess imbalances." },
      { title: "Composure Under Pressure", detail: "Staying calm when health is low or the clock is under 30 seconds." },
      { title: "Zero Shortcuts", detail: "Gaining satisfaction from earned mastery through repeated failure." }
    ],
    curatedItems: {
      sectionTitle: "Legendary Encounters & Studies",
      sectionDescription: "Moments in gaming that demanded peak focus and tactical discipline.",
      items: [
        {
          title: "Sword Saint Isshin (Sekiro: Shadows Die Twice)",
          creatorOrContext: "FromSoftware · Boss Design Peak",
          description: "A three-phase clinic in rhythm and posture. 'Hesitation is defeat' is perhaps the best piece of life advice in gaming history.",
          tag: "Boss Encounter"
        },
        {
          title: "Malenia, Blade of Miquella (Elden Ring)",
          creatorOrContext: "FromSoftware · Precision Spatial Spacing",
          description: "Surviving Waterfowl Dance requires mastering exact positioning and camera discipline without panic.",
          tag: "Boss Encounter"
        },
        {
          title: "Capablanca's Endgame Simplicity",
          creatorOrContext: "Classical Chess Studies",
          description: "José Raúl Capablanca converted microscopic advantages with zero wasted moves. Clean, minimalist calculation.",
          tag: "Chess Strategy"
        },
        {
          title: "Hollow Knight: Path of Pain",
          creatorOrContext: "Team Cherry · Platforming Precision",
          description: "Down-slashing buzzsaws for three hours taught me more about breath control than any meditation app.",
          tag: "Platformer / Discipline"
        }
      ]
    },
    gallery: [
      {
        id: "games-1",
        url: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=1200&q=80",
        caption: "Wooden chess set on a rainy evening. Calculating lines three moves ahead.",
        location: "Home Desk, Jakarta",
        date: "February 2026",
        aspectRatio: "landscape",
        camera: "Fujifilm X-T5 · 33mm · f/2.0"
      },
      {
        id: "games-2",
        url: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80",
        caption: "Atmospheric controller and monitor setup before tackling a late-game boss gate.",
        location: "Gaming Corner, Jakarta",
        date: "January 2026",
        aspectRatio: "portrait",
        camera: "Sony A7 IV · 35mm · f/1.8"
      },
      {
        id: "games-3",
        url: "https://images.unsplash.com/photo-1586165368502-1bad197a6461?auto=format&fit=crop&w=1200&q=80",
        caption: "King, queen, and pawns in an endgame tension. Every move is irreversible.",
        location: "Study, Jakarta",
        date: "November 2025",
        aspectRatio: "landscape",
        camera: "Fujifilm X100V · 23mm · f/2.8"
      },
      {
        id: "games-4",
        url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
        caption: "Warm desk lamp and tactile mechanical keys. Where focus lives.",
        location: "Jakarta",
        date: "August 2025",
        aspectRatio: "landscape",
        camera: "Ricoh GR IIIx · 40mm"
      }
    ]
  }
};
