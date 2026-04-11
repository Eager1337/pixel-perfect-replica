import { Link } from "react-router-dom";

const Home = () => (
  <>
    {/* HERO */}
    <section className="olive-hero" id="hero">
      <div className="olive-hero-bg" aria-hidden="true">
        <img src="/images/olive tree granada.webp" alt="" className="olive-hero-img" fetchPriority="high" />
        <div className="olive-hero-overlay"></div>
      </div>
      <div className="olive-hero-content">
        <h1 className="olive-hero-heading">
          Healthcare Help<br />for Americans<br />Moving to Portugal<br />or Spain
        </h1>
        <div className="olive-hero-card">
          <p>Relocating from the U.S. to Portugal or Spain? We help Americans understand healthcare systems, plan prescriptions, and avoid gaps in care.</p>
        </div>
        <Link to="/contact" className="olive-hero-cta">Book a Free 15-Minute Consult</Link>
      </div>
    </section>

    {/* QUICK LINKS */}
    <section className="quick-links">
      <div className="container">
        <div className="quick-grid">
          <Link to="/portugal-vs-spain" className="quick-card reveal-up" style={{ animationDelay: ".05s" }}>
            <div className="quick-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--primary)" }}><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M14 3h7v7"/><path d="M10 14 21 3"/></svg>
            </div>
            <div>
              <h3>Compare Countries <span className="arrow">→</span></h3>
              <p>Which system fits your needs?</p>
            </div>
          </Link>
          <Link to="/portugal-guide" className="quick-card reveal-up" style={{ animationDelay: ".15s" }}>
            <div className="quick-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--primary)" }}><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
            </div>
            <div>
              <h3>Portugal Guide <span className="arrow">→</span></h3>
              <p>Understanding the SNS and private care</p>
            </div>
          </Link>
          <Link to="/spain-guide" className="quick-card reveal-up" style={{ animationDelay: ".25s" }}>
            <div className="quick-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--primary)" }}><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            </div>
            <div>
              <h3>Spain Guide <span className="arrow">→</span></h3>
              <p>Navigating regional healthcare structures</p>
            </div>
          </Link>
        </div>
      </div>
    </section>

    {/* OUR APPROACH */}
    <section className="section" id="about-section">
      <div className="container two-col">
        <div className="col reveal-right">
          <div className="section-eyebrow">Our Approach</div>
          <h2 className="serif">You don't have to figure this out alone.</h2>
          <p className="text-muted">We help you navigate the process and stay organized. You remain in control of your choices and communications.</p>
          <ul className="check-list">
            {["Understand public vs private systems", "Plan your first 30–90 days strategically", "Prepare for prescription continuity", "Avoid common administrative pitfalls"].map((item) => (
              <li key={item}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--primary)", flexShrink: 0, marginTop: "2px" }}><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                {item}
              </li>
            ))}
          </ul>
          <Link to="/contact" className="btn btn-accent mt-6">Get expert guidance →</Link>
        </div>
        <div className="col reveal-left">
          <div className="img-card">
            <img src="/images/couple market portugal.webp" alt="Two people at a Lisbon market" className="rounded-img" loading="lazy" />
            <div className="expert-badge">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              Expert-backed
            </div>
            <div className="float-badge">
              <div className="float-badge-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent)" }}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              </div>
              <p className="badge-title">Peace of mind</p>
              <p className="badge-sub">Focus on enjoying your move, not navigating bureaucracy.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* EXPERTISE BANNER */}
    <section className="expertise-banner">
      <div className="expertise-bg">
        <img src="/images/portugal trees.webp" alt="Portuguese landscape" className="expertise-img" loading="lazy" />
        <div className="expertise-overlay"></div>
      </div>
      <div className="container expertise-content">
        <div className="expertise-text reveal-up">
          <div className="section-eyebrow light">Healthcare Expertise</div>
          <h2 className="serif expertise-title">Backed by deep knowledge of both systems.</h2>
          <p>We've navigated the U.S., Portuguese, and Spanish healthcare systems firsthand. That experience shapes every plan we build — so you don't have to learn the hard way.</p>
          <div className="expertise-pills">
            {["SNS Portugal", "SNS Spain", "Prescription Continuity", "Visa Health Requirements", "LGBTQ+ Care"].map((pill) => (
              <span className="pill" key={pill}>{pill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* SERVICES TIERS */}
    <section className="section bg-secondary" id="services">
      <div className="container">
        <div className="section-header reveal-up">
          <div className="section-eyebrow">Services</div>
          <h2 className="serif">Choose the level of support</h2>
          <p className="text-muted">From a single orientation session to ongoing partnership, choose what fits your comfort level.</p>
        </div>
        <div className="tiers-grid">
          <div className="tier-card reveal-up" style={{ animationDelay: ".05s" }}>
            <div className="tier-num">01</div>
            <div className="tier-label">Tier 1</div>
            <h3>Healthcare Orientation</h3>
            <p>A single 90-minute working session to review your situation, explain the systems, and map out your next steps.</p>
            <ul className="tier-features">
              <li>System overview for your destination</li>
              <li>Personalized next steps action plan</li>
              <li>Prescription continuity review</li>
            </ul>
            <Link to="/services/healthcare-orientation" className="btn btn-outline mt-auto">View Details</Link>
          </div>
          <div className="tier-card tier-featured reveal-up" style={{ animationDelay: ".15s" }}>
            <div className="most-popular">Most Popular</div>
            <div className="tier-num accent">02</div>
            <div className="tier-label">Tier 2</div>
            <h3>Guided Setup</h3>
            <p>We turn your plan into a step-by-step sequence, track tasks, and provide ongoing email support to get you established.</p>
            <ul className="tier-features">
              <li>Everything in Tier 1</li>
              <li>Step-by-step administrative sequencing</li>
              <li>Task tracking & checklists</li>
              <li>Ongoing email support</li>
            </ul>
            <Link to="/services/guided-setup" className="btn btn-accent mt-auto">View Details</Link>
          </div>
          <div className="tier-card reveal-up" style={{ animationDelay: ".25s" }}>
            <div className="tier-num">03</div>
            <div className="tier-label">Tier 3</div>
            <h3>Ongoing Care Partner</h3>
            <p>Quarterly check-ins and ongoing admin/navigation support as your needs change after you arrive.</p>
            <ul className="tier-features">
              <li>Everything in Tier 1 & 2</li>
              <li>Quarterly check-ins</li>
              <li>Long-term navigation support</li>
            </ul>
            <Link to="/services/ongoing-care-partner" className="btn btn-outline mt-auto">View Details</Link>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link to="/contact" className="btn btn-ghost">Not sure which tier? Book a free 15-min call →</Link>
        </div>
      </div>
    </section>

    {/* HOW IT WORKS */}
    <section className="section" id="how">
      <div className="container">
        <div className="section-header reveal-up">
          <div className="section-eyebrow">Process</div>
          <h2 className="serif">How It Works</h2>
          <p className="text-muted">Three simple steps from confused to confident.</p>
        </div>
        <div className="steps-grid">
          <div className="step reveal-up" style={{ animationDelay: ".05s" }}>
            <div className="step-num">1</div>
            <div className="step-connector"></div>
            <h4>Book a Free 15-Min Call</h4>
            <p>We discuss your situation, timeline, and what you need most.</p>
          </div>
          <div className="step reveal-up" style={{ animationDelay: ".15s" }}>
            <div className="step-num">2</div>
            <div className="step-connector"></div>
            <h4>Choose Your Tier</h4>
            <p>Select the level of support that fits your comfort level and complexity.</p>
          </div>
          <div className="step reveal-up" style={{ animationDelay: ".25s" }}>
            <div className="step-num">3</div>
            <h4>Execute with Clarity</h4>
            <p>Move forward with a structured plan, knowing exactly what to do and when.</p>
          </div>
        </div>
      </div>
    </section>

    {/* WHO WE HELP */}
    <section className="section bg-secondary">
      <div className="container">
        <div className="section-header reveal-up">
          <div className="section-eyebrow">Who We Help</div>
          <h2 className="serif">Built for your situation</h2>
          <p className="text-muted">Healthcare planning looks different depending on your needs. We work with a range of clients.</p>
        </div>
        <div className="who-grid">
          {[
            { img: "retired couple portugal.webp", alt: "Retired couple in Portugal", title: "Retirees relocating full-time", desc: "Broad provider access and understanding public enrollment timelines." },
            { img: "family portugal.webp", alt: "Family in Portugal", title: "Families with children", desc: "Establishing pediatric pathways and continuity of care documentation." },
            { img: "warm paperwork.webp", alt: "Person reviewing documents", title: "Managing ongoing prescriptions", desc: "Confirming medication names, generic equivalents, and refill processes." },
            { img: "couple spain.webp", alt: "LGBTQ+ couple in Spain", title: "LGBTQ+ individuals & couples", desc: "Extra attention to continuity of care and documentation needs." },
          ].map((card, i) => (
            <div className="who-card reveal-up" style={{ animationDelay: `${0.05 + i * 0.05}s` }} key={card.title}>
              <img src={`/images/${card.img}`} alt={card.alt} className="who-card-img" loading="lazy" />
              <h4>{card.title}</h4>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* PHOTO MOSAIC */}
    <section className="section">
      <div className="container">
        <div className="section-header reveal-up">
          <div className="section-eyebrow">Life in Iberia</div>
          <h2 className="serif">Your new home, beautifully waiting</h2>
          <p className="text-muted">From Lisbon trams to Granada olive groves — this is the life you're moving toward.</p>
        </div>
        <div className="photo-mosaic">
          {[
            { img: "rainbow umbrellas portugal.webp", alt: "Rainbow umbrellas in Portugal", label: "Lisbon, Portugal", tall: true },
            { img: "portugal trams.webp", alt: "Yellow trams in Lisbon", label: "Iconic Lisbon Trams" },
            { img: "Spain yellow alley.webp", alt: "Yellow alley in Spain", label: "Andalusia, Spain" },
            { img: "portugal square.webp", alt: "Praça do Comércio at golden hour", label: "Praça do Comércio", tall: true },
            { img: "portugal trees.webp", alt: "Portuguese landscape", label: "Portuguese Countryside" },
            { img: "spain dog walk.webp", alt: "Barcelona Gothic Quarter", label: "Barcelona, Spain" },
          ].map((tile, i) => (
            <div className={`photo-tile${tile.tall ? " photo-tile--tall" : ""} reveal-up`} style={{ animationDelay: `${0.05 + i * 0.05}s` }} key={tile.label}>
              <img src={`/images/${tile.img}`} alt={tile.alt} loading="lazy" />
              <div className="photo-tile-label">{tile.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* COMMUNITY */}
    <section className="section bg-secondary">
      <div className="container">
        <div className="section-header reveal-up">
          <div className="section-eyebrow">Our Community</div>
          <h2 className="serif">People just like you, already there</h2>
          <p className="text-muted">Americans from all walks of life have made the move. We help them navigate healthcare with confidence.</p>
        </div>
        <div className="community-grid">
          {[
            { img: "retired couple portugal.webp", alt: "Retired couple enjoying Portugal", tag: "Retirees", desc: "Finding peace and quality care in Portugal's SNS system." },
            { img: "couple spain.webp", alt: "LGBTQ+ couple in Spain", tag: "LGBTQ+ Couples", desc: "Navigating care continuity with confidence and support." },
            { img: "family at beach portugal.webp", alt: "Family on a Portuguese beach", tag: "Families", desc: "Establishing pediatric pathways before the first day of school." },
            { img: "young people cafe portugal.webp", alt: "Young people at a Lisbon café", tag: "Young Professionals", desc: "Planning prescriptions and private care from day one." },
            { img: "student spain.webp", alt: "Student in a Spanish plaza", tag: "Individual Relocators", desc: "Getting clarity on the system before the paperwork piles up." },
            { img: "young people portugal.webp", alt: "Young people in Portugal", tag: "Digital Nomads", desc: "Understanding visa health requirements and private options." },
          ].map((card, i) => (
            <div className="community-card reveal-up" style={{ animationDelay: `${0.05 + i * 0.07}s` }} key={card.tag}>
              <img src={`/images/${card.img}`} alt={card.alt} loading="lazy" />
              <div className="community-card-body">
                <span className="community-tag">{card.tag}</span>
                <p>{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA BANNER */}
    <section className="cta-banner">
      <div className="cta-bg-pattern"></div>
      <div className="container text-center">
        <div className="reveal-up">
          <div className="section-eyebrow light">Get Started</div>
          <h2 className="serif cta-title">Let's Make Healthcare the Calm Part of Your Move</h2>
          <p>Healthcare planning doesn't need to feel overwhelming. Book a call to get clarity.</p>
          <Link to="/contact" className="btn btn-accent btn-lg pulse-glow">Book a free 15-minute consultation</Link>
        </div>
      </div>
    </section>
  </>
);

export default Home;
