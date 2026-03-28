# Interview Prep Hub — Claude Project Instructions

This file gives Claude full context about this project so every conversation
can jump straight into work without re-explaining the structure.

---

## What This Project Is

A **static, self-hosted study portal** for software engineering interview prep.
No frameworks. No build tools. Pure HTML + CSS + JS, deployable to GitHub Pages.

The owner is actively building out study content (interactive HTML modules)
and drops them into topic folders as they're created. The site renders
everything from a central data file and tracks personal progress in localStorage.

---

## Critical Files — Know These First

| File | Role |
|------|------|
| `docs/data.js` | Single source of truth. All topics, concept groups, concept metadata. Edit this to add/change content. |
| `docs/styles.css` | Shared design system. CSS custom properties, all components. Matches the OOP learning module aesthetic. |
| `docs/home.js` | Homepage-only logic: renders topic cards, search/filter, recently added, featured sections. |
| `docs/topic.js` | Shared topic page renderer. Reads `window.TOPIC_ID`, finds the topic in `data.js`, renders everything. |
| `docs/tracker.html` | Progress tracker. Self-contained page. Uses `data.js` for structure, `localStorage` for all state. |
| `docs/index.html` | Homepage shell. Loads `data.js` + `home.js`. |
| `docs/[topic]/index.html` | Topic shells (8 total). Each sets `window.TOPIC_ID` and loads `data.js` + `topic.js`. |

---

## Design System (do not deviate)

```css
--bg:        #0a0e1a   /* page background */
--surface-1: #111827   /* cards */
--surface-2: #1a2235   /* nested surfaces, inputs */
--surface-3: #1e2d45   /* hover states */
--cyan:      #00d4ff
--purple:    #7c3aed
--green:     #10b981
--amber:     #f59e0b
--red:       #ef4444
--yellow:    #fbbf24
--sky:       #38bdf8
--blue:      #3b82f6
--pink:      #ec4899
```

- Heading/body font: **Syne** (Google Fonts)
- Code/label/badge font: **JetBrains Mono** (Google Fonts)
- Cards use `border-left: 3px solid var(--accent)` for the per-topic colour
- Pill badges for difficulty/time/status
- Dark mode only — never add a light mode toggle

---

## How Content Gets Added

### Adding a study HTML file to an existing concept

1. Drop the file into the topic folder, e.g. `java/hashmap-internals.html`
2. In `docs/data.js`, find the concept and change `status: 'placeholder'` → `status: 'available'`
3. Verify the `file` field matches the filename exactly

### File path convention in data.js

Concept `file` paths are **relative to the topic subdirectory**:
- `"hashmap-internals.html"` → resolves to `java/hashmap-internals.html`
- `"reference/cheatsheet.html"` → resolves to `java/reference/cheatsheet.html`

The tracker (`docs/tracker.html`) is at the site root, so it can strip a `../` prefix if you ever add a site-level file:
```js
if (file.startsWith('../')) return file.replace('../', '');
return topic.path + file; // e.g. "java/hashmap-internals.html"
```

### Adding a new topic

1. Add entry to `docs/data.js` `topics` array (copy template, change id/title/accent/path/groups)
2. Create folder + `index.html` shell (copy any existing topic shell, change `window.TOPIC_ID`)
3. Add nav link to all 9 HTML nav bars (docs/index.html + 8 topic pages)
4. Add accent class to `docs/styles.css` if new colour is needed

---

## Tracker Storage Schema

**localStorage key:** `iph_tracker_v1`

```json
{
  "java::OOP Principles — Interactive Module": {
    "status": "not-started",
    "confidence": 0,
    "notes": "",
    "lastStudied": null
  }
}
```

Concept key format: `"{topicId}::{concept.title}"`

Status values: `not-started` | `in-progress` | `done` | `review`
Confidence: `0` (unset) to `5` (expert)

**Never change the key format** — it would orphan all existing user progress.

---

## Staging Folder (`New topics/`)

The user has a `New topics/` folder with two subfolders:
- `Read/` — files the user has reviewed, ready to integrate
- `Haven't read/` — files not yet reviewed

