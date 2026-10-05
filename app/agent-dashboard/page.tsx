"use client";

import { useState } from "react";
import "../../src/styles/agent-dashboard.css";
const sidebarItems = [
  { key: "overview", label: "Overview", icon: "⌘", active: true },
  { key: "bookings", label: "Bookings", icon: "🗓", active: false },
  { key: "packages", label: "Packages", icon: "📦", active: false },
  { key: "clients", label: "Clients", icon: "👥", active: false },
  { key: "settings", label: "Settings", icon: "⚙", active: false },
];

const stats = [
  {
    title: "Total Bookings",
    value: "48",
    change: "+12%",
    note: "vs last month",
    icon: "🗓",
    cardClass: "stat-pink",
    iconClass: "icon-pink",
  },
  {
    title: "Pending Enquiries",
    value: "12",
    change: "+4%",
    note: "vs last month",
    icon: "💬",
    cardClass: "stat-cream",
    iconClass: "icon-orange",
  },
  {
    title: "Active Packages",
    value: "28",
    change: "+7%",
    note: "vs last month",
    icon: "📦",
    cardClass: "stat-purple",
    iconClass: "icon-purple",
  },
  {
    title: "Revenue",
    value: "₹ 8,42,000",
    change: "+18%",
    note: "vs last month",
    icon: "₹",
    cardClass: "stat-green",
    iconClass: "icon-green",
  },
];

const bookings = [
  {
    id: 1,
    client: "Rahul Sharma",
    packageName: "Kashmir Paradise",
    date: "12 May 2025",
    status: "Confirmed",
    amount: "₹ 62,000",
  },
  {
    id: 2,
    client: "Priya Mehta",
    packageName: "Bali Escape",
    date: "20 May 2025",
    status: "Pending",
    amount: "₹ 78,000",
  },
  {
    id: 3,
    client: "Amit Verma",
    packageName: "Manali-Leh-Srinagar",
    date: "05 Jun 2025",
    status: "Confirmed",
    amount: "₹ 49,500",
  },
  {
    id: 4,
    client: "Sneha Kapoor",
    packageName: "Thailand Getaway",
    date: "18 Jun 2025",
    status: "Pending",
    amount: "₹ 81,000",
  },
];

const enquiries = [
  {
    initials: "A",
    initialsClass: "avatar-pink",
    name: "Ankit Rao",
    trip: "Europe Trip",
    time: "2 hours ago",
  },
  {
    initials: "S",
    initialsClass: "avatar-blue",
    name: "Simran Kaur",
    trip: "Bali Getaway",
    time: "5 hours ago",
  },
  {
    initials: "V",
    initialsClass: "avatar-purple",
    name: "Vikram Malhotra",
    trip: "Kerala Backwaters",
    time: "1 day ago",
  },
];

const quickActions = [
  { title: "New Booking", className: "action-red", icon: "🗓" },
  { title: "Add Client", className: "action-blue", icon: "👤" },
  { title: "Generate Quote", className: "action-purple", icon: "📄" },
];

export default function AgentDashboardClient() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <div className="dashboard-page">
        <div className={`dashboard-shell ${collapsed ? "collapsed" : ""}`}>
          {/* Sidebar */}
          <aside className="sidebar">
            <div className="sidebar-top d-flex align-items-center justify-content-between">
                <button
                className="collapse-btn"
                onClick={() => setCollapsed(!collapsed)}
                aria-label="Toggle sidebar"
              >
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

            <nav className="sidebar-nav">
              {sidebarItems.map((item) => (
                <button
                  key={item.key}
                  className={`nav-item ${item.active ? "active" : ""}`}
                >
                  <span className="nav-icon">{item.icon}</span>
                  {!collapsed && <span>{item.label}</span>}
                </button>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="dashboard-main">
            <div className="dashboard-header">
              <div>
                <h1 className="page-title">Welcome Back, RS Holidays!</h1>
                <p className="page-subtitle">
                  Here&apos;s a quick look at your travel business today.
                </p>
              </div>

              <div className="header-date">Thu, 24 Apr 2025</div>
            </div>

            {/* Stats */}
            <section className="stats-grid">
              {stats.map((stat) => (
                <div key={stat.title} className={`stat-card ${stat.cardClass}`}>
                  <div className={`stat-icon ${stat.iconClass}`}>{stat.icon}</div>
                  <div className="stat-content">
                    <p className="stat-title">{stat.title}</p>
                    <h3 className="stat-value">{stat.value}</h3>
                    <p className="stat-change">
                      <span className="change-up">↑ {stat.change}</span>{" "}
                      <span className="change-note">{stat.note}</span>
                    </p>
                  </div>
                </div>
              ))}
            </section>

            <section className="content-grid">
              {/* Left Column */}
              <div className="panel">
                <div className="panel-header">
                  <h3>Recent Bookings</h3>
                  <button className="link-btn">View All →</button>
                </div>

                <div className="table-wrap">
                  <table className="booking-table">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Client Name</th>
                        <th>Package / Destination</th>
                        <th>Travel Date</th>
                        <th>Status</th>
                        <th>Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bookings.map((booking) => (
                        <tr key={booking.id}>
                          <td>{booking.id}</td>
                          <td>{booking.client}</td>
                          <td>{booking.packageName}</td>
                          <td>{booking.date}</td>
                          <td>
                            <span
                              className={`status-badge ${
                                booking.status === "Confirmed"
                                  ? "confirmed"
                                  : "pending"
                              }`}
                            >
                              {booking.status}
                            </span>
                          </td>
                          <td>{booking.amount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Right Column */}
              <div className="right-stack">
                <div className="panel">
                  <div className="panel-header">
                    <h3>Recent Enquiries</h3>
                    <button className="link-btn">View All</button>
                  </div>

                  <div className="enquiry-list">
                    {enquiries.map((enquiry) => (
                      <div className="enquiry-item" key={enquiry.name}>
                        <div className={`enquiry-avatar ${enquiry.initialsClass}`}>
                          {enquiry.initials}
                        </div>

                        <div className="enquiry-info">
                          <div className="enquiry-name">{enquiry.name}</div>
                          <div className="enquiry-trip">{enquiry.trip}</div>
                        </div>

                        <div className="enquiry-time">{enquiry.time}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="panel">
                  <div className="panel-header">
                    <h3>Quick Actions</h3>
                  </div>

                  <div className="actions-grid">
                    {quickActions.map((action) => (
                      <button
                        key={action.title}
                        className={`action-btn ${action.className}`}
                      >
                        <span className="action-icon">{action.icon}</span>
                        <span>{action.title}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>

      
    </>
  );
}