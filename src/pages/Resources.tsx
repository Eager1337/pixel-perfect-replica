import { Link } from "react-router-dom";

const Resources = () => (
  <>
    <section className="page-hero" style={{ backgroundImage: "url('/images/portugal square.webp')", backgroundSize: "cover", backgroundPosition: "center", position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,rgba(28,25,23,0.75) 0%,rgba(92,107,58,0.55) 100%)" }}></div>
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="breadcrumb"><Link to="/">Home</Link> / Resources</div>
        <h1>Healthcare Planning Resources</h1>
        <p>Practical, plain-English guides designed specifically for Americans moving to Portugal or Spain.</p>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="serif">All Resources</h2>
          <p className="text-muted">Articles provide education, but planning requires personalization. Use these guides as a starting point.</p>
        </div>

        <div className="resources-grid">
          <Link to="/portugal-vs-spain" className="resource-card">
            <div className="resource-tag">Comparison</div>
            <h4>Portugal vs Spain: Which Is Better for Healthcare?</h4>
            <p>A side-by-side breakdown to help you choose the right healthcare fit as an American.</p>
            <span className="resource-link">Read guide →</span>
          </Link>
          <Link to="/portugal-guide" className="resource-card">
            <div className="resource-tag">Portugal</div>
            <h4>Healthcare in Portugal for Americans</h4>
            <p>Understanding the SNS, private care, prescription planning, and administrative sequencing.</p>
            <span className="resource-link">Read guide →</span>
          </Link>
          <Link to="/spain-guide" className="resource-card">
            <div className="resource-tag">Spain</div>
            <h4>Healthcare in Spain for Americans</h4>
            <p>Navigating regional healthcare structures, public vs private, and prescription differences.</p>
            <span className="resource-link">Read guide →</span>
          </Link>
          <div className="resource-card">
            <div className="resource-tag">Planning</div>
            <h4>Prescription Continuity Planning</h4>
            <p>How to prepare for prescription continuity when moving from the U.S. to Portugal or Spain.</p>
            <Link to="/contact" className="resource-link">Book a consult to discuss →</Link>
          </div>
          <div className="resource-card">
            <div className="resource-tag">Families</div>
            <h4>Family Considerations</h4>
            <p>Establishing pediatric pathways, vaccination records, and continuity of care for families with children.</p>
            <Link to="/contact" className="resource-link">Book a consult to discuss →</Link>
          </div>
          <div className="resource-card">
            <div className="resource-tag">LGBTQ+</div>
            <h4>LGBTQ+ Healthcare Planning</h4>
            <p>Extra attention to continuity of care, documentation, and gender-affirming care pathways.</p>
            <Link to="/contact" className="resource-link">Book a consult to discuss →</Link>
          </div>
          <Link to="/faq" className="resource-card">
            <div className="resource-tag">FAQ</div>
            <h4>Frequently Asked Questions</h4>
            <p>Everything you need to know about healthcare planning for Portugal or Spain.</p>
            <span className="resource-link">Read FAQ →</span>
          </Link>
          <div className="resource-card">
            <div className="resource-tag">Administrative</div>
            <h4>Administrative Sequencing Guide</h4>
            <p>What to set up first, second, and third to ensure proper healthcare access after you arrive.</p>
            <Link to="/contact" className="resource-link">Book a consult to discuss →</Link>
          </div>
          <div className="resource-card">
            <div className="resource-tag">Decision</div>
            <h4>Decision Paralysis: How to Choose</h4>
            <p>Still undecided between Portugal and Spain? A structured approach to making the right call.</p>
            <Link to="/contact" className="resource-link">Book a consult to discuss →</Link>
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: "3rem", padding: "2.5rem", background: "var(--secondary)", borderRadius: "1.5rem", border: "1px solid var(--border)" }}>
          <h3 className="serif" style={{ marginBottom: "0.75rem" }}>Articles provide education, but planning requires personalization.</h3>
          <p style={{ color: "var(--muted-foreground)", marginBottom: "1.5rem" }}>Book a free 15-minute consultation to discuss your specific situation.</p>
          <Link to="/contact" className="btn btn-accent btn-lg">Book a free consultation</Link>
        </div>
      </div>
    </section>
  </>
);

export default Resources;
