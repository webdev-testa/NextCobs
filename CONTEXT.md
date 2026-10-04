# Domain Model & Architecture Context

This document establishes the ubiquitous domain language, architectural seams, and design principles for Ammardito Shafaat's portfolio codebase.

## Shared Architectural Vocabulary

Follow the principles from `codebase-design`:

- **Module**: Anything with an interface and an implementation (functions, classes, stateful slices, UI containers). Never substitute _component_, _service_, or _unit_.
- **Interface**: Everything a caller must know to use the module correctly (parameters, return types, ordering constraints, error modes). Never substitute _API_ or _signature_.
- **Implementation**: The body of code inside a module, hidden from callers.
- **Depth**: Leverage at the interface. A module is **deep** when it encapsulates substantial behavior behind a small, simple interface.
- **Seam**: The location where a module's interface lives, allowing behavior to vary without editing the call site.
- **Adapter**: A concrete implementation that satisfies an interface at a seam (e.g. production vs test).
- **Leverage**: Capability callers gain per unit of interface they learn.
- **Locality**: Concentration of change, bugs, and invariants in one place.

---

## Domain Concepts

### 1. Studio Desk Notes

- **Concept**: The interactive visitor guestbook and desk pinboard on the portfolio.
- **Domain Responsibilities**:
  - Loading visitor notes from persistent storage (Turso LibSQL in production, in-memory fake in test).
  - Optimistic UI updates when pinning new notes or liking existing notes.
  - Stamp doodling (sparkle, coffee, chess, code, heart, etc.) and rotation styling.
  - Wall modal view and new note form submission with validation.
- **Good Seam**: A `NotesRepository` adapter seam separating UI state management from SQL persistence.

### 2. Studio Assistant (Soren)

- **Concept**: Dito's studio companion owl, representing his engineering background, architectural decision-making, and project insights to visitors.
- **Domain Responsibilities**:
  - Ingesting verified portfolio facts, case studies, and career history into prompt context.
  - Normalizing message bounds and sanitizing conversation history.
  - Cascading multi-model fallback across Google AI Studio models (Gemini 3.8 Flash downward) with offline fallback heuristics when no key or network is present.
- **Good Seam**: An `AiProvider` adapter seam separating prompt assembly and fallback sequencing from the Google AI Studio HTTP transport.

### 3. Portfolio Catalog

- **Concept**: The static repository of case studies, career experience, personal reflections/notes, and off-screen pursuits.
- **Domain Responsibilities**:
  - Pre-indexing case studies and notes by slug.
  - Circular neighbor pagination (previous/next case study or note).
  - Category filtering and draft visibility rules.
- **Good Seam**: A high-leverage in-process query interface (`getProjectWithNeighbors`, `getPublishedNotes`, `getFeaturedProjects`) that hides raw array representations from page views.

### 4. Studio Companion Mascot

- **Concept**: Mascot Soren (`MascotOwl`), Dito's sole resident vector mascot representing nocturnal stamina, wisdom, and analytical vision. Mascot Cat has been retired.
