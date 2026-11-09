/* Shared partials. In WordPress these become header.php, footer.php,
   template-parts/cta.php and an inline SVG sprite in functions.php. */

const icons = {
  arrow: '<path d="M4 12h15M13 6l6 6-6 6"/>',
  "arrow-up-right": '<path d="M7 17L17 7M8 7h9v9"/>',
  truck: '<path d="M2 6.5h11v9.5H2zM13 9.5h4.5l3.5 3.6V16h-8z"/><circle cx="6.5" cy="17.5" r="2"/><circle cx="17" cy="17.5" r="2"/>',
  tanker: '<path d="M2 8.5a3 3 0 013-3h7.5a3 3 0 013 3v4.5H2z"/><path d="M15.5 9h3l3 3.5V16h-6.5"/><path d="M2 13v3h3.5M10.5 16h2.5"/><circle cx="7.5" cy="17" r="2"/><circle cx="18" cy="17" r="2"/>',
  drop: '<path d="M12 2.8s6.5 7.1 6.5 11.7A6.5 6.5 0 015.5 14.5C5.5 9.9 12 2.8 12 2.8z"/><path d="M9 15a3 3 0 003 3"/>',
  pump: '<path d="M4 21V5a2 2 0 012-2h7a2 2 0 012 2v16M3 21h13M7 7h5v4H7z"/><path d="M15 9h2a2 2 0 012 2v6a1.5 1.5 0 003 0V8.5L19 5"/>',
  factory: '<path d="M2 21V10l6 3.5V10l6 3.5V5h4l1 16zM2 21h20"/><path d="M6 17h2M11 17h2"/>',
  shield: '<path d="M12 2.5l8 3v6c0 5-3.4 8.7-8 10-4.6-1.3-8-5-8-10v-6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
  badge: '<circle cx="12" cy="9" r="6"/><path d="M9 14.5L7.5 22 12 19.5 16.5 22 15 14.5"/><path d="M9.5 9l1.8 1.8L14.5 7.5"/>',
  handshake: '<path d="M2 11l4-4 3 1 3-2 3 1 4 4"/><path d="M2 11l3 3M22 11l-3 3-3.5 3.5a1.6 1.6 0 01-2.3 0L9 13.3"/><path d="M12 6l-3.5 3.5a1.5 1.5 0 002 2L13 9l4 4"/><path d="M8 17l1.5 1.5M10.5 19l1 1"/>',
  clock: '<circle cx="12" cy="12" r="9.5"/><path d="M12 6.5V12l3.5 2"/>',
  phone: '<path d="M5 3h3.5l1.7 4.4-2.2 1.4a11 11 0 006.2 6.2l1.4-2.2L20 14.5V18a2 2 0 01-2 2A16 16 0 013 5a2 2 0 012-2z"/>',
  mail: '<rect x="2.5" y="4.5" width="19" height="15" rx="2"/><path d="M3 6l9 7 9-7"/>',
  pin: '<path d="M12 21.5s7-6.2 7-12a7 7 0 00-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="9.5" r="2.6"/>',
  building: '<path d="M4 21V4.5L13 2v19M13 8.5l7 2V21M2 21h20M7 7h3M7 11h3M7 15h3M16 13h1.5M16 17h1.5"/>',
  oilcan: '<path d="M3 11h11l5-3 2.5 1.5-6 6.5H5a2 2 0 01-2-2z"/><path d="M7 11V8h4v3M21 17.5a1 1 0 11-2 0c0-.8 1-2 1-2s1 1.2 1 2z"/>',
  flame: '<path d="M12 22c4 0 7-2.7 7-6.8 0-3.5-2.2-5.7-3.8-7.7-.4 1.9-1.3 3-2.4 3.6.3-3.2-.9-6.3-3.8-8.6.2 3.4-1.7 5.6-3.3 7.7C4.8 12.2 5 13.8 5 15.2 5 19.3 8 22 12 22z"/><path d="M12 22c-1.7 0-3-1.2-3-3 0-1.9 1.8-3 3-5 1.2 2 3 3.1 3 5 0 1.8-1.3 3-3 3z"/>',
  barrel: '<ellipse cx="12" cy="4.5" rx="7" ry="2"/><path d="M5 4.5v15c0 1.1 3.1 2 7 2s7-.9 7-2v-15M5 9.5c0 1.1 3.1 2 7 2s7-.9 7-2M5 14.5c0 1.1 3.1 2 7 2s7-.9 7-2"/>',
  users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0113 0M16 4.7a3.5 3.5 0 010 6.6M18.5 14a6.5 6.5 0 013 6"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0116 0"/>',
  hardhat: '<path d="M3 17h18v2.5H3zM4.5 17a7.5 7.5 0 0115 0"/><path d="M10 9.7V5h4v4.7M8 10.5V8M16 10.5V8"/>',
  tractor: '<circle cx="7" cy="16" r="4"/><circle cx="18.5" cy="17.5" r="2.5"/><path d="M7 16h.01M11 16h5M3 12V6h6l2 6M11 12h7.5l1 3"/><path d="M15 12V7"/>',
  pickaxe: '<path d="M14 6.5L3.5 20.5M5 6c3.2-2.6 7.6-3.2 11.5-1.5M18 7.5c1.7 3.9 1.1 8.3-1.5 11.5"/><path d="M13.5 4l6.5 6.5"/>',
  crane: '<path d="M6 21V3l13 4M6 3l-3 4h16M6 7h0M9 21H3M15 7v6"/><path d="M13.5 13h3l-.5 3h-2z"/><path d="M6 11l3-4M6 15l3-4"/>',
  bus: '<rect x="4" y="3" width="16" height="15" rx="2.5"/><path d="M4 11h16M8 21v-3M16 21v-3M8 14.5h.01M16 14.5h.01M9 6.5h6"/>',
  gear: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 00.3 1.8l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.7 1.7 0 00-1.8-.3 1.7 1.7 0 00-1 1.5V21a2 2 0 11-4 0v-.1a1.7 1.7 0 00-1.1-1.5 1.7 1.7 0 00-1.8.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.7 1.7 0 00.3-1.8 1.7 1.7 0 00-1.5-1H3a2 2 0 110-4h.1a1.7 1.7 0 001.5-1.1 1.7 1.7 0 00-.3-1.8l-.1-.1a2 2 0 112.8-2.8l.1.1a1.7 1.7 0 001.8.3H9a1.7 1.7 0 001-1.5V3a2 2 0 114 0v.1a1.7 1.7 0 001 1.5 1.7 1.7 0 001.8-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.7 1.7 0 00-.3 1.8V9a1.7 1.7 0 001.5 1H21a2 2 0 110 4h-.1a1.7 1.7 0 00-1.5 1z"/>',
  school: '<path d="M2 9l10-5 10 5-10 5zM6 11v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5M22 9v6"/>',
  car: '<path d="M5 16.5H3.5V12l2-5.5h13l2 5.5v4.5H19M5 12h14"/><circle cx="7.5" cy="16.5" r="2"/><circle cx="16.5" cy="16.5" r="2"/><path d="M9.5 16.5h5"/>',
  ship: '<path d="M2 20c1.5 1 3 1 4.5 0s3-1 4.5 0 3 1 4.5 0 3-1 4.5 0M4 17l-1-5h18l-2.5 5M6 12V7h8v5M9 7V4h2"/>',
  bolt: '<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
  target: '<circle cx="12" cy="12" r="9.5"/><circle cx="12" cy="12" r="5.5"/><circle cx="12" cy="12" r="1.5"/>',
  eye: '<path d="M1.5 12S5.5 4.5 12 4.5 22.5 12 22.5 12 18.5 19.5 12 19.5 1.5 12 1.5 12z"/><circle cx="12" cy="12" r="3"/>',
  heart: '<path d="M12 20.5s-8.5-5-8.5-11A4.8 4.8 0 0112 6.6a4.8 4.8 0 018.5 2.9c0 6-8.5 11-8.5 11z"/>',
  scale: '<path d="M12 3v18M5 21h14M4 7h16M7 7l-3 7a3 3 0 006 0zM17 7l-3 7a3 3 0 006 0z"/>',
  leaf: '<path d="M4 20c0-9 6-15 16-16-1 10-7 16-16 16zM4 20l8-8"/>',
  clipboard: '<rect x="5" y="4" width="14" height="17.5" rx="2"/><path d="M9 4V2.5h6V4M8.5 10h7M8.5 14h7M8.5 18h4"/>',
  calendar: '<rect x="3" y="4.5" width="18" height="16.5" rx="2"/><path d="M3 9.5h18M8 2.5v4M16 2.5v4"/>',
  chat: '<path d="M21 12a8.5 8.5 0 01-12.4 7.6L3 21l1.4-5A8.5 8.5 0 1121 12z"/>',
  quote: '<path d="M10 7H6a3 3 0 00-3 3v3h5v5H3M21 7h-4a3 3 0 00-3 3v3h5v5h-5" />',
  info: '<circle cx="12" cy="12" r="9.5"/><path d="M12 11v5.5M12 7.5h.01"/>',
  check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
  route: '<circle cx="6" cy="19" r="2.5"/><circle cx="18" cy="5" r="2.5"/><path d="M8.5 19H16a3.5 3.5 0 000-7H8a3.5 3.5 0 010-7h7.5"/>',
  gauge: '<path d="M3.5 17a9 9 0 1117 0"/><path d="M12 14l4-5M12 14h.01"/>',
  layers: '<path d="M12 2.5l10 5-10 5-10-5z"/><path d="M2 12l10 5 10-5M2 16.5l10 5 10-5"/>',
  whatsapp: '<path d="M3 21l1.6-4.6A9 9 0 1112 21a9 9 0 01-4.4-1.1z"/><path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.6-2-1-1 1a5 5 0 01-2.9-2.9l1-1-1-2z"/>',
  linkedin: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M7.5 10.5v6M7.5 7.5h.01M11.5 16.5v-6M11.5 13a2.5 2.5 0 015 0v3.5"/>',
  facebook: '<path d="M15 3.5h-2.5A3.5 3.5 0 009 7v3H6.5v3.5H9V21h3.5v-7.5H15l.5-3.5h-3V7.5a1 1 0 011-1H15z"/>',
  instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>',
  x: '<path d="M4 4l16 16M20 4L4 20"/>',
  send: '<path d="M21.5 2.5L10 14M21.5 2.5L14.5 21.5 10 14 2.5 9.5z"/>',
  download: '<path d="M12 3v12M7 10l5 5 5-5M4 20h16"/>',
};

