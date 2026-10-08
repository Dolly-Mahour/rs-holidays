"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "@/src/styles/user-dashboard.css";

const sidebarItems = [
  {
    key: "overview",
    label: "Overview",
    href: "/user-dashboard",
    icon: (
      <svg aria-hidden="true" width="25px" height="25px" viewBox="0 0 24 24" fill="none">
        <path d="M13 12C13 11.4477 13.4477 11 14 11H19C19.5523 11 20 11.4477 20 12V19C20 19.5523 19.5523 20 19 20H14C13.4477 20 13 19.5523 13 19V12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M4 5C4 4.44772 4.44772 4 5 4H9C9.55228 4 10 4.44772 10 5V12C10 12.5523 9.55228 13 9 13H5C4.44772 13 4 12.5523 4 12V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M4 17C4 16.4477 4.44772 16 5 16H9C9.55228 16 10 16.4477 10 17V19C10 19.5523 9.55228 20 9 20H5C4.44772 20 4 19.5523 4 19V17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M13 5C13 4.44772 13.4477 4 14 4H19C19.5523 4 20 4.44772 20 5V7C20 7.55228 19.5523 8 19 8H14C13.4477 8 13 7.55228 13 7V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    key: "bookings",
    label: "Bookings",
    href: "/user-dashboard/bookings",
    icon: (
      <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <polyline points="9 16 11 18 15 14" />
      </svg>
    ),
  },
  {
    key: "wishlist",
    label: "Wishlist",
    href: "/user-dashboard/wishlist",
    icon: (
      <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    key: "profile",
    label: "My Profile",
    href: "/user-dashboard/profile",
    icon: (
      <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    key: "support",
    label: "Support",
    href: "/user-dashboard/support",
    icon: (
      <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
];

const allPagesItems = [
  { key: "home", label: "Home", href: "/", icon: (<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>) },
  { key: "packages", label: "Packages", href: "/packages", icon: (<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>) },
  { key: "last-minute-trips", label: "Last Minute Trips", href: "/last-minute-trips", icon: (<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>) },
  { key: "luxury-packages", label: "Luxury Packages", href: "/luxury-packages", icon: (<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h12l4 6-10 13L2 9z" /><path d="M2 9h20" /><path d="M10 3l2 6 2-6" /></svg>) },
  { key: "romantic-escapes", label: "Romantic Escapes", href: "/romantic-escapes", icon: (<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>) },
  { key: "weekend-getaways", label: "Weekend Getaways", href: "/weekend-getaways", icon: (<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m8 3 4 8 5-5 5 15H2L8 3z" /></svg>) },
  { key: "india-heritage", label: "India Heritage", href: "/india-heritage", icon: (<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="22" x2="20" y2="22" /><line x1="2" y1="6" x2="22" y2="6" /><line x1="12" y1="2" x2="12" y2="6" /><path d="M6 18v-8M10 18v-8M14 18v-8M18 18v-8" /></svg>) },
  { key: "blogs", label: "Blogs", href: "/blogs", icon: (<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>) },
  { key: "about-us", label: "About Us", href: "/about-us", icon: (<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg>) },
];

const portalItems = [
  { key: "agent-dashboard", label: "Agent Dashboard", href: "/agent-dashboard", icon: (<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v3" /></svg>) },
];

const sidebarSections = [
  { title: "Dashboard", items: sidebarItems },
  { title: "All Pages", items: allPagesItems },
  { title: "Portals", items: portalItems },
];

/**
 * Full dashboard layout shell: sidebar + content wrapper.
 * Manages collapsed state so the margin-left on the content area
 * adjusts correctly on every page that uses this component.
 */
export default function UserDashboardShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <div className="user-dashboard">
      <div className={`dashboard-layout ${collapsed ? "collapsed" : ""}`}>
        {/* Sidebar */}
        <aside className="sidebar">
          <div
            className="sidebar-header"
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: 10,
              width: "100%",
            }}
          >
            <button
              className="collapse-button mb-3 fw-bold"
              onClick={() => setCollapsed(!collapsed)}
              aria-label="Toggle sidebar"
            >
              {collapsed ? "☰" : "⇐"}
            </button>
            <div className="user-brand mb-3">
              <div className="avatar">TP</div>
              {!collapsed && (
                <div>
                  <h4>Welcome!</h4>
                  <p>Traveler Account</p>
                </div>
              )}
            </div>
          </div>

          <div className="sidebar-scroll">
            {sidebarSections.map((section, sIdx) => (
              <div key={section.title || sIdx} className="sidebar-section">
                {sIdx > 0 && <div className="sidebar-divider" />}
                {section.title && (
                  <div className="sidebar-section-title">{section.title}</div>
                )}
                <nav className="sidebar-menu">
                  {section.items.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.key}
                        href={item.href}
                        title={item.label}
                        className={`sidebar-item ${
                          isActive ? "sidebar-active" : ""
                        }`}
                      >
                        <span className="sidebar-icon">{item.icon}</span>
                        {!collapsed && <span>{item.label}</span>}
                      </Link>
                    );
                  })}
                </nav>
              </div>
            ))}
          </div>
        </aside>

        {/* Main content area */}
        <main className="dashboard-content">{children}</main>
      </div>
    </div>
  );
}
