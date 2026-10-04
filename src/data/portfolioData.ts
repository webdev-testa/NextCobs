 export interface CaseStudyFramework {
  weight: string;
  constraint: string;
  build: string;
  result: string;
}

export interface ProjectScreenshot {
  src: string;
  alt: string;
  caption?: string;
  title?: string;
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
  heroImage?: string;
  screenshots?: ProjectScreenshot[];
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
  education?: string;
  availability: string;
  email: string;
  github: string;
  linkedin: string;
  stats: {
    label: string;
    value: string;
  }[];
}

export const RESUME_URL = "/resume.pdf";

export const DEVELOPER_INFO: DeveloperInfo = {
  name: "Ammardito Shafaat",
  shortName: "Dito",
  role: "Software Engineer | AI & Systems",
  tagline: "I build software that makes everyday work a little easier, web apps, mobile tools, and AI when it actually helps.",
  greeting: "Hello.",
  bioIntro: "Hey, I'm Dito, a software engineer based in Jakarta and a System & Information Technology graduate from ITB. I like building things that are useful, straightforward, and pleasant to use. Most of my work starts with a very normal problem, someone is repeating the same task, fighting a clunky process, or wasting time on something software could handle better.",
  howICanHelp: "I work across the stack with React, Next.js, Capacitor, Python, Java, and whatever else fits the job. I enjoy taking an idea from 'this is annoying' to something people can actually use.",
  caseStudiesDisclaimer: "A few things I've built, why I built them, and what changed after they were used.",
  location: "Jakarta, Indonesia (UTC+7)",
  education: "System and Information Technology, Institut Teknologi Bandung (ITB)",
  availability: "Open to New Opportunities",
  email: "ammarditoshafaat2001@gmail.com",
  github: "https://github.com/webdev-testa",
  linkedin: "https://www.linkedin.com/in/ammardito-shafaat-65a255216/",
  stats: [
    { label: "Background", value: "ITB Graduate (STI)" },
    { label: "Focus", value: "Full Stack & AI" },
    { label: "Approach", value: "Keep it simple" },
    { label: "Community", value: "50+ Devs Mentored" },
  ],
};

export const INITIAL_STICKY_NOTES: StickyNote[] = [
  {
    id: "note-1",
    author: "Dito",
    role: "Creator",
    content: "Leave a note on my desk! Feedback, ideas, or just saying hi.",
    color: "lime",
    rotation: -2,
    likes: 58,
    tag: "Philosophy",
    stamp: "sparkle",
  },
  {
    id: "note-2",
    author: "Dr. Meoww Clinic",
    role: "Client Story",
    content: "Two days of payroll work became a few minutes, and the clinic didn't have to take on another monthly software bill.",
    color: "lilac",
    rotation: 2.5,
    likes: 39,
    tag: "Result",
    stamp: "code",
  },
  {
    id: "note-3",
    author: "byGewa Florist",
    role: "Local Business",
    content: "Orders no longer had to be copied from WhatsApp by hand. They go straight into the Google Sheet the owner already uses.",
    color: "mint",
    rotation: -3,
    likes: 34,
    tag: "Automation",
    stamp: "coffee",
  },
  {
    id: "note-4",
    author: "Approach",
    role: "Engineering Note",
    content: "I usually start with the simplest thing that solves the problem, then spend the extra effort where users will actually notice it.",
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
    description: "I like stories that let me borrow someone else's point of view for a while. They usually leave me thinking about my own life a little differently.",
    emoji: "📖",
    tag: "Perspective",
    accent: "lilac" as const,
    photoCount: 6,
    readTime: "4 min read",
  },
  {
    slug: "games",
    title: "Games",
    subtitle: "Souls-likes, Rogue-likes, RPG, Chess",
    description: "I like games where getting better is obvious: you learn the pattern, make fewer mistakes, and eventually beat the thing that kept beating you.",
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
    description: "Being bad at something, sticking with it, then realizing you're not bad anymore never gets old.",
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
    description: "Travel has a way of making your usual worries feel smaller. I think that's part of why safar has always meant more to me than just seeing new places.",
    emoji: "🌍",
    tag: "Exploration",
    accent: "cream" as const,
    photoCount: 8,
    readTime: "5 min read",
  },
];

export const CURRENTLY_DATA = [
  { label: "Reading", value: "Dubliners by James Joyce — slowly learning how much a short story can do with very little", icon: "book" },
  { label: "Playing", value: "Black Myth Wukong and Chess (Plateuing in 1000 Rating lol)", icon: "gamepad" },
  { label: "Training", value: "Training for a 10 km run", icon: "activity" },
  { label: "Building", value: "Hackathons (Just participated in IBM Bob 2.0, next is AI Builder Cup by Google)", icon: "code" },
];

export const WHY_I_WORK_MANIFESTO = {
  quoteParagraph1:
    "I wanted a comfortable life, room to explore my own curiosity, and work I genuinely enjoy doing. I don't think wanting that makes work meaningless. I just want the things I build to be useful while I'm doing it.",
  quoteParagraph2:
    "I can't carry someone else's workload for them. But I can sometimes build something that makes it lighter.",
  quoteParagraph3:
    "That's what solving problems means to me: build something useful enough that another person's day gets easier.",
};

export const ABOUT_ESSAY = {
  title: "How I Got Here",
  eyebrow: "ABOUT — HOW I GOT HERE",
  leadQuote: "I can't solve everything someone is dealing with. But sometimes I can build one small thing that makes their day easier.",
  paragraphs: [
    "Growing up, I thought meaningful work had to look obviously selfless — doctors, soldiers, teachers, people whose jobs were centered around helping others. I never really saw myself that way. I wanted a comfortable life, work I enjoyed, and enough room to stay curious.",
    "I studied System and Information Technology at Institut Teknologi Bandung (ITB), which gave me a lot of exposure to systems, business processes, and the planning side of technology. Then, during my first InfoSec internship, I got a side task that had almost nothing to do with my role: build a chatbot using Google Sheets. It was small and slightly ridiculous, but I enjoyed it more than the planning decks I had been making.",
    "That was when I realized I wanted to be closer to the actual building. I still value planning, but I like the part where an idea meets real users, real bugs, and real constraints. That's where I learn the fastest.",
    "After that I kept looking for excuses to build: machine learning through Bangkit, full-stack courses, Google Cloud Arcade, side projects, freelance work. Eventually the direction became pretty obvious, and software engineering stuck.",
    "I can't solve everything someone is dealing with. But sometimes I can build one small thing that makes their day easier.",
  ],
};