const sprite = `<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false"><defs>${Object.entries(icons)
  .map(([id, d]) => `<symbol id="i-${id}" viewBox="0 0 24 24">${d}</symbol>`)
  .join("")}</defs></svg>`;

const icon = (id, cls = "") => `<svg class="icon ${cls}" aria-hidden="true"><use href="#i-${id}"/></svg>`;

const navItems = [
  { href: "index.html", label: "Home", key: "home" },
  { href: "about.html", label: "About Us", key: "about" },
  { href: "services.html", label: "Our Services", key: "services" },
  { href: "contact.html", label: "Contact Us", key: "contact" },
];

const head = ({ title, description }) => `<!doctype html>
<html lang="en-GH" class="no-js">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${title}</title>
<meta name="description" content="${description}">
<meta name="theme-color" content="#060a11">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${description}">
<meta property="og:type" content="website">
<meta property="og:image" content="assets/img/hero-truck-highway.jpg">
<link rel="icon" type="image/png" href="assets/img/buffalo-mark.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@500;600;700;800&family=Manrope:wght@400;500;600;700;800&family=Montserrat:wght@500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="assets/css/styles.css">
</head>`;

const brand = `<a class="brand" href="index.html" aria-label="Buffalo Oil Limited — home">
  <img class="brand__mark" src="assets/img/buffalo-mark.png" alt="" width="427" height="383">
  <span class="brand__type"><span class="brand__name">BUFFALO OIL</span><span class="brand__sub">LIMITED</span></span>
</a>`;

