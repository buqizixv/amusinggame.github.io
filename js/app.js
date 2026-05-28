/* ═══════════════════════════════════════
   App — Router, Renderer, Interactions
   ═══════════════════════════════════════ */

const SITE_NAME = "Prank Toolkit";
const SITE_DOMAIN = ""; // Set on deploy

let currentCategory = "all";
let currentSearch = "";

/* ── Init ── */
document.addEventListener("DOMContentLoaded", () => {
  initLang();
  applyI18NToShell();
  renderPage();
  bindEvents();
  initCookieConsent();
});

/* ── Language ── */
function initLang() {
  const toggle = document.getElementById("lang-toggle");
  if (toggle) {
    toggle.textContent = t("lang_switch");
  }
  document.documentElement.lang = currentLang === "zh" ? "zh-CN" : "en";
}

function applyI18NToShell() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (!key) return;
    if (key === "hero_sub" || key === "footer_disclaimer" || key === "desc") {
      el.innerHTML = t(key);
    } else if (el.tagName === "INPUT") {
      el.placeholder = t(key);
    } else {
      el.textContent = t(key);
    }
  });

  var si = document.getElementById("searchInput");
  if (si) si.placeholder = t("search_placeholder");

  var st = document.getElementById("stat-total");
  if (st) st.textContent = t("stat_total");
  var sf = document.getElementById("stat-free");
  if (sf) sf.textContent = t("stat_free");
  var sb = document.getElementById("stat-bilingual");
  if (sb) sb.textContent = t("stat_bilingual");
}

/* ── Hash Router ── */
function getRoute() {
  const hash = window.location.hash.replace("#", "");
  if (hash.startsWith("category-")) {
    return { type: "category", value: hash.replace("category-", "") };
  }
  if (hash && CONTENT.some(c => c.slug === hash)) {
    return { type: "detail", value: hash };
  }
  return { type: "home", value: null };
}

function renderPage() {
  const route = getRoute();
  applyI18NToShell();

  if (route.type === "detail") {
    renderDetail(route.value);
  } else {
    if (route.type === "category") {
      currentCategory = route.value;
    }
    renderHome();
  }

  // Update category pills
  document.querySelectorAll(".cat-pill").forEach(pill => {
    pill.classList.toggle("active", pill.dataset.cat === currentCategory);
  });

  // Update nav
  document.querySelectorAll(".main-nav a").forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === "#" + window.location.hash.replace("#", ""));
  });
}

