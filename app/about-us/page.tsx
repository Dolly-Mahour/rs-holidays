'use client'

import React from "react";
import "../../src/styles/about-us.css";

const AboutUs = () => {
  const highlights = [
    {
      icon: "bi-compass",
      title: "Expert Planning",
      description:
        "Carefully designed itineraries crafted by experienced travel professionals.",
      theme: "red",
    },
    {
      icon: "bi-shield-check",
      title: "Trusted Service",
      description:
        "Reliable support before, during and after your trip.",
      theme: "blue",
    },
    {
      icon: "bi-suitcase-lg",
      title: "Great Experiences",
      description:
        "Handpicked experiences that bring your journey to life.",
      theme: "red",
    },
    {
      icon: "bi-heart",
      title: "Memorable Journeys",
      description:
        "We help you create stories and memories you'll always cherish.",
      theme: "blue",
    },
  ];

  return (
    <main className="about-page">
      {/* =========================
          HERO SECTION
      ========================= */}
      <section className="about-hero">
        {/* Background Decorations */}
        <div className="about-bg-red-shape"></div>
        <div className="about-bg-blue-shape"></div>

        <div className="about-dots about-dots-right">
          {Array.from({ length: 24 }).map((_, index) => (
            <span key={index}></span>
          ))}
        </div>

        <div className="container position-relative about-container">
          <div className="row align-items-center g-5">
            {/* LEFT CONTENT */}
            <div className="col-lg-5">
              <div className="about-copy">
                <div className="about-eyebrow">
                  <span className="about-eyebrow-line"></span>
                  ABOUT RS HOLIDAYS
                </div>

                <h1 className="about-title">
                  Travel With
                  <span className="about-title-red"> Purpose.</span>
                  <br />
                  Explore With Us.
                </h1>

                <p className="about-description">
                  At RS Holidays, we believe travel is more than just visiting
                  new places — it&apos;s about creating experiences, discovering
                  cultures and building memories that last a lifetime.
                </p>

                {/* Statistics */}
                <div className="about-stats">
                  <div className="about-stat-item">
                    <div className="about-stat-icon red">
                      <i className="bi bi-people"></i>
                    </div>

                    <div>
                      <strong>10K+</strong>
                      <span>Happy Travellers</span>
                    </div>
                  </div>

                  <div className="about-stat-divider"></div>

                  <div className="about-stat-item">
                    <div className="about-stat-icon blue">
                      <i className="bi bi-globe2"></i>
                    </div>

                    <div>
                      <strong>25+</strong>
                      <span>Destinations</span>
                    </div>
                  </div>

                  <div className="about-stat-divider"></div>

                  <div className="about-stat-item">
                    <div className="about-stat-icon red">
                      <i className="bi bi-award"></i>
                    </div>

                    <div>
                      <strong>8+</strong>
                      <span>Years of Trust</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLLAGE */}
            <div className="col-lg-7">
              <div className="about-visual">
                {/* dotted flying path */}
                <div className="about-flight-decoration">
                  <div className="about-flight-line"></div>
                  <i className="bi bi-airplane-fill"></i>
                </div>

                {/* MAIN IMAGE */}
                <div className="about-main-image">
                  <img
                    src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=90"
                    alt="Traveller enjoying mountain view"
                  />

                  <div className="about-main-image-overlay"></div>
                </div>

                {/* SMALL IMAGE 1 */}
                <div className="about-floating-image about-floating-one">
                  <img
                    src="https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=700&q=90"
                    alt="Hot air balloons"
                  />
                </div>

                {/* SMALL IMAGE 2 */}
                <div className="about-floating-image about-floating-two">
                  <img
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=90"
                    alt="Luxury tropical destination"
                  />
                </div>

                {/* circle decoration */}
                <div className="about-circle-decoration"></div>
              </div>
            </div>
          </div>

          {/* =========================
              BOTTOM FEATURES
          ========================= */}
          <div className="about-features">
            <div className="row g-0">
              {highlights.map((item, index) => (
                <div
                  className="col-sm-6 col-lg-3"
                  key={item.title}
                >
                  <div
                    className={`about-feature-item ${index !== highlights.length - 1
                      ? "about-feature-bordered"
                      : ""
                      }`}
                  >
                    <div
                      className={`about-feature-icon ${item.theme}`}
                    >
                      <i className={`bi ${item.icon}`}></i>
                    </div>

                    <div className="about-feature-content">
                      <h3>{item.title}</h3>

                      <p>{item.description}</p>

                      <span
                        className={`about-feature-line ${item.theme}`}
                      ></span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;