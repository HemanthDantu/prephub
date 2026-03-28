# Interview Prep Hub

A self-hosted, static study portal for software engineering interview preparation.
Built with plain HTML, CSS, and JavaScript — no frameworks, no build tools, no dependencies except Google Fonts.
Designed to be hosted on GitHub Pages and accessed from any device.

---

## What This Is

A personal knowledge portal that organises study notes and interactive learning modules into a structured, navigable website. It covers eight major topic areas:

- **Java** — OOP, Collections, Concurrency, Lambda/Streams, JVM & Memory
- **Spring Boot** — IoC/DI, REST, JPA/Hibernate, Security, Testing
- **SQL** — Joins, Aggregations, Window Functions, Indexes, Transactions
- **System Design** — Scalability, Caching, Sharding, Messaging, Case Studies
- **JavaScript** — Closures, Prototypes, Event Loop, Promises, ES6+
- **React / Next.js** — Hooks, Rendering, App Router, State Management
- **Cloud & DevOps** — Docker, Kubernetes, CI/CD, AWS Essentials
- **Behavioral** — STAR Method, Leadership, Conflict, Ownership, Failure

The site includes a **Progress Tracker** that tracks status, confidence level, and personal notes for every concept — all persisted in `localStorage` with export/import support.

---

## Directory Structure

```
HTML pages/
│
├── docs/                       GitHub Pages site root
│   ├── index.html              Homepage dashboard
│   ├── tracker.html            Progress tracker (all 8 topics)
│   ├── styles.css              Shared design system
│   ├── data.js                 All topic/concept metadata (single source of truth)
│   ├── home.js                 Homepage rendering + search/filter logic
│   ├── topic.js                Topic page renderer (used by all 8 topic pages)
│   │
│   ├── java/
│   │   ├── index.html          Java topic landing page
│   │   └── [concept].html      Individual Java study pages (add here)
│   │
│   ├── spring-boot/
│   │   ├── index.html
│   │   └── [concept].html
│   │
│   ├── sql/
│   │   ├── index.html
│   │   └── [concept].html
│   │
│   ├── system-design/
│   │   ├── index.html
│   │   └── [concept].html
│   │
│   ├── javascript/
│   │   ├── index.html
│   │   └── [concept].html
│   │
│   ├── react/
│   │   ├── index.html
│   │   └── [concept].html
│   │
│   ├── cloud/
│   │   ├── index.html
│   │   └── [concept].html
│   │
│   └── behavioral/
│       ├── index.html
│       └── [concept].html
│
└── New topics/                 Staging area for new study files
    ├── Read/                   Files read but not yet integrated
    └── Haven't read/           Files not yet reviewed
```

---

## How It Works

### Data-Driven Architecture

Everything flows from a single file: **`data.js`**

`data.js` defines every topic, concept group, and concept card — including the path to the HTML study file, difficulty level, estimated time, tags, and status (`available` or `placeholder`).

- `index.html` loads `data.js` + `home.js` → renders the homepage dynamically
- Each `[topic]/index.html` sets `window.TOPIC_ID = 'java'`, loads `data.js` + `topic.js` → renders that topic's concept list
- `tracker.html` loads `data.js` → reads all concepts and tracks progress via `localStorage`

**To add a new concept:** drop the HTML file into the topic folder, update the concept's `status` to `'available'` in `data.js`. Done.

**To add a new topic:** add an entry to `data.js`, create a folder, copy any topic `index.html` shell and change `window.TOPIC_ID`.

### Progress Tracker

`tracker.html` stores all tracking data in `localStorage` under the key `iph_tracker_v1`.

Data structure per concept:
```json
{
  "java::OOP Principles — Interactive Module": {
    "status": "done",
    "confidence": 4,
    "notes": "Remember: abstraction hides complexity, encapsulation hides data.",
    "lastStudied": "2026-03-22"
  }
}
```

Status values: `not-started` | `in-progress` | `done` | `review`
Confidence: `0` (unset) through `5` (expert)

Export/import buttons in the tracker sidebar let you back up and restore progress as a `.json` file.

### Search & Filter

The homepage search (`home.js`) filters topic cards live by:
- Topic title
- Topic tags (backend, frontend, devops, soft-skills)
- Difficulty (beginner, intermediate, advanced)

---

## Design System

| Property | Value |
|----------|-------|
| Background | `#0a0e1a` |
| Surface 1 | `#111827` |
| Surface 2 | `#1a2235` |
| Accent cyan | `#00d4ff` |
| Accent purple | `#7c3aed` |
| Green | `#10b981` |
| Amber | `#f59e0b` |
| Red | `#ef4444` |
| Heading font | Syne (Google Fonts) |
| Code/label font | JetBrains Mono (Google Fonts) |

Per-topic accent colours:

| Topic | Accent |
|-------|--------|
| Java | `#00d4ff` cyan |
| Spring Boot | `#10b981` green |
| SQL | `#f59e0b` amber |
| System Design | `#7c3aed` purple |
| JavaScript | `#fbbf24` yellow |
| React / Next.js | `#38bdf8` sky |
| Cloud & DevOps | `#3b82f6` blue |
| Behavioral | `#ec4899` pink |

