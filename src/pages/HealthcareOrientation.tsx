import { Link } from "react-router-dom";

const HealthcareOrientation = () => (
  <>
    <section className="page-hero">
      <div className="container">
        <div className="breadcrumb"><Link to="/">Home</Link> / <Link to="/resources">Services</Link> / Tier 1</div>
        <h1>Tier 1: Healthcare Orientation</h1>
        <p>A clear starting point — a single 90-minute working session to review your situation, explain the systems, and map out your next steps.</p>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <div className="service-detail-grid">
          <div>
            <h2 className="serif" style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>What's Included</h2>
            <ul className="check-list" style={{ marginBottom: "2rem" }}>
              <li>System Review & Education — understanding public vs private pathways based on your visa</li>
              <li>Appointment Sequencing — mapping out your first appointments strategically</li>
              <li>Prescription Planning — reviewing your prescription needs and identifying continuity gaps</li>
              <li>Next Steps Action Plan — creating a high-level action plan for your first months</li>
              <li>Administrative overview — understanding what documentation you may need</li>
            </ul>
            <h2 className="serif" style={{ fontSize: "1.75rem", marginBottom: "1rem" }}>Who This Is For</h2>
            <p style={{ color: "var(--muted-foreground)", marginBottom: "1rem" }}>This tier is ideal if you're:</p>
            <ul className="check-list">
              <li>Overwhelmed by what needs to be set up first, second, and third</li>
              <li>Wanting a clear starting point before diving into details</li>
              <li>Not yet sure which country you're moving to</li>
              <li>Looking for a structured overview without ongoing support</li>
            </ul>
          </div>
          <div>
            <div className="tier-card service-sticky-card">
              <div className="tier-label">Tier 1</div>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>Healthcare Orientation</h3>
              <p style={{ color: "var(--muted-foreground)", marginBottom: "1.5rem" }}>A single 90-minute working session to review your situation, explain the systems, and map out your next steps.</p>
              <ul style={{ listStyle: "none", marginBottom: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <li style={{ fontSize: "0.9rem", color: "var(--muted-foreground)" }}>✓ 90-minute video or audio session</li>
                <li style={{ fontSize: "0.9rem", color: "var(--muted-foreground)" }}>✓ System overview for your destination</li>
                <li style={{ fontSize: "0.9rem", color: "var(--muted-foreground)" }}>✓ Personalized next steps action plan</li>
                <li style={{ fontSize: "0.9rem", color: "var(--muted-foreground)" }}>✓ Prescription continuity review</li>
              </ul>
              <Link to="/contact" className="btn btn-accent" style={{ width: "100%", textAlign: "center" }}>Book a Consult</Link>
              <p style={{ fontSize: "0.8rem", color: "var(--muted-foreground)", textAlign: "center", marginTop: "0.75rem" }}>Not sure if this is the right tier? <Link to="/contact" style={{ color: "var(--primary)" }}>Book a free 15-min call</Link></p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section bg-secondary">
      <div className="container" style={{ textAlign: "center" }}>
        <h2 className="serif" style={{ marginBottom: "1rem" }}>Compare All Tiers</h2>
        <p style={{ color: "var(--muted-foreground)", marginBottom: "2rem" }}>See how Tier 1 compares to Guided Setup and Ongoing Care Partner.</p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link to="/services/guided-setup" className="btn btn-outline">Tier 2: Guided Setup →</Link>
          <Link to="/services/ongoing-care-partner" className="btn btn-outline">Tier 3: Ongoing Care Partner →</Link>
        </div>
      </div>
    </section>
  </>
);

export default HealthcareOrientation;
