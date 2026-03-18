export const title = 'Campus & Boarding | East Visayan Adventist Academy';
export const description = 'Discover life on the hill at EVAA. Explore our peaceful campus, boarding facilities, and deep community in Academy Heights, Leyte.';

export function content() {
  return `
        <!-- Section 1: Page Hero -->
        <section class="hero-inner">
            <div class="breadcrumb"><a href="/" data-link>Home</a> &gt; Campus & Boarding</div>
            <h1>Life on the Hill</h1>
            <p class="hero-subtext" style="color: rgba(255,255,255,0.8); margin-bottom: 0;">Academy Heights, Brgy. San Sotero, Javier, Leyte · ~1 hour from Tacloban City</p>
            <div style="width: 48px; height: 3px; background-color: var(--gold); margin-top: 24px;"></div>
        </section>

        <!-- Section 2: Campus Overview -->
        <section class="bg-white">
            <div class="container grid grid-2 gap-40 align-items-center">
                <div>
                    <div class="section-label">Our Location</div>
                    <h2 class="section-title">A Sanctuary for Learning</h2>
                    <div class="title-rule left"></div>
                    <p>Situated in the verdant, peaceful surroundings of Barangay San Sotero in Javier, Leyte, the EVAA campus is affectionately known as "Academy Heights." The elevated location provides students with fresh mountain air, expansive green spaces, and a sweeping view that naturally draws the mind toward the Creator.</p>
                    <p>Getting here is a journey into tranquility. We are conveniently located approximately one hour away from the bustling hub of Tacloban City, and about two hours from Ormoc City, making it accessible via major bus and jeepney routes while remaining comfortably secluded.</p>
                    <p>Your first impression as you pass through the campus gates is one of order and serenity. The prominent campus church is visible from the road, serving as a beacon of our spiritual priorities, while the neatly arranged academic and dormitory buildings sit securely within the gated perimeter.</p>
                    <p>Our location matters profoundly. By placing our academy away from the noise and distractions of the city, we have crafted an immersive retreat. This safe, natural environment is intentionally designed to help students focus entirely on their studies, their friendships, and their relationship with God.</p>
                </div>
                <div>
                    <!-- Styled CSS Campus Map Placeholder -->
                    <div style="background: var(--navy); border-radius: 12px; padding: 24px; position: relative; height: 500px; display: flex; flex-direction: column; color: white;">
                        <h3 style="color: var(--gold); margin-bottom: 16px; text-align: center;">Academy Heights Campus Map</h3>
                        <div style="flex: 1; border: 2px dashed rgba(255,255,255,0.2); position: relative; background: rgba(0,0,0,0.2); border-radius: 8px;">
                            <div style="position: absolute; bottom: 10px; left: 50%; transform: translateX(-50%); font-size: 10px; color: var(--gold); border: 1px solid var(--gold); padding: 2px 8px; border-radius: 4px;">MAIN GATE</div>
                            
                            <div style="position: absolute; top: 15%; left: 10%; width: 25%; height: 25%; border: 1px solid var(--success); background: rgba(45, 122, 79, 0.2); display: flex; align-items: center; justify-content: center; font-size: 11px; text-align: center;">Sports<br>Area</div>
                            
                            <div style="position: absolute; top: 10%; right: 15%; width: 35%; height: 20%; border: 1px solid white; background: rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: center; font-size: 11px; text-align: center;">Boys\'<br>Dormitory</div>
                            
                            <div style="position: absolute; top: 40%; right: 15%; width: 35%; height: 20%; border: 1px solid white; background: rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: center; font-size: 11px; text-align: center;">Girls\'<br>Dormitory</div>
                            
                            <div style="position: absolute; top: 45%; left: 15%; width: 30%; height: 35%; border: 1px solid var(--gold); background: rgba(201, 168, 76, 0.2); display: flex; align-items: center; justify-content: center; font-size: 11px; text-align: center;">Academic<br>Building</div>
                            
                            <div style="position: absolute; bottom: 25%; right: 25%; width: 20%; height: 15%; border: 1px solid white; background: rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: center; font-size: 11px; text-align: center;">Cafeteria</div>
                            
                            <div style="position: absolute; bottom: 15%; left: 50%; transform: translateX(-50%); width: 20%; height: 15%; border: 1px solid var(--info-text); background: rgba(26, 48, 96, 0.5); display: flex; align-items: center; justify-content: center; font-size: 11px; text-align: center; color: var(--gold);">Campus<br>Church</div>

                            <div style="position: absolute; top: 30%; left: 50%; transform: translate(-50%, -50%); width: 10%; height: 10%; border: 1px solid white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 8px;">Admin</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section 3: Campus Facilities -->
        <section class="bg-cream">
            <div class="container text-center">
                <div class="section-label">Our Spaces</div>
                <h2 class="section-title">Campus Facilities</h2>
                <div class="title-rule"></div>

                <div class="grid grid-3 mt-32 text-left">
                    <div class="card" style="padding: 0;">
                        <div class="image-placeholder" style="border-radius: 12px 12px 0 0; min-height: 180px;"><span>[Photo: Academic Building]</span></div>
                        <div style="padding: 24px;">
                            <h3 style="margin-bottom: 12px;">Academic Building</h3>
                            <p style="font-size: 14px; margin-bottom: 8px;">The core of our instructional activities, featuring airy, well-lit classrooms equipped for modern learning methodologies. Our teachers maintain an engaging environment to foster interactive discussions and focused study.</p>
                            <p style="font-size: 14px; margin-bottom: 0;">It also houses faculty offices and a dedicated library reference area where students can quietly research, read, and complete their assignments after regular class hours.</p>
                        </div>
                    </div>
                    <div class="card" style="padding: 0;">
                        <div class="image-placeholder" style="border-radius: 12px 12px 0 0; min-height: 180px;"><span>[Photo: Campus Church]</span></div>
                        <div style="padding: 24px;">
                            <h3 style="margin-bottom: 12px;">Campus Church</h3>
                            <p style="font-size: 14px; margin-bottom: 8px;">The spiritual epicenter of EVAA. Set prominently on the hill, it is the gathering place for joyous Sabbath services, uplifting chapel sessions, and our annual Week of Prayer events.</p>
                            <p style="font-size: 14px; margin-bottom: 0;">With its reverent architecture and welcoming atmosphere, it provides a sacred space for the entire school family to worship, sing, and experience the presence of God together.</p>
                        </div>
                    </div>
                    <div class="card" style="padding: 0;">
                        <div class="image-placeholder" style="border-radius: 12px 12px 0 0; min-height: 180px;"><span>[Photo: Cafeteria]</span></div>
                        <div style="padding: 24px;">
                            <h3 style="margin-bottom: 12px;">The Cafeteria</h3>
                            <p style="font-size: 14px; margin-bottom: 8px;">More than just a dining hall, the cafeteria is where communal bonds are forged over shared meals. We strictly adhere to Seventh-day Adventist health principles, serving nutritious, well-balanced vegetarian fare.</p>
                            <p style="font-size: 14px; margin-bottom: 0;">By promoting a healthful diet, we ensure our students possess the physical vitality and mental clarity needed to excel in their demanding academic and extracurricular routines.</p>
                        </div>
                    </div>
                    <div class="card" style="padding: 0;">
                        <div class="image-placeholder" style="border-radius: 12px 12px 0 0; min-height: 180px;"><span>[Photo: Boys\' Dorm]</span></div>
                        <div style="padding: 24px;">
                            <h3 style="margin-bottom: 12px;">Boys\' Dormitory</h3>
                            <p style="font-size: 14px; margin-bottom: 8px;">A highly supervised, structured housing facility for male students, managed by a dedicated Dean. It features designated study halls to ensure academic focus during evening hours.</p>
                            <p style="font-size: 14px; margin-bottom: 0;">Daily dorm worships foster brotherhood and spiritual accountability, helping young men develop into responsible, considerate, and godly leaders.</p>
                        </div>
                    </div>
                    <div class="card" style="padding: 0;">
                        <div class="image-placeholder" style="border-radius: 12px 12px 0 0; min-height: 180px;"><span>[Photo: Girls\' Dorm]</span></div>
                        <div style="padding: 24px;">
                            <h3 style="margin-bottom: 12px;">Girls\' Dormitory</h3>
                            <p style="font-size: 14px; margin-bottom: 8px;">A safe, secure, and nurturing home for female boarders. Under the careful guidance of the Dean of Girls, the dormitory operates on a schedule identical to the boys\' dorm to maintain campus consistency.</p>
                            <p style="font-size: 14px; margin-bottom: 0;">It acts as a sisterhood where young women learn grace, cooperation, personal responsibility, and mutual support through shared living and evening devotionals.</p>
                        </div>
                    </div>
                    <div class="card" style="padding: 0;">
                        <div class="image-placeholder" style="border-radius: 12px 12px 0 0; min-height: 180px;"><span>[Photo: Sports Area]</span></div>
                        <div style="padding: 24px;">
                            <h3 style="margin-bottom: 12px;">Sports & Recreation Area</h3>
                            <p style="font-size: 14px; margin-bottom: 8px;">Recognizing that physical fitness is crucial to holistic education, our sports area provides ample space for team sports, intramural games, and general recreation.</p>
                            <p style="font-size: 14px; margin-bottom: 0;">Whether it\'s basketball, volleyball, or simple afternoon exercises, these facilities encourage teamwork, fair play, and the constructive release of youthful energy.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section 4: Boarding Life Deep Dive -->
        <section class="bg-navy">
            <div class="container text-center">
                <h2 style="color: var(--gold); font-family: var(--font-display); font-size: 36px; margin-bottom: 40px; font-weight: 700;">More Than a School — A Community Where You Belong</h2>
                
                <div class="grid grid-2 text-left gap-24">
                    <div class="card" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); color: white;">
                        <h3 style="color: var(--gold); margin-bottom: 16px;">1. Daily Schedule</h3>
                        <p style="font-size: 14px; color: rgba(255,255,255,0.8);">Boarding life runs on a carefully planned rhythm. A typical day begins with morning worship, followed by breakfast and regular academic classes. Afternoons include work education or recreation, leading into an evening study period, concluding with dorm devotionals and lights out.</p>
                        <table style="width: 100%; border-collapse: collapse; font-size: 12px; margin-top: 16px; color: rgba(255,255,255,0.7);">
                            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding: 4px 0;">5:30 AM</td><td>Wake up & Devotion</td></tr>
                            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding: 4px 0;">7:30 AM</td><td>Classes Begin</td></tr>
                            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding: 4px 0;">4:00 PM</td><td>Work Ed / Recreation</td></tr>
                            <tr><td style="padding: 4px 0;">7:00 PM</td><td>Study Hall</td></tr>
                        </table>
                    </div>
                    
                    <div class="card" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); color: white;">
                        <h3 style="color: var(--gold); margin-bottom: 16px;">2. Independence & Responsibility</h3>
                        <p style="font-size: 14px; color: rgba(255,255,255,0.8); margin-bottom: 0;">Living away from parents accelerates a student\'s maturity. Boarders learn essential, practical life skills such as doing their own laundry, ironing their uniforms, keeping their rooms immaculate, and managing their personal weekly allowances. These experiences build strong, independent young adults prepared for university life.</p>
                    </div>

                    <div class="card" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); color: white;">
                        <h3 style="color: var(--gold); margin-bottom: 16px;">3. Community Living</h3>
                        <p style="font-size: 14px; color: rgba(255,255,255,0.8); margin-bottom: 0;">The dormitory is a microcosm of society. By sharing space with diverse peers, students learn the art of compromise, conflict resolution, and the beauty of supporting one another through homesickness or academic pressure. The friendships formed here are extraordinarily tight-knit and often last a lifetime.</p>
                    </div>

                    <div class="card" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); color: white;">
                        <h3 style="color: var(--gold); margin-bottom: 16px;">4. Supervised Environment</h3>
                        <p style="font-size: 14px; color: rgba(255,255,255,0.8); margin-bottom: 0;">Safety is paramount at Academy Heights. Our Deans act in loco parentis, providing 24/7 supervision. We enforce strict campus rules, monitored visiting hours, and gate security. Parents can rest easy knowing their children are protected from negative external influences while receiving loving, firm discipline.</p>
                    </div>

                    <div class="card" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); color: white;">
                        <h3 style="color: var(--gold); margin-bottom: 16px;">5. Spiritual Rhythms</h3>
                        <p style="font-size: 14px; color: rgba(255,255,255,0.8); margin-bottom: 0;">Beyond the classroom, the dorms pulse with spiritual life. From quiet early morning personal devotions to spirited Friday night vesper programs welcoming the Sabbath, boarders are continuously immersed in an environment that naturally encourages a deeper walk with Jesus Christ.</p>
                    </div>

                    <div class="card" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); color: white;">
                        <h3 style="color: var(--gold); margin-bottom: 16px;">6. Health & Wellness</h3>
                        <p style="font-size: 14px; color: rgba(255,255,255,0.8); margin-bottom: 0;">We practice what we preach regarding the body as a temple. The boarding program strictly regulates adequate sleep, provides highly nutritious plant-based meals, and integrates daily physical activity. This holistic approach significantly reduces stress and promotes excellent mental wellness among our teenagers.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section 5: Getting to EVAA -->
        <section class="bg-white">
            <div class="container text-center">
                <h2 class="section-title">Getting Here</h2>
                <div class="title-rule"></div>

                <div class="card text-left mt-32 mx-auto" style="max-width: 900px;">
                    <div class="grid grid-2 gap-40">
                        <div>
                            <h3 style="color: var(--navy); margin-bottom: 16px;">Directions to Campus</h3>
                            
                            <h4 style="font-size: 14px; margin-bottom: 4px;"><span style="color: var(--gold);">📍</span> From Tacloban City</h4>
                            <p style="font-size: 13px; color: var(--text-body); border-left: 2px solid var(--border); padding-left: 12px; margin-bottom: 16px;">Take any bus or public utility jeepney bound for Javier or Abuyog passing through Javier. The travel time is approximately 1 hour. Alight at the designated drop-off point for Barangay San Sotero.</p>

                            <h4 style="font-size: 14px; margin-bottom: 4px;"><span style="color: var(--gold);">📍</span> From Ormoc City</h4>
                            <p style="font-size: 13px; color: var(--text-body); border-left: 2px solid var(--border); padding-left: 12px; margin-bottom: 16px;">Take a bus heading towards Tacloban or crossing the province to Javier. Approximate travel time is around 2 hours via the scenic mountain route connecting the cities.</p>

                            <h4 style="font-size: 14px; margin-bottom: 4px;"><span style="color: var(--gold);">✈</span> From Manila</h4>
                            <p style="font-size: 13px; color: var(--text-body); border-left: 2px solid var(--border); padding-left: 12px; margin-bottom: 16px;">Fly to Daniel Z. Romualdez Airport in Tacloban City (DZR) via direct commercial flights, then proceed via ground transport following the Tacloban directions.</p>

                            <p style="font-size: 11px; margin-top: 16px; color: var(--text-muted);"><em>[GPS coordinates to be confirmed by school]</em></p>
                        </div>
                        <div>
                            <div class="map-placeholder" style="height: 100%; min-height: 250px;">
                                <span>[Embedded Google Map — Academy Heights, Javier, Leyte]</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  `;
}
