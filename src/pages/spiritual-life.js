export const title = 'Spiritual Life | East Visayan Adventist Academy';
export const description = 'At EVAA, spiritual growth is not a subject — it is a way of life. Learn about our daily worship, Sabbath rhythms, and faith integration.';

export function content() {
  return `
        <!-- Section 1: Page Hero -->
        <section class="hero-inner" style="background: linear-gradient(135deg, var(--navy-mid) 0%, var(--navy) 100%);">
            <div class="breadcrumb"><a href="/" data-link>Home</a> &gt; Spiritual Life</div>
            <h1 style="color: var(--gold);">Faith at the Heart of Everything</h1>
            <p class="hero-subtext" style="color: rgba(255,255,255,0.9); margin-bottom: 0;">At EVAA, spiritual growth is not a subject — it is a way of life.</p>
            <div style="width: 48px; height: 3px; background-color: var(--white); margin-top: 24px;"></div>
        </section>

        <!-- Section 2: Adventist Faith Foundation -->
        <section class="bg-white">
            <div class="container grid grid-2 gap-40 align-items-center">
                <div>
                    <div class="section-label">Our Foundation</div>
                    <h2 class="section-title">Rooted in Scripture</h2>
                    <div class="title-rule left"></div>
                    <p>East Visayan Adventist Academy is firmly anchored in the historic beliefs of the Seventh-day Adventist Church. We recognize the God of the Bible as the loving Creator and Sustainer of the universe. Our core philosophy asserts that true education is a redemptive process, aimed at restoring the image of God in every student. Therefore, Scripture is elevated as our absolute foundation for all learning and living.</p>
                    <p>We are unashamedly committed to holistic personal development. We believe your physical health, your intellect, and your spiritual vigor are deeply interconnected. Consequently, a vital part of our campus rhythm is the faithful observance of the seventh-day Sabbath—a weekly sanctuary from academic pressure that allows our school community to reconnect with God, nature, and one another.</p>
                </div>
                <div>
                    <div class="image-placeholder" style="border-radius: 12px; min-height: 350px;">
                        <span>[Photo: Student reading Bible under a tree]</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section 3: Spiritual Programs Grid -->
        <section class="bg-cream">
            <div class="container text-center">
                <div class="section-label">Campus Programs</div>
                <h2 class="section-title">Nurturing the Spiritual Journey</h2>
                <div class="title-rule"></div>

                <div class="grid grid-3 mt-32 text-left">
                    <div class="card">
                        <h3 style="color: var(--navy); margin-bottom: 12px;">Morning Devotion</h3>
                        <p style="font-size: 14px; margin-bottom: 0;">Each school day at EVAA begins not with textbooks, but with the Bible. Our daily community morning devotion gathers the entire student body and faculty to sing hymns, pray, and listen to a short, inspiring message to set a positive, God-centered tone for the day\'s challenges.</p>
                    </div>
                    <div class="card">
                        <h3 style="color: var(--navy); margin-bottom: 12px;">Campus Church Services</h3>
                        <p style="font-size: 14px; margin-bottom: 0;">Our on-campus church is the hub of our weekend fellowship. Every Sabbath, the entire school congregates for vibrant Sabbath School classes and a deeply reverent divine worship service, providing students with consistent pastoral guidance and congregational support.</p>
                    </div>
                    <div class="card">
                        <h3 style="color: var(--navy); margin-bottom: 12px;">Week of Prayer</h3>
                        <p style="font-size: 14px; margin-bottom: 0;">Twice a year, the regular academic schedule is adjusted to accommodate our Spiritual Emphasis Week, or "Week of Prayer." Special guest speakers are invited to deliver compelling, youth-oriented sermons, frequently resulting in profound personal renewals and baptisms.</p>
                    </div>
                    <div class="card">
                        <h3 style="color: var(--navy); margin-bottom: 12px;">Bible Classes</h3>
                        <p style="font-size: 14px; margin-bottom: 0;">Religion and Christian Living are not merely optional electives; they form a core academic subject for every grade level each year. Through these classes, students learn theological history, practical Christian ethics, and how to rigorously study and apply Scripture for themselves.</p>
                    </div>
                    <div class="card">
                        <h3 style="color: var(--navy); margin-bottom: 12px;">Community Service & Outreach</h3>
                        <p style="font-size: 14px; margin-bottom: 0;">Faith without works is dead. EVAA regularly coordinates local mission trips, community feeding programs, and student-led evangelistic crusades. These practical outreach activities teach students empathy and the gospel mandate to serve the marginalized.</p>
                    </div>
                    <div class="card">
                        <h3 style="color: var(--navy); margin-bottom: 12px;">Pathfinder Ministry</h3>
                        <p style="font-size: 14px; margin-bottom: 0;">The Pathfinder Club acts as the scouting extension of the Adventist Church. It offers students unique opportunities for rigorous character development through nature exploration, knot-tying, camping, community service honors, and drill proficiency.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section 4: Sabbath at EVAA -->
        <section class="bg-navy">
            <div class="container text-center">
                <div class="section-label" style="color: var(--white); opacity: 0.8;">The Weekly Climax</div>
                <h2 class="section-title" style="color: var(--gold); font-size: 36px; font-family: var(--font-display);">The Sabbath Experience</h2>
                <div class="title-rule" style="background: var(--gold);"></div>
                
                <p style="font-size: 18px; color: var(--white); max-width: 800px; margin: 32px auto; line-height: 1.8;">
                    At East Visayan Adventist Academy, Friday sundown marks a profound shift in the rhythm of life. As the sun sets behind the Leyte hills, laptops close, study halls quiet down, and the entire campus collectively breathes a sigh of relief. This is the Sabbath—a 24-hour sanctuary in time guaranteed to every student.
                </p>
                <p style="font-size: 16px; color: rgba(255,255,255,0.8); max-width: 800px; margin: 0 auto 40px; line-height: 1.8;">
                    Unlike regular public schools where weekends are consumed by homework, tuition centers, or secular entertainment, EVAA guards the Sabbath jealously as a time for spiritual rejuvenation. Friday evening brings moving vesper programs in the crisp evening air. Saturday morning is filled with the spirited singing and deep Bible study of Sabbath School, followed by the main church service. Saturday afternoon involves quiet rest, nature walks around Academy Heights, and joyful fellowship with peers. This unique boarding school rhythm teaches students that our ultimate rest and security are found in God alone.
                </p>
            </div>
        </section>

        <!-- Section 5: Service & Mission -->
        <section class="bg-white">
            <div class="container grid grid-2 gap-40 align-items-center">
                <div>
                    <div class="section-label">Our Calling</div>
                    <h2 class="section-title">Saved to Serve</h2>
                    <div class="title-rule left"></div>
                    <p>The truest measure of a Christian education is not found in academic trophies, but in a towel and a basin. EVAA\'s institutional ethos is heavily oriented toward active, selfless service. We teach our students that they are "saved to serve."</p>
                    <p>Our students are required to participate in structured community service programs, visiting the elderly, facilitating children\'s programs in nearby barangays, and engaging in environmental cleanups. During special mission activities, upperclassmen are given the incredible responsibility of leading out in evangelistic campaigns, learning firsthand how to articulate their faith to the public.</p>
                    <p>These experiences instill a profound sense of purpose. Whether our alumni go on to become nurses, accountants, or engineers, they enter the secular workforce viewing their profession as a sacred ministry.</p>
                </div>
                <div>
                    <div style="background: var(--gold-pale); padding: 32px; border-radius: 12px; border-left: 4px solid var(--gold); margin-bottom: 24px;">
                        <p class="italic-serif" style="color: var(--navy); font-size: 16px; margin-bottom: 12px;">"Before I came to EVAA, faith was just something my parents talked about. Going through the Week of Prayer here and joining the outreach band showed me that God has a specific, active calling for my life. It changed everything."</p>
                        <div style="font-size: 13px; font-weight: 600; color: var(--text-muted); text-transform: uppercase;">— [Student testimonial — to be confirmed]</div>
                    </div>
                    <div style="background: var(--gold-pale); padding: 32px; border-radius: 12px; border-left: 4px solid var(--gold);">
                        <p class="italic-serif" style="color: var(--navy); font-size: 16px; margin-bottom: 12px;">"Leading out in the campus Sabbath School taught me how to speak publicly and how to care for my younger classmates. EVAA gave me the confidence to be a leader in my local church today."</p>
                        <div style="font-size: 13px; font-weight: 600; color: var(--text-muted); text-transform: uppercase;">— [Alumni testimonial — to be confirmed]</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section 6: Faith Integration in Academics -->
        <section class="bg-cream">
            <div class="container text-center">
                <div class="section-label">Curriculum Integration</div>
                <h2 class="section-title">Faith in Every Subject</h2>
                <div class="title-rule"></div>

                <div class="grid grid-4 mt-32 text-left">
                    <div class="card">
                        <div class="icon-circle"><span style="font-size: 24px; font-family: var(--font-display); color: var(--navy); font-weight: 700;">S</span></div>
                        <h4 style="margin-bottom: 8px;">Science & Creation</h4>
                        <p style="font-size: 13px; margin-bottom: 0;">Biology and physics are taught not as random accidents, but as glimpses into the mind of an intelligent, loving Creator.</p>
                    </div>
                    <div class="card">
                        <div class="icon-circle"><span style="font-size: 24px; font-family: var(--font-display); color: var(--navy); font-weight: 700;">H</span></div>
                        <h4 style="margin-bottom: 8px;">History & Providence</h4>
                        <p style="font-size: 13px; margin-bottom: 0;">World events are examined through the lens of the Great Controversy, identifying God’s continuous, sustaining hand throughout human history.</p>
                    </div>
                    <div class="card">
                        <div class="icon-circle"><span style="font-size: 24px; font-family: var(--font-display); color: var(--navy); font-weight: 700;">L</span></div>
                        <h4 style="margin-bottom: 8px;">Literature & Dignity</h4>
                        <p style="font-size: 13px; margin-bottom: 0;">Language arts emphasizes stories that explore the depth of the human condition, promoting empathy, redemption, and inherent human dignity.</p>
                    </div>
                    <div class="card">
                        <div class="icon-circle"><span style="font-size: 24px; font-family: var(--font-display); color: var(--navy); font-weight: 700;">M</span></div>
                        <h4 style="margin-bottom: 8px;">Math & Divine Order</h4>
                        <p style="font-size: 13px; margin-bottom: 0;">Mathematics is presented as undeniable proof of the precise, logical, and orderly nature of the God who patterned the universe.</p>
                    </div>
                </div>
            </div>
        </section>
  `;
}
