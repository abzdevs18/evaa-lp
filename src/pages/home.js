export const title = 'Home | East Visayan Adventist Academy';
export const description = 'East Visayan Adventist Academy (EVAA) is a Christ-centered complete secondary boarding school in Javier, Leyte, nurturing mind, body, and spirit.';

export function content() {
  return `
        <!-- Section 1: Hero -->
        <section class="hero">
            <video class="hero-video" autoplay muted loop playsinline preload="auto">
                <source src="hero.mp4" type="video/mp4">
            </video>
            <div class="hero-overlay"></div>
            <div class="hero-bottom-rule"></div>
            <div class="container hero-content">
                <div class="hero-center">
                    <div class="tag tag-gold mb-16">Seventh-day Adventist · Javier, Leyte</div>
                    <h1>The Guardian of Truth in Eastern Visayas</h1>
                    <p class="hero-subtext">A Christ-centered boarding academy nurturing mind, body, and spirit — forming young people for service in this world and the world to come.</p>
                    <div class="btn-group">
                        <a href="/admissions" data-link class="btn-primary">Inquire / Enroll Now</a>
                        <a href="/campus" data-link class="btn-outline">Explore Our Campus</a>
                    </div>
                    <div class="trust-badges">
                        <span>✓ DepEd Region VIII Recognized</span>
                        <span>✓ Est. 1992</span>
                        <span>✓ SDA Accredited</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section 2: Quick Stats Bar -->
        <div class="stats-bar">
            <div class="container stats-grid">
                <div class="stat-item">
                    <div class="stat-value">1992</div>
                    <div class="stat-label">Year Established</div>
                </div>
                <div class="stat-divider"></div>
                <div class="stat-item">
                    <div class="stat-value">7–12</div>
                    <div class="stat-label">Complete Secondary</div>
                </div>
                <div class="stat-divider"></div>
                <div class="stat-item">
                    <div class="stat-value">Boarding</div>
                    <div class="stat-label">School Type</div>
                </div>
                <div class="stat-divider"></div>
                <div class="stat-item">
                    <div class="stat-value">~1 hr</div>
                    <div class="stat-label">From Tacloban City</div>
                </div>
                <div class="stat-divider"></div>
                <div class="stat-item">
                    <div class="stat-value">SDA</div>
                    <div class="stat-label">Affiliated Network</div>
                </div>
            </div>
        </div>

        <!-- Section 3: Three Pillars / Highlights -->
        <section class="bg-cream text-center">
            <div class="container">
                <div class="section-label">Why EVAA</div>
                <h2 class="section-title">Forming the Whole Person</h2>
                <div class="title-rule"></div>
                
                <p class="section-subtitle">Discover why families across Eastern Visayas choose EVAA for a holistic, Christ-centered education that develops mind, body, and spirit.</p>

                <div class="features-row mt-32">
                    <div class="feature-item">
                        <div class="feature-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
                        </div>
                        <h3>Rigorous Academics</h3>
                        <p>DepEd-recognized Grades 7-12 curriculum enriched by Adventist philosophy, with bilingual instruction and individualized faculty attention.</p>
                    </div>

                    <div class="feature-item">
                        <div class="feature-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                        </div>
                        <h3>Boarding Community</h3>
                        <p>Safe, supervised dormitories on a peaceful hilltop campus where students build lifelong friendships and essential life skills.</p>
                    </div>

                    <div class="feature-item">
                        <div class="feature-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                        </div>
                        <h3>Faith-Centered</h3>
                        <p>Daily worship, Bible study, and an inspiring Week of Prayer nurturing each student's personal relationship with their Creator.</p>
                    </div>

                    <div class="feature-item">
                        <div class="feature-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                        </div>
                        <h3>Character Formation</h3>
                        <p>Developing servant-leaders through mentorship, community outreach, and a values-driven environment rooted in Christian principles.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section 3.5: Academic Programs Carousel -->
        <section class="programs-section">
            <div class="container text-center mb-32">
                <div class="section-label" style="letter-spacing: 2px;">What We Offer</div>
                <h2 class="section-title">Academic Programs</h2>
                <p style="color: var(--text-body);">Choose from a range of Christ-centered degree programs</p>
            </div>

            <div class="carousel-wrapper">
                <div class="carousel-btn-wrapper">
                    <button class="btn-carousel prev btn-carousel-action" aria-label="Previous">❮</button>
                    <button class="btn-carousel next btn-carousel-action" aria-label="Next">❯</button>
                </div>
                <div class="carousel-track">
                    
                    <!-- Card 1: JHS -->
                    <div class="carousel-card" tabindex="0">
                        <div class="card-ribbon"></div>
                        <div class="card-bg"></div>
                        <div class="card-overlay"></div>
                        <div class="card-wash"></div>
                        <div class="card-top">
                            <div class="card-pretitle">Grades 7-10</div>
                            <h3 class="card-title">JUNIOR HIGH</h3>
                            <div class="card-subtitle">General Sec Education</div>
                        </div>
                        <div class="card-content">
                            <ul class="card-bullets">
                                <li>✓ DepEd Accredited</li>
                                <li>✓ Faith Integration</li>
                            </ul>
                            <p class="card-desc">Provides a holistic foundation emphasizing core academic subjects, character development, and spiritual growth to prepare students for higher learning.</p>
                        </div>
                    </div>

                    <!-- Card 2: STEM -->
                    <div class="carousel-card" tabindex="0">
                        <div class="card-ribbon"></div>
                        <div class="card-bg"></div>
                        <div class="card-overlay"></div>
                        <div class="card-wash"></div>
                        <div class="card-top">
                            <div class="card-pretitle">Academic Track</div>
                            <h3 class="card-title">STEM</h3>
                            <div class="card-subtitle">Science, Tech, Engineering & Math</div>
                        </div>
                        <div class="card-content">
                            <ul class="card-bullets">
                                <li>✓ DepEd Accredited</li>
                                <li>✓ Advanced Labs</li>
                            </ul>
                            <p class="card-desc">Prepares students for demanding global service as researchers, engineers, and healthcare professionals. Integrating faith into scientific inquiry and innovation.</p>
                        </div>
                    </div>

                    <!-- Card 3: HUMSS -->
                    <div class="carousel-card" tabindex="0" data-initial-active>
                        <div class="card-ribbon"></div>
                        <div class="card-bg"></div>
                        <div class="card-overlay"></div>
                        <div class="card-wash"></div>
                        <div class="card-top">
                            <div class="card-pretitle">Academic Track</div>
                            <h3 class="card-title">HUMSS</h3>
                            <div class="card-subtitle">Humanities & Social Sciences</div>
                        </div>
                        <div class="card-content">
                            <ul class="card-bullets">
                                <li>✓ DepEd Accredited</li>
                                <li>✓ Future Civic Leaders</li>
                            </ul>
                            <p class="card-desc">Focuses on communication, education, and social sciences. Empowers students to pursue careers in law, public service, teaching, and pastoral ministry.</p>
                        </div>
                    </div>

                    <!-- Card 4: ABM -->
                    <div class="carousel-card" tabindex="0">
                        <div class="card-ribbon"></div>
                        <div class="card-bg"></div>
                        <div class="card-overlay"></div>
                        <div class="card-wash"></div>
                        <div class="card-top">
                            <div class="card-pretitle">Academic Track</div>
                            <h3 class="card-title">ABM</h3>
                            <div class="card-subtitle">Accountancy & Business Management</div>
                        </div>
                        <div class="card-content">
                            <ul class="card-bullets">
                                <li>✓ DepEd Accredited</li>
                                <li>✓ Ethics in Business</li>
                            </ul>
                            <p class="card-desc">Equips future business leaders and entrepreneurs with sound financial management skills, ethical business practices, and integrity rooted in Christian values.</p>
                        </div>
                    </div>
                    
                    <!-- Card 5: TVL -->
                    <div class="carousel-card" tabindex="0">
                        <div class="card-ribbon"></div>
                        <div class="card-bg"></div>
                        <div class="card-overlay"></div>
                        <div class="card-wash"></div>
                        <div class="card-top">
                            <div class="card-pretitle">Technical Track</div>
                            <h3 class="card-title">TVL</h3>
                            <div class="card-subtitle">Home Econ & ICT</div>
                        </div>
                        <div class="card-content">
                            <ul class="card-bullets">
                                <li>✓ DepEd Accredited</li>
                                <li>✓ NCII Compliant</li>
                            </ul>
                            <p class="card-desc">Provides practical, specialized technical skills designed for immediate employment or entrepreneurship, fostering an attitude of dedicated service.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <!-- Section 4: About Snippet / Mission -->
        <section class="bg-navy">
            <div class="container grid grid-2 align-items-center gap-40">
                <div>
                    <div class="section-label">Our Mission</div>
                    <h2 class="section-title" style="color: white; font-size: 36px;">Preparing Young People for a Life of Service</h2>
                    <div class="title-rule left"></div>
                    <p class="italic-serif" style="font-size: 18px; color: var(--white); margin-bottom: 24px;">East Visayan Adventist Academy prepares young people to live lives of usefulness and service, reflecting the character of Christ in all they do and witnessing to the reality of a living God.</p>
                    <p style="color: rgba(255,255,255,0.7); font-size: 16px; margin-bottom: 32px;">We seek to be a leading Christian learning institution in Region VIII and beyond, known for academic excellence, strong values, appropriate use of technology, and meaningful partnerships.</p>
                    <a href="/about" data-link class="btn-outline">Learn More About EVAA →</a>
                </div>
                <div>
                    <div class="icon-text-row">
                        <div class="icon">●</div>
                        <div>
                            <h3 style="color: var(--white);">Spiritual Development</h3>
                            <p style="color: rgba(255,255,255,0.7); margin-bottom: 0;">Fostering a deep, practical faith through daily worship, reflective Bible study, and a compassionate commitment to serving the wider community.</p>
                        </div>
                    </div>
                    <div class="icon-text-row">
                        <div class="icon">●</div>
                        <div>
                            <h3 style="color: var(--white);">Intellectual Growth</h3>
                            <p style="color: rgba(255,255,255,0.7); margin-bottom: 0;">Inspiring a lifelong thirst for truth and genuine wisdom, anchored in rigorous academic standards and thoughtful critical inquiry.</p>
                        </div>
                    </div>
                    <div class="icon-text-row">
                        <div class="icon">●</div>
                        <div>
                            <h3 style="color: var(--white);">Physical & Social Wholeness</h3>
                            <p style="color: rgba(255,255,255,0.7); margin-bottom: 0;">Promoting holistic health, wholesome recreational activities, and cooperative social interactions according to biblical principles.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section 5: News & Events Teaser -->
        <section class="bg-white">
            <div class="container">
                <div class="section-label">News & Announcements</div>
                <h2 class="section-title">Stay Updated</h2>
                <div class="title-rule left"></div>
                
                <div class="grid" style="grid-template-columns: 1.8fr 1fr; gap: 40px; margin-top: 32px;">
                    <div class="news-list">
                        <div class="news-card">
                            <div class="news-meta">
                                <span class="tag tag-navy">Admissions</span>
                                <span style="font-size: 13px; color: var(--text-muted);">March 15, 2025</span>
                            </div>
                            <h3>Enrollment Open for S.Y. 2025–2026</h3>
                            <p style="color: var(--text-body); margin-bottom: 8px;">We are excited to announce that enrollment for the upcoming school year is officially open for Grades 7 through 12. Secure your place now and experience our unique boarding programs designed for holistic growth.</p>
                            <a href="/admissions" data-link class="news-link">Read more →</a>
                        </div>
                        <div class="news-card">
                            <div class="news-meta">
                                <span class="tag tag-gold">Spiritual Life</span>
                                <span style="font-size: 13px; color: var(--text-muted);">February 28, 2025</span>
                            </div>
                            <h3>Week of Prayer & Spiritual Emphasis</h3>
                            <p style="color: var(--text-body); margin-bottom: 8px;">Join us for our annual Week of Prayer, a cherished EVAA tradition. This year\'s inspiring speakers will guide students to reflect on their divine calling and renew their personal commitment to faith.</p>
                            <a href="/spiritual-life" data-link class="news-link">Read more →</a>
                        </div>
                        <div class="news-card">
                            <div class="news-meta">
                                <span class="tag tag-pale">Events</span>
                                <span style="font-size: 13px; color: var(--text-muted);">April 10, 2025</span>
                            </div>
                            <h3>Recognition Day & Academic Awards</h3>
                            <p style="color: var(--text-body); margin-bottom: 8px;">We proudly celebrate the hard work and achievements of our honor roll students. Families are warmly invited to attend this celebration of academic excellence, spiritual vitality, and stellar character.</p>
                            <a href="/campus-life" data-link class="news-link">Read more →</a>
                        </div>
                    </div>
                    
                    <div>
                        <div class="calendar-widget">
                            <div class="calendar-header">Upcoming Events</div>
                            <div class="calendar-list">
                                <div class="calendar-item">
                                    <div class="calendar-date">10<span>APR</span></div>
                                    <div>
                                        <div style="font-weight: 600; font-size: 14px;">Recognition Day</div>
                                        <div style="font-size: 12px; color: rgba(255,255,255,0.6);">Campus Church</div>
                                    </div>
                                </div>
                                <div class="calendar-item">
                                    <div class="calendar-date">25<span>MAY</span></div>
                                    <div>
                                        <div style="font-weight: 600; font-size: 14px;">Graduation Weekend</div>
                                        <div style="font-size: 12px; color: rgba(255,255,255,0.6);">Main Auditorium</div>
                                    </div>
                                </div>
                                <div class="calendar-item">
                                    <div class="calendar-date">15<span>JUN</span></div>
                                    <div>
                                        <div style="font-weight: 600; font-size: 14px;">Start of Classes</div>
                                        <div style="font-size: 12px; color: rgba(255,255,255,0.6);">School Year 2025-2026</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="/campus-life" data-link class="btn-outline w-100" style="margin-top: 16px; text-align: center;">View All Events</a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section 6: Campus Life Snapshot -->
        <section class="bg-gold-pale">
            <div class="container text-center">
                <div class="section-label mb-24">Life at the Academy</div>
                <div class="mosaic-grid mb-32">
                    <div class="mosaic-item"><span>[Photo: Campus Church]</span><div class="overlay">Campus Church</div></div>
                    <div class="mosaic-item"><span>[Photo: Academic Building]</span><div class="overlay">Academic Building</div></div>
                    <div class="mosaic-item"><span>[Photo: Dormitory Life]</span><div class="overlay">Dormitory Life</div></div>
                    <div class="mosaic-item"><span>[Photo: Parades & Drills]</span><div class="overlay">Parades & Drills</div></div>
                    <div class="mosaic-item"><span>[Photo: Student Community]</span><div class="overlay">Student Community</div></div>
                </div>
                <p>Follow us on Facebook for the latest campus updates and stories.</p>
                <a href="https://facebook.com/eastvisayanadventistacademyofleyte" target="_blank" class="btn-primary" style="background: #1877F2; color: white;">Connect on Facebook</a>
            </div>
        </section>

        <!-- Section 7: Affiliation & Recognition -->
        <section class="bg-white">
            <div class="container text-center">
                <h3 style="color: var(--text-muted); font-size: 14px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 24px;">Recognized and Affiliated With</h3>
                <div class="affiliation-badges">
                    <div class="aff-badge">DepEd Region VIII</div>
                    <div class="aff-badge">East Visayan Conference SDA</div>
                    <div class="aff-badge">Central Philippine Union Conference</div>
                    <div class="aff-badge">Southern Asia-Pacific Division of SDAs</div>
                </div>
            </div>
        </section>

        <!-- Section 8: Mobile App Download -->
        <section class="app-download-section">
            <div class="container">
                <div class="app-download-grid">
                    <div class="app-download-content">
                        <div class="section-label">Stay Connected</div>
                        <h2 class="section-title" style="color: var(--white);">EVAA Mobile App</h2>
                        <div class="title-rule left" style="margin-bottom: 24px;"></div>
                        <p style="color: rgba(255,255,255,0.85); font-size: 16px; margin-bottom: 24px;">Access your grades, schedules, announcements, and campus resources anytime, anywhere. Our official mobile app is designed for the entire EVAA community.</p>
                        <div class="app-roles">
                            <div class="app-role-tag">Students</div>
                            <div class="app-role-tag">Faculty</div>
                            <div class="app-role-tag">Admin</div>
                            <div class="app-role-tag">Staff</div>
                        </div>
                        <ul class="app-features-list">
                            <li>&#10003; View grades and class schedules</li>
                            <li>&#10003; Receive campus announcements</li>
                            <li>&#10003; Access school calendar and events</li>
                            <li>&#10003; Connect with the EVAA community</li>
                        </ul>
                        <a href="https://play.google.com/store" target="_blank" rel="noopener" class="google-play-btn">
                            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.3 2.3-8.636-8.632z"/></svg>
                            <div>
                                <span class="play-label">GET IT ON</span>
                                <span class="play-store">Google Play</span>
                            </div>
                        </a>
                    </div>
                    <div class="app-download-visual">
                        <div class="phone-mockup">
                            <div class="phone-screen">
                                <div class="phone-header">
                                    <svg viewBox="0 0 100 120" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M50 0 L100 20 L100 60 C100 90 50 120 50 120 C50 120 0 90 0 60 L0 20 Z" fill="var(--navy)" stroke="#FFD600" stroke-width="4"/>
                                        <rect x="46" y="20" width="8" height="60" fill="#FFD600"/>
                                        <rect x="30" y="40" width="40" height="8" fill="#FFD600"/>
                                    </svg>
                                    <span>EVAA App</span>
                                </div>
                                <div class="phone-menu-item">
                                    <span class="phone-icon">&#128218;</span> My Grades
                                </div>
                                <div class="phone-menu-item">
                                    <span class="phone-icon">&#128197;</span> Class Schedule
                                </div>
                                <div class="phone-menu-item">
                                    <span class="phone-icon">&#128276;</span> Announcements
                                </div>
                                <div class="phone-menu-item">
                                    <span class="phone-icon">&#128100;</span> My Profile
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section 9: CTA Banner -->
        <section class="bg-navy" style="background: linear-gradient(135deg, var(--navy) 0%, var(--navy-mid) 100%);">
            <div class="container text-center">
                <div style="font-family: var(--font-serif); font-style: italic; color: var(--gold); font-size: 24px; margin-bottom: 8px;">S.Y. 2025–2026</div>
                <h2 style="color: var(--white); font-size: 42px; margin-bottom: 16px;">Begin Your Journey at EVAA</h2>
                <p style="color: rgba(255,255,255,0.8); max-width: 600px; margin: 0 auto 32px; font-size: 18px;">Discover a place where faith, knowledge, and lifelong friendships intertwine. We invite you to be part of our vibrant Christian academic community.</p>
                <div class="btn-group justify-content-center">
                    <a href="/admissions" data-link class="btn-primary">Apply Now</a>
                    <a href="/contact" data-link class="btn-outline">Contact the Registrar</a>
                </div>
            </div>
        </section>
  `;
}
