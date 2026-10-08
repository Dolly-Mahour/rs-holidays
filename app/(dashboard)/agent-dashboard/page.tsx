"use client";

import AgentDashboardShell from "@/src/components/AgentDashboardShell";

const stats = [
  {
    title: "Total Bookings", value: "48", change: "+12%", note: "vs last month", cardClass: "stat-pink", iconClass: "icon-pink",
    icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>),
  },
  {
    title: "Pending Enquiries", value: "12", change: "+4%", note: "vs last month", cardClass: "stat-cream", iconClass: "icon-orange",
    icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>),
  },
  {
    title: "Active Packages", value: "28", change: "+7%", note: "vs last month", cardClass: "stat-purple", iconClass: "icon-purple",
    icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>),
  },
  {
    title: "Revenue", value: "₹ 8,42,000", change: "+18%", note: "vs last month", cardClass: "stat-green", iconClass: "icon-green",
    icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>),
  },
];

const bookings = [
  { id: 1, client: "Rahul Sharma", packageName: "Kashmir Paradise", date: "12 May 2026", status: "Confirmed", amount: "₹ 62,000" },
  { id: 2, client: "Priya Mehta", packageName: "Bali Escape", date: "20 May 2026", status: "Pending", amount: "₹ 78,000" },
  { id: 3, client: "Amit Verma", packageName: "Manali-Leh-Srinagar", date: "05 Jun 2026", status: "Confirmed", amount: "₹ 49,500" },
  { id: 4, client: "Sneha Kapoor", packageName: "Thailand Getaway", date: "18 Jun 2026", status: "Pending", amount: "₹ 81,000" },
];

const enquiries = [
  { initials: "A", initialsClass: "avatar-pink", name: "Ankit Rao", trip: "Europe Trip", time: "2 hours ago" },
  { initials: "S", initialsClass: "avatar-blue", name: "Simran Kaur", trip: "Bali Getaway", time: "5 hours ago" },
  { initials: "V", initialsClass: "avatar-purple", name: "Vikram Malhotra", trip: "Kerala Backwaters", time: "1 day ago" },
];

const quickActions = [
  {
    title: "New Booking", className: "action-red",
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="12" y1="14" x2="12" y2="18" /><line x1="10" y1="16" x2="14" y2="16" /></svg>),
  },
  {
    title: "Add Client", className: "action-blue",
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><line x1="20" y1="8" x2="20" y2="14" /><line x1="17" y1="11" x2="23" y2="11" /></svg>),
  },
  {
    title: "Generate Quote", className: "action-purple",
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>),
  },
];

export default function AgentDashboardClient() {
  return (
    <AgentDashboardShell>
      <div className="dashboard-header">
        <div>
          <h1 className="page-title">Welcome Back, RS Holidays!</h1>
          <p className="page-subtitle">Here&apos;s a quick look at your travel business today.</p>
        </div>
        <div className="header-date">Thu, 8 Oct 2026</div>
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
        {/* Left: Bookings Table */}
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
                  <th>Package</th>
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
                      <span className={`status-badge ${booking.status === "Confirmed" ? "confirmed" : "pending"}`}>
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
                  <div className={`enquiry-avatar ${enquiry.initialsClass}`}>{enquiry.initials}</div>
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
                <button key={action.title} className={`action-btn ${action.className}`}>
                  <span className="action-icon">{action.icon}</span>
                  <span>{action.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </AgentDashboardShell>
  );
}