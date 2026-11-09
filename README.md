# Buffalo Oil Limited: Corporate Website

A high-fidelity, responsive four-page corporate website for Buffalo Oil Limited, with a design-system reference page.

| File | Purpose |
|---|---|
| `index.html` | Home: hero, introduction, services, why choose us, products, HSE band, sectors, testimonials (placeholders), CTA |
| `about.html` | About Us: story, company facts, mission and vision (draft), values, approach, HSE, leadership (placeholders) |
| `services.html` | Our Services: six detailed services with sticky in-page nav, product range, ordering process, sectors, FAQs |
| `contact.html` | Contact Us: contact cards, validated enquiry form with success state, business hours, map slot, FAQs |
| `styleguide.html` | Design system: moodboard, logo usage, colours, type, buttons, form fields, cards, icons, spacing and grid |

Open any `.html` file in a browser. No server is needed.

## Editing
- Pages are generated from `src/`. Edit `src/pages/*.js` (content) or `src/partials.js` (header, footer, CTA, icons), then run `node build.js`.
- Styles: `assets/css/styles.css`. All colours, type sizes, spacing, radii and motion values are CSS variables at the top of the file.
- Behaviour: `assets/js/main.js` (sticky header, mobile menu, scroll reveal, parallax, form validation). It has no dependencies.

## Before launch: placeholders
Any detail that isn't confirmed yet appears as a dashed orange **[placeholder]**. Search the HTML for `class="ph"` to find them all:
phone, email, address, WhatsApp, business hours, NPA licence number, HQ city, delivery regions, payment methods,
minimum order policy, response time, station locations, lubricant brands, leadership profiles,
founding story, mission and vision approval, testimonials, social media links and the Google Map embed.
No history, statistics, certifications, partners or testimonials have been invented.

## Images
- The photography is royalty-free Unsplash stock (Unsplash License), stored in `assets/img/`. It is a stand-in only. Replace it with commissioned photos of Buffalo Oil's own trucks, staff and facilities in Ghana, especially the home hero, which should show a Buffalo Oil tanker.
- Logo: `buffalo-oil-logo-transparent.png` and `buffalo-mark.png` are cut from the supplied raster logo with the black background removed. Ask the designer for a vector (SVG) master so the logo stays sharp at every size.

## WordPress translation
- `src/partials.js` maps to `header.php`, `footer.php` and `template-parts/cta.php`. Each page maps to a page template, or to a block pattern per section.
- The CSS variables map to `theme.json` presets (colour palette, font sizes, spacing scale).
- Connect the contact form to Contact Form 7, WPForms or Gravity Forms, keeping the same field names. The front-end validation in `main.js` can stay.
