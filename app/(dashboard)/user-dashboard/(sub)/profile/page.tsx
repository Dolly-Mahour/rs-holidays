"use client";

import { useState } from "react";
import "@/src/styles/user-dashboard.css";
import "@/src/styles/user-dashboard-subpages.css";

export default function ProfilePage() {
  const [editMode, setEditMode] = useState(false);

  return (
    <>
      <section className="dashboard-heading">
        <div>
          <h1>My Profile</h1>
          <p>Manage your personal information and preferences.</p>
        </div>
        <button className="explore-button" onClick={() => setEditMode(!editMode)}>
          {editMode ? "💾 Save Changes" : "✏️ Edit Profile"}
        </button>
      </section>

      <div className="profile-layout">
        {/* Left: Avatar + Quick Info */}
        <div className="profile-left">
          <div className="panel profile-avatar-card">
            <div className="profile-avatar-wrap">
              <div className="profile-avatar-big">TP</div>
              <div className="profile-avatar-badge">✓</div>
            </div>
            <h3 className="profile-name">Traveller Pro</h3>
            <p className="profile-role">Premium Member</p>
            <div className="profile-member-since">Member since Jan 2024</div>
            <div className="profile-quick-stats">
              <div className="pqs-item">
                <span className="pqs-num">08</span>
                <span className="pqs-label">Trips</span>
              </div>
              <div className="pqs-divider" />
              <div className="pqs-item">
                <span className="pqs-num">06</span>
                <span className="pqs-label">Wishlist</span>
              </div>
              <div className="pqs-divider" />
              <div className="pqs-item">
                <span className="pqs-num">4.8★</span>
                <span className="pqs-label">Rating</span>
              </div>
            </div>
            <button className="btn-upload-photo">📷 Change Photo</button>
          </div>

          {/* Travel Preferences */}
          <div className="panel" style={{ marginTop: 18 }}>
            <div className="panel-header">
              <h3>Travel Preferences</h3>
            </div>
            <div className="pref-tags">
              {["Mountains", "Beach", "Adventure", "Luxury", "Heritage", "Backpacking"].map((p) => (
                <span key={p} className="pref-tag">{p}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="profile-right">
          {/* Personal Info */}
          <div className="panel profile-section">
            <div className="panel-header">
              <h3>Personal Information</h3>
              <span className="verified-badge">✓ Verified</span>
            </div>
            <div className="profile-form-grid">
              <div className="form-group">
                <label className="form-label">First Name</label>
                <input
                  className="form-input"
                  type="text"
                  defaultValue="Traveller"
                  readOnly={!editMode}
                  style={{ background: editMode ? "#fff" : "#f8f9fb" }}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Last Name</label>
                <input
                  className="form-input"
                  type="text"
                  defaultValue="Pro"
                  readOnly={!editMode}
                  style={{ background: editMode ? "#fff" : "#f8f9fb" }}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                  className="form-input"
                  type="email"
                  defaultValue="traveller@rsholidays.com"
                  readOnly={!editMode}
                  style={{ background: editMode ? "#fff" : "#f8f9fb" }}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Phone Number</label>
                <input
                  className="form-input"
                  type="tel"
                  defaultValue="+91 98765 43210"
                  readOnly={!editMode}
                  style={{ background: editMode ? "#fff" : "#f8f9fb" }}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Date of Birth</label>
                <input
                  className="form-input"
                  type="text"
                  defaultValue="15 March 1992"
                  readOnly={!editMode}
                  style={{ background: editMode ? "#fff" : "#f8f9fb" }}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Nationality</label>
                <input
                  className="form-input"
                  type="text"
                  defaultValue="Indian"
                  readOnly={!editMode}
                  style={{ background: editMode ? "#fff" : "#f8f9fb" }}
                />
              </div>
            </div>
          </div>

          {/* Passport / ID */}
          <div className="panel profile-section">
            <div className="panel-header">
              <h3>Passport &amp; Travel Documents</h3>
            </div>
            <div className="profile-form-grid">
              <div className="form-group">
                <label className="form-label">Passport Number</label>
                <input
                  className="form-input"
                  type="text"
                  defaultValue="P1234567"
                  readOnly={!editMode}
                  style={{ background: editMode ? "#fff" : "#f8f9fb" }}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Passport Expiry</label>
                <input
                  className="form-input"
                  type="text"
                  defaultValue="12 Aug 2030"
                  readOnly={!editMode}
                  style={{ background: editMode ? "#fff" : "#f8f9fb" }}
                />
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="panel profile-section">
            <div className="panel-header">
              <h3>Address</h3>
            </div>
            <div className="profile-form-grid">
              <div className="form-group form-group-full">
                <label className="form-label">Street Address</label>
                <input
                  className="form-input"
                  type="text"
                  defaultValue="123 MG Road, Koramangala"
                  readOnly={!editMode}
                  style={{ background: editMode ? "#fff" : "#f8f9fb" }}
                />
              </div>
              <div className="form-group">
                <label className="form-label">City</label>
                <input
                  className="form-input"
                  type="text"
                  defaultValue="Bengaluru"
                  readOnly={!editMode}
                  style={{ background: editMode ? "#fff" : "#f8f9fb" }}
                />
              </div>
              <div className="form-group">
                <label className="form-label">State</label>
                <input
                  className="form-input"
                  type="text"
                  defaultValue="Karnataka"
                  readOnly={!editMode}
                  style={{ background: editMode ? "#fff" : "#f8f9fb" }}
                />
              </div>
              <div className="form-group">
                <label className="form-label">PIN Code</label>
                <input
                  className="form-input"
                  type="text"
                  defaultValue="560034"
                  readOnly={!editMode}
                  style={{ background: editMode ? "#fff" : "#f8f9fb" }}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Country</label>
                <input
                  className="form-input"
                  type="text"
                  defaultValue="India"
                  readOnly={!editMode}
                  style={{ background: editMode ? "#fff" : "#f8f9fb" }}
                />
              </div>
            </div>
          </div>

          {/* Security */}
          <div className="panel profile-section">
            <div className="panel-header">
              <h3>Security</h3>
            </div>
            <div className="security-items">
              <div className="security-item">
                <div>
                  <p className="sec-title">Password</p>
                  <p className="sec-desc">Last changed 3 months ago</p>
                </div>
                <button className="btn-sec">Change Password</button>
              </div>
              <div className="security-item">
                <div>
                  <p className="sec-title">Two-Factor Authentication</p>
                  <p className="sec-desc">Add an extra layer of security</p>
                </div>
                <div className="toggle-switch">
                  <input type="checkbox" id="2fa-toggle" defaultChecked />
                  <label htmlFor="2fa-toggle" />
                </div>
              </div>
              <div className="security-item">
                <div>
                  <p className="sec-title">Email Notifications</p>
                  <p className="sec-desc">Booking updates and offers</p>
                </div>
                <div className="toggle-switch">
                  <input type="checkbox" id="email-toggle" defaultChecked />
                  <label htmlFor="email-toggle" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
