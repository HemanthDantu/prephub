/**
 * Interview Prep Hub — Topic Page Renderer
 * Each topic page sets `window.TOPIC_ID` before loading this script.
 * This script reads SITE_DATA (data.js) and renders the full topic layout.
 * Depends on: data.js (SITE_DATA, getTopicById)
 */

/* ── Helpers ─────────────────────────────────────────────── */

function badge(text, cls) {
  return `<span class="badge badge-${cls}">${text}</span>`;
}

function diffBadge(d) {
  const label = d.charAt(0).toUpperCase() + d.slice(1);
  return badge(label, d === 'beginner' ? 'beginner' : d === 'intermediate' ? 'intermediate' : 'advanced');
}

function timeBadge(t) {
  return badge('⏱ ' + t, 'time');
}

function tagEl(t) {
  return `<span class="tag">${t}</span>`;
}

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1,3), 16);
  const g = parseInt(hex.slice(3,5), 16);
  const b = parseInt(hex.slice(5,7), 16);
  return `${r},${g},${b}`;
}

/* ── localStorage history ────────────────────────────────── */

const HISTORY_KEY = 'iph_history';

function trackVisit(topicId, title, path) {
  try {
    const history = JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]')
      .filter(h => h.path !== path);
    history.unshift({ topicId, title, path, ts: Date.now() });
    if (history.length > 6) history.length = 6;
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
  } catch {}
}

/* ── Render: Breadcrumb ──────────────────────────────────── */

function renderBreadcrumb(topic) {
  const el = document.getElementById('breadcrumb');
  if (!el) return;
  el.innerHTML = `
    <a href="../index.html">Home</a>
    <span class="breadcrumb-sep">/</span>
    <span class="breadcrumb-current">${topic.title}</span>
  `;
}

/* ── Render: Topic Hero ──────────────────────────────────── */

function renderTopicHero(topic) {
  const el = document.getElementById('topic-hero');
  if (!el) return;

  const totalConcepts = topic.groups.reduce((s, g) => s + g.concepts.length, 0);
  const available     = topic.groups.reduce((s, g) =>
    s + g.concepts.filter(c => c.status === 'available').length, 0);

  el.setAttribute('data-accent', topic.accentClass);
  el.style.setProperty('--accent', topic.accentColor);
  el.style.setProperty('--accent-dim', `rgba(${hexToRgb(topic.accentColor)},0.1)`);
  el.style.setProperty('--accent-glow', `0 0 28px rgba(${hexToRgb(topic.accentColor)},0.16)`);

  el.innerHTML = `
    <div class="topic-hero-inner">
      <div class="topic-hero-icon-wrap">${topic.icon}</div>
      <div class="topic-hero-content">
        <h1 class="topic-hero-title">${topic.title}</h1>
        <p class="topic-hero-desc">${topic.description}</p>
        <div class="topic-hero-meta">
          <span class="topic-hero-stat">⏱ <strong>${topic.estimatedTime}</strong></span>
          <span class="topic-hero-stat">📄 <strong>${totalConcepts}</strong> concepts</span>
          <span class="topic-hero-stat">${diffBadge(topic.difficulty)}</span>
          ${available > 0
            ? `<span class="topic-hero-stat" style="color:var(--green)">✓ <strong>${available}</strong> available now</span>`
            : ''}
        </div>
      </div>
    </div>
  `;
}

/* ── Render: Concept Groups ──────────────────────────────── */

function renderConceptGroups(topic) {
  const el = document.getElementById('concept-groups');
  if (!el) return;

  el.setAttribute('data-accent', topic.accentClass);
  el.style.setProperty('--accent', topic.accentColor);
  el.style.setProperty('--accent-dim', `rgba(${hexToRgb(topic.accentColor)},0.1)`);
  el.style.setProperty('--accent-glow', `0 0 28px rgba(${hexToRgb(topic.accentColor)},0.16)`);

  el.innerHTML = topic.groups.map(group => `
    <div class="concept-group">
      <h2 class="group-title">${group.name}</h2>
      <div class="concepts-list stagger">
        ${group.concepts.map(c => renderConceptCard(c, topic)).join('')}
      </div>
    </div>
  `).join('');

  // track clicks on available cards
  el.querySelectorAll('.concept-card:not(.placeholder)').forEach(card => {
    card.addEventListener('click', () => {
      trackVisit(topic.id, card.dataset.title, card.getAttribute('href'));
    });
  });
}

function renderConceptCard(concept, topic) {
  const isAvailable = concept.status === 'available';
  const tag = document.createElement('a');

  const newBadge  = concept.isNew ? badge('New', 'new') : '';
  const avBadge   = isAvailable   ? badge('Available', 'available') : '';
  const concTags  = (concept.tags || []).slice(0, 3).map(tagEl).join('');

  const card = `
    <${isAvailable ? `a href="${concept.file}" data-title="${concept.title}"` : 'div'}
      class="concept-card${isAvailable ? '' : ' placeholder'}"
      ${isAvailable ? '' : 'title="Add this file to enable this concept"'}>

      <div class="concept-card-main">
        <div class="concept-title-row">
          <span class="concept-title">${concept.title}</span>
          ${newBadge}
          ${avBadge}
        </div>
        <div class="concept-subtitle">${concept.subtitle}</div>
        <div class="concept-card-meta">
          ${diffBadge(concept.difficulty)}
          ${timeBadge(concept.time)}
          <div class="concept-card-tags">${concTags}</div>
        </div>
      </div>

      <span class="concept-arrow"></span>
    </${isAvailable ? 'a' : 'div'}>
  `;

  return card;
}

/* ── Render: Related Topics ──────────────────────────────── */

function renderRelatedTopics(topic) {
  const el = document.getElementById('related-topics');
  if (!el) return;

  // pick up to 4 topics that aren't the current one
  const related = SITE_DATA.topics
    .filter(t => t.id !== topic.id)
    .slice(0, 4);

  el.innerHTML = related.map(t => `
    <a class="related-pill" href="../${t.path}">
      <span class="related-pill-icon">${t.icon}</span>
      ${t.title}
    </a>
  `).join('');
}

/* ── Set page title & meta ───────────────────────────────── */

function setPageMeta(topic) {
  document.title = `${topic.title} — Interview Prep Hub`;

  // update any element with id="page-title" (for nav display)
  const pt = document.getElementById('page-topic-title');
  if (pt) pt.textContent = topic.title;
}

/* ── Init ────────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
  const topicId = window.TOPIC_ID;
  if (!topicId) {
    console.error('[topic.js] window.TOPIC_ID is not set.');
    return;
  }

  const topic = getTopicById(topicId);
  if (!topic) {
    console.error(`[topic.js] Topic "${topicId}" not found in SITE_DATA.`);
    return;
  }

  setPageMeta(topic);
  renderBreadcrumb(topic);
  renderTopicHero(topic);
  renderConceptGroups(topic);
  renderRelatedTopics(topic);
});
