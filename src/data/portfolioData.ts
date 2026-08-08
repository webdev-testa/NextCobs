export interface Project {
  id: string;
  title: string;
  category: "Backend & Systems" | "AI & Machine Learning" | "Security & Cloud" | "Full Stack & Realtime";
  subtitle: string;
  blurb: string;
  architectureDetails: string[];
  impact: string;
  metrics: { label: string; value: string }[];
  tags: string[];
  colorBlock: "lime" | "lilac" | "cream" | "mint" | "pink" | "coral" | "navy";
  bgHex: string;
  image: string;
  liveDemoUrl?: string;
  githubUrl?: string;
  systemDiagram?: {
    nodes: { name: string; type: string; status: string }[];
    flow: string;
  };
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  type: "Full-Time" | "Mentorship" | "Compliance & Security";
  location: string;
  badgeColor: string;
  bullets: string[];
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
  headline: "Architecting resilient backends & intelligent systems.",
  subhead:
    "Java & Spring Boot backend engineer with specialized mastery in high-concurrency architectures, applied Machine Learning, and ISO 27001 compliant security automation.",
  location: "Jakarta, Indonesia (UTC+7)",
  availability: "Available for Senior / Mid Backend & Distributed Systems Roles",
  email: "ammarditoshafaat2001@gmail.com",
  phone: "+62 812‑3012‑6439",
  github: "https://github.com/webdev-testa",
  linkedin: "https://www.linkedin.com/in/ammardito-shafaat-65a255216/",
  resumeUrl: "#resume",
  stats: [
    { label: "High-Traffic Throughput", value: "10k+ req/s" },
    { label: "ML Inference Latency", value: "-40% reduction" },
    { label: "Engineers Mentored", value: "50+ students" },
    { label: "Production API Uptime", value: "99.98%" },
  ],
};

