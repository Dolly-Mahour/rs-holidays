"use client";

import { useState } from "react";
import "@/src/styles/agent-dashboard.css";
import "@/src/styles/agent-dashboard-subpages.css";

const clients = [
  { id: "CL-001", name: "Rahul Sharma", email: "rahul.sharma@email.com", phone: "+91 98765 11111", city: "Mumbai", bookings: 4, totalSpent: "₹ 2.1L", status: "VIP", lastTrip: "Kashmir Paradise", joined: "Jan 2024", initials: "RS", color: "#f31858" },
  { id: "CL-002", name: "Priya Mehta", email: "priya.mehta@email.com", phone: "+91 87654 22222", city: "Delhi", bookings: 2, totalSpent: "₹ 78K", status: "Active", lastTrip: "Bali Escape", joined: "Mar 2024", initials: "PM", color: "#2563eb" },
  { id: "CL-003", name: "Amit Verma", email: "amit.verma@email.com", phone: "+91 76543 33333", city: "Bangalore", bookings: 3, totalSpent: "₹ 1.4L", status: "Active", lastTrip: "Manali-Leh", joined: "Feb 2024", initials: "AV", color: "#7c3aed" },
  { id: "CL-004", name: "Sneha Kapoor", email: "sneha.kapoor@email.com", phone: "+91 65432 44444", city: "Pune", bookings: 5, totalSpent: "₹ 3.2L", status: "VIP", lastTrip: "Thailand Getaway", joined: "Nov 2023", initials: "SK", color: "#d97706" },
  { id: "CL-005", name: "Vikram Malhotra", email: "vikram.m@email.com", phone: "+91 54321 55555", city: "Chennai", bookings: 1, totalSpent: "₹ 88K", status: "New", lastTrip: "Rajasthan Royale", joined: "Sep 2024", initials: "VM", color: "#16a34a" },
  { id: "CL-006", name: "Ankit Rao", email: "ankit.rao@email.com", phone: "+91 43210 66666", city: "Hyderabad", bookings: 2, totalSpent: "₹ 60K", status: "Active", lastTrip: "Kerala Backwaters", joined: "Apr 2024", initials: "AR", color: "#db2777" },
];

const statusFilters = ["All", "VIP", "Active", "New"];

export default function AgentClientsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = clients.filter((c) => activeFilter === "All" || c.status === activeFilter);

  const selectedClient = clients.find((c) => c.id === selected);

  return (
    <>
      <div className="agent-page-header">
        <div>
          <h1 className="page-title">Clients</h1>
          <p className="page-subtitle">Manage your client relationships and booking history.</p>
        </div>
        <div className="header-actions">
          <button className="agent-btn-secondary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
            Export
          </button>
          <button className="agent-btn-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
            Add Client
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="agent-sub-stats">
        <div className="agent-sub-stat" style={{ background: "#f8f4ff", borderColor: "#e0d4ff" }}>
          <div className="agent-sub-icon" style={{ background: "linear-gradient(135deg,#7c3aed,#8b5cf6)" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
          </div>
          <div><p className="agent-sub-label">Total Clients</p><h3 className="agent-sub-value">142</h3><span className="agent-sub-note">+12 this month</span></div>
        </div>
        <div className="agent-sub-stat" style={{ background: "#fff6f8", borderColor: "#fde8ee" }}>
          <div className="agent-sub-icon" style={{ background: "linear-gradient(135deg,#f31858,#ff5c7b)" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
          </div>
          <div><p className="agent-sub-label">VIP Clients</p><h3 className="agent-sub-value">28</h3><span className="agent-sub-note">High-value segment</span></div>
        </div>
        <div className="agent-sub-stat" style={{ background: "#f3fff8", borderColor: "#c8f0d8" }}>
          <div className="agent-sub-icon" style={{ background: "linear-gradient(135deg,#16a34a,#22c55e)" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
          </div>
          <div><p className="agent-sub-label">Retention Rate</p><h3 className="agent-sub-value">76%</h3><span className="agent-sub-note">↑ 5% vs last quarter</span></div>
        </div>
        <div className="agent-sub-stat" style={{ background: "#fffaf1", borderColor: "#fde8b2" }}>
          <div className="agent-sub-icon" style={{ background: "linear-gradient(135deg,#f59e0b,#fbbf24)" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
          </div>
          <div><p className="agent-sub-label">Avg Lifetime Value</p><h3 className="agent-sub-value">₹1.2L</h3><span className="agent-sub-note">Per VIP client</span></div>
        </div>
      </div>

      {/* Filter + Search */}
      <div className="agent-filter-bar">
        <div className="agent-filter-tabs">
          {statusFilters.map((f) => (
            <button key={f} className={`agent-filter-tab ${activeFilter === f ? "active" : ""}`} onClick={() => setActiveFilter(f)}>{f}</button>
          ))}
        </div>
        <input className="agent-search" type="text" placeholder="🔍 Search clients…" />
      </div>

      {/* Client Cards + Detail Panel */}
      <div className="clients-layout">
        <div className="clients-list">
          {filtered.map((client) => (
            <div key={client.id} className={`client-card ${selected === client.id ? "client-card-active" : ""}`} onClick={() => setSelected(selected === client.id ? null : client.id)}>
              <div className="client-avatar" style={{ background: client.color + "22", color: client.color }}>{client.initials}</div>
              <div className="client-info">
                <div className="client-name-row">
                  <h4 className="client-name">{client.name}</h4>
                  <span className={`client-status-badge ${client.status === "VIP" ? "cs-vip" : client.status === "Active" ? "cs-active" : "cs-new"}`}>{client.status}</span>
                </div>
                <p className="client-email">{client.email}</p>
                <div className="client-meta-row">
                  <span>📍 {client.city}</span>
                  <span>📋 {client.bookings} bookings</span>
                  <span>💰 {client.totalSpent}</span>
                </div>
              </div>
              <div className="client-actions">
                <button className="agent-btn-sm" onClick={(e) => e.stopPropagation()}>Message</button>
              </div>
            </div>
          ))}
        </div>

        {/* Detail Panel */}
        {selectedClient && (
          <div className="client-detail panel">
            <div className="client-detail-header">
              <div className="client-avatar-lg" style={{ background: selectedClient.color + "22", color: selectedClient.color }}>{selectedClient.initials}</div>
              <div>
                <h3 className="client-detail-name">{selectedClient.name}</h3>
                <span className={`client-status-badge ${selectedClient.status === "VIP" ? "cs-vip" : selectedClient.status === "Active" ? "cs-active" : "cs-new"}`}>{selectedClient.status} Client</span>
              </div>
              <button className="client-close-btn" onClick={() => setSelected(null)}>✕</button>
            </div>

            <div className="client-detail-body">
              <div className="client-detail-grid">
                {[["Email", selectedClient.email], ["Phone", selectedClient.phone], ["City", selectedClient.city], ["Member Since", selectedClient.joined], ["Total Bookings", selectedClient.bookings], ["Total Spent", selectedClient.totalSpent]].map(([label, val]) => (
                  <div key={label} className="client-detail-field">
                    <span className="client-detail-label">{label}</span>
                    <span className="client-detail-value">{val}</span>
                  </div>
                ))}
              </div>

              <div className="client-last-trip">
                <span className="client-detail-label">Last Trip</span>
                <p className="client-trip-name">{selectedClient.lastTrip}</p>
              </div>

              <div className="client-detail-actions">
                <button className="agent-btn-primary" style={{ flex: 1 }}>New Booking</button>
                <button className="agent-btn-secondary" style={{ flex: 1 }}>Send Email</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
