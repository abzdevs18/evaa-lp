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
  const cards = document.querySelectorAll('.carousel-card');
  const btnPrev = document.querySelector('.btn-carousel-action.prev');
  const btnNext = document.querySelector('.btn-carousel-action.next');

  if (!track || cards.length === 0) return;

  function centerCard(card, behavior = 'smooth') {
    if (!card || !track) return;
    const scrollLeft = card.offsetLeft - track.clientWidth / 2 + card.clientWidth / 2;
    track.scrollTo({ left: scrollLeft, behavior });
  }

  // Initial scroll center on load
  setTimeout(() => {
    const initialCard =
      document.querySelector('.carousel-card.active') || cards[2] || cards[0];
    centerCard(initialCard, 'instant');
  }, 150);

  // Observer to detect center card
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          cards.forEach((c) => c.classList.remove('active'));
          entry.target.classList.add('active');
        }
      });
    },
    { root: track, threshold: 0.75 }
  );

  cards.forEach((card) => observer.observe(card));

  // Click a card to scroll it to center
  cards.forEach((card) => {
    card.addEventListener('click', () => centerCard(card, 'smooth'));
  });

  // Navigation Buttons
  if (btnPrev && btnNext) {
    btnPrev.addEventListener('click', () => {
      const activeIndex = Array.from(cards).findIndex((c) => c.classList.contains('active'));
      if (activeIndex > 0) centerCard(cards[activeIndex - 1], 'smooth');
    });
    btnNext.addEventListener('click', () => {
      const activeIndex = Array.from(cards).findIndex((c) => c.classList.contains('active'));
      if (activeIndex < cards.length - 1) centerCard(cards[activeIndex + 1], 'smooth');
    });
  }
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

  // ── Carousel Cards ────────────────────────────────────────────────────────
  const carouselSection = document.querySelector('.programs-section');
  if (carouselSection) {
    gsap.from('.programs-section .section-title', {
      scrollTrigger: {
        trigger: '.programs-section',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: 25,
      duration: 0.6,
    });

    gsap.from('.carousel-card', {
      scrollTrigger: {
        trigger: '.carousel-track',
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: 50,
      scale: 0.9,
      stagger: 0.08,
      duration: 0.6,
    });
  }

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
