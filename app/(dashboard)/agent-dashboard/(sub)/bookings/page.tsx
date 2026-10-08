"use client";

import { useState } from "react";
import "@/src/styles/agent-dashboard.css";
import "@/src/styles/agent-dashboard-subpages.css";

const bookings = [
  { id: "AG-5021", client: "Rahul Sharma", pkg: "Kashmir Paradise", destination: "Srinagar, J&K", date: "12 May 2026", pax: "2 Adults", status: "Confirmed", amount: "₹ 62,000", agent: "Amit K.", img: "https://i.pinimg.com/1200x/dd/aa/2e/ddaa2e3b6ab91026d289972ad14f2bfe.jpg" },
  { id: "AG-5044", client: "Priya Mehta", pkg: "Bali Escape", destination: "Bali, Indonesia", date: "20 Jun 2026", pax: "2 Adults", status: "Pending", amount: "₹ 78,000", agent: "Sneha R.", img: "https://i.pinimg.com/736x/bb/70/dd/bb70dd9e6ce18a7123c6b79b088d2552.jpg" },
  { id: "AG-4934", client: "Amit Verma", pkg: "Manali-Leh-Srinagar", destination: "Himachal Pradesh", date: "05 Jun 2026", pax: "3 Adults", status: "Confirmed", amount: "₹ 49,500", agent: "Amit K.", img: "https://i.pinimg.com/736x/93/10/a7/9310a7f9aa8fb0014ec5eda6a84e5092.jpg" },
  { id: "AG-4812", client: "Sneha Kapoor", pkg: "Thailand Getaway", destination: "Bangkok, Thailand", date: "18 Jun 2026", pax: "4 Adults", status: "Pending", amount: "₹ 81,000", agent: "Sneha R.", img: "https://i.pinimg.com/736x/01/7c/b4/017cb4b9f99becc4d6bf2f1e12571eed.jpg" },
  { id: "AG-4701", client: "Vikram Malhotra", pkg: "Rajasthan Royale", destination: "Jaipur & Udaipur", date: "10 Nov 2025", pax: "2 Adults, 2 Kids", status: "Completed", amount: "₹ 88,000", agent: "Riya S.", img: "https://i.pinimg.com/736x/c2/bf/ee/c2bfee34a3f78e946498c36fc8e31ca6.jpg" },
  { id: "AG-4590", client: "Ankit Rao", pkg: "Kerala Backwaters", destination: "Alleppey, Kerala", date: "08 Mar 2025", pax: "2 Adults", status: "Completed", amount: "₹ 41,500", agent: "Riya S.", img: "https://i.pinimg.com/1200x/a9/c0/c4/a9c0c475a413fa7297d077329c90e0ae.jpg" },
];

const filters = ["All", "Confirmed", "Pending", "Completed"];
const agents = ["All Agents", "Amit K.", "Sneha R.", "Riya S."];

