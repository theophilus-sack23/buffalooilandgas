/* Builds the static pages from src/. Run: node build.js */
const fs = require("fs");
const path = require("path");
const P = require("./src/partials");

const iconNames = (P.sprite.match(/id="i-([a-z-]+)"/g) || []).map((s) => s.slice(6, -1));
const ctx = { ...P, iconNames };
const pages = ["index", "about", "services", "contact", "styleguide"].map((n) => require(`./src/pages/${n}`)(ctx));

for (const p of pages) {
  const main = p.body.trim().startsWith("<main") ? p.body : `<main id="main">\n${p.body}\n</main>`;
  const html = `${P.head(p).replace("</head>", `${p.extraHead || ""}\n</head>`)}
<body${p.noHero ? ' class="no-hero"' : ""}>
${P.sprite}
${P.header(p.current)}
${main.replace("<main>", '<main id="main">')}
${p.file === "contact.html" ? "" : ""}${P.footer}
</body>
</html>
`;
  fs.writeFileSync(path.join(__dirname, p.file), html);
  console.log("built", p.file, (html.length / 1024).toFixed(1) + " KB");
}
