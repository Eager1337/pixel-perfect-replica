import { Link } from "react-router-dom";

const IMG = "https://sensationalbilly.github.io/Iberiahealthconnect/images";

const Footer = () => (
  <footer className="footer">
    <div className="container footer-inner">
      <div className="footer-brand">
        <img src={`${IMG}/Logo%20PNG%20(1).webp`} alt="Iberia Health Connect" className="footer-logo" />
        <p>Healthcare navigation and planning support for Americans relocating to Portugal or Spain.</p>
        <div className="footer-tagline">Calm. Structured. Empathetic.</div>
      </div>
      <div className="footer-links">
        <div className="footer-col">
          <h5>Services</h5>
          <Link to="/services/healthcare-orientation">Healthcare Orientation</Link>
          <Link to="/services/guided-setup">Guided Setup</Link>
          <Link to="/services/ongoing-care-partner">Ongoing Care Partner</Link>
        </div>
        <div className="footer-col">
          <h5>Resources</h5>
          <Link to="/portugal-guide">Portugal Guide</Link>
          <Link to="/spain-guide">Spain Guide</Link>
          <Link to="/portugal-vs-spain">Compare Countries</Link>
          <Link to="/faq">FAQ</Link>
        </div>
        <div className="footer-col">
          <h5>Company</h5>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <p>© 2025 Iberia Health Connect. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
