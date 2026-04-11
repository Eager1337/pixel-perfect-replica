import { Link } from "react-router-dom";

const IMG = "https://sensationalbilly.github.io/Iberiahealthconnect/images";

const MobileMenu = () => {
  const closeMenu = () => {
    const menu = document.getElementById("mobileMenu");
    const backdrop = document.getElementById("mobileBackdrop");
    const hamburger = document.getElementById("hamburger");
    if (menu) menu.classList.remove("open");
    if (backdrop) backdrop.classList.remove("open");
    if (hamburger) hamburger.classList.remove("open");
    document.body.style.cssText = "";
  };

  return (
    <div className="mobile-menu" id="mobileMenu" role="dialog" aria-label="Navigation menu">
      <div className="mobile-menu-header">
        <img src={`${IMG}/IBERIA%20HEALTH.webp`} alt="Iberia Health Connect" className="mobile-menu-logo" />
        <button className="mobile-menu-close" onClick={closeMenu} aria-label="Close menu">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
      </div>
      <div className="mobile-menu-body">
        <div className="mobile-menu-cta">
          <Link to="/contact" className="btn btn-accent btn-block" onClick={closeMenu}>Book a Free Consult</Link>
        </div>
        <Link to="/" className="mobile-link" onClick={closeMenu}>Home</Link>
        <div className="mobile-section-label">Services</div>
        <Link to="/services/healthcare-orientation" className="mobile-link" onClick={closeMenu}>Tier 1: Healthcare Orientation</Link>
        <Link to="/services/guided-setup" className="mobile-link" onClick={closeMenu}>Tier 2: Guided Setup</Link>
        <Link to="/services/ongoing-care-partner" className="mobile-link" onClick={closeMenu}>Tier 3: Ongoing Care Partner</Link>
        <div className="mobile-section-label">Compare</div>
        <Link to="/portugal-vs-spain" className="mobile-link" onClick={closeMenu}>Portugal vs Spain</Link>
        <Link to="/portugal-guide" className="mobile-link" onClick={closeMenu}>Portugal Guide</Link>
        <Link to="/spain-guide" className="mobile-link" onClick={closeMenu}>Spain Guide</Link>
        <div className="mobile-section-label">More</div>
        <Link to="/faq" className="mobile-link" onClick={closeMenu}>FAQ</Link>
        <Link to="/resources" className="mobile-link" onClick={closeMenu}>Resources</Link>
        <Link to="/about" className="mobile-link" onClick={closeMenu}>About</Link>
        <Link to="/contact" className="mobile-link" onClick={closeMenu}>Contact</Link>
      </div>
    </div>
  );
};

export default MobileMenu;