export const PROJECTS_DATA: Project[] = [
  {
    id: "job-portal-lg",
    title: "LG Sinar Mas Job Portal Engine",
    category: "Backend & Systems",
    subtitle: "High-Throughput Interview Testing & Role-Based Auth Engine",
    blurb:
      "Engineered core backend microservices for an enterprise recruitment ecosystem handling synchronous candidate assessment workflows and granular internal authorization tiers.",
    architectureDetails: [
      "Built resilient Spring Boot 3 RESTful APIs handling concurrent online testing sessions for hundreds of simultaneous test takers.",
      "Architected PostgreSQL RBAC schemas with fine-grained row-level security and optimized indexing on active job vacancy lookups.",
      "Implemented JWT and OAuth2 role-based authorization filters to segregate HR administrative consoles from public candidate applications.",
      "Optimized query execution plans, slashing query latency by 35% under simulated peak recruitment seasons.",
    ],
    impact: "Processed 15,000+ job applications seamlessly with 0 data inconsistency during peak campus recruitment rounds.",
    metrics: [
      { label: "Response Latency", value: "< 45ms" },
      { label: "Peak Concurrency", value: "1,200 users" },
      { label: "Query Optimization", value: "+35% faster" },
    ],
    tags: ["Java", "Spring Boot 3", "PostgreSQL", "Lombok", "Docker", "REST API", "JWT Security"],
    colorBlock: "lime",
    bgHex: "#dceeb1",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop",
    githubUrl: "https://github.com/webdev-testa",
    systemDiagram: {
      nodes: [
        { name: "Client Web / App", type: "Frontend", status: "Active" },
        { name: "Spring Gateway (JWT Filter)", type: "Gateway", status: "Secure" },
        { name: "Assessment Engine (Spring Boot)", type: "Core Service", status: "Operational" },
        { name: "PostgreSQL Database (RDS)", type: "Storage", status: "Synchronized" },
      ],
      flow: "Client -> Gateway [JWT Validated] -> Assessment Service -> Optimized PostgreSQL DB",
    },
  },
  {
    id: "openai-compliance-engine",
    title: "OpenAI Security Compliance Brain",
    category: "AI & Machine Learning",
    subtitle: "Automated ISO 27001 Document Retrieval & LLM Verification",
    blurb:
      "Integrated OpenAI GPT models with corporate spreadsheet vaults and document databases to automate compliance audits and answer real-time security queries for engineers.",
    architectureDetails: [
      "Engineered an automated serverless ETL pipeline utilizing AWS Lambda and S3 to ingest structured and unstructured compliance policies.",
      "Implemented semantic search and prompt orchestration to synthesize instant, accurate citations against strict ISO 27001 control clauses.",
      "Connected Google Apps Script automation hooks to eliminate manual spreadsheet auditing workflows.",
      "Protected proprietary company data with strict input sanitization, token limiting, and zero-retention API endpoints.",
    ],
    impact: "Saved compliance officers 12+ hours weekly and reduced internal policy inquiry turnaround from 2 days to under 4 seconds.",
    metrics: [
      { label: "Audit Time Saved", value: "12 hrs / week" },
      { label: "Query Turnaround", value: "< 3.8s" },
      { label: "Clause Accuracy", value: "98.4%" },
    ],
    tags: ["Python", "AWS Lambda", "AWS S3", "OpenAI API", "Google Apps Script", "ISO 27001", "Vector Retrieval"],
    colorBlock: "lilac",
    bgHex: "#c5b0f4",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    githubUrl: "https://github.com/webdev-testa",
    systemDiagram: {
      nodes: [
        { name: "Slack / Apps Script Trigger", type: "Client Event", status: "Connected" },
        { name: "AWS Lambda Orchestrator", type: "Serverless", status: "Triggered" },
        { name: "S3 Document Embeddings Store", type: "Vector Source", status: "Indexed" },
        { name: "OpenAI LLM Inference", type: "Model Engine", status: "Verified" },
      ],
      flow: "Spreadsheet Event -> AWS Lambda -> S3 Knowledge Base -> OpenAI Reasoning -> Verified Compliance Output",
    },
  },
  {
    id: "calorielens-cv",
    title: "CalorieLens Food Vision Detector",
    category: "AI & Machine Learning",
    subtitle: "Deep Learning Bounding Box Classification & Calorie Estimation",
    blurb:
      "Trained a convolutional deep neural network to locate food items in real-time smartphone imagery and calculate nutritional estimates with deep learning bounding boxes.",
    architectureDetails: [
      "Custom fine-tuned TensorFlow / Keras vision models trained over 50,000+ labeled culinary images.",
      "Implemented anchor-box prediction, non-max suppression (NMS), and data augmentation to handle occluded dishes.",
      "Built a high-performance Python FastAPI inference backend capable of returning multi-class predictions in sub-120ms.",
      "Packaged with ONNX runtime for lightweight server deployment and optimized memory footprints.",
    ],
    impact: "Achieved an 89.2% mean Average Precision (mAP) on diverse South-East Asian and Western culinary datasets.",
    metrics: [
      { label: "mAP Accuracy", value: "89.2%" },
      { label: "Inference Speed", value: "115ms" },
      { label: "Classes Detected", value: "120+ foods" },
    ],
    tags: ["Python", "TensorFlow", "FastAPI", "OpenCV", "Pandas", "Jupyter", "Computer Vision"],
    colorBlock: "coral",
    bgHex: "#f3c9b6",
    image: "https://images.unsplash.com/photo-1493770348161-369560ae357d?q=80&w=1000&auto=format&fit=crop",
    githubUrl: "https://github.com/webdev-testa",
    systemDiagram: {
      nodes: [
        { name: "Camera Stream / JPEG", type: "Input", status: "Stream" },
        { name: "FastAPI Preprocessor", type: "Tensor Pipeline", status: "Normalized" },
        { name: "TensorFlow CNN Model", type: "Inference", status: "Calculated" },
        { name: "Nutritional JSON API", type: "Output", status: "Structured" },
      ],
      flow: "Image Upload -> Fast Matrix Normalization -> CNN Bounding Boxes -> Nutritional Metadata Engine",
    },
  },
  {
    id: "zero-knowledge-vault",
    title: "Zero-Knowledge Cloud File Vault",
    category: "Security & Cloud",
    subtitle: "End-to-End Client-Side AES-256 GCM Encrypted Object Store",
    blurb:
      "A zero-trust cryptographic cloud storage system where encryption keys never touch server memory, guaranteeing zero-knowledge privacy for sensitive files.",
    architectureDetails: [
      "Engineered browser-side Web Crypto API key derivation utilizing PBKDF2 with 250,000 iterations and salt hashing.",
      "Stream-based chunked AES-GCM 256 encryption ensuring minimal memory consumption during large file uploads.",
      "Node.js & Express REST microservice handling encrypted binary blobs stored in chunked MongoDB GridFS clusters.",
      "Rigorous replay-attack defense using ephemeral cryptographically random nonces and time-bounded signature headers.",
    ],
    impact: "Mathematically guarantees that even full database compromise reveals zero readable plaintext to unauthorized actors.",
    metrics: [
      { label: "Cipher Standard", value: "AES-256 GCM" },
      { label: "Server Key Exposure", value: "0% (Zero-Knowledge)" },
      { label: "KDF Iterations", value: "250,000" },
    ],
    tags: ["Node.js", "Express", "CryptoJS", "Web Crypto API", "MongoDB", "Cybersecurity", "Zero-Knowledge"],
    colorBlock: "navy",
    bgHex: "#1f1d3d",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=1000&auto=format&fit=crop",
    githubUrl: "https://github.com/webdev-testa",
    systemDiagram: {
      nodes: [
        { name: "Client Browser (PBKDF2 Key Derivation)", type: "Client Sandbox", status: "Encrypted" },
        { name: "Encrypted Binary Cipher Stream", type: "Transport (TLS 1.3)", status: "Sealed" },
        { name: "Node.js Storage Gateway", type: "Blind Proxy", status: "Zero-Knowledge" },
        { name: "Encrypted Blob Store (MongoDB)", type: "Vault Storage", status: "Encrypted" },
      ],
      flow: "Plaintext -> Client WebCrypto AES-256 -> Cipher Stream -> Blind Storage Node -> Encrypted Disk",
    },
  },
  {
    id: "supply-chain-radar",
    title: "Real-Time Supply Chain Telemetry Radar",
    category: "Full Stack & Realtime",
    subtitle: "Reactive WebSocket Inventory Stream & Shortage Forecaster",
    blurb:
      "A high-frequency reactive monitoring hub visualizing cross-regional warehouse telemetry, automated low-stock triggers, and dispatch re-routing via bi-directional WebSockets.",
    architectureDetails: [
      "Built a bi-directional WebSocket cluster with Spring Boot STOMP and Redis Pub/Sub backplane for horizontal scale.",
      "Engineered automatic reconnection with exponential backoff and message deduplication under packet loss.",
      "Integrated reactive React front-end using real-time canvas gauges and audio-visual alert dispatching.",
      "Capable of broadcasting 5,000+ live warehouse telemetry pulses per second with sub-20ms propagation latency.",
    ],
    impact: "Reduced simulated warehouse stockout detection time from 45 minutes to under 2 seconds.",
    metrics: [
      { label: "Broadcast Latency", value: "< 18ms" },
      { label: "Telemetry Pulses/s", value: "5,000+" },
      { label: "Connection Uptime", value: "99.99%" },
    ],
    tags: ["Java", "Spring Boot", "WebSockets", "Socket.IO", "React", "TypeScript", "Redis Pub/Sub"],
    colorBlock: "mint",
    bgHex: "#c8e6cd",
    image: "https://images.unsplash.com/photo-1586528116311-ad8ed7c663e0?q=80&w=1000&auto=format&fit=crop",
    githubUrl: "https://github.com/webdev-testa",
    systemDiagram: {
      nodes: [
        { name: "Warehouse IoT Sensors", type: "Data Producers", status: "Streaming" },
        { name: "Spring Boot WebSocket Gateway", type: "Connection Hub", status: "Connected" },
        { name: "Redis Pub/Sub Backplane", type: "Message Bus", status: "Active" },
        { name: "React Command Center", type: "Reactive UI", status: "Live Synchronized" },
      ],
      flow: "Telemetry Beacon -> WebSocket Gateway -> Redis Bus -> Reactive Canvas Client",
    },
  },
  {
    id: "flowcluster-traffic",
    title: "FlowCluster Smart Traffic ML Engine",
    category: "AI & Machine Learning",
    subtitle: "Unsupervised Clustering & Congestion Rerouting Microservice",
    blurb:
      "A high-performance FastAPI microservice running Scikit-Learn spatial clustering and heuristic graph traversal algorithms to route municipal traffic away from chokepoints.",
    architectureDetails: [
      "Integrated spatial DBSCAN and K-Means algorithms to group GPS waypoint bottlenecks dynamically.",
      "Integrated Redis GeoSpatial indices for O(log(N)) nearby road node lookups.",
      "Engineered automated fallback route generation with Dijkstra heuristic cost penalization on jammed segments.",
      "Asynchronous non-blocking worker pools orchestrated with Uvicorn and Docker containerization.",
    ],
    impact: "Demonstrated 22% estimated travel time savings across simulated dense urban corridor simulations.",
    metrics: [
      { label: "Route Computation", value: "< 28ms" },
      { label: "Travel Time Saved", value: "~22%" },
      { label: "Spatial Lookups", value: "Redis Geo" },
    ],
    tags: ["Python", "FastAPI", "Scikit-Learn", "Redis Geo", "Dijkstra Algorithm", "Docker", "Spatial Data"],
    colorBlock: "cream",
    bgHex: "#f4ecd6",
    image: "https://images.unsplash.com/photo-1510006851064-e6056cd0e3a8?q=80&w=1000&auto=format&fit=crop",
    githubUrl: "https://github.com/webdev-testa",
    systemDiagram: {
      nodes: [
        { name: "GPS Coordinate Stream", type: "Spatial Feed", status: "Ingested" },
        { name: "FastAPI Async Router", type: "API Layer", status: "Dispatched" },
        { name: "DBSCAN Cluster Engine", type: "ML Core", status: "Clustered" },
        { name: "Redis Geospatial Cache", type: "Memory Layer", status: "Fast Hit" },
      ],
      flow: "GPS Coordinates -> FastAPI -> Scikit-Learn Cluster -> Dijkstra Heuristic -> Rerouted Coordinates",
    },
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    company: "LG Sinar Mas",
    role: "C#/.NET & Java Spring Boot Developer",
    period: "June 2025 — Present",
    type: "Full-Time",
    location: "Jakarta, Indonesia (Onsite)",
    badgeColor: "#dceeb1",
    bullets: [
      "Engineered robust, maintainable back-end microservices for the company's enterprise recruitment and assessment portal.",
      "Designed and deployed granular authorization and role-based authentication layers protecting confidential candidate evaluations.",
      "Diagnosed and resolved critical bottleneck bugs in core database transaction flows, improving overall request reliability.",
      "Collaborated across cross-functional engineering teams to implement clean architecture patterns and CI/CD pipelines.",
    ],
    technologies: ["Java", "Spring Boot", "C#", ".NET Core", "PostgreSQL", "REST APIs", "Docker", "Git"],
  },
  {
    company: "Bangkit Academy (Google, GoTo, Traveloka)",
    role: "Machine Learning Mentor & Capstone Lead",
    period: "Feb 2024 — July 2024",
    type: "Mentorship",
    location: "Bandung / Remote",
    badgeColor: "#c5b0f4",
    bullets: [
      "Mentored 50+ prospective AI engineers through Google's flagship technology curriculum across deep learning, computer vision, and NLP.",
      "Provided architectural guidance and code reviews for capstone projects, ensuring production-grade deployment on cloud instances.",
      "Conducted weekly live technical consultation sessions, debugging complex TensorFlow training pipelines and model convergence issues.",
      "Evaluated final capstone submissions against industry-standard software engineering and ethical AI criteria.",
    ],
    technologies: ["Python", "TensorFlow", "Keras", "Scikit-Learn", "Google Cloud Platform", "FastAPI", "Jupyter"],
  },
  {
    company: "Mekari",
    role: "Information Security & Compliance Engineer",
    period: "June 2023 — June 2024",
    type: "Compliance & Security",
    location: "Jakarta, Indonesia (Hybrid)",
    badgeColor: "#f4ecd6",
    bullets: [
      "Designed serverless Python & OpenAI automated workflows connected with corporate spreadsheets to query security policies in seconds.",
      "Audited application logs, API endpoints, and network activity to proactively surface vulnerabilities and anomalous behaviors.",
      "Partnered with product developers to enforce ISO 27001 standard practices, data sanitization, and secure access management.",
      "Authored security checklist automations that reduced quarterly compliance audit preparation time by over 40%.",
    ],
    technologies: ["Python", "OpenAI API", "AWS Lambda", "AWS S3", "ISO 27001", "InfoSec", "Google Apps Script"],
  },
];