const header = (current) => `<a class="skip-link" href="#main">Skip to content</a>
<header class="header" role="banner">
  <div class="container container--wide header__inner">
    ${brand}
    <nav class="nav" aria-label="Primary">
      <ul class="nav__list">
        ${navItems.map((n) => `<li><a class="nav__link" href="${n.href}"${n.key === current ? ' aria-current="page"' : ""}>${n.label}</a></li>`).join("\n        ")}
      </ul>
    </nav>
    <a class="btn btn--sm header__cta" href="contact.html">Get in Touch ${icon("arrow")}</a>
    <button class="menu-toggle" type="button" aria-controls="mobile-nav" aria-expanded="false" aria-label="Open menu">
      <span class="menu-toggle__bars"><span></span><span></span></span>
    </button>
  </div>
</header>
<div class="mobile-nav" id="mobile-nav" aria-hidden="true">
  <ul class="mobile-nav__list">
    ${navItems.map((n) => `<li><a href="${n.href}"${n.key === current ? ' aria-current="page"' : ""}>${n.label} ${icon("arrow-up-right")}</a></li>`).join("\n    ")}
  </ul>
  <div class="mobile-nav__foot">
    <a class="btn btn--lg" href="contact.html">Get in Touch ${icon("arrow")}</a>
    <p>${icon("phone", "")} <span class="ph">[Phone number]</span> &nbsp;·&nbsp; <span class="ph">[Email address]</span></p>
  </div>
</div>`;

