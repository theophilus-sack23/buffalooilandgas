/* Buffalo Oil — site interactions (no dependencies) */
(function () {
  "use strict";
  var doc = document.documentElement;
  doc.classList.remove("no-js");

  /* Sticky header: transparent over hero, solid after scrolling */
  var header = document.querySelector(".header");
  function onScroll() {
    if (!header) return;
    header.classList.toggle("is-solid", window.scrollY > 40);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* Mobile menu */
  var toggle = document.querySelector(".menu-toggle");
  var mobileNav = document.getElementById("mobile-nav");
  function setMenu(open) {
    document.body.classList.toggle("menu-open", open);
    if (toggle) {
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    }
    if (mobileNav) mobileNav.setAttribute("aria-hidden", String(!open));
  }
  if (toggle) {
    toggle.addEventListener("click", function () {
      setMenu(!document.body.classList.contains("menu-open"));
    });
  }
  if (mobileNav) {
    mobileNav.addEventListener("click", function (e) {
      if (e.target.closest("a")) setMenu(false);
    });
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setMenu(false);
  });
  window.addEventListener("resize", function () {
    if (window.innerWidth >= 1024) setMenu(false);
  });

  /* Reveal on scroll */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* Gentle parallax on statement bands */
  var bands = document.querySelectorAll("[data-parallax]");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (bands.length && !reduce) {
    var ticking = false;
    var update = function () {
      bands.forEach(function (el) {
        var r = el.parentElement.getBoundingClientRect();
        var progress = (r.top + r.height / 2 - window.innerHeight / 2) / window.innerHeight;
        el.style.transform = "translate3d(0," + (progress * -60).toFixed(1) + "px,0)";
      });
      ticking = false;
    };
    window.addEventListener("scroll", function () {
      if (!ticking) { requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
    update();
  }

  /* Services page: highlight the in-page nav item for the section in view */
  var svcLinks = document.querySelectorAll(".svc-nav a");
  if (svcLinks.length && "IntersectionObserver" in window) {
    var map = {};
    svcLinks.forEach(function (a) { map[a.getAttribute("href").slice(1)] = a; });
    var so = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          svcLinks.forEach(function (a) { a.classList.remove("is-active"); });
          var link = map[entry.target.id];
          if (link) {
            link.classList.add("is-active");
            link.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
          }
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    Object.keys(map).forEach(function (id) {
      var sec = document.getElementById(id);
      if (sec) so.observe(sec);
    });
  }

  /* Pre-select enquiry type from ?type= on the contact page */
  var params = new URLSearchParams(window.location.search);
  var preset = params.get("type");
  if (preset) {
    var radio = document.querySelector('input[name="customer_type"][value="' + preset + '"]');
    if (radio) radio.checked = true;
    var sel = document.getElementById("enquiry");
    if (sel && params.get("service")) sel.value = params.get("service");
  }

  /* Contact form validation (front-end only — wire to Contact Form 7 / WPForms in WordPress) */
  var form = document.getElementById("enquiry-form");
  if (form) {
    var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    var phoneRe = /^[+\d][\d\s()-]{6,}$/;
    var validate = function (field) {
      var input = field.querySelector("input, select, textarea");
      if (!input) return true;
      var v = (input.value || "").trim();
      var ok = true;
      if (input.required && !v) ok = false;
      else if (v && input.type === "email") ok = emailRe.test(v);
      else if (v && input.type === "tel") ok = phoneRe.test(v);
      field.classList.toggle("is-invalid", !ok);
      input.setAttribute("aria-invalid", String(!ok));
      return ok;
    };
    form.querySelectorAll(".field").forEach(function (field) {
      var input = field.querySelector("input, select, textarea");
      if (input) {
        input.addEventListener("blur", function () { validate(field); });
        input.addEventListener("input", function () {
          if (field.classList.contains("is-invalid")) validate(field);
        });
      }
    });
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var fields = form.querySelectorAll(".field");
      var firstBad = null;
      fields.forEach(function (f) { if (!validate(f) && !firstBad) firstBad = f; });
      var consent = form.querySelector("#consent");
      if (consent && !consent.checked) {
        consent.focus();
        consent.closest(".consent").style.color = "#c2410c";
        return;
      }
      if (firstBad) {
        var el = firstBad.querySelector("input, select, textarea");
        if (el) el.focus();
        return;
      }
      var card = form.closest(".form-card");
      if (card) {
        card.classList.add("is-sent");
        card.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });
  }

  /* Footer year */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
