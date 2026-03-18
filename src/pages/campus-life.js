export const title = 'Campus Life & Events | East Visayan Adventist Academy';
export const description = 'Discover the vibrant events, organizations, and traditions that make life at EVAA truly memorable.';

export function content() {
  return `
        <!-- Section 1: Page Hero -->
        <section class="hero-inner">
            <div class="breadcrumb"><a href="/" data-link>Home</a> &gt; Campus Life & Events</div>
            <h1>Life at EVAA</h1>
            <p class="hero-subtext" style="color: rgba(255,255,255,0.8); margin-bottom: 0;">Faith, Learning, and Community</p>
            <div style="width: 48px; height: 3px; background-color: var(--gold); margin-top: 24px;"></div>
        </section>

        <!-- Section 2: Featured Events Showcase -->
        <section class="bg-cream">
            <div class="container">
                <div class="section-label text-center">Traditions</div>
                <h2 class="section-title text-center">Featured Events Showcase</h2>
                <div class="title-rule"></div>

                <div class="grid grid-3 mt-32">
                    <div class="card" style="padding: 0; position: relative;">
                        <div class="image-placeholder" style="height: 250px; border-radius: 12px 12px 0 0;"><span>[Photo: Pass-in-Review]</span></div>
                        <div style="padding: 24px;">
                            <h3 style="margin-bottom: 8px;">Parades & Pass-in-Review</h3>
                            <p style="font-size: 14px; color: var(--text-body); margin-bottom: 8px;">A cherished annual tradition where students demonstrate discipline and unity through the breathtaking "Ant Fortress" parade ceremony and precision marching drills on the campus field.</p>
                            <a href="https://facebook.com/eastvisayanadventistacademyofleyte" target="_blank" class="news-link" style="font-size: 12px;">View Photos on Facebook ↗</a>
                        </div>
                    </div>
                    <div class="card" style="padding: 0; position: relative;">
                        <div class="image-placeholder" style="height: 250px; border-radius: 12px 12px 0 0;"><span>[Photo: School Band]</span></div>
                        <div style="padding: 24px;">
                            <h3 style="margin-bottom: 8px;">Band & Fancy Drill</h3>
                            <p style="font-size: 14px; color: var(--text-body); margin-bottom: 8px;">Witness the competitive spirit and intense school pride as our acclaimed school band and fancy drill teams perform complex, coordinated routines that are deeply recognized regional traditions.</p>
                            <a href="https://facebook.com/eastvisayanadventistacademyofleyte" target="_blank" class="news-link" style="font-size: 12px;">View Photos on Facebook ↗</a>
                        </div>
                    </div>
                    <div class="card" style="padding: 0; position: relative;">
                        <div class="image-placeholder" style="height: 250px; border-radius: 12px 12px 0 0;"><span>[Photo: Graduation]</span></div>
                        <div style="padding: 24px;">
                            <h3 style="margin-bottom: 8px;">Recognition & Graduation</h3>
                            <p style="font-size: 14px; color: var(--text-body); margin-bottom: 8px;">The pinnacle of the academic year. We celebrate our honor roll students, bestow spiritual and character awards, and emotionally send off our seniors during the solemn Baccalaureate service.</p>
                            <a href="https://facebook.com/eastvisayanadventistacademyofleyte" target="_blank" class="news-link" style="font-size: 12px;">View Photos on Facebook ↗</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section 3: Student Organizations -->
        <section class="bg-white">
            <div class="container text-center">
                <div class="section-label">Get Involved</div>
                <h2 class="section-title">Student Organizations</h2>
                <div class="title-rule"></div>

                <div class="grid grid-3 mt-32 text-left">
                    <div class="card" style="border-top: 3px solid var(--gold);">
                        <h4 style="margin-bottom: 8px; color: var(--navy);">Supreme Student Government (SSG)</h4>
                        <p style="font-size: 13px; margin-bottom: 12px; color: var(--text-body);">The primary governing voice for the student body, teaching leadership and policy-making.</p>
                        <a href="/academics" data-link style="font-size: 13px; font-weight: 600; color: var(--gold);">Learn More &rarr;</a>
                    </div>
                    <div class="card" style="border-top: 3px solid var(--gold);">
                        <h4 style="margin-bottom: 8px; color: var(--navy);">School Band</h4>
                        <p style="font-size: 13px; margin-bottom: 12px; color: var(--text-body);">Developing musical abilities and performing faithfully at school and inter-school events.</p>
                        <a href="/academics" data-link style="font-size: 13px; font-weight: 600; color: var(--gold);">Learn More &rarr;</a>
                    </div>
                    <div class="card" style="border-top: 3px solid var(--gold);">
                        <h4 style="margin-bottom: 8px; color: var(--navy);">Fancy Drill / Color Guard</h4>
                        <p style="font-size: 13px; margin-bottom: 12px; color: var(--text-body);">Executing complex military-style marching maneuvers demanding immense precision.</p>
                        <a href="/academics" data-link style="font-size: 13px; font-weight: 600; color: var(--gold);">Learn More &rarr;</a>
                    </div>
                    <div class="card" style="border-top: 3px solid var(--gold);">
                        <h4 style="margin-bottom: 8px; color: var(--navy);">Pathfinder Club</h4>
                        <p style="font-size: 13px; margin-bottom: 12px; color: var(--text-body);">The SDA church\'s premier scouting organization focusing on outdoor survival and faith.</p>
                        <a href="/spiritual-life" data-link style="font-size: 13px; font-weight: 600; color: var(--gold);">Learn More &rarr;</a>
                    </div>
                    <div class="card" style="border-top: 3px solid var(--gold);">
                        <h4 style="margin-bottom: 8px; color: var(--navy);">Student Ministerial Association</h4>
                        <p style="font-size: 13px; margin-bottom: 12px; color: var(--text-body);">For youth passionate about pastoral leadership, organizing campus ministries.</p>
                        <a href="/spiritual-life" data-link style="font-size: 13px; font-weight: 600; color: var(--gold);">Learn More &rarr;</a>
                    </div>
                    <div class="card" style="border-top: 3px solid var(--gold);">
                        <h4 style="margin-bottom: 8px; color: var(--navy);">Academic Clubs</h4>
                        <p style="font-size: 13px; margin-bottom: 12px; color: var(--text-body);">Including Science, Math, and Literature groups that participate in regional Olympiads.</p>
                        <a href="/academics" data-link style="font-size: 13px; font-weight: 600; color: var(--gold);">Learn More &rarr;</a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section 4: Annual Events Calendar -->
        <section class="bg-navy" style="color: white; padding: 100px 0;">
            <div class="container text-center">
                <div class="section-label" style="opacity: 0.8;">The School Year</div>
                <h2 class="section-title text-white">Annual Events Rhythm</h2>
                <div class="title-rule" style="background: var(--gold);"></div>

                <div style="max-width: 800px; margin: 40px auto 0; text-align: left;">
                    <ul style="list-style: none; padding: 0; position: relative;">
                        <!-- Vertical line for timeline effect -->
                        <div style="position: absolute; left: 140px; top: 10px; bottom: 10px; width: 2px; background: rgba(255,255,255,0.1); display: none;"></div>
                        
                        <li style="display: flex; gap: 32px; padding: 20px; border-bottom: 1px solid rgba(255,255,255,0.1); align-items: center;">
                            <div style="width: 120px; flex-shrink: 0; color: var(--gold); font-weight: 600; text-align: right;">March–June</div>
                            <div style="font-weight: 500; font-size: 18px;">Enrollment & Registration Period</div>
                        </li>
                        <li style="display: flex; gap: 32px; padding: 20px; border-bottom: 1px solid rgba(255,255,255,0.1); align-items: center;">
                            <div style="width: 120px; flex-shrink: 0; color: var(--gold); font-weight: 600; text-align: right;">July</div>
                            <div style="font-weight: 500; font-size: 18px;">Grand Opening Program & Orientation</div>
                        </li>
                        <li style="display: flex; gap: 32px; padding: 20px; border-bottom: 1px solid rgba(255,255,255,0.1); align-items: center;">
                            <div style="width: 120px; flex-shrink: 0; color: var(--gold); font-weight: 600; text-align: right;">Sept</div>
                            <div style="font-weight: 500; font-size: 18px;">Foundation Day / Anniversary Celebration</div>
                        </li>
                        <li style="display: flex; gap: 32px; padding: 20px; border-bottom: 1px solid rgba(255,255,255,0.1); align-items: center;">
                            <div style="width: 120px; flex-shrink: 0; color: var(--gold); font-weight: 600; text-align: right;">Oct / Mar</div>
                            <div style="font-weight: 500; font-size: 18px;">Week of Prayer / Spiritual Emphasis Weeks</div>
                        </li>
                        <li style="display: flex; gap: 32px; padding: 20px; border-bottom: 1px solid rgba(255,255,255,0.1); align-items: center;">
                            <div style="width: 120px; flex-shrink: 0; color: var(--gold); font-weight: 600; text-align: right;">Nov</div>
                            <div style="font-weight: 500; font-size: 18px;">Science & Technology Fair / Sports Fest</div>
                        </li>
                        <li style="display: flex; gap: 32px; padding: 20px; border-bottom: 1px solid rgba(255,255,255,0.1); align-items: center;">
                            <div style="width: 120px; flex-shrink: 0; color: var(--gold); font-weight: 600; text-align: right;">Feb</div>
                            <div style="font-weight: 500; font-size: 18px;">Band & Drill Regional Competition</div>
                        </li>
                        <li style="display: flex; gap: 32px; padding: 20px; align-items: center;">
                            <div style="width: 120px; flex-shrink: 0; color: var(--gold); font-weight: 600; text-align: right;">May</div>
                            <div style="font-weight: 500; font-size: 18px;">Recognition Day & Baccalaureate Service</div>
                        </li>
                    </ul>
                    <p style="text-align: center; margin-top: 24px; font-size: 13px; color: rgba(255,255,255,0.6); font-style: italic;">Note: Dates vary annually depending on the academic calendar. Follow our Facebook page for confirmed event schedules.</p>
                </div>
            </div>
        </section>

        <!-- Section 5: Photo & Video Gallery -->
        <section class="bg-white">
            <div class="container text-center">
                <div class="section-label">Campus Gallery</div>
                <h2 class="section-title">Memories from Academy Heights</h2>
                <div class="title-rule"></div>

                <div class="mosaic-grid mt-32 mb-32" style="grid-template-columns: repeat(5, 1fr); grid-auto-rows: 150px;">
                    <div class="mosaic-item" style="grid-column: span 2; grid-row: span 2;"><span>[Photo: Campus View]</span><div class="overlay">Campus</div></div>
                    <div class="mosaic-item" style="grid-column: span 2;"><span>[Photo: Classes]</span><div class="overlay">Classes</div></div>
                    <div class="mosaic-item" style="grid-column: span 1; grid-row: span 2;"><span>[Photo: Worship]</span><div class="overlay">Worship</div></div>
                    <div class="mosaic-item" style="grid-column: span 2;"><span>[Photo: Events]</span><div class="overlay">Events</div></div>
                    
                    <div class="mosaic-item" style="grid-column: span 2;"><span>[Photo: Dorm Life]</span><div class="overlay">Dorm Life</div></div>
                    <div class="mosaic-item" style="grid-column: span 3;"><span>[Photo: Sports]</span><div class="overlay">Sports</div></div>
                </div>

                <div style="background: var(--info-bg); padding: 32px; border-radius: 8px; display: inline-block;">
                    <p style="color: var(--navy); font-weight: 600; margin-bottom: 16px;">📷 Follow us on Facebook for photos and videos from all our latest events and school activities.</p>
                    <a href="https://facebook.com/eastvisayanadventistacademyofleyte" target="_blank" class="btn-primary" style="background: #1877F2; color: white;">Follow EVAA on Facebook</a>
                </div>
            </div>
        </section>

        <!-- Section 6: Campus Life Testimonials -->
        <section class="bg-cream">
            <div class="container text-center">
                <h2 class="section-title">What They\'re Saying</h2>
                <div class="title-rule"></div>

                <div class="grid grid-3 mt-32 text-left">
                    <div class="card" style="display: flex; flex-direction: column;">
                        <div style="display: flex; gap: 16px; align-items: center; margin-bottom: 16px;">
                            <div class="avatar-circle" style="width: 48px; height: 48px; font-size: 18px; margin-bottom: 0;">JM</div>
                            <div>
                                <h4 style="margin-bottom: 0; font-size: 15px; color: var(--navy);">[Student Name]</h4>
                                <div style="font-size: 12px; color: var(--text-muted);">Grade 11 Student</div>
                            </div>
                        </div>
                        <p style="font-size: 14px; font-style: italic; color: var(--text-body); flex-grow: 1;">"Living in the dorms was intimidating at first, but it quickly became my favorite part of EVAA. We do our chores together, study together, and pray together. I\'ve made brothers here that I know I will have for the rest of my life."</p>
                        <div style="font-size: 10px; color: var(--danger); text-align: right;">[Testimonial placeholder]</div>
                    </div>
                    <div class="card" style="display: flex; flex-direction: column;">
                        <div style="display: flex; gap: 16px; align-items: center; margin-bottom: 16px;">
                            <div class="avatar-circle" style="width: 48px; height: 48px; font-size: 18px; margin-bottom: 0;">AC</div>
                            <div>
                                <h4 style="margin-bottom: 0; font-size: 15px; color: var(--navy);">[Alumni Name]</h4>
                                <div style="font-size: 12px; color: var(--text-muted);">Class of 2020</div>
                            </div>
                        </div>
                        <p style="font-size: 14px; font-style: italic; color: var(--text-body); flex-grow: 1;">"The discipline I learned from the fancy drill team and the daily schedules prepared me so much for the pressure of college. EVAA taught me how to manage my time without losing focus on my relationship with God."</p>
                        <div style="font-size: 10px; color: var(--danger); text-align: right;">[Testimonial placeholder]</div>
                    </div>
                    <div class="card" style="display: flex; flex-direction: column;">
                        <div style="display: flex; gap: 16px; align-items: center; margin-bottom: 16px;">
                            <div class="avatar-circle" style="width: 48px; height: 48px; font-size: 18px; margin-bottom: 0;">LP</div>
                            <div>
                                <h4 style="margin-bottom: 0; font-size: 15px; color: var(--navy);">[Parent Name]</h4>
                                <div style="font-size: 12px; color: var(--text-muted);">Parent of a Grade 9 boarder</div>
                            </div>
                        </div>
                        <p style="font-size: 14px; font-style: italic; color: var(--text-body); flex-grow: 1;">"Sending my daughter away to boarding school was tough, but seeing the spiritual growth and the respectful independence she has developed over just one year has made it the best investment we could have ever made."</p>
                        <div style="font-size: 10px; color: var(--danger); text-align: right;">[Testimonial placeholder]</div>
                    </div>
                </div>
            </div>
        </section>
  `;
}
