import { site, projects, caseStudies, posts, findBySlug, featuredCases, featuredPosts } from "./content.js";

const body = document.body;
const base = body.dataset.base || "";
const isPreview = window.location.hostname.endsWith("manus.computer");
const escapeHtml = (value = "") => String(value).replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#039;", '"': "&quot;" }[char]));
const route = (path) => `${base}${path}`;
const imageSource = (media) => (isPreview && media.previewSrc ? media.previewSrc : route(media.src || ""));

function artMedia(media, className = "") {
  if (!media) return "";
  if (media.type === "embed") {
    return `<div class="media-embed ${className}">${media.embedHtml || "<p>Add trusted HTML embed code in content.js.</p>"}</div>`;
  }
  if (media.type === "art") {
    return `<div class="artboard artboard--${escapeHtml(media.theme || "score")} ${className}" role="img" aria-label="${escapeHtml(media.label || "Editorial placeholder artwork")}"><span class="artboard__sun"></span><span class="artboard__bar"></span><span class="artboard__disc"></span><span class="artboard__caption">${escapeHtml(media.label || "Replace with image, GIF, or embed")}</span></div>`;
  }
  const kind = media.type === "gif" ? "media--gif" : "";
  return `<figure class="media-image ${kind} ${className}"><img src="${escapeHtml(imageSource(media))}" alt="${escapeHtml(media.alt || "Portfolio media")}" loading="lazy"></figure>`;
}

function chrome() {
  const header = document.querySelector("[data-site-header]");
  const footer = document.querySelector("[data-site-footer]");
  const nav = [
    ["Home", "index.html"],
    ["About", "about.html"],
    ["Contact", "mailto:sylvia@bloomvisually.com"]
  ];
  const navHref = (href) => href.includes(":") ? href : `${base}${href}`;
  const navLinks = nav.map(([label, href]) => `<a href="${navHref(href)}">${label}</a>`).join("");
  if (header) header.innerHTML = `
    <a class="brand" href="${base}index.html" aria-label="Sylvia Produces home">
      <img class="brand__mark" src="${base}assets/logo.svg" alt="">
      <span>SYLVIA<br>PRODUCES</span>
    </a>
    <nav class="nav nav--desktop" aria-label="Primary">${navLinks}</nav>
    <button class="menu-button" aria-expanded="false" aria-controls="site-menu" type="button"><span>Menu</span><i></i></button>
    <div class="menu-overlay" id="site-menu" aria-hidden="true">
      <div class="menu-overlay__top"><span>Navigation</span><span>01–03</span></div>
      <nav class="menu-overlay__links" aria-label="Mobile">${nav.map(([label, href], index) => `<a href="${navHref(href)}"><em>0${index + 1}</em>${label}</a>`).join("")}</nav>
      <a class="menu-overlay__contact" href="mailto:${site.email}">Let’s make something happen <span>↗</span></a>
    </div>`;
  if (footer) footer.innerHTML = `
    <div class="footer__orbit" aria-hidden="true"><span>LET’S WORK TOGETHER · LET’S WORK TOGETHER · </span></div>
    <div class="footer__grid">
      <div><p class="eyebrow">Available for</p><p class="footer__availability">Select production & operations collaborations.</p></div>
      <div><p class="eyebrow">Based in</p><p>${site.location}</p></div>
      <div><p class="eyebrow">Find Sylvia</p><div class="footer__links">${site.social.map((item) => `<a href="${item.href}" target="${item.href.startsWith("http") ? "_blank" : "_self"}" rel="noreferrer">${item.label} ↗</a>`).join("")}</div></div>
    </div>
    <div class="footer__bottom"><span>© ${new Date().getFullYear()} Sylvia Produces</span><a href="#top">Back to top ↑</a></div>`;
}

function card(item, type) {
  const href = route(item.path);
  return `<article class="work-card reveal reveal--card">
    <a href="${href}" class="work-card__link" aria-label="Read ${escapeHtml(item.title)}">
      ${artMedia(item.media, "work-card__media")}
      <div class="work-card__meta"><span>${escapeHtml(item.eyebrow || item.category || type)}</span><span>${escapeHtml(item.year || item.date || "")}</span></div>
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.summary || item.deck || "")}</p>
      <span class="read-link">View ${type} <b>↗</b></span>
    </a>
  </article>`;
}

