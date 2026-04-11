import { Link } from "react-router-dom";

const Terms = () => (
  <>
    <section className="page-hero">
      <div className="container">
        <div className="breadcrumb"><Link to="/">Home</Link> / Terms of Service</div>
        <h1>Terms of Service</h1>
        <p>Please read these terms carefully before using our services.</p>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <div className="prose-content">
          <h2 className="serif">Nature of Services</h2>
          <p>Iberia Health Connect provides healthcare navigation and planning support. We are not a medical practice and do not provide medical advice, diagnoses, or treatment recommendations.</p>
          <h2 className="serif">Your Responsibilities</h2>
          <p>You are responsible for making your own healthcare decisions. Our role is to help you understand systems, processes, and administrative steps — not to make decisions on your behalf.</p>
          <h2 className="serif">Limitation of Liability</h2>
          <p>Our services are informational and navigational in nature. We are not liable for any healthcare outcomes, administrative delays, or decisions made based on our guidance.</p>
          <h2 className="serif">Contact</h2>
          <p>For questions about these terms, please <Link to="/contact" style={{ color: "var(--primary)" }}>contact us</Link>.</p>
        </div>
      </div>
    </section>
  </>
);

export default Terms;
