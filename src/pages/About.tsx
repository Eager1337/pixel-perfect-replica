import { Link } from "react-router-dom";

const IMG = "https://sensationalbilly.github.io/Iberiahealthconnect/images";

const About = () => (
  <>
    <section className="about-hero">
      <div className="about-hero-overlay"></div>
      <div className="about-hero-split">
        <div className="about-hero-text">
          <div className="breadcrumb" style={{ color: "rgba(255,255,255,0.45)", marginBottom: "1.25rem" }}><Link to="/" style={{ color: "rgba(255,255,255,0.6)" }}>Home</Link> / About</div>
          <div className="hero-badge" style={{ marginBottom: "1.25rem", background: "rgba(168,192,96,0.15)", borderColor: "rgba(168,192,96,0.3)" }}>
            <span className="badge-dot" style={{ background: "#a8c060", boxShadow: "0 0 0 3px rgba(168,192,96,0.25)" }}></span>
            Healthcare Navigation Experts
          </div>
          <h1 className="serif about-hero-title">
            Built by Americans,<br /><em>for</em> Americans<br />moving abroad.
          </h1>
          <p className="about-hero-sub">We've navigated the U.S., Portuguese, and Spanish healthcare systems firsthand — so you don't have to figure it out alone.</p>
          <div className="about-pills-row" style={{ marginBottom: "2.5rem" }}>
            {["Calm", "Structured", "Empathetic"].map((p) => (
              <span className="about-pill" key={p}>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                {p}
              </span>
            ))}
          </div>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link to="/contact" className="btn btn-accent btn-lg">Book a free consultation</Link>
            <a href="#approach" className="btn btn-ghost-white">Our Approach ↓</a>
          </div>
          <div className="hero-stats" style={{ marginTop: "2.5rem", background: "rgba(255,255,255,0.07)", borderColor: "rgba(255,255,255,0.12)" }}>
            <div className="stat"><span className="stat-num">3</span><span className="stat-label">Countries</span></div>
            <div className="stat-divider"></div>
            <div className="stat"><span className="stat-num">3</span><span className="stat-label">Service Tiers</span></div>
            <div className="stat-divider"></div>
            <div className="stat"><span className="stat-num">15<small>min</small></span><span className="stat-label">Free Call</span></div>
          </div>
        </div>
        <div className="about-hero-img-col">
          <div className="about-hero-mockup-wrap">
            <img src={`${IMG}/doctor.webp`} alt="Healthcare professional" className="about-hero-doctor-img" />
            <div className="hero-float-card about-float-trust">
              <div className="hero-float-icon green">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <div>
                <div className="hero-float-title">Expert-backed</div>
                <div className="hero-float-sub">U.S. · Portugal · Spain</div>
              </div>
            </div>
            <div className="hero-float-card about-float-stat">
              <div>
                <div style={{ fontSize: "1.6rem", fontFamily: "var(--font-serif)", fontWeight: 700, color: "var(--primary)", lineHeight: 1 }}>3</div>
                <div style={{ fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700, color: "var(--muted-foreground)", marginTop: "0.2rem" }}>Countries of expertise</div>
              </div>
            </div>
            <div className="about-float-pill">
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#a8c060", flexShrink: 0 }}></span>
              Free 15-min call available
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section" id="approach">
      <div className="container">
        <div className="about-approach-grid">
          <div>
            <div className="section-eyebrow">Our Approach</div>
            <h2 className="serif" style={{ fontSize: "2.25rem", marginBottom: "1.5rem" }}>Calm, Structured, Empathetic</h2>
            <p style={{ color: "var(--muted-foreground)", marginBottom: "1.25rem" }}>Iberia Health Connect was created to bridge the gap between what Americans expect from healthcare and how healthcare actually works in Portugal and Spain — calmly and clearly.</p>
            <p style={{ color: "var(--muted-foreground)", marginBottom: "1.25rem" }}>We believe families can benefit when someone explains the structure and processes step-by-step. Articles provide education, but planning requires personalization.</p>
            <p style={{ color: "var(--muted-foreground)", marginBottom: "1.25rem" }}>We are not a medical practice. We are healthcare navigators — helping you understand systems, sequences, and administrative steps so you can make informed decisions and access care confidently.</p>
          </div>
          <div className="about-approach-mockup">
            <div className="about-mockup-card">
              <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=85" alt="Professional healthcare navigator" style={{ width: "100%", borderRadius: "1rem" }} loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section bg-secondary">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">What We Do</div>
          <h2 className="serif">Healthcare Navigation, Not Medical Advice</h2>
          <p className="text-muted">We help you understand the systems and processes — you make the decisions.</p>
        </div>
        <div className="about-working-grid">
          {[
            { title: "We help you understand", desc: "Public vs private systems, regional differences, and administrative sequences." },
            { title: "We help you plan", desc: "Prescription continuity, appointment sequencing, and documentation needs." },
            { title: "We help you act", desc: "Step-by-step guidance, task tracking, and ongoing support as you settle in." },
            { title: "We respect your autonomy", desc: "You remain in control of your choices and communications at all times." },
          ].map((item) => (
            <div className="about-working-card" key={item.title}>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="cta-banner">
      <div className="cta-bg-pattern"></div>
      <div className="container text-center">
        <div className="section-eyebrow light">Get Started</div>
        <h2 className="serif cta-title">Ready to Plan Your Healthcare Transition?</h2>
        <p>Book a free 15-minute consultation to discuss your specific situation.</p>
        <Link to="/contact" className="btn btn-accent btn-lg pulse-glow">Book a free consultation</Link>
      </div>
    </section>
  </>
);

export default About;