export const INITIAL_STICKY_NOTES: StickyNote[] = [
  {
    id: "note-1",
    author: "Tech Lead",
    role: "Enterprise Systems",
    content: "Clean Spring Boot architecture! Loving the clean separation of concerns on the RBAC portal.",
    color: "lime",
    rotation: -2,
    likes: 24,
    tag: "Architecture",
  },
  {
    id: "note-2",
    author: "Ammardito",
    role: "Author",
    content: "💡 Tip: Always benchmark database execution plans with EXPLAIN ANALYZE before optimizing code!",
    color: "lilac",
    rotation: 3,
    likes: 42,
    tag: "Engineering Philosophy",
  },
  {
    id: "note-3",
    author: "ML Researcher",
    role: "Computer Vision",
    content: "89.2% mAP with bounding boxes on complex food imagery is seriously impressive work.",
    color: "coral",
    rotation: -4,
    likes: 19,
    tag: "Machine Learning",
  },
  {
    id: "note-4",
    author: "Security Auditor",
    role: "ISO 27001 Lead",
    content: "Zero-knowledge encryption where the server never sees the plaintext key is gold standard.",
    color: "mint",
    rotation: 1,
    likes: 31,
    tag: "Cybersecurity",
  },
  {
    id: "note-5",
    author: "Recruiter",
    role: "Talent Acquisition",
    content: "Strong balance of Java enterprise robustness and modern AI/Cloud versatility! 🌟",
    color: "pink",
    rotation: 2,
    likes: 18,
    tag: "Hireable",
  },
];

