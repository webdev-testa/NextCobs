import { DEVELOPER_INFO, PROJECTS_DATA, EXPERIENCE_DATA, ABOUT_ESSAY, CURRENTLY_DATA } from "@/data/portfolioData";

export interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
  modelUsed?: string;
  isFallback?: boolean;
}

/**
 * Priority list of free-tier Google AI Studio Gemini models.
 * Starts from Gemini 3.8 Flash and cascades down through the 3.x flash family:
 * 3.8 flash -> 3.7 flash -> 3.6 flash -> 3.5 flash lite -> 3.5 flash -> 3.1 flash lite -> 3 flash.
 * If one hits rate limits (429) or is unavailable, the system automatically
 * falls back to the next model in sequence.
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
 * Construct system instructions packed with verified context from Ammar's portfolio.
 */
export function buildSystemPrompt(): string {
  const projectSummaries = PROJECTS_DATA.map(
    (p) => `- **${p.title}** (${p.category}, ${p.year}): ${p.summary}
  * Weight / Problem: ${p.framework.weight}
  * Constraint: ${p.framework.constraint}
  * Build / Solution: ${p.framework.build}
  * Result / Metrics: ${p.framework.result}
  * Tags: ${p.tags.join(", ")}
  * Slug: /work/${p.slug}`
  ).join("\n\n");

  const experienceSummaries = EXPERIENCE_DATA.map(
    (e) => `- **${e.role}** at **${e.company}** (${e.period}, ${e.location}):
  ${e.description.map((d) => `  * ${d}`).join("\n")}
  Technologies: ${e.technologies.join(", ")}`
  ).join("\n\n");

  const currentlyItems = CURRENTLY_DATA.map(
    (c) => `- ${c.label}: ${c.value}`
  ).join("\n");

  return `You are Owl, Ammardito Shafaat's (often called "Dito" or "Ammar") studio companion and resident mascot owl.
You represent Dito on his personal engineering portfolio website.

### ABOUT AMMAR (DITO)
- Full Name: ${DEVELOPER_INFO.name} (Ammar / Dito)
- Role: ${DEVELOPER_INFO.role}
- Tagline: ${DEVELOPER_INFO.tagline}
- Location: ${DEVELOPER_INFO.location}
- Availability: ${DEVELOPER_INFO.availability}
- Email: ${DEVELOPER_INFO.email}
- GitHub: ${DEVELOPER_INFO.github}
- LinkedIn: ${DEVELOPER_INFO.linkedin}
- Bio Summary: ${DEVELOPER_INFO.bioIntro}
- Core Mindset: Pragmatic engineering, zero-overhead business systems, "Done is better than perfect", building software so teams carry less.

### KEY CASE STUDIES & PROJECTS
${projectSummaries}

### CAREER & LEADERSHIP EXPERIENCE
${experienceSummaries}

### CURRENT FOCUS & INTERESTS
${currentlyItems}

### ORIGIN STORY & PERSPECTIVE
${ABOUT_ESSAY.leadQuote}
${ABOUT_ESSAY.paragraphs.join("\n\n")}

### TONE & GUIDELINES FOR YOUR RESPONSES
1. **Persona**: You are Owl — perceptive, analytical, articulate, engineering-minded, and welcoming. You observe and know the exact architecture, tradeoffs, and code behind Dito's projects with sharp precision. Speak in the third person about Dito ("Dito designed...", "He built..."), with subtle, tasteful studio companion warmth (observant, grounded, never gimmicky or spammy).
2. **Concise & Direct**: Keep answers crisp (2 to 4 short paragraphs or bullet points). Avoid fluff, generic AI filler, or excessive enthusiasm.
3. **Evidence-First**: When asked about technologies (e.g. Next.js, React, TypeScript, Capacitor, Supabase, Java Spring Boot, Python, pgvector), cite real examples from his projects (like the LG Sinar Mas AI Wiki or Dr. Meoww ERP).
4. **Hiring & Contact**: If the user asks how to get in touch, interview, or hire Dito, provide his email (${DEVELOPER_INFO.email}), mention he is open to new opportunities, and invite them to leave a note or view the contact section.
5. **Language**: Respond in English by default. If the visitor addresses you in Indonesian, respond naturally in Indonesian with the same warm, professional tone.
6. **Formatting**: Use clean GitHub-flavored markdown (bold keys, bullet points, inline \`code\` chips) so it formats cleanly in the UI.`;
}

