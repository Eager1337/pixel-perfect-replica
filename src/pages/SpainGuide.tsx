import { Link } from "react-router-dom";

const SpainGuide = () => (
  <>
    <section className="page-hero" style={{ backgroundImage: "url('/images/plaza de espana sign.webp')", backgroundSize: "cover", backgroundPosition: "center", position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,rgba(28,25,23,0.75) 0%,rgba(92,107,58,0.55) 100%)" }}></div>
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="breadcrumb"><Link to="/">Home</Link> / <Link to="/portugal-vs-spain">Compare</Link> / Spain Guide</div>
        <h1>Healthcare in Spain for Americans</h1>
        <p>Healthcare in Spain for Americans relocating from the U.S. Navigating regional healthcare structures.</p>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <div className="prose-content">
          <h2 className="serif">Understanding Spain's Healthcare System</h2>
          <img src="/images/spain cafe.webp" alt="Woman at a café window in Spain" style={{ width: "100%", borderRadius: "1rem", margin: "1.5rem 0", objectFit: "cover", maxHeight: 320 }} loading="lazy" />
          <p>Spain's public healthcare system, the Sistema Nacional de Salud (SNS), is administered regionally by Spain's 17 autonomous communities. This means the experience can vary significantly depending on where you live, from Catalonia to Andalusia to the Basque Country.</p>
          <p>For Americans, the biggest adjustment is understanding that Spain's system is not insurance-based. Access is tied to residency registration (empadronamiento) and enrollment in the public system.</p>
          <h2 className="serif">Public vs Private Healthcare in Spain</h2>
          <h3>Public Care (SNS)</h3>
          <ul><li>National public system administered regionally</li><li>Primary care coordinated through assigned health center (Centro de Salud)</li><li>Access varies by autonomous community</li><li>Common alongside private enrollment for expats</li></ul>
          <h3>Private Care</h3>
          <ul><li>Widely used by expats, especially during early transition</li><li>Private options function differently from U.S. PPO-style thinking</li><li>Often required for visa applications (non-lucrative visa)</li><li>Strong private networks in Madrid, Barcelona, Valencia, Málaga</li></ul>
          <h2 className="serif">Navigating Regional Structures</h2>
          <p>Spain's regional variation is the most important thing to understand before you move:</p>
          <ul><li>Administrative steps vary slightly by region</li><li>Referral pathways can shape speed of specialist access</li><li>Understanding appointment sequencing reduces stress</li><li>Administrative timing affects continuity</li></ul>
          <h2 className="serif">Prescription Planning in Spain</h2>
          <ul><li>Medication naming differences matter, as generic names differ from U.S. brand names</li><li>Refill processes differ from the U.S.</li><li>Planning for a prescription buffer before you arrive</li><li>Any specific prescription continuity concerns should be addressed early</li></ul>
          <div style={{ background: "var(--secondary)", borderRadius: "1rem", padding: "2rem", marginTop: "2.5rem", border: "1px solid var(--border)" }}>
            <h3 className="serif" style={{ marginBottom: "0.75rem" }}>Moving to Spain and want clarity before you commit?</h3>
            <p style={{ marginBottom: "1.5rem" }}>Book a free 15-minute consultation to discuss your specific region and situation.</p>
            <Link to="/contact" className="btn btn-accent">Book a free 15-minute consultation</Link>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default SpainGuide;
