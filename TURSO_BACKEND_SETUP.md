# Turso Backend Setup Guide for NextCobs

This guide walks you through finishing the setup of your **free, zero-maintenance Turso backend** for the Sticky Note Wall and like counters.

---

## 📌 Context: Why Turso?

- **Permanent Free Tier:** 9 GB storage, 500 databases, and 1 billion row reads/month.
- **Never Sleeps:** Unlike Supabase (which pauses after 7 days of inactivity), Turso SQLite files stay alive forever with single-digit millisecond latency.
- **Fullstack Next.js:** No standalone Express/Docker server needed. Next.js App Router API routes act as the serverless backend.

---

## 🛠️ What is Already Built in the Codebase

Everything in the code is ready and tested:

| File | Purpose |
| :--- | :--- |
| [`src/lib/turso.ts`](file:///C:/Users/LGSM123/Documents/NextCobs/src/lib/turso.ts) | Turso client, auto-table creation (`CREATE TABLE IF NOT EXISTS sticky_notes`), initial note seeding, and query methods. |
| [`src/app/api/notes/route.ts`](file:///C:/Users/LGSM123/Documents/NextCobs/src/app/api/notes/route.ts) | `GET` (fetch notes) and `POST` (create note with validation & sanitization). |
| [`src/app/api/notes/[id]/like/route.ts`](file:///C:/Users/LGSM123/Documents/NextCobs/src/app/api/notes/[id]/like/route.ts) | `POST` endpoint to increment note like count. |
| [`src/components/HeroSection.tsx`](file:///C:/Users/LGSM123/Documents/NextCobs/src/components/HeroSection.tsx) | Optimistic UI updates, background API syncing, and fallback protection. |
| [`.env.example`](file:///C:/Users/LGSM123/Documents/NextCobs/.env.example) | Example environment variable template. |

> [!NOTE]
> Even without credentials, your local dev server runs seamlessly using a fallback local SQLite database (`file:local.db`), so nothing breaks offline.

---

## 🚀 Step-by-Step: Finish Setup at Home (3 Minutes)

### Step 1: Create Your Free Turso Database

#### Option A: Web Dashboard (Fastest & Recommended)
1. Go to **[turso.tech](https://turso.tech)**.
2. Click **Sign Up / Login** with your **GitHub** account.
3. Click **"Create Database"**:
   - **Database Name:** `nextcobs-db` (or any name you prefer).
   - **Location / Region:** Choose `sin` (**Singapore**) — lowest latency for Indonesia/Southeast Asia.
   - Click **Create Database**.
4. Once created, your dashboard will display your **Database URL**:
   ```
   libsql://nextcobs-db-<your-username>.turso.io
   ```
5. Click **"Generate Token"** (leave expiration as default / no expiration for production use) and copy the generated token string.

---

#### Option B: Using Turso CLI (PowerShell / Terminal)
If you prefer the terminal:
```powershell
# 1. Install Turso CLI
irm https://get.tur.so/install.ps1 | iex

# 2. Login
turso auth login

# 3. Create database in Singapore
turso db create nextcobs-db --location sin

# 4. View your database URL
turso db show nextcobs-db --url

# 5. Generate auth token
turso db tokens create nextcobs-db
```

---

### Step 2: Configure Local Environment (`.env.local`)

In your project root (`NextCobs/`), create a file named `.env.local` (this file is already in `.gitignore`):

```env
TURSO_DATABASE_URL="libsql://nextcobs-db-<your-username>.turso.io"
TURSO_AUTH_TOKEN="your-turso-auth-token-here"
```

---

### Step 3: Run & Verify Locally

1. Start your development server:
   ```bash
   bun dev
   # or
   npm run dev
   ```
2. Open [http://localhost:3000](http://localhost:3000).
3. The app will automatically connect to Turso, create the `sticky_notes` table, and seed it with your 4 default notes!
4. **Test it:**
   - Click **"Stick a Note"**, fill in a test message and doodle stamp, and submit.
   - Click the **Heart / Like** icon on any note.
   - Refresh the browser — your note and like counts will remain permanently saved!

---

### Step 4: Deploying to Vercel (Production)

When you are ready to publish your portfolio to Vercel:

1. Push your changes to GitHub:
   ```bash
   git add .
   git commit -m "feat: add turso backend for sticky notes"
   git push origin personal
   ```
2. Open your project in the **[Vercel Dashboard](https://vercel.com)**.
3. Navigate to **Project Settings** ➔ **Environment Variables**.
4. Add the two variables:
   - **`TURSO_DATABASE_URL`** = `libsql://nextcobs-db-<your-username>.turso.io`
   - **`TURSO_AUTH_TOKEN`** = `<your-turso-auth-token>`
5. Redeploy. Your Sticky Note board is now live, persistent, and 100% free!

---

## 🧰 Useful Database Commands (Turso Cheat Sheet)

### View Live Notes in Terminal / Web Shell
You can query your Turso database directly from the Turso Web Console, or via CLI:
```bash
# Open interactive SQL shell
turso db shell nextcobs-db

# Check all notes
SELECT id, author, role, content, likes, created_at FROM sticky_notes;

# Delete a spam note if needed
DELETE FROM sticky_notes WHERE id = 'custom-123456';
```

### Reset Table Back to Defaults
If you ever want to wipe test notes and re-seed the default notes:
```sql
DROP TABLE sticky_notes;
```
*(On the next visit to your site, `src/lib/turso.ts` will recreate the table and re-seed the original notes automatically).*
