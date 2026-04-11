import { Link } from "react-router-dom";

const OngoingCarePartner = () => (
  <>
    <section className="page-hero">
      <div className="container">
        <div className="breadcrumb"><Link to="/">Home</Link> / <Link to="/resources">Services</Link> / Tier 3</div>
        <h1>Tier 3: Ongoing Care Partner</h1>
        <p>Quarterly check-ins and ongoing admin/navigation support as your needs change after you arrive.</p>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <div className="service-detail-grid">
          <div>
            <h2 className="serif" style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>What's Included</h2>
            <ul className="check-list" style={{ marginBottom: "2rem" }}>
              <li>Everything in Tier 1 & 2</li>
              <li>Quarterly check-in sessions to review and adjust your plan</li>
              <li>Ongoing navigation support as your healthcare needs evolve</li>
              <li>Administrative support for new situations (specialist referrals, prescription changes, etc.)</li>
              <li>Priority email support with faster response times</li>
            </ul>
            <h2 className="serif" style={{ fontSize: "1.75rem", marginBottom: "1rem" }}>Who This Is For</h2>
            <p style={{ color: "var(--muted-foreground)", marginBottom: "1rem" }}>This tier is ideal if you're:</p>
            <ul className="check-list">
              <li>Already in Portugal or Spain and want ongoing support</li>
              <li>Managing complex healthcare needs that change over time</li>
              <li>A family that wants continued guidance as children grow</li>
              <li>Someone who values having a trusted partner for healthcare questions</li>
            </ul>
          </div>
          <div>
            <div className="tier-card service-sticky-card">
              <div className="tier-label">Tier 3</div>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>Ongoing Care Partner</h3>
              <p style={{ color: "var(--muted-foreground)", marginBottom: "1.5rem" }}>Long-term healthcare navigation partnership with quarterly check-ins.</p>
              <ul style={{ listStyle: "none", marginBottom: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <li style={{ fontSize: "0.9rem", color: "var(--muted-foreground)" }}>✓ Everything in Tier 1 & 2</li>
                <li style={{ fontSize: "0.9rem", color: "var(--muted-foreground)" }}>✓ Quarterly check-ins</li>
                <li style={{ fontSize: "0.9rem", color: "var(--muted-foreground)" }}>✓ Long-term navigation support</li>
                <li style={{ fontSize: "0.9rem", color: "var(--muted-foreground)" }}>✓ Priority email support</li>
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
        <p style={{ color: "var(--muted-foreground)", marginBottom: "2rem" }}>See how Tier 3 compares to Healthcare Orientation and Guided Setup.</p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link to="/services/healthcare-orientation" className="btn btn-outline">Tier 1: Healthcare Orientation →</Link>
          <Link to="/services/guided-setup" className="btn btn-outline">Tier 2: Guided Setup →</Link>
        </div>
      </div>
    </section>
  </>
);

export default OngoingCarePartner;
