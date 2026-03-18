export const title = 'Academics | East Visayan Adventist Academy';
export const description = 'Explore our DepEd-recognized Junior and Senior High School curriculum, integrating Seventh-day Adventist faith and values.';

export function content() {
  return `
        <!-- Section 1: Page Hero -->
        <section class="hero-inner">
            <div class="breadcrumb"><a href="/" data-link>Home</a> &gt; Academics</div>
            <h1>Academic Excellence in a Christ-Centered Framework</h1>
            <p class="hero-subtext" style="color: rgba(255,255,255,0.8); margin-bottom: 0;">DepEd-Recognized · SDA Educational Philosophy · Grades 7–12</p>
            <div style="width: 48px; height: 3px; background-color: var(--gold); margin-top: 24px;"></div>
        </section>

        <!-- Section 2: Academic Philosophy -->
        <section class="bg-cream">
            <div class="container grid grid-2 align-items-center gap-40">
                <div>
                    <div class="section-label">Our Philosophy</div>
                    <h2 class="section-title">Integrating Faith and Learning</h2>
                    <div class="title-rule left"></div>
                    <p>At EVAA, the pursuit of academic excellence and the development of Christian character are inextricably linked. Our curriculum is fully compliant with the core requirements mandated by the Department of Education (DepEd), ensuring our students meet national standards in all subject areas. However, we go further by viewing every academic discipline through the lens of our Adventist faith.</p>
                    <p>Whether in Science, discovering the intricate design of the Creator, or in History, tracing the providential hand of God through the ages, every class is an opportunity to deepen spiritual understanding. Utilizing both English and Filipino as languages of instruction, we foster critical thinking, effective communication, and a sincere readiness to serve the community, preparing students not just for college, but for life\'s broader calling.</p>
                </div>
                <div>
                    <div class="pull-quote">
                        "At EVAA, education is not simply about acquiring knowledge — it is about forming character, deepening faith, and equipping students to serve God and humanity."
                    </div>
                </div>
            </div>
        </section>

        <!-- Section 3: Grade Level Programs -->
        <section class="bg-white">
            <div class="container">
                <div class="section-label text-center">Programs</div>
                <h2 class="section-title text-center">Our Curriculum</h2>
                <div class="title-rule"></div>

                <div class="mt-32">
                    <div style="background: var(--navy); color: white; padding: 40px; border-radius: 12px; margin-bottom: 40px; position: relative; overflow: hidden;">
                        <h3 style="color: var(--gold); font-size: 24px; margin-bottom: 16px;">Junior High School (Grades 7–10)</h3>
                        <p style="color: rgba(255,255,255,0.8); max-width: 800px; margin-bottom: 24px;">Our Junior High School program establishes a rigorous academic foundation while integrating character formation directly into the daily schedule. Designed around the national curriculum, students delve into core subjects while preparing mentally and spiritually for the demands of senior high school.</p>
                        
                        <div class="grid grid-2 gap-24">
                            <div>
                                <h4 style="color: white; margin-bottom: 16px;">Core Subjects</h4>
                                <ul style="list-style-type: square; padding-left: 20px; color: rgba(255,255,255,0.8); line-height: 1.8;">
                                    <li>English & Filipino</li>
                                    <li>Mathematics & Science</li>
                                    <li>Araling Panlipunan (Social Studies)</li>
                                    <li>Edukasyon sa Pagpapakatao (EsP)</li>
                                    <li>Technology and Livelihood Education (TLE)</li>
                                    <li>MAPEH (Music, Arts, PE, Health)</li>
                                    <li><strong style="color: var(--gold);">Christian Living / Bible</strong></li>
                                </ul>
                                <p style="font-size: 13px; color: var(--gold); margin-top: 16px; font-style: italic;">Note: Adventist education weaves spiritual development and practical life skills throughout all grade levels.</p>
                            </div>
                            <div class="card" style="background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); box-shadow: none;">
                                <h4 style="color: white; margin-bottom: 16px;">What to Expect in JHS</h4>
                                <ul style="list-style-type: none; padding: 0; color: white;">
                                    <li style="margin-bottom: 12px;">✓ <strong>Academic Rigor:</strong> Mastering foundational concepts in preparation for specialized studies.</li>
                                    <li style="margin-bottom: 12px;">✓ <strong>Worship Integration:</strong> Daily devotionals that set a spiritual tone for learning.</li>
                                    <li style="margin-bottom: 12px;">✓ <strong>Boarding Routine:</strong> Structure that fosters discipline and time management.</li>
                                    <li>✓ <strong>Community:</strong> Building lifelong friendships within a supportive cohort.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div style="background: var(--gold-pale); padding: 40px; border-radius: 12px;">
                        <h3 style="color: var(--navy); font-size: 24px; margin-bottom: 16px;">Senior High School (Grades 11–12)</h3>
                        <p style="color: var(--text-body); max-width: 800px; margin-bottom: 24px;">Our Senior High School seamlessly bridges the gap between high school and higher education or career entry. With a curriculum aimed at cultivating independence and advanced critical thinking, students take on increased responsibility while continuing to deepen their spiritual roots as young adults.</p>
                        
                        <h4 style="color: var(--navy); margin-bottom: 16px;">Available Learning Strands</h4>
                        <div class="grid grid-4 gap-16 mb-24">
                            <div class="card text-center" style="padding: 16px; border: 1px solid var(--gold);">
                                <h5 style="margin-bottom: 8px;">STEM</h5>
                                <div style="font-size: 12px; color: var(--text-muted);">Science, Technology, Engineering, Math</div>
                                <div style="font-size: 10px; color: var(--danger); margin-top: 8px;">[Confirm availability]</div>
                            </div>
                            <div class="card text-center" style="padding: 16px; border: 1px solid var(--gold);">
                                <h5 style="margin-bottom: 8px;">HUMSS</h5>
                                <div style="font-size: 12px; color: var(--text-muted);">Humanities & Social Sciences</div>
                                <div style="font-size: 10px; color: var(--danger); margin-top: 8px;">[Confirm availability]</div>
                            </div>
                            <div class="card text-center" style="padding: 16px; border: 1px solid var(--gold);">
                                <h5 style="margin-bottom: 8px;">ABM</h5>
                                <div style="font-size: 12px; color: var(--text-muted);">Accountancy, Business, Management</div>
                                <div style="font-size: 10px; color: var(--danger); margin-top: 8px;">[Confirm availability]</div>
                            </div>
                            <div class="card text-center" style="padding: 16px; border: 1px solid var(--gold);">
                                <h5 style="margin-bottom: 8px;">TVL</h5>
                                <div style="font-size: 12px; color: var(--text-muted);">Technical-Vocational Livelihood</div>
                                <div style="font-size: 10px; color: var(--danger); margin-top: 8px;">[Confirm availability]</div>
                            </div>
                        </div>

                        <h4 style="color: var(--navy); margin-bottom: 8px;">Core Applied Subjects Across All Tracks:</h4>
                        <p style="font-size: 14px; color: var(--text-body);">Personal Development, Understanding Culture Society and Politics, Earth and Life Science, Physical Education & Health, and <strong>Bible/Religion</strong>.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section 4: Adventist Education Distinctives -->
        <section class="bg-navy">
            <div class="container text-center">
                <div class="section-label text-center">Our Approach</div>
                <h2 class="section-title text-white">Adventist Education Distinctives</h2>
                <div class="title-rule"></div>

                <div class="grid grid-3 mt-32 text-left gap-40">
                    <div>
                        <svg viewBox="0 0 24 24" style="width: 32px; height: 32px; fill: var(--gold); margin-bottom: 16px;"><path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2.12-1.15V17h2V8.92L12 3zm6.8 6L12 12.72 5.2 9 12 5.28 18.8 9z"/></svg>
                        <h3 class="text-white">Faith-Learning Integration</h3>
                        <p style="color: rgba(255,255,255,0.7); font-size: 14px;">Every academic subject is analyzed through a biblical worldview. Teachers intentionally connect secular curriculum concepts with immutable spiritual truths, making faith deeply relevant to daily learning.</p>
                    </div>
                    <div>
                        <svg viewBox="0 0 24 24" style="width: 32px; height: 32px; fill: var(--gold); margin-bottom: 16px;"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                        <h3 class="text-white">Character Formation</h3>
                        <p style="color: rgba(255,255,255,0.7); font-size: 14px;">Beyond producing smart students, we aim to produce good people. Integrity, respect, compassion, and moral courage are prioritized alongside grades and academic performance metrics.</p>
                    </div>
                    <div>
                        <svg viewBox="0 0 24 24" style="width: 32px; height: 32px; fill: var(--gold); margin-bottom: 16px;"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 14.53 7.77 18l1.3-5.26-4.07-3.32 5.41-.33L12 4l1.59 5.09 5.41.33-4.07 3.32 1.3 5.26z"/></svg>
                        <h3 class="text-white">Health & Wholeness</h3>
                        <p style="color: rgba(255,255,255,0.7); font-size: 14px;">Our campus promotes a lifestyle of physical and mental wellness. We provide nutritious, wholesome vegetarian meals and emphasize temperance, rest, and outdoor exercise as vital to a clear mind.</p>
                    </div>
                    <div>
                        <svg viewBox="0 0 24 24" style="width: 32px; height: 32px; fill: var(--gold); margin-bottom: 16px;"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
                        <h3 class="text-white">Service & Outreach</h3>
                        <p style="color: rgba(255,255,255,0.7); font-size: 14px;">We train students that privilege demands responsibility. Regular community outreach, relief efforts, and mission projects help students realize the joy found in lifting up those in need.</p>
                    </div>
                    <div>
                        <svg viewBox="0 0 24 24" style="width: 32px; height: 32px; fill: var(--gold); margin-bottom: 16px;"><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.1L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/></svg>
                        <h3 class="text-white">Practical Life Skills</h3>
                        <p style="color: rgba(255,255,255,0.7); font-size: 14px;">Known as \'Work Education\', we believe manual labor builds character. Students participate in campus upkeep, gardening, and technical skills that promote dignity in labor and self-reliance.</p>
                    </div>
                    <div>
                        <svg viewBox="0 0 24 24" style="width: 32px; height: 32px; fill: var(--gold); margin-bottom: 16px;"><path d="M21 10h-8V2h8v8zm-2-6h-4v4h4V4zm-9 6H2V2h8v8zm-2-6H4v4h4V4zm13 14h-8v-8h8v8zm-2-6h-4v4h4v-4zm-9 6H2v-8h8v8zm-2-6H4v4h4v-4z"/></svg> <!-- Placeholder for calendar/worship -->
                        <h3 class="text-white">Worship as Daily Life</h3>
                        <p style="color: rgba(255,255,255,0.7); font-size: 14px;">Worship is not confined to the weekend. Morning devotionals, dorm worships, and the highlight of observing the Sabbath transform the weekly routine into an ongoing spiritual journey.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section 5: Academic Calendar -->
        <section class="bg-white">
            <div class="container">
                <div class="grid" style="grid-template-columns: 1fr 1fr; gap: 40px; align-items: center;">
                    <div>
                        <div class="section-label">Important Dates</div>
                        <h2 class="section-title">Academic Calendar Preview</h2>
                        <div class="title-rule left"></div>
                        <p>Our academic calendar is thoughtfully structured to balance intense instructional periods with necessary breaks, spiritual emphasis weeks, and community-building events. It precisely aligns with the Department of Education\'s regional calendar for Eastern Visayas.</p>
                        <p style="font-size: 13px; color: var(--gold); font-style: italic;">* Exact dates are subject to the official DepEd Regional Calendar. Please continually check with the Registrar for the most current schedule specific to the academic year.</p>
                    </div>
                    <div>
                        <table class="styled-table" style="font-size: 14px;">
                            <thead>
                                <tr>
                                    <th>Period</th>
                                    <th>Key Activity / Milestone</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>March – June</strong></td>
                                    <td>Enrollment & Registration Period</td>
                                </tr>
                                <tr>
                                    <td><strong>July – Sept</strong></td>
                                    <td>First Quarter Classes begin</td>
                                </tr>
                                <tr>
                                    <td><strong>Oct – Nov</strong></td>
                                    <td>Second Quarter / Midterm Exams</td>
                                </tr>
                                <tr>
                                    <td><strong>December</strong></td>
                                    <td>Christmas Break</td>
                                </tr>
                                <tr>
                                    <td><strong>Jan – Feb</strong></td>
                                    <td>Third Quarter Resumes</td>
                                </tr>
                                <tr>
                                    <td><strong>March – April</strong></td>
                                    <td>Fourth Quarter / Final Examinations</td>
                                </tr>
                                <tr>
                                    <td><strong>May</strong></td>
                                    <td>Recognition Day & Graduation Exercises</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section 6: Co-Curricular & Organizations -->
        <section class="bg-cream">
            <div class="container">
                <div class="section-label text-center">Beyond the Classroom</div>
                <h2 class="section-title text-center">Student Organizations</h2>
                <div class="title-rule"></div>

                <div class="grid grid-3 mt-32">
                    <div class="card text-center">
                        <div class="icon-circle mx-auto"><svg viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg></div>
                        <h3 style="font-size: 16px;">Supreme Student Government (SSG)</h3>
                        <p style="font-size: 14px; margin-bottom: 0;">Fostering leadership, civic responsibility, and student representation, the SSG acts as the primary voice of the student body and leads campus-wide initiatives.</p>
                    </div>
                    <div class="card text-center">
                        <div class="icon-circle mx-auto"><svg viewBox="0 0 24 24"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg></div>
                        <h3 style="font-size: 16px;">School Band</h3>
                        <p style="font-size: 14px; margin-bottom: 0;">Developing musical talents to praise God and perform at school ceremonies. The band instills discipline, teamwork, and a deep appreciation for musical arts.</p>
                    </div>
                    <div class="card text-center">
                        <div class="icon-circle mx-auto"><svg viewBox="0 0 24 24"><path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"/></svg></div>
                        <h3 style="font-size: 16px;">Fancy Drill & Color Guard</h3>
                        <p style="font-size: 14px; margin-bottom: 0;">A hallmark of campus pride, perfecting synchronized movements that demonstrate intense focus, physical coordination, and exceptional school spirit.</p>
                    </div>
                    <div class="card text-center">
                        <div class="icon-circle mx-auto"><svg viewBox="0 0 24 24"><path d="M12 2L2 22h20L12 2zm0 3.82L18.18 20H5.82L12 5.82z"/></svg></div>
                        <h3 style="font-size: 16px;">Pathfinder Club</h3>
                        <p style="font-size: 14px; margin-bottom: 0;">An international SDA youth ministry providing outdoor survival training, nature appreciation, and robust character-building through a structured curriculum.</p>
                    </div>
                    <div class="card text-center">
                        <div class="icon-circle mx-auto"><svg viewBox="0 0 24 24"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/></svg></div>
                        <h3 style="font-size: 16px;">Student Ministerial Association</h3>
                        <p style="font-size: 14px; margin-bottom: 0;">For students interested in pastoral care, providing hands-on experience in preaching, organizing chapel services, and leading community Bible studies.</p>
                    </div>
                    <div class="card text-center">
                        <div class="icon-circle mx-auto"><svg viewBox="0 0 24 24"><path d="M9.17 6l2 2H20v10H4V6h5.17M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/></svg></div>
                        <h3 style="font-size: 16px;">Science & Math Clubs</h3>
                        <p style="font-size: 14px; margin-bottom: 0;">Encouraging analytical minds to explore complex problems, participate in regional Olympiads, and discover the mathematical order of God\'s universe.</p>
                    </div>
                </div>
            </div>
        </section>
  `;
}
