export function renderFooter() {
  return `
    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div>
                    <div class="footer-brand">
                        <img src="/logo_white.png" alt="EVAA Logo" style="width: 32px; height: auto; border-radius:50px;">
                        East Visayan Adventist Academy
                    </div>
                    <div class="footer-motto">The Guardian of Truth</div>
                    <p style="opacity: 0.8; font-size: 14px; margin-bottom: 16px; max-width: 300px;">Preparing young people to live lives of usefulness and service, reflecting the character of Christ.</p>
                    <a href="https://facebook.com/eastvisayanadventistacademyofleyte" style="color: var(--gold);">Facebook Page ↗</a>
                </div>
                <div>
                    <h4>Quick Links</h4>
                    <div class="footer-links">
                        <a href="/" data-link>Home</a>
                        <a href="/about" data-link>About Us</a>
                        <a href="/academics" data-link>Academics</a>
                        <a href="/campus" data-link>Campus & Boarding</a>
                        <a href="/spiritual-life" data-link>Spiritual Life</a>
                        <a href="/admissions" data-link>Admissions</a>
                        <a href="/campus-life" data-link>Campus Life</a>
                        <a href="/alumni" data-link>Alumni</a>
                    </div>
                </div>
                <div>
                    <h4>Contact & Affiliation</h4>
                    <ul class="list-unstyled" style="font-size: 14px; opacity: 0.8; display: flex; flex-direction: column; gap: 8px;">
                        <li>Academy Heights, Brgy. San Sotero,<br>Javier, Leyte 6511, Philippines</li>
                        <li>P.O. Box 241, 6500 Tacloban City</li>
                        <li>+63 935 835 7254</li>
                        <li style="margin-top: 12px; color: var(--gold);">DepEd Region VIII Recognized</li>
                        <li style="font-size: 12px; opacity: 0.7;">East Visayan Conference · Central Philippine Union Conference · Southern Asia-Pacific Division</li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <span>&copy; 2025 East Visayan Adventist Academy of Leyte, Inc. · All Rights Reserved</span>
                <div style="display: flex; gap: 16px;">
                    <span>DepEd Recognized</span>
                    <a href="#">Privacy Policy</a>
                </div>
            </div>
        </div>
    </footer>
  `;
}
