document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
        });
    }

    // Sticky Navbar
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 60) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Active Nav Link Highlighting
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath) {
            link.classList.add('active');
        } else {
            // Also handle root path for index.html
            if (currentPath === '' && linkPath === 'index.html') {
                link.classList.add('active');
            }
        }
    });

    // Smooth Scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Form Validation
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;
            
            const requiredElements = form.querySelectorAll('[required]');
            requiredElements.forEach(el => {
                const parent = el.closest('.form-group');
                if (!el.value.trim()) {
                    isValid = false;
                    if (parent) parent.classList.add('error');
                } else {
                    if (parent) parent.classList.remove('error');
                }
            });

            if (isValid) {
                const successMsg = form.querySelector('.form-success') || form.parentElement.querySelector('.form-success');
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
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                const parent = input.closest('.form-group');
                if (parent) parent.classList.remove('error');
            });
        });
    });

    // Programs Carousel Intersection Observer & Buttons
    const track = document.querySelector('.carousel-track');
    const cards = document.querySelectorAll('.carousel-card');
    const btnPrev = document.querySelector('.btn-carousel-action.prev');
    const btnNext = document.querySelector('.btn-carousel-action.next');

    if (track && cards.length > 0) {
        
        // Helper to perfectly center a given card
        function centerCard(card, behavior = 'smooth') {
            if (!card || !track) return;
            const scrollLeft = card.offsetLeft - (track.clientWidth / 2) + (card.clientWidth / 2);
            track.scrollTo({ left: scrollLeft, behavior: behavior });
        }

        // Initial scroll center on load
        setTimeout(() => {
            // Find hardcoded active card or default to the middle one (HUMSS)
            let initialCard = document.querySelector('.carousel-card.active') || cards[2] || cards[0];
            centerCard(initialCard, 'instant');
        }, 150);

        // Observer to detect which card is strictly perfectly in the center
        const observerOptions = {
            root: track,
            threshold: 0.75 // 75% visibility required to be considered the active centerpiece
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    cards.forEach(c => c.classList.remove('active'));
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        cards.forEach(card => observer.observe(card));

        // Click a card to scroll it to center
        cards.forEach(card => {
            card.addEventListener('click', () => {
                centerCard(card, 'smooth');
            });
        });

        // Navigation Buttons logic: find the currently active class, and move +1 / -1
        if (btnPrev && btnNext) {
            btnPrev.addEventListener('click', () => {
                const activeIndex = Array.from(cards).findIndex(c => c.classList.contains('active'));
                if (activeIndex > 0) {
                    centerCard(cards[activeIndex - 1], 'smooth');
                }
            });
            btnNext.addEventListener('click', () => {
                const activeIndex = Array.from(cards).findIndex(c => c.classList.contains('active'));
                if (activeIndex < cards.length - 1) {
                    centerCard(cards[activeIndex + 1], 'smooth');
                }
            });
        }
    }
});
