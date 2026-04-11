import { Link } from "react-router-dom";

const PortugalGuide = () => (
  <>
    <section className="page-hero">
      <div className="container">
        <div className="breadcrumb"><Link to="/">Home</Link> / <Link to="/portugal-vs-spain">Compare</Link> / Portugal Guide</div>
        <h1>Healthcare in Portugal for Americans</h1>
        <p>Healthcare in Portugal for Americans moving from the U.S. — a practical, plain-English guide.</p>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <div className="prose-content">
          <h2 className="serif">Understanding the SNS</h2>
          <p>Portugal's public healthcare system — the Serviço Nacional de Saúde (SNS) — provides universal coverage to residents. As an American relocating to Portugal, you can access the SNS once you establish legal residency and register with a local health center (Centro de Saúde).</p>
          <p>The adjustment is less about quality — and more about expectations. The SNS works differently from U.S. insurance-based thinking, and understanding the structure upfront reduces frustration significantly.</p>
          <h2 className="serif">Public vs Private Healthcare in Portugal</h2>
          <h3>Public Care (SNS)</h3>
          <ul><li>National public system with broad provider access</li><li>Primary care coordinated through assigned health center</li><li>Referral pathways can shape speed of specialist access</li><li>Administrative setup required before full access</li></ul>
          <h3>Private Care</h3>
          <ul><li>Often complements the public system</li><li>Often used during early transition period</li><li>Private options function differently from U.S. PPO-style thinking</li><li>Widely available in Lisbon, Porto, and the Algarve</li></ul>
          <h2 className="serif">Prescription Planning</h2>
          <p>If you manage ongoing prescriptions, planning ahead is essential:</p>
          <ul><li>Confirming medication names — generic equivalents matter</li><li>Refill processes differ from the U.S.</li><li>Planning for a prescription buffer before you arrive</li><li>Reviewing your prescription needs and identifying continuity gaps</li></ul>
          <h2 className="serif">Administrative Sequencing</h2>
          <p>Administrative sequencing matters. Steps include:</p>
          <ul><li>Obtaining your NIF (tax number)</li><li>Registering with the SNS at your local health center</li><li>Getting assigned a primary care doctor (médico de família)</li><li>Understanding what documentation you may need</li><li>Administrative steps vary slightly by region</li></ul>
          <h2 className="serif">For Families with Children</h2>
          <p>Establishing pediatric pathways matters. Key considerations include:</p>
          <ul><li>Registering children with the SNS</li><li>Understanding vaccination record requirements</li><li>Identifying English-speaking pediatricians in your area</li></ul>
          <div style={{ background: "var(--secondary)", borderRadius: "1rem", padding: "2rem", marginTop: "2.5rem", border: "1px solid var(--border)" }}>
            <h3 className="serif" style={{ marginBottom: "0.75rem" }}>Moving to Portugal and want clarity before you land?</h3>
            <p style={{ marginBottom: "1.5rem" }}>Relocating from the U.S. and want clarity before you land? Book a free 15-minute consultation.</p>
            <Link to="/contact" className="btn btn-accent">Book a free 15-minute consultation</Link>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default PortugalGuide;