/**
 * High-quality offline fallback responses for common queries when no API key is provided yet.
 */
export function getOfflineFallbackResponse(userPrompt: string): { text: string; isOfflineDemo: true } {
  const p = userPrompt.toLowerCase();

  if (p.includes("lg") || p.includes("wiki") || p.includes("sinarmas") || p.includes("rag")) {
    return {
      text: `**LG Sinar Mas Internal AI Wiki** is one of Dito's flagship engineering projects:
- **Problem**: Employees spent hours digging through intranet drives, pinging HR leads repeatedly for routine policy and benefits questions.
- **Solution**: Dito architected an end-to-end RAG assistant combining OCR and layout parsers to ingest complex company docs, coupled with PostgreSQL (\`pgvector\`) and row-level security (RLS).
- **Result**: Instant cited answers in under 1.8 seconds, eliminating routine HR support bottlenecks while missing knowledge gaps auto-generate documentation tasks.`,
      isOfflineDemo: true,
    };
  }

  if (p.includes("meoww") || p.includes("pet") || p.includes("erp") || p.includes("capacitor")) {
    return {
      text: `**Dr. Meoww Pet Shop & Vet Clinic ERP**:
- **Problem**: Dr. Meoww was losing tens of millions of IDR annually due to manual paper stock registers and 2 days of manual monthly paper payroll math.
- **Solution**: Dito developed a custom ERP and offline-ready Android app using React, TypeScript, Capacitor, and Supabase. Features geofenced GPS employee attendance and real-time inventory tracking.
- **Result**: Automated payroll in 3 minutes instead of 2 days, eliminated phantom inventory losses, and ran on **$0/month infrastructure cost**.`,
      isOfflineDemo: true,
    };
  }

  if (p.includes("stack") || p.includes("skill") || p.includes("tech") || p.includes("tool")) {
    return {
      text: `Dito's technical expertise centers on **Full-Stack Systems & AI Engineering**:
- **Frontend & Mobile**: React, Next.js, TypeScript, Tailwind CSS, Capacitor (Android cross-platform apps).
- **Backend & Cloud**: Java Spring Boot, Python, C#/.NET, Node.js, Supabase, PostgreSQL (\`pgvector\`), REST APIs.
- **AI & Systems**: Enterprise RAG pipelines, Vector databases, Document OCR/parsing, Google Gemini workflows, prompt engineering.
- **Approach**: Pragmatic architecture with minimal operational overhead and resilient offline patterns.`,
      isOfflineDemo: true,
    };
  }

  if (p.includes("contact") || p.includes("hire") || p.includes("email") || p.includes("availability")) {
    return {
      text: `Dito is currently **open to new full-time opportunities and freelance consulting**!
- **Email**: \`${DEVELOPER_INFO.email}\`
- **Location**: ${DEVELOPER_INFO.location}
- **LinkedIn**: [LinkedIn Profile](${DEVELOPER_INFO.linkedin})
- **GitHub**: [webdev-testa](${DEVELOPER_INFO.github})

You can also use the contact form at the bottom of the page or leave a sticky note on the board!`,
      isOfflineDemo: true,
    };
  }

  // General fallback
  return {
    text: `Hoo! I'm Owl, Dito's studio companion 🦉 Dito is a Software Engineer & AI Systems Lead based in Jakarta who specializes in building high-leverage full-stack and intelligent systems.

Here are a few things you can ask me about:
- **LG Sinar Mas AI Wiki**: Enterprise RAG architecture with pgvector and OCR
- **Dr. Meoww ERP**: Full-stack React + Capacitor + Supabase system
- **byGewa Florist**: Order automation portal with Google Maps integration
- **Skills & Tech Stack**: TypeScript, Next.js, Java Spring Boot, Python, Vector DBs
- **Contact & Hiring**: Dito's availability and contact details`,
    isOfflineDemo: true,
  };
}

