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
  shortName: "Dito",
  role: "Full Stack Engineer & AI/ML",
  location: "Jakarta, Indonesia (UTC+7)",
  availability: "Available for select freelance projects & technical collaborations",
  email: "ammarditoshafaat2001@gmail.com",
  github: "https://github.com/webdev-testa",
  linkedin: "https://www.linkedin.com/in/ammardito-shafaat-65a255216/",
  stats: [
    { label: "Active Roles", value: "AI/ML & Full Stack" },
    { label: "Client Systems", value: "UMKM Mobile & Web" },
    { label: "Engineers Mentored", value: "50+ Students" },
    { label: "Core Stack", value: "React • Java • Python" },
  ],
  intro: {
    greeting: "Hello.",
    lead: "I’m Ammardito, a Full Stack Engineer & AI Project based in Jakarta.",
    paragraph1:
      "By day, I build software and lead an internal AI initiative at LG Sinar Mas. On the side, I craft full-stack systems and mobile apps for real businesses and UMKMs—from retail ERPs and Android apps to lightweight location-aware order portals.",
    paragraph2:
      "Beyond the code editor, I immerse myself in story-driven media, games, and chess. My primary exercise routine centers on running and the gym, with a continuous appetite for exploring sports like archery, tennis, padel, badminton, and futsal.",
  },
};

