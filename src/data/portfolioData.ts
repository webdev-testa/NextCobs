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

export interface StickyNote {
  id: string;
  author: string;
  role: string;
  content: string;
  color: "lime" | "lilac" | "cream" | "mint" | "pink" | "coral";
  rotation: number;
  likes: number;
  tag: string;
}

export const DEVELOPER_INFO = {
  name: "Ammardito Shafaat",
  shortName: "Ammar",
  role: "Software Engineer",
  tagline: "I build things so other people can carry less.",
  location: "Jakarta, Indonesia (UTC+7)",
  availability: "Available for select projects & technical collaboration",
  email: "ammarditoshafaat2001@gmail.com",
  github: "https://github.com/webdev-testa",
  linkedin: "https://www.linkedin.com/in/ammardito-shafaat-65a255216/",
  stats: [
    { label: "Core Thread", value: "Relieve Operational Weight" },
    { label: "AI & Full Stack", value: "Production Systems" },
    { label: "Mentorship", value: "50+ Engineers Guided" },
    { label: "Philosophy", value: "Zero-Overhead Pragmatism" },
  ],
};

export const INITIAL_STICKY_NOTES: StickyNote[] = [
  {
    id: "note-1",
    author: "Ammar",
    role: "Core Thread",
    content: "I build things so other people can carry less.",
    color: "lime",
    rotation: -2,
    likes: 48,
    tag: "Philosophy",
  },
  {
    id: "note-2",
    author: "Dr. Meoww Clinic",
    role: "Client Impact",
    content: "Payroll went from 2 days of paper math to 3 minutes with native GPS attendance. Zero server fees!",
    color: "lilac",
    rotation: 2.5,
    likes: 39,
    tag: "Result",
  },
  {
    id: "note-3",
    author: "byGewa Florist",
    role: "UMKM Partner",
    content: "No more copying WhatsApp chats at midnight. Orders flow straight to Google Sheets and print slips!",
    color: "mint",
    rotation: -3,
    likes: 34,
    tag: "Automation",
  },
  {
    id: "note-4",
    author: "Boss Encounters",
    role: "Gaming & Focus",
    content: "Souls-likes & Chess teach the same lesson: effort cleanly equals outcome. No noise, no shortcuts.",
    color: "coral",
    rotation: 1.5,
    likes: 29,
    tag: "Mindset",
  },
];

export const THINGS_I_SPEND_TIME_ON = [
  {
    title: "Stories",
    subtitle: "Books, Film, Anime",
    description: "Living inside someone else's perspective for a few hours. Fastest way to shake off your own assumptions.",
    emoji: "📖",
    tag: "Perspective",
    accent: "lilac",
  },
  {
    title: "Games",
    subtitle: "Souls-likes, Chess",
    description: "Less about plot, more about the grind. Effort cleanly equals outcome — no noise, no politics.",
    emoji: "♟️",
    tag: "Deliberate Practice",
    accent: "coral",
  },
  {
    title: "Getting Better at Things",
    subtitle: "Gym, Running, Badminton, Archery",
    description: "Everyone starts bad at everything. Watching yourself slowly improve never stops feeling good.",
    emoji: "🏹",
    tag: "Practice & Discipline",
    accent: "mint",
  },
  {
    title: "Travel",
    subtitle: "Safar & Broad Horizons",
    description: "Safar is encouraged in Islam, and I understand why. Unfamiliar places make you feel small in the best way.",
    emoji: "🌍",
    tag: "Exploration",
    accent: "cream",
  },
];

