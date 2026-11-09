module.exports = ({ icon }) => ({
  file: "contact.html",
  current: "contact",
  title: "Contact Us | Buffalo Oil Limited",
  description: "Get in touch with Buffalo Oil Limited for fuel quotations, bulk supply, delivery and corporate fuel accounts.",
  body: `
<section class="page-hero" aria-labelledby="page-title" style="min-height:clamp(560px,76vh,780px)">
  <div class="page-hero__media"><img src="assets/img/truck-open-road.jpg" alt="" fetchpriority="high"></div>
  <div class="container container--wide page-hero__inner" style="padding-bottom:clamp(140px,14vw,200px)">
    <div>
      <ol class="breadcrumb fade-up"><li><a href="index.html">Home</a></li><li aria-current="page">Contact Us</li></ol>
      <h1 id="page-title" class="fade-up d1">Let's talk <em>fuel.</em></h1>
    </div>
    <p class="page-hero__aside fade-up d2">Questions, quotations or partnership enquiries — reach out and a member of our team will respond promptly.</p>
  </div>
</section>

<section class="section" style="padding-top:0" aria-label="Contact details">
  <div class="container">
    <div class="contact-cards contact-cards--overlap">
      <article class="contact-card reveal">
        <span class="icon-tile icon-tile--solid">${icon("phone")}</span>
        <h3>Call us</h3><p>Speak directly with our team.</p>
        <span class="contact-card__value"><span class="ph">[+233 XX XXX XXXX]</span></span>
      </article>
      <article class="contact-card reveal reveal-d1">
        <span class="icon-tile icon-tile--solid">${icon("mail")}</span>
        <h3>Email us</h3><p>For quotations and general enquiries.</p>
        <span class="contact-card__value"><span class="ph">[info@yourdomain.com]</span></span>
      </article>
      <article class="contact-card reveal reveal-d2">
        <span class="icon-tile icon-tile--solid">${icon("pin")}</span>
        <h3>Visit us</h3><p>Our head office.</p>
        <span class="contact-card__value"><span class="ph">[Street address, City, Ghana]</span></span>
      </article>
      <article class="contact-card reveal reveal-d3">
        <span class="icon-tile icon-tile--solid">${icon("whatsapp")}</span>
        <h3>WhatsApp</h3><p>Quick questions and order updates.</p>
        <span class="contact-card__value"><span class="ph">[WhatsApp number]</span></span>
      </article>
    </div>
  </div>
</section>

<section class="section section--paper" aria-labelledby="form-title">
  <div class="container">
    <div class="contact-layout">
      <aside class="contact-aside reveal">
        <div>
          <p class="eyebrow">Send an enquiry</p>
          <h2 class="h2">How can we help you today?</h2>
          <p class="lead mt-6">Share a few details about your requirements and we will respond with the information you need.</p>
        </div>
        <ul class="check-list">
          <li>Fuel quotations for individuals and businesses</li>
          <li>Bulk and scheduled supply arrangements</li>
          <li>Corporate fuel account applications</li>
          <li>Partnership and general enquiries</li>
        </ul>
        <div class="aside-panel on-dark">
          <h3>Business hours</h3>
          <p>When you can reach our office team.</p>
          <ul class="hours">
            <li><span>Monday – Friday</span><span class="ph">[00:00 – 00:00]</span></li>
            <li><span>Saturday</span><span class="ph">[00:00 – 00:00]</span></li>
            <li><span>Sunday &amp; holidays</span><span class="ph">[Closed / hours]</span></li>
          </ul>
        </div>
      </aside>

      <div class="form-card reveal reveal-d1">
        <form id="enquiry-form" novalidate aria-labelledby="form-title">
          <h2 id="form-title">Request a quote</h2>
          <p class="muted">Fields marked <span style="color:var(--orange-600)">*</span> are required.</p>

          <fieldset style="border:0;padding:0;margin:24px 0 0">
            <legend style="font-size:.85rem;font-weight:700;margin-bottom:10px">I am enquiring as</legend>
            <div class="segmented">
              <input type="radio" id="ct-individual" name="customer_type" value="individual" checked><label for="ct-individual">An individual</label>
              <input type="radio" id="ct-business" name="customer_type" value="business"><label for="ct-business">A business / organisation</label>
            </div>
          </fieldset>

          <div class="form-grid">
            <div class="field">
              <label for="name">Full name <span class="req">*</span></label>
              <input class="input" id="name" name="name" type="text" autocomplete="name" placeholder="Your full name" required>
              <span class="field__error">Please enter your name.</span>
            </div>
            <div class="field">
              <label for="company">Company / organisation</label>
              <input class="input" id="company" name="company" type="text" autocomplete="organization" placeholder="Optional">
            </div>
            <div class="field">
              <label for="email">Email address <span class="req">*</span></label>
              <input class="input" id="email" name="email" type="email" autocomplete="email" placeholder="name@example.com" required>
              <span class="field__error">Please enter a valid email address.</span>
            </div>
            <div class="field">
              <label for="phone">Phone number <span class="req">*</span></label>
              <input class="input" id="phone" name="phone" type="tel" autocomplete="tel" placeholder="+233" required>
              <span class="field__error">Please enter a valid phone number.</span>
            </div>
            <div class="field">
              <label for="enquiry">Enquiry type <span class="req">*</span></label>
              <select class="select" id="enquiry" name="enquiry" required>
                <option value="">Select an option</option>
                <option value="fuel">Petroleum products supply</option>
                <option value="bulk">Bulk &amp; commercial supply</option>
                <option value="delivery">Fuel delivery</option>
                <option value="lubricants">Lubricants</option>
                <option value="retail">Fuel retail</option>
                <option value="corporate">Corporate fuel account</option>
                <option value="partnership">Partnership</option>
                <option value="other">General enquiry</option>
              </select>
              <span class="field__error">Please choose an enquiry type.</span>
            </div>
            <div class="field">
              <label for="product">Product of interest</label>
              <select class="select" id="product" name="product">
                <option value="">Select a product</option>
                <option>Petrol (PMS)</option>
                <option>Diesel (AGO)</option>
                <option>Lubricants</option>
                <option>LPG</option>
                <option>Not sure yet</option>
              </select>
            </div>
            <div class="field">
              <label for="quantity">Estimated quantity</label>
              <input class="input" id="quantity" name="quantity" type="text" placeholder="e.g. 5,000 litres per month">
            </div>
            <div class="field">
              <label for="location">Delivery location</label>
              <input class="input" id="location" name="location" type="text" placeholder="Town / city, region">
            </div>
            <div class="field field--full">
              <label for="message">Message <span class="req">*</span></label>
              <textarea class="textarea" id="message" name="message" placeholder="Tell us about your requirements, timelines and any other details" required></textarea>
              <span class="field__error">Please include a short message.</span>
            </div>
            <label class="consent field--full" for="consent">
              <input type="checkbox" id="consent" name="consent">
              <span>I agree to Buffalo Oil Limited contacting me about this enquiry and processing my details in line with the <a href="#" style="text-decoration:underline">Privacy Policy</a>.</span>
            </label>
          </div>
          <div class="form-foot">
            <small>We aim to respond within <span class="ph">[response time]</span>.</small>
            <button class="btn btn--lg" type="submit">Send Enquiry ${icon("send")}</button>
          </div>
        </form>
        <div class="form-success" role="status" aria-live="polite">
          <span class="icon-tile icon-tile--solid">${icon("check")}</span>
          <h2>Thank you. Your enquiry has been received.</h2>
          <p class="lead mt-5">A member of the Buffalo Oil team will be in touch shortly.</p>
          <a class="btn btn--dark mt-6" href="index.html">Back to Home ${icon("arrow")}</a>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section" aria-labelledby="map-title">
  <div class="container">
    <div class="map-block reveal">
      <div class="map-block__grid"></div>
      <svg class="map-block__roads" viewBox="0 0 1200 420" preserveAspectRatio="none" aria-hidden="true"><path d="M0 300 C 300 260, 420 140, 700 180 S 1050 80, 1200 120" stroke="#f39c1f" stroke-width="3" fill="none"/><path d="M220 0 C 260 160, 380 260, 360 420" stroke="#fff" stroke-width="2" fill="none"/><path d="M820 420 C 800 300, 900 200, 1200 260" stroke="#fff" stroke-width="2" fill="none"/></svg>
      <div>
        <div class="map-pin">${icon("pin")}</div>
        <h3 id="map-title">Find our office</h3>
        <p><span class="ph">[Embed Google Map of head office location here]</span></p>
        <a class="btn btn--ghost mt-6" href="#">Get Directions ${icon("arrow-up-right")}</a>
      </div>
    </div>
  </div>
</section>

<section class="section section--paper section--tight" aria-labelledby="faq-title">
  <div class="container">
    <div class="faq">
      <div class="reveal">
        <p class="eyebrow">Before you get in touch</p>
        <h2 class="h2" id="faq-title">Quick answers.</h2>
      </div>
      <div class="faq__list reveal reveal-d1">
        <details open><summary>What information should I include in my enquiry?<span class="pm" aria-hidden="true"></span></summary><div class="faq__answer">The product you need, estimated quantity, delivery location and preferred date. This helps us respond with an accurate quotation.</div></details>
        <details><summary>How quickly will I receive a response?<span class="pm" aria-hidden="true"></span></summary><div class="faq__answer">We aim to respond to all enquiries within <span class="ph">[response time]</span> during business hours.</div></details>
        <details><summary>Do you work with businesses outside your head office city?<span class="pm" aria-hidden="true"></span></summary><div class="faq__answer">Share your location in the form and we will confirm whether we can serve it. <span class="ph">[Confirm service regions.]</span></div></details>
      </div>
    </div>
  </div>
</section>
`,
});
