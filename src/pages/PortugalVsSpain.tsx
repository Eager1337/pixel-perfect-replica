import { Link } from "react-router-dom";

const PortugalVsSpain = () => (
  <>
    <section className="page-hero" style={{ backgroundImage: "url('/images/portugal square.webp')", backgroundSize: "cover", backgroundPosition: "center", position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,rgba(8,20,6,0.78) 0%,rgba(45,106,45,0.58) 100%)" }}></div>
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="breadcrumb"><Link to="/">Home</Link> / Compare Countries</div>
        <h1>Portugal vs Spain: Which Is Better for Healthcare?</h1>
        <p>Portugal vs Spain: choosing the right healthcare fit as an American</p>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="prose-content">
          <p>Both Portugal and Spain offer high-quality healthcare systems that are accessible to residents — but they work differently, and the right choice depends on your situation, visa type, and healthcare needs.</p>

          <h2 className="serif">Side-by-Side Comparison</h2>
          <div className="compare-table-wrap">
            <table className="compare-table">
              <thead>
                <tr><th>Factor</th><th>Portugal</th><th>Spain</th></tr>
              </thead>
              <tbody>
                <tr><td>Public System Name</td><td>SNS (Serviço Nacional de Saúde)</td><td>SNS (Sistema Nacional de Salud)</td></tr>
                <tr><td>Structure</td><td>National public system</td><td>National public system administered regionally</td></tr>
                <tr><td>Primary Care</td><td>Coordinated through assigned primary care</td><td>Coordinated through assigned primary care</td></tr>
                <tr><td>Private Role</td><td>Often complements public system</td><td>Common alongside public enrollment</td></tr>
                <tr><td>Prescription Access</td><td>Refill processes differ from the U.S.</td><td>Medication naming differences matter</td></tr>
                <tr><td>Regional Variation</td><td>Less variation nationally</td><td>Significant variation by autonomous community</td></tr>
                <tr><td>English Availability</td><td>Good in Lisbon, Porto, Algarve</td><td>Good in major cities and expat areas</td></tr>
                <tr><td>Administrative Complexity</td><td>Moderate</td><td>Moderate to high (regional variation)</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="serif">Decision Lens: Which Country Fits You?</h2>
          <p>The right choice depends on more than just healthcare. Here are some factors that often tip the decision:</p>

          <h3>Choose Portugal if you...</h3>
          <ul>
            <li>Prefer a more centralized, predictable system</li>
            <li>Are moving to Lisbon, Porto, or the Algarve</li>
            <li>Want a smaller country with easier navigation</li>
            <li>Are on a D7 or NHR visa pathway</li>
          </ul>

          <h3>Choose Spain if you...</h3>
          <ul>
            <li>Have a specific region in mind (Barcelona, Madrid, Valencia)</li>
            <li>Need access to a larger specialist network</li>
            <li>Are comfortable navigating regional administrative differences</li>
            <li>Have family or community ties in a specific area</li>
          </ul>

          <h2 className="serif">What Both Countries Have in Common</h2>
          <p>Both Portugal and Spain offer:</p>
          <ul>
            <li>High-quality medical care at significantly lower cost than the U.S.</li>
            <li>A mix of public and private options</li>
            <li>Prescription systems that differ from U.S. pharmacy norms</li>
            <li>Administrative steps that take time and planning</li>
            <li>A learning curve for Americans used to U.S. insurance-based thinking</li>
          </ul>

          <div style={{ background: "var(--secondary)", borderRadius: "1rem", padding: "2rem", marginTop: "2.5rem", border: "1px solid var(--border)" }}>
            <h3 className="serif" style={{ marginBottom: "0.75rem" }}>Need practical healthcare realities to decide definitively?</h3>
            <p style={{ marginBottom: "1.5rem" }}>Those undecided between Portugal and Spain often benefit most from a structured conversation about their specific situation.</p>
            <Link to="/contact" className="btn btn-accent">Book a free 15-minute consultation</Link>
          </div>
        </div>

        <div className="guide-cards-grid">
          <Link to="/portugal-guide" className="quick-card">
            <h3>Portugal Guide <span className="arrow">→</span></h3>
            <p>Explore full Portugal breakdown</p>
          </Link>
          <Link to="/spain-guide" className="quick-card">
            <h3>Spain Guide <span className="arrow">→</span></h3>
            <p>Explore full Spain breakdown</p>
          </Link>
        </div>
      </div>
    </section>
  </>
);

export default PortugalVsSpain;
