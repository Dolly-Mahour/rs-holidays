"use client";

import { useState } from "react";
import "@/src/styles/user-dashboard.css";
import "@/src/styles/user-dashboard-subpages.css";

const faqs = [
  {
    q: "How do I cancel or modify my booking?",
    a: "You can cancel or modify your booking from My Bookings page up to 48 hours before the trip. Cancellations made within 48 hours may incur a fee. Contact our support team for assistance.",
  },
  {
    q: "What is the refund policy?",
    a: "Refunds are processed within 5-7 business days to your original payment method. The refund amount depends on when the cancellation is made relative to the travel date.",
  },
  {
    q: "How can I get a custom travel itinerary?",
    a: "Our travel experts can create a fully customized itinerary for you. Click the 'Get Custom Quote' button above or contact us via chat/email.",
  },
  {
    q: "Are visa assistance services available?",
    a: "Yes! We offer visa assistance for all international packages. Our team will guide you through the documentation and application process.",
  },
  {
    q: "Can I add travel insurance to my booking?",
    a: "Travel insurance can be added during booking or by contacting our support team within 24 hours of booking confirmation.",
  },
];

const tickets = [
  {
    id: "TKT-2901",
    subject: "Refund status for Booking RS09834",
    status: "Resolved",
    date: "10 Aug 2025",
    priority: "High",
  },
  {
    id: "TKT-2745",
    subject: "Room upgrade request – Bali Escape",
    status: "In Progress",
    date: "15 Sep 2025",
    priority: "Medium",
  },
];

export default function SupportPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [msgSent, setMsgSent] = useState(false);

  return (
    <>
      <section className="dashboard-heading">
        <div>
          <h1>Help &amp; Support</h1>
          <p>We&apos;re here to help you 24/7. Reach out anytime.</p>
        </div>
        <button className="explore-button">💬 Live Chat</button>
      </section>

      {/* Contact Cards */}
      <div className="support-channels">
        <div className="support-channel-card" style={{ background: "linear-gradient(135deg,#fff6f7,#fff0ff)" }}>
          <div className="channel-icon" style={{ background: "linear-gradient(135deg,#e30613,#ff4b67)" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.65 3.52 2 2 0 0 1 3.62 1.34h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
          </div>
          <h4>Call Us</h4>
          <p>+91 98765 00000</p>
          <span>Mon–Sat, 9 AM – 8 PM</span>
        </div>
        <div className="support-channel-card" style={{ background: "linear-gradient(135deg,#f5fff9,#e8fff3)" }}>
          <div className="channel-icon" style={{ background: "linear-gradient(135deg,#0aa35a,#2bc970)" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
          </div>
          <h4>Email Us</h4>
          <p>support@rsholidays.com</p>
          <span>Response within 2 hours</span>
        </div>
        <div className="support-channel-card" style={{ background: "linear-gradient(135deg,#faf7ff,#f0e8ff)" }}>
          <div className="channel-icon" style={{ background: "linear-gradient(135deg,#6830d9,#925cff)" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
          </div>
          <h4>Live Chat</h4>
          <p>Available on website</p>
          <span>24/7 instant support</span>
        </div>
        <div className="support-channel-card" style={{ background: "linear-gradient(135deg,#fffbf3,#fff5e0)" }}>
          <div className="channel-icon" style={{ background: "linear-gradient(135deg,#f59e0b,#ffbb32)" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 2H3v16h5l3 3 3-3h7V2z" /><line x1="9" y1="8" x2="15" y2="8" /><line x1="9" y1="12" x2="13" y2="12" /></svg>
          </div>
          <h4>WhatsApp</h4>
          <p>+91 98765 00001</p>
          <span>Quick responses</span>
        </div>
      </div>

      <div className="support-layout">
        {/* Left: Compose Message + Tickets */}
        <div className="support-left">
          {/* Compose */}
          <div className="panel">
            <div className="panel-header">
              <h3>Send a Message</h3>
            </div>
            {msgSent ? (
              <div className="msg-success">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#0aa35a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                <h4>Message Sent!</h4>
                <p>Our team will get back to you within 2 hours.</p>
                <button className="btn-outline-sm" onClick={() => setMsgSent(false)}>Send Another</button>
              </div>
            ) : (
              <div className="compose-form">
                <div className="form-group">
                  <label className="form-label">Subject</label>
                  <select className="form-input">
                    <option>Booking Issue</option>
                    <option>Refund Request</option>
                    <option>Itinerary Change</option>
                    <option>General Enquiry</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Booking ID (optional)</label>
                  <input className="form-input" type="text" placeholder="e.g. RS10021" />
                </div>
                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea className="form-input form-textarea" rows={4} placeholder="Describe your issue or question…" />
                </div>
                <div className="form-group">
                  <label className="form-label">Priority</label>
                  <div className="priority-options">
                    {["Low", "Medium", "High"].map((p) => (
                      <label key={p} className="priority-label">
                        <input type="radio" name="priority" value={p} defaultChecked={p === "Medium"} />
                        <span className={`priority-pill priority-${p.toLowerCase()}`}>{p}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <button className="explore-button" style={{ width: "100%", marginTop: 8 }} onClick={() => setMsgSent(true)}>
                  Send Message →
                </button>
              </div>
            )}
          </div>

          {/* Previous Tickets */}
          <div className="panel" style={{ marginTop: 18 }}>
            <div className="panel-header">
              <h3>Previous Tickets</h3>
              <button className="view-button">View All →</button>
            </div>
            <div className="tickets-list">
              {tickets.map((t) => (
                <div key={t.id} className="ticket-item">
                  <div className="ticket-header-row">
                    <span className="ticket-id">{t.id}</span>
                    <span className={`ticket-status-badge ${t.status === "Resolved" ? "status-resolved" : "status-progress"}`}>
                      {t.status}
                    </span>
                  </div>
                  <p className="ticket-subject">{t.subject}</p>
                  <div className="ticket-meta">
                    <span>{t.date}</span>
                    <span className={`ticket-priority priority-${t.priority.toLowerCase()}`}>
                      {t.priority} Priority
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: FAQs */}
        <div className="support-right">
          <div className="panel">
            <div className="panel-header">
              <h3>Frequently Asked Questions</h3>
            </div>
            <div className="faq-list">
              {faqs.map((faq, i) => (
                <div key={i} className={`faq-item ${openFaq === i ? "faq-open" : ""}`}>
                  <button className="faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    <span>{faq.q}</span>
                    <span className="faq-chevron">{openFaq === i ? "▲" : "▼"}</span>
                  </button>
                  {openFaq === i && (
                    <div className="faq-answer">{faq.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
