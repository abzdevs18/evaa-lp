export function renderHeader() {
  return `
    <div class="topbar">
        <div class="container topbar-container">
            <div class="topbar-left">
                📞 +63 935 835 7254 &nbsp;&nbsp; ✉ info@evaa.edu.ph
            </div>
            <div class="topbar-right">
                <a href="https://evaa.gabay.online/login">Student Portal</a> | 
                <a href="https://evaa.gabay.online/login">Faculty</a> | 
                <a href="/alumni">Alumni</a> | 
                <a href="https://facebook.com/eastvisayanadventistacademyofleyte" target="_blank" rel="noopener">Facebook ↗</a>
            </div>
        </div>
    </div>
    <nav class="navbar">
        <div class="container nav-container">
            <a href="/" class="nav-brand" data-link>
                <img src="/logo_white.png" alt="EVAA Logo" style="width: 48px; height: auto; border-radius:50px;">
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
