"use client";

import "@/src/styles/user-dashboard.css";
import "@/src/styles/user-dashboard-subpages.css";

const bookings = [
  {
    id: "RS10021",
    packageName: "Kashmir Paradise",
    destination: "Srinagar, Kashmir",
    date: "12 May 2026",
    returnDate: "18 May 2026",
    travellers: "2 Adults",
    status: "Confirmed",
    amount: "₹ 62,000",
    img: "https://i.pinimg.com/1200x/dd/aa/2e/ddaa2e3b6ab91026d289972ad14f2bfe.jpg",
  },
  {
    id: "RS10044",
    packageName: "Bali Escape",
    destination: "Bali, Indonesia",
    date: "20 Jun 2026",
    returnDate: "25 Jun 2026",
    travellers: "2 Adults",
    status: "Pending",
    amount: "₹ 78,000",
    img: "https://i.pinimg.com/736x/bb/70/dd/bb70dd9e6ce18a7123c6b79b088d2552.jpg",
  },
  {
    id: "RS09834",
    packageName: "Manali-Leh-Srinagar",
    destination: "Himachal Pradesh",
    date: "15 Jan 2026",
    returnDate: "22 Jan 2026",
    travellers: "3 Adults",
    status: "Completed",
    amount: "₹ 54,500",
    img: "https://i.pinimg.com/736x/93/10/a7/9310a7f9aa8fb0014ec5eda6a84e5092.jpg",
  },
  {
    id: "RS09712",
    packageName: "Kerala Backwaters",
    destination: "Alleppey, Kerala",
    date: "08 Mar 2025",
    returnDate: "13 Mar 2025",
    travellers: "2 Adults, 1 Child",
    status: "Completed",
    amount: "₹ 41,500",
    img: "https://i.pinimg.com/1200x/a9/c0/c4/a9c0c475a413fa7297d077329c90e0ae.jpg",
  },
  {
    id: "RS09540",
    packageName: "Rajasthan Royale",
    destination: "Jaipur & Udaipur",
    date: "10 Nov 2024",
    returnDate: "16 Nov 2024",
    travellers: "4 Adults",
    status: "Completed",
    amount: "₹ 88,000",
    img: "https://i.pinimg.com/736x/c2/bf/ee/c2bfee34a3f78e946498c36fc8e31ca6.jpg",
  },
];

const statusFilters = ["All", "Confirmed", "Pending", "Completed"];

export default function BookingsPage() {
  return (
    <>
      <section className="dashboard-heading">
        <div>
          <h1>My Bookings</h1>
          <p>Track, manage and review all your travel bookings in one place.</p>
        </div>
        <button className="explore-button">+ New Booking</button>
      </section>

      {/* Summary Cards */}
      <div className="sub-stats-grid">
        <div className="sub-stat-card" style={{ background: "#fff6f7", borderColor: "#fde8ea" }}>
          <div className="sub-stat-icon" style={{ background: "linear-gradient(135deg,#e30613,#ff4b67)" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
          </div>
          <div>
            <p className="sub-stat-label">Total Bookings</p>
            <h3 className="sub-stat-value">08</h3>
            <span className="sub-stat-note">Lifetime trips</span>
          </div>
        </div>
        <div className="sub-stat-card" style={{ background: "#f5fff9", borderColor: "#d4f5e5" }}>
          <div className="sub-stat-icon" style={{ background: "linear-gradient(135deg,#0aa35a,#2bc970)" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>
          </div>
          <div>
            <p className="sub-stat-label">Confirmed</p>
            <h3 className="sub-stat-value">01</h3>
            <span className="sub-stat-note">Upcoming trip</span>
          </div>
        </div>
        <div className="sub-stat-card" style={{ background: "#fffbf3", borderColor: "#fdecc6" }}>
          <div className="sub-stat-icon" style={{ background: "linear-gradient(135deg,#f59e0b,#ffbb32)" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
          </div>
          <div>
            <p className="sub-stat-label">Pending</p>
            <h3 className="sub-stat-value">01</h3>
            <span className="sub-stat-note">Awaiting confirmation</span>
          </div>
        </div>
        <div className="sub-stat-card" style={{ background: "#faf7ff", borderColor: "#e6d9ff" }}>
          <div className="sub-stat-icon" style={{ background: "linear-gradient(135deg,#6830d9,#925cff)" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
          </div>
          <div>
            <p className="sub-stat-label">Total Spent</p>
            <h3 className="sub-stat-value">₹1.42L</h3>
            <span className="sub-stat-note">Across all bookings</span>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="filter-tabs">
        {statusFilters.map((f) => (
          <button key={f} className={`filter-tab ${f === "All" ? "filter-tab-active" : ""}`}>
            {f}
          </button>
        ))}
        <div style={{ marginLeft: "auto" }}>
          <input className="booking-search" type="text" placeholder="🔍  Search bookings…" />
        </div>
      </div>

      {/* Booking Cards */}
      <div className="bookings-list">
        {bookings.map((b) => (
          <div key={b.id} className="booking-card">
            <div className="booking-img">
              <img src={b.img} alt={b.packageName} />
            </div>
            <div className="booking-info">
              <div className="booking-top">
                <div>
                  <h4 className="booking-title">{b.packageName}</h4>
                  <p className="booking-destination">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 4 }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                    {b.destination}
                  </p>
                </div>
                <span className={`booking-status status ${b.status === "Confirmed" ? "confirmed" : b.status === "Pending" ? "pending" : "completed"}`}>
                  {b.status}
                </span>
              </div>
              <div className="booking-meta">
                <div className="meta-item">
                  <span className="meta-label">Booking ID</span>
                  <span className="meta-value">{b.id}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Travel Dates</span>
                  <span className="meta-value">{b.date} → {b.returnDate}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Travellers</span>
                  <span className="meta-value">{b.travellers}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Amount</span>
                  <span className="meta-value booking-amount">{b.amount}</span>
                </div>
              </div>
              <div className="booking-actions">
                <button className="btn-outline-sm">View Details</button>
                {b.status !== "Completed" && (
                  <button className="btn-outline-sm btn-danger-sm">Cancel</button>
                )}
                {b.status === "Completed" && (
                  <button className="btn-outline-sm btn-review-sm">⭐ Write Review</button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