All styles live in `styles.css`. Cards use CSS custom properties (`--accent`, `--accent-dim`, `--accent-glow`) set via `data-accent` attributes, so new topics only need a colour string in `data.js`.

---

## Adding a New Study Page

1. **Create the HTML file** in the appropriate topic folder:
   ```
   java/hashmap-internals.html
   ```

2. **Open `data.js`** and find the matching concept entry. Change:
   ```js
   status: 'placeholder'
   ```
   to:
   ```js
   status: 'available'
   ```

3. Verify the `file` field matches your filename:
   ```js
   file: 'hashmap-internals.html'
   ```

The concept card on the topic page and in the tracker will immediately become a live, clickable link.

### Linking files inside topic folders

All study files live inside their topic folder. Use just the filename (or subfolder path) in `file`:
```js
file: 'hashmap-internals.html'
file: 'reference/cheatsheet.html'
```

---

## Adding a New Topic

1. **Add an entry to `data.js`** in the `topics` array. Copy an existing topic object as a template. Give it a unique `id`, `accentColor`, `accentClass`, and `path`.

2. **Create the folder** and add an `index.html`:
   ```html
   <script>window.TOPIC_ID = 'my-new-topic';</script>
   <script src="../data.js"></script>
   <script src="../topic.js"></script>
   ```
   Copy any existing topic `index.html` and change only the `TOPIC_ID` value and the `active` nav link.

3. **Add a nav link** in all existing nav bars (search for `nav-link` in all HTML files).

4. **Add an accent class** in `styles.css`:
   ```css
   [data-accent="mycolor"] { --accent:#hex; --accent-dim:rgba(r,g,b,0.12); --accent-glow:0 0 28px rgba(r,g,b,0.16); }
   ```

---

## Deploying to GitHub Pages

```bash
# From the "HTML pages" directory (push contents, not the folder itself)
cd "HTML pages"
git init
git add .
git commit -m "Initial commit: Interview Prep Hub"
git remote add origin https://github.com/YOUR_USERNAME/interview-prep.git
git push -u origin main
```

Then go to: **GitHub repo → Settings → Pages → Source: Deploy from branch → main / root**

Your site will be live at: `https://YOUR_USERNAME.github.io/interview-prep/`

> **Important:** The `index.html` must be at the repository root (not inside a subfolder) for GitHub Pages to serve it correctly. Push the *contents* of `HTML pages/`, not the folder itself.

---

## Currently Available Study Files

- `Java` — `java/oop-learning-module.html`, `java/principles_of_oop_learning_module.html`, `java/solid_principles_learning_module.html`, `java/design-patterns.html`, `java/arraylist_vs_linkedlist_learning_module.html`, `java/hashmap_internals_learning_module.html`, `java/comparable_vs_comparator_learning_module.html`, `java/threads_and_synchronization_learning_module.html`, `java/executor-service.html`, `java/completable-future.html`, `java/streams.html`, `java/lambda_beginner.html`, `java/lambda_internals.html`, `java/heap-vs-stack-learning-module.html`, `java/gc_masterclass.html`, `java/java_fullstack_interview_reference_sheet.html`, `java/java_study_tracker.html`
- `Spring Boot` — `spring-boot/spring-core-module.html`, `spring-boot/dependency-injection.html`, `spring-boot/spring-mvc-module.html`, `spring-boot/spring-bridge-module.html`, `spring-boot/jpa-hibernate.html`, `spring-boot/transactions.html`, `spring-boot/security-jwt.html`, `spring-boot/testing-mockito.html`, `spring-boot/spring_boot_interview_reference_sheet.html`
- `SQL` — `sql/acid_transactions_learning_module.html`, `sql/isolation-levels-learning-module.html`, `sql/db_interview_reference_sheet.html`
- `JavaScript` — `javascript/js-fundamentals-guide.html`
- `Cloud` — `cloud/cloud_interview_reference_sheet.html`

Note: `java/java_study_tracker.html` is a standalone plan and is not wired into `data.js` yet.

### Staging (New topics — not yet integrated)

Currently empty.

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Markup | Semantic HTML5 |
| Styles | Vanilla CSS with custom properties |
| Logic | Vanilla JavaScript (ES6+) |
| Fonts | Google Fonts (Syne + JetBrains Mono) |
| Storage | Browser `localStorage` |
| Hosting | GitHub Pages (static) |
| Build | None — open in browser directly |

---

## File Count Summary

| Type | Count |
|------|-------|
| Topic landing pages | 8 |
| Shared JS/CSS files | 4 (`styles.css`, `data.js`, `home.js`, `topic.js`) |
| Topic content HTML files | 31 |
| Root app pages | 2 (`index.html`, `tracker.html`) |
| Staging files | 0 |
| Total concepts tracked | 77 |
| Concepts with study files | 30 |
| Concepts needing study files | 54 |