export const SKILL_CATEGORIES = [
  {
    name: "Backend Core & Frameworks",
    color: "lime",
    skills: [
      { name: "Java (17/21)", level: 95, exp: "3+ years", highlight: true },
      { name: "Spring Boot 3", level: 92, exp: "3+ years", highlight: true },
      { name: "Node.js & Express", level: 88, exp: "2+ years", highlight: false },
      { name: "Python & FastAPI", level: 90, exp: "3+ years", highlight: true },
      { name: "C# & .NET Core", level: 80, exp: "1+ years", highlight: false },
      { name: "REST & GraphQL", level: 94, exp: "3+ years", highlight: false },
      { name: "WebSockets & STOMP", level: 88, exp: "2+ years", highlight: true },
    ],
  },
  {
    name: "Data & Caching Engines",
    color: "lilac",
    skills: [
      { name: "PostgreSQL", level: 92, exp: "3+ years", highlight: true },
      { name: "Redis (Pub/Sub & Geo)", level: 89, exp: "2+ years", highlight: true },
      { name: "MongoDB & GridFS", level: 85, exp: "2+ years", highlight: false },
      { name: "SQL Query Tuning", level: 90, exp: "3+ years", highlight: true },
      { name: "AWS S3 Object Storage", level: 88, exp: "2+ years", highlight: false },
    ],
  },
  {
    name: "AI & Machine Learning",
    color: "coral",
    skills: [
      { name: "TensorFlow & Keras", level: 90, exp: "2+ years", highlight: true },
      { name: "Scikit-Learn", level: 92, exp: "3+ years", highlight: true },
      { name: "OpenAI API & RAG", level: 94, exp: "2+ years", highlight: true },
      { name: "Computer Vision (CNN)", level: 88, exp: "2+ years", highlight: true },
      { name: "Pandas & NumPy", level: 94, exp: "3+ years", highlight: false },
    ],
  },
  {
    name: "Security, Cloud & DevOps",
    color: "mint",
    skills: [
      { name: "ISO 27001 Standards", level: 92, exp: "2+ years", highlight: true },
      { name: "AES-256 & Cryptography", level: 90, exp: "2+ years", highlight: true },
      { name: "Docker & Containers", level: 88, exp: "2+ years", highlight: false },
      { name: "AWS Lambda & Cloud", level: 85, exp: "2+ years", highlight: false },
      { name: "JWT & OAuth2 RBAC", level: 94, exp: "3+ years", highlight: true },
    ],
  },
];

