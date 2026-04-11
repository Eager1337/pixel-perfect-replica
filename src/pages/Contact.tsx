import { Link } from "react-router-dom";

const Contact = () => (
  <>
    <section className="page-hero">
      <div className="container">
        <div className="breadcrumb"><Link to="/">Home</Link> / Book a Consultation</div>
        <h1>Book a Free 15-Minute Consultation</h1>
        <p>Pick a date and time that works for you. We'll confirm your appointment within 24 hours.</p>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="booking-info-strip">
          <div className="booking-info-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            <span>15 minutes</span>
          </div>
          <div className="booking-info-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            <span>Mon, Thu & Fri</span>
          </div>
          <div className="booking-info-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            <span>2:00 PM – 8:00 PM Portugal Time</span>
          </div>
          <div className="booking-info-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 10l4.553-2.069A1 1 0 0 1 21 8.82v6.36a1 1 0 0 1-1.447.89L15 14"/><rect x="1" y="6" width="14" height="12" rx="2"/></svg>
            <span>Zoom video or audio-only</span>
          </div>
          <div className="booking-info-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            <span>Host-approved bookings</span>
          </div>
        </div>

        <div className="calendly-wrap">
          <div className="calendly-placeholder">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: "var(--primary)", marginBottom: "1rem" }}><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            <h3>Booking Calendar Coming Soon</h3>
            <p>Our scheduling system is being set up. In the meantime, reach out directly and we'll get you booked in.</p>
            <a href="mailto:hello@iberiahealthconnect" className="btn btn-accent" style={{ marginTop: "1rem" }}>Email us to book</a>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Contact;
