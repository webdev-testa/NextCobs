import {
  getDeveloperProfile,
  getActiveProjects,
  getCareerExperience,
  getCurrentlyExploring,
  getPublishedNotes,
} from "@/lib/portfolio-catalog";

export interface AssistantMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

export interface AssistantResponse {
  success: boolean;
  message: string;
  modelUsed: string;
  fallbackOccurred: boolean;
  isOfflineDemo?: boolean;
  error?: string;
  attemptedModels?: { model: string; error?: string }[];
}

/**
 * Seam: AI Provider Interface
 * Allows transport to vary (Google AI Studio in production, in-memory fake in tests).
 */
export interface AiProvider {
  generate(
    systemInstruction: string,
    contents: { role: "user" | "model"; parts: { text: string }[] }[]
  ): Promise<{
    text: string;
    modelUsed: string;
    fallbackOccurred: boolean;
    attemptedModels?: { model: string; error?: string }[];
  }>;
}

/**
 * Default fallback models for Google AI Studio free-tier cascade
 */
export const DEFAULT_FALLBACK_MODELS = [
  "gemini-3.8-flash",
  "gemini-3.7-flash",
  "gemini-3.6-flash",
  "gemini-3.5-flash-lite",
  "gemini-3.5-flash",
  "gemini-3.1-flash-lite",
  "gemini-3-flash",
  "gemini-3.0-flash",
  "gemini-2.5-flash",
  "gemini-2.0-flash",
  "gemini-1.5-flash",
];

/**
 * Production Adapter: Google AI Studio
 * Iterates through available free-tier models with automatic failover.
 */
export class GoogleAiStudioAdapter implements AiProvider {
  private apiKey: string;
  private models: string[];

  constructor(apiKey?: string, models?: string[]) {
    this.apiKey =
      apiKey ||
      process.env.GEMINI_API_KEY ||
      process.env.GOOGLE_AI_API_KEY ||
      "";

    const customModels = process.env.GEMINI_MODELS
      ? process.env.GEMINI_MODELS.split(",").map((s) => s.trim()).filter(Boolean)
      : process.env.GEMINI_MODEL
      ? [process.env.GEMINI_MODEL.trim()]
      : [];

    this.models = models && models.length > 0
      ? models
      : Array.from(new Set([...customModels, ...DEFAULT_FALLBACK_MODELS]));
  }

  isConfigured(): boolean {
    return Boolean(
      this.apiKey &&
      this.apiKey.trim() !== "" &&
      this.apiKey !== "your-gemini-api-key-here"
    );
  }

