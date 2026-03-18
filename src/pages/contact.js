export const title = 'Contact Us | East Visayan Adventist Academy';
export const description = 'Reach out to EVAA. Get our contact information, mailing address, directions to Academy Heights, and send us a message.';

export function content() {
  return `
        <!-- Section 1: Page Hero (Slim) -->
        <section class="hero-inner" style="padding: 60px 0;">
            <div class="breadcrumb"><a href="/" data-link>Home</a> &gt; Contact Us</div>
            <h1 style="color: var(--gold); margin-bottom: 0;">Get in Touch</h1>
        </section>

        <!-- Section 2: Contact Info & Map -->
        <section class="bg-white" style="padding-top: 64px;">
            <div class="container grid grid-2 gap-40 align-items-center">
                <div>
                    <h2 class="section-title">We\'d love to hear from you.</h2>
                    <p style="color: var(--text-body); margin-bottom: 32px;">Whether you have questions about admissions, want to schedule a campus tour, or need to reach a specific office, please don\'t hesitate to reach out.</p>
                    
                    <div style="display: flex; gap: 16px; margin-bottom: 24px;">
                        <div class="icon-circle" style="width: 48px; height: 48px; background: var(--gold-pale); flex-shrink: 0;"><span style="font-size: 20px;">📍</span></div>
                        <div>
                            <h4 style="margin-bottom: 4px; color: var(--navy);">Campus Location</h4>
                            <p style="font-size: 14px; margin-bottom: 0; color: var(--text-body);">Academy Heights, Brgy. San Sotero<br>Javier, Leyte 6511, Philippines</p>
                        </div>
                    </div>
                    
                    <div style="display: flex; gap: 16px; margin-bottom: 24px;">
                        <div class="icon-circle" style="width: 48px; height: 48px; background: var(--gold-pale); flex-shrink: 0;"><span style="font-size: 20px;">✉</span></div>
                        <div>
                            <h4 style="margin-bottom: 4px; color: var(--navy);">Mailing Address</h4>
                            <p style="font-size: 14px; margin-bottom: 0; color: var(--text-body);">P.O. Box 241<br>6500 Tacloban City, Philippines</p>
                        </div>
                    </div>

                    <div style="display: flex; gap: 16px; margin-bottom: 24px;">
                        <div class="icon-circle" style="width: 48px; height: 48px; background: var(--gold-pale); flex-shrink: 0;"><span style="font-size: 20px;">📞</span></div>
                        <div>
                            <h4 style="margin-bottom: 4px; color: var(--navy);">Call Us</h4>
                            <p style="font-size: 14px; margin-bottom: 0; color: var(--text-body);">+63 935 835 7254<span style="font-size: 12px; opacity: 0.7; display: block;">(Office hours: Mon-Thu 8AM-5PM, Fri 8AM-12PM)</span></p>
                        </div>
                    </div>

                    <div style="display: flex; gap: 16px;">
                        <div class="icon-circle" style="width: 48px; height: 48px; background: var(--gold-pale); flex-shrink: 0;"><span style="font-size: 20px;">🌐</span></div>
                        <div>
                            <h4 style="margin-bottom: 4px; color: var(--navy);">Email & Social</h4>
                            <p style="font-size: 14px; margin-bottom: 4px; color: var(--text-body);">info@evaa.edu.ph</p>
                            <a href="https://facebook.com/eastvisayanadventistacademyofleyte" target="_blank" style="font-size: 14px; color: var(--gold); font-weight: 500;">Official Facebook Page ↗</a>
                        </div>
                    </div>
                </div>
                <div>
                    <!-- Styled CSS Map Placeholder -->
                    <div style="background: var(--cream); border: 1px solid var(--border); border-radius: 12px; height: 450px; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 24px;">
                        <svg viewBox="0 0 24 24" style="width: 48px; height: 48px; fill: var(--active); margin-bottom: 16px;"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                        <h3 style="color: var(--navy); margin-bottom: 8px;">Academy Heights</h3>
                        <p style="font-size: 14px; color: var(--text-muted); max-width: 250px;">[Interactive Google Map Embed will be placed here.]</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section 3: Contact Form -->
        <section class="bg-cream">
            <div class="container text-center">
                <div class="section-label">Send a Message</div>
                <h2 class="section-title">Online Inquiry Form</h2>
                <div class="title-rule"></div>
                
                <p style="margin: 24px auto 40px; max-width: 600px; color: var(--text-body);">Kindly fill out the form below. For student admissions, please use the detailed application form on our <a href="/admissions" data-link style="color: var(--gold);">Admissions page</a>.</p>

                <div style="background: white; padding: 40px; border-radius: 12px; max-width: 700px; margin: 0 auto; box-shadow: var(--shadow-hover); text-align: left; border-top: 4px solid var(--gold);">
                    <form action="#" method="POST">
                        <div class="grid grid-2 gap-24">
                            <div class="form-group">
                                <label class="form-label" for="contactName">Name*</label>
                                <input type="text" id="contactName" class="form-control" required>
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="contactEmail">Email Address*</label>
                                <input type="email" id="contactEmail" class="form-control" required>
                            </div>
                        </div>

                        <div class="grid grid-2 gap-24">
                            <div class="form-group">
                                <label class="form-label" for="contactNumber">Phone Number</label>
                                <input type="tel" id="contactNumber" class="form-control">
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="contactSubject">Subject*</label>
                                <select id="contactSubject" class="form-control" required>
                                    <option value="" disabled selected>Select a subject</option>
                                    <option value="General Inquiry">General Inquiry</option>
                                    <option value="Registrar/Records">Registrar / Student Records</option>
                                    <option value="Treasury/Billing">Treasury / Billing</option>
                                    <option value="Principal/Office">Principal\'s Office</option>
                                    <option value="Alumni Affairs">Alumni Affairs</option>
                                </select>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="form-label" for="contactMessage">Message*</label>
                            <textarea id="contactMessage" class="form-control" rows="5" required placeholder="How can we help you today?"></textarea>
                        </div>

                        <button type="submit" class="btn-primary w-100" style="padding: 16px; font-size: 16px;">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
  `;
}