/* ── Home Page Render ── */
function renderHome() {
  const grid = document.getElementById("content-grid");
  if (!grid) return;

  const filtered = CONTENT.filter(c => {
    const matchCat = currentCategory === "all" || c.category === currentCategory;
    const matchSearch = !currentSearch ||
      c[currentLang].title.toLowerCase().includes(currentSearch.toLowerCase()) ||
      c[currentLang].desc.toLowerCase().includes(currentSearch.toLowerCase()) ||
      c[currentLang].tags.some(t => t.toLowerCase().includes(currentSearch.toLowerCase()));
    return matchCat && matchSearch;
  });

  // Update section title and document title
  var stEl = document.getElementById("section-title");
  if (stEl) stEl.textContent = t("section_title");
  document.title = t("site_name") + " — " + t("site_tagline");
  var metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.content = t("site_tagline");

  // Render categories
  const catContainer = document.getElementById("category-pills");
  if (catContainer) {
    catContainer.innerHTML = CATEGORIES.map(cat =>
      `<button class="cat-pill" data-cat="${cat.slug}">${cat[currentLang]}</button>`
    ).join("");
  }

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="no-results">
      <div class="no-results-emoji">🔍</div>
      <p>${t("no_results")}</p>
      <p style="font-size:13px;color:var(--text-muted);margin-top:4px;">${t("no_results_tip")}</p>
    </div>`;
    return;
  }

  grid.innerHTML = filtered.map(config => {
    const loc = config[currentLang];
    const zhUrl = "pranks/zh/" + config.slug + ".html";
    const enUrl = "pranks/en/" + config.slug + ".html";

    return `
    <div class="card" data-slug="${config.slug}">
      <div class="card-emoji">${config.emoji}</div>
      <h3><a href="#${config.slug}" style="color:inherit;text-decoration:none;">${loc.title}</a></h3>
      <div class="card-desc">${loc.desc}</div>
      <div class="card-links">
        <div class="link-item">
          <div class="lang-label">🇨🇳 ${t("zh_label")}</div>
          <div class="link-path">pranks/zh/${config.slug}.html</div>
          <div class="btn-row">
            <button class="btn btn-ghost btn-xs btn-preview-sm" data-url="${zhUrl}" data-title="${config.zh.title}">${t("preview")}</button>
            <button class="btn btn-accent btn-xs btn-copy-sm" data-url="${zhUrl}">${t("copy_link")}</button>
          </div>
        </div>
        <div class="link-item">
          <div class="lang-label">🇺🇸 ${t("en_label")}</div>
          <div class="link-path">pranks/en/${config.slug}.html</div>
          <div class="btn-row">
            <button class="btn btn-ghost btn-xs btn-preview-sm" data-url="${enUrl}" data-title="${config.en.title}">${t("preview")}</button>
            <button class="btn btn-accent btn-xs btn-copy-sm" data-url="${enUrl}">${t("copy_link")}</button>
          </div>
        </div>
      </div>
      <div class="card-tags">${loc.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}</div>
    </div>`;
  }).join("");

  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ── Detail Page Render ── */
function renderDetail(slug) {
  const grid = document.getElementById("content-grid");
  if (!grid) return;

  const config = CONTENT.find(c => c.slug === slug);
  if (!config) { renderHome(); return; }

  const loc = config[currentLang];
  const zhUrl = "pranks/zh/" + config.slug + ".html";
  const enUrl = "pranks/en/" + config.slug + ".html";

  // Update meta
  document.title = loc.title + " — " + t("site_name");
  var metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.content = loc.desc;

  // Find category name
  const cat = CATEGORIES.find(c => c.slug === config.category);

  // Find prev/next
  const idx = CONTENT.indexOf(config);
  const prev = idx > 0 ? CONTENT[idx - 1] : null;
  const next = idx < CONTENT.length - 1 ? CONTENT[idx + 1] : null;

  grid.innerHTML = `
  <article class="content-page" style="max-width:800px;margin:0 auto;">
    <nav class="breadcrumb" style="margin-bottom:24px;font-size:13px;color:var(--text-muted);">
      <a href="#" style="color:var(--accent);text-decoration:none;">${t("nav_home")}</a>
      / <a href="#category-${config.category}" style="color:var(--accent);text-decoration:none;">${cat ? cat[currentLang] : config.category}</a>
      / ${loc.title}
    </nav>
    <div style="font-size:48px;margin-bottom:12px;">${config.emoji}</div>
    <h1 style="font-size:clamp(28px,4vw,40px);font-weight:800;letter-spacing:-0.5px;margin-bottom:8px;">${loc.title}</h1>
    <p style="color:var(--text-secondary);font-size:16px;margin-bottom:8px;">${loc.desc}</p>
    <div class="card-tags" style="margin-bottom:28px;">${loc.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}</div>

    <div style="display:flex;gap:12px;margin-bottom:32px;flex-wrap:wrap;">
      <a href="${zhUrl}" target="_blank" class="btn btn-accent btn-sm">🇨🇳 ${t("zh_label")}</a>
      <a href="${enUrl}" target="_blank" class="btn btn-accent btn-sm">🇺🇸 ${t("en_label")}</a>
      <button class="btn btn-ghost btn-sm btn-preview-sm" data-url="${currentLang === 'zh' ? zhUrl : enUrl}" data-title="${loc.title}">🔍 ${t("preview")}</button>
      <button class="btn btn-ghost btn-sm btn-copy-sm" data-url="${currentLang === 'zh' ? zhUrl : enUrl}">🔗 ${t("copy_link")}</button>
    </div>

    <div class="content-body" style="line-height:1.9;color:var(--text-secondary);font-size:15px;">
      ${loc.body}
    </div>

    <div class="content-nav" style="display:flex;justify-content:space-between;margin-top:48px;padding-top:24px;border-top:1px solid var(--border);">
      ${prev ? `<a href="#${prev.slug}" style="color:var(--accent);text-decoration:none;font-weight:500;">← ${prev[currentLang].title}</a>` : '<span></span>'}
      ${next ? `<a href="#${next.slug}" style="color:var(--accent);text-decoration:none;font-weight:500;">${next[currentLang].title} →</a>` : '<span></span>'}
    </div>
  </article>`;

  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ── Event Bindings ── */
function bindEvents() {
  // Language toggle
  const langToggle = document.getElementById("lang-toggle");
  if (langToggle) {
    langToggle.addEventListener("click", switchLang);
  }

  // Category pills (delegated)
  const catContainer = document.getElementById("category-pills");
  if (catContainer) {
    catContainer.addEventListener("click", e => {
      const pill = e.target.closest(".cat-pill");
      if (!pill) return;
      currentCategory = pill.dataset.cat;
      currentSearch = "";
      document.getElementById("searchInput").value = "";
      window.location.hash = currentCategory === "all" ? "" : "category-" + currentCategory;
    });
  }

  // Search
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", debounce(e => {
      currentSearch = e.target.value.trim();
      currentCategory = "all";
      window.location.hash = "";
      renderPage();
    }, 300));
  }

  // Card buttons (delegated)
  const grid = document.getElementById("content-grid");
  if (grid) {
    grid.addEventListener("click", e => {
      const previewBtn = e.target.closest(".btn-preview-sm");
      const copyBtn = e.target.closest(".btn-copy-sm");
      const cardLink = e.target.closest(".card h3 a");

      if (previewBtn) {
        e.preventDefault();
        openPreview(previewBtn.dataset.url, previewBtn.dataset.title);
      }

      if (copyBtn) {
        e.preventDefault();
        copyToClipboard(copyBtn.dataset.url, copyBtn);
      }

      // Card title clicks handled by hashchange
    });
  }

  // Hash change
  window.addEventListener("hashchange", () => {
    const route = getRoute();
    if (route.type === "home") {
      currentCategory = "all";
      currentSearch = "";
      const si = document.getElementById("searchInput");
      if (si) si.value = "";
    }
    renderPage();
  });

  // Modal
  document.getElementById("modalClose").addEventListener("click", closePreview);
  document.getElementById("modalOverlay").addEventListener("click", e => {
    if (e.target === e.currentTarget) closePreview();
  });
  document.getElementById("modalReset").addEventListener("click", () => {
    if (currentPreviewUrl) {
      const frame = document.getElementById("modalFrame");
      frame.src = "";
      setTimeout(() => { frame.src = currentPreviewUrl; }, 50);
    }
  });
  document.getElementById("modalCopyLink").addEventListener("click", () => {
    if (currentPreviewUrl) copyToClipboard(currentPreviewUrl, document.getElementById("modalCopyLink"));
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closePreview();
  });

  // Logo click — always go home
  var logo = document.querySelector(".logo");
  if (logo) {
    logo.addEventListener("click", function(e) {
      e.preventDefault();
      currentCategory = "all";
      currentSearch = "";
      var si = document.getElementById("searchInput");
      if (si) si.value = "";
      window.location.hash = "";
      renderPage();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Mobile hamburger
  var hamburger = document.getElementById("hamburger");
  if (hamburger) {
    hamburger.addEventListener("click", () => {
      document.getElementById("mainNav").classList.toggle("open");
    });
  }

  // Close mobile nav on link click + ensure nav links work
  document.querySelectorAll(".main-nav a").forEach(link => {
    link.addEventListener("click", function(e) {
      document.getElementById("mainNav").classList.remove("open");
      var hash = this.getAttribute("href");
      if (hash && hash.startsWith("#")) {
        e.preventDefault();
        if (window.location.hash === hash) {
          // Already on this hash — force re-render and scroll
          if (hash === "#" || hash === "") {
            currentCategory = "all";
            currentSearch = "";
            var si = document.getElementById("searchInput");
            if (si) si.value = "";
          }
          renderPage();
        } else {
          // Hashchange will fire and call renderPage
          window.location.hash = hash;
        }
        // Scroll to content section so user sees feedback
        var grid = document.getElementById("content-grid");
        if (grid) {
          setTimeout(function() {
            grid.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 50);
        }
      }
    });
  });
}

/* ── Modal ── */
let currentPreviewUrl = "";

function openPreview(url, title) {
  currentPreviewUrl = url;
  document.getElementById("modalTitle").textContent = title;
  document.getElementById("modalUrl").textContent = "📎 " + url;
  document.getElementById("modalFrame").src = url;
  document.getElementById("modalOverlay").classList.add("show");
}

function closePreview() {
  document.getElementById("modalOverlay").classList.remove("show");
  document.getElementById("modalFrame").src = "";
  currentPreviewUrl = "";
}

/* ── Clipboard ── */
function copyToClipboard(url, btn) {
  const fullUrl = window.location.origin + window.location.pathname.replace(/[^/]*$/, "") + url;

  function onSuccess() {
    const origHTML = btn.innerHTML;
    btn.innerHTML = "✅ " + t("copied");
    btn.classList.add("copied");
    showToast(t("toast_copied"));
    setTimeout(() => {
      btn.innerHTML = origHTML;
      btn.classList.remove("copied");
    }, 2000);
  }

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(fullUrl).then(onSuccess).catch(() => {
      fallbackCopy(fullUrl, onSuccess);
    });
  } else {
    fallbackCopy(fullUrl, onSuccess);
  }
}

function fallbackCopy(text, cb) {
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.style.position = "fixed";
  ta.style.left = "-9999px";
  document.body.appendChild(ta);
  ta.select();
  try { document.execCommand("copy"); cb(); } catch (e) { showToast("Copy failed"); }
  document.body.removeChild(ta);
}

/* ── Toast ── */
function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => { toast.classList.remove("show"); }, 2500);
}

/* ── Cookie Consent ── */
function initCookieConsent() {
  if (!localStorage.getItem("cookie-consent")) {
    document.getElementById("cookie-banner").classList.add("show");
  }
  document.getElementById("cookie-accept").addEventListener("click", () => {
    localStorage.setItem("cookie-consent", "1");
    document.getElementById("cookie-banner").classList.remove("show");
  });
}

/* ── Utility ── */
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}
