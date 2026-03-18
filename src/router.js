import { gsap } from 'gsap';

// Route definitions - lazy loaded
const routes = {
  '/': () => import('./pages/home.js'),
  '/about': () => import('./pages/about.js'),
  '/academics': () => import('./pages/academics.js'),
  '/admissions': () => import('./pages/admissions.js'),
  '/alumni': () => import('./pages/alumni.js'),
  '/campus': () => import('./pages/campus.js'),
  '/campus-life': () => import('./pages/campus-life.js'),
  '/contact': () => import('./pages/contact.js'),
  '/spiritual-life': () => import('./pages/spiritual-life.js'),
};

let isNavigating = false;
let onAfterNavigate = null;

export function setAfterNavigate(fn) {
  onAfterNavigate = fn;
}

// Get the main content container
function getContainer() {
  return document.getElementById('page-content');
}

// Normalize path (strip trailing slash, default to /)
function normalizePath(path) {
  if (path === '' || path === '/') return '/';
  return path.replace(/\/$/, '');
}

// Update active nav link
function updateActiveNav(path) {
  const links = document.querySelectorAll('.nav-links a[data-link]');
  links.forEach((link) => {
    const href = link.getAttribute('href');
    if (href === path) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Page transition: fade out current content, swap, fade in new
async function transitionTo(pageModule, isInitial = false) {
  const container = getContainer();
  if (!container) return;

  // Update document title and meta
  document.title = pageModule.title || 'East Visayan Adventist Academy';
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && pageModule.description) {
    metaDesc.setAttribute('content', pageModule.description);
  }

  if (isInitial) {
    // First load: just render and animate in
    container.innerHTML = `<main>${pageModule.content()}</main>`;
    gsap.from(container, {
      opacity: 0,
      y: 15,
      duration: 0.4,
      ease: 'power2.out',
    });
    if (onAfterNavigate) onAfterNavigate();
    return;
  }

  // Animate out
  await gsap.to(container, {
    opacity: 0,
    y: -10,
    duration: 0.25,
    ease: 'power2.in',
  });

  // Swap content
  container.innerHTML = `<main>${pageModule.content()}</main>`;
  window.scrollTo({ top: 0, behavior: 'instant' });

  // Animate in
  gsap.fromTo(
    container,
    { opacity: 0, y: 15 },
    { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' }
  );

  if (onAfterNavigate) onAfterNavigate();
}

// Navigate to a path
export async function navigate(path, pushState = true) {
  if (isNavigating) return;

  const normalized = normalizePath(path);
  const loader = routes[normalized];

  if (!loader) {
    // Fallback: try loading home
    console.warn(`Route not found: ${normalized}, falling back to /`);
    return navigate('/', pushState);
  }

  isNavigating = true;

  try {
    const pageModule = await loader();
    const isInitial = !getContainer().hasChildNodes();

    if (pushState) {
      history.pushState({ path: normalized }, '', normalized);
    }

    updateActiveNav(normalized);
    await transitionTo(pageModule, isInitial);
  } catch (err) {
    console.error('Navigation error:', err);
  } finally {
    isNavigating = false;
  }
}

// Initialize router
export function initRouter() {
  // Handle browser back/forward
  window.addEventListener('popstate', (e) => {
    const path = e.state?.path || normalizePath(window.location.pathname);
    navigate(path, false);
  });

  // Intercept all [data-link] clicks for SPA navigation
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[data-link]');
    if (!link) return;

    e.preventDefault();
    const href = link.getAttribute('href');
    const currentPath = normalizePath(window.location.pathname);

    // Don't re-navigate to the same page
    if (normalizePath(href) === currentPath) return;

    // Close mobile menu if open
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    if (navLinks && navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
      if (hamburger) hamburger.textContent = '\u2630';
    }

    navigate(href);
  });

  // Initial page load
  const initialPath = normalizePath(window.location.pathname);
  history.replaceState({ path: initialPath }, '', initialPath);
  navigate(initialPath, false);
}
