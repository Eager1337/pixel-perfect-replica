import { Link } from "react-router-dom";

const GuidedSetup = () => (
  <>
    <section className="page-hero" style={{ backgroundImage: "url('/images/portugal sign.webp')", backgroundSize: "cover", backgroundPosition: "center", position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,rgba(8,20,6,0.80) 0%,rgba(45,106,45,0.60) 100%)" }}></div>
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="breadcrumb"><Link to="/">Home</Link> / <Link to="/resources">Services</Link> / Tier 2</div>
        <div style={{ display: "inline-block", background: "rgba(255,255,255,0.2)", padding: "0.25rem 0.75rem", borderRadius: 999, fontSize: "0.8rem", fontWeight: 700, marginBottom: "0.75rem" }}>Most Popular</div>
        <h1>Tier 2: Guided Setup</h1>
        <p>Practical help as you get established — we turn your plan into a step-by-step sequence, track tasks, and provide ongoing email support.</p>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <div className="service-detail-grid">
          <div>
            <h2 className="serif" style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>What's Included</h2>
            <ul className="check-list" style={{ marginBottom: "2rem" }}>
              <li>Everything in Tier 1 (Healthcare Orientation session)</li>
              <li>Administrative Sequencing — turning your plan into a step-by-step setup sequence</li>
              <li>Tracking tasks and timelines so nothing slips</li>
              <li>Email Support Between Sessions — ongoing admin/navigation support by email</li>
              <li>Ongoing adjustments as your situation evolves</li>
              <li>Documents and checklists provided</li>
              <li>Bringing complete medical records guidance</li>
            </ul>
            <h2 className="serif" style={{ fontSize: "1.75rem", marginBottom: "1rem" }}>Who This Is For</h2>
            <p style={{ color: "var(--muted-foreground)", marginBottom: "1rem" }}>This tier is ideal if you:</p>
            <ul className="check-list">
              <li>Want detailed planning, not just an overview</li>
              <li>Need someone to track tasks and timelines with you</li>
              <li>Have prescription complexity or ongoing care needs</li>
              <li>Are moving within the next 3–6 months</li>
              <li>Want email support between sessions</li>
            </ul>
          </div>
          <div>
            <div className="tier-card tier-featured service-sticky-card">
              <div className="most-popular">Most Popular</div>
              <div className="tier-label">Tier 2</div>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>Guided Setup</h3>
              <p style={{ color: "var(--muted-foreground)", marginBottom: "1.5rem" }}>We turn your plan into a step-by-step sequence, track tasks, and provide ongoing email support to get you established.</p>
              <ul style={{ listStyle: "none", marginBottom: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <li style={{ fontSize: "0.9rem", color: "var(--muted-foreground)" }}>✓ Includes Tier 1 orientation session</li>
                <li style={{ fontSize: "0.9rem", color: "var(--muted-foreground)" }}>✓ Step-by-step administrative sequencing</li>
                <li style={{ fontSize: "0.9rem", color: "var(--muted-foreground)" }}>✓ Task tracking & checklists</li>
                <li style={{ fontSize: "0.9rem", color: "var(--muted-foreground)" }}>✓ Ongoing email support between sessions</li>
                <li style={{ fontSize: "0.9rem", color: "var(--muted-foreground)" }}>✓ Documents and guidance materials</li>
              </ul>
              <Link to="/contact" className="btn btn-accent" style={{ width: "100%", textAlign: "center" }}>Book a Consult</Link>
              <p style={{ fontSize: "0.8rem", color: "var(--muted-foreground)", textAlign: "center", marginTop: "0.75rem" }}>Not sure if this is the right tier? <Link to="/contact" style={{ color: "var(--primary)" }}>Book a free 15-min call</Link></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default GuidedSetup;
