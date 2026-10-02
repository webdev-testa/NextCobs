import { createClient } from "@libsql/client";
import { INITIAL_STICKY_NOTES, StickyNote } from "@/data/portfolioData";

export const db = createClient({
  url: process.env.TURSO_DATABASE_URL || "file:local.db",
  authToken: process.env.TURSO_AUTH_TOKEN,
});

let isInitialized = false;

export async function ensureTableInitialized() {
  if (isInitialized) return;

  try {
    await db.execute(`
      CREATE TABLE IF NOT EXISTS sticky_notes (
        id TEXT PRIMARY KEY,
        author TEXT NOT NULL,
        role TEXT NOT NULL,
        content TEXT NOT NULL,
        color TEXT NOT NULL,
        rotation REAL NOT NULL DEFAULT 0,
        likes INTEGER NOT NULL DEFAULT 0,
        tag TEXT NOT NULL DEFAULT 'Community',
        stamp TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // Check if table is empty, seed with initial notes
    const countResult = await db.execute("SELECT COUNT(*) as count FROM sticky_notes;");
    const count = Number(countResult.rows[0]?.count || 0);

    if (count === 0) {
      for (const note of INITIAL_STICKY_NOTES) {
        await db.execute({
          sql: `INSERT INTO sticky_notes (id, author, role, content, color, rotation, likes, tag, stamp)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          args: [
            note.id,
            note.author,
            note.role,
            note.content,
            note.color,
            note.rotation,
            note.likes,
            note.tag,
            note.stamp || null,
          ],
        });
      }
    }

    isInitialized = true;
  } catch (error) {
    console.error("Failed to initialize sticky_notes table in Turso:", error);
    throw error;
  }
}

export async function getAllStickyNotes(): Promise<StickyNote[]> {
  try {
    await ensureTableInitialized();
    const result = await db.execute(
      "SELECT id, author, role, content, color, rotation, likes, tag, stamp FROM sticky_notes ORDER BY created_at DESC;"
    );

    return result.rows.map((row) => ({
      id: String(row.id),
      author: String(row.author),
      role: String(row.role),
      content: String(row.content),
      color: (row.color as StickyNote["color"]) || "lime",
      rotation: Number(row.rotation) || 0,
      likes: Number(row.likes) || 0,
      tag: String(row.tag || "Community"),
      stamp: row.stamp ? String(row.stamp) : undefined,
    }));
  } catch (error) {
    console.error("Error fetching sticky notes:", error);
    // Graceful fallback to initial static notes if database is unreachable
    return INITIAL_STICKY_NOTES;
  }
}

export async function createStickyNote(note: {
  author: string;
  role: string;
  content: string;
  color: StickyNote["color"];
  stamp?: string;
  rotation?: number;
}): Promise<StickyNote> {
  await ensureTableInitialized();

  const id = `custom-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
  const rotation = typeof note.rotation === "number" ? note.rotation : Math.random() * 4 - 2;
  const tag = "Community";
  const likes = 1;

  await db.execute({
    sql: `INSERT INTO sticky_notes (id, author, role, content, color, rotation, likes, tag, stamp)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    args: [
      id,
      note.author.trim() || "Visitor",
      note.role.trim() || "Guest Note",
      note.content.trim(),
      note.color,
      rotation,
      likes,
      tag,
      note.stamp || null,
    ],
  });

  return {
    id,
    author: note.author.trim() || "Visitor",
    role: note.role.trim() || "Guest Note",
    content: note.content.trim(),
    color: note.color,
    rotation,
    likes,
    tag,
    stamp: note.stamp,
  };
}

export async function incrementStickyNoteLikes(id: string): Promise<number | null> {
  await ensureTableInitialized();

  try {
    const updateResult = await db.execute({
      sql: `UPDATE sticky_notes SET likes = likes + 1 WHERE id = ? RETURNING likes;`,
      args: [id],
    });

    if (updateResult.rows.length > 0) {
      return Number(updateResult.rows[0].likes);
    }
  } catch {
    // In case RETURNING isn't supported, fall back to update + select
    await db.execute({
      sql: `UPDATE sticky_notes SET likes = likes + 1 WHERE id = ?;`,
      args: [id],
    });

    const selectResult = await db.execute({
      sql: `SELECT likes FROM sticky_notes WHERE id = ?;`,
      args: [id],
    });

    if (selectResult.rows.length > 0) {
      return Number(selectResult.rows[0].likes);
    }
  }

  return null;
}
