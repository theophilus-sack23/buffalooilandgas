module.exports = ({ icon, cta }) => ({
  file: "about.html",
  current: "about",
  title: "About Us | Buffalo Oil Limited",
  description: "Learn about Buffalo Oil Limited, a Ghanaian Oil Marketing Company built on quality, reliability, safety and customer service.",
  body: `
<section class="page-hero" aria-labelledby="page-title">
  <div class="page-hero__media"><img src="assets/img/technician-hardhat.jpg" alt="" fetchpriority="high"></div>
  <div class="container container--wide page-hero__inner">
    <div>
      <ol class="breadcrumb fade-up"><li><a href="index.html">Home</a></li><li aria-current="page">About Us</li></ol>
      <h1 id="page-title" class="fade-up d1">Built on strength.<br>Driven by <em>trust.</em></h1>
    </div>
    <p class="page-hero__aside fade-up d2">We are a Ghanaian Oil Marketing Company with a clear purpose: to supply quality petroleum products that people and businesses can depend on.</p>
  </div>
</section>

<section class="section" aria-labelledby="story-title">
  <div class="container">
    <div class="split split--wide-text">
      <div class="reveal">
        <p class="eyebrow">Our story</p>
        <h2 class="h2" id="story-title">A new energy company with a long-term view.</h2>
        <p class="lead mt-6">Buffalo Oil Limited was established to bring a fresh standard of reliability and service to petroleum marketing in Ghana.</p>
        <p class="muted">Our name reflects what we stand for. The buffalo is a symbol of strength, endurance and steady progress — qualities we bring to every relationship we build. We are starting with a focused offering and a determination to earn our customers' trust one delivery at a time.</p>
        <p class="muted"><span class="ph">[Add founding story, year of incorporation and key milestones once confirmed.]</span></p>
        <dl class="facts">
          <div class="fact"><dt>Company type</dt><dd>Oil Marketing Company (OMC)</dd></div>
          <div class="fact"><dt>Headquarters</dt><dd><span class="ph">[City], Ghana</span></dd></div>
          <div class="fact"><dt>Licence</dt><dd><span class="ph">[NPA licence no.]</span></dd></div>
        </dl>
      </div>
      <div class="media-stack reveal reveal-d1">
        <span class="media-stack__frame" aria-hidden="true"></span>
        <div class="media-stack__main"><img src="assets/img/refinery-skyline.jpg" alt="A petroleum processing facility with storage and distillation towers" loading="lazy"></div>
        <div class="media-stack__float"><img src="assets/img/process-pipework.jpg" alt="Industrial process pipework" loading="lazy"></div>
      </div>
    </div>
  </div>
</section>

<section class="section section--paper" aria-labelledby="mvv-title">
  <div class="container">
    <div class="section-head reveal">
      <p class="eyebrow">Purpose</p>
      <h2 class="h2" id="mvv-title">Our mission and vision.</h2>
    </div>
    <div class="mvv">
      <article class="mvv-card mvv-card--dark reveal">
        <img class="mvv-card__mark" src="assets/img/buffalo-mark.png" alt="">
        <span class="mvv-card__label">Our mission</span>
        <p>To supply quality petroleum products and dependable energy solutions safely, efficiently and with exceptional customer service.</p>
      </article>
      <article class="mvv-card mvv-card--orange reveal reveal-d1">
        <span class="mvv-card__label">Our vision</span>
        <p>To become one of Ghana's most trusted Oil Marketing Companies, recognised for reliability, integrity and service.</p>
      </article>
    </div>
    <p class="note reveal">${icon("info")}<span>Draft statements for management review. <span class="ph">[Replace with approved mission and vision.]</span></span></p>
  </div>
</section>

<section class="section" id="values" aria-labelledby="values-title">
  <div class="container">
    <div class="section-head section-head--split">
      <div class="reveal">
        <p class="eyebrow">Core values</p>
        <h2 class="h2" id="values-title">The principles behind every litre.</h2>
      </div>
      <p class="lead reveal reveal-d1">Our values shape how we make decisions, how we treat customers and how we conduct ourselves as a business.</p>
    </div>
    <div class="values reveal">
      <div class="value">${icon("badge")}<h3>Quality</h3><p>We do not compromise on the standard of the products we supply.</p></div>
      <div class="value">${icon("clock")}<h3>Reliability</h3><p>We keep our promises and communicate early when plans change.</p></div>
      <div class="value">${icon("shield")}<h3>Safety</h3><p>We protect our people, our customers and the communities we serve.</p></div>
      <div class="value">${icon("scale")}<h3>Integrity</h3><p>We are honest in our pricing, measures and dealings.</p></div>
      <div class="value">${icon("heart")}<h3>Customer Focus</h3><p>We listen, respond and work to make every interaction easy.</p></div>
    </div>
  </div>
</section>

<section class="section section--dark" aria-labelledby="approach-title">
  <div class="container">
    <div class="section-head section-head--split">
      <div class="reveal">
        <p class="eyebrow">How we work</p>
        <h2 class="h2" id="approach-title">A clear, accountable approach.</h2>
      </div>
      <p class="lead reveal reveal-d1">Whether you are placing your first order or setting up a long-term arrangement, you will always know what happens next.</p>
    </div>
    <div class="steps">
      <div class="step reveal"><h3>Understand</h3><p>We take time to understand your fuel needs, volumes, location and schedule.</p></div>
      <div class="step reveal reveal-d1"><h3>Propose</h3><p>We provide a clear quotation and supply plan with no hidden surprises.</p></div>
      <div class="step reveal reveal-d2"><h3>Deliver</h3><p>Products are delivered safely, accurately and at the agreed time.</p></div>
      <div class="step reveal reveal-d3"><h3>Support</h3><p>We follow up, gather feedback and remain available for every repeat order.</p></div>
    </div>
  </div>
</section>

<section class="section" id="hse" aria-labelledby="hse-title">
  <div class="container">
    <div class="split split--reverse">
      <div class="media-stack reveal">
        <span class="media-stack__frame" aria-hidden="true"></span>
        <div class="media-stack__main"><img src="assets/img/lubricant-pour.jpg" alt="A technician in protective gloves pouring engine oil into a vehicle" style="object-position:50% 45%" loading="lazy"></div>
        <div class="media-stack__badge">
          <span class="icon-tile icon-tile--solid">${icon("hardhat")}</span>
          <div><strong>Zero Harm</strong><span>Our goal for people and the environment.</span></div>
        </div>
      </div>
      <div class="reveal reveal-d1">
        <p class="eyebrow">Health, Safety &amp; Environment</p>
        <h2 class="h2" id="hse-title">Responsible operations from day one.</h2>
        <p class="lead mt-6">Handling petroleum products carries responsibility. We are building safety and environmental care into our operations from the start, not adding them later.</p>
        <ul class="check-list">
          <li>Safe loading, transport and discharge procedures</li>
          <li>Training and protective equipment for all personnel</li>
          <li>Spill prevention and emergency response planning</li>
          <li>Compliance with applicable Ghanaian petroleum regulations</li>
        </ul>
        <p class="muted"><span class="ph">[Add HSE policy document, certifications or regulatory approvals once obtained.]</span></p>
      </div>
    </div>
  </div>
</section>

<section class="section section--paper" aria-labelledby="team-title">
  <div class="container">
    <div class="section-head section-head--split">
      <div class="reveal">
        <p class="eyebrow">Leadership</p>
        <h2 class="h2" id="team-title">The people leading Buffalo Oil.</h2>
      </div>
      <p class="lead reveal reveal-d1">Experienced, committed and accountable leadership guiding Buffalo Oil's growth.</p>
    </div>
    <article class="ceo reveal">
      <div class="ceo__photo"><img src="assets/img/ceo.jpg" alt="Buffalo Oil Limited Chief Executive Officer seated at his desk" loading="lazy"></div>
      <div class="ceo__body">
        <span class="ceo__mark" aria-hidden="true">&ldquo;</span>
        <p class="ceo__message">Energy is the driving force behind progress, and our commitment is to deliver it with excellence, integrity and reliability. We remain focused on building lasting partnerships, exceeding expectations and powering a more sustainable energy future.</p>
        <div class="ceo__who">
          <img src="assets/img/buffalo-mark.png" alt="" width="427" height="383">
          <div><h3><span class="ph">[Full name]</span></h3><p>Chief Executive Officer</p></div>
        </div>
      </div>
    </article>
    <div class="team mt-6">
      <article class="person reveal reveal-d1"><div class="person__photo">${icon("user")}<span>Photo</span></div><div class="person__body"><h3><span class="ph">[Full name]</span></h3><p><span class="ph">[Operations Manager]</span></p></div></article>
      <article class="person reveal reveal-d2"><div class="person__photo">${icon("user")}<span>Photo</span></div><div class="person__body"><h3><span class="ph">[Full name]</span></h3><p><span class="ph">[Finance Manager]</span></p></div></article>
      <article class="person reveal reveal-d3"><div class="person__photo">${icon("user")}<span>Photo</span></div><div class="person__body"><h3><span class="ph">[Full name]</span></h3><p><span class="ph">[Sales &amp; Customer Relations]</span></p></div></article>
    </div>
  </div>
</section>

${cta({ title: "Let's build a dependable fuel partnership.", text: "Talk to us about your fuel requirements. We will respond promptly with clear options and pricing.", img: "process-pipework.jpg" })}
`,
});