export const INITIAL_STICKY_NOTES: StickyNote[] = [
  {
    id: "note-1",
    author: "Dito",
    role: "Engineering Note",
    content: "Pragmatic tech stacks beat resume-driven complexity every time. Build for the user's reality!",
    color: "lime",
    rotation: -2,
    likes: 42,
    tag: "Philosophy",
  },
  {
    id: "note-2",
    author: "Pet Shop UMKM",
    role: "Client Feedback",
    content: "The Android POS + payroll system cut our monthly salary calculation from 2 days down to 3 minutes! 🐾",
    color: "lilac",
    rotation: 3,
    likes: 38,
    tag: "Client Impact",
  },
  {
    id: "note-3",
    author: "Story & Chess",
    role: "Core Passions",
    content: "🎮 ♟️ Captivated by Disco Elysium, Baldur's Gate 3 & chess tactics. Deep storytelling and strategy are pure craft.",
    color: "coral",
    rotation: -4,
    likes: 35,
    tag: "Stories & Chess",
  },
  {
    id: "note-4",
    author: "Running & Gym",
    role: "Daily Routine",
    content: "🏃‍♂️ Regular running and gym sessions provide the mental clarity and energy needed for high-focus engineering.",
    color: "mint",
    rotation: 2,
    likes: 31,
    tag: "Exercise Routine",
  },
  {
    id: "note-5",
    author: "Sports Explorer",
    role: "Active Exploration",
    content: "🎯 Trying new sports—archery, padel, tennis, badminton & futsal. Always exploring outside routine routines!",
    color: "pink",
    rotation: -1,
    likes: 27,
    tag: "Sports Exploration",
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    slug: "pet-shop-erp-mobile",
    title: "Pet Shop UMKM ERP & Native Mobile App",
    category: "Full Stack & Mobile",
    subtitle: "Complete Management Suite: Attendance, Payroll, POS & Cat/Owner Records",
    summary:
      "An end-to-end full stack system and Android app for a pet shop UMKM managing staff attendance, automated payroll, kasbon cash advances, POS sales, and pet profiles.",
    year: "2026",
    role: "Full Stack Lead (Freelance)",
    clientOrContext: "Pet Shop UMKM",
    tags: ["React", "TypeScript", "Capacitor", "Android", "Supabase", "Tailwind CSS"],
    featured: true,
    colorBlock: "lilac",
    bgHex: "#c5b0f4",
    overview:
      "A complete operational operating system for a growing pet shop business. The client needed a unified way to track staff daily attendance with geolocation, calculate monthly payroll deductions for employee cash advances (kasbon), run cashier POS checkout, and maintain rich profiles of cats and their owners for grooming and boarding.",
    problem:
      "The business was losing hours reconciling paper logbooks for grooming schedules, cat medical notes, cash advances, and end-of-month payroll calculations. Off-the-shelf SaaS apps were either too expensive or fragmented across multiple disconnected subscriptions.",
    solution:
      "Built a tailored full-stack solution using React and TypeScript, packaged as a native Android application using Capacitor so floor staff can use tablets on-site, backed by Supabase for real-time data synchronization with an architectural roadmap for custom Go/Node backend logic.",
    architecture: {
      title: "Mobile & Cloud Architecture",
      description: "Cross-platform Android & web client backed by Supabase with Row Level Security",
      flowSteps: [
        "Floor staff uses Android tablet app (Capacitor + React) for attendance & grooming logs",
        "Cashier conducts POS checkout with instant receipt and inventory decrement",
        "Owner module manages cat breed, medical history, vaccination reminders, and owner contacts",
        "Payroll engine automatically computes net salaries subtracting active kasbon deductions",
        "Supabase PostgreSQL enforces strict role-based RLS policies between staff and manager",
      ],
    },
    keyDecisions: [
      {
        decision: "Capacitor over React Native",
        rationale: "Allowed 100% code reuse between the web administrative dashboard and the on-premise Android tablet app, cutting delivery timeline in half.",
      },
      {
        decision: "Atomic transaction RPC for POS & inventory",
        rationale: "Prevented negative stock counts and race conditions when multiple staff items were scanned at checkout.",
      },
    ],
    codeSnippet: {
      filename: "calculatePayroll.ts",
      language: "typescript",
      code: `export function calculateMonthlyPayroll(
  staff: StaffRecord,
  attendances: AttendanceLog[],
  activeKasbon: KasbonRecord[]
): PayrollSummary {
  const baseSalary = staff.monthlySalary;
  const daysPresent = attendances.filter((a) => a.status === "PRESENT").length;
  const dailyRate = baseSalary / 26; // 26 working days standard
  const grossPay = dailyRate * daysPresent + calculateOvertime(attendances);
  
  const kasbonDeduction = activeKasbon.reduce((sum, item) => sum + item.monthlyInstallment, 0);
  const netPay = Math.max(0, grossPay - kasbonDeduction);
  
  return { staffId: staff.id, grossPay, kasbonDeduction, netPay, daysPresent };
}`,
      caption: "Payroll computation engine reconciling attendance logs against active staff kasbon installments.",
    },
    metrics: [
      { label: "Payroll Prep Time", value: "From 2 days to 3 mins" },
      { label: "Platform Coverage", value: "Web + Android Native" },
      { label: "Pet Profiles Managed", value: "500+ Cats & Owners" },
    ],
  },
  {
    slug: "bygewa-malang-order",
    title: "byGewa Malang — Custom Order & Maps System",
    category: "Freelance / Web",
    subtitle: "Location-Aware Custom Food Ordering Portal for Malang UMKM",
    summary:
      "Engineered a lightweight custom ordering portal with integrated Google Maps distance calculation, Google AppsScript backend, and Google Sheets retention on Vercel.",
    year: "2025",
    role: "Freelance Web Engineer",
    clientOrContext: "byGewa (Malang UMKM)",
    tags: ["Vanilla JS", "HTML5/CSS3", "Google Maps API", "AppsScript", "Google Sheets", "Vercel"],
    featured: true,
    colorBlock: "lime",
    bgHex: "#dceeb1",
    overview:
      "byGewa, a popular food & beverage brand in Malang, needed a smooth custom ordering experience where customers could select custom menu combinations, pin their exact delivery location on an interactive map, and submit orders directly without requiring complex account creation.",
    problem:
      "Traditional delivery aggregators charged up to 25% commission fees, while standard WhatsApp ordering resulted in miscalculated delivery distances and manual order transcription errors.",
    solution:
      "Engineered a lightweight, blazing-fast client using Vanilla JavaScript, HTML5, and CSS for zero bundle overhead, integrated Google Maps JavaScript API with Places Autocomplete and Distance Matrix calculation, and built a serverless backend using Google AppsScript to pipe orders directly into the kitchen's live Google Sheet.",
    architecture: {
      title: "Zero-Cost Serverless Flow",
      description: "Client-side Maps computation with AppsScript webhook dispatch to Google Sheets",
      flowSteps: [
        "Customer configures meal items and toppings on mobile-first UI",
        "Customer selects delivery location via Google Maps pin or Places search",
        "Client calculates precise delivery radius and fee dynamically",
        "Order payload posted to secure Google AppsScript Webhook endpoint",
        "Google Sheets triggers real-time sound alert for kitchen staff & sends WhatsApp confirmation",
      ],
    },
    keyDecisions: [
      {
        decision: "Vanilla JavaScript over heavy frameworks",
        rationale: "Kept total page payload under 80KB, ensuring sub-500ms load times on spotty mobile cellular connections in Malang.",
      },
      {
        decision: "Google Sheets as kitchen database & notification trigger",
        rationale: "Zero hosting cost for the UMKM owner while providing an interface they already knew how to operate effortlessly on mobile.",
      },
    ],
    codeSnippet: {
      filename: "mapsOrderHandler.js",
      language: "javascript",
      code: `async function submitOrderWithLocation(orderData, markerPosition) {
  const payload = {
    timestamp: new Date().toISOString(),
    customerName: orderData.name,
    whatsapp: orderData.phone,
    items: orderData.items,
    lat: markerPosition.lat(),
    lng: markerPosition.lng(),
    address: orderData.addressText,
    distanceKm: orderData.computedDistance,
    deliveryFee: orderData.computedFee,
    grandTotal: orderData.totalPrice + orderData.computedFee
  };

  const response = await fetch(CONFIG.APPS_SCRIPT_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "text/plain" },
    body: JSON.stringify(payload)
  });
  return response.json();
}`,
      caption: "Order dispatch handler packaging geospatial metadata for the serverless AppsScript webhook.",
    },
    metrics: [
      { label: "Commission Saved", value: "100% Direct Orders" },
      { label: "Page Weight", value: "< 80KB Total" },
      { label: "Location Accuracy", value: "Pinpoint GPS Pin" },
    ],
  },
  {
    slug: "lg-ai-enterprise",
    title: "LG Sinar Mas AI & Enterprise Portal",
    category: "AI & Enterprise",
    subtitle: "Enterprise AI Initiative & Assessment Microservices",
    summary:
      "Leading an internal AI project alongside engineering high-throughput Java Spring Boot & .NET backend microservices for enterprise employee assessment workflows.",
    year: "2025 — Present",
    role: "Software Engineer & AI Project Lead",
    clientOrContext: "LG Sinar Mas",
    tags: ["Python", "Java", "Spring Boot", "OpenAI / LLMs", "PostgreSQL", "Docker", "C#/.NET"],
    featured: true,
    colorBlock: "mint",
    bgHex: "#c8e6cd",
    overview:
      "At LG Sinar Mas, I currently wear two hats: leading an internal initiative to integrate generative AI into corporate operations, and maintaining the core backend services that power synchronous candidate and employee assessment evaluations.",
    problem:
      "Enterprise recruitment and internal assessment rounds created heavy transactional bursts where hundreds of employees submitted test evaluations simultaneously, requiring zero data corruption, sub-second latency, and intelligent evaluation synthesis.",
    solution:
      "Engineered decoupled Spring Boot REST services with optimized PostgreSQL indexing, connection pooling (HikariCP), and fine-grained JWT role-based access control. In parallel, architected an internal AI pipeline to summarize multi-factor performance evaluations accurately.",
    architecture: {
      title: "System & AI Pipeline Flow",
      description: "Decoupled evaluation engine with automated LLM reasoning layer",
      flowSteps: [
        "Candidate / Employee submits test answers via web portal",
        "Spring API Gateway validates JWT signature and RBAC role tiers",
        "Assessment service processes evaluation in transactional batch",
        "PostgreSQL RDS records results with row-level locks",
        "AI reasoning worker synthesizes qualitative competency scores",
      ],
    },
    keyDecisions: [
      {
        decision: "HikariCP connection pool tuning over default settings",
        rationale: "Eliminated connection starvation during peak campus recruitment test intervals with 1,000+ simultaneous test takers.",
      },
      {
        decision: "Zero-retention AI worker sandbox",
        rationale: "Ensured confidential employee assessment answers and proprietary evaluation rubrics never leak outside compliance boundaries.",
      },
    ],
    codeSnippet: {
      filename: "AssessmentEvaluationService.java",
      language: "java",
      code: `@Transactional(isolation = Isolation.READ_COMMITTED)
public EvaluationResult processSubmission(UUID candidateId, SubmissionPayload payload) {
    Candidate candidate = candidateRepository.findByIdWithLock(candidateId)
        .orElseThrow(() -> new EntityNotFoundException("Candidate session invalid"));
        
    ScoreCalculation score = scoringEngine.calculate(payload.getResponses());
    candidate.recordScore(score);
    
    // Dispatch async event for AI synthesis without blocking transaction
    eventPublisher.publishEvent(new AssessmentCompletedEvent(candidateId, score));
    return new EvaluationResult(candidate.getId(), score.getTotal(), Status.COMPLETED);
}`,
      caption: "Transactional candidate assessment processing with decoupled async AI event dispatching.",
    },
    metrics: [
      { label: "Assessment Throughput", value: "15,000+ Submissions" },
      { label: "API Query Latency", value: "< 45ms" },
      { label: "Data Consistency", value: "100% Zero-Loss" },
    ],
  },
  {
    slug: "calorielens-cv",
    title: "CalorieLens Food Vision Detector",
    category: "AI & Enterprise",
    subtitle: "Deep Learning Bounding Box Classification & Calorie Estimation",
    summary:
      "Trained a convolutional deep neural network to locate food items in smartphone photos and estimate nutritional values with real-time bounding boxes.",
    year: "2024",
    role: "ML Engineer & Capstone Lead",
    clientOrContext: "Bangkit Capstone / Research",
    tags: ["Python", "TensorFlow", "FastAPI", "OpenCV", "Pandas", "Jupyter"],
    featured: true,
    colorBlock: "coral",
    bgHex: "#f3c9b6",
    overview:
      "An applied computer vision project focused on real-time dietary logging. Instead of manually searching through food databases, users take a quick photo of their plate, and the model predicts multi-class bounding boxes with nutritional breakdowns.",
    problem:
      "Standard food classification models output a single label for the whole image, failing when multiple dishes or side items exist on the same plate.",
    solution:
      "Trained a customized convolutional neural network with anchor-box regression and non-maximum suppression (NMS) over 50,000+ labeled images, deployed behind an asynchronous Python FastAPI inference backend.",
    architecture: {
      title: "Inference Pipeline",
      description: "Image preprocessing to bounding box anchor regression and nutritional synthesis",
      flowSteps: [
        "User uploads smartphone food image",
        "FastAPI normalizes matrix tensor and resizes to 416x416",
        "TensorFlow model calculates multi-class bounding boxes & class probabilities",
        "Non-Max Suppression filters overlapping bounding candidate boxes",
        "Nutritional estimation engine computes calories based on detected portion area",
      ],
    },
    keyDecisions: [
      {
        decision: "ONNX Runtime conversion",
        rationale: "Reduced inference latency from 340ms to 115ms while reducing server memory footprint by 60%.",
      },
    ],
    metrics: [
      { label: "Model Accuracy", value: "89.2% mAP" },
      { label: "Inference Latency", value: "115ms" },
      { label: "Food Categories", value: "120+ Dishes" },
    ],
  },
  {
    slug: "supply-chain-radar",
    title: "Real-Time Supply Chain Telemetry Radar",
    category: "Systems & Data",
    subtitle: "Reactive WebSocket Stream & Low-Latency Event Dispatcher",
    summary:
      "High-frequency reactive monitoring system streaming cross-regional warehouse telemetry and automated shortage alerts with sub-20ms propagation.",
    year: "2024",
    role: "Backend Architect",
    clientOrContext: "Independent System",
    tags: ["Java", "Spring Boot", "WebSockets", "Redis Pub/Sub", "React", "TypeScript"],
    featured: false,
    colorBlock: "cream",
    bgHex: "#f4ecd6",
    overview:
      "A distributed telemetry dispatcher built to handle high-frequency stock level fluctuations across distributed fulfillment centers.",
    problem:
      "Legacy polling architectures overwhelmed database instances and suffered from minutes of delay before inventory stockouts were surfaced to managers.",
    solution:
      "Built a bi-directional WebSocket cluster using Spring Boot STOMP with a Redis Pub/Sub backplane, broadcasting 5,000+ live telemetry pulses per second to reactive frontend clients.",
    architecture: {
      title: "Event-Driven Telemetry",
      description: "Distributed message backplane with automatic client reconnect backoff",
      flowSteps: [
        "Warehouse IoT sensors transmit inventory delta pulses",
        "Spring Boot gateway ingests and publishes message to Redis Pub/Sub topic",
        "Subscriber nodes broadcast updates over STOMP WebSocket channels",
        "Client canvas gauges render live stock velocity smoothly",
      ],
    },
    keyDecisions: [
      {
        decision: "Redis Pub/Sub backplane for WebSocket clustering",
        rationale: "Enabled horizontal scaling across multiple Spring Boot nodes without client connection sticky session dependencies.",
      },
    ],
    metrics: [
      { label: "Broadcast Latency", value: "< 18ms" },
      { label: "Telemetry Pulses", value: "5,000+ / sec" },
      { label: "Uptime Reliability", value: "99.99%" },
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
    tags: ["TypeScript", "Web Crypto API", "Node.js", "Express", "MongoDB", "AES-256"],
    featured: false,
    colorBlock: "navy",
    bgHex: "#1f1d3d",
    overview:
      "A secure file storage application designed to mathematically guarantee privacy: even with full root database access, no third party or server administrator can read file plaintexts.",
    problem:
      "Traditional cloud storage encrypts data server-side (at rest), meaning servers hold or access decryption keys, leaving files vulnerable to insider threats and server compromises.",
    solution:
      "Engineered client-side Web Crypto API key derivation utilizing PBKDF2 with 250,000 iterations and streaming AES-256 GCM chunk encryption before binary payloads leave the browser.",
    architecture: {
      title: "Zero-Knowledge Encryption Pipeline",
      description: "Client-side key derivation and ciphertext chunking",
      flowSteps: [
        "User enters passphrase in browser sandbox",
        "Web Crypto API derives AES-256 key via PBKDF2 (250k iterations + unique salt)",
        "File is encrypted into ciphertext chunks with cryptographically random initialization vectors (IVs)",
        "Server receives and stores only raw encrypted ciphertext blobs in MongoDB GridFS",
      ],
    },
    keyDecisions: [
      {
        decision: "Web Crypto API over third-party JS libraries",
        rationale: "Utilized browser native C++ cryptographic implementations for optimal performance and protection against JS runtime timing attacks.",
      },
    ],
    metrics: [
      { label: "Cipher Strength", value: "AES-256 GCM" },
      { label: "Server Key Exposure", value: "0% (Zero-Knowledge)" },
      { label: "KDF Iterations", value: "250,000" },
    ],
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "freelance-fullstack",
    role: "Full Stack Engineer",
    company: "Freelance",
    type: "Freelance & Consulting",
    period: "Dec 2025 — Present",
    location: "Jakarta · Remote",
    description: [
      "Worked with UMKM in Malang (byGewa) to build a custom location-aware food ordering portal with integrated Google Maps distance calculation, Google AppsScript backend automation, and real-time Google Sheets data retention deployed on Vercel.",
      "Architected and currently building an end-to-end management system (attendance with geolocation, automated payroll, staff kasbon / cash advance tracking, cashier POS, and cat + owner profiles) for a pet shop UMKM.",
      "Built cross-platform client with React, TypeScript, and Capacitor for native Android tablet deployment with Supabase backend data synchronization.",
    ],
    technologies: ["React", "TypeScript", "Capacitor", "Android", "Supabase", "Vanilla JS", "Google Maps API", "Google AppsScript", "Vercel"],
  },
  {
    id: "lg-sinarmas",
    role: "Software Engineer & AI Project Lead",
    company: "LG Sinar Mas",
    type: "Contract",
    period: "May 2025 — Present",
    location: "Jakarta, Indonesia · On-site",
    description: [
      "Developing and leading an internal AI Project at LG Sinar Mas to streamline organizational workflows and synthesize employee intelligence.",
      "Engineered robust, maintainable back-end microservices in Java (Spring Boot 3) and C#/.NET for enterprise recruitment and candidate assessment testing portals.",
      "Designed PostgreSQL RBAC schemas and optimized transactional query execution plans, keeping peak testing query latency under 45ms.",
      "Collaborated across engineering leads to enforce clean architecture patterns and CI/CD pipelines.",
    ],
    technologies: ["Python", "Java", "Spring Boot", "C#", ".NET Core", "PostgreSQL", "Docker", "REST APIs", "Git"],
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
      "Facilitated structured collaborative workshops guiding teams from ambiguous problem discovery to actionable digital product prototypes.",
    ],
    technologies: ["Design Thinking", "User Research", "Systems Thinking", "Facilitation", "Prototyping"],
  },
  {
    id: "gcp-arcade",
    role: "Facilitator Google Cloud Arcade 2025",
    company: "Google Cloud Arcade Facilitator Program",
    type: "Part-time",
    period: "Jul 2025 — Oct 2025",
    location: "Indonesia · Remote",
    description: [
      "Facilitated Google Cloud Platform hands-on learning labs for community developers and aspiring cloud engineers.",
      "Guided hundreds of participants through cloud architecture, IAM security, containerized workloads on GKE, and serverless Cloud Run functions.",
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
      "Mentored 50+ prospective AI engineers through Google's flagship technology curriculum across deep learning, computer vision, and NLP.",
      "Conducted weekly live technical consultation sessions, debugging complex TensorFlow training pipelines and model convergence issues.",
      "Provided architectural guidance and code reviews for capstone projects, ensuring production-grade deployment on cloud instances.",
    ],
    technologies: ["Python", "TensorFlow", "Keras", "Scikit-Learn", "Google Cloud", "FastAPI", "Jupyter"],
  },
  {
    id: "mekari-infosec",
    role: "Information Security & Compliance",
    company: "Mekari",
    type: "Internship",
    period: "Jun 2023 — Jun 2024",
    location: "Jakarta, Indonesia · Hybrid",
    description: [
      "Designed serverless Python & OpenAI automated workflows connected with corporate spreadsheets to query security policies in seconds.",
      "Audited application logs, API endpoints, and network activity to proactively surface vulnerabilities and anomalous behaviors.",
      "Partnered with product developers to enforce ISO 27001 standard practices, data sanitization, and secure access management.",
    ],
    technologies: ["Python", "OpenAI API", "AWS Lambda", "AWS S3", "ISO 27001", "Google Apps Script"],
  },
  {
    id: "bangkit-graduate",
    role: "Bangkit Graduate — Machine Learning Path",
    company: "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
    type: "Certification / Academy",
    period: "Feb 2023 — Jul 2023",
    location: "Remote",
    description: [
      "Completed rigorous 900+ hour machine learning curriculum covering mathematics, statistical analysis, deep neural networks, and model deployment.",
      "Authored computer vision capstone project recognized among top submissions.",
    ],
    technologies: ["Python", "SQL", "TensorFlow", "Pandas", "Scikit-Learn", "Math for ML"],
  },
];

