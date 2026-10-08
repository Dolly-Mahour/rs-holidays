"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "@/src/styles/agent-dashboard.css";

const agentPortalItems = [
  {
    key: "overview",
    label: "Overview",
    href: "/agent-dashboard",
    icon: (
      <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    key: "bookings",
    label: "Bookings",
    href: "/agent-dashboard/bookings",
    icon: (
      <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    key: "packages",
    label: "Packages",
    href: "/agent-dashboard/packages",
    icon: (
      <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    key: "clients",
    label: "Clients",
    href: "/agent-dashboard/clients",
    icon: (
      <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

const allPagesItems = [
  { key: "home", label: "Home", href: "/", icon: (<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>) },
  { key: "packages-page", label: "Packages", href: "/packages", icon: (<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>) },
  { key: "last-minute-trips", label: "Last Minute Trips", href: "/last-minute-trips", icon: (<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>) },
  { key: "luxury-packages", label: "Luxury Packages", href: "/luxury-packages", icon: (<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h12l4 6-10 13L2 9z" /><path d="M2 9h20" /><path d="M10 3l2 6 2-6" /></svg>) },
  { key: "romantic-escapes", label: "Romantic Escapes", href: "/romantic-escapes", icon: (<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>) },
  { key: "weekend-getaways", label: "Weekend Getaways", href: "/weekend-getaways", icon: (<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m8 3 4 8 5-5 5 15H2L8 3z" /></svg>) },
  { key: "india-heritage", label: "India Heritage", href: "/india-heritage", icon: (<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="22" x2="20" y2="22" /><line x1="2" y1="6" x2="22" y2="6" /><line x1="12" y1="2" x2="12" y2="6" /><path d="M6 18v-8M10 18v-8M14 18v-8M18 18v-8" /></svg>) },
  { key: "blogs", label: "Blogs", href: "/blogs", icon: (<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>) },
  { key: "about-us", label: "About Us", href: "/about-us", icon: (<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg>) },
];

const portalItems = [
  { key: "user-dashboard", label: "Traveler Dashboard", href: "/user-dashboard", icon: (<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>) },
];

const agentSections = [
  { title: "Agent Portal", items: agentPortalItems },
  { title: "All Pages", items: allPagesItems },
  { title: "Portals", items: portalItems },
];

export default function AgentDashboardShell({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <div className="dashboard-page">
      <div className={`dashboard-shell ${collapsed ? "collapsed" : ""}`}>
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="sidebar-top" style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10, padding: "18px 12px 0", flexShrink: 0 }}>
            <button className="collapse-btn" onClick={() => setCollapsed(!collapsed)} aria-label="Toggle sidebar">
              {collapsed ? "☰" : "✕"}
            </button>
            <div className="brand-wrap">
              <div className="brand-avatar">RS</div>
              {!collapsed && (
                <div>
                  <h4 className="brand-title">RS Holidays</h4>
                  <p className="brand-subtitle">Agent Portal</p>
                </div>
              )}
            </div>
          </div>

          <div className="sidebar-scroll">
            {agentSections.map((section, sIdx) => (
              <div key={section.title || sIdx} className="sidebar-section">
                {sIdx > 0 && <div className="sidebar-divider" />}
                {section.title && <div className="sidebar-section-title">{section.title}</div>}
                <nav className="sidebar-nav">
                  {section.items.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link key={item.key} href={item.href} title={item.label} className={`nav-item ${isActive ? "active" : ""}`}>
                        <span className="nav-icon">{item.icon}</span>
                        {!collapsed && <span>{item.label}</span>}
                      </Link>
                    );
                  })}
                </nav>
              </div>
            ))}
          </div>
        </aside>

        {/* Main */}
        <main className="dashboard-main">{children}</main>
      </div>
    </div>
  );
}
