"use client";

import { useState } from "react";
import "../../src/styles/user-dashboard.css";
const sidebarItems = [
  { key: "overview", label: "Overview", icon: "⌘", active: true },
  { key: "bookings", label: "My Bookings", icon: "🗓" },
  { key: "wishlist", label: "Wishlist", icon: "♡" },
  { key: "profile", label: "My Profile", icon: "👤" },
  { key: "support", label: "Support", icon: "💬" },
  { key: "settings", label: "Settings", icon: "⚙" },
];

const stats = [
  {
    title: "Total Trips",
    value: "08",
    description: "Trips booked",
    icon: "✈",
    cardClass: "stat-pink",
    iconClass: "icon-pink",
  },
  {
    title: "Upcoming Trips",
    value: "02",
    description: "Ready to explore",
    icon: "🗓",
    cardClass: "stat-cream",
    iconClass: "icon-orange",
  },
  {
    title: "Wishlist",
    value: "06",
    description: "Saved packages",
    icon: "♡",
    cardClass: "stat-purple",
    iconClass: "icon-purple",
  },
  {
    title: "Total Spent",
    value: "₹ 1,42,500",
    description: "Across all bookings",
    icon: "₹",
    cardClass: "stat-green",
    iconClass: "icon-green",
  },
];

const bookings = [
  {
    id: "RS10021",
    packageName: "Kashmir Paradise",
    date: "12 May 2026",
    travellers: "2 Adults",
    status: "Confirmed",
    amount: "₹ 62,000",
  },
  {
    id: "RS10044",
    packageName: "Bali Escape",
    date: "20 Jun 2026",
    travellers: "2 Adults",
    status: "Pending",
    amount: "₹ 78,000",
  },
  {
    id: "RS09834",
    packageName: "Manali-Leh-Srinagar",
    date: "15 Jan 2026",
    travellers: "3 Adults",
    status: "Completed",
    amount: "₹ 54,500",
  },
];

const recommendedTrips = [
  {
    name: "Ladakh & Turtuk",
    duration: "7 Days / 6 Nights",
    price: "₹ 24,999",
    emoji: "🏔️",
  },
  {
    name: "Kerala Escape",
    duration: "5 Days / 4 Nights",
    price: "₹ 18,999",
    emoji: "🌴",
  },
  {
    name: "Dubai Special",
    duration: "5 Days / 4 Nights",
    price: "₹ 39,999",
    emoji: "🌆",
  },
];

export default function UserDashboardClient() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <div className="user-dashboard">
        <div className={`dashboard-layout ${collapsed ? "collapsed" : ""}`}>
          {/* Sidebar */}
          <aside className="sidebar">
            <div className="sidebar-header d-flex align-items-center justify-content-between">
                 <button
                className="collapse-button mb-3"
                onClick={() => setCollapsed(!collapsed)}
                aria-label="Toggle sidebar"
              >
                {collapsed ? "☰" : "✕"}
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

            <nav className="sidebar-menu">
              {sidebarItems.map((item) => (
                <button
                  key={item.key}
                  className={`sidebar-item ${
                    item.active ? "sidebar-active" : ""
                  }`}
                >
                  <span className="sidebar-icon">{item.icon}</span>

                  {!collapsed && <span>{item.label}</span>}
                </button>
              ))}
            </nav>
          </aside>

          {/* Main */}
          <main className="dashboard-content">
            {/* Welcome */}
            <section className="dashboard-heading">
              <div>
                <h1>Welcome Back!</h1>
                <p>
                  Manage your trips and discover your next adventure.
                </p>
              </div>

              <button className="explore-button">
                Explore Packages
              </button>
            </section>

            {/* Stats */}
            <section className="stats-grid">
              {stats.map((stat) => (
                <div
                  key={stat.title}
                  className={`stat-card ${stat.cardClass}`}
                >
                  <div
                    className={`stat-icon ${stat.iconClass}`}
                  >
                    {stat.icon}
                  </div>

                  <div>
                    <p className="stat-title">{stat.title}</p>

                    <h3>{stat.value}</h3>

                    <span className="stat-description">
                      {stat.description}
                    </span>
                  </div>
                </div>
              ))}
            </section>

            <section className="dashboard-grid">
              {/* Bookings */}
              <div className="panel bookings-panel">
                <div className="panel-header">
                  <h3>My Recent Bookings</h3>

                  <button className="view-button">
                    View All →
                  </button>
                </div>

                <div className="table-wrapper">
                  <table>
                    <thead>
                      <tr>
                        <th>Booking ID</th>
                        <th>Package</th>
                        <th>Travel Date</th>
                        <th>Travellers</th>
                        <th>Status</th>
                        <th>Amount</th>
                      </tr>
                    </thead>

                    <tbody>
                      {bookings.map((booking) => (
                        <tr key={booking.id}>
                          <td>{booking.id}</td>

                          <td className="package-name">
                            {booking.packageName}
                          </td>

                          <td>{booking.date}</td>

                          <td>{booking.travellers}</td>

                          <td>
                            <span
                              className={`status ${
                                booking.status === "Confirmed"
                                  ? "confirmed"
                                  : booking.status === "Pending"
                                  ? "pending"
                                  : "completed"
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

              {/* Right side */}
              <div className="right-column">
                {/* Upcoming */}
                <div className="panel upcoming-card">
                  <div className="panel-header">
                    <h3>Upcoming Trip</h3>
                  </div>

                  <div className="upcoming-content">
                    <div className="trip-image">
                      🏔️
                    </div>

                    <div>
                      <h4>Kashmir Paradise</h4>

                      <p>12 May - 18 May 2026</p>

                      <span>2 Travellers</span>
                    </div>
                  </div>

                  <button className="trip-details-button">
                    View Trip Details
                  </button>
                </div>

                {/* Quick Actions */}
                <div className="panel">
                  <div className="panel-header">
                    <h3>Quick Actions</h3>
                  </div>

                  <div className="quick-actions">
                    <button className="quick red">
                      <span>✈</span>
                      Explore Trips
                    </button>

                    <button className="quick blue">
                      <span>♡</span>
                      Wishlist
                    </button>

                    <button className="quick purple">
                      <span>💬</span>
                      Get Support
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Recommended */}
            <section className="panel recommendation-section">
              <div className="panel-header">
                <h3>Recommended For You</h3>

                <button className="view-button">
                  View All →
                </button>
              </div>

              <div className="recommendation-grid">
                {recommendedTrips.map((trip) => (
                  <div
                    key={trip.name}
                    className="recommendation-card"
                  >
                    <div className="destination-image">
                      {trip.emoji}
                    </div>

                    <div className="recommendation-details">
                      <h4>{trip.name}</h4>

                      <p>{trip.duration}</p>

                      <div className="price-row">
                        <strong>{trip.price}</strong>

                        <button>
                          View
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>

      
    </>
  );
}