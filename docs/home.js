/**
 * Interview Prep Hub — Homepage Logic
 * Renders topic cards, featured/recent sections, search, and filter chips.
 * Depends on: data.js (SITE_DATA)
 */

/* ── Helpers ─────────────────────────────────────────────── */

function badge(text, cls) {
  return `<span class="badge badge-${cls}">${text}</span>`;
}

function diffBadge(d) {
  const map = { beginner: 'beginner', intermediate: 'intermediate', advanced: 'advanced' };
  const label = d.charAt(0).toUpperCase() + d.slice(1);
  return badge(label, map[d] || 'beginner');
}

function tagEl(t) {
  return `<span class="tag">${t}</span>`;
}

/* ── Recently Visited (localStorage) ────────────────────── */

const HISTORY_KEY = 'iph_history';

function getHistory() {
  try { return JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]'); }
  catch { return []; }
}

function trackVisit(topicId, title, path) {
  const history = getHistory().filter(h => h.path !== path);
  history.unshift({ topicId, title, path, ts: Date.now() });
  if (history.length > 6) history.length = 6;
  try { localStorage.setItem(HISTORY_KEY, JSON.stringify(history)); }
  catch {}
}

/* ── Render: Stats ───────────────────────────────────────── */

function renderStats() {
  const totalConcepts = getTotalConcepts();
  document.getElementById('stat-topics').textContent  = SITE_DATA.meta.totalTopics;
  document.getElementById('stat-concepts').textContent = totalConcepts;
  document.getElementById('stat-hours').textContent   = SITE_DATA.meta.totalHours;
}

/* ── Render: Recently Added ──────────────────────────────── */

function renderRecentlyAdded() {
  const wrap = document.getElementById('recently-added');
  if (!wrap) return;

  const items = SITE_DATA.recentlyAdded;
  wrap.innerHTML = items.map(item => `
    <a class="recent-card" href="${item.path}"
       data-track-topic="${item.topicId}"
       data-track-title="${item.title}"
       data-track-path="${item.path}">
      <div class="recent-card-info">
        <div class="recent-topic-label">${item.topicTitle}</div>
        <div class="recent-title">${item.title}</div>
      </div>
      <span class="recent-arrow"></span>
    </a>
  `).join('');

  // track clicks
  wrap.querySelectorAll('[data-track-topic]').forEach(el => {
    el.addEventListener('click', () => {
      trackVisit(el.dataset.trackTopic, el.dataset.trackTitle, el.dataset.trackPath);
    });
  });
}

/* ── Render: Continue Studying ───────────────────────────── */

function renderContinueStudying() {
  const section = document.getElementById('continue-section');
  const wrap    = document.getElementById('continue-list');
  if (!section || !wrap) return;

  const history = getHistory();
  if (!history.length) return;

  section.classList.add('visible');
  wrap.innerHTML = history.slice(0, 4).map(h => {
    const topic = getTopicById(h.topicId);
    const topicLabel = topic ? topic.title : h.topicId;
    return `
      <a class="recent-card" href="${h.path}"
         data-track-topic="${h.topicId}"
         data-track-title="${h.title}"
         data-track-path="${h.path}">
        <div class="recent-card-info">
          <div class="recent-topic-label">${topicLabel}</div>
          <div class="recent-title">${h.title}</div>
        </div>
        <span class="recent-arrow"></span>
      </a>
    `;
  }).join('');

  wrap.querySelectorAll('[data-track-topic]').forEach(el => {
    el.addEventListener('click', () => {
      trackVisit(el.dataset.trackTopic, el.dataset.trackTitle, el.dataset.trackPath);
    });
  });
}

/* ── Render: Featured ────────────────────────────────────── */

function renderFeatured() {
  const wrap = document.getElementById('featured-cards');
  if (!wrap) return;

  wrap.innerHTML = SITE_DATA.featured.map(f => `
    <a class="featured-card" href="${f.path}"
       data-track-topic="${f.topicId}"
       data-track-title="${f.title}"
       data-track-path="${f.path}">
      <div class="featured-badge">${badge(f.badge, f.badgeColor)}</div>
      <div class="featured-topic">${f.topicTitle}</div>
      <div class="featured-title">${f.title}</div>
      <span class="featured-arrow">↗</span>
    </a>
  `).join('');

  wrap.querySelectorAll('[data-track-topic]').forEach(el => {
    el.addEventListener('click', () => {
      trackVisit(el.dataset.trackTopic, el.dataset.trackTitle, el.dataset.trackPath);
    });
  });
}

/* ── Render: Topic Cards ─────────────────────────────────── */

function buildConceptPreview(topic) {
  // collect all concepts across all groups
  const all = topic.groups.flatMap(g => g.concepts);
  const shown = all.slice(0, 4);
  const rest  = all.length - shown.length;

  const items = shown.map(c =>
    `<div class="preview-item ${c.status === 'available' ? 'available' : ''}">${c.title}</div>`
  ).join('');

  const more = rest > 0
    ? `<div class="preview-more">+${rest} more concepts</div>`
    : '';

  return `
    <div class="topic-concepts-preview">
      <div class="preview-label">Concepts</div>
      <div class="preview-list">${items}${more}</div>
    </div>
  `;
}

function buildTopicCard(topic) {
  const totalConcepts = topic.groups.reduce((s, g) => s + g.concepts.length, 0);
  const available     = topic.groups.reduce((s, g) =>
    s + g.concepts.filter(c => c.status === 'available').length, 0);

  const newBadge  = topic.isNew ? badge('New', 'new') : '';
  const diffBadgeEl = diffBadge(topic.difficulty);
  const topicIndexPath = topic.path.endsWith('/') ? `${topic.path}index.html` : `${topic.path}/index.html`;

  return `
    <div class="topic-card animate-in"
         data-accent="${topic.accentClass}"
         data-topic-id="${topic.id}"
         data-topic-tags="${topic.tags.join(',')}"
         data-topic-difficulty="${topic.difficulty}"
         data-topic-title="${topic.title.toLowerCase()}"
         data-topic-href="${topicIndexPath}"
         role="link"
         tabindex="0"
         style="--accent:${topic.accentColor};--accent-dim:rgba(${hexToRgb(topic.accentColor)},0.1);--accent-glow:0 0 28px rgba(${hexToRgb(topic.accentColor)},0.16)">

      <div class="topic-card-head">
        <span class="topic-icon">${topic.icon}</span>
        <div class="topic-badges">
          ${diffBadgeEl}
          ${newBadge}
        </div>
      </div>

      <div class="topic-card-title">${topic.title}</div>
      <div class="topic-card-desc">${topic.description}</div>

      <div class="topic-meta">
        <span class="topic-meta-item">⏱ ${topic.estimatedTime}</span>
        <span class="topic-meta-item">📄 ${totalConcepts} concepts</span>
        ${available > 0 ? `<span class="topic-meta-item" style="color:var(--green)">✓ ${available} available</span>` : ''}
      </div>

      <div class="topic-tags">
        ${topic.tags.map(tagEl).join('')}
      </div>

      ${buildConceptPreview(topic)}

      <div class="topic-card-cta">
        <a class="btn-explore" href="${topicIndexPath}" style="background:${topic.accentColor};color:#0a0e1a">
          Explore →
        </a>
        <span class="concept-count">${totalConcepts} concepts</span>
      </div>
    </div>
  `;
}

function renderTopicCards() {
  const grid = document.getElementById('topics-grid');
  if (!grid) return;

  grid.innerHTML = SITE_DATA.topics.map(buildTopicCard).join('');

  grid.querySelectorAll('.topic-card').forEach(card => {
    const href = card.dataset.topicHref;
    if (!href) return;

    card.addEventListener('click', (e) => {
      if (e.target.closest('a')) return;
      window.location.href = href;
    });

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        window.location.href = href;
      }
    });
  });
}

/* ── Hex to RGB helper ───────────────────────────────────── */

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1,3), 16);
  const g = parseInt(hex.slice(3,5), 16);
  const b = parseInt(hex.slice(5,7), 16);
  return `${r},${g},${b}`;
}

/* ── Search & Filter ─────────────────────────────────────── */

let activeFilter = 'all';
let searchQuery  = '';

function getCards() {
  return Array.from(document.querySelectorAll('.topic-card'));
}

function applyFilters() {
  const cards  = getCards();
  const noRes  = document.getElementById('no-results');
  let visible  = 0;

  cards.forEach(card => {
    const titleMatch = searchQuery
      ? card.dataset.topicTitle.includes(searchQuery) ||
        card.dataset.topicTags.includes(searchQuery)
      : true;

    const filterMatch = activeFilter === 'all'
      ? true
      : ['backend', 'frontend', 'devops', 'cloud', 'soft-skills'].includes(activeFilter)
        ? card.dataset.topicTags.includes(activeFilter)
        : card.dataset.topicDifficulty === activeFilter;

    const show = titleMatch && filterMatch;
    card.style.display = show ? '' : 'none';
    if (show) visible++;
  });

  if (noRes) noRes.classList.toggle('visible', visible === 0);
}

let debounceTimer;

function initSearch() {
  const input = document.getElementById('search-input');
  if (!input) return;

  input.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      searchQuery = input.value.trim().toLowerCase();
      applyFilters();
    }, 160);
  });

  input.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      input.value = '';
      searchQuery = '';
      applyFilters();
    }
  });
}

function initFilterChips() {
  const chips = document.querySelectorAll('.chip[data-filter]');
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeFilter = chip.dataset.filter;
      applyFilters();
    });
  });
}

/* ── Nav link active state ───────────────────────────────── */
function markActiveNav() {
  document.querySelectorAll('.nav-link[data-nav]').forEach(el => {
    if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
      if (el.dataset.nav === 'home') el.classList.add('active');
    }
  });
}

/* ── Init ────────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
  renderStats();
  renderTopicCards();
  renderFeatured();
  renderRecentlyAdded();
  renderContinueStudying();
  initSearch();
  initFilterChips();
  markActiveNav();
});
