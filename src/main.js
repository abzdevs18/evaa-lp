import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ─── Navigation Logic (from nav.js) ───────────────────────────────────────────

function initNavigation() {
  // Mobile Menu Toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      hamburger.textContent = navLinks.classList.contains('active') ? '\u2715' : '\u2630';
    });
  }

  // Sticky Navbar
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 60);
    });
  }

  // Active Nav Link Highlighting
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navItems = document.querySelectorAll('.nav-links a');
  navItems.forEach((link) => {
    const linkPath = link.getAttribute('href');
    if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Smooth Scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      if (this.getAttribute('href') !== '#') {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
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

// ─── Carousel Logic ───────────────────────────────────────────────────────────

function initCarousel() {
  const track = document.querySelector('.carousel-track');
  const cards = Array.from(document.querySelectorAll('.carousel-card'));
  const btnPrev = document.querySelector('.btn-carousel-action.prev');
  const btnNext = document.querySelector('.btn-carousel-action.next');

  if (!track || cards.length === 0) return;

  // Responsive configuration
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

  // Find initial active index
  let activeIndex = cards.findIndex((c) => c.hasAttribute('data-initial-active'));
  if (activeIndex === -1) activeIndex = Math.floor(cards.length / 2);

  let isAnimating = false;

  // Position all cards based on the active index
  function layoutCards(animate = true) {
    const dur = animate ? DURATION : 0;
    const cfg = getConfig();

    cards.forEach((card, i) => {
      const offset = i - activeIndex;
      const absOffset = Math.abs(offset);

      // Calculate x position: each card offset by card width + gap
      const x = offset * (cfg.cardWidth + cfg.gap);

      // Scale: active = 1.0, adjacent = responsive, further = responsive
      let scale = cfg.farScale;
      if (absOffset === 0) scale = ACTIVE_SCALE;
      else if (absOffset === 1) scale = cfg.adjScale;

      // Z-index: active on top, adjacent next, others behind
      const zIndex = absOffset === 0 ? 15 : Math.max(1, 10 - absOffset);

      // Box shadow: subtle on all cards, no heavy blue shadow
      const shadow =
        absOffset === 0
          ? '0 4px 16px rgba(0,0,0,0.1)'
          : '0 2px 8px rgba(0,0,0,0.06)';

      // Animate the card position and scale
      gsap.to(card, {
        x,
        scale,
        zIndex,
        boxShadow: shadow,
        duration: dur,
        ease: EASE,
        overwrite: 'auto',
      });

      // Animate the wash overlay (opacity: 0 for active, 1 for inactive)
      const wash = card.querySelector('.card-wash');
      if (wash) {
        gsap.to(wash, {
          opacity: absOffset === 0 ? 0 : 1,
          duration: dur,
          ease: EASE,
          overwrite: 'auto',
        });
      }

      // Animate the ribbon height
      const ribbon = card.querySelector('.card-ribbon');
      if (ribbon) {
        gsap.to(ribbon, {
          height: absOffset === 0 ? 85 : 70,
          background: absOffset === 0 ? '#FFD600' : 'rgba(255,214,0,0.8)',
          duration: dur,
          ease: EASE,
          overwrite: 'auto',
        });
      }
    });
  }

  // Navigate to a specific index
  function goTo(index) {
    if (isAnimating || index < 0 || index >= cards.length || index === activeIndex) return;
    isAnimating = true;
    activeIndex = index;
    layoutCards(true);
    // Unlock after animation completes
    gsap.delayedCall(DURATION, () => {
      isAnimating = false;
    });
  }

  // Initial layout without animation
  layoutCards(false);

  // Click a card to navigate to it
  cards.forEach((card, i) => {
    card.addEventListener('click', () => goTo(i));
  });

  // Navigation Buttons
  if (btnPrev) {
    btnPrev.addEventListener('click', () => goTo(activeIndex - 1));
  }
  if (btnNext) {
    btnNext.addEventListener('click', () => goTo(activeIndex + 1));
  }

  // Keyboard navigation
  track.setAttribute('tabindex', '0');
  track.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') goTo(activeIndex - 1);
    if (e.key === 'ArrowRight') goTo(activeIndex + 1);
  });

  // Recalculate layout on resize
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => layoutCards(false), 150);
  });

  // Touch/swipe support
  let touchStartX = 0;
  let touchEndX = 0;
  track.addEventListener(
    'touchstart',
    (e) => {
      touchStartX = e.changedTouches[0].screenX;
    },
    { passive: true }
  );
  track.addEventListener(
    'touchend',
    (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) goTo(activeIndex + 1);
        else goTo(activeIndex - 1);
      }
    },
    { passive: true }
  );
}

