import { Link, useLocation } from "react-router-dom";

const IMG = "https://sensationalbilly.github.io/Iberiahealthconnect/images";

const Navbar = () => {
  const { pathname } = useLocation();
  const isActive = (path: string) => pathname === path ? "nav-link active" : "nav-link";

  const toggleMenu = () => {
    const menu = document.getElementById("mobileMenu");
    const backdrop = document.getElementById("mobileBackdrop");
    const hamburger = document.getElementById("hamburger");
    if (menu && backdrop && hamburger) {
      const isOpen = menu.classList.contains("open");
      if (isOpen) {
        menu.classList.remove("open");
        backdrop.classList.remove("open");
        hamburger.classList.remove("open");
        document.body.style.cssText = "";
      } else {
        menu.classList.add("open");
        backdrop.classList.add("open");
        hamburger.classList.add("open");
        document.body.style.cssText = `overflow:hidden; position:fixed; width:100%; top:-${window.scrollY}px;`;
      }
    }
  };

  return (
    <header className="navbar" id="navbar">
      <div className="container nav-inner">
        <Link to="/" className="nav-logo">
          <img src={`${IMG}/IBERIA%20HEALTH.webp`} alt="Iberia Health Connect" className="logo-img" />
        </Link>
        <nav className="nav-links" id="navLinks">
          <Link to="/" className={isActive("/")}>Home</Link>
          <div className="nav-dropdown">
            <button className={`nav-link dropdown-btn ${["/services/healthcare-orientation", "/services/guided-setup", "/services/ongoing-care-partner"].includes(pathname) ? "active" : ""}`}>
              Services <span className="chevron">▾</span>
            </button>
            <div className="dropdown-menu">
              <Link to="/services/healthcare-orientation">Tier 1: Healthcare Orientation</Link>
              <Link to="/services/guided-setup">Tier 2: Guided Setup</Link>
              <Link to="/services/ongoing-care-partner">Tier 3: Ongoing Care Partner</Link>
            </div>
          </div>
          <div className="nav-dropdown">
            <button className={`nav-link dropdown-btn ${["/portugal-vs-spain", "/portugal-guide", "/spain-guide"].includes(pathname) ? "active" : ""}`}>
              Compare <span className="chevron">▾</span>
            </button>
            <div className="dropdown-menu">
              <Link to="/portugal-vs-spain">Portugal vs Spain Comparison</Link>
              <Link to="/portugal-guide">Portugal Healthcare Guide</Link>
              <Link to="/spain-guide">Spain Healthcare Guide</Link>
            </div>
          </div>
          <Link to="/faq" className={isActive("/faq")}>FAQ</Link>
          <Link to="/resources" className={isActive("/resources")}>Resources</Link>
          <Link to="/about" className={isActive("/about")}>About</Link>
          <Link to="/contact" className="btn btn-accent nav-cta">Book Consult</Link>
        </nav>
        <button className="hamburger" id="hamburger" aria-label="Toggle menu" onClick={toggleMenu}>
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