Do **not** auto-integrate these. When asked to integrate a staging file:
1. Move/copy the file to the appropriate topic folder
2. Update `docs/data.js` to point to it and mark as `available`
3. Do not rename the file unless asked

---

## What Is Still Missing (as of 2026-03-28)

Java and Spring Boot concepts listed in `docs/data.js` now have corresponding study pages.

The following concept files still need to be created:

**sql/** (6 missing)
- `joins.html` — INNER, LEFT, RIGHT, FULL, CROSS with visual examples
- `subqueries-cte.html` — correlated subqueries, WITH clause, recursive CTEs
- `group-by.html` — aggregation functions, filtering groups, patterns
- `window-functions.html` — RANK, ROW_NUMBER, PARTITION BY, LAG/LEAD
- `indexes.html` — B-tree/hash, EXPLAIN, covering indexes, composite order
- `normalization.html` — 1NF through BCNF, when to denormalize

**system-design/** (12 missing — entire topic)
- `scalability.html` — horizontal/vertical scaling, stateless, microservices
- `cap-theorem.html` — CAP, BASE, eventual vs strong consistency
- `api-design.html` — REST/GraphQL/gRPC, versioning, idempotency, rate limiting
- `load-balancing.html` — round-robin, consistent hashing, sticky sessions
- `caching.html` — cache-aside, write-through, Redis patterns, invalidation
- `cdn.html` — content delivery, edge caching, cache-control headers
- `sharding.html` — horizontal partitioning, shard keys, hot spots
- `nosql-vs-sql.html` — NoSQL types, polyglot persistence, when to use each
- `message-queues.html` — pub/sub, Kafka architecture, consumer groups
- `url-shortener.html` — encoding, storage, redirects, analytics at scale
- `twitter-feed.html` — fan-out, timeline generation, celebrities problem
- `notification-system.html` — multi-channel delivery, deduplication

**javascript/** (7 missing)
- `closures.html` — lexical scope, closure use cases, module pattern, IIFE
- `prototypes.html` — prototype chain, Object.create, class sugar, mixins
- `this-keyword.html` — binding rules, arrow functions, call/apply/bind
- `event-loop.html` — call stack, task queue, microtask queue, macrotasks
- `promises-async-await.html` — chaining, error handling, Promise.all/race/allSettled
- `es6-features.html` — destructuring, spread/rest, optional chaining, nullish
- `modules.html` — ES modules, CommonJS, tree shaking, dynamic imports

**react/** (8 missing — entire topic)
- `use-state-effect.html` — state, effect lifecycle, cleanup, dependency arrays
- `use-context-reducer.html` — Context API, reducer pattern, vs Redux
- `use-memo-callback.html` — memoization, referential equality, when to optimize
- `custom-hooks.html` — extracting logic, composition patterns, examples
- `reconciliation.html` — virtual DOM, fiber, diffing, keys, batching
- `server-components.html` — RSC vs Client Components, streaming, Suspense
- `app-router.html` — layouts, loading states, error boundaries, route groups
- `rendering-strategies.html` — SSR vs SSG vs ISR, generateStaticParams

**cloud/** (7 missing)
- `docker.html` — images, containers, Dockerfile, layers, volumes, networking
- `docker-compose.html` — multi-container, networking, service dependencies
- `kubernetes.html` — nodes, pods, deployments, services, ingress, ConfigMaps
- `k8s-deployments.html` — rolling updates, HPA, resource limits, health probes
- `github-actions.html` — workflows, jobs, matrix builds, secrets, artifacts
- `aws-basics.html` — EC2, S3, IAM, instance profiles, policies
- `lambda.html` — function lifecycle, triggers, cold starts, event-driven patterns

**behavioral/** (7 missing — entire topic)
- `star-method.html` — STAR framework, structuring answers, timing
- `about-yourself.html` — 90-second professional narrative
- `leadership.html` — initiative, influencing without authority
- `ownership.html` — end-to-end responsibility, proactive communication
- `conflict.html` — disagreeing with managers, cross-team friction
- `failure.html` — owning mistakes, demonstrating growth
- `tech-decisions.html` — trade-off analysis, migration decisions

**system-design/** (12 missing — entire topic)
- `scalability.html` — horizontal/vertical scaling, stateless, microservices
- `cap-theorem.html` — CAP, BASE, eventual vs strong consistency
- `api-design.html` — REST/GraphQL/gRPC, versioning, idempotency, rate limiting
- `load-balancing.html` — round-robin, consistent hashing, sticky sessions
- `caching.html` — cache-aside, write-through, Redis patterns, invalidation
- `cdn.html` — content delivery, edge caching, cache-control headers
- `sharding.html` — horizontal partitioning, shard keys, hot spots
- `nosql-vs-sql.html` — NoSQL types, polyglot persistence, when to use each
- `message-queues.html` — pub/sub, Kafka architecture, consumer groups
- `url-shortener.html` — encoding, storage, redirects, analytics at scale
- `twitter-feed.html` — fan-out, timeline generation, celebrities problem
- `notification-system.html` — multi-channel delivery, deduplication

**javascript/** (7 missing)
- `closures.html` — lexical scope, closure use cases, module pattern, IIFE
- `prototypes.html` — prototype chain, Object.create, class sugar, mixins
- `this-keyword.html` — binding rules, arrow functions, call/apply/bind
- `event-loop.html` — call stack, task queue, microtask queue, macrotasks
- `promises-async-await.html` — chaining, error handling, Promise.all/race/allSettled
- `es6-features.html` — destructuring, spread/rest, optional chaining, nullish
- `modules.html` — ES modules, CommonJS, tree shaking, dynamic imports

**react/** (8 missing — entire topic)
- `use-state-effect.html` — state, effect lifecycle, cleanup, dependency arrays
- `use-context-reducer.html` — Context API, reducer pattern, vs Redux
- `use-memo-callback.html` — memoization, referential equality, when to optimize
- `custom-hooks.html` — extracting logic, composition patterns, examples
- `reconciliation.html` — virtual DOM, fiber, diffing, keys, batching
- `server-components.html` — RSC vs Client Components, streaming, Suspense
- `app-router.html` — layouts, loading states, error boundaries, route groups
- `rendering-strategies.html` — SSR vs SSG vs ISR, generateStaticParams

**cloud/** (7 missing)
- `docker.html` — images, containers, Dockerfile, layers, volumes, networking
- `docker-compose.html` — multi-container, networking, service dependencies
- `kubernetes.html` — nodes, pods, deployments, services, ingress, ConfigMaps
- `k8s-deployments.html` — rolling updates, HPA, resource limits, health probes
- `github-actions.html` — workflows, jobs, matrix builds, secrets, artifacts
- `aws-basics.html` — EC2, S3, IAM, instance profiles, policies
- `lambda.html` — function lifecycle, triggers, cold starts, event-driven patterns

**behavioral/** (7 missing — entire topic)
- `star-method.html` — STAR framework, structuring answers, timing
- `about-yourself.html` — 90-second professional narrative
- `leadership.html` — initiative, influencing without authority
- `ownership.html` — end-to-end responsibility, proactive communication
- `conflict.html` — disagreeing with managers, cross-team friction
- `failure.html` — owning mistakes, demonstrating growth
- `tech-decisions.html` — trade-off analysis, migration decisions

---

## Conventions for New Study Pages

When the user asks to create a new study page, match the aesthetic of existing pages:
- Same `:root` variables as `docs/styles.css` (copy them inline or link `../styles.css`)
- Font imports: Syne + JetBrains Mono from Google Fonts
- Background `#0a0e1a`, surface `#111827` / `#1a2235`
- Use cyan `#00d4ff` as the primary accent, or the topic's specific accent colour
- Interactive modules (tabs, toggles, quizzes) are welcome and match the site's character
- Include a back-link: `<a href="index.html">← Back to [Topic]</a>`

---

## User Preferences

- User is an experienced software engineer (not a beginner)
- Content should be interview-focused and concise — not tutorials
- Interactive modules (like `java/oop-learning-module.html`) are strongly preferred over static notes
- Dark theme only
- No frameworks, no npm, no build steps — everything must open directly in a browser