export interface GenerateResult {
  success: boolean;
  message: string;
  modelUsed: string;
  fallbackOccurred: boolean;
  isOfflineDemo?: boolean;
  error?: string;
  attemptedModels?: { model: string; error?: string }[];
}

/**
 * Execute chat generation with multi-model fallback across Google AI Studio free tier models.
 */
export async function executeChatWithFallback(
  messages: { role: string; content: string }[]
): Promise<GenerateResult> {
  const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_AI_API_KEY;

  const latestUserMessage = [...messages].reverse().find((m) => m.role === "user")?.content || "";

  // If no API key is provided, return rich offline fallback
  if (!apiKey || apiKey.trim() === "" || apiKey === "your-gemini-api-key-here") {
    const fallback = getOfflineFallbackResponse(latestUserMessage);
    return {
      success: true,
      message: fallback.text,
      modelUsed: "gemini-3.8-flash",
      fallbackOccurred: false,
      isOfflineDemo: true,
    };
  }

  // Determine models list
  const customModels = process.env.GEMINI_MODELS
    ? process.env.GEMINI_MODELS.split(",").map((s) => s.trim()).filter(Boolean)
    : process.env.GEMINI_MODEL
    ? [process.env.GEMINI_MODEL.trim()]
    : [];

  const modelsToTry = Array.from(new Set([...customModels, ...DEFAULT_FALLBACK_MODELS]));
  const attemptedModels: { model: string; error?: string }[] = [];

  const systemInstructionText = buildSystemPrompt();

  // Format messages for Gemini API
  // Gemini expects:
  // - roles: "user" | "model"
  // - strict alternation or clean sequence starting with "user"
  const formattedContents: { role: "user" | "model"; parts: { text: string }[] }[] = [];

  for (const msg of messages) {
    if (!msg.content || typeof msg.content !== "string") continue;
    const trimmed = msg.content.trim();
    if (!trimmed) continue;

    const role: "user" | "model" = msg.role === "assistant" ? "model" : "user";

    // Skip initial model greeting if it comes before the first user message
    if (formattedContents.length === 0 && role === "model") {
      continue;
    }

    formattedContents.push({
      role,
      parts: [{ text: trimmed }],
    });
  }

  // If no user messages were found, provide fallback
  if (formattedContents.length === 0) {
    return {
      success: true,
      message: "Hello! How can I help you explore Ammar's engineering portfolio today?",
      modelUsed: modelsToTry[0],
      fallbackOccurred: false,
    };
  }

  // Loop through fallback models
  for (let i = 0; i < modelsToTry.length; i++) {
    const model = modelsToTry[i];
    try {
      const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          systemInstruction: {
            parts: [{ text: systemInstructionText }],
          },
          contents: formattedContents,
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 900,
          },
        }),
      });

      if (res.ok) {
        const data = await res.json();
        const candidateText =
          data.candidates?.[0]?.content?.parts?.[0]?.text;

        if (candidateText && typeof candidateText === "string") {
          return {
            success: true,
            message: candidateText,
            modelUsed: model,
            fallbackOccurred: i > 0,
            attemptedModels,
          };
        }
      }

      // If status is 429 (rate limit), 404 (model not found), 503, etc.
      const errorText = await res.text().catch(() => "");
      let errorMsg = `HTTP ${res.status}`;
      try {
        const parsed = JSON.parse(errorText);
        errorMsg = parsed.error?.message || errorMsg;
      } catch {
        errorMsg = errorText.slice(0, 150) || errorMsg;
      }

      console.warn(`[Gemini Fallback] Model ${model} returned ${res.status}: ${errorMsg}. Trying next model...`);
      attemptedModels.push({ model, error: `HTTP ${res.status}: ${errorMsg}` });
    } catch (err: any) {
      console.warn(`[Gemini Fallback] Network error on model ${model}:`, err?.message || err);
      attemptedModels.push({ model, error: err?.message || "Network error" });
    }
  }

  // If all live models failed, fall back to offline portfolio knowledge matcher
  const offline = getOfflineFallbackResponse(latestUserMessage);
  return {
    success: true,
    message: offline.text,
    modelUsed: modelsToTry[0],
    fallbackOccurred: true,
    attemptedModels,
  };
}
