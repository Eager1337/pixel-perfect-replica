import { Link } from "react-router-dom";
import { useState } from "react";

const faqItems = [
  { q: "How does the free 15-minute consultation work?", a: "We schedule a short call to discuss your situation, timeline, and what you need most. There's no obligation. It's simply a chance to see if we're a good fit and clarify your options before committing to any tier." },
  { q: "Do you provide medical advice?", a: "No. We provide healthcare navigation and planning support, helping you understand systems, sequences, and administrative steps. We do not diagnose, prescribe, or provide clinical guidance. We help you understand how to access care, not what care to receive." },
  { q: "Do I have to disclose personal medical information?", a: "No. Share only what you're comfortable sharing about prescriptions or care continuity. We can work effectively with general information about your situation without requiring detailed medical history." },
  { q: "Do you work with LGBTQ+ clients?", a: "Yes. We work with LGBTQ+ individuals and couples, including trans adults and parents of transgender youth. We provide extra attention to continuity of care, documentation needs, and navigating systems that may require additional planning." },
  { q: "How early should I start planning healthcare before moving?", a: "Ideally 3 to 6 months before your move. Administrative timing affects continuity, and some steps, like prescription buffers and documentation gathering, take time. The earlier you start, the smoother the transition." },
  { q: "Do Americans need private health insurance in Portugal or Spain?", a: "It depends on your visa type and situation. Both countries have public healthcare systems that residents can access, but private insurance is often used during the early transition period and is sometimes required for visa applications. We help you understand what applies to your specific situation." },
  { q: "Can you help plan continuity of gender-affirming care?", a: "Yes. This is an area where planning ahead matters significantly. We help identify pathways, documentation requirements, and prescription continuity strategies specific to gender-affirming care in Portugal and Spain." },
  { q: "Can we meet by audio only?", a: "Absolutely. Prefer not to be on video? Audio-only is always available. Just let us know when you book." },
  { q: "What's the difference between public and private healthcare in Portugal and Spain?", a: "Both countries have national public systems (SNS in Portugal, SNS in Spain) that provide broad coverage, but access for new residents requires registration and can take time. Private care is widely available, often faster, and commonly used alongside the public system, especially during the early transition. The adjustment is less about quality and more about expectations and process." },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <section className="page-hero" style={{ backgroundImage: "url('/images/warm paperwork.webp')", backgroundSize: "cover", backgroundPosition: "center top", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,rgba(28,25,23,0.78) 0%,rgba(92,107,58,0.55) 100%)" }}></div>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="breadcrumb"><Link to="/">Home</Link> / FAQ</div>
          <h1>Frequently Asked Questions</h1>
          <p>Everything you need to know about healthcare planning for Portugal or Spain.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="faq-list">
            {faqItems.map((item, i) => (
              <div className={`faq-item${openIndex === i ? " open" : ""}`} key={i}>
                <button className="faq-question" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
                  {item.q} <span className="faq-icon">{openIndex === i ? "−" : "+"}</span>
                </button>
                <div className="faq-answer" style={{ maxHeight: openIndex === i ? "500px" : undefined }}>
                  <div className="faq-answer-inner">{item.a}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <p style={{ color: "var(--muted-foreground)", marginBottom: "1.5rem" }}>Still have questions?</p>
            <Link to="/contact" className="btn btn-accent btn-lg">Book a free consultation to clarify</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
