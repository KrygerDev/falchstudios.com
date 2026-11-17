/* Falch Studios – små ting, der gør siden levende.
   Siden virker også helt uden JavaScript. Ingen cookies, ingen sporing, intet gemmes. */
(function () {
  "use strict";

  var root = document.documentElement;
  root.classList.add("js");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  var hasIO = "IntersectionObserver" in window;

  /* ---------- Menuen på mobil ---------- */
  var toggle = document.querySelector("[data-menu-toggle]");
  var nav = document.getElementById("site-nav");
  function setMenu(open) {
    if (!toggle) return;
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    root.classList.toggle("menu-open", open);
  }
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      setMenu(toggle.getAttribute("aria-expanded") !== "true");
    });
    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) setMenu(false);
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && root.classList.contains("menu-open")) {
        setMenu(false);
        toggle.focus();
      }
    });
    window.matchMedia("(min-width: 861px)").addEventListener("change", function (mq) {
      if (mq.matches) setMenu(false);
    });
  }

  /* ---------- Toplinje, guldstreg øverst og "til toppen"-knap ---------- */
  var header = document.querySelector(".site-header");
  var bar = document.querySelector("[data-progress]");
  var toTop = document.querySelector("[data-to-top]");
  var ticking = false;
  function onScroll() {
    ticking = false;
    var y = window.scrollY;
    var max = document.documentElement.scrollHeight - window.innerHeight;
    if (header) header.classList.toggle("is-scrolled", y > 8);
    if (bar) bar.style.transform = "scaleX(" + (max > 0 ? Math.min(1, y / max) : 0).toFixed(4) + ")";
    if (toTop) toTop.classList.toggle("is-visible", y > 700);
  }
  window.addEventListener("scroll", function () {
    if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
  }, { passive: true });
  onScroll();
  if (toTop) {
    toTop.addEventListener("click", function (event) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    });
  }

  /* ---------- Indhold glider blødt frem (ikke hvis bevægelse er slået fra) ---------- */
  var items = document.querySelectorAll(".reveal");
  if (!reduce && hasIO && items.length) {
    root.classList.add("reveal-ready");
    /* Kort i samme række kommer efter hinanden */
    document.querySelectorAll("[data-stagger]").forEach(function (group) {
      [].forEach.call(group.children, function (child, index) {
        child.style.setProperty("--i", index % 4);
      });
    });
    var revealer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealer.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.1 });
    items.forEach(function (el) { revealer.observe(el); });
  }

  /* ---------- Menuen viser, hvor på siden man er ---------- */
  var links = [].slice.call(document.querySelectorAll('.site-nav a[href^="#"]'));
  if (links.length && hasIO) {
    var byId = {};
    links.forEach(function (a) {
      var id = a.getAttribute("href").slice(1);
      if (document.getElementById(id)) byId[id] = a;
    });
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (a) { a.classList.remove("is-current"); });
        if (byId[entry.target.id]) byId[entry.target.id].classList.add("is-current");
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    Object.keys(byId).forEach(function (id) { spy.observe(document.getElementById(id)); });
  }

  /* ---------- Lys, der følger musen på kort, og billede, der vipper let ---------- */
  if (canHover) {
    document.addEventListener("pointermove", function (event) {
      var el = event.target.closest ? event.target.closest(".spot") : null;
      if (!el) return;
      var r = el.getBoundingClientRect();
      el.style.setProperty("--mx", (event.clientX - r.left).toFixed(0) + "px");
      el.style.setProperty("--my", (event.clientY - r.top).toFixed(0) + "px");
    }, { passive: true });

    if (!reduce) {
      document.querySelectorAll("[data-tilt]").forEach(function (el) {
        el.addEventListener("pointermove", function (event) {
          var r = el.getBoundingClientRect();
          var px = (event.clientX - r.left) / r.width - 0.5;
          var py = (event.clientY - r.top) / r.height - 0.5;
          el.style.setProperty("--rx", (-py * 5).toFixed(2) + "deg");
          el.style.setProperty("--ry", (px * 6).toFixed(2) + "deg");
        });
        el.addEventListener("pointerleave", function () {
          el.style.setProperty("--rx", "0deg");
          el.style.setProperty("--ry", "0deg");
        });
      });
    }
  }

  /* ---------- Tal, der tæller op ---------- */
  var counters = document.querySelectorAll("[data-count]");
  if (!reduce && hasIO && counters.length) {
    var counting = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        counting.unobserve(entry.target);
        var el = entry.target;
        var end = parseInt(el.getAttribute("data-count"), 10) || 0;
        var start = performance.now();
        var duration = 1100;
        (function step(now) {
          var t = Math.min(1, (now - start) / duration);
          el.textContent = Math.round(end * (1 - Math.pow(1 - t, 3)));
          if (t < 1) requestAnimationFrame(step);
        })(start);
        /* Sikkerhedsnet: det rigtige tal står der altid til sidst */
        setTimeout(function () { el.textContent = end; }, duration + 400);
      });
    }, { threshold: 0.6 });
    counters.forEach(function (el) { counting.observe(el); });
  }

  /* ---------- Levende stjernehimmel bag toppen ---------- */
  function starfield(canvas) {
    var ctx = canvas.getContext("2d");
    if (!ctx) return;
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var w = 0, h = 0, stars = [], comet = null, running = false, visible = true, timer = 0;

    function build() {
      var rect = canvas.getBoundingClientRect();
      w = rect.width; h = rect.height;
      if (!w || !h) return;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var count = Math.round(Math.min(170, (w * h) / 8500));
      stars = [];
      for (var i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * w, y: Math.random() * h,
          r: Math.random() * 1.1 + 0.35,
          a: Math.random() * 0.55 + 0.2,
          s: Math.random() * 1.4 + 0.4,
          p: Math.random() * Math.PI * 2,
          gold: Math.random() < 0.09
        });
      }
      draw(performance.now());
    }

    function draw(now) {
      ctx.clearRect(0, 0, w, h);
      for (var i = 0; i < stars.length; i++) {
        var s = stars[i];
        var twinkle = reduce ? 1 : 0.6 + 0.4 * Math.sin(now / 1000 * s.s + s.p);
        ctx.globalAlpha = s.a * twinkle;
        ctx.fillStyle = s.gold ? "#ffd774" : "#ffffff";
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, 6.2832);
        ctx.fill();
      }
      if (comet) {
        comet.x += comet.vx; comet.y += comet.vy; comet.life -= 1;
        var tail = 16;
        var grad = ctx.createLinearGradient(comet.x, comet.y, comet.x - comet.vx * tail, comet.y - comet.vy * tail);
        grad.addColorStop(0, "rgba(255, 236, 190, 0.9)");
        grad.addColorStop(1, "rgba(255, 236, 190, 0)");
        ctx.globalAlpha = Math.min(1, comet.life / 18);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.6;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(comet.x, comet.y);
        ctx.lineTo(comet.x - comet.vx * tail, comet.y - comet.vy * tail);
        ctx.stroke();
        if (comet.life <= 0 || comet.x < -80 || comet.x > w + 80 || comet.y > h + 80) comet = null;
      }
      ctx.globalAlpha = 1;
    }

    function frame(now) {
      if (!running) return;
      if (!comet && Math.random() < 0.004) {
        var dir = Math.random() < 0.5 ? 1 : -1;
        comet = { x: Math.random() * w, y: Math.random() * h * 0.45, vx: dir * (5 + Math.random() * 3), vy: 2.2 + Math.random() * 1.6, life: 70 };
      }
      draw(now);
      requestAnimationFrame(frame);
    }
    function update() {
      var should = visible && !document.hidden && !reduce;
      if (should && !running) { running = true; requestAnimationFrame(frame); }
      else if (!should) running = false;
    }

    build();
    root.classList.add("stars-on");
    window.addEventListener("resize", function () { clearTimeout(timer); timer = setTimeout(build, 150); });
    document.addEventListener("visibilitychange", update);
    if (hasIO) {
      new IntersectionObserver(function (entries) {
        visible = entries[0].isIntersecting;
        update();
      }).observe(canvas);
    }
    update();
  }
  document.querySelectorAll("[data-stars]").forEach(starfield);

  /* ---------- Lille besked: siden findes også på et andet sprog ---------- */
  var langbar = document.querySelector("[data-langbar]");
  if (langbar) {
    var browserLang = (navigator.language || "").toLowerCase();
    var isDanish = browserLang.indexOf("da") === 0;
    var show = (root.lang === "da" && !isDanish) || (root.lang === "en" && isDanish);
    if (show) {
      langbar.hidden = false;
      setTimeout(function () { langbar.classList.add("is-in"); }, 900);
    }
    var closer = langbar.querySelector("[data-langbar-close]");
    if (closer) closer.addEventListener("click", function () { langbar.hidden = true; });
  }
})();
