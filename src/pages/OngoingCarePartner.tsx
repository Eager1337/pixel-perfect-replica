import { Link } from "react-router-dom";

const OngoingCarePartner = () => (
  <>
    <section className="page-hero" style={{ backgroundImage: "url('/images/retirement portugal.webp')", backgroundSize: "cover", backgroundPosition: "center", position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,rgba(8,20,6,0.80) 0%,rgba(45,106,45,0.60) 100%)" }}></div>
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="breadcrumb"><Link to="/">Home</Link> / <Link to="/resources">Services</Link> / Tier 3</div>
        <h1>Tier 3: Ongoing Care Partner</h1>
        <p>Support after you arrive. Quarterly check-ins and ongoing admin/navigation support as your needs change.</p>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <div className="service-detail-grid">
          <div>
            <h2 className="serif" style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>What's Included</h2>
            <ul className="check-list" style={{ marginBottom: "2rem" }}>
              <li>Everything in Tier 1 & Tier 2</li>
              <li>Quarterly Check-ins: video or audio-only sessions</li>
              <li>Ongoing email support between sessions, with documents and checklists</li>
              <li>Updates to your healthcare plan as needs evolve</li>
              <li>Ongoing admin/navigation support as your needs change after you arrive</li>
              <li>Long-term peace of mind as your situation changes</li>
            </ul>
            <h2 className="serif" style={{ fontSize: "1.75rem", marginBottom: "1rem" }}>Who This Is For</h2>
            <p style={{ color: "var(--muted-foreground)", marginBottom: "1rem" }}>This tier is ideal if you:</p>
            <ul className="check-list">
              <li>Want long-term support, not just pre-move planning</li>
              <li>Have complex ongoing healthcare needs</li>
              <li>Are managing prescriptions that require regular attention</li>
              <li>Want a trusted partner as your situation evolves after arrival</li>
              <li>Are ready for long-term peace of mind</li>
            </ul>
          </div>
          <div>
            <div className="tier-card service-sticky-card">
              <div className="tier-label">Tier 3</div>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>Ongoing Care Partner</h3>
              <p style={{ color: "var(--muted-foreground)", marginBottom: "1.5rem" }}>Quarterly check-ins and ongoing admin/navigation support as your needs change after you arrive.</p>
              <ul style={{ listStyle: "none", marginBottom: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <li style={{ fontSize: "0.9rem", color: "var(--muted-foreground)" }}>✓ Includes Tier 1 & Tier 2</li>
                <li style={{ fontSize: "0.9rem", color: "var(--muted-foreground)" }}>✓ Quarterly check-ins (video or audio)</li>
                <li style={{ fontSize: "0.9rem", color: "var(--muted-foreground)" }}>✓ Ongoing email support</li>
                <li style={{ fontSize: "0.9rem", color: "var(--muted-foreground)" }}>✓ Plan updates as needs evolve</li>
                <li style={{ fontSize: "0.9rem", color: "var(--muted-foreground)" }}>✓ Long-term navigation support</li>
              </ul>
              <Link to="/contact" className="btn btn-accent" style={{ width: "100%", textAlign: "center" }}>Book a Consult</Link>
              <p style={{ fontSize: "0.8rem", color: "var(--muted-foreground)", textAlign: "center", marginTop: "0.75rem" }}>Not sure if this is the right tier? <Link to="/contact" style={{ color: "var(--primary)" }}>Book a free 15-min call</Link></p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="cta-banner">
      <div className="container text-center">
        <h2 className="serif cta-title">Ready for long-term peace of mind?</h2>
        <p>Book a free 15-minute consultation to discuss whether Tier 3 is right for your situation.</p>
        <Link to="/contact" className="btn btn-accent btn-lg">Book your free 15-minute consultation</Link>
      </div>
    </section>
  </>
);

export default OngoingCarePartner;
