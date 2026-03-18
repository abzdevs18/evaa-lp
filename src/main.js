import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { renderHeader } from './components/header.js';
import { renderFooter } from './components/footer.js';
import { initRouter, setAfterNavigate } from './router.js';

gsap.registerPlugin(ScrollTrigger);

// ─── Layout Shell ─────────────────────────────────────────────────────────────

function initShell() {
  // Render header directly (not inside wrapper) so navbar sticky works
  const headerEl = document.getElementById('site-header');
  if (headerEl) {
    headerEl.outerHTML = renderHeader();
  }

  // Render footer directly
  const footerEl = document.getElementById('site-footer');
  if (footerEl) {
    footerEl.outerHTML = renderFooter();
  }
}

// ─── Navigation Logic ─────────────────────────────────────────────────────────

function initNavigation() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      hamburger.textContent = navLinks.classList.contains('active') ? '\u2715' : '\u2630';
    });
  }

  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 60);
    });
  }
}

// ─── Form Validation ──────────────────────────────────────────────────────────

function initForms() {
  const forms = document.querySelectorAll('form');
  forms.forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      const requiredElements = form.querySelectorAll('[required]');
      requiredElements.forEach((el) => {
        const parent = el.closest('.form-group');
        if (!el.value.trim()) {
          isValid = false;
          if (parent) parent.classList.add('error');
        } else {
          if (parent) parent.classList.remove('error');
        }
      });

      if (isValid) {
        const successMsg =
          form.querySelector('.form-success') || form.parentElement.querySelector('.form-success');
        if (successMsg) {
          successMsg.style.display = 'block';
          form.reset();
          setTimeout(() => {
            successMsg.style.display = 'none';
          }, 5000);
        }
      }
    });

    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach((input) => {
      input.addEventListener('input', () => {
        const parent = input.closest('.form-group');
        if (parent) parent.classList.remove('error');
      });
    });
  });
}

// ─── Carousel Logic (GSAP-powered) ───────────────────────────────────────────

function initCarousel() {
  const track = document.querySelector('.carousel-track');
  const cards = Array.from(document.querySelectorAll('.carousel-card'));
  const btnPrev = document.querySelector('.btn-carousel-action.prev');
  const btnNext = document.querySelector('.btn-carousel-action.next');

  if (!track || cards.length === 0) return;

  function getConfig() {
    const vw = window.innerWidth;
    if (vw <= 400) return { cardWidth: 220, gap: 16, adjScale: 0.78, farScale: 0.7 };
    if (vw <= 640) return { cardWidth: 240, gap: 20, adjScale: 0.8, farScale: 0.72 };
    if (vw <= 960) return { cardWidth: 260, gap: 24, adjScale: 0.82, farScale: 0.74 };
    return { cardWidth: 320, gap: 32, adjScale: 0.82, farScale: 0.75 };
  }

  const ACTIVE_SCALE = 1.0;
  const DURATION = 0.6;
  const EASE = 'power3.inOut';

  let activeIndex = cards.findIndex((c) => c.hasAttribute('data-initial-active'));
  if (activeIndex === -1) activeIndex = Math.floor(cards.length / 2);

  let isAnimating = false;

  function layoutCards(animate = true) {
    const dur = animate ? DURATION : 0;
    const cfg = getConfig();

    cards.forEach((card, i) => {
      const offset = i - activeIndex;
      const absOffset = Math.abs(offset);
      const x = offset * (cfg.cardWidth + cfg.gap);

      let scale = cfg.farScale;
      if (absOffset === 0) scale = ACTIVE_SCALE;
      else if (absOffset === 1) scale = cfg.adjScale;

      const zIndex = absOffset === 0 ? 15 : Math.max(1, 10 - absOffset);

      const shadow =
        absOffset === 0
          ? '0 4px 16px rgba(0,0,0,0.1)'
          : '0 2px 8px rgba(0,0,0,0.06)';

      gsap.to(card, {
        x, scale, zIndex, boxShadow: shadow,
        duration: dur, ease: EASE, overwrite: 'auto',
      });

      const wash = card.querySelector('.card-wash');
      if (wash) {
        gsap.to(wash, {
          opacity: absOffset === 0 ? 0 : 1,
          duration: dur, ease: EASE, overwrite: 'auto',
        });
      }

      const ribbon = card.querySelector('.card-ribbon');
      if (ribbon) {
        gsap.to(ribbon, {
          height: absOffset === 0 ? 85 : 70,
          background: absOffset === 0 ? '#FFD600' : 'rgba(255,214,0,0.8)',
          duration: dur, ease: EASE, overwrite: 'auto',
        });
      }
    });
  }

  function goTo(index) {
    if (isAnimating || index < 0 || index >= cards.length || index === activeIndex) return;
    isAnimating = true;
    activeIndex = index;
    layoutCards(true);
    gsap.delayedCall(DURATION, () => { isAnimating = false; });
  }

  layoutCards(false);

  cards.forEach((card, i) => {
    card.addEventListener('click', () => goTo(i));
  });

  if (btnPrev) btnPrev.addEventListener('click', () => goTo(activeIndex - 1));
  if (btnNext) btnNext.addEventListener('click', () => goTo(activeIndex + 1));

  track.setAttribute('tabindex', '0');
  track.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') goTo(activeIndex - 1);
    if (e.key === 'ArrowRight') goTo(activeIndex + 1);
  });

  let touchStartX = 0;
  track.addEventListener('touchstart', (e) => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
  track.addEventListener('touchend', (e) => {
    const diff = touchStartX - e.changedTouches[0].screenX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goTo(activeIndex + 1);
      else goTo(activeIndex - 1);
    }
  }, { passive: true });

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => layoutCards(false), 150);
  });
}