export default function AgentBookingsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeAgent, setActiveAgent] = useState("All Agents");

  const filtered = bookings.filter((b) => {
    const statusMatch = activeFilter === "All" || b.status === activeFilter;
    const agentMatch = activeAgent === "All Agents" || b.agent === activeAgent;
    return statusMatch && agentMatch;
  });

  return (
    <>
      {/* Page Header */}
      <div className="agent-page-header">
        <div>
          <h1 className="page-title">Bookings</h1>
          <p className="page-subtitle">Manage all client bookings across your team.</p>
        </div>
        <div className="header-actions">
          <button className="agent-btn-secondary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
            Export CSV
          </button>
          <button className="agent-btn-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
            New Booking
          </button>
        </div>
      </div>

      {/* Stats row */}
      <div className="agent-sub-stats">
        <div className="agent-sub-stat" style={{ background: "#fff6f8", borderColor: "#fde8ee" }}>
          <div className="agent-sub-icon" style={{ background: "linear-gradient(135deg,#f31858,#ff5c7b)" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
          </div>
          <div><p className="agent-sub-label">Total Bookings</p><h3 className="agent-sub-value">48</h3><span className="agent-sub-note">This month</span></div>
        </div>
        <div className="agent-sub-stat" style={{ background: "#f3fff8", borderColor: "#c8f0d8" }}>
          <div className="agent-sub-icon" style={{ background: "linear-gradient(135deg,#16a34a,#22c55e)" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
          </div>
          <div><p className="agent-sub-label">Confirmed</p><h3 className="agent-sub-value">31</h3><span className="agent-sub-note">Ready to go</span></div>
        </div>
        <div className="agent-sub-stat" style={{ background: "#fffaf1", borderColor: "#fde8b2" }}>
          <div className="agent-sub-icon" style={{ background: "linear-gradient(135deg,#f59e0b,#fbbf24)" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
          </div>
          <div><p className="agent-sub-label">Pending</p><h3 className="agent-sub-value">12</h3><span className="agent-sub-note">Awaiting confirm</span></div>
        </div>
        <div className="agent-sub-stat" style={{ background: "#f8f4ff", borderColor: "#e0d4ff" }}>
          <div className="agent-sub-icon" style={{ background: "linear-gradient(135deg,#7c3aed,#8b5cf6)" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
          </div>
          <div><p className="agent-sub-label">Revenue</p><h3 className="agent-sub-value">₹8.4L</h3><span className="agent-sub-note">↑ 18% vs last month</span></div>
        </div>
      </div>

      {/* Filters */}
      <div className="agent-filter-bar">
        <div className="agent-filter-tabs">
          {filters.map((f) => (
            <button key={f} className={`agent-filter-tab ${activeFilter === f ? "active" : ""}`} onClick={() => setActiveFilter(f)}>{f}</button>
          ))}
        </div>
        <div className="agent-filter-right">
          <select className="agent-select" value={activeAgent} onChange={(e) => setActiveAgent(e.target.value)}>
            {agents.map((a) => <option key={a}>{a}</option>)}
          </select>
          <input className="agent-search" type="text" placeholder="🔍 Search bookings…" />
        </div>
      </div>

      {/* Booking Cards */}
      <div className="agent-bookings-list">
        {filtered.map((b) => (
          <div key={b.id} className="agent-booking-card">
            <div className="agent-booking-img"><img src={b.img} alt={b.pkg} /></div>
            <div className="agent-booking-info">
              <div className="agent-booking-top">
                <div>
                  <h4 className="agent-booking-title">{b.pkg}</h4>
                  <p className="agent-booking-dest">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 4 }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                    {b.destination}
                  </p>
                </div>
                <span className={`agent-badge ${b.status === "Confirmed" ? "badge-confirmed" : b.status === "Pending" ? "badge-pending" : "badge-completed"}`}>{b.status}</span>
              </div>
              <div className="agent-booking-meta">
                <div className="agent-meta-item"><span className="agent-meta-label">Booking ID</span><span className="agent-meta-value booking-id-val">{b.id}</span></div>
                <div className="agent-meta-item"><span className="agent-meta-label">Client</span><span className="agent-meta-value">{b.client}</span></div>
                <div className="agent-meta-item"><span className="agent-meta-label">Travel Date</span><span className="agent-meta-value">{b.date}</span></div>
                <div className="agent-meta-item"><span className="agent-meta-label">Pax</span><span className="agent-meta-value">{b.pax}</span></div>
                <div className="agent-meta-item"><span className="agent-meta-label">Agent</span><span className="agent-meta-value">{b.agent}</span></div>
                <div className="agent-meta-item"><span className="agent-meta-label">Amount</span><span className="agent-meta-value agent-amount">{b.amount}</span></div>
              </div>
              <div className="agent-booking-actions">
                <button className="agent-btn-sm">View Details</button>
                <button className="agent-btn-sm">Edit</button>
                {b.status !== "Completed" && <button className="agent-btn-sm agent-btn-sm-danger">Cancel</button>}
              </div>
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="agent-empty-state">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#c4ccd8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
            <p>No bookings found</p>
          </div>
        )}
      </div>
    </>
  );
}