export const CURRENTLY_DATA = [
  { label: "Reading", value: "Speculative fiction & systems design essays", icon: "book" },
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
    subtitle: "Enterprise AI Knowledge Assistant",
    summary:
      "Employees spent hours digging through scattered drives and pinging HR for routine policy answers. Built a RAG assistant that parses messy documents, respects department access boundaries, and auto-escalates missing knowledge into tickets.",
    year: "2025 — Present",
    role: "Software Engineer & AI Project Lead",
    clientOrContext: "LG Sinarmas",
    tags: ["RAG Pipeline", "Document OCR", "Row-Level Access", "Self-Healing Docs"],
    featured: true,
    colorBlock: "mint",
    bgHex: "#c8e6cd",
    framework: {
      weight: "HR bottleneck & scattered docs. Employees spent hours digging through scattered company drives and repeatedly pinging HR teams for basic policy questions.",
      constraint: "Messy real-world document formats, strict departmental privacy boundaries, and zero room for hallucinated corporate guidance.",
      build: "End-to-end RAG architecture with OCR ingestion, vector chunk boundary detection, RBAC row-level access filters, and self-healing ticket escalation for unanswered queries.",
      result: "Instant cited answers in under 2 seconds, eliminating routine HR support bottlenecks while missing knowledge gaps auto-generate documentation tasks.",
    },
    overview:
      "At LG Sinarmas, employees routinely faced fragmented documentation across various intranet drives, cloud folders, and legacy file shares. HR and administrative teams were overwhelmed with repetitive questions regarding company policies, benefits, and standard operating procedures.",
    problem:
      "Standard LLM integrations fail in enterprise environments because raw policy documents are frequently stored in scanned PDF formats with tables and complex formatting. Furthermore, strict confidentiality requires that HR, finance, and engineering documentation remain strictly isolated per user role tier.",
    solution:
      "Architected an end-to-end RAG assistant combining PaddleOCR and specialized layout parsers to ingest complex company docs accurately. Wrapped vector searches with row-level security (RLS) enforcement in PostgreSQL (pgvector). When an answer is missing or low-confidence, the system automatically logs a self-healing knowledge gap ticket directly for the HR owner.",
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
    subtitle: "Clinic Operations System",
    summary:
      "A busy clinic drowning in paper logs, patient records, attendance, payroll — no budget for an enterprise ERP. Built a unified system on Supabase RLS and native mobile geolocation via Capacitor.",
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
      "Dr. Meoww is a bustling veterinary clinic and pet care business. Daily operations involved tracking clinical examinations, vaccination reminders, cashier checkout, employee attendance, and cash advance (kasbon) calculations.",
    problem:
      "Off-the-shelf medical and retail SaaS solutions demanded costly monthly subscriptions per seat, while free spreadsheets caused constant data overwrites, lost animal histories, and inaccurate attendance records due to flaky web browser geolocation.",
    solution:
      "Built a unified cross-platform system using React and TypeScript, packaged for Android tablets via Capacitor to tap into native device GPS APIs for tamper-proof clock-ins. Implemented PostgreSQL Row Level Security (RLS) on Supabase so cashiers, veterinarians, and owners access only their authorized views.",
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
    subtitle: "Zero-Cost Custom Ordering Engine",
    summary:
      "A boutique florist lost hours manually transcribing WhatsApp orders. Replaced it with an ordering engine running entirely on Apps Script, Sheets, and Drive.",
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
      "byGewa is an independent boutique florist in Malang. The business experienced steady customer growth through social media, but order processing quickly became an operational bottleneck.",
    problem:
      "Every custom bouquet required lengthy back-and-forth WhatsApp chats to determine flower types, ribbon colors, greeting card text, delivery date, and calculate delivery courier fees based on distance.",
    solution:
      "Engineered an elegant, lightweight web ordering portal hosted on Vercel. Customers configure custom arrangements, write gift card messages, and pin their exact address via Google Maps. Orders are dispatched directly into the owner's Google Sheet via an Apps Script webhook, and automated invoices generate instantly in Google Drive.",
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
    subtitle: "Headless Automation & OCR Audit Pipeline",
    summary:
      "Turned a full day of manually checking 100+ servers into a two-hour unattended script using headless automation and PaddleOCR.",
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
    problem:
      "Legacy appliance firmware lacked SNMP or REST export endpoints, meaning operators had to log in through web consoles, navigate multiple tabs, read numbers visually, and type them into spreadsheets.",
    solution:
      "Wrote an unattended Python pipeline that launches headless browser sessions, navigates appliance consoles with automated auth token rotation, captures viewport screenshots of metric gauges, runs PaddleOCR with high-accuracy bounding box extraction, and generates verified Excel audit summaries.",
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
    subtitle: "Enterprise Frontend & SSO Migration",
    summary:
      "Led frontend migration onto SSO-based services, inline-editable data tables, and a shared internal npm package, decoupling dependencies with zero downtime.",
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
      "Internal enterprise candidate assessment and employee evaluation portals were previously bound inside a tightly coupled monolith. Changes deployed by one department frequently broke assessment testing sessions in another.",
    problem:
      "During campus recruitment drives, hundreds of employees and candidates took simultaneous assessment exams. Any monolithic redeployment risked interrupting active test sessions or corrupting evaluation scores.",
    solution:
      "Architected the frontend separation into independent modular applications communicating through enterprise Single Sign-On (SSO) and API gateways. Created an internal shared npm design system package to standardize data tables, form validations, and keyboard navigation across all microservices.",
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
      "Leading an internal AI project at LG Sinarmas: architected end-to-end RAG knowledge assistant parsing messy enterprise documents, enforcing department RBAC access boundaries, and auto-escalating unindexed queries into documentation tasks.",
      "Engineered high-throughput Java (Spring Boot 3) and C#/.NET REST microservices for synchronous enterprise assessment and recruitment testing portals.",
      "Optimized PostgreSQL database execution plans and HikariCP connection pools, keeping peak assessment query latency under 45ms with zero data loss.",
      "Led frontend migration onto decoupled SSO-based microservices and developed an internal shared npm design system package.",
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
      "Built Dr. Meoww: an end-to-end clinic operations system and Android tablet app using React, TypeScript, Capacitor native geolocation, and Supabase RLS—reducing payroll prep from 2 days to 3 minutes.",
      "Engineered byGewa custom ordering engine: location-aware portal running on Vercel, Google Maps API, and Google Apps Script with $0/mo overhead for a boutique florist.",
      "Specialized in zero-overhead architectures that eliminate recurring SaaS burdens for real-world businesses.",
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
      "Facilitated collaborative workshops guiding cross-functional teams from ambiguous business problems to functional digital prototypes.",
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
      "Conducted weekly live technical consultation sessions, debugging complex model convergence issues and deployment architectures.",
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
