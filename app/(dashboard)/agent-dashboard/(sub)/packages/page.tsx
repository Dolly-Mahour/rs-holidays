"use client";

import { useState } from "react";
import "@/src/styles/agent-dashboard.css";
import "@/src/styles/agent-dashboard-subpages.css";

const packages = [
  { id: "PKG-001", name: "Kashmir Paradise", category: "Luxury", destination: "Srinagar, J&K", duration: "7D/6N", price: "₹ 62,000", sold: 24, available: true, rating: 4.9, img: "https://i.pinimg.com/1200x/dd/aa/2e/ddaa2e3b6ab91026d289972ad14f2bfe.jpg", tags: ["Mountains", "Snow", "Luxury"] },
  { id: "PKG-002", name: "Kerala Backwaters", category: "Nature", destination: "Alleppey, Kerala", duration: "5D/4N", price: "₹ 18,999", sold: 41, available: true, rating: 4.7, img: "https://i.pinimg.com/1200x/a9/c0/c4/a9c0c475a413fa7297d077329c90e0ae.jpg", tags: ["Houseboat", "Nature", "Ayurveda"] },
  { id: "PKG-003", name: "Dubai Special", category: "International", destination: "Dubai, UAE", duration: "5D/4N", price: "₹ 39,999", sold: 18, available: true, rating: 4.9, img: "https://i.pinimg.com/736x/bb/70/dd/bb70dd9e6ce18a7123c6b79b088d2552.jpg", tags: ["Shopping", "Desert", "Skyline"] },
  { id: "PKG-004", name: "Rajasthan Royale", category: "Heritage", destination: "Jaipur & Udaipur", duration: "6D/5N", price: "₹ 22,499", sold: 33, available: true, rating: 4.6, img: "https://i.pinimg.com/736x/c2/bf/ee/c2bfee34a3f78e946498c36fc8e31ca6.jpg", tags: ["Palaces", "Culture", "Cuisine"] },
  { id: "PKG-005", name: "Bali Honeymoon", category: "Romantic", destination: "Bali, Indonesia", duration: "7D/6N", price: "₹ 45,999", sold: 29, available: false, rating: 4.8, img: "https://i.pinimg.com/736x/01/7c/b4/017cb4b9f99becc4d6bf2f1e12571eed.jpg", tags: ["Couples", "Spa", "Temples"] },
  { id: "PKG-006", name: "Ladakh Adventure", category: "Adventure", destination: "Leh Ladakh, India", duration: "8D/7N", price: "₹ 28,999", sold: 15, available: true, rating: 4.8, img: "https://i.pinimg.com/736x/93/10/a7/9310a7f9aa8fb0014ec5eda6a84e5092.jpg", tags: ["Trekking", "Mountains", "Photography"] },
];

const catColors: Record<string, { bg: string; color: string }> = {
  Luxury: { bg: "#f8f4ff", color: "#7c3aed" },
  Nature: { bg: "#f3fff8", color: "#16a34a" },
  International: { bg: "#eff6ff", color: "#2563eb" },
  Heritage: { bg: "#fff6f8", color: "#f31858" },
  Romantic: { bg: "#fff0f5", color: "#db2777" },
  Adventure: { bg: "#fffaf1", color: "#d97706" },
};

