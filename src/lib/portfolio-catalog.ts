import {
  Project,
  NoteArticle,
  PursuitDetail,
  ExperienceItem,
  DeveloperInfo,
  StickyNote,
  PROJECTS_DATA,
  ARCHIVED_PROJECTS,
  NOTES_DATA,
  PURSUITS_DATA,
  EXPERIENCE_DATA,
  DEVELOPER_INFO,
  CURRENTLY_DATA,
  INITIAL_STICKY_NOTES,
} from "@/data/portfolioData";

export type { Project, NoteArticle, PursuitDetail, ExperienceItem, DeveloperInfo, StickyNote };

// Pre-indexed lookup maps for constant-time lookups
const allProjectsList: Project[] = [...PROJECTS_DATA, ...ARCHIVED_PROJECTS];
const projectBySlugMap = new Map<string, Project>(allProjectsList.map((p) => [p.slug, p]));
const noteBySlugMap = new Map<string, NoteArticle>(NOTES_DATA.map((n) => [n.slug, n]));
const pursuitBySlugMap = new Map<string, PursuitDetail>(Object.values(PURSUITS_DATA).map((p) => [p.slug, p]));

/**
 * Projects queries
 */
export function getAllProjects(): Project[] {
  return allProjectsList;
}

export function getActiveProjects(): Project[] {
  return PROJECTS_DATA;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projectBySlugMap.get(slug);
}

export function getProjectWithNeighbors(slug: string): {
  project: Project;
  prevProject: Project | null;
  nextProject: Project | null;
} | null {
  const index = allProjectsList.findIndex((p) => p.slug === slug);
  if (index === -1) return null;

  return {
    project: allProjectsList[index],
    prevProject: index > 0 ? allProjectsList[index - 1] : null,
    nextProject: index < allProjectsList.length - 1 ? allProjectsList[index + 1] : null,
  };
}

export function getProjectCategories(): string[] {
  return ["All", ...Array.from(new Set(PROJECTS_DATA.map((p) => p.category)))];
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === "All") return PROJECTS_DATA;
  return PROJECTS_DATA.filter((p) => p.category === category);
}

export function getSelectedFlagshipProjects(): {
  lgSmWiki: Project;
  drMeoww: Project;
  byGewa: Project;
  internalMigration: Project;
} {
  return {
    lgSmWiki: projectBySlugMap.get("lg-sm-wiki") || PROJECTS_DATA[0],
    drMeoww: projectBySlugMap.get("dr-meoww") || PROJECTS_DATA[1],
    byGewa: projectBySlugMap.get("bygewa") || PROJECTS_DATA[2],
    internalMigration: projectBySlugMap.get("internal-microservices-migration") || PROJECTS_DATA[4],
  };
}

/**
 * Field notes & essays queries
 */
export function getAllNotes(): NoteArticle[] {
  return NOTES_DATA;
}

export function getPublishedNotes(): NoteArticle[] {
  return NOTES_DATA.filter((n) => !n.isDraft);
}

export function getFeaturedNotes(count: number = 2): NoteArticle[] {
  return getPublishedNotes().slice(0, count);
}

export function getNoteBySlug(slug: string): NoteArticle | undefined {
  return noteBySlugMap.get(slug);
}

export function getNoteWithNeighbors(slug: string): {
  note: NoteArticle;
  prevNote: NoteArticle | null;
  nextNote: NoteArticle | null;
} | null {
  const published = NOTES_DATA;
  const index = published.findIndex((n) => n.slug === slug);
  if (index === -1) return null;

  return {
    note: published[index],
    prevNote: index > 0 ? published[index - 1] : null,
    nextNote: index < published.length - 1 ? published[index + 1] : null,
  };
}

/**
 * Pursuits queries
 */
const pursuitsList: PursuitDetail[] = Object.values(PURSUITS_DATA);

export function getAllPursuits(): PursuitDetail[] {
  return pursuitsList;
}

export function getPursuitBySlug(slug: string): PursuitDetail | undefined {
  return PURSUITS_DATA[slug];
}

export function getPursuitWithNeighbors(slug: string): {
  pursuit: PursuitDetail;
  prevPursuit: PursuitDetail | null;
  nextPursuit: PursuitDetail | null;
} | null {
  const index = pursuitsList.findIndex((p) => p.slug === slug);
  if (index === -1) return null;

  return {
    pursuit: pursuitsList[index],
    prevPursuit: index > 0 ? pursuitsList[index - 1] : null,
    nextPursuit: index < pursuitsList.length - 1 ? pursuitsList[index + 1] : null,
  };
}

/**
 * Profile & Experience
 */
export function getDeveloperProfile(): DeveloperInfo {
  return DEVELOPER_INFO;
}

export function getCareerExperience(): ExperienceItem[] {
  return EXPERIENCE_DATA;
}

export function getCurrentlyExploring(): typeof CURRENTLY_DATA {
  return CURRENTLY_DATA;
}

export function getInitialNotes(): StickyNote[] {
  return INITIAL_STICKY_NOTES;
}
