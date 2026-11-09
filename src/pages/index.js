module.exports = ({ icon, cta }) => ({
  file: "index.html",
  current: "home",
  title: "Buffalo Oil Limited | Fueling Ghana's Future",
  description: "Buffalo Oil Limited is a Ghanaian Oil Marketing Company delivering dependable petroleum solutions with a commitment to quality, reliability and exceptional service.",
  body: `
<section class="hero" aria-labelledby="hero-title">
  <div class="hero__media">
    <img src="assets/img/buffalo-tanker.jpg" alt="A Buffalo Oil fuel tanker on the highway" fetchpriority="high" style="object-position:68% 55%">
  </div>
  <div class="hero__overlay"></div>
  <div class="hero__grain"></div>
  <span class="hero__side">Oil Marketing Company &nbsp;—&nbsp; Ghana</span>
  <div class="container container--wide hero__inner">
    <div class="hero__content">
      <p class="hero__kicker fade-up"><b>OMC</b> A Ghanaian Oil Marketing Company</p>
      <h1 class="hero__title" id="hero-title">
        <span class="line"><span>Fueling Ghana's</span></span>
        <span class="line"><span><em>Future.</em></span></span>
      </h1>
      <p class="hero__text fade-up d1">Delivering dependable petroleum solutions with a commitment to quality, reliability and exceptional service.</p>
      <div class="btn-row fade-up d2">
        <a class="btn btn--lg" href="services.html">Explore Our Services ${icon("arrow")}</a>
        <a class="btn btn--ghost btn--lg" href="contact.html">Contact Us</a>
      </div>
    </div>
    <div class="hero__bar fade-up d3">
      <div class="hero__pillar">${icon("badge")}<div><h3>Quality Products</h3><p>Petroleum products handled to strict quality standards.</p></div></div>
      <div class="hero__pillar">${icon("truck")}<div><h3>Dependable Supply</h3><p>Planned, accountable delivery you can schedule around.</p></div></div>
      <div class="hero__pillar">${icon("handshake")}<div><h3>Customer Focused</h3><p>A responsive team that treats every order with care.</p></div></div>
      <a class="hero__scroll" href="#intro" aria-label="Scroll to introduction"><span></span></a>
    </div>
  </div>
</section>

<section class="section" id="intro" aria-labelledby="intro-title">
  <div class="container">
    <div class="split">
      <div class="media-stack reveal">
        <span class="media-stack__frame" aria-hidden="true"></span>
        <div class="media-stack__main media-stack__main--night"><img src="assets/img/buffalo-station-night.jpg" alt="A Buffalo Oil filling station lit up at night" loading="lazy" style="object-position:50% 30%"><span class="media-stack__tag"><img src="assets/img/buffalo-mark.png" alt="" width="427" height="383">Buffalo Oil filling station</span></div>
        <div class="media-stack__float"><img src="assets/img/fuel-gauge.jpg" alt="A vehicle fuel gauge approaching empty" loading="lazy"></div>
        <div class="media-stack__badge">
          <span class="icon-tile icon-tile--solid">${icon("shield")}</span>
          <div><strong>Safety First</strong><span>Every delivery, every site, every time.</span></div>
        </div>
      </div>
      <div class="reveal reveal-d1">
        <p class="eyebrow">Who we are</p>
        <h2 class="h2" id="intro-title">Driving Progress Through Reliable Energy Solutions.</h2>
        <p class="lead mt-6">Buffalo Oil Limited is a growing Ghanaian Oil Marketing Company committed to providing quality petroleum products and dependable energy solutions to individuals, businesses and institutions.</p>
        <p class="muted">We are building our business on a simple promise: the right product, delivered safely, at the agreed time — backed by people who listen and respond. As Ghana's economy grows, we aim to be a fuel partner our customers can rely on without a second thought.</p>
        <ul class="check-list check-list--2">
          <li>Quality-assured petroleum products</li>
          <li>Transparent, competitive pricing</li>
          <li>Safety-led operations</li>
          <li>Responsive customer support</li>
        </ul>
        <a class="btn btn--dark" href="about.html">Learn More About Us ${icon("arrow")}</a>
      </div>
    </div>
  </div>
</section>

<div class="marquee" aria-hidden="true">
  <div class="marquee__track">
    <span>Quality</span><span>Reliability</span><span>Safety</span><span>Integrity</span><span>Service</span><span>Fueling Ghana's Future</span>
    <span>Quality</span><span>Reliability</span><span>Safety</span><span>Integrity</span><span>Service</span><span>Fueling Ghana's Future</span>
  </div>
</div>

<section class="section section--dark" aria-labelledby="services-title">
  <div class="container">
    <div class="section-head section-head--split">
      <div class="reveal">
        <p class="eyebrow">What we do</p>
        <h2 class="h2" id="services-title">Petroleum solutions built around your needs.</h2>
      </div>
      <div class="reveal reveal-d1">
        <p class="lead">From a single delivery to an ongoing supply arrangement, Buffalo Oil offers practical fuel solutions for motorists, fleet operators and corporate customers.</p>
        <a class="link-arrow mt-5" href="services.html">View all services ${icon("arrow")}</a>
      </div>
    </div>
    <div class="services-grid reveal">
      <article class="service-card service-card--feature">
        <span class="service-card__num">01</span>
        <span class="icon-tile">${icon("drop")}</span>
        <h3>Petroleum Products Supply</h3>
        <p>Supply of quality fuels for vehicles, machinery and equipment, sourced and handled to the required standards.</p>
        <a class="link-arrow" href="services.html#fuel-supply">Learn more ${icon("arrow")}</a>
      </article>
      <article class="service-card">
        <div class="service-card__bg"><img src="assets/img/port-bulk-supply.jpg" alt="" loading="lazy"></div>
        <span class="service-card__num">02</span>
        <span class="icon-tile">${icon("barrel")}</span>
        <h3>Bulk &amp; Commercial Supply</h3>
        <p>Volume supply arrangements for businesses, contractors and institutions with ongoing fuel requirements.</p>
        <a class="link-arrow" href="services.html#bulk-supply">Learn more ${icon("arrow")}</a>
      </article>
      <article class="service-card">
        <div class="service-card__bg"><img src="assets/img/buffalo-tanker.jpg" alt="" loading="lazy"></div>
        <span class="service-card__num">03</span>
        <span class="icon-tile">${icon("tanker")}</span>
        <h3>Fuel Delivery &amp; Logistics</h3>
        <p>Scheduled delivery of fuel to your site, depot or facility, planned around your operations.</p>
        <a class="link-arrow" href="services.html#delivery">Learn more ${icon("arrow")}</a>
      </article>
      <article class="service-card">
        <div class="service-card__bg"><img src="assets/img/lubricant-pour.jpg" alt="" loading="lazy"></div>
        <span class="service-card__num">04</span>
        <span class="icon-tile">${icon("oilcan")}</span>
        <h3>Lubricants</h3>
        <p>Engine oils and industrial lubricants that help protect vehicles and machinery and extend service life.</p>
        <a class="link-arrow" href="services.html#lubricants">Learn more ${icon("arrow")}</a>
      </article>
      <article class="service-card">
        <div class="service-card__bg"><img src="assets/img/fuel-nozzle.jpg" alt="" loading="lazy"></div>
        <span class="service-card__num">05</span>
        <span class="icon-tile">${icon("pump")}</span>
        <h3>Fuel Retail</h3>
        <p>Convenient, well-run fuel retail for motorists and commercial drivers, with honest measures and courteous service.</p>
        <a class="link-arrow" href="services.html#retail">Learn more ${icon("arrow")}</a>
      </article>
      <article class="service-card">
        <div class="service-card__bg"><img src="assets/img/corporate-accounts.jpg" alt="" loading="lazy"></div>
        <span class="service-card__num">06</span>
        <span class="icon-tile">${icon("clipboard")}</span>
        <h3>Corporate Fuel Accounts</h3>
        <p>Structured fuel arrangements for organisations, with clear documentation and a dedicated point of contact.</p>
        <a class="link-arrow" href="services.html#corporate">Learn more ${icon("arrow")}</a>
      </article>
    </div>
  </div>
</section>

<section class="section" aria-labelledby="why-title">
  <div class="container">
    <div class="section-head reveal">
      <p class="eyebrow">Why Buffalo Oil</p>
      <h2 class="h2" id="why-title">A fuel partner you can depend on.</h2>
    </div>
    <div class="why">
      <div class="why__media reveal">
        <img src="assets/img/technician-hardhat.jpg" alt="A technician in a yellow hard hat and safety glasses working on equipment" loading="lazy">
        <p class="why__quote">"We measure ourselves by one thing — whether our customers can count on us."<small>Our commitment</small></p>
      </div>
      <ol class="why__list">
        <li class="why__item reveal"><h3>Quality you can trust</h3><p>We handle, store and transport products with care so that what reaches you meets the expected specification.</p></li>
        <li class="why__item reveal reveal-d1"><h3>Reliability in every delivery</h3><p>Clear scheduling, honest timelines and proactive communication — so you can plan your operations with confidence.</p></li>
        <li class="why__item reveal reveal-d2"><h3>Safety without compromise</h3><p>Safe practices guide how we load, transport and discharge fuel, protecting people, property and the environment.</p></li>
        <li class="why__item reveal reveal-d3"><h3>Service that responds</h3><p>A team that answers, follows up and takes ownership — from the first enquiry through to every repeat order.</p></li>
      </ol>
    </div>
  </div>
</section>

<section class="section section--paper" aria-labelledby="products-title">
  <div class="container">
    <div class="section-head section-head--split">
      <div class="reveal">
        <p class="eyebrow">Our products</p>
        <h2 class="h2" id="products-title">The fuels that keep Ghana moving.</h2>
      </div>
      <p class="lead reveal reveal-d1">A focused product range for transport, industry and everyday motoring. Speak with our team about specifications, quantities and delivery.</p>
    </div>
    <div class="products">
      <article class="product reveal"><span class="product__code">PMS</span>${icon("drop", "drop")}<h3>Petrol</h3><p>Premium Motor Spirit for cars, motorbikes and light vehicles.</p></article>
      <article class="product reveal reveal-d1"><span class="product__code">AGO</span>${icon("truck", "drop")}<h3>Diesel</h3><p>Automotive Gas Oil for trucks, buses, generators and heavy machinery.</p></article>
      <article class="product reveal reveal-d2"><span class="product__code">LUB</span>${icon("oilcan", "drop")}<h3>Lubricants</h3><p>Engine oils, gear oils and greases for vehicles and equipment.</p></article>
      <article class="product reveal reveal-d3"><span class="product__code">LPG</span>${icon("gauge", "drop")}<h3>LPG</h3><p>Liquefied Petroleum Gas for households and businesses.</p></article>
    </div>
    <p class="note reveal">${icon("info")}<span>Specifications, pricing and supply areas are confirmed at the time of enquiry.</span></p>
  </div>
</section>

<section class="band" aria-labelledby="band-title">
  <div class="band__media" data-parallax><img src="assets/img/refinery-skyline.jpg" alt="" loading="lazy"></div>
  <div class="container">
    <div class="band__inner reveal">
      <p class="eyebrow">Health, Safety &amp; Environment</p>
      <h2 id="band-title">Safety is not a policy. It is how we work.</h2>
      <p>Petroleum demands respect. We are committing to disciplined handling procedures, trained personnel and responsible environmental practice across everything we do.</p>
      <div class="band__chips">
        <span class="chip">${icon("hardhat")} Trained personnel</span>
        <span class="chip">${icon("shield")} Safe handling procedures</span>
        <span class="chip">${icon("leaf")} Environmental responsibility</span>
        <span class="chip">${icon("scale")} Regulatory compliance</span>
      </div>
    </div>
  </div>
</section>

<section class="section section--dark" aria-labelledby="sectors-title">
  <div class="container">
    <div class="section-head section-head--split">
      <div class="reveal">
        <p class="eyebrow">Who we serve</p>
        <h2 class="h2" id="sectors-title">Energy for every part of the economy.</h2>
      </div>
      <p class="lead reveal reveal-d1">We work with individual customers and organisations alike. If your work depends on fuel, we would like to hear from you.</p>
    </div>
    <div class="sectors reveal">
      <div class="sector">${icon("car")}<span>Motorists &amp; Individuals</span></div>
      <div class="sector">${icon("bus")}<span>Transport &amp; Logistics</span></div>
      <div class="sector">${icon("crane")}<span>Construction</span></div>
      <div class="sector">${icon("factory")}<span>Manufacturing</span></div>
      <div class="sector">${icon("tractor")}<span>Agriculture</span></div>
      <div class="sector">${icon("pickaxe")}<span>Mining</span></div>
      <div class="sector">${icon("school")}<span>Institutions &amp; Schools</span></div>
      <div class="sector">${icon("building")}<span>Hospitality &amp; Facilities</span></div>
    </div>
  </div>
</section>

<section class="section section--paper" aria-labelledby="voices-title">
  <div class="container">
    <div class="section-head reveal">
      <p class="eyebrow">Customer voices</p>
      <h2 class="h2" id="voices-title">What our customers say.</h2>
      <p class="lead">Space reserved for genuine feedback from Buffalo Oil customers, to be published with their permission.</p>
    </div>
    <div class="testimonials">
      <figure class="testimonial testimonial--lead reveal">
        <span class="placeholder-tag">Placeholder</span>
        <span class="testimonial__mark" aria-hidden="true">&ldquo;</span>
        <blockquote><span class="ph">[Customer testimonial — add a verified quote from a customer once available.]</span></blockquote>
        <figcaption class="testimonial__who"><span class="avatar">AB</span><div><strong><span class="ph">[Customer name]</span></strong><span><span class="ph">[Role, Company]</span></span></div></figcaption>
      </figure>
      <figure class="testimonial reveal reveal-d1">
        <span class="placeholder-tag">Placeholder</span>
        <span class="testimonial__mark" aria-hidden="true">&ldquo;</span>
        <blockquote><span class="ph">[Customer testimonial]</span></blockquote>
        <figcaption class="testimonial__who"><span class="avatar">CD</span><div><strong><span class="ph">[Customer name]</span></strong><span><span class="ph">[Role, Company]</span></span></div></figcaption>
      </figure>
      <figure class="testimonial reveal reveal-d2">
        <span class="placeholder-tag">Placeholder</span>
        <span class="testimonial__mark" aria-hidden="true">&ldquo;</span>
        <blockquote><span class="ph">[Customer testimonial]</span></blockquote>
        <figcaption class="testimonial__who"><span class="avatar">EF</span><div><strong><span class="ph">[Customer name]</span></strong><span><span class="ph">[Role, Company]</span></span></div></figcaption>
      </figure>
    </div>
  </div>
</section>

${cta()}
`,
});
