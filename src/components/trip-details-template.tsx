"use client";

import React from "react";
import Link from "next/link";
import { getTripData, TripData } from "../types/tripsData";
import "../styles/trip-details.css";

interface TripDetailsTemplateProps {
  slug?: string;
  tripData?: TripData;
}

export default function TripDetailsTemplate({ slug = "bali", tripData }: TripDetailsTemplateProps) {
  const trip = tripData || getTripData(slug);

  // Split title into main word and accent word
  const titleParts = trip.title.split(" ");
  const mainTitlePart = titleParts.length > 1 ? titleParts.slice(0, -1).join(" ") : titleParts[0];
  const accentTitlePart = titleParts.length > 1 ? titleParts[titleParts.length - 1] : "";

  return (
    <main className="trip-details-wrapper">
      <div className="trip-container">

        {/* =========================================
            HEADER - BACK LINK
        ========================================= */}
        <div className="trip-back-header">
          <Link href="/upcoming-trips" className="trip-back-btn">
            <span className="trip-back-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </span>
            Back to All Trips
          </Link>
        </div>

        {/* =========================================
            HERO SECTION
        ========================================= */}
        <section className="trip-hero-section">

          <div className="trip-hero-left">
            <div className="trip-location-tag">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>{trip.location}</span>
            </div>

            <h1 className="trip-hero-title">
              {mainTitlePart}{" "}
              {accentTitlePart && (
                <span className="trip-title-accent">
                  {accentTitlePart}
                </span>
              )}
              <span className="trip-title-underline"></span>
            </h1>

            <p className="trip-hero-desc">
              {trip.description}
            </p>

            <div className="trip-info-card">
              <div className="trip-info-col">
                <div className="trip-info-icon-box pink">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </div>
                <div>
                  <div className="trip-info-val">{trip.duration}</div>
                  <div className="trip-info-lbl">Duration</div>
                </div>
              </div>

              <div className="trip-info-col">
                <div className="trip-info-icon-box purple">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div>
                  <div className="trip-info-val">{trip.bestFor}</div>
                  <div className="trip-info-lbl">Best For</div>
                </div>
              </div>

              <div className="trip-info-col">
                <div className="trip-info-icon-box pink">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
                <div>
                  <div className="trip-info-val">{trip.rating}</div>
                  <div className="trip-info-lbl">Ratings</div>
                </div>
              </div>
            </div>
          </div>

          <div className="trip-hero-graphic-wrapper">
            <div className="trip-dots-pattern"></div>

            <div className="trip-arch-outer-ring">
              <div className="trip-hero-img-frame">
                <img
                  src={trip.image || "/images/bali.png"}
                  alt={trip.title}
                  className="trip-hero-img"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/images/bali.png";
                  }}
                />
              </div>
            </div>

            <div className="trip-flight-path-wrap">
              <svg className="trip-flight-svg" viewBox="0 0 400 50" fill="none">
                <path
                  d="M 20 15 Q 180 55 360 20"
                  stroke="#a5b4fc"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                />
                <circle cx="20" cy="15" r="3" fill="#6366f1" />
              </svg>
              <div className="trip-plane-badge" title="Flight Path">✈</div>
            </div>

          </div>

        </section>

        {/* =========================================
            TRIP HIGHLIGHTS SECTION
        ========================================= */}
        <section className="trip-highlights-section">
          <div className="trip-highlights-header">
            <div className="trip-section-tag">
              <span>TRIP HIGHLIGHTS</span>
              <div className="trip-tag-line"></div>
            </div>
            <h2 className="trip-section-title">
              What makes <span>{trip.name}</span> special
            </h2>
          </div>

          <div className="trip-highlights-grid">
            {trip.highlights.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="trip-highlight-card">
                  <div className={`trip-card-icon-box ${isEven ? "pink" : "purple"}`}>
                    {index === 0 && (
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M13 8c0-2.76-2.24-5-5-5s-5 2.24-5 5c0 1.94 1.1 3.63 2.72 4.47L4 21h4l1.3-4.55C10.74 16.85 12 18 12 18" />
                        <path d="M17 10c2.76 0 5-2.24 5-5s-2.24-5-5-5c-1.94 0-3.63 1.1-4.47 2.72L11 2" />
                        <path d="M12 18s2.5 1.5 6 1.5 6-1.5 6-1.5" />
                        <path d="M2 18s2.5 1.5 6 1.5 6-1.5 6-1.5" />
                      </svg>
                    )}
                    {index === 1 && (
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2L2 7h20L12 2z" />
                        <path d="M4 7v4h16V7" />
                        <path d="M2 11l10-3 10 3" />
                        <path d="M6 11v11h12V11" />
                        <path d="M10 16h4v6h-4v-6z" />
                      </svg>
                    )}
                    {index === 2 && (
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="4" />
                        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                        <path d="M2 18s4-2 10-2 10 2 10 2" />
                      </svg>
                    )}
                    {index === 3 && (
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18.3 5.7c-3.1-3.1-8.2-3.1-11.3 0C3.9 8.8 2 14.5 2 21c6.5 0 12.2-1.9 15.3-5 3.1-3.1 3.1-8.2 1-10.3z" />
                        <line x1="7" y1="17" x2="17" y2="7" />
                      </svg>
                    )}
                  </div>
                  <h3 className="trip-card-title">{item.title}</h3>
                  <p className="trip-card-desc">{item.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* =========================================
            CALL TO ACTION BANNER
        ========================================= */}
        <section className="trip-cta-section">
          <div className="trip-cta-card">

            <span className="trip-cta-sparkle trip-cta-sparkle-1">✦</span>
            <span className="trip-cta-sparkle trip-cta-sparkle-2">✦</span>

            <div className="trip-cta-content">
              <h2 className="trip-cta-title">
                Ready to explore <span>{trip.name}</span>?
              </h2>
              <p className="trip-cta-subtext">
                Book your dream trip today and create memories for a lifetime.
              </p>
              <button
                type="button"
                className="trip-cta-btn"
                onClick={() => alert(`Booking availability requested for ${trip.name}!`)}
              >
                <span>Check Availability</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>

            <div className="trip-cta-graphic">
              <svg className="trip-gate-svg" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40 180 L120 70 L200 180 Z" fill="#c084fc" opacity="0.3" />
                <path d="M110 180 L180 50 L260 180 Z" fill="#818cf8" opacity="0.25" />
                <path d="M0 190 Q150 160 300 190 L300 200 L0 200 Z" fill="#e879f9" opacity="0.2" />

                <g fill="#2e1065">
                  <rect x="70" y="140" width="30" height="50" rx="2" />
                  <path d="M65 140 L105 140 L100 110 L70 110 Z" />
                  <path d="M60 110 L105 110 L95 80 L65 80 Z" />
                  <path d="M55 80 L100 80 L90 50 L60 50 Z" />
                  <path d="M50 50 L95 50 L85 20 L55 20 Z" />
                  <polygon points="55,20 85,20 70,5" />
                  <rect x="98" y="115" width="4" height="20" fill="#3b0764" />
                  <rect x="93" y="85" width="4" height="20" fill="#3b0764" />
                  <rect x="88" y="55" width="4" height="20" fill="#3b0764" />
                </g>

                <g fill="#2e1065">
                  <rect x="200" y="140" width="30" height="50" rx="2" />
                  <path d="M195 140 L235 140 L230 110 L200 110 Z" />
                  <path d="M195 110 L240 110 L235 80 L205 80 Z" />
                  <path d="M200 80 L245 80 L240 50 L210 50 Z" />
                  <path d="M205 50 L250 50 L245 20 L215 20 Z" />
                  <polygon points="215,20 245,20 230,5" />
                  <rect x="198" y="115" width="4" height="20" fill="#3b0764" />
                  <rect x="203" y="85" width="4" height="20" fill="#3b0764" />
                  <rect x="208" y="55" width="4" height="20" fill="#3b0764" />
                </g>

                <rect x="0" y="188" width="300" height="12" fill="#4c1d95" opacity="0.8" />
              </svg>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}
