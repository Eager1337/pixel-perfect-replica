import { Link } from "react-router-dom";

const Privacy = () => (
  <>
    <section className="page-hero">
      <div className="container">
        <div className="breadcrumb"><Link to="/">Home</Link> / Privacy Policy</div>
        <h1>Privacy Policy</h1>
        <p>Your privacy matters to us. Here's how we handle your information.</p>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <div className="prose-content">
          <h2 className="serif">Information We Collect</h2>
          <p>We collect information you voluntarily provide when booking a consultation, including your name, email address, and any details you share about your healthcare planning needs.</p>
          <h2 className="serif">How We Use Your Information</h2>
          <p>Your information is used solely to provide healthcare navigation services, schedule consultations, and communicate with you about your planning needs. We do not sell or share your personal information with third parties.</p>
          <h2 className="serif">Data Security</h2>
          <p>We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure.</p>
          <h2 className="serif">Contact Us</h2>
          <p>If you have questions about this privacy policy, please <Link to="/contact" style={{ color: "var(--primary)" }}>contact us</Link>.</p>
        </div>
      </div>
    </section>
  </>
);

export default Privacy;
