# Portfolio — Content & Structure (v2, critique applied)

**Core thread:**
> I build things so other people can carry less.

**Route objectives:**
| Route | Job |
|---|---|
| `/` Home | Make them curious |
| `/about` | Make them understand |
| `/work` | Make them trust |
| `/notes` | Make them remember |

**Visual direction — LOCKED:** Editorial / tactile minimalism. Strong typography, generous whitespace, restrained interface, monospace as an accent (not the whole identity), slightly imperfect/tactile touches. Not terminal/dark-hacker aesthetic — content is about people, weight, curiosity, craft, not "look I'm a software engineer."

---

## NAVIGATION
```
Ammar        Work   About   Notes   ↗ GitHub   Contact
```

## HOME — HERO
```
Ammardito Shafaat
Software Engineer

I build things so other people can carry less.

[See Selected Work ↓]   [Read About Me →]
```

## HOME — SELECTED WORK
*The stuff I'm proudest of — usually because someone was drowning in busywork before I touched it.* ⟵ (revised, was too buzzwordy)

**LG SM Wiki** · LG Sinarmas — Enterprise AI Knowledge Assistant
Employees spent hours digging through scattered drives and pinging HR for routine policy answers. Built a RAG assistant that parses messy documents, respects department access boundaries, and auto-escalates missing knowledge into tickets.
`RAG Pipeline` `Document OCR` `Row-Level Access` `Self-Healing Docs`

**Dr. Meoww** · Freelance — Clinic Operations System
A busy clinic drowning in paper logs, patient records, attendance, payroll — no budget for an enterprise ERP. Built a unified system on Supabase RLS and native mobile geolocation via Capacitor.
`React / TypeScript` `Supabase RLS` `Capacitor Geolocation` `Zero-Cost Infra`

**byGewa** · Freelance — Zero-Cost Custom Ordering Engine
A boutique florist lost hours manually transcribing WhatsApp orders. Replaced it with an ordering engine running entirely on Apps Script, Sheets, and Drive.
`Vercel` `Google Apps Script` `Google Sheets DB` `$0/mo Overhead`

**Automated Fleet Metric Extraction** · Personal Project
Turned a full day of manually checking 100+ servers into a two-hour unattended script using headless automation and PaddleOCR.
`Python` `PaddleOCR` `Headless Automation` `Audit Reporting`

[View all projects →]

## HOME — WHY I WORK
> I wanted a comfortable life, room to explore my own curiosity, and work I genuinely enjoy doing. I don't think wanting that makes work meaningless. I just want the things I build to be useful while I'm doing it.
>
> I can't carry what other people carry. But I can build things that make the weight lighter.
>
> That's what solving problems means to me: building things well enough that someone else's job gets easier. ⟵ (revised — dropped the "not charity or self-sacrifice" defensiveness)

[Read the longer backstory →]

## HOME — THINGS I SPEND TIME ON
- **Stories** (Books, Film, Anime) — Living inside someone else's perspective for a few hours. Fastest way to shake off your own assumptions.
- **Games** (Souls-likes, Chess) — Less about plot, more about the grind. Effort cleanly equals outcome — no noise, no politics.
- **Getting Better at Things** (Gym, Running, Badminton, Archery) — Everyone starts bad at everything. Watching yourself slowly improve never stops feeling good.
- **Travel** — Safar is encouraged in Islam, and I understand why. Unfamiliar places make you feel small in the best way.

## HOME — CURRENTLY
- Reading: speculative fiction and systems design essays
- Playing: pattern-heavy boss encounters
- Training: 10km pacing, push-pull volume
- Building: offline-first sync patterns

## HOME — NOTES PREVIEW
- The $0 Backend: Why Postgres Is Sometimes the Wrong Tool
- Escaping Webview Limitations with Capacitor

## HOME — CONTACT
Always open to discussing system architecture, lightweight tooling, or hard-fought boss encounters.
Email • GitHub • LinkedIn

---

## ABOUT — "How I Got Here"

Growing up, the people held up as models of purpose were doctors, soldiers, teachers — anyone whose whole career exists for others at personal cost. That was never what I wanted. I wanted a comfortable life, room to experiment, curiosity without guilt.

I studied Information Systems Technology — not computer science. It's a solid major if you want to end up in strategy, analysis, documentation. I didn't. Somewhere in my first internship, doing InfoSec work, I got handed a task with nothing to do with my actual job: build a chatbot using Google Sheets. It was small and a little absurd, and it stuck with me more than any planning deck I'd made up to that point.

That was the moment I realized I care less about analyzing a problem and more about actually building the thing that fixes it. Planning tells you what *should* exist. Building is where you find out if it actually works — and where you learn the most, fast, by breaking things and fixing them yourself.

From there I went looking for a way in — machine learning through Bangkit, full-stack courses, Google Cloud Arcade, anything that got me building instead of documenting. Eventually that pointed pretty clearly toward software engineering, and I stuck with it.

I can't carry what people carry by planning around their problems from a distance. But I can carry some of it by actually building the thing that lightens their load.

---

## WORK — Full Case Studies (Weight / Constraint / Build / Result)

**1. LG SM Wiki** — Weight: HR bottleneck & scattered docs. Constraint: messy inputs, strict access rules. Build: end-to-end RAG + OCR ingestion + RBAC + self-healing ticket escalation. Result: instant cited answers, docs improve over time.

**2. Dr. Meoww** — Weight: fragmented clinic ops. Constraint: zero ERP budget, inaccurate browser GPS. Build: React/TS + Supabase RLS + Capacitor native geolocation. Result: enterprise-level control at near-zero cost, shipped in weeks.

**3. byGewa** — Weight: manual WhatsApp order entry. Constraint: small-business margins can't absorb subscription overhead. Build: Vercel frontend + Apps Script/Sheets/Drive as full backend. Result: $0/mo, owner back to designing instead of data entry.

**4. Automated Fleet Metric Extraction** — Weight: full day of manual server checks. Constraint: no API/telemetry access. Build: Python + screenshot capture + PaddleOCR + Excel export. Result: full day → 2 hours unattended.

**5. Internal Microservices Migration** — Weight: brittle monolith, cross-service breakage. Constraint: migrate live internal tools without downtime. Build: led frontend on SSO-based services, inline-editable data tables, shared internal npm package. Result: decoupled dependencies, clean frontend standards.

---

## NOTES — Essay ideas
- The $0 Backend: Why Postgres Is Sometimes the Wrong Tool
- Escaping Webview Limitations with Capacitor
- The Illusion of Enterprise AI: Why Chunking Beats Prompting

(Write 1–2 before launch so this section isn't empty.)

---

## OPEN ITEMS
- [ ] Finalize label for "Getting Better at Things" hobby section if a punchier name comes to mind
- [ ] Write first 1–2 Notes entries
- [ ] Visual build: typography, color, layout on the locked editorial/tactile minimalism direction