const cta = ({ title = "Ready to fuel your operations?", text = "Whether you run a fleet, a construction site, a factory or simply need dependable fuel, our team is ready to discuss your requirements and prepare a tailored quotation.", img = "truck-open-road.jpg" } = {}) => `<section class="section section--tight" aria-labelledby="cta-title">
  <div class="container">
    <div class="cta reveal">
      <div class="cta__media"><img src="assets/img/${img}" alt="" loading="lazy"></div>
      <img class="cta__mark" src="assets/img/buffalo-mark.png" alt="">
      <div>
        <p class="eyebrow">Let's work together</p>
        <h2 id="cta-title">${title}</h2>
        <p>${text}</p>
      </div>
      <div class="btn-row">
        <a class="btn btn--lg" href="contact.html?type=business">Request a Quote ${icon("arrow")}</a>
        <a class="btn btn--ghost btn--lg" href="contact.html">Speak to Our Team</a>
      </div>
    </div>
  </div>
</section>`;

const footer = `<footer class="footer" role="contentinfo">
  <div class="container">
    <div class="footer__top">
      <div class="footer__about">
        <a class="brand brand--stacked footer__logo" href="index.html" aria-label="Buffalo Oil Limited — home"><img class="brand__mark" src="assets/img/buffalo-mark.png" alt="" width="427" height="383" loading="lazy"><span class="brand__type"><span class="brand__name">BUFFALO OIL</span><span class="brand__sub">LIMITED</span></span></a>
        <p>Buffalo Oil Limited is a Ghanaian Oil Marketing Company committed to supplying quality petroleum products with reliability, safety and exceptional customer service.</p>
        <div class="socials" aria-label="Social media (links to be added)">
          <a href="#" aria-label="LinkedIn — link to be added">${icon("linkedin")}</a>
          <a href="#" aria-label="Facebook — link to be added">${icon("facebook")}</a>
          <a href="#" aria-label="Instagram — link to be added">${icon("instagram")}</a>
          <a href="#" aria-label="WhatsApp — link to be added">${icon("whatsapp")}</a>
        </div>
      </div>
      <div class="footer__links">
        <h4>Company</h4>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About Us</a></li>
          <li><a href="about.html#values">Our Values</a></li>
          <li><a href="about.html#hse">Health, Safety &amp; Environment</a></li>
          <li><a href="contact.html">Contact Us</a></li>
        </ul>
      </div>
      <div class="footer__links">
        <h4>Services</h4>
        <ul>
          <li><a href="services.html#fuel-supply">Petroleum Products Supply</a></li>
          <li><a href="services.html#bulk-supply">Bulk &amp; Commercial Supply</a></li>
          <li><a href="services.html#delivery">Fuel Delivery &amp; Logistics</a></li>
          <li><a href="services.html#lubricants">Lubricants</a></li>
          <li><a href="services.html#retail">Fuel Retail</a></li>
        </ul>
      </div>
      <div>
        <h4>Get in Touch</h4>
        <ul class="footer__contact">
          <li>${icon("pin")}<span class="ph">[Office address, City, Region, Ghana]</span></li>
          <li>${icon("phone")}<span class="ph">[Phone number]</span></li>
          <li>${icon("mail")}<span class="ph">[Email address]</span></li>
          <li>${icon("clock")}<span class="ph">[Business hours]</span></li>
        </ul>
      </div>
    </div>
    <div class="footer__giant" aria-hidden="true">BUFFALO OIL</div>
    <div class="footer__bottom">
      <p>&copy; <span data-year>2026</span> Buffalo Oil Limited. All rights reserved.</p>
      <ul>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms of Use</a></li>
      </ul>
    </div>
  </div>
</footer>
<script src="assets/js/main.js" defer></script>`;

module.exports = { sprite, icon, head, header, footer, cta };