function renderCollections() {
  const caseGrid = document.querySelector("[data-case-grid]");
  const projectGrid = document.querySelector("[data-project-grid]");
  const postGrid = document.querySelector("[data-post-grid]");
  if (caseGrid) caseGrid.innerHTML = (body.dataset.limit === "all" ? caseStudies : featuredCases()).map((item) => card(item, "case study")).join("");
  if (projectGrid) projectGrid.innerHTML = projects.map((item) => card(item, "project")).join("");
  if (postGrid) postGrid.innerHTML = (body.dataset.limit === "all" ? posts : featuredPosts()).map((item) => card(item, "article")).join("");
}

function factList(facts = []) {
  return `<dl class="facts">${facts.map(([term, value]) => `<div><dt>${escapeHtml(term)}</dt><dd>${escapeHtml(value)}</dd></div>`).join("")}</dl>`;
}

function renderDetail() {
  const root = document.querySelector("[data-detail-root]");
  if (!root) return;
  const collection = body.dataset.detailType === "post" ? posts : body.dataset.detailType === "project" ? projects : caseStudies;
  const record = findBySlug(collection, body.dataset.slug);
  if (!record) {
    root.innerHTML = `<section class="not-found"><p class="eyebrow">Not found</p><h1>This page wandered off set.</h1><a class="button" href="${base}index.html#work">Return to the portfolio</a></section>`;
    return;
  }
  const isPost = body.dataset.detailType === "post";
  const facts = record.facts || [["Role", record.role], ["Year", record.year], ["Scope", (record.tags || []).join(" · ")]];
  const content = isPost
    ? `<div class="article-body">${record.body.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}</div>`
    : `<div class="detail-sections">${record.sections.map((section, index) => `<section class="detail-section reveal"><span class="detail-section__number">0${index + 1}</span><div><h2>${escapeHtml(section.heading)}</h2><p>${escapeHtml(section.body)}</p></div></section>`).join("")}</div>
       <section class="outcomes reveal"><p class="eyebrow">Production notes</p><h2>Made to give the next decision a clear place to land.</h2><ul>${record.outcomes.map((item) => `<li>${escapeHtml(item)} <span>↗</span></li>`).join("")}</ul></section>`;
  const backHref = isPost ? "index.html#writing" : "index.html#work";
  root.innerHTML = `<article class="detail">
    <a class="back-link" href="${base}${backHref}">← Back to ${isPost ? "writing" : "portfolio"}</a>
    <header class="detail-hero reveal"><p class="eyebrow">${escapeHtml(record.eyebrow || record.category || "Writing")}</p><h1>${escapeHtml(record.title)}</h1><p class="detail-hero__deck">${escapeHtml(record.deck || record.summary || record.intro || "")}</p><div class="detail-hero__meta"><span>${escapeHtml(record.role || record.category || "Sylvia Produces")}</span><span>${escapeHtml(record.year || record.date)}</span><span>${escapeHtml(record.readTime || (record.tags || []).join(" · "))}</span></div></header>
    ${artMedia(record.media, "detail-media reveal")}
    <div class="detail-layout"><aside>${factList(facts)}</aside><div><p class="detail-intro">${escapeHtml(record.intro || "")}</p>${content}</div></div>
  </article>`;
}

function setupMenu() {
  const button = document.querySelector(".menu-button");
  const menu = document.querySelector(".menu-overlay");
  if (!button || !menu) return;
  const setOpen = (open) => {
    document.documentElement.classList.toggle("menu-is-open", open);
    button.setAttribute("aria-expanded", String(open));
    menu.setAttribute("aria-hidden", String(!open));
    if (open) menu.querySelector("a")?.focus();
    else button.focus();
  };
  button.addEventListener("click", () => setOpen(button.getAttribute("aria-expanded") !== "true"));
  menu.addEventListener("click", (event) => { if (event.target.matches("a")) setOpen(false); });
  document.addEventListener("keydown", (event) => { if (event.key === "Escape" && button.getAttribute("aria-expanded") === "true") setOpen(false); });
}

function setupReveals() {
  const items = document.querySelectorAll(".reveal");
  if (!items.length || window.matchMedia("(prefers-reduced-motion: reduce)").matches) { items.forEach((item) => item.classList.add("is-visible")); return; }
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); } }), { threshold: 0.12 });
  items.forEach((item) => observer.observe(item));
}

function setupHeroMedia() {
  const heroImage = document.querySelector("[data-hero-image]");
  if (!heroImage) return;
  heroImage.src = imageSource(site.heroMedia);
  heroImage.alt = site.heroMedia.alt;
}

chrome();
setupHeroMedia();
renderCollections();
renderDetail();
setupMenu();
setupReveals();