export const PROJECTS_DATA: Project[] = [
  {
    slug: "lg-sm-wiki",
    title: "LG SM Wiki",
    category: "AI & Enterprise",
    subtitle: "An internal AI search tool for company policies and everyday HR questions",
    summary:
      "Employees were digging through folders or asking HR the same policy questions over and over. I built an internal assistant that searches the company documents, answers with page citations, and only shows information each employee is allowed to see.",
    year: "2025 — Present",
    role: "Software Engineer & AI Project Lead",
    clientOrContext: "LG Sinarmas",
    tags: ["RAG Pipeline", "PaddleOCR", "PostgreSQL pgvector", "Python"],
    featured: true,
    colorBlock: "mint",
    bgHex: "#c8e6cd",
    heroImage: "/images/projects/lg-sm-wiki.svg",
    screenshots: [
      {
        src: "/images/projects/lg-sm-wiki.svg",
        alt: "LG SM Wiki Chat Interface",
        title: "Verified Policy Search",
        caption: "Ask a normal question and get an answer linked back to the exact company document.",
      },
    ],
    framework: {
      weight: "Employees had to dig through folders or message HR just to answer basic policy questions.",
      constraint: "The source documents were messy scanned PDFs, some information was sensitive, and wrong answers were not acceptable.",
      build: "PaddleOCR to read the documents, pgvector to find relevant passages, and citations so every answer can be checked.",
      result: "Answers in 1.4s with 100% cited sources. Cut routine HR policy questions by ~70%.",
    },
    overview:
      "At LG Sinarmas, even simple questions about benefits, leave, or equipment could mean digging through nested folders or asking HR directly. A lot of those questions were repeats, which meant HR kept spending time on answers that already existed somewhere in the handbook.",
    roleBeyondCode:
      "I worked directly with HR leads and team managers to figure out what people actually ask every day. We designed a clean search interface so non-technical staff could use it without needing a manual.",
    problem:
      "The hard part wasn't making a chatbot talk. It was getting reliable answers out of scanned PDFs and tables, while making sure sensitive documents never showed up for the wrong person.",
    solution:
      "I used PaddleOCR to read the documents, stored searchable passages in PostgreSQL with pgvector, and filtered retrieval by permission before anything reaches the model. Every answer points back to the page and paragraph it came from, so employees can verify it themselves.",
    standoutMoments: [
      {
        title: "Keeping it lean",
        description: "We already had PostgreSQL, so I used pgvector there instead of adding another paid search service.",
      },
      {
        title: "Clean chunking beats clever prompts",
        description: "Keeping table rows and sections together made a bigger difference than prompt tweaking. The model stopped mixing rules from unrelated parts of a document.",
      },
      {
        title: "Self-healing documentation",
        description: "When the system can't answer confidently, it records the question so HR can see which documentation is missing.",
      },
    ],
    architecture: {
      title: "How the Search Works",
      description: "From messy PDF to a permission-checked answer with a source link",
      flowSteps: [
        "Internal PDFs parsed with PaddleOCR to preserve table structures",
        "Passages indexed into pgvector with department permission tags",
        "Employee asks a question in plain English or Indonesian",
        "System retrieves only the sections the employee has clearance to see",
        "Generates a concise answer citing the exact document page and paragraph",
        "Missing topics automatically alert HR to write the missing documentation",
      ],
    },
    keyDecisions: [
      {
        decision: "Keep document sections together instead of cutting by character count",
        rationale: "Tables and bullet lists make more sense when they stay together, so I chunked by document structure instead of arbitrary character limits.",
      },
      {
        decision: "Treat unanswered questions as documentation feedback",
        rationale: "A failed search is still useful: it tells HR what employees are looking for but can't currently find.",
      },
    ],
    codeSnippet: {
      filename: "ragQueryRetriever.py",
      language: "python",
      code: `def retrieve_governed_chunks(query_vector: list[float], user_dept_roles: list[str], limit: int = 5):
    """
    Finds top matching policy chunks strictly within the
    employee's department clearance boundary.
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
      caption: "Search is filtered by employee permissions before results are returned.",
    },
    metrics: [
      { label: "Search Speed", value: "< 1.4s" },
      { label: "Answer Accuracy", value: "100% cited" },
      { label: "Routine HR DMs", value: "Down 70%" },
    ],
  },
  {
    slug: "dr-meoww",
    title: "Dr. Meoww",
    category: "Full Stack & Mobile",
    subtitle: "A clinic tablet app for attendance, patient records, inventory, and payroll",
    summary:
      "The clinic was running patient records, stock, attendance, and payroll through paper notebooks and manual calculations. I built a tablet app that puts those workflows in one place without adding a monthly server bill.",
    year: "2026",
    role: "Full Stack Lead (Freelance)",
    clientOrContext: "Freelance — Pet Clinic & Store",
    tags: ["React / TypeScript", "Capacitor", "Supabase", "Zero-Cost Infra"],
    featured: true,
    colorBlock: "lilac",
    bgHex: "#c5b0f4",
    heroImage: "/images/projects/dr-meoww.svg",
    screenshots: [
      {
        src: "/images/projects/dr-meoww.svg",
        alt: "Dr. Meoww Clinic Dashboard",
        title: "Clinic & Patient Queue",
        caption: "Patient queue, medicine stock, and staff attendance in one screen.",
      },
    ],
    framework: {
      weight: "Patient records and attendance lived on paper, medicine stock was hard to trace, and payroll took about two days every month.",
      constraint: "The clinic needed something cheap to run and usable even when the Wi-Fi was unreliable.",
      build: "A React + TypeScript app wrapped with Capacitor for the clinic tablet, with local caching and Supabase for the data.",
      result: "Payroll done in 3 minutes instead of 2 days. Complete inventory tracking at $0/month server cost.",
    },
    overview:
      "Dr. Meoww is a busy veterinary clinic handling dozens of animals daily. When I started, patient check-ins, prescriptions, inventory, and staff clock-ins were all handwritten in paper notebooks.",
    roleBeyondCode:
      "I spent morning shifts standing behind the front desk observing how receptionists and vets worked. We set up an Android tablet on the reception counter with big touch targets so anyone could use it with zero training.",
    problem:
      "Off-the-shelf clinic software was too expensive for what they needed. Spreadsheets were easy to overwrite, and browser GPS was inaccurate enough to reject staff who were actually standing inside the clinic.",
    solution:
      "I wrapped the React app with Capacitor so it could use the tablet's native GPS instead of relying on browser location. Supabase handles the data and permissions, and the current setup stays within the free tier.",
    standoutMoments: [
      {
        title: "Use the tablet's GPS instead of browser location",
        description: "Browser location could be hundreds of meters off indoors. Reading location through Capacitor made clock-ins accurate enough to use in practice.",
      },
      {
        title: "Zero recurring server costs",
        description: "The clinic's usage is small enough that the current setup fits comfortably inside the free tiers.",
      },
      {
        title: "Stock updates when medicine is used",
        description: "When medicine is recorded for a patient, the stock count updates automatically instead of relying on someone to fix it later.",
      },
    ],
    architecture: {
      title: "How a clinic visit moves through the app",
      description: "Clock-in, patient records, stock updates, and payroll in one flow",
      flowSteps: [
        "Staff clocks in on tablet: Capacitor checks physical coordinates against clinic geofence",
        "Timestamp and verified staff ID save directly to Supabase",
        "Vets record patient visits and prescribe medicines with live stock check",
        "Checkout decrements inventory in real time",
        "End of month: one click calculates wages, attendance days, and cash deductions in seconds",
      ],
    },
    keyDecisions: [
      {
        decision: "Native GPS instead of browser geolocation",
        rationale: "Browser geolocation drifted up to 500m indoors; native GPS brought accuracy down under 15m.",
      },
      {
        decision: "Use Supabase permissions instead of adding another backend service",
        rationale: "Supabase already covered the permissions the app needed, so there was no reason to add another server just for authorization.",
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
      caption: "Clock-in check using the tablet's native location.",
    },
    metrics: [
      { label: "Payroll Time", value: "2 days → 3 mins" },
      { label: "Server Cost", value: "$0 / month" },
      { label: "Active Patients", value: "500+ records" },
    ],
  },
  {
    slug: "bygewa",
    title: "byGewa",
    category: "Freelance / Web",
    subtitle: "A simple florist ordering site that feeds directly into Google Sheets",
    summary:
      "The owner was spending evenings answering the same WhatsApp questions, checking delivery distance, and copying order details by hand. I built a small ordering site that calculates delivery fees and sends each order straight into her Google Sheet.",
    year: "2025",
    role: "Freelance Web Engineer",
    clientOrContext: "Freelance — Boutique Florist",
    tags: ["Next.js", "Google Maps API", "Google Sheets DB", "$0/mo Overhead"],
    featured: true,
    colorBlock: "lime",
    bgHex: "#dceeb1",
    heroImage: "/images/projects/bygewa.svg",
    screenshots: [
      {
        src: "/images/projects/bygewa.svg",
        alt: "byGewa Ordering & Google Sheets Webhook",
        title: "Order Flow & Packing Slip",
        caption: "The customer places an order, delivery is calculated, and the order appears in the owner's Sheet ready to process.",
      },
    ],
    framework: {
      weight: "Too much of each evening was spent repeating prices, checking addresses, and copying order details from WhatsApp.",
      constraint: "The business needed a direct ordering flow without giving up a large cut of each sale or taking on another monthly subscription.",
      build: "A Next.js ordering page, Google Maps for delivery distance, and Google Apps Script to write orders into Sheets.",
      result: "$0/month hosting, with around two hours of repetitive evening admin removed from the owner's routine.",
    },
    overview:
      "byGewa is an independent florist in Malang. As more orders came through Instagram, the owner ended up doing a lot of repetitive admin: checking delivery distance, calculating fees, confirming details in chat, and typing the same information again for packing slips.",
    roleBeyondCode:
      "Instead of building a fancy admin panel the owner would have to learn, I wired the backend directly into Google Sheets—something she already used on her phone every day.",
    problem:
      "A single order could take a long WhatsApp conversation just to collect the same set of details. A larger e-commerce platform would have worked, but the recurring cost and extra complexity didn't make sense for the size of the business.",
    solution:
      "I built a lightweight web checkout on Vercel. Customers pick arrangements, write card messages, and autocomplete their address with Google Maps. Orders pipe instantly into a Google Sheet, and a formatted packing slip is ready to print in one tap.",
    standoutMoments: [
      {
        title: "Use tools people already know",
        description: "Google Sheets was the perfect database: the owner already had the app on her phone and needed zero training.",
      },
      {
        title: "Zero subscription fees",
        description: "Vercel and Google Apps Script keep the current setup at $0/month without giving the owner another system to maintain.",
      },
      {
        title: "Less admin at the end of the day",
        description: "The biggest win was simple: much less time spent copying customer details from one place to another every night.",
      },
    ],
    architecture: {
      title: "How the Order Moves",
      description: "From customer checkout to the Google Sheet the owner already uses",
      flowSteps: [
        "Customer selects bouquet and custom card message on mobile-friendly web page",
        "Google Maps API checks delivery address and computes exact driving distance",
        "Total price including delivery fee updates live",
        "Order payload sends to Google Apps Script webhook",
        "New row appears in Google Sheet and packing slip formats automatically",
        "Customer gets a clear confirmation message with order details",
      ],
    },
    keyDecisions: [
      {
        decision: "Google Sheets as database instead of PostgreSQL",
        rationale: "The owner can edit prices or mark orders fulfilled directly on her phone without a custom admin dashboard.",
      },
      {
        decision: "Client-side distance calculation",
        rationale: "Instant delivery fee quote without needing an intermediate backend server.",
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
      caption: "Google Apps Script receives the order and adds it to the owner's Sheet.",
    },
    metrics: [
      { label: "Monthly Bill", value: "$0.00" },
      { label: "Platform Fees", value: "0% (Direct)" },
      { label: "Admin Time", value: "Saved 2 hrs/day" },
    ],
  },
  {
    slug: "automated-fleet-metrics",
    title: "Fleet Metrics OCR",
    category: "Systems & Data",
    subtitle: "A Python tool that turns fuel receipts into usable spreadsheet data",
    summary:
      "Fuel receipts and odometer logs were being typed into spreadsheets by hand. I built a Python OCR tool that reads the receipts, pulls out the important numbers, and flags anything that looks suspicious before export.",
    year: "2024",
    role: "Automation & Systems Engineer",
    clientOrContext: "Personal Project / Operations",
    tags: ["Python", "PaddleOCR", "OpenCV", "Automation"],
    featured: true,
    colorBlock: "coral",
    bgHex: "#f3c9b6",
    heroImage: "/images/projects/fleet-metrics.svg",
    screenshots: [
      {
        src: "/images/projects/fleet-metrics.svg",
        alt: "Fleet Metrics OCR Scanner and Ledger",
        title: "OCR Scan & JSON Output",
        caption: "A receipt photo becomes structured data that can be checked and exported to the audit sheet.",
      },
    ],
    framework: {
      weight: "Drivers turned in stacks of crumpled paper fuel receipts that someone had to manually retype into Excel.",
      constraint: "Photos had uneven lighting, folds, and low-contrast thermal printer text.",
      build: "OpenCV cleans up the image, PaddleOCR reads the text, and the script turns the result into structured spreadsheet rows.",
      result: "A task that took about eight hours of typing became a roughly two-hour batch run with 94% clean output.",
    },
    overview:
      "Tracking vehicle fleet fuel expenses meant collecting physical paper stubs from dozens of drivers and manually keying numbers into spreadsheets at the end of each week.",
    roleBeyondCode:
      "I sat with the administrative staff to see where typos usually happened. The biggest errors came from faded thermal ink and similar-looking numbers (0 vs 8), so we tuned the image preprocessing specifically for thermal receipts.",
    problem:
      "The receipts were the annoying kind: faded thermal paper, glare, folds, and numbers that were easy to confuse. Basic OCR made too many mistakes to trust without extra cleanup.",
    solution:
      "I used OpenCV to improve contrast and straighten the photo before passing it to PaddleOCR. Then I added simple checks — for example, flagging a fuel amount that is clearly impossible for the vehicle — before anything is written to Excel.",
    standoutMoments: [
      {
        title: "PaddleOCR over Tesseract",
        description: "PaddleOCR was noticeably better on faded thermal text and reduced the number of digit mix-ups.",
      },
      {
        title: "Simple checks catch obviously wrong numbers",
        description: "I added basic rules such as flagging an impossible 500-liter fill, so a person only needs to look at the weird cases.",
      },
      {
        title: "Batch it and review the exceptions",
        description: "The script can process a folder in one go, then leave only the flagged rows for someone to review.",
      },
    ],
    architecture: {
      title: "How the Extraction Works",
      description: "Clean the photo, read the fields, then check the numbers",
      flowSteps: [
        "Receipt photos loaded in batch folder",
        "OpenCV adjusts contrast and corrects image rotation",
        "PaddleOCR detects text bounding boxes and extracts key fields",
        "Parser extracts transaction date, liters, total IDR, and odometer readings",
        "Sanity checks flag outliers for human review",
        "Clean, validated data exports directly into audit spreadsheet",
      ],
    },
    keyDecisions: [
      {
        decision: "PaddleOCR engine",
        rationale: "Outperformed generic OCR on thermal receipt paper with glare and faded ink.",
      },
      {
        decision: "Sanity validation rules",
        rationale: "Flagging impossible values immediately prevented corrupt data from entering accounting.",
      },
    ],
    codeSnippet: {
      filename: "fleetMetricsExtractor.py",
      language: "python",
      code: `from paddleocr import PaddleOCR
import re

ocr = PaddleOCR(use_angle_cls=True, lang='en', show_log=False)

def extract_metrics_from_capture(image_path: str) -> dict:
    result = ocr.ocr(image_path, cls=True)
    extracted_text = " ".join([line[1][0] for block in result for line in block])
    
    cost_match = re.search(r"TOTAL[\\s:]*Rp?\\s*([0-9.,]+)", extracted_text, re.IGNORECASE)
    liters_match = re.search(r"([0-9.,]+)\\s*(?:L|LTR|LITER)", extracted_text, re.IGNORECASE)
    
    return {
        "cost_idr": cost_match.group(1) if cost_match else None,
        "liters": liters_match.group(1) if liters_match else None,
        "raw_text": extracted_text
    }`,
      caption: "The OCR worker pulls totals and fuel volume from a receipt image.",
    },
    metrics: [
      { label: "Time Saved", value: "8 hrs → 2 hrs" },
      { label: "Accuracy", value: "94% clean" },
      { label: "Manual Effort", value: "Unattended" },
    ],
  },
  {
    slug: "internal-microservices-migration",
    title: "Internal Microservices Migration",
    category: "Systems & Data",
    subtitle: "Breaking up a live internal platform without interrupting users",
    summary:
      "Helped split a large internal assessment platform into smaller services while keeping the experience consistent through SSO, shared components, and fast editable tables.",
    year: "2025",
    role: "Frontend & Microservices Engineer",
    clientOrContext: "LG Sinarmas",
    tags: ["Microservices", "Single Sign-On (SSO)", "React / TS", "Shared npm Package", "Zero Downtime"],
    featured: true,
    colorBlock: "cream",
    bgHex: "#f4ecd6",
    framework: {
      weight: "The old platform was tightly coupled, so changing one area could create problems somewhere else — especially during busy assessment periods.",
      constraint: "We had to move parts of a live system without interrupting people who were actively taking or grading assessments.",
      build: "Moved the frontend into smaller SSO-connected applications and built shared table and form components so each team didn't have to reinvent the same UI.",
      result: "Teams could deploy more independently, peak assessment queries stayed under 45ms, and the shared package kept common UI behavior consistent.",
    },
    overview:
      "I worked on the frontend side of a migration for LG Sinarmas' candidate assessment and employee evaluation tools. The goal was to stop every change from being tied to one large application and let teams own smaller parts independently.",
    roleBeyondCode:
      "I worked with four engineering squads and the HR users of the system to keep shared components, keyboard behavior, and rollout timing consistent while the apps were being separated.",
    problem:
      "During campus recruitment, hundreds of people could be using the assessment system at once. A risky deployment wasn't just an inconvenience — it could interrupt an active test or affect saved scores.",
    solution:
      "We separated the frontend into smaller applications that share the same SSO and APIs. I also built an internal npm package for the pieces that should behave the same everywhere, especially data tables, forms, and keyboard interactions.",
    standoutMoments: [
      {
        title: "Keeping four teams from drifting apart",
        description: "The shared npm package gave all four teams one place for common UI behavior, with versioning so updates could roll out without surprise breakage.",
      },
      {
        title: "The Small Details That Matter",
        description: "Scores update on screen immediately while the save happens in the background, which makes the table feel much closer to a spreadsheet.",
      },
      {
        title: "Zero Downtime",
        description: "Successfully migrated production assessment portals during high-volume testing rounds without a single interrupted session.",
      },
    ],
    architecture: {
      title: "How the separated apps work together",
      description: "One login, shared components, and independently deployed apps",
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
        decision: "One shared package for common tables and forms",
        rationale: "Teams stopped maintaining slightly different versions of the same tables and form behavior.",
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
      caption: "The score updates immediately, then rolls back if the save fails.",
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
    subtitle: "Food detection and calorie estimation from a phone photo",
    summary:
      "A Bangkit capstone where we trained a computer-vision model to find multiple foods in a photo and use the detections to estimate nutrition.",
    year: "2024",
    role: "ML Engineer & Capstone Lead",
    clientOrContext: "Bangkit Capstone / Research",
    tags: ["Python", "TensorFlow", "FastAPI", "OpenCV", "Pandas"],
    featured: false,
    colorBlock: "coral",
    bgHex: "#f3c9b6",
    framework: {
      weight: "Logging every ingredient by hand made calorie tracking tedious enough that people simply stopped doing it.",
      constraint: "A single photo could contain several overlapping dishes, and inference still had to feel fast enough for a mobile app.",
      build: "A CNN-based detector with bounding boxes and non-maximum suppression, served through FastAPI.",
      result: "89.2% mAP detection accuracy with 115ms inference latency across 120+ food classes.",
    },
    overview: "A computer-vision project for detecting multiple dishes in one photo and using the result for calorie estimates.",
    problem: "A normal image classifier only tells you one label, which isn't enough when a plate contains several foods.",
    solution: "We trained a detector that predicts multiple boxes and classes, then used ONNX Runtime to make inference faster.",
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
    subtitle: "Live warehouse updates over WebSockets",
    summary:
      "A backend experiment for pushing warehouse stock changes to dashboards in real time instead of making the browser poll the database.",
    year: "2024",
    role: "Backend Architect",
    clientOrContext: "Independent System",
    tags: ["Java", "Spring Boot", "WebSockets", "Redis Pub/Sub", "React"],
    featured: false,
    colorBlock: "cream",
    bgHex: "#f4ecd6",
    framework: {
      weight: "Inventory dashboards could be minutes behind the actual stock level, which makes shortage alerts much less useful.",
      constraint: "Frequent polling created a lot of unnecessary database traffic as update volume increased.",
      build: "Spring Boot WebSockets for client updates, with Redis Pub/Sub to share events between instances.",
      result: "Propagated 5,000+ pulses per second with under 18ms latency to client dashboards.",
    },
    overview: "A small distributed system for broadcasting frequent stock changes to connected dashboards.",
    problem: "Polling meant the dashboard could stay stale until the next refresh cycle.",
    solution: "WebSocket connections backed by Redis Pub/Sub so multiple server instances can broadcast the same updates.",
    architecture: {
      title: "Telemetry Stream",
      description: "A stock change comes in, Redis shares it, connected dashboards update",
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
    subtitle: "Browser-side file encryption where the server never sees the key",
    summary:
      "A storage experiment where files are encrypted in the browser before upload, so the server only ever receives encrypted bytes.",
    year: "2024",
    role: "Security & Full Stack Engineer",
    clientOrContext: "Independent Research",
    tags: ["TypeScript", "Web Crypto API", "Node.js", "AES-256"],
    featured: false,
    colorBlock: "navy",
    bgHex: "#1f1d3d",
    framework: {
      weight: "If a storage server holds both the files and the keys, a server compromise can expose everything.",
      constraint: "Encryption had to happen in the browser without making the UI feel frozen.",
      build: "The browser derives a key with PBKDF2 and encrypts file chunks with AES-256-GCM before upload.",
      result: "The server stores ciphertext only; the encryption key never needs to be sent to it.",
    },
    overview: "A proof-of-concept cloud vault where even someone with server access only sees encrypted files.",
    problem: "Server-side encryption still puts the key and the encrypted data in the same trust boundary.",
    solution: "Key derivation and AES-256-GCM encryption happen in the browser before upload.",
    architecture: {
      title: "Client Encryption",
      description: "Passphrase becomes a local key, files are encrypted, then ciphertext is uploaded",
      flowSteps: ["Passphrase input", "PBKDF2 derivation", "AES-256 GCM chunking", "Ciphertext storage in GridFS"],
    },
    keyDecisions: [{ decision: "Native Web Crypto API", rationale: "Used the browser's built-in crypto implementation instead of hand-rolling cryptography in JavaScript." }],
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
    subtitle: "Why I like building things, what I want from work, and why useful software matters more to me than sounding important.",
    date: "November 2025",
    readTime: "5 min read",
    tags: ["Philosophy", "Pragmatism", "Career", "Mindset"],
    summary:
      "I wanted a comfortable life, room to explore curiosity, and work I genuinely enjoy. But solving problems means building well enough that someone else's daily weight gets lighter.",
    content: {
      intro:
        "Growing up, meaningful work was usually described as something self-sacrificing: doctors, humanitarians, soldiers, people who gave a huge part of themselves to others. I respected that, but it wasn't the life I imagined for myself. I wanted work I enjoyed, a comfortable life, and enough room to stay curious. Over time I stopped seeing those things as being in conflict with doing useful work.",
      sections: [
        {
          heading: "Why I moved from planning to building",
          paragraphs: [
            "I studied System and Information Technology rather than pure computer science. A lot of the degree focused on understanding organizations, designing systems, and planning how technology should fit together. I liked that, but I slowly realized I didn't want to stay only on the planning side.",
            "During my first InfoSec internship, I got an odd side task: build a small chatbot using Google Sheets. It wasn't glamorous, but it was the first time I could point to something I made and see it change how someone worked. That feeling stuck. Planning tells you what might work; building forces you to find out.",
          ],
          callout: "Planning tells you what should exist. Building is where you find out if it actually works.",
        },
        {
          heading: "I Can't Carry What You Carry",
          paragraphs: [
            "Working with a clinic, a small florist, or an HR team taught me the same thing: I don't fully understand someone else's workload until I sit with the actual repetitive parts of it.",
            "I can't do the whole job for them, but I can sometimes remove one annoying piece of it. Two days of payroll becomes a short review. A policy question gets answered without another HR message. Those are small wins, but they're the kind of impact I actually care about.",
          ],
        },
        {
          heading: "Start simple, then spend effort where it matters",
          paragraphs: [
            "It's easy to make a small product much more complicated than it needs to be. I've done it too: reaching for the 'proper' architecture before I've even proved that the workflow is useful.",
            "These days I try to get the basic flow working with the simplest tools I can. Then I spend most of the extra effort on the things people actually feel: speed, clear errors, sensible defaults, and whether the app still behaves when the network is bad. The fancy 10% can come later if it is still worth doing.",
          ],
          callout: "Done is better than perfect. Software that sits unreleased in a repository lightens nobody's load.",
        },
        {
          heading: "Useful work, without making it grander than it is",
          paragraphs: [
            "I don't think software engineering needs to be framed as heroic work. I like clean code, good interfaces, and solving technical problems because I genuinely enjoy the craft. I also want a career that lets me live well, travel, run, read, and have a life outside a laptop.",
            "For me, the balance is pretty simple: enjoy the craft, build things carefully, and try to leave someone's workflow a little better than I found it.",
          ],
        },
      ],
      conclusion:
        "That's what solving problems means to me: build something useful enough that another person's day gets easier. Everything else is just noise.",
    },
  },
  {
    slug: "the-zero-dollar-backend",
    title: "The $0 Backend: Why Postgres Is Sometimes the Wrong Tool",
    subtitle: "Why Google Sheets and Apps Script can be a perfectly reasonable backend for the right small business.",
    date: "August 2025",
    readTime: "5 min read",
    tags: ["Architecture", "Pragmatism", "Zero-Cost Infra", "Google Apps Script"],
    summary:
      "Before I reach for Postgres, Docker, and a VPS, I try to ask a simpler question: does this client actually need any of that?",
    content: {
      intro:
        "When you're learning web development, the default stack starts to feel automatic: React or Next.js, an API, Postgres, Docker, and some cloud host. That's a good setup for plenty of products. But for a tiny local business, it can also create more maintenance than value.",
      sections: [
        {
          heading: "The cost isn't only the server bill",
          paragraphs: [
            "For a solo owner or a three-person business, the biggest constraint is rarely database throughput. It's time, attention, and how many tools they are willing to maintain. Even a small monthly cloud bill matters when the system only handles a handful of orders each day.",
            "The bigger issue is often the interface. If the owner only needs to correct a phone number or mark an order as done, a custom admin dashboard may be solving a problem they don't have. She already knows Google Sheets and uses it every day on her phone.",
          ],
          callout: "The best tool for a client is the tool they already know how to operate without calling you at 11 PM on a Sunday.",
        },
        {
          heading: "What I used instead",
          paragraphs: [
            "For byGewa, the customer-facing ordering page runs on Vercel. After the customer chooses a bouquet and delivery address, the order is sent to a small Google Apps Script endpoint.",
            "Apps Script adds the order to the owner's Google Sheet, calculates the totals, and prepares the data she needs for a packing slip. The current hosting cost is $0 per month.",
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
            "This obviously has limits. Google Sheets is not a replacement for a real database when you have heavy concurrency, complicated relationships, or lots of writes happening at once. Apps Script also has quotas and execution limits.",
            "But this florist is not processing thousands of orders per second. At a few dozen human-paced orders a day, Sheets is simple, visible, cheap, and easy for the owner to understand.",
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
    subtitle: "What I did when browser GPS was too unreliable for a real clinic clock-in flow.",
    date: "October 2025",
    readTime: "6 min read",
    tags: ["Mobile", "React", "Capacitor", "Hardware APIs"],
    summary:
      "The clinic's web version kept getting staff location wrong. Wrapping the same React app with Capacitor gave us access to the phone's native location APIs without rewriting the product.",
    content: {
      intro:
        "A PWA is great until the app depends on the physical device. For Dr. Meoww, staff clock-in had to verify that someone was actually inside the clinic, and that is where browser geolocation started to become a real problem.",
      sections: [
        {
          heading: "When browser location isn't good enough",
          paragraphs: [
            "When developing the clinic operations system for Dr. Meoww, staff attendance required verifying that the employee was physically inside the clinic building before clocking in. Using standard browser navigator.geolocation, we encountered severe real-world failures.",
            "Mobile Chrome and Safari aggressively throttle GPS polling in background tabs. Indoors, browser geolocation frequently relies on cached Wi-Fi beacons or cellular towers, resulting in accuracy radiuses that drift by 300 to 800 meters. Staff standing right at the reception desk were routinely rejected by our geofence.",
          ],
        },
        {
          heading: "Why I chose Capacitor instead of rebuilding the app",
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
          callout: "Capacitor let me keep the React app while reaching the device features the browser couldn't handle reliably.",
        },
        {
          heading: "What else the native wrapper unlocked",
          paragraphs: [
            "Once wrapped in Capacitor, we also gained native local storage that never clears under OS memory pressure, native camera barcode scanning for pet vaccination microchips, and persistent background push notifications.",
            "The lesson: you don't always need to rewrite your entire stack in Kotlin or Swift to achieve production-grade mobile reliability. A web core with native hardware escape hatches is often the sweet spot.",
          ],
        },
      ],
      conclusion:
        "Sometimes the web is enough. Sometimes one device feature is the reason to cross into native. The useful part is knowing where that line is.",
    },
  },
  {
    slug: "enterprise-ai-chunking-beats-prompting",
    title: "Why Better Documents Beat Better Prompts in RAG",
    subtitle: "A great prompt can't rescue bad source text. Most of the work in a useful internal AI search tool happens before the model gets the question.",
    date: "Upcoming Essay",
    readTime: "4 min read (Preview)",
    isDraft: true,
    tags: ["AI Systems", "RAG", "Enterprise", "Python"],
    summary:
      "Prompt tuning gets a lot of attention, but a RAG system is only as good as the document text and passages you give it.",
    content: {
      intro:
        "When I started building an internal knowledge assistant, I expected the prompt to be the interesting part. It wasn't. The harder problem was turning ugly real-world PDFs into clean pieces of information that could be searched reliably.",
      sections: [
        {
          heading: "Why naive text splitting breaks good documents",
          paragraphs: [
            "Company policy documents are rarely clean text files. They are scanned PDFs, long tables, footnotes, and sections that continue across pages.",
            "If you split those documents every 500 characters, you can easily cut a rule in half or separate a table row from its heading. The model then receives incomplete context and can produce an answer that sounds confident but is wrong.",
          ],
        },
        {
          heading: "Permissions have to happen before the answer",
          paragraphs: [
            "Inside a company, finding the right passage is only half the problem. The system also has to know whether the person asking is allowed to see it.",
            "I prefer to filter restricted documents before retrieval, at the data layer. A prompt that says 'don't reveal this' is not a security boundary.",
          ],
        },
      ],
      conclusion:
        "Full essay coming soon. I'll cover document parsing, chunk boundaries, permissions, and what to do when the system simply doesn't have an answer.",
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
      "Helped design and build a Python monitoring system that automates authentication and collects resource usage across 500+ servers. A reporting process that used to take a full day now takes about two hours.",
      "Worked on the backend of an internal job portal, building features for personnel requests, tracking candidates through selection, and sending automated notifications.",
      "Led frontend development for an internal microservice platform covering learning management, job requests, recruitment, and employee management. Connected the apps through SSO and shared UI components through an internal npm package.",
      "Built an AI-powered company knowledge platform with RAG, combining BM25 keyword search with multilingual vector search. It ingests documents with vision support, lets employees explore a knowledge graph, controls access by department and role, and links answers back to their sources. I'm now extending the AI work to CV screening and ranking candidates against a hiring rubric.",
      "Building a Duolingo-style platform with AI-assisted quizzes and practice drills for employee training. The first focus is Korean language learning to help people collaborate across companies.",
    ],
    technologies: ["React", "RAG / LLMs", "Coolify", "Java", "Springboot", "Postgre", "TypeScript", "Go", "Python", "Langfuse", "Python"],
  },
  {
    id: "freelance-fullstack",
    role: "Full Stack Engineer & Consultant",
    company: "Freelance",
    type: "Freelance & Consulting",
    period: "Dec 2025 — Present",
    location: "Jakarta · Remote",
    description: [
      "Work directly with small business owners to turn repetitive day-to-day tasks into simple software they can actually maintain.",
      "Built Dr. Meoww, a clinic operations and Android tablet app for attendance, patient records, inventory, and payroll. Monthly payroll went from roughly two days of manual work to a few minutes.",
      "Built byGewa's ordering flow with delivery-distance pricing and direct Google Sheets integration, using Vercel, Google Maps, and Apps Script with no current monthly hosting cost.",
      "I try not to custom-build things just to make the stack look impressive. If an existing tool solves most of the problem well, I use it and spend custom engineering effort on the parts that actually matter to the business.",
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
      "Co-trained Hackathon Digdaya participants on design thinking, user-focused problem solving, and turning rough ideas into testable prototypes.",
      "Helped teams turn broad problem statements into clearer user needs, ideas, and working prototype directions.",
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
      "Helped developers and aspiring cloud engineers work through hands-on Google Cloud labs and troubleshooting sessions.",
      "Supported participants across topics such as IAM, GKE, Cloud Run, and general cloud architecture.",
    ],
    technologies: ["Google Cloud Platform", "GKE", "Cloud Run", "IAM", "Cloud Architecture"],
  },
  {
    id: "bangkit-mentor",
    role: "Machine Learning Mentor Bangkit Batch 1 2024",
    company: "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
    type: "Mentorship",
    period: "Feb 2024 — Jul 2024",
    location: "Remote",
    description: [
      "Mentored 23+ machine-learning students through Bangkit coursework covering deep learning, computer vision, NLP, and project work.",
      "Ran weekly mentoring sessions, helped debug training problems, and talked through how classroom concepts translate into working ML projects.",
    ],
    technologies: ["Python", "TensorFlow", "FastAPI", "Computer Vision", "Scikit-Learn", "Tableau", "Kaggle", "Jupyter Notebook", "Google Colab"],
  },
  {
    id: "mekari-infosec",
    role: "Information Security & Compliance",
    company: "Mekari",
    type: "Internship",
    period: "Jun 2023 — Jun 2024",
    location: "Jakarta, Indonesia · Hybrid",
    description: [
      "Built a small security-policy chatbot with Google Sheets during my InfoSec internship — the side project that made me realize I wanted to spend more time building software.",
      "Reviewed logs, APIs, and security controls as part of the team's ISO 27001 and information-security work.",
    ],
    technologies: ["Javascript", "OpenAI API", "AWS Lambda", "ISO 27001", "Google Apps Script"],
  },
  {
    id: "bangkit-graduate",
    role: "Machine Learning Cohort Graduate",
    company: "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
    type: "Certification",
    period: "Feb 2023 — Jul 2023",
    location: "Remote",
    description: [
      "Completed Bangkit's 900+ hour machine-learning track covering Python, statistics, deep learning, computer vision, and deployment.",
      "Led the machine-learning side of our computer-vision capstone, which was recognized among the program's top submissions.",
    ],
    technologies: ["Python", "TensorFlow", "SQL", "Computer Vision", "Pandas"],
  },
  {
    id: "itb-degree",
    role: "System & Information Technology Graduate",
    company: "Institut Teknologi Bandung (ITB)",
    type: "Education",
    period: "Bachelor Degree",
    location: "Bandung, Indonesia",
    description: [
      "Graduated in System & Information Technology (STI / STEI ITB).",
      "Studied systems analysis, enterprise computing, databases, networks, and software engineering before moving into a hands-on software engineering role.",
    ],
    technologies: ["Systems Architecture", "Software Engineering", "Databases", "Networks", "Python", "Java"],
  },
];

export const PURSUITS_DATA: Record<string, PursuitDetail> = {
  stories: {
    slug: "stories",
    title: "Stories",
    subtitle: "Books, Film, Anime & Anything With a Good Story",
    tag: "Perspective",
    accent: "lilac",
    emoji: "📖",
    readTime: "4 min read",
    photoCount: 6,
    leadQuote: "I like stories because they let me spend a few hours inside a life that isn't mine.",
    overview: [
      "Most days are naturally centered on our own problems, deadlines, and assumptions. Reading or watching a good story is one of the easiest ways I know to get pulled out of that for a while.",
      "Sometimes that's a long novel, sometimes an anime episode, sometimes a film where almost nothing seems to happen. The format doesn't matter much to me. I just like the feeling of understanding a character I didn't expect to understand.",
      "I don't think fiction needs to teach me a lesson every time. But the best stories usually leave some small change in how I look at people afterward."
    ],
    subsections: [
      {
        heading: "Why I keep coming back to fiction",
        paragraphs: [
          "Software is used by actual people, usually while they are trying to get something else done. They might be tired, distracted, confused, or in a hurry. Remembering that matters more than pretending users behave like perfect inputs.",
          "One thing I love about speculative fiction is how a writer can change one rule of the world and then follow the consequences all the way down to ordinary people. Ted Chiang and Ursula K. Le Guin are especially good at that. It isn't a software lesson so much as a reminder that systems always land on human lives eventually."
        ],
        callout: "A clever system is nice. A system that still makes sense when the user is tired and frustrated is better."
      },
      {
        heading: "Learning to stay with something longer",
        paragraphs: [
          "Long stories ask for a kind of patience I don't get from scrolling. You have to stay with unresolved tension, annoying characters, and things that only make sense much later.",
          "I like that feeling of not immediately knowing what something means. It has probably made me a little more comfortable sitting with confusing problems elsewhere too, including code."
        ]
      }
    ],
    highlights: [
      { title: "Borrowing another point of view", detail: "The fun part is realizing a character can make sense even when I would never make the same choice." },
      { title: "Following consequences", detail: "I love stories that change one thing about the world and then seriously ask what happens next." },
      { title: "Paying attention for longer", detail: "Books are one of the few things that can still keep me on one thread for hours." },
      { title: "Quiet stories", detail: "Some of my favorites barely announce what they're doing. The meaning sits in the pauses." }
    ],
    curatedItems: {
      sectionTitle: "Stories I kept thinking about",
      sectionDescription: "A few stories that stayed in my head long after I finished them.",
      items: [
        {
          title: "Exhalation",
          creatorOrContext: "Ted Chiang · Book / Short Stories",
          description: "Ted Chiang can take a huge idea about free will, memory, or time and make it feel personal instead of abstract. I finish his stories wanting to reread them immediately.",
          tag: "Sci-Fi / Philosophy",
          quote: "The universe began as an enormous breath being held. Who knows why? But whatever the reason, I am glad it did."
        },
        {
          title: "Vinland Saga",
          creatorOrContext: "Makoto Yukimura · Manga / Anime",
          description: "What starts as a revenge story slowly becomes a story about what it takes to stop living by violence. Thorfinn's growth is the reason it stayed with me.",
          tag: "Historical Fiction",
          quote: "You have no enemies. No one has any enemies. There is no one in this world that you should hurt."
        },
        {
          title: "Sousou no Frieren",
          creatorOrContext: "Kanehito Yamada & Tsukasa Abe · Anime",
          description: "A very quiet story about time, memory, and realizing too late that a short part of your life may have meant much more than you noticed.",
          tag: "Fantasy / Drama",
          quote: "It was only a ten-year journey... but why am I crying?"
        },
        {
          title: "The Dispossessed",
          creatorOrContext: "Ursula K. Le Guin · Novel",
          description: "Le Guin puts two very different societies next to each other and refuses to make either one easy. I like how much the book trusts the reader to sit with the tradeoffs.",
          tag: "Speculative Social Fiction",
          quote: "You cannot buy the revolution. You cannot make the revolution. You can only be the revolution."
        },
        {
          title: "Monster",
          creatorOrContext: "Naoki Urasawa · Manga / Anime",
          description: "Tenma saves a life because he believes every life matters, then has to live with what that decision sets in motion. The moral tension carries the whole story.",
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
    subtitle: "Running, Gym, Badminton & Archery",
    tag: "Practice & Discipline",
    accent: "mint",
    emoji: "🏹",
    readTime: "5 min read",
    photoCount: 6,
    leadQuote: "I like hobbies where improvement is slow enough that you can actually notice yourself earning it.",
    overview: [
      "The beginning of any physical hobby is humbling. You run out of breath too early, lift less than you thought you could, scatter arrows everywhere, or completely mistime an easy shot.",
      "That's also what makes it satisfying. Progress is unusually easy to see. A pace gets easier, a weight moves cleanly, or the arrows start landing closer together.",
      "There isn't much room to talk your way around the result. You either did the rep, ran the distance, or hit the target. I find that kind of feedback refreshing."
    ],
    subsections: [
      {
        heading: "Running without trying to win the first kilometer",
        paragraphs: [
          "I used to hate running because I started every run too fast. I'd chase an impressive first kilometer, blow up soon after, then wonder why running felt miserable. Learning to slow down changed everything.",
          "Once I stopped treating every run like a time trial, distance became much more enjoyable. A slow Sunday run around Jakarta can be one of the calmest parts of the week."
        ],
        callout: "Running teaches you that panic does not make the hill shorter. Relax your shoulders, lower your chin, and let your cadence do the work."
      },
      {
        heading: "The boring consistency of getting stronger",
        paragraphs: [
          "Strength training is mostly very unglamorous consistency. You show up even when you're tired, do the same basic movements well, add a little weight when you're ready, and repeat that for months.",
          "It also makes recovery impossible to ignore. Sleep, food, technique, and patience show up in the next session whether you care about them or not."
        ]
      },
      {
        heading: "Archery and badminton scratch opposite itches",
        paragraphs: [
          "Archery rewards calm. The more I try to force a good shot, the worse it usually gets. The goal is to repeat the same setup, breathe, and stop interfering with the release.",
          "Badminton is almost the opposite: quick decisions, fast feet, and constantly reading where the next shot is going. I like having one hobby that slows me down and another that speeds everything up."
        ]
      }
    ],
    highlights: [
      { title: "10km Target Pace", detail: "Working toward a faster 10K while keeping most training easy enough to recover from." },
      { title: "Weekly Volume", detail: "Usually a mix of gym sessions and a couple of runs each week." },
      { title: "Recurve Archery", detail: "Trying to make my 20m grouping boringly consistent instead of occasionally lucky." },
      { title: "Badminton Doubles", detail: "Getting better at doubles positioning, rotation, and not arriving late to the net." }
    ],
    curatedItems: {
      sectionTitle: "Things that actually helped",
      sectionDescription: "A few habits and pieces of gear that made training simpler or more consistent.",
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
    subtitle: "Places, Pilgrimage & Getting Out of Routine",
    tag: "Exploration",
    accent: "cream",
    emoji: "🌍",
    readTime: "5 min read",
    photoCount: 8,
    leadQuote: "Travel has a way of making your usual worries feel smaller. I think that's part of why safar has always meant more to me than just seeing new places.",
    overview: [
      "I like the Islamic idea of safar because travel feels like more than collecting places. Being away from your normal routine tends to reveal parts of you that are easy to hide at home.",
      "You learn small things about yourself when plans go wrong, when you don't speak the language, or when you have to depend on strangers. You also get reminded very quickly that your normal way of living is only one way people live.",
      "Jakarta is loud and fast, so being somewhere quieter can reset my sense of scale. A mountain, an old city, or the courtyards of the Haramain can make whatever I was stressing about back home feel much smaller."
    ],
    subsections: [
      {
        heading: "The Haramain",
        paragraphs: [
          "Madinah felt different from anywhere else I've visited. Even with people coming from all over the world, the courtyard of the Prophet's Mosque can feel remarkably calm.",
          "In Makkah, watching people move around the Kaaba in the middle of the night makes status feel very temporary. Different languages, jobs, and countries disappear into the same act of worship."
        ],
        callout: "In Madinah, I rarely felt the urge to rush anywhere. Just being there felt like enough."
      },
      {
        heading: "Japan and the care people put into ordinary things",
        paragraphs: [
          "What I noticed most in Japan wasn't really the futuristic stuff. It was the care people seemed to put into ordinary work: a train conductor doing the same safety check precisely, a small shop arranged thoughtfully, an old building repaired instead of replaced.",
          "I came home thinking more about care than efficiency. Even in software, there is a difference between finishing something and taking enough pride in the small details that it feels considered."
        ]
      },
      {
        heading: "Remembering how much there is close to home",
        paragraphs: [
          "It's easy to look abroad first and forget how much there is in Indonesia. Bromo at sunrise is one of those places that makes the scale of the landscape hard to ignore.",
          "Places like Prambanan and Borobudur do something similar in a different way. They make the present feel less permanent when you are standing in front of work that has already outlived generations."
        ]
      }
    ],
    highlights: [
      { title: "Leaving routine behind", detail: "Travel shows me pretty quickly how I behave when the usual comforts and routines are gone." },
      { title: "The Haramain", detail: "A kind of stillness I have not really found anywhere else." },
      { title: "Care in ordinary things", detail: "Small details in streets, shops, stations, and old buildings that people clearly take pride in." },
      { title: "Closer to home", detail: "Bromo, old temples, and the reminder that Indonesia already has more than enough places to keep exploring." }
    ],
    curatedItems: {
      sectionTitle: "Places that stayed with me",
      sectionDescription: "A few places I still find myself thinking about after coming home.",
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
    subtitle: "Souls-likes, Chess & Getting Better the Hard Way",
    tag: "Deliberate Practice",
    accent: "coral",
    emoji: "♟️",
    readTime: "3 min read",
    photoCount: 4,
    leadQuote: "What I like about Souls-likes and chess is that the feedback is brutally clear: if I keep making the same mistake, I keep losing.",
    overview: [
      "Work is messy. Sometimes a good idea gets dropped for reasons that have nothing to do with the quality of the work, and sometimes it is hard to tell whether you actually improved.",
      "Games are nice because the feedback is simpler. In chess, the position is right there. In a boss fight, the attack happened, I reacted badly, and now I'm dead. There is usually something concrete to learn from.",
      "If I get hit, I probably rolled too early or got greedy. If I lose a chess position, there is usually a move I failed to consider earlier. That accountability is part of the fun."
    ],
    subsections: [
      {
        heading: "Why difficult boss fights are fun",
        paragraphs: [
          "People call FromSoftware games punishing, but the good fights usually feel fair. Attacks have tells, openings repeat, and the game keeps giving you information even while it is killing you.",
          "By the fortieth attempt, the fight feels completely different from the first. You're not reacting to chaos anymore; you recognize the sequence and know when it is actually your turn."
        ],
        callout: "Panic is the true boss. The moment you panic-roll, you die. The moment you breathe and wait for your window, the encounter slows down."
      },
      {
        heading: "Chess and being forced to admit you missed something",
        paragraphs: [
          "Chess is very good at exposing wishful thinking. A bad position does not care that the idea felt clever when you played it.",
          "The habit I'm trying to build is simple: before I get excited about my move, look for the strongest reply. It sounds obvious, but doing that consistently is much harder than knowing it in theory."
        ]
      }
    ],
    highlights: [
      { title: "Clear feedback", detail: "It is usually obvious what went wrong and what I need to practice next." },
      { title: "Pattern recognition", detail: "Seeing familiar shapes sooner, whether it is a boss animation or a chess position." },
      { title: "Staying calm", detail: "Trying not to throw away good decisions just because the health bar or clock looks scary." },
      { title: "Earned improvement", detail: "The satisfaction comes from remembering how impossible something felt before it became normal." }
    ],
    curatedItems: {
      sectionTitle: "Favorite fights and chess ideas",
      sectionDescription: "A few encounters and studies I keep coming back to because they were genuinely fun to learn.",
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
