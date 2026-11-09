module.exports = ({ icon, cta }) => {
  const rows = [
    {
      id: "fuel-supply", icon: "drop", label: "Petroleum Products", img: "refinery-skyline.jpg",
      alt: "A petroleum processing facility under an overcast sky",
      title: "Petroleum Products Supply",
      text: "We supply quality petroleum products for vehicles, generators, machinery and equipment. Every product is handled with care through storage and transport so it reaches you in the right condition.",
      points: ["Petrol (PMS) and Diesel (AGO)", "LPG for households and businesses", "Lubricants for vehicles and machinery", "Product quality checks and documentation"],
      cta: "fuel",
    },
    {
      id: "bulk-supply", icon: "barrel", label: "Bulk Supply", img: "port-bulk-supply.jpg",
      alt: "Cargo vessel and cranes at a busy commercial port",
      title: "Bulk & Commercial Supply",
      text: "For organisations with ongoing or high-volume fuel requirements, we put in place supply arrangements that match your consumption patterns, storage capacity and budget.",
      points: ["Volume supply for businesses and contractors", "Scheduled or on-demand replenishment", "Agreed pricing terms for regular customers", "Clear invoicing and delivery records"],
      cta: "bulk",
    },
    {
      id: "delivery", icon: "tanker", label: "Delivery & Logistics", img: "buffalo-tanker.jpg",
      alt: "A Buffalo Oil fuel tanker on the highway",
      title: "Fuel Delivery & Logistics",
      text: "We bring fuel to where you need it — your site, depot, farm or facility. Deliveries are planned around your operations to minimise downtime.",
      points: ["Delivery to sites, depots and facilities", "Planned scheduling with confirmed time windows", "Safe discharge by trained personnel", "Delivery coverage: <span class=\"ph\">[Confirm service regions]</span>"],
      cta: "delivery",
    },
    {
      id: "lubricants", icon: "oilcan", label: "Lubricants", img: "lubricant-pour.jpg",
      alt: "A technician in protective gloves pouring engine oil into a vehicle",
      title: "Lubricants",
      text: "Quality lubricants help protect engines and machinery, reduce wear and extend service intervals. We can advise on suitable products for your vehicles and equipment.",
      points: ["Engine oils for petrol and diesel vehicles", "Gear oils, hydraulic oils and greases", "Industrial lubricants for plant and machinery", "Brands and grades: <span class=\"ph\">[Confirm product lines]</span>"],
      cta: "lubricants",
    },
    {
      id: "retail", icon: "pump", label: "Fuel Retail", img: "fuel-gauge.jpg",
      alt: "A vehicle fuel gauge approaching empty",
      title: "Fuel Retail",
      text: "Our retail offering is designed around convenience, honesty and courteous service — accurate measures, clean forecourts and attendants who care.",
      points: ["Petrol and diesel for motorists and commercial drivers", "Accurate, calibrated dispensing", "Courteous, well-trained attendants", "Station locations: <span class=\"ph\">[Add once operational]</span>"],
      cta: "retail",
    },
    {
      id: "corporate", icon: "clipboard", label: "Corporate Accounts", img: "corporate-accounts.jpg",
      alt: "A professional reviewing account statements with a calculator and laptop",
      title: "Corporate Fuel Accounts",
      text: "Structured fuel arrangements give organisations better control over fuel spending, with clear documentation and a dedicated point of contact for every request.",
      points: ["Dedicated account contact", "Consolidated invoicing and statements", "Usage reporting to support cost control", "Flexible terms for approved customers"],
      cta: "corporate",
    },
  ];

  const row = (r, i) => `
    <article class="svc-row" id="${r.id}" aria-labelledby="${r.id}-title">
      <div class="svc-row__media reveal">
        <img src="assets/img/${r.img}" alt="${r.alt}" loading="lazy">
        <span class="svc-row__index"><b>0${i + 1}</b>${r.label}</span>
      </div>
      <div class="reveal reveal-d1">
        <span class="icon-tile mb-6">${icon(r.icon)}</span>
        <h2 id="${r.id}-title">${r.title.replace("&", "&amp;")}</h2>
        <p class="lead">${r.text}</p>
        <ul class="check-list">${r.points.map((p) => `<li>${p}</li>`).join("")}</ul>
        <a class="btn btn--dark" href="contact.html?type=business&amp;service=${r.cta}">Enquire about this service ${icon("arrow")}</a>
      </div>
    </article>`;

  return {
    file: "services.html",
    current: "services",
    title: "Our Services | Buffalo Oil Limited",
    description: "Petroleum products supply, bulk and commercial supply, fuel delivery, lubricants, fuel retail and corporate fuel accounts from Buffalo Oil Limited.",
    body: `
<section class="page-hero" aria-labelledby="page-title">
  <div class="page-hero__media"><img src="assets/img/fuel-nozzle.jpg" alt="" fetchpriority="high"></div>
  <div class="container container--wide page-hero__inner">
    <div>
      <ol class="breadcrumb fade-up"><li><a href="index.html">Home</a></li><li aria-current="page">Our Services</li></ol>
      <h1 id="page-title" class="fade-up d1">Energy solutions that <em>keep you moving.</em></h1>
    </div>
    <p class="page-hero__aside fade-up d2">From everyday motoring to large-scale commercial supply, we provide petroleum products and services shaped around your needs.</p>
  </div>
</section>

<nav class="svc-nav" aria-label="Services on this page">
  <div class="container">
    <ul>
      ${rows.map((r) => `<li><a href="#${r.id}">${icon(r.icon)}${r.label}</a></li>`).join("\n      ")}
    </ul>
  </div>
</nav>

<section class="section" style="padding-top:0;padding-bottom:0" aria-label="Service details">
  <div class="container">
    ${rows.map(row).join("\n")}
  </div>
</section>

<section class="section section--paper" aria-labelledby="products-title">
  <div class="container">
    <div class="section-head section-head--split">
      <div class="reveal">
        <p class="eyebrow">Product range</p>
        <h2 class="h2" id="products-title">Products at a glance.</h2>
      </div>
      <p class="lead reveal reveal-d1">A quick reference to the product categories we supply. Contact us for specifications, pricing and current availability.</p>
    </div>
    <div class="products">
      <article class="product reveal"><span class="product__code">PMS</span>${icon("drop", "drop")}<h3>Petrol</h3><p>For cars, motorbikes and light-duty vehicles.</p></article>
      <article class="product reveal reveal-d1"><span class="product__code">AGO</span>${icon("truck", "drop")}<h3>Diesel</h3><p>For trucks, buses, generators and heavy plant.</p></article>
      <article class="product reveal reveal-d2"><span class="product__code">LUB</span>${icon("oilcan", "drop")}<h3>Lubricants</h3><p>Engine, gear and hydraulic oils and greases.</p></article>
      <article class="product reveal reveal-d3"><span class="product__code">LPG</span>${icon("gauge", "drop")}<h3>LPG</h3><p>Liquefied Petroleum Gas for homes and businesses.</p></article>
    </div>
    <p class="note reveal">${icon("info")}<span>Specifications, pricing and supply areas are confirmed at the time of enquiry.</span></p>
  </div>
</section>

<section class="section section--dark" aria-labelledby="process-title">
  <div class="container">
    <div class="section-head section-head--split">
      <div class="reveal">
        <p class="eyebrow">How to order</p>
        <h2 class="h2" id="process-title">From enquiry to delivery in four steps.</h2>
      </div>
      <p class="lead reveal reveal-d1">A straightforward process designed to save you time and give you certainty.</p>
    </div>
    <div class="steps">
      <div class="step reveal"><h3>Send an enquiry</h3><p>Tell us the product, quantity, location and preferred delivery date.</p></div>
      <div class="step reveal reveal-d1"><h3>Receive a quotation</h3><p>We confirm availability and send a clear, itemised quotation.</p></div>
      <div class="step reveal reveal-d2"><h3>Confirm your order</h3><p>Approve the quotation and agree a delivery window that suits you.</p></div>
      <div class="step reveal reveal-d3"><h3>Safe delivery</h3><p>Your order is delivered and documented, with follow-up from our team.</p></div>
    </div>
  </div>
</section>

<section class="section" aria-labelledby="sectors-title">
  <div class="container">
    <div class="section-head reveal">
      <p class="eyebrow">Industries</p>
      <h2 class="h2" id="sectors-title">Sectors we support.</h2>
    </div>
    <div class="sectors reveal">
      <div class="sector sector--light">${icon("car")}<span>Motorists &amp; Individuals</span></div>
      <div class="sector sector--light">${icon("bus")}<span>Transport &amp; Logistics</span></div>
      <div class="sector sector--light">${icon("crane")}<span>Construction</span></div>
      <div class="sector sector--light">${icon("factory")}<span>Manufacturing</span></div>
      <div class="sector sector--light">${icon("tractor")}<span>Agriculture</span></div>
      <div class="sector sector--light">${icon("pickaxe")}<span>Mining</span></div>
      <div class="sector sector--light">${icon("school")}<span>Institutions &amp; Schools</span></div>
      <div class="sector sector--light">${icon("building")}<span>Hospitality &amp; Facilities</span></div>
    </div>
  </div>
</section>

<section class="section section--paper" aria-labelledby="faq-title">
  <div class="container">
    <div class="faq">
      <div class="reveal">
        <p class="eyebrow">FAQs</p>
        <h2 class="h2" id="faq-title">Questions customers often ask.</h2>
        <p class="lead mt-6">Can't find what you're looking for? Our team will be glad to help.</p>
        <a class="btn btn--dark mt-6" href="contact.html">Ask a question ${icon("arrow")}</a>
      </div>
      <div class="faq__list reveal reveal-d1">
        <details open><summary>How do I request a fuel quotation?<span class="pm" aria-hidden="true"></span></summary><div class="faq__answer">Complete the enquiry form on our Contact page with the product, quantity, delivery location and preferred date. A member of our team will respond with a quotation.</div></details>
        <details><summary>Is there a minimum order quantity for delivery?<span class="pm" aria-hidden="true"></span></summary><div class="faq__answer">Minimum quantities depend on the product and delivery location. <span class="ph">[Confirm minimum order policy.]</span></div></details>
        <details><summary>Which areas do you deliver to?<span class="pm" aria-hidden="true"></span></summary><div class="faq__answer">Please share your location when you enquire and we will confirm whether we can serve it. <span class="ph">[List confirmed delivery regions.]</span></div></details>
        <details><summary>Can my organisation set up a fuel account?<span class="pm" aria-hidden="true"></span></summary><div class="faq__answer">Yes. Corporate customers can apply for a fuel account with agreed terms, consolidated invoicing and a dedicated contact. Subject to approval.</div></details>
        <details><summary>What payment methods do you accept?<span class="pm" aria-hidden="true"></span></summary><div class="faq__answer"><span class="ph">[List accepted payment methods, e.g. bank transfer, mobile money.]</span></div></details>
      </div>
    </div>
  </div>
</section>

${cta({ title: "Need fuel for your business?", text: "Tell us what you need and where. We will get back to you with availability, pricing and delivery options.", img: "port-bulk-supply.jpg" })}
`,
  };
};
