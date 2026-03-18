export function renderHeader() {
  return `
    <div class="topbar">
        <div class="container topbar-container">
            <div class="topbar-left">
                📞 +63 935 835 7254 &nbsp;&nbsp; ✉ info@evaa.edu.ph
            </div>
            <div class="topbar-right">
                <a href="#">Student Portal</a> | 
                <a href="#">Faculty</a> | 
                <a href="/alumni">Alumni</a> | 
                <a href="https://facebook.com/eastvisayanadventistacademyofleyte" target="_blank" rel="noopener">Facebook ↗</a>
            </div>
        </div>
    </div>
    <nav class="navbar">
        <div class="container nav-container">
            <a href="/" class="nav-brand" data-link>
                <svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50 0 L100 20 L100 60 C100 90 50 120 50 120 C50 120 0 90 0 60 L0 20 Z" fill="currentColor" stroke="#FFD600" stroke-width="4"/>
                    <rect x="46" y="20" width="8" height="60" fill="#FFD600"/>
                    <rect x="30" y="40" width="40" height="8" fill="#FFD600"/>
                    <path d="M30 90 Q50 100 70 90" fill="none" stroke="#FFD600" stroke-width="4"/>
                </svg>
                <div class="nav-brand-text">
                    <span class="nav-brand-large">EVAA</span>
                    <span class="nav-brand-small">East Visayan Adventist Academy</span>
                </div>
            </a>
            <div class="nav-links">
                <a href="/" data-link>Home</a>
                <a href="/about" data-link>About</a>
                <a href="/academics" data-link>Academics</a>
                <a href="/campus" data-link>Campus & Boarding</a>
                <a href="/spiritual-life" data-link>Spiritual Life</a>
                <a href="/admissions" data-link>Admissions</a>
                <a href="/campus-life" data-link>Campus Life</a>
                <a href="/contact" data-link>Contact</a>
                <a href="/contact" class="btn-primary" style="padding: 8px 16px; margin-left: 12px; border-bottom: none;" data-link>Inquire Now</a>
            </div>
            <button class="hamburger">☰</button>
        </div>
    </nav>
  `;
}