export const TESTIMONIALS = [
  {
    name: "Sarah Jenkins",
    role: "CTO at TechFlow Systems",
    content:
      "Ammardito completely overhauled our notification backend. Where we used to have hours of delay under high load, our new microservices stack handles peaks effortlessly with zero packet drop.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    verified: "Verified Client Recommendation",
  },
  {
    name: "Budi Santoso",
    role: "Lead Machine Learning Engineer",
    content:
      "We brought Ammardito in to help us optimize our image processing models. His insights into TensorFlow reduced our inference times by 40% while saving immense cloud compute costs.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    verified: "Peer Review · Bangkit Academy",
  },
  {
    name: "Emily Chen",
    role: "Product & Engineering Manager",
    content:
      "Having a backend developer who fundamentally understands both security compliance (ISO 27001) and machine learning is incredibly rare. He delivered our automated policy system flawlessly.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
    verified: "Verified Colleague · Mekari",
  },
];

export const MOCK_API_ENDPOINTS = [
  {
    endpoint: "GET /api/v1/health",
    title: "System Health & Uptime",
    description: "Inspect live JVM metrics, active threads, memory allocation, and database connectivity pool status.",
    response: {
      status: "HEALTHY",
      uptime: "99.98%",
      runtime: "Java 21 OpenJDK / Spring Boot 3.3.0",
      memory: {
        heapUsed: "142MB",
        heapMax: "512MB",
        threadCount: 24,
      },
      database: {
        pool: "HikariCP",
        activeConnections: 3,
        idleConnections: 7,
        latencyMs: 1.4,
      },
      nodeLocation: "ap-southeast-3 (Jakarta)",
    },
  },
  {
    endpoint: "POST /api/v1/job-portal/auth-check",
    title: "RBAC Authorization Verification",
    description: "Test role validation and token claim decoding for enterprise recruitment endpoints.",
    response: {
      authenticated: true,
      subject: "engineer@ammardito.dev",
      role: "ROLE_LEAD_BACKEND_ENGINEER",
      authorities: [
        "PERM_READ_ARCHITECTURE",
        "PERM_EXECUTE_API_TEST",
        "PERM_DISPATCH_INTERVIEW_INVITE",
      ],
      jwtClaimValid: true,
      expiresIn: "86400s",
      signatureVerified: true,
    },
  },
  {
    endpoint: "POST /api/v1/ml/food-detect",
    title: "CalorieLens Food Detection Demo",
    description: "Simulate deep learning model inference output over sample culinary tensor inputs.",
    response: {
      model: "CalorieLens-TensorFlow-v2.4",
      inferenceLatencyMs: 114.8,
      detectedItems: [
        {
          label: "Nasi Goreng Special",
          confidence: 0.942,
          boundingBox: [42, 60, 280, 310],
          estimatedCalories: 480,
          macros: { carbs: "58g", protein: "18g", fats: "16g" },
        },
        {
          label: "Satay Ayam (4 skewers)",
          confidence: 0.918,
          boundingBox: [320, 95, 480, 240],
          estimatedCalories: 260,
          macros: { carbs: "8g", protein: "24g", fats: "12g" },
        },
      ],
      totalMealCalories: 740,
    },
  },
  {
    endpoint: "GET /api/v1/security/compliance-audit",
    title: "ISO 27001 Automated Compliance Check",
    description: "Simulate automated control clause validation via serverless OpenAI retrieval engine.",
    response: {
      framework: "ISO/IEC 27001:2022",
      overallCompliance: "99.4%",
      checkedClauses: [
        { clause: "A.8.20", name: "Network Security Controls", status: "PASS", verifiedBy: "Automated Log Scanner" },
        { clause: "A.8.24", name: "Use of Cryptography (AES-256)", status: "PASS", verifiedBy: "Zero-Knowledge Rule" },
        { clause: "A.9.2.1", name: "User Registration & RBAC Access", status: "PASS", verifiedBy: "JWT Filter Audit" },
      ],
      lastAuditTimestamp: "2026-08-08T14:40:00Z",
      riskScore: "LOW (0.02)",
    },
  },
];