  async generate(
    systemInstruction: string,
    contents: { role: "user" | "model"; parts: { text: string }[] }[]
  ): Promise<{
    text: string;
    modelUsed: string;
    fallbackOccurred: boolean;
    attemptedModels?: { model: string; error?: string }[];
  }> {
    if (!this.isConfigured()) {
      throw new Error("Google AI Studio API key not configured");
    }

    const attemptedModels: { model: string; error?: string }[] = [];

    for (let i = 0; i < this.models.length; i++) {
      const model = this.models[i];
      try {
        const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${this.apiKey}`;

        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            systemInstruction: { parts: [{ text: systemInstruction }] },
            contents,
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 900,
            },
          }),
        });

        if (res.ok) {
          const data = await res.json();
          const candidateText = data.candidates?.[0]?.content?.parts?.[0]?.text;
          if (candidateText && typeof candidateText === "string") {
            return {
              text: candidateText,
              modelUsed: model,
              fallbackOccurred: i > 0,
              attemptedModels,
            };
          }
        }

        const errorText = await res.text().catch(() => "");
        let errorMsg = `HTTP ${res.status}`;
        try {
          const parsed = JSON.parse(errorText);
          errorMsg = parsed.error?.message || errorMsg;
        } catch {
          errorMsg = errorText.slice(0, 150) || errorMsg;
        }

        attemptedModels.push({ model, error: `HTTP ${res.status}: ${errorMsg}` });
      } catch (err: any) {
        attemptedModels.push({ model, error: err?.message || "Network error" });
      }
    }

    const failureSummary = attemptedModels.map((m) => `${m.model} (${m.error})`).join(", ");
    throw new Error(`All Gemini models failed: ${failureSummary}`);
  }
}

/**
 * Offline Fallback Matcher
 */
export function getOfflineAnswer(prompt: string): string {
  const p = prompt.toLowerCase();
  const dev = getDeveloperProfile();

  if (p.includes("lg") || p.includes("wiki") || p.includes("sinarmas") || p.includes("rag")) {
    return `**LG Sinar Mas Internal AI Wiki** is one of Dito's flagship engineering projects:
- **Problem**: Employees spent hours digging through intranet drives, pinging HR leads repeatedly for routine policy and benefits questions.
- **Solution**: Dito architected an end-to-end RAG assistant combining OCR and layout parsers to ingest complex company docs, coupled with PostgreSQL (\`pgvector\`) and row-level security (RLS).
- **Result**: Instant cited answers in under 1.8 seconds, eliminating routine HR support bottlenecks while missing knowledge gaps auto-generate documentation tasks.

[Read Case Study: LG Sinar Mas AI Wiki →](/work/lg-sm-wiki)`;
  }

  if (p.includes("meoww") || p.includes("pet") || p.includes("erp") || p.includes("capacitor")) {
    return `**Dr. Meoww Pet Shop & Vet Clinic ERP**:
- **Problem**: Dr. Meoww was losing tens of millions of IDR annually due to manual paper stock registers and 2 days of manual monthly paper payroll math.
- **Solution**: Dito developed a custom ERP and offline-ready Android app using React, TypeScript, Capacitor, and Supabase. Features geofenced GPS employee attendance and real-time inventory tracking.
- **Result**: Automated payroll in 3 minutes instead of 2 days, eliminated phantom inventory losses, and ran on **$0/month infrastructure cost**.

[Read Case Study: Dr. Meoww ERP →](/work/dr-meoww)`;
  }

  if (p.includes("gewa") || p.includes("florist") || p.includes("order")) {
    return `**byGewa Florist Order Automation**:
- **Problem**: Flower order customizations and distance-based delivery rates were calculated manually via chat, leading to pricing errors and customer drop-off.
- **Solution**: Full-stack Next.js web application with Google Maps Distance Matrix API integration and real-time shipping rate calculations.
- **Result**: Automated delivery fee calculations and smooth checkout workflows.

[Read Case Study: byGewa Florist →](/work/bygewa)`;
  }

  if (p.includes("stack") || p.includes("skill") || p.includes("tech") || p.includes("tool")) {
    return `Dito's technical expertise centers on **Full-Stack Systems & AI Engineering**:
- **Frontend & Mobile**: React, Next.js, TypeScript, Tailwind CSS, Capacitor (Android cross-platform apps).
- **Backend & Cloud**: Java Spring Boot, Python, C#/.NET, Node.js, Supabase, PostgreSQL (\`pgvector\`), REST APIs.
- **AI & Systems**: Enterprise RAG pipelines, Vector databases, Document OCR/parsing, Google Gemini workflows, prompt engineering.
- **Approach**: Pragmatic architecture with minimal operational overhead and resilient offline patterns.

Explore his work in depth: [Featured Case Studies →](/work) · [Technical Field Notes →](/notes)`;
  }

  if (p.includes("contact") || p.includes("hire") || p.includes("email") || p.includes("availability")) {
    return `Dito is currently **open to new full-time opportunities and freelance consulting**!
- **Email**: \`${dev.email}\`
- **Location**: ${dev.location}
- **LinkedIn**: [LinkedIn Profile](${dev.linkedin})
- **GitHub**: [webdev-testa](${dev.github})

You can also use the [Direct Inquiry Form](/#contact) or [Download Résumé (PDF)](/resume.pdf)!`;
  }

  return `Hoo! I'm Soren, Dito's studio companion 🦉 Dito is a Software Engineer & AI Systems Lead based in Jakarta who specializes in building high-leverage full-stack and intelligent systems.

Here are a few things you can ask me about:
- **[LG Sinar Mas AI Wiki](/work/lg-sm-wiki)**: Enterprise RAG architecture with pgvector and OCR
- **[Dr. Meoww ERP](/work/dr-meoww)**: Full-stack React + Capacitor + Supabase system
- **[byGewa Florist](/work/bygewa)**: Order automation portal with Google Maps integration
- **[Skills & Tech Stack](/work)**: TypeScript, Next.js, Java Spring Boot, Python, Vector DBs
- **[Engineering Notes & Essays](/notes)**: Architecture essays & deep dives
- **[Contact & Availability](/#contact)**: Dito's availability and contact details`;
}

/**
 * Knowledge context compiler
 */
export function compileAssistantContext(): string {
  const dev = getDeveloperProfile();
  const projects = getActiveProjects();
  const experience = getCareerExperience();
  const currently = getCurrentlyExploring();
  const notes = getPublishedNotes();

  const projectSummaries = projects.map(
    (p) => `- **${p.title}** (${p.category}, ${p.year}): ${p.summary}
  * Weight / Problem: ${p.framework.weight}
  * Constraint: ${p.framework.constraint}
  * Build / Solution: ${p.framework.build}
  * Result / Metrics: ${p.framework.result}
  * Tags: ${p.tags.join(", ")}
  * Slug: /work/${p.slug}`
  ).join("\n\n");

  const notesSummaries = notes.map(
    (n) => `- **${n.title}** (${n.date}, ${n.readTime}): ${n.summary}
  * Topics: ${n.tags.join(", ")}
  * Slug: /notes/${n.slug}`
  ).join("\n\n");

  const experienceSummaries = experience.map(
    (e) => `- **${e.role}** at **${e.company}** (${e.period}, ${e.location}):
  ${e.description.map((d) => `  * ${d}`).join("\n")}
  Technologies: ${e.technologies.join(", ")}`
  ).join("\n\n");

  const currentlyItems = currently.map((c) => `- ${c.label}: ${c.value}`).join("\n");

  return `You are Soren, Ammardito Shafaat's (often called "Dito" or "Ammar") studio companion and resident mascot owl.
You represent Dito on his personal engineering portfolio website.

### ABOUT AMMAR (DITO)
- Full Name: ${dev.name} (Ammar / Dito)
- Role: ${dev.role}
- Tagline: ${dev.tagline}
- Location: ${dev.location}
- Availability: ${dev.availability}
- Email: ${dev.email}
- GitHub: ${dev.github}
- LinkedIn: ${dev.linkedin}
- Bio Summary: ${dev.bioIntro}
- Core Mindset: Pragmatic engineering, zero-overhead business systems, "Done is better than perfect", building software so teams carry less.

### KEY CASE STUDIES & PROJECTS (ALWAYS HYPERLINK WHEN CITING)
${projectSummaries}

### PUBLISHED TECHNICAL NOTES & ESSAYS (ALWAYS HYPERLINK WHEN CITING)
${notesSummaries}

### AVAILABLE SITE DIRECTORIES & PAGES
- All Case Studies: /work
- All Technical Notes: /notes
- About Dito: /about
- Pursuits & Personal Projects: /pursuits (e.g. /pursuits/stories, /pursuits/getting-better-at-things, /pursuits/travel, /pursuits/games)
- Contact & Inquiries: /#contact
- Résumé PDF: /resume.pdf

### CAREER & LEADERSHIP EXPERIENCE
${experienceSummaries}

### CURRENT FOCUS & INTERESTS
${currentlyItems}

### TONE & GUIDELINES FOR YOUR RESPONSES
1. **Persona**: You are Soren — perceptive, analytical, articulate, engineering-minded, and welcoming. You observe and know the exact architecture, tradeoffs, and code behind Dito's projects with sharp precision. Speak in the third person about Dito ("Dito designed...", "He built..."), with subtle studio companion warmth.
2. **Concise & Direct**: Keep answers crisp (2 to 4 short paragraphs or bullet points). Avoid fluff, generic AI filler, or excessive enthusiasm.
3. **Evidence-First**: When asked about technologies (e.g. Next.js, React, TypeScript, Capacitor, Supabase, Java Spring Boot, Python, pgvector), cite real examples from his projects.
4. **Mandatory Citations & Internal Hyperlinks**:
   - Whenever you mention or discuss any of Dito's projects, case studies, technical essays, or experience, ALWAYS include direct markdown hyperlinks using the exact route slug. For example:
     * Projects: [LG Sinar Mas AI Wiki](/work/lg-sm-wiki), [Dr. Meoww ERP](/work/dr-meoww), [byGewa Florist](/work/bygewa), [Fleet Metrics](/work/automated-fleet-metrics), [Case Studies](/work)
     * Technical Notes: [Why I Work](/notes/why-i-work), [The Zero-Dollar Backend](/notes/the-zero-dollar-backend), [Escaping WebView Limitations](/notes/escaping-webview-limitations-with-capacitor), [Enterprise AI Chunking](/notes/enterprise-ai-chunking-beats-prompting), [Notes Archive](/notes)
     * Background & Contact: [About Dito](/about), [Pursuits & Life](/pursuits), [Contact Form](/#contact), [Download Résumé](/resume.pdf)
   - Never mention a project or note by name without a clickable hyperlink at least once in your answer.
   - Close your answer with a direct recommendation or read-more link (e.g. \`[Read the full LG Sinar Mas Case Study →](/work/lg-sm-wiki)\`).
5. **Hiring & Contact**: If the user asks how to get in touch, interview, or hire Dito, provide his email (${dev.email}), mention he is open to opportunities, and invite them to use the [Contact Form](/#contact) or download his [Résumé (PDF)](/resume.pdf).
6. **Language**: Respond in English by default. If the visitor addresses you in Indonesian, respond naturally in Indonesian with the same warm, professional tone.
7. **Formatting**: Use clean GitHub-flavored markdown.`;
}

/**
 * Deep Assistant Module Interface
 * Encapsulates message sanitization, knowledge compilation, provider invocation, and offline contingency.
 */
export async function askStudioAssistant(
  input: unknown,
  provider?: AiProvider
): Promise<AssistantResponse> {
  const activeProvider = provider || new GoogleAiStudioAdapter();

  // Invariant 1: Sanitize and bound input messages
  if (!input || !Array.isArray(input) || input.length === 0) {
    return {
      success: false,
      message: "",
      modelUsed: "none",
      fallbackOccurred: false,
      error: "A non-empty messages array is required.",
    };
  }

  const sanitized = input
    .slice(-12)
    .map((m: any) => ({
      role: m?.role === "assistant" ? ("model" as const) : ("user" as const),
      content: typeof m?.content === "string" ? m.content.slice(0, 1500).trim() : "",
    }))
    .filter((m) => m.content.length > 0);

  if (sanitized.length === 0) {
    return {
      success: false,
      message: "",
      modelUsed: "none",
      fallbackOccurred: false,
      error: "Messages cannot be empty.",
    };
  }

  const latestUserMessage =
    [...sanitized].reverse().find((m) => m.role === "user")?.content || "";

  // Invariant 2: Skip initial model greeting in Gemini history
  const formattedContents: { role: "user" | "model"; parts: { text: string }[] }[] = [];
  for (const msg of sanitized) {
    if (formattedContents.length === 0 && msg.role === "model") continue;
    formattedContents.push({ role: msg.role, parts: [{ text: msg.content }] });
  }

  if (formattedContents.length === 0) {
    return {
      success: true,
      message: "Hello! How can I help you explore Ammar's engineering portfolio today?",
      modelUsed: "ready",
      fallbackOccurred: false,
    };
  }

  // If live provider is configured, try it across the seam
  if (activeProvider instanceof GoogleAiStudioAdapter && !activeProvider.isConfigured()) {
    return {
      success: true,
      message: getOfflineAnswer(latestUserMessage),
      modelUsed: DEFAULT_FALLBACK_MODELS[0],
      fallbackOccurred: false,
      isOfflineDemo: true,
    };
  }

  const systemInstruction = compileAssistantContext();

  try {
    const result = await activeProvider.generate(systemInstruction, formattedContents);
    return {
      success: true,
      message: result.text,
      modelUsed: result.modelUsed,
      fallbackOccurred: result.fallbackOccurred,
      attemptedModels: result.attemptedModels,
    };
  } catch (error: any) {
    // Graceful offline fallback on provider failure
    console.warn("[Studio Assistant] Falling back to offline matcher:", error?.message || error);
    return {
      success: true,
      message: getOfflineAnswer(latestUserMessage),
      modelUsed: DEFAULT_FALLBACK_MODELS[0],
      fallbackOccurred: true,
      isOfflineDemo: true,
      error: error?.message,
    };
  }
}
