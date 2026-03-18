export const title = 'Admissions | East Visayan Adventist Academy';
export const description = 'Join the EVAA family. Information on the application process, requirements, tuition fees, and our online inquiry form.';

export function content() {
  return `
        <!-- Section 1: Page Hero -->
        <section class="hero-inner">
            <div class="breadcrumb"><a href="/" data-link>Home</a> &gt; Admissions</div>
            <h1>Join the EVAA Family</h1>
            <p class="hero-subtext" style="color: rgba(255,255,255,0.8); margin-bottom: 24px;">Christ-centered boarding education for Grades 7–12 · Javier, Leyte</p>
            <div class="btn-group justify-content-center">
                <a href="#inquiry-form" class="btn-primary">Download Application Form</a>
                <a href="/contact" data-link class="btn-outline">Contact the Registrar</a>
            </div>
        </section>

        <!-- Section 2: Why EVAA? -->
        <section class="bg-white">
            <div class="container grid grid-2 gap-40 align-items-center">
                <div>
                    <div class="section-label">Your Next Step</div>
                    <h2 class="section-title">Why Choose EVAA?</h2>
                    <div class="title-rule left"></div>
                    <ul class="feature-list mt-32">
                        <li>
                            <h3>A Structured Boarding Environment</h3>
                            <p style="font-size: 14px; color: var(--text-body);">Living on campus provides a safe, highly supervised atmosphere that accelerates personal maturity. Students build lasting independence away from negative urban influences.</p>
                        </li>
                        <li>
                            <h3>Academic Excellence</h3>
                            <p style="font-size: 14px; color: var(--text-body);">Our curriculum strictly adheres to DepEd and SDA educational standards. We prepare students meticulously for premier universities through a rigorous bilingual program.</p>
                        </li>
                        <li>
                            <h3>Deep Spiritual Formation</h3>
                            <p style="font-size: 14px; color: var(--text-body);">More than just passing grades, we focus on eternal values. Daily worships, Sabbath observances, and dedicated Weeks of Prayer ensure robust character development.</p>
                        </li>
                        <li>
                            <h3>A Close-Knit Community</h3>
                            <p style="font-size: 14px; color: var(--text-body);">Shared meals, dorm living, and group activities naturally forge a brotherhood and sisterhood among students. At EVAA, you\'re not just a number; you\'re part of a community of lifelong friendships.</p>
                        </li>
                        <li>
                            <h3>Accessible Location</h3>
                            <p style="font-size: 14px; color: var(--text-body);">Nestled in Javier, Leyte, EVAA is strategically located. It is rural enough to provide a peaceful retreat, yet highly accessible from Tacloban, Ormoc, and the rest of Eastern Visayas.</p>
                        </li>
                    </ul>
                </div>
                <div>
                    <div class="image-placeholder" style="height: 600px; border-radius: 12px; position: sticky; top: 100px;">
                        <span>[Photo: Happy students in EVAA uniforms smiling at the camera]</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section 3: Who Can Apply -->
        <section class="bg-cream text-center">
            <div class="container">
                <h2 class="section-title">Who Can Apply</h2>
                <div class="title-rule"></div>

                <div class="grid grid-2 mt-32 text-left">
                    <div class="card" style="border-top: 4px solid var(--navy);">
                        <h3 style="color: var(--navy); margin-bottom: 16px;">Junior High School (Grades 7–10)</h3>
                        <p style="font-size: 15px;">We welcome incoming Grade 7 students (elementary graduates) and transferees for Grades 8 through 10 from appropriately accredited schools.</p>
                        <p style="font-size: 14px; color: var(--text-muted); margin-bottom: 0;">Applicants must demonstrate a willingness to adapt to the boarding lifestyle and respect the religious principles of the institution.</p>
                    </div>
                    <div class="card" style="border-top: 4px solid var(--gold);">
                        <h3 style="color: var(--navy); margin-bottom: 16px;">Senior High School (Grades 11–12)</h3>
                        <p style="font-size: 15px;">We welcome JHS completers from EVAA and all other public or private institutions.</p>
                        <p style="font-size: 14px; color: var(--danger); font-weight: 500;">[Please confirm precise SHS track availability with the Registrar before applying.]</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section 4: How to Apply — Step-by-Step -->
        <section class="bg-white">
            <div class="container">
                <div class="section-label text-center">The Process</div>
                <h2 class="section-title text-center">How to Apply</h2>
                <div class="title-rule"></div>

                <div class="step-cards mt-32 mx-auto" style="max-width: 800px;">
                    <div class="step-card">
                        <div class="step-number">1</div>
                        <div>
                            <h3 style="margin-bottom: 8px;">Inquire</h3>
                            <p style="font-size: 14px; margin-bottom: 0; color: var(--text-body);">Contact the Registrar via phone, our Facebook page, or the form below. If possible, arrange to attend a campus orientation with the applicant.</p>
                        </div>
                    </div>
                    <div class="step-card">
                        <div class="step-number">2</div>
                        <div>
                            <h3 style="margin-bottom: 8px;">Submit Requirements</h3>
                            <p style="font-size: 14px; margin-bottom: 0; color: var(--text-body);">Compile and submit all necessary documentation listed in the Requirements Checklist securely to the Admissions Office.</p>
                        </div>
                    </div>
                    <div class="step-card">
                        <div class="step-number">3</div>
                        <div>
                            <h3 style="margin-bottom: 8px;">Entrance Assessment</h3>
                            <p style="font-size: 14px; margin-bottom: 0; color: var(--text-body);">Complete the required academic placement test and undergo a personal interview to ensure EVAA is the right fit. <span style="font-size: 12px; color: var(--danger);">[Confirm format with school]</span></p>
                        </div>
                    </div>
                    <div class="step-card">
                        <div class="step-number">4</div>
                        <div>
                            <h3 style="margin-bottom: 8px;">Receive Acceptance</h3>
                            <p style="font-size: 14px; margin-bottom: 0; color: var(--text-body);">Wait for the official admission decision. Once accepted, early confirmation of your slot is deeply encouraged.</p>
                        </div>
                    </div>
                    <div class="step-card">
                        <div class="step-number">5</div>
                        <div>
                            <h3 style="margin-bottom: 8px;">Pay Enrollment Fees</h3>
                            <p style="font-size: 14px; margin-bottom: 0; color: var(--text-body);">Settle the required tuition downpayment and boarding fees with the Treasury office according to the DepEd-approved fee schedule.</p>
                        </div>
                    </div>
                    <div class="step-card">
                        <div class="step-number">6</div>
                        <div>
                            <h3 style="margin-bottom: 8px;">Move In & Begin</h3>
                            <p style="font-size: 14px; margin-bottom: 0; color: var(--text-body);">Report eagerly to campus on the designated move-in day to participate in the boarding orientation and begin classes.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section 5: Requirements Checklist -->
        <section class="bg-navy" style="color: white;">
            <div class="container">
                <h2 class="section-title text-center text-white">Requirements Checklist</h2>
                <div class="title-rule"></div>

                <div class="grid grid-2 gap-40 mt-32" style="max-width: 900px; margin: 32px auto 0;">
                    <div>
                        <h3 style="color: var(--gold); border-bottom: 1px solid rgba(255,255,255,0.2); padding-bottom: 12px; margin-bottom: 24px;">For All New Students</h3>
                        <ul style="list-style-type: disc; padding-left: 20px; line-height: 2;">
                            <li>Original Form 138 (Report Card) — indicating completion of the previous school year</li>
                            <li>Certificate of Good Moral Character from the previous school principal or guidance counselor</li>
                            <li>Original PSA Birth Certificate (photocopy acceptable for initial review)</li>
                            <li>Four (4) copies of recent 2×2 ID photos with white background</li>
                            <li>Medical diagnostic certificate from a licensed physician</li>
                            <li>Baptismal Certificate (required for SDA members; optional for others)</li>
                            <li>Fully Completed EVAA Application Form</li>
                        </ul>
                    </div>
                    <div>
                        <h3 style="color: var(--gold); border-bottom: 1px solid rgba(255,255,255,0.2); padding-bottom: 12px; margin-bottom: 24px;">Additional for Transferees</h3>
                        <ul style="list-style-type: disc; padding-left: 20px; line-height: 2;">
                            <li>Certificate of Transfer Credentials / Honorable Dismissal</li>
                            <li>Educational Service Contracting (ESC) Certificate (if applicable, for students transferring from private JHS)</li>
                        </ul>
                        <div style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 8px; margin-top: 32px; border-left: 4px solid var(--danger);">
                            <p style="font-size: 13px; margin: 0; color: rgba(255,255,255,0.8);"><strong>Important Note:</strong> Requirements are subject to change. Please contact the Registrar directly to confirm the definitive current list prior to your final document submission.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section 6: Tuition & Fees & Section 7 -->
        <section class="bg-cream">
            <div class="container grid grid-2 gap-40 text-left">
                <div>
                    <h2 class="section-title">Tuition & Boarding Fees</h2>
                    <p>EVAA is committed to providing high-quality Adventist education at transparent, reasonable rates. Our tuition and fees are rigorously reviewed and officially approved annually by DepEd Region VIII.</p>
                    <p style="font-size: 14px;"><strong>Reference:</strong> DepEd Regional Memorandum No. 931, s. 2024 (EVAA fee approval).</p>
                    
                    <a href="https://region8.deped.gov.ph/wp-content/uploads/2024/08/RM-s2024-931.pdf" target="_blank" rel="noopener" class="btn-outline mb-24" style="background: white;">View DepEd Fee Approval Memo ↗</a>

                    <table class="styled-table" style="background: white; box-shadow: var(--shadow-card);">
                        <thead>
                            <tr>
                                <th style="border-radius: 8px 0 0 0;">Fee Category</th>
                                <th>Amount</th>
                                <th style="border-radius: 0 8px 0 0;">Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Tuition Fee</td>
                                <td><span style="color: var(--danger); font-size: 12px;">[Per DepEd approval]</span></td>
                                <td>Per semester</td>
                            </tr>
                            <tr>
                                <td>Miscellaneous Fees</td>
                                <td><span style="color: var(--danger); font-size: 12px;">[Per DepEd approval]</span></td>
                                <td>Per semester</td>
                            </tr>
                            <tr>
                                <td>Boarding Fee</td>
                                <td><span style="color: var(--danger); font-size: 12px;">[To be confirmed]</span></td>
                                <td>Monthly (includes meals)</td>
                            </tr>
                            <tr>
                                <td>Other School Fees</td>
                                <td><span style="color: var(--danger); font-size: 12px;">[To be confirmed]</span></td>
                                <td>Per DepEd memo</td>
                            </tr>
                        </tbody>
                    </table>
                    <p style="font-size: 13px; color: var(--text-muted); font-style: italic;">Reminder: For the most accurate, current fee schedule customized to your grade level, please consult the EVAA Treasurer directly.</p>
                </div>

                <div>
                    <div style="background: var(--white); border: 1px solid var(--border); border-top: 4px solid var(--success); padding: 40px; border-radius: 12px; box-shadow: var(--shadow-card); height: 100%;">
                        <div class="icon-circle mb-16"><svg viewBox="0 0 24 24" fill="var(--success)"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg></div>
                        <h3 class="section-title" style="font-size: 24px;">Scholarships & Financial Aid</h3>
                        <p style="font-size: 15px; color: var(--text-body); line-height: 1.8;">EVAA firmly believes that no deserving student should be denied a transformative Christian education solely due to financial limitations.</p>
                        <p style="font-size: 15px; color: var(--text-body); line-height: 1.8;">Various scholarship opportunities, work-study arrangements, and financial assistance programs may be available to qualifying families. The school administration works closely with church sponsors and generous alumni to assist students in need.</p>
                        <div style="margin-top: 24px;">
                            <span style="color: var(--danger); font-size: 13px; font-weight: bold;">[School to confirm explicitly available aid programs here.]</span>
                        </div>
                        <p style="font-size: 15px; margin-top: 16px;">Please reach out confidentially to the school administration to discuss possible scholarship grants or payment plan details.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section 8: INQUIRY FORM -->
        <section id="inquiry-form" class="bg-navy" style="color: white; padding: 100px 0;">
            <div class="container">
                <div class="text-center" style="margin-bottom: 40px;">
                    <h2 class="section-title text-white">Send Us an Inquiry</h2>
                    <p style="color: rgba(255,255,255,0.8);">Our Admissions Office will comprehensively review your details and get back to you within 2–3 school days.</p>
                </div>

                <div style="background: white; border-radius: 12px; padding: 40px; max-width: 800px; margin: 0 auto; color: var(--text-dark); box-shadow: var(--shadow-hover);">
                    <form action="#" method="POST">
                        <div class="form-success">Thank you! Your inquiry has been phenomenally received. We\'ll be in touch soon.</div>
                        
                        <div class="grid grid-2 gap-24">
                            <div class="form-group">
                                <label class="form-label" for="fullName">Full Name Applicant*</label>
                                <input type="text" id="fullName" class="form-control" required>
                                <div class="form-error-msg">This field is required.</div>
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="email">Email Address*</label>
                                <input type="email" id="email" class="form-control" required>
                                <div class="form-error-msg">Please enter a valid email.</div>
                            </div>
                        </div>

                        <div class="grid grid-2 gap-24">
                            <div class="form-group">
                                <label class="form-label" for="phone">Contact Number*</label>
                                <input type="tel" id="phone" class="form-control" required>
                                <div class="form-error-msg">This field is required.</div>
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="address">Complete Address</label>
                                <input type="text" id="address" class="form-control">
                            </div>
                        </div>

                        <div class="grid grid-2 gap-24">
                            <div class="form-group">
                                <label class="form-label" for="gradeLevel">Grade Level Applying For*</label>
                                <select id="gradeLevel" class="form-control" required>
                                    <option value="" disabled selected>Select Grade</option>
                                    <option value="Grade 7">Grade 7</option>
                                    <option value="Grade 8">Grade 8</option>
                                    <option value="Grade 9">Grade 9</option>
                                    <option value="Grade 10">Grade 10</option>
                                    <option value="Grade 11">Grade 11</option>
                                    <option value="Grade 12">Grade 12</option>
                                </select>
                                <div class="form-error-msg">This field is required.</div>
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="schoolYear">School Year*</label>
                                <select id="schoolYear" class="form-control" required>
                                    <option value="" disabled selected>Select Year</option>
                                    <option value="2025-2026">2025-2026</option>
                                    <option value="2026-2027">2026-2027</option>
                                </select>
                                <div class="form-error-msg">This field is required.</div>
                            </div>
                        </div>

                        <div class="grid grid-2 gap-24">
                            <div class="form-group">
                                <label class="form-label" for="currentSchool">Current / Previous School</label>
                                <input type="text" id="currentSchool" class="form-control">
                            </div>
                            <div class="form-group">
                                <label class="form-label">Type of Application*</label>
                                <div style="display: flex; gap: 16px; margin-top: 8px; flex-wrap: wrap;">
                                    <label style="font-size: 14px; cursor: pointer;"><input type="radio" name="appType" value="New Student" required> New Student</label>
                                    <label style="font-size: 14px; cursor: pointer;"><input type="radio" name="appType" value="Transferee"> Transferee</label>
                                    <label style="font-size: 14px; cursor: pointer;"><input type="radio" name="appType" value="Returning Student"> Returning</label>
                                </div>
                            </div>
                        </div>

                        <div class="grid grid-2 gap-24 align-items-center">
                            <div class="form-group" style="margin-bottom: 0;">
                                <label class="form-label">Is applicant a Seventh-day Adventist member?</label>
                                <div style="display: flex; gap: 16px; margin-top: 8px;">
                                    <label style="font-size: 14px;"><input type="radio" name="sdaMember" value="Yes"> Yes</label>
                                    <label style="font-size: 14px;"><input type="radio" name="sdaMember" value="No"> No</label>
                                    <label style="font-size: 14px;"><input type="radio" name="sdaMember" value="Interested"> Not yet, interested</label>
                                </div>
                            </div>
                            <div class="form-group" style="margin-bottom: 0;">
                                <label class="form-label">Are you interested in boarding?</label>
                                <div style="display: flex; gap: 16px; margin-top: 8px; flex-wrap: wrap;">
                                    <label style="font-size: 14px;"><input type="radio" name="boarding" value="Yes"> Yes, full board</label>
                                    <label style="font-size: 14px;"><input type="radio" name="boarding" value="Day student"> Day only</label>
                                    <label style="font-size: 14px;"><input type="radio" name="boarding" value="Undecided"> Undecided</label>
                                </div>
                            </div>
                        </div>

                        <div class="form-group" style="margin-top: 24px;">
                            <label class="form-label" for="referral">How did you hear about EVAA?</label>
                            <select id="referral" class="form-control">
                                <option value="" disabled selected>Select one...</option>
                                <option value="Facebook">Facebook</option>
                                <option value="Alumni Referral">Referral from alumni</option>
                                <option value="Church Referral">Referral from church</option>
                                <option value="Walk-in">Walk-in</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label class="form-label" for="message">Your Message / Specific Questions</label>
                            <textarea id="message" class="form-control" rows="4" placeholder="Tell us how we can assist you with your application..."></textarea>
                        </div>

                        <button type="submit" class="btn-primary w-100" style="font-size: 16px; padding: 16px; margin-top: 8px;">Submit Inquiry</button>
                        
                        <p style="font-size: 12px; color: var(--text-muted); text-align: center; margin-top: 16px; margin-bottom: 0;">Your information will only be used to respond to your inquiry in strict accordance with the Data Privacy Act and will absolutely not be shared with third parties.</p>
                    </form>
                </div>
            </div>
        </section>
  `;
}