export const PERSONAL_STORIES = {
  hobbies: [
    {
      title: "Story-Driven Worlds & Narrative Fiction",
      emoji: "📖",
      tag: "Main Interest",
      status: "Core Focus",
      description:
        "Deeply captivated by rich narrative fiction, speculative literature, and silent reading clubs in Jakarta. Examining complex worldbuilding, ethical branching, and character arcs as a fundamental art form.",
    },
    {
      title: "Story Games & Interactive Craft",
      emoji: "🎮",
      tag: "Main Interest",
      status: "Core Focus",
      description:
        "Immersing in story-driven video games that push systemic and narrative boundaries. Top influences include Disco Elysium, Baldur's Gate 3, Cyberpunk 2077, Outer Wilds, and The Witcher 3.",
    },
    {
      title: "Chess — Strategy & Calculation",
      emoji: "♟️",
      tag: "Main Interest",
      status: "Core Focus",
      description:
        "Engaged in chess for its tactical depth, calculating deep variations, positional patience, and pattern recognition. A timeless mental arena of strategy and mental composure.",
    },
    {
      title: "Running & Aerobic Discipline",
      emoji: "🏃‍♂️",
      tag: "Routine Exercise",
      status: "Daily Routine",
      description:
        "My primary exercise routine. Hitting the road for cardiovascular endurance, cadence, and the irreplaceable mental clarity and rhythm that resets the mind after coding.",
    },
    {
      title: "Gym & Strength Training",
      emoji: "🏋️‍♂️",
      tag: "Routine Exercise",
      status: "Daily Routine",
      description:
        "Consistent strength training and progressive overload. Building physical resilience, structural strength, and the sustained stamina required for deep engineering work.",
    },
    {
      title: "Active Sports Exploration",
      emoji: "🎯",
      tag: "Active Exploration",
      status: "Casual & Non-Routine",
      description:
        "Exploring dynamic sports whenever the chance appears—testing aim in archery, reflexes on padel, tennis, and badminton courts, or quick team flow in futsal. Pure curiosity without rigid routine pressure.",
    },
  ],
  toolbox: [
    { category: "Frontend & Mobile", items: ["React", "TypeScript", "Next.js", "Capacitor (Android)", "Tailwind CSS", "HTML5 / Vanilla JS"] },
    { category: "Backend & Systems", items: ["Java (Spring Boot 3)", "Python (FastAPI)", "C# (.NET Core)", "Node.js", "REST APIs", "WebSockets"] },
    { category: "Databases & Cloud", items: ["PostgreSQL", "Supabase", "Redis", "Google Cloud Platform", "AWS Lambda/S3", "Docker"] },
    { category: "AI & Data", items: ["OpenAI / LLMs", "TensorFlow / Keras", "Scikit-Learn", "OpenCV", "Google AppsScript", "Pandas"] },
  ],
};
