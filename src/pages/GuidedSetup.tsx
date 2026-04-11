import { Link } from "react-router-dom";

const GuidedSetup = () => (
  <>
    <section className="page-hero">
      <div className="container">
        <div className="breadcrumb"><Link to="/">Home</Link> / <Link to="/resources">Services</Link> / Tier 2</div>
        <h1>Tier 2: Guided Setup</h1>
        <p>We turn your plan into a step-by-step sequence, track tasks, and provide ongoing email support to get you established.</p>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <div className="service-detail-grid">
          <div>
            <h2 className="serif" style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>What's Included</h2>
            <ul className="check-list" style={{ marginBottom: "2rem" }}>
              <li>Everything in Tier 1 (90-minute orientation session)</li>
              <li>Step-by-step administrative sequencing — what to do first, second, and third</li>
              <li>Task tracking & checklists to keep you organized</li>
              <li>Ongoing email support during your setup phase</li>
              <li>Prescription continuity planning with specific action steps</li>
            </ul>
            <h2 className="serif" style={{ fontSize: "1.75rem", marginBottom: "1rem" }}>Who This Is For</h2>
            <p style={{ color: "var(--muted-foreground)", marginBottom: "1rem" }}>This tier is ideal if you're:</p>
            <ul className="check-list">
              <li>Ready to commit to a country and want structured execution support</li>
              <li>Managing multiple administrative steps and want accountability</li>
              <li>Dealing with prescription continuity that requires specific planning</li>
              <li>A family with children who need pediatric pathway setup</li>
            </ul>
          </div>
          <div>
            <div className="tier-card tier-featured service-sticky-card">
              <div className="most-popular">Most Popular</div>
              <div className="tier-label">Tier 2</div>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>Guided Setup</h3>
              <p style={{ color: "var(--muted-foreground)", marginBottom: "1.5rem" }}>Step-by-step execution support with ongoing email communication.</p>
              <ul style={{ listStyle: "none", marginBottom: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <li style={{ fontSize: "0.9rem", color: "var(--muted-foreground)" }}>✓ Everything in Tier 1</li>
                <li style={{ fontSize: "0.9rem", color: "var(--muted-foreground)" }}>✓ Administrative sequencing</li>
                <li style={{ fontSize: "0.9rem", color: "var(--muted-foreground)" }}>✓ Task tracking & checklists</li>
                <li style={{ fontSize: "0.9rem", color: "var(--muted-foreground)" }}>✓ Ongoing email support</li>
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
        <p style={{ color: "var(--muted-foreground)", marginBottom: "2rem" }}>See how Tier 2 compares to Healthcare Orientation and Ongoing Care Partner.</p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link to="/services/healthcare-orientation" className="btn btn-outline">Tier 1: Healthcare Orientation →</Link>
          <Link to="/services/ongoing-care-partner" className="btn btn-outline">Tier 3: Ongoing Care Partner →</Link>
        </div>
      </div>
    </section>
  </>
);

export default GuidedSetup;