// ─── GSAP Page Animations ─────────────────────────────────────────────────────

function initPageAnimations() {
  // Kill all existing ScrollTriggers to avoid duplicates
  ScrollTrigger.getAll().forEach((t) => t.kill());

  gsap.defaults({ ease: 'power2.out', duration: 0.8 });

  // ── Hero Section (home page)
  const hero = document.querySelector('.hero');
  if (hero) {
    const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    heroTl
      .from('.hero .tag', { opacity: 0, y: 20, duration: 0.5 }, 0.3)
      .from('.hero h1', { opacity: 0, y: 30, duration: 0.7 }, 0.5)
      .from('.hero-subtext', { opacity: 0, y: 20, duration: 0.5 }, 0.8)
      .from('.hero .btn-group', { opacity: 0, y: 20, duration: 0.5 }, 1.0)
      .from('.hero .trust-badges span', {
        opacity: 0, y: 10, stagger: 0.1, duration: 0.4,
      }, 1.1)
      .from('.hero-bottom-rule', {
        scaleX: 0, transformOrigin: 'left center', duration: 0.6,
      }, 1.2);
  }

  // ── Hero Inner (sub-pages)
  const heroInner = document.querySelector('.hero-inner');
  if (heroInner) {
    const innerTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    innerTl
      .from('.hero-inner .breadcrumb', { opacity: 0, y: 15, duration: 0.4 })
      .from('.hero-inner h1', { opacity: 0, y: 25, duration: 0.6 }, '-=0.1')
      .from('.hero-inner p', { opacity: 0, y: 15, duration: 0.5 }, '-=0.2');
  }

  // ── Stats Bar
  const statsBar = document.querySelector('.stats-bar');
  if (statsBar) {
    gsap.from('.stat-item', {
      scrollTrigger: { trigger: '.stats-bar', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 0, y: 30, stagger: 0.12, duration: 0.6,
    });
  }

  // ── Section Labels & Titles
  document.querySelectorAll('.section-label').forEach((label) => {
    gsap.from(label, {
      scrollTrigger: { trigger: label, start: 'top 88%', toggleActions: 'play none none none' },
      opacity: 0, y: 15, duration: 0.5,
    });
  });

  document.querySelectorAll('.section-title').forEach((title) => {
    gsap.from(title, {
      scrollTrigger: { trigger: title, start: 'top 88%', toggleActions: 'play none none none' },
      opacity: 0, y: 20, duration: 0.6,
    });
  });

  document.querySelectorAll('.title-rule').forEach((rule) => {
    gsap.from(rule, {
      scrollTrigger: { trigger: rule, start: 'top 90%', toggleActions: 'play none none none' },
      scaleX: 0, transformOrigin: 'left center', duration: 0.5,
    });
  });

  // ── Feature Items
  document.querySelectorAll('.feature-item').forEach((item, i) => {
    gsap.from(item, {
      scrollTrigger: { trigger: item, start: 'top 88%', toggleActions: 'play none none none' },
      opacity: 0, y: 25, duration: 0.5, delay: i * 0.1,
      clearProps: 'transform,opacity',
    });
  });

  // ── Icon Text Rows
  document.querySelectorAll('.icon-text-row').forEach((row, i) => {
    gsap.from(row, {
      scrollTrigger: { trigger: row, start: 'top 88%', toggleActions: 'play none none none' },
      opacity: 0, x: 30, duration: 0.5, delay: i * 0.1,
    });
  });

  // ── News Cards
  document.querySelectorAll('.news-card').forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: { trigger: card, start: 'top 88%', toggleActions: 'play none none none' },
      opacity: 0, x: -25, duration: 0.5, delay: i * 0.08,
    });
  });

  // ── Calendar Widget
  const calendarWidget = document.querySelector('.calendar-widget');
  if (calendarWidget) {
    gsap.from('.calendar-widget', {
      scrollTrigger: { trigger: '.calendar-widget', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 0, y: 30, duration: 0.6,
    });
    gsap.from('.calendar-item', {
      scrollTrigger: { trigger: '.calendar-widget', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 0, x: 20, stagger: 0.1, duration: 0.4, delay: 0.3,
    });
  }

  // ── Mosaic Grid
  document.querySelectorAll('.mosaic-item').forEach((item, i) => {
    gsap.from(item, {
      scrollTrigger: { trigger: item, start: 'top 88%', toggleActions: 'play none none none' },
      opacity: 0, scale: 0.9, duration: 0.5, delay: i * 0.08,
    });
  });

  // ── App Download Section
  const appSection = document.querySelector('.app-download-section');
  if (appSection) {
    gsap.from('.app-download-content > *', {
      scrollTrigger: { trigger: '.app-download-section', start: 'top 80%', toggleActions: 'play none none none' },
      opacity: 0, y: 20, stagger: 0.08, duration: 0.5,
      clearProps: 'transform,opacity',
    });
    gsap.from('.phone-mockup', {
      scrollTrigger: { trigger: '.app-download-section', start: 'top 80%', toggleActions: 'play none none none' },
      opacity: 0, y: 40, scale: 0.9, duration: 0.7, delay: 0.3,
      clearProps: 'transform,opacity',
    });
  }

  // ── Affiliation Badges
  document.querySelectorAll('.aff-badge').forEach((badge, i) => {
    gsap.from(badge, {
      scrollTrigger: { trigger: badge, start: 'top 90%', toggleActions: 'play none none none' },
      opacity: 0, y: 20, duration: 0.4, delay: i * 0.08,
    });
  });

  // ── Sub-page elements
  document.querySelectorAll('.timeline-item').forEach((item, i) => {
    gsap.from(item, {
      scrollTrigger: { trigger: item, start: 'top 88%', toggleActions: 'play none none none' },
      opacity: 0, x: -20, duration: 0.5, delay: i * 0.08,
    });
  });

  document.querySelectorAll('.numbered-block').forEach((block, i) => {
    gsap.from(block, {
      scrollTrigger: { trigger: block, start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 0, y: 30, duration: 0.5, delay: i * 0.1,
    });
  });

  document.querySelectorAll('.step-card').forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: { trigger: card, start: 'top 88%', toggleActions: 'play none none none' },
      opacity: 0, y: 25, duration: 0.5, delay: i * 0.1,
    });
  });

  document.querySelectorAll('.feature-list li').forEach((item, i) => {
    gsap.from(item, {
      scrollTrigger: { trigger: item, start: 'top 88%', toggleActions: 'play none none none' },
      opacity: 0, x: -20, duration: 0.5, delay: i * 0.08,
    });
  });

  document.querySelectorAll('.pull-quote').forEach((quote) => {
    gsap.from(quote, {
      scrollTrigger: { trigger: quote, start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 0, x: -30, duration: 0.7,
    });
  });

  document.querySelectorAll('.card:not(.accent-top):not(.carousel-card)').forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: { trigger: card, start: 'top 88%', toggleActions: 'play none none none' },
      opacity: 0, y: 25, duration: 0.5, delay: i * 0.06,
    });
  });

  document.querySelectorAll('.grid.grid-2 > *').forEach((item, i) => {
    gsap.from(item, {
      scrollTrigger: { trigger: item, start: 'top 88%', toggleActions: 'play none none none' },
      opacity: 0, y: 20, duration: 0.5, delay: i * 0.1,
    });
  });

  // Footer is a persistent element (not inside page-content), no animation needed
}

// ─── After Navigation Hook ────────────────────────────────────────────────────

function onPageLoaded() {
  initForms();
  initCarousel();
  initPageAnimations();
}

// ─── Initialize ───────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  initShell();
  initNavigation();
  setAfterNavigate(onPageLoaded);
  initRouter();
});