// ─── GSAP Animations ──────────────────────────────────────────────────────────

function initAnimations() {
  // Default ease for all tweens
  gsap.defaults({ ease: 'power2.out', duration: 0.8 });

  // ── Hero Section Entrance ─────────────────────────────────────────────────
  const hero = document.querySelector('.hero');
  if (hero) {
    const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    heroTl
      .from('.hero .tag', { opacity: 0, y: 20, duration: 0.5 })
      .from('.hero h1', { opacity: 0, y: 30, duration: 0.7 }, '-=0.2')
      .from('.hero-subtext', { opacity: 0, y: 20, duration: 0.5 }, '-=0.3')
      .from('.hero .btn-group', { opacity: 0, y: 20, duration: 0.5 }, '-=0.2')
      .from('.hero .trust-badges span', {
        opacity: 0,
        y: 10,
        stagger: 0.1,
        duration: 0.4,
      }, '-=0.2')
      .from('.hero-right', {
        opacity: 0,
        x: 40,
        duration: 0.8,
      }, '-=0.8')
      .from('.hero-bottom-rule', {
        scaleX: 0,
        transformOrigin: 'left center',
        duration: 0.6,
      }, '-=0.3');
  }

  // ── Hero Inner (sub-page heroes) ──────────────────────────────────────────
  const heroInner = document.querySelector('.hero-inner');
  if (heroInner) {
    const innerTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    innerTl
      .from('.hero-inner .breadcrumb', { opacity: 0, y: 15, duration: 0.4 })
      .from('.hero-inner h1', { opacity: 0, y: 25, duration: 0.6 }, '-=0.1')
      .from('.hero-inner p', { opacity: 0, y: 15, duration: 0.5 }, '-=0.2');
  }

  // ── Topbar & Navbar ───────────────────────────────────────────────────────
  gsap.from('.topbar', { opacity: 0, y: -20, duration: 0.4 });
  gsap.from('.navbar', { opacity: 0, y: -10, duration: 0.4, delay: 0.1 });

  // ── Stats Bar Counter Effect ──────────────────────────────────────────────
  const statsBar = document.querySelector('.stats-bar');
  if (statsBar) {
    gsap.from('.stat-item', {
      scrollTrigger: {
        trigger: '.stats-bar',
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: 30,
      stagger: 0.12,
      duration: 0.6,
    });
  }

  // ── Section Labels & Titles ───────────────────────────────────────────────
  document.querySelectorAll('.section-label').forEach((label) => {
    gsap.from(label, {
      scrollTrigger: {
        trigger: label,
        start: 'top 88%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: 15,
      duration: 0.5,
    });
  });

  document.querySelectorAll('.section-title').forEach((title) => {
    gsap.from(title, {
      scrollTrigger: {
        trigger: title,
        start: 'top 88%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: 20,
      duration: 0.6,
    });
  });

  document.querySelectorAll('.title-rule').forEach((rule) => {
    gsap.from(rule, {
      scrollTrigger: {
        trigger: rule,
        start: 'top 90%',
        toggleActions: 'play none none none',
      },
      scaleX: 0,
      transformOrigin: 'left center',
      duration: 0.5,
    });
  });

  // ── Cards (accent-top) ───────────────────────────────────────────────────
  document.querySelectorAll('.card.accent-top').forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: 40,
      duration: 0.6,
      delay: i * 0.1,
    });
  });

  // ── Carousel Cards (positions handled by initCarousel GSAP) ────────────

  // ── Icon Text Rows (Mission section) ──────────────────────────────────────
  document.querySelectorAll('.icon-text-row').forEach((row, i) => {
    gsap.from(row, {
      scrollTrigger: {
        trigger: row,
        start: 'top 88%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      x: 30,
      duration: 0.5,
      delay: i * 0.1,
    });
  });

  // ── News Cards ────────────────────────────────────────────────────────────
  document.querySelectorAll('.news-card').forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 88%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      x: -25,
      duration: 0.5,
      delay: i * 0.08,
    });
  });

  // ── Calendar Widget ───────────────────────────────────────────────────────
  const calendarWidget = document.querySelector('.calendar-widget');
  if (calendarWidget) {
    gsap.from('.calendar-widget', {
      scrollTrigger: {
        trigger: '.calendar-widget',
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: 30,
      duration: 0.6,
    });

    gsap.from('.calendar-item', {
      scrollTrigger: {
        trigger: '.calendar-widget',
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      x: 20,
      stagger: 0.1,
      duration: 0.4,
      delay: 0.3,
    });
  }

  // ── Mosaic Grid Items ─────────────────────────────────────────────────────
  document.querySelectorAll('.mosaic-item').forEach((item, i) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: 'top 88%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      scale: 0.9,
      duration: 0.5,
      delay: i * 0.08,
    });
  });

  // ── Affiliation Badges ────────────────────────────────────────────────────
  document.querySelectorAll('.aff-badge').forEach((badge, i) => {
    gsap.from(badge, {
      scrollTrigger: {
        trigger: badge,
        start: 'top 90%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: 20,
      duration: 0.4,
      delay: i * 0.08,
    });
  });

  // ── CTA Banner ────────────────────────────────────────────────────────────
  const ctaBanner = document.querySelector('.bg-navy:last-of-type');
  if (ctaBanner && ctaBanner.querySelector('.btn-group')) {
    gsap.from(ctaBanner.children, {
      scrollTrigger: {
        trigger: ctaBanner,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: 30,
      duration: 0.6,
    });
  }

  // ── Generic Scroll Reveals for Sub-Pages ──────────────────────────────────

  // Timeline items
  document.querySelectorAll('.timeline-item').forEach((item, i) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: 'top 88%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      x: -20,
      duration: 0.5,
      delay: i * 0.08,
    });
  });

  // Numbered blocks
  document.querySelectorAll('.numbered-block').forEach((block, i) => {
    gsap.from(block, {
      scrollTrigger: {
        trigger: block,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: 30,
      duration: 0.5,
      delay: i * 0.1,
    });
  });

  // Step cards
  document.querySelectorAll('.step-card').forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 88%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: 25,
      duration: 0.5,
      delay: i * 0.1,
    });
  });

  // Feature list items
  document.querySelectorAll('.feature-list li').forEach((item, i) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: 'top 88%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      x: -20,
      duration: 0.5,
      delay: i * 0.08,
    });
  });

  // Pull quotes
  document.querySelectorAll('.pull-quote').forEach((quote) => {
    gsap.from(quote, {
      scrollTrigger: {
        trigger: quote,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      x: -30,
      duration: 0.7,
    });
  });

  // Generic cards without accent-top
  document.querySelectorAll('.card:not(.accent-top):not(.carousel-card)').forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 88%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: 25,
      duration: 0.5,
      delay: i * 0.06,
    });
  });

  // Grid-2 content blocks in sub-pages
  document.querySelectorAll('.grid.grid-2 > *').forEach((item, i) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: 'top 88%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: 20,
      duration: 0.5,
      delay: i * 0.1,
    });
  });

  // Footer
  const footer = document.querySelector('.footer');
  if (footer) {
    gsap.from('.footer-grid > *', {
      scrollTrigger: {
        trigger: '.footer',
        start: 'top 90%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: 25,
      stagger: 0.1,
      duration: 0.5,
    });
  }
}

// ─── Initialize Everything ────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initForms();
  initCarousel();
  initAnimations();
});
