module.exports = ({ icon, iconNames }) => {
  const swatch = (name, hex, token, dark) => `<div class="sg-swatch"><div class="sg-swatch__chip" style="background:${hex}${dark ? ";color:#fff" : ""}"><span>${hex}</span></div><strong>${name}</strong><code>${token}</code></div>`;
  return {
    file: "styleguide.html",
    current: "",
    noHero: true,
    title: "Design System | Buffalo Oil Limited",
    description: "Buffalo Oil Limited website design system: colours, typography, spacing, components and moodboard.",
    extraHead: `<meta name="robots" content="noindex"><style>
.sg-section{padding-block:64px;border-bottom:1px solid var(--line)}
.sg-section h2{font-size:clamp(1.8rem,1.4rem + 1.4vw,2.6rem);font-weight:800;margin-bottom:8px}
.sg-section>.container>p{color:var(--text-muted);margin-bottom:32px;max-width:640px}
.sg-colors{display:grid;gap:16px;grid-template-columns:repeat(auto-fill,minmax(160px,1fr))}
.sg-swatch strong{display:block;margin-top:10px;font-size:.95rem}.sg-swatch code{font-size:.8rem;color:var(--text-muted)}
.sg-swatch__chip{height:110px;border-radius:14px;border:1px solid var(--line);display:flex;align-items:flex-end;padding:10px 12px;font-size:.8rem;font-weight:700}
.sg-type>div{display:grid;gap:8px 32px;grid-template-columns:1fr;padding:22px 0;border-top:1px solid var(--line);align-items:baseline}
@media(min-width:800px){.sg-type>div{grid-template-columns:200px 1fr}}
.sg-type small{color:var(--text-muted);font-size:.8rem;line-height:1.5}
.sg-row{display:flex;flex-wrap:wrap;gap:16px;align-items:center;padding:28px;border-radius:20px;background:var(--paper)}
.sg-row--dark{background:var(--ink-950)}
.sg-icons{display:grid;gap:10px;grid-template-columns:repeat(auto-fill,minmax(110px,1fr))}
.sg-icons div{display:grid;justify-items:center;gap:10px;padding:18px 8px;border-radius:12px;border:1px solid var(--line);font-size:.72rem;color:var(--text-muted)}
.sg-icons .icon{color:var(--ink-900);width:28px;height:28px}
.sg-space{display:grid;gap:10px}.sg-space div{display:flex;align-items:center;gap:16px;font-size:.85rem}.sg-space span{height:16px;background:var(--orange-500);border-radius:4px}
.sg-mood{display:grid;gap:12px;grid-template-columns:repeat(2,1fr)}
@media(min-width:900px){.sg-mood{grid-template-columns:repeat(4,1fr);grid-auto-rows:220px}.sg-mood .tall{grid-row:span 2}.sg-mood .wide{grid-column:span 2}}
.sg-mood>*{border-radius:16px;overflow:hidden;min-height:180px;position:relative}
.sg-mood img{width:100%;height:100%;object-fit:cover}
.sg-mood .word{display:grid;place-items:center;font-family:var(--font-display);font-weight:800;font-size:1.6rem;letter-spacing:-.02em}
.sg-grid-demo{display:grid;grid-template-columns:repeat(12,1fr);gap:24px;height:120px}.sg-grid-demo span{background:rgba(243,156,31,.15);border:1px dashed var(--orange-500);border-radius:6px}
@media(max-width:700px){.sg-grid-demo{grid-template-columns:repeat(4,1fr);gap:16px}.sg-grid-demo span:nth-child(n+5){display:none}}
</style>`,
    body: `
<main>
<section class="page-hero" style="min-height:440px" aria-labelledby="page-title">
  <div class="page-hero__media"><img src="assets/img/sparks-industry.jpg" alt=""></div>
  <div class="container container--wide page-hero__inner">
    <div><p class="eyebrow">Internal reference</p><h1 id="page-title">Design <em>System.</em></h1></div>
    <p class="page-hero__aside">Tokens, components and art direction for the Buffalo Oil website. Mirrors the Figma pages "Design Overview &amp; Moodboard" and "Design System".</p>
  </div>
</section>

<section class="sg-section"><div class="container">
  <h2>Moodboard &amp; art direction</h2>
  <p>Cinematic, dusk-toned industrial photography; deep blue-black overlays; orange used as light, not decoration. Large confident type, generous space, asymmetric compositions.</p>
  <div class="sg-mood">
    <div class="tall"><img src="assets/img/hero-truck-highway.jpg" alt="Truck on a highway at dusk"></div>
    <div class="word" style="background:var(--orange-500)">Energy</div>
    <div><img src="assets/img/process-pipework.jpg" alt="Industrial pipework"></div>
    <div class="tall"><img src="assets/img/technician-hardhat.jpg" alt="Technician in hard hat"></div>
    <div class="wide"><img src="assets/img/refinery-skyline.jpg" alt="Refinery skyline"></div>
    <div class="word" style="background:var(--ink-950);color:#fff">Trust</div>
    <div class="word" style="background:var(--brown-700);color:#fff">Strength</div>
    <div class="wide"><img src="assets/img/hero-truck-highway.jpg" alt="Truck under a blue sky"></div>
  </div>
</div></section>

<section class="sg-section"><div class="container">
  <h2>Logo</h2>
  <p>Primary asset supplied by the client. The bull mark is taken from the supplied logo; the BUFFALO OIL / LIMITED wordmark is typeset in Montserrat so it stays crisp at every size. Horizontal lockup for the header, stacked lockup for the footer. Request a vector (SVG) master for production.</p>
  <div class="sg-row sg-row--dark" style="gap:48px">
    <span class="brand brand--stacked" style="color:#fff"><img class="brand__mark" src="assets/img/buffalo-mark.png" alt=""><span class="brand__type"><span class="brand__name">BUFFALO OIL</span><span class="brand__sub">LIMITED</span></span></span>
    <span class="brand" style="color:#fff"><img class="brand__mark" src="assets/img/buffalo-mark.png" alt=""><span class="brand__type"><span class="brand__name">BUFFALO OIL</span><span class="brand__sub">LIMITED</span></span></span>
    <img src="assets/img/buffalo-mark.png" alt="Bull mark" width="90">
  </div>
</div></section>

<section class="sg-section"><div class="container">
  <h2>Colour</h2>
  <p>Four brand families derived from the logo: Orange, Brown, White and Blue-black. No other hues are used.</p>
  <div class="sg-colors">
    ${swatch("Orange 500 · Primary", "#f39c1f", "--orange-500")}
    ${swatch("Orange 600 · Hover", "#e2820f", "--orange-600")}
    ${swatch("Orange 300", "#f9c06a", "--orange-300")}
    ${swatch("Brown 700", "#7b3f12", "--brown-700", 1)}
    ${swatch("Brown 900", "#3d1f0b", "--brown-900", 1)}
    ${swatch("Brown 300", "#c99467", "--brown-300")}
    ${swatch("Blue-black 950", "#060a11", "--ink-950", 1)}
    ${swatch("Blue-black 800", "#111a29", "--ink-800", 1)}
    ${swatch("Slate 400 (text on dark)", "#5d6a80", "--ink-400", 1)}
    ${swatch("White", "#ffffff", "--white")}
    ${swatch("Warm White", "#f7f5f1", "--paper")}
    ${swatch("Warm White 2", "#efebe4", "--paper-2")}
  </div>
</div></section>

<section class="sg-section"><div class="container">
  <h2>Typography</h2>
  <p>Archivo (display, 700–800, tight tracking) with Manrope (body, 400–800). Montserrat is reserved for the logo lockup only. Fluid sizes via clamp().</p>
  <div class="sg-type">
    <div><small>Display<br>Archivo 800 · 46–102px</small><span class="display">Fueling Ghana's Future.</span></div>
    <div><small>H1<br>Archivo 800 · 40–74px</small><span class="h1">Built on strength.</span></div>
    <div><small>H2<br>Archivo 800 · 32–56px</small><span class="h2">A fuel partner you can depend on.</span></div>
    <div><small>H3<br>Archivo 700 · 22–30px</small><span class="h3">Bulk &amp; Commercial Supply</span></div>
    <div><small>Lead<br>Manrope 400 · 17–21px</small><span class="lead">Delivering dependable petroleum solutions with a commitment to quality, reliability and exceptional service.</span></div>
    <div><small>Body<br>Manrope 400 · 17px / 1.7</small><span>We are building our business on a simple promise: the right product, delivered safely, at the agreed time.</span></div>
    <div><small>Eyebrow<br>Manrope 800 · 12.5px · 0.2em</small><span class="eyebrow" style="margin:0">Who we are</span></div>
  </div>
</div></section>

<section class="sg-section"><div class="container">
  <h2>Buttons &amp; links</h2>
  <p>Pill buttons, 54px min height (44px small, 62px large) for touch. Hover sweeps a fill from below; arrow nudges right.</p>
  <div class="sg-row"><a class="btn" href="#">Primary ${icon("arrow")}</a><a class="btn btn--dark" href="#">Dark ${icon("arrow")}</a><a class="btn btn--outline" href="#">Outline</a><a class="btn btn--sm" href="#">Small</a><a class="btn btn--lg" href="#">Large ${icon("arrow")}</a><a class="link-arrow" href="#">Text link ${icon("arrow")}</a></div>
  <div class="sg-row sg-row--dark mt-5"><a class="btn" href="#">Primary ${icon("arrow")}</a><a class="btn btn--ghost" href="#">Ghost</a><a class="link-arrow" style="color:#fff" href="#">Text link ${icon("arrow")}</a></div>
</div></section>

<section class="sg-section"><div class="container">
  <h2>Form fields</h2>
  <p>56px inputs on warm white, orange focus ring, inline error state.</p>
  <div class="form-grid" style="max-width:820px">
    <div class="field"><label>Default</label><input class="input" placeholder="Placeholder"></div>
    <div class="field is-invalid"><label>Error state</label><input class="input" value="not-an-email"><span class="field__error">Please enter a valid email address.</span></div>
    <div class="field"><label>Select</label><select class="select"><option>Diesel (AGO)</option></select></div>
    <div class="field"><label>Segmented choice</label><div class="segmented"><input type="radio" id="sg1" name="sg" checked><label for="sg1">Individual</label><input type="radio" id="sg2" name="sg"><label for="sg2">Business</label></div></div>
  </div>
</div></section>

<section class="sg-section"><div class="container">
  <h2>Cards</h2>
  <p>Service card (default + feature), product card, contact card, testimonial card. Editable placeholders use the dashed orange style: <span class="ph">[Placeholder]</span></p>
  <div class="services-grid" style="max-width:820px;grid-template-columns:repeat(auto-fit,minmax(260px,1fr))">
    <article class="service-card service-card--feature"><span class="service-card__num">01</span><span class="icon-tile">${icon("drop")}</span><h3>Feature card</h3><p>Orange variant, used once per grid.</p></article>
    <article class="service-card"><div class="service-card__bg"><img src="assets/img/port-bulk-supply.jpg" alt=""></div><span class="service-card__num">02</span><span class="icon-tile">${icon("barrel")}</span><h3>Default card</h3><p>Image reveals on hover.</p></article>
  </div>
  <div class="contact-cards mt-6" style="max-width:820px;grid-template-columns:repeat(auto-fit,minmax(240px,1fr))">
    <article class="product"><span class="product__code">AGO</span>${icon("truck", "drop")}<h3>Product card</h3><p>Lifts and gains an orange border on hover.</p></article>
    <article class="contact-card"><span class="icon-tile icon-tile--solid">${icon("phone")}</span><h3>Contact card</h3><span class="contact-card__value"><span class="ph">[Phone number]</span></span></article>
  </div>
</div></section>

<section class="sg-section"><div class="container">
  <h2>Iconography</h2>
  <p>Custom 24px line set, 1.6px stroke, round caps and joins. Use orange on dark, ink on light.</p>
  <div class="sg-icons">${iconNames.map((n) => `<div>${icon(n)}<span>${n}</span></div>`).join("")}</div>
</div></section>

<section class="sg-section"><div class="container">
  <h2>Spacing, radii &amp; grid</h2>
  <p>4px base scale. 12-column grid, 1280px container, 24px gutters (16px on mobile). Radii: 8 / 14 / 22 / 32 / pill.</p>
  <div class="sg-space">
    ${[["s-1", 4], ["s-2", 8], ["s-3", 12], ["s-4", 16], ["s-5", 24], ["s-6", 32], ["s-7", 48], ["s-8", 64], ["s-9", 96], ["s-10", 128]].map(([n, v]) => `<div><code style="width:60px">--${n}</code><span style="width:${v}px"></span>${v}px</div>`).join("")}
  </div>
  <div class="sg-grid-demo mt-7">${"<span></span>".repeat(12)}</div>
  <div class="sg-row mt-6" style="gap:20px">${[8, 14, 22, 32, 999].map((r) => `<div style="width:90px;height:90px;background:var(--ink-950);border-radius:${r}px;display:grid;place-items:center;color:#fff;font-size:.8rem">${r === 999 ? "pill" : r + "px"}</div>`).join("")}</div>
</div></section>
</main>
`,
  };
};
