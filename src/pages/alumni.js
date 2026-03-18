export const title = 'Alumni | East Visayan Adventist Academy';
export const description = 'Once a Guardian, Always a Guardian. Connect with fellow alumni, share your story, and support the EVAA community.';

export function content() {
  return `
        <!-- Section 1: Page Hero -->
        <section class="hero-inner" style="background: linear-gradient(135deg, var(--navy) 0%, rgba(30,61,114,1) 100%);">
            <div class="breadcrumb"><a href="/" data-link>Home</a> &gt; Alumni</div>
            <h1 style="color: var(--gold);">Once a Guardian, Always a Guardian</h1>
            <p class="hero-subtext" style="color: rgba(255,255,255,0.9); margin-bottom: 24px;">To all EVAA alumni — your story is part of EVAA\'s story. Welcome home.</p>
            <div class="btn-group justify-content-center">
                <a href="#alumni-form" class="btn-primary">Update Your Profile</a>
            </div>
        </section>

        <!-- Section 2: Alumni Identity -->
        <section class="bg-white text-center">
            <div class="container" style="max-width: 900px;">
                <h2 class="section-title">The "Guardian of Truth" Legacy</h2>
                <div class="title-rule"></div>
                
                <p style="font-size: 18px; line-height: 1.8; color: var(--text-body);">
                    To graduate from East Visayan Adventist Academy is to carry the permanent identity of a "Guardian of Truth." This noble title does not end when you walk out of the campus gates in Javier; rather, it is exactly when it begins. It is an identity that follows you into university halls, hospital wards, corporate boardrooms, and mission fields.
                </p>
                <p style="font-size: 16px; line-height: 1.8; color: var(--text-muted);">
                    Our alumni are scattered across Eastern Visayas, the Philippines, and the globe. They serve brilliantly as dedicated teachers, compassionate medical professionals, astute business leaders, and faithful ministers of the gospel. No matter the profession, the underlying mandate remains the same: to stand as principled beacons of integrity and Christ-like service wherever they are planted.
                </p>
                <p style="font-size: 16px; line-height: 1.8; color: var(--text-muted);">
                    What binds us all together is the shared crucible of boarding school. We remember the early morning worships, the rush to the cafeteria, the rigorous exams, and the serene Sabbaths on Academy Heights. These shared experiences form a bond that distance and time cannot easily break.
                </p>
            </div>
        </section>

        <!-- Section 3: Alumni Stories -->
        <section class="bg-cream">
            <div class="container text-center">
                <div class="section-label">Where Are They Now?</div>
                <h2 class="section-title">Featured Alumni Stories</h2>
                <div class="title-rule"></div>

                <div class="grid grid-3 mt-32 text-left">
                    <div class="card" style="position: relative;">
                        <span style="position: absolute; top: 10px; right: 10px; background: var(--danger); color: white; padding: 2px 8px; font-size: 10px; border-radius: 4px;">Placeholder</span>
                        <div style="display: flex; gap: 16px; align-items: center; margin-bottom: 20px;">
                            <div class="avatar-circle" style="background: var(--gold-pale); color: var(--navy); margin-bottom: 0;">EJ</div>
                            <div>
                                <h3 style="margin-bottom: 4px; font-size: 18px;">[Alumni Name]</h3>
                                <div style="font-size: 12px; font-weight: 600; color: var(--gold); text-transform: uppercase;">Class of [Year]</div>
                                <div style="font-size: 12px; color: var(--text-muted);">Registered Nurse, Tacloban City</div>
                            </div>
                        </div>
                        <p style="font-size: 14px; font-style: italic; color: var(--text-body);">"The discipline I learned in the EVAA dorms directly transferred into the demanding schedule of nursing school. My instructors at EVAA didn\'t just teach me science; they taught me that healing is a spiritual ministry. I carry that into every hospital shift."</p>
                    </div>

                    <div class="card" style="position: relative;">
                        <span style="position: absolute; top: 10px; right: 10px; background: var(--danger); color: white; padding: 2px 8px; font-size: 10px; border-radius: 4px;">Placeholder</span>
                        <div style="display: flex; gap: 16px; align-items: center; margin-bottom: 20px;">
                            <div class="avatar-circle" style="background: var(--gold-pale); color: var(--navy); margin-bottom: 0;">MP</div>
                            <div>
                                <h3 style="margin-bottom: 4px; font-size: 18px;">[Alumni Name]</h3>
                                <div style="font-size: 12px; font-weight: 600; color: var(--gold); text-transform: uppercase;">Class of [Year]</div>
                                <div style="font-size: 12px; color: var(--text-muted);">Software Engineer, Cebu</div>
                            </div>
                        </div>
                        <p style="font-size: 14px; font-style: italic; color: var(--text-body);">"The solid foundation in math and logic that I received at the Academy prepared me for the tech industry. But more importantly, EVAA gave me the moral compass necessary to navigate the ethical challenges in modern technology."</p>
                    </div>

                    <div class="card" style="position: relative;">
                        <span style="position: absolute; top: 10px; right: 10px; background: var(--danger); color: white; padding: 2px 8px; font-size: 10px; border-radius: 4px;">Placeholder</span>
                        <div style="display: flex; gap: 16px; align-items: center; margin-bottom: 20px;">
                            <div class="avatar-circle" style="background: var(--gold-pale); color: var(--navy); margin-bottom: 0;">RA</div>
                            <div>
                                <h3 style="margin-bottom: 4px; font-size: 18px;">[Alumni Name]</h3>
                                <div style="font-size: 12px; font-weight: 600; color: var(--gold); text-transform: uppercase;">Class of [Year]</div>
                                <div style="font-size: 12px; color: var(--text-muted);">District Pastor, EVC</div>
                            </div>
                        </div>
                        <p style="font-size: 14px; font-style: italic; color: var(--text-body);">"My calling to the ministry was crystallized during a Week of Prayer at EVAA. The Student Ministerial Association gave me my first experience organizing outreach. The Academy didn\'t just educate me; it ignited my life\'s purpose."</p>
                    </div>
                </div>

                <div class="mt-32">
                    <p style="font-size: 18px; color: var(--navy); font-weight: 500;">Are you an EVAA alumnus? Your journey inspires current students.</p>
                    <a href="#alumni-form" class="btn-primary" style="margin-top: 12px;">Share Your Story With Us</a>
                </div>
            </div>
        </section>

        <!-- Section 4: Ways to Give Back -->
        <section class="bg-navy" style="color: white;">
            <div class="container text-center">
                <div class="section-label text-center" style="color: var(--gold-pale);">Supporting EVAA</div>
                <h2 class="section-title text-white">Ways to Give Back</h2>
                <div class="title-rule"></div>

                <div class="grid grid-3 mt-32 text-left gap-40">
                    <div>
                        <svg viewBox="0 0 24 24" style="width: 40px; height: 40px; fill: var(--gold); margin-bottom: 16px;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                        <h3 class="text-white">Share Your Story</h3>
                        <p style="color: rgba(255,255,255,0.7); font-size: 14px;">Inspire the next generation. Submit your alumni profile, career updates, and photos for feature in our website and newsletter. Your success motivates current students.</p>
                    </div>
                    <div>
                        <svg viewBox="0 0 24 24" style="width: 40px; height: 40px; fill: var(--gold); margin-bottom: 16px;"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg>
                        <h3 class="text-white">Support a Student</h3>
                        <p style="color: rgba(255,255,255,0.7); font-size: 14px;">Financial barriers should never stop a willing student. Inquire with administration about actively contributing to the scholarship fund or sponsoring a specific student’s tuition or boarding fees.</p>
                    </div>
                    <div>
                        <svg viewBox="0 0 24 24" style="width: 40px; height: 40px; fill: var(--gold); margin-bottom: 16px;"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
                        <h3 class="text-white">Visit the Campus</h3>
                        <p style="color: rgba(255,255,255,0.7); font-size: 14px;">Come back, reconnect, and see how the school has grown. Alumni presence at school events, Week of Prayer, or as career-day speakers provides vital mentorship to our student body.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section 5: Alumni Updates / News -->
        <section class="bg-white">
            <div class="container text-center">
                <div class="section-label">Alumni in Action</div>
                <h2 class="section-title">Latest Updates</h2>
                <div class="title-rule"></div>

                <div class="grid grid-3 mt-32 text-left">
                    <div class="news-card">
                        <div class="news-meta">
                            <span class="tag tag-gold">Alumni News</span>
                        </div>
                        <h3 style="font-size: 16px;">EVAA Alumni Association Medical Mission</h3>
                        <p style="font-size: 13px; color: var(--text-body); margin-bottom: 8px;">Several alumni who are now licensed doctors and nurses coordinated a highly successful free medical clinic in Javier, embodying the school’s core value of selfless service.</p>
                        <a href="#" class="news-link">Read full story →</a>
                    </div>
                    <div class="news-card">
                        <div class="news-meta">
                            <span class="tag tag-gold">Alumni News</span>
                        </div>
                        <h3 style="font-size: 16px;">Fundraising Gala Raises Funds for Dorm Renovation</h3>
                        <p style="font-size: 13px; color: var(--text-body); margin-bottom: 8px;">Generous alumni across different batches recently pulled together to completely fund the urgent renovation of the boys\' dormitory study hall, ensuring a better environment for boarders.</p>
                        <a href="#" class="news-link">Read full story →</a>
                    </div>
                    <div class="news-card">
                        <div class="news-meta">
                            <span class="tag tag-gold">Alumni News</span>
                        </div>
                        <h3 style="font-size: 16px;">Class of 2012 Hosts 10-Year Grand Reunion</h3>
                        <p style="font-size: 13px; color: var(--text-body); margin-bottom: 8px;">The pioneer batch of the new curriculum returned to campus for an emotional gathering, reminiscing about the old campus structures and worshiping together at the campus church.</p>
                        <a href="#" class="news-link">Read full story →</a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section 6: Alumni Contact Form -->
        <section id="alumni-form" class="bg-cream" style="padding: 100px 0;">
            <div class="container">
                <div style="background: white; border-radius: 12px; padding: 40px; max-width: 640px; margin: 0 auto; box-shadow: var(--shadow-card); border-top: 4px solid var(--navy);">
                    <div class="text-center" style="margin-bottom: 32px;">
                        <h2 class="section-title" style="margin-bottom: 8px;">Alumni Registration</h2>
                        <p style="color: var(--text-muted); font-size: 14px;">Connect with EVAA. We want to know where you are and how you\'re doing.</p>
                    </div>

                    <form action="#" method="POST">
                        <div class="form-success">Thank you! Your information has been successfully updated in our alumni database.</div>

                        <div class="form-group">
                            <label class="form-label" for="alumName">Full Name* (Include maiden name if applicable)</label>
                            <input type="text" id="alumName" class="form-control" required>
                            <div class="form-error-msg">Name is required.</div>
                        </div>

                        <div class="grid grid-2 gap-24">
                            <div class="form-group">
                                <label class="form-label" for="alumYear">Year of Graduation*</label>
                                <input type="number" id="alumYear" class="form-control" min="1992" max="2025" placeholder="e.g., 2015" required>
                                <div class="form-error-msg">Please enter a valid year.</div>
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="alumPhone">Contact Number</label>
                                <input type="tel" id="alumPhone" class="form-control">
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="form-label" for="alumEmail">Email Address*</label>
                            <input type="email" id="alumEmail" class="form-control" required>
                            <div class="form-error-msg">Valid email is required.</div>
                        </div>

                        <div class="form-group">
                            <label class="form-label" for="alumLocation">Current Location (City / Province / Country)</label>
                            <input type="text" id="alumLocation" class="form-control" placeholder="e.g., Cebu City, Philippines">
                        </div>

                        <div class="form-group">
                            <label class="form-label" for="alumProfession">Current Profession / Occupation</label>
                            <input type="text" id="alumProfession" class="form-control" placeholder="e.g., Registered Nurse, Software Engineer">
                        </div>

                        <div class="form-group">
                            <label class="form-label" for="alumMessage">Brief message or personal update</label>
                            <textarea id="alumMessage" class="form-control" rows="4" placeholder="Tell us about your career, family, ministry, or fondest EVAA memory..."></textarea>
                        </div>

                        <div class="form-group">
                            <label class="form-label">Would you be interested in being featured in the Alumni section?</label>
                            <div style="display: flex; gap: 16px; margin-top: 8px;">
                                <label style="font-size: 14px; cursor: pointer;"><input type="radio" name="feature" value="Yes"> Yes, feature my story</label>
                                <label style="font-size: 14px; cursor: pointer;"><input type="radio" name="feature" value="No"> No, keep private</label>
                            </div>
                        </div>

                        <button type="submit" class="btn-primary w-100" style="padding: 16px; font-size: 16px;">Submit Alumni Update</button>
                    </form>
                </div>
            </div>
        </section>
  `;
}
