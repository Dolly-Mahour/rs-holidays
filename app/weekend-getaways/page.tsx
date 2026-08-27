"use client";

import React from "react";
import Link from "next/link";
import {
  Calendar,
  Users,
  Star,
  Clock,
  Mountain,
  Bed,
  Camera,
  MapPin,
  Heart,
  ArrowRight,
  ChevronRight,
  Plane,
  Sparkles,
  ArrowLeft,
} from "lucide-react";
import "../../src/styles/weekend-getaways.css";

export function WeekendGetaways() {
  const whyChooseItems = [
    {
      icon: Clock,
      color: "pink",
      title: "Quick & Easy",
      desc: "Short on time? We make planning simple and stress-free.",
    },
    {
      icon: Mountain,
      color: "purple",
      title: "Scenic Escapes",
      desc: "Beautiful destinations perfect for a quick reset.",
    },
    {
      icon: Bed,
      color: "pink",
      title: "Comfortable Stays",
      desc: "Curated stays that offer relaxation and charm.",
    },
    {
      icon: Camera,
      color: "purple",
      title: "Adventure Awaits",
      desc: "From exploration to thrill, make every moment count.",
    },
  ];

  const popularEscapes = [
    {
      id: 1,
      title: "Nainital, Uttarakhand",
      rating: "4.8",
      reviews: "320+",
      desc: "Lakes, pine forests & cool mountain air.",
      duration: "2 Nights / 3 Days",
      price: "6,999",
      badge: "Hill Retreat",
      badgeColor: "indigo",
      image: "/images/himachal.png",
    },
    {
      id: 2,
      title: "Goa",
      rating: "4.7",
      reviews: "280+",
      desc: "Sun, sea & sandy vibes for the soul.",
      duration: "2 Nights / 3 Days",
      price: "7,499",
      badge: "Beach Escape",
      badgeColor: "pink",
      image: "/images/bali.png",
    },
    {
      id: 3,
      title: "Coorg, Karnataka",
      rating: "4.9",
      reviews: "410+",
      desc: "Waterfalls, coffee trails & calm.",
      duration: "2 Nights / 3 Days",
      price: "6,499",
      badge: "Nature Break",
      badgeColor: "darkblue",
      image: "/images/waterfall.png",
    },
  ];

  return (
    <div className="weekend-page-container">

      {/* Main Hero Banner Section */}
      <div className="weekend-hero-wrapper">
        <div className="weekend-hero-card">
          <img
            src="/images/weekend-top-banner.png"
            alt="Weekend Getaways scenic banner"
            className="weekend-hero-img"
          />

          {/* Floating White Card */}
          <div className="weekend-hero-overlay-card">
            {/* Top Back Link & Decorative Flight Trajectory */}
            <div className="d-flex align-items-center justify-content-between">
              <Link href="/trips" className="weekend-back-link">
                <ArrowLeft size={16} />
                <span>Back to Trips</span>
              </Link>
              {/* Dotted Trajectory & Red Plane */}
              <div style={{ position: "relative", width: "80px", height: "30px" }}>
                <svg width="80" height="30" viewBox="0 0 80 30" fill="none">
                  <path
                    d="M 5 25 Q 40 5 75 10"
                    stroke="#f43f5e"
                    strokeWidth="1.5"
                    strokeDasharray="3 3"
                  />
                </svg>
                <Plane
                  size={14}
                  style={{
                    position: "absolute",
                    top: "4px",
                    right: "2px",
                    transform: "rotate(25deg)",
                    color: "#e11d48",
                    fill: "#e11d48",
                  }}
                />
              </div>
            </div>

            {/* Title */}
            <h1 className="weekend-hero-title-main">
              Weekend <br />
              <span className="weekend-hero-title-gradient">Getaways</span>
            </h1>

            {/* Wavy Red Underline */}
            <svg
              className="weekend-wavy-underline"
              viewBox="0 0 140 12"
              fill="none"
            >
              <path
                d="M2 6 Q 20 1, 38 6 T 74 6 T 110 6 T 138 6"
                stroke="#e11d48"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>

            {/* Subtitle Description */}
            <p className="weekend-hero-desc">
              Short trips, big memories. <br />
              Recharge with handpicked escapes made for your perfect weekend.
            </p>
          </div>
        </div>
      </div>

      {/* Highlights Bar (3 Key Benefit Pills) */}
      <div className="weekend-highlights-bar">
        <div className="weekend-highlights-inner">
          {/* Background Decorative Dot Grid Patterns */}
          <svg className="weekend-dot-grid left" viewBox="0 0 60 60">
            <pattern id="dots1" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#a855f7" />
            </pattern>
            <rect width="60" height="60" fill="url(#dots1)" />
          </svg>
          <svg className="weekend-dot-grid right" viewBox="0 0 60 60">
            <pattern id="dots2" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#f43f5e" />
            </pattern>
            <rect width="60" height="60" fill="url(#dots2)" />
          </svg>

          {/* Item 1 */}
          <div className="weekend-highlight-item">
            <div className="weekend-icon-badge pink">
              <Calendar size={22} />
            </div>
            <div>
              <h4 className="weekend-highlight-title">2–3 Days</h4>
              <p className="weekend-highlight-sub">Quick escapes, maximum refresh.</p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="weekend-highlight-item">
            <div className="weekend-icon-badge purple">
              <Users size={22} />
            </div>
            <div>
              <h4 className="weekend-highlight-title">
                Perfect for Couples, Friends &amp; Families
              </h4>
            </div>
          </div>

          {/* Item 3 */}
          <div className="weekend-highlight-item">
            <div className="weekend-icon-badge rose">
              <Star size={22} />
            </div>
            <div>
              <h4 className="weekend-highlight-title">Top Rated Short Trips</h4>
              <p className="weekend-highlight-sub">Loved by travelers.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="weekend-section-wrapper">
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <div className="weekend-section-subhead">
              <Sparkles size={14} />
              <span>WHY CHOOSE</span>
            </div>
            <h2 className="weekend-section-heading mt-1">
              Why a <span className="weekend-text-highlight">weekend</span> getaway?
            </h2>
          </div>

          {/* Decorative Flight Trajectory Right */}
          <div className="d-none d-md-block" style={{ position: "relative", width: "160px", height: "45px" }}>
            <svg width="160" height="45" viewBox="0 0 160 45" fill="none">
              <path
                d="M 10 35 Q 80 5 150 20"
                stroke="#f43f5e"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
            </svg>
            <Plane
              size={16}
              style={{
                position: "absolute",
                top: "12px",
                right: "8px",
                transform: "rotate(15deg)",
                color: "#be123c",
                fill: "#be123c",
              }}
            />
            <Sparkles
              size={12}
              style={{
                position: "absolute",
                top: "2px",
                right: "32px",
                color: "#f43f5e",
              }}
            />
          </div>
        </div>

        {/* 4 Feature Cards */}
        <div className="weekend-why-grid mt-4">
          {whyChooseItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="weekend-why-card">
                <div className={`weekend-why-icon-box ${item.color}`}>
                  <IconComponent size={28} />
                </div>
                <h3 className="weekend-why-card-title">{item.title}</h3>
                <p className="weekend-why-card-desc">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Popular Escapes / Top weekend getaways Section */}
      <div className="weekend-section-wrapper">
        <div className="weekend-section-subhead purple">
          <Plane size={14} />
          <span>POPULAR ESCAPES</span>
        </div>
        <div className="weekend-section-title-row">
          <h2 className="weekend-section-heading">
            Top <span className="weekend-text-highlight">weekend</span> getaways
          </h2>
          <Link href="/getaways" className="weekend-view-all-link">
            <span>View all getaways</span>
            <ChevronRight size={18} />
          </Link>
        </div>

        {/* 3 Destination Cards */}
        <div className="weekend-escapes-grid">
          {popularEscapes.map((card) => (
            <div key={card.id} className="weekend-escape-card">
              <div className="weekend-escape-img-box">
                <img
                  src={card.image}
                  alt={card.title}
                  className="weekend-escape-img"
                />
                <span className={`weekend-badge-pill ${card.badgeColor}`}>
                  {card.badge}
                </span>
                <button className="weekend-heart-btn" aria-label="Favorite">
                  <Heart size={18} />
                </button>
              </div>

              <div className="weekend-escape-body">
                <div className="weekend-escape-top-row">
                  <div className="weekend-escape-location">
                    <MapPin size={18} style={{ color: "#e11d48" }} />
                    <span>{card.title}</span>
                  </div>
                  <div className="weekend-escape-rating">
                    <Star size={16} className="weekend-star-icon" />
                    <span>
                      {card.rating} ({card.reviews})
                    </span>
                  </div>
                </div>

                <p className="weekend-escape-desc">{card.desc}</p>

                <div className="weekend-escape-footer">
                  <div className="weekend-duration">
                    <Calendar size={15} />
                    <span>{card.duration}</span>
                  </div>
                  <div>
                    <span className="weekend-price-label">From </span>
                    <span className="weekend-price-value">₹{card.price}</span>
                    <span className="weekend-price-label"> / person</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA Banner */}
      <div className="weekend-cta-wrapper">
        <div className="weekend-cta-card">
          <div className="weekend-cta-content">
            <div>
              <h2 className="weekend-cta-left-heading">
                Your perfect weekend <br />
                <span style={{ color: "#e11d48", position: "relative", display: "inline-block" }}>
                  starts here
                  <Sparkles
                    size={16}
                    style={{
                      position: "absolute",
                      top: "-4px",
                      right: "-20px",
                      color: "#f43f5e",
                    }}
                  />
                </span>
              </h2>
            </div>

            <div>
              <p className="weekend-cta-subtext mb-0">
                Short trips. Lasting memories. <br />
                Let's plan your next escape.
              </p>
            </div>

            <div>
              <Link href="/explore" className="weekend-cta-btn">
                <span>Explore Getaways</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* Tropical Beach Illustration graphic on bottom right */}
          <div className="weekend-cta-illustration d-none d-lg-block">
            <svg width="180" height="100" viewBox="0 0 180 100" fill="none">
              {/* Soft Pink Sun */}
              <circle cx="140" cy="50" r="30" fill="#fbcfe8" opacity="0.7" />
              {/* Palm Trees silhouette */}
              <path
                d="M 150 90 C 145 60 135 45 130 30 C 138 25 150 25 155 35 M 130 30 C 120 20 105 25 100 30 M 130 30 C 135 15 145 10 155 12"
                stroke="#312e81"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M 165 90 C 162 65 158 52 155 40 C 162 36 172 37 175 44 M 155 40 C 146 32 135 36 130 40"
                stroke="#312e81"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />
              {/* Beach Chair & Umbrella */}
              <path d="M 90 85 L 115 85 L 110 75 Z" fill="#4c1d95" />
              <path d="M 100 75 L 85 55" stroke="#4c1d95" strokeWidth="2" />
              <path
                d="M 70 55 C 80 45 100 45 110 55 Z"
                fill="#e11d48"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeekendGetaways;
