import { Link } from "react-router-dom";

const About = () => (
  <>
    <section className="page-hero" style={{ backgroundImage: "url('/images/couple market portugal.webp')", backgroundSize: "cover", backgroundPosition: "center top", position: "relative", minHeight: 420, display: "flex", alignItems: "flex-end" }}>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(105deg,rgba(5,15,5,0.82) 0%,rgba(5,15,5,0.55) 55%,rgba(5,15,5,0.15) 100%)" }}></div>
      <div className="container" style={{ position: "relative", zIndex: 1, paddingBottom: "3rem" }}>
        <div className="breadcrumb"><Link to="/">Home</Link> / About</div>
        <h1>Built by Americans, <em style={{ fontStyle: "italic", color: "var(--accent)" }}>for</em> Americans moving abroad.</h1>
        <p style={{ maxWidth: 560, color: "rgba(255,255,255,0.85)", marginTop: "0.75rem" }}>We've navigated the U.S., Portuguese, and Spanish healthcare systems firsthand, so you don't have to figure it out alone.</p>
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginTop: "1.5rem" }}>
          <Link to="/contact" className="btn btn-accent btn-lg">Book a free consultation</Link>
          <a href="#approach" className="btn btn-ghost-white">Our Approach ↓</a>
        </div>
      </div>
    </section>

    <section className="section" id="approach">
      <div className="container">
        <div className="about-approach-grid">
          <div>
            <div className="section-eyebrow">Our Approach</div>
            <h2 className="serif" style={{ fontSize: "2.25rem", marginBottom: "1.5rem" }}>Calm, Structured, Empathetic</h2>
            <p style={{ color: "var(--muted-foreground)", marginBottom: "1.25rem" }}>Iberia Health Connect was created to bridge the gap between what Americans expect from healthcare and how healthcare actually works in Portugal and Spain, calmly and clearly.</p>
            <p style={{ color: "var(--muted-foreground)", marginBottom: "1.25rem" }}>We believe families can benefit when someone explains the structure and processes step-by-step. Articles provide education, but planning requires personalization.</p>
            <p style={{ color: "var(--muted-foreground)", marginBottom: "1.25rem" }}>We are not a medical practice. We are healthcare navigators, helping you understand systems, sequences, and administrative steps so you can make informed decisions and access care confidently.</p>
          </div>
          <div className="about-approach-mockup">
            <div className="about-mockup-card">
              <img src="/images/young family portugal.webp" alt="Family in Portugal, warm and celebratory" className="about-mockup-img" loading="lazy" />
              <div className="about-mockup-overlay">
                <div className="about-mockup-tag">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                  Peace of mind, guaranteed
                </div>
              </div>
            </div>
            <div className="about-mockup-accent-card">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--primary)" }}><path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2v-4M9 21H5a2 2 0 0 1-2-2v-4m0 0h18"/></svg>
              <div>
                <div style={{ fontWeight: 700, fontSize: "0.9rem" }}>Prescription continuity</div>
                <div style={{ fontSize: "0.78rem", color: "var(--muted-foreground)" }}>Reviewed & planned for you</div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ maxWidth: 800, margin: "4rem auto 0" }}>
          <h2 className="serif" style={{ fontSize: "2rem", marginBottom: "2rem", textAlign: "center" }}>About Working With Us</h2>
          <div className="about-working-grid">
            <div className="who-card">
              <h4>Privacy & Inclusivity</h4>
              <p>We work with all clients regardless of background. LGBTQ+ individuals, families, retirees: everyone deserves calm, clear guidance.</p>
            </div>
            <div className="who-card">
              <h4>No Medical Advice</h4>
              <p>We provide navigation and planning support. We help you understand how to access care, not what care to receive.</p>
            </div>
            <div className="who-card">
              <h4>Flexible Appointments</h4>
              <p>Video or audio-only sessions available. We work around your schedule and comfort level.</p>
            </div>
            <div className="who-card">
              <h4>Built on Experience</h4>
              <p>We've navigated the U.S., Portuguese, and Spanish healthcare systems firsthand. That experience shapes everything we do.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="cta-banner">
      <div className="container text-center">
        <h2 className="serif cta-title">Ready to get started?</h2>
        <p>Book a free 15-minute consultation to discuss your situation.</p>
        <Link to="/contact" className="btn btn-accent btn-lg">Book a free consultation</Link>
      </div>
    </section>
  </>
);

export default About;