export default function AgentPackagesPage() {
  const [view, setView] = useState<"grid" | "list">("grid");

  return (
    <>
      <div className="agent-page-header">
        <div>
          <h1 className="page-title">Packages</h1>
          <p className="page-subtitle">Browse, manage and promote your travel packages.</p>
        </div>
        <div className="header-actions">
          <div className="view-toggle">
            <button className={`view-toggle-btn ${view === "grid" ? "active" : ""}`} onClick={() => setView("grid")}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>
            </button>
            <button className={`view-toggle-btn ${view === "list" ? "active" : ""}`} onClick={() => setView("list")}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" /></svg>
            </button>
          </div>
          <button className="agent-btn-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
            Add Package
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="agent-sub-stats">
        <div className="agent-sub-stat" style={{ background: "#f8f4ff", borderColor: "#e0d4ff" }}>
          <div className="agent-sub-icon" style={{ background: "linear-gradient(135deg,#7c3aed,#8b5cf6)" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
          </div>
          <div><p className="agent-sub-label">Total Packages</p><h3 className="agent-sub-value">28</h3><span className="agent-sub-note">Active catalogue</span></div>
        </div>
        <div className="agent-sub-stat" style={{ background: "#f3fff8", borderColor: "#c8f0d8" }}>
          <div className="agent-sub-icon" style={{ background: "linear-gradient(135deg,#16a34a,#22c55e)" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
          </div>
          <div><p className="agent-sub-label">Total Sold</p><h3 className="agent-sub-value">160</h3><span className="agent-sub-note">↑ 22% this quarter</span></div>
        </div>
        <div className="agent-sub-stat" style={{ background: "#fff6f8", borderColor: "#fde8ee" }}>
          <div className="agent-sub-icon" style={{ background: "linear-gradient(135deg,#f31858,#ff5c7b)" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
          </div>
          <div><p className="agent-sub-label">Top Rated</p><h3 className="agent-sub-value">4.8★</h3><span className="agent-sub-note">Avg across packages</span></div>
        </div>
        <div className="agent-sub-stat" style={{ background: "#fffaf1", borderColor: "#fde8b2" }}>
          <div className="agent-sub-icon" style={{ background: "linear-gradient(135deg,#f59e0b,#fbbf24)" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
          </div>
          <div><p className="agent-sub-label">Avg Package Value</p><h3 className="agent-sub-value">₹36K</h3><span className="agent-sub-note">Per booking</span></div>
        </div>
      </div>

      {/* Packages */}
      <div className={`agent-packages-${view}`}>
        {packages.map((pkg) => {
          const cat = catColors[pkg.category] || { bg: "#f5f7fb", color: "#334155" };
          return view === "grid" ? (
            <div key={pkg.id} className="agent-pkg-card">
              <div className="agent-pkg-img">
                <img src={pkg.img} alt={pkg.name} />
                <span className="agent-pkg-cat" style={{ background: cat.bg, color: cat.color }}>{pkg.category}</span>
                {!pkg.available && <span className="agent-pkg-soldout">Sold Out</span>}
              </div>
              <div className="agent-pkg-body">
                <h4 className="agent-pkg-name">{pkg.name}</h4>
                <p className="agent-pkg-dest">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 4 }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  {pkg.destination}
                </p>
                <div className="agent-pkg-meta-row">
                  <span className="agent-pkg-duration">⏱ {pkg.duration}</span>
                  <span className="agent-pkg-rating">⭐ {pkg.rating}</span>
                </div>
                <div className="agent-pkg-tags">
                  {pkg.tags.map((t) => <span key={t} className="agent-pkg-tag">{t}</span>)}
                </div>
                <div className="agent-pkg-footer">
                  <div><span className="agent-pkg-price">{pkg.price}</span><span className="agent-pkg-sold"> · {pkg.sold} sold</span></div>
                  <div className="agent-pkg-actions-row">
                    <button className="agent-btn-sm">Edit</button>
                    <button className="agent-btn-sm agent-btn-sm-primary">Promote</button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div key={pkg.id} className="agent-pkg-list-row">
              <div className="agent-pkg-list-img"><img src={pkg.img} alt={pkg.name} /></div>
              <div className="agent-pkg-list-info">
                <h4 className="agent-pkg-name">{pkg.name}</h4>
                <p className="agent-pkg-dest">{pkg.destination} · {pkg.duration}</p>
                <div className="agent-pkg-tags" style={{ marginTop: 6 }}>
                  {pkg.tags.map((t) => <span key={t} className="agent-pkg-tag">{t}</span>)}
                </div>
              </div>
              <div className="agent-pkg-list-cat">
                <span className="agent-pkg-cat" style={{ background: cat.bg, color: cat.color, position: "static" }}>{pkg.category}</span>
              </div>
              <div className="agent-pkg-list-stats">
                <span className="agent-pkg-price">{pkg.price}</span>
                <span className="agent-pkg-sold">{pkg.sold} sold · ⭐ {pkg.rating}</span>
              </div>
              <div className="agent-pkg-list-actions">
                <button className="agent-btn-sm">Edit</button>
                <button className="agent-btn-sm agent-btn-sm-primary">Promote</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
