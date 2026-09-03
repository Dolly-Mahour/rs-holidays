"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getPackageBySlug, PackageData } from "@/src/data/packagesData";
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Clock,
  Star,
  Users,
  CheckCircle,
  AlertCircle,
  Sparkles,
  ChevronDown,
  ChevronUp,
  PhoneCall
} from "lucide-react";
import "@/src/styles/trip-details.css";

export default function PackageDetailPage() {
  const params = useParams();
  const slug = (params?.slug as string) || "kheerganga-trek";
  const pkg: PackageData = getPackageBySlug(slug);

  const [openDay, setOpenDay] = useState<number | null>(0);
  const [bookingSuccess, setBookingSuccess] = useState<boolean>(false);

  const toggleDay = (index: number) => {
    setOpenDay(openDay === index ? null : index);
  };

  return (
    <div className="package-details-page bg-light min-vh-100 py-3 py-md-4">
      <div className="container-lg">

        {/* =========================================
            BACK LINK & TOP BAR
        ========================================= */}
        <div className="d-flex align-items-center justify-content-between mb-3">
          <Link
            href="/packages"
            className="btn btn-outline-secondary rounded-pill px-4 btn-sm d-inline-flex align-items-center gap-2 shadow-sm bg-white"
          >
            <ArrowLeft size={16} />
            <span>Back to All Packages</span>
          </Link>
          <span className="badge bg-rs-blue text-white rounded-pill px-3 py-2">
            📍 {pkg.state}
          </span>
        </div>

        {/* =========================================
            HERO CARD & OVERVIEW (FITS WITHIN 100VH VIEWPORT)
        ========================================= */}
        <div className="card border-0 rounded-4 shadow-sm overflow-hidden mb-5">
          <div className="row g-0 align-items-stretch">
            
            {/* Image / Video Column - Restricted to Viewport Height */}
            <div
              className="col-12 col-lg-6 position-relative"
              style={{
                height: "500px",
                maxHeight: "calc(100vh - 160px)",
                minHeight: "350px",
              }}
            >
              {pkg.video ? (
                <video
                  src={pkg.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-100 h-100 object-fit-cover"
                  style={{ height: "100%", maxHeight: "calc(100vh - 160px)" }}
                />
              ) : (
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-100 h-100 object-fit-cover"
                  style={{ height: "100%", maxHeight: "calc(100vh - 160px)" }}
                />
              )}
              <div className="position-absolute top-0 start-0 m-3 d-flex gap-2 z-2">
                <span className="badge bg-danger rounded-pill px-3 py-2 shadow-sm">
                  {pkg.state}
                </span>
                {pkg.video && (
                  <span className="badge bg-dark bg-opacity-75 text-white rounded-pill px-3 py-2 shadow-sm d-inline-flex align-items-center gap-1">
                    🎬 Video Tour
                  </span>
                )}
              </div>
            </div>

            {/* Content Column */}
            <div
              className="col-12 col-lg-6 p-4 p-md-5 d-flex flex-column justify-content-center bg-white"
              style={{ maxHeight: "calc(100vh - 160px)", overflowY: "auto" }}
            >
              <span className="text-danger fw-bold text-uppercase fs-7 mb-1 tracking-wider">
                TOUR PACKAGE ITINERARY
              </span>
              <h1 className="fw-bold text-dark display-6 mb-2">{pkg.fullName}</h1>
              <p className="text-muted mb-4 fs-6">{pkg.duration}</p>

              {/* Specs Pills */}
              <div className="row g-3 mb-4">
                <div className="col-6 col-sm-4">
                  <div className="p-3 bg-light rounded-3 text-center">
                    <Clock size={20} className="text-danger mb-1" />
                    <div className="fw-bold text-dark small">{pkg.duration.split("(")[0]}</div>
                    <div className="text-muted" style={{ fontSize: "11px" }}>Duration</div>
                  </div>
                </div>
                <div className="col-6 col-sm-4">
                  <div className="p-3 bg-light rounded-3 text-center">
                    <Users size={20} className="text-primary mb-1" />
                    <div className="fw-bold text-dark small">{pkg.bestFor}</div>
                    <div className="text-muted" style={{ fontSize: "11px" }}>Best For</div>
                  </div>
                </div>
                <div className="col-12 col-sm-4">
                  <div className="p-3 bg-light rounded-3 text-center">
                    <Star size={20} className="text-warning mb-1" />
                    <div className="fw-bold text-dark small">{pkg.rating} ({pkg.reviews})</div>
                    <div className="text-muted" style={{ fontSize: "11px" }}>Rating</div>
                  </div>
                </div>
              </div>

              {/* Price & CTA */}
              <div className="d-flex flex-wrap align-items-center justify-content-between pt-3 border-top gap-3">
                <div>
                  <span className="d-block text-muted small">Package Cost Starting From</span>
                  <span className="fw-bold text-danger display-6">₹{pkg.price}</span>
                  <span className="text-muted small"> / person</span>
                </div>
                <button
                  type="button"
                  onClick={() => setBookingSuccess(true)}
                  className="btn btn-danger rounded-pill px-4 py-3 fw-bold shadow-sm d-inline-flex align-items-center gap-2"
                >
                  <Sparkles size={18} />
                  <span>Book This Package</span>
                </button>
              </div>

              {bookingSuccess && (
                <div className="alert alert-success mt-3 mb-0 rounded-3 p-3 small d-flex align-items-center gap-2">
                  <CheckCircle size={18} />
                  <span>Package inquiry sent! Our travel specialist will contact you shortly.</span>
                </div>
              )}
            </div>

          </div>
        </div>

        {/* =========================================
            MAIN CONTENT: ITINERARY & DETAILS
        ========================================= */}
        <div className="row g-4">

          {/* Left Column: Day-wise Itinerary */}
          <div className="col-12 col-lg-7">
            <div className="bg-white rounded-4 p-4 p-md-5 shadow-sm mb-4">
              <div className="d-flex align-items-center justify-content-between mb-4">
                <div>
                  <span className="text-danger fw-bold text-uppercase fs-8 d-block mb-1">
                    DAY-BY-DAY SCHEDULE
                  </span>
                  <h3 className="fw-bold text-dark mb-0">Detailed Itinerary</h3>
                </div>
                <span className="badge bg-light text-dark border px-3 py-2 rounded-pill small">
                  {pkg.itinerary.length} Days Plan
                </span>
              </div>

              {/* Timeline Accordions */}
              <div className="d-flex flex-column gap-3">
                {pkg.itinerary.map((item, idx) => {
                  const isOpen = openDay === idx;
                  return (
                    <div
                      key={idx}
                      className={`border rounded-3 transition-all ${
                        isOpen ? "border-danger shadow-sm" : "border-light"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => toggleDay(idx)}
                        className="w-100 bg-white border-0 p-3 p-md-4 text-start d-flex align-items-center justify-content-between rounded-3 shadow-none"
                      >
                        <div className="d-flex align-items-center gap-3">
                          <span className="badge bg-rs-gradient text-white rounded-pill px-3 py-2">
                            {item.day}
                          </span>
                          <span className="fw-bold text-dark fs-6">{item.title}</span>
                        </div>
                        {isOpen ? (
                          <ChevronUp size={20} className="text-danger" />
                        ) : (
                          <ChevronDown size={20} className="text-muted" />
                        )}
                      </button>

                      {isOpen && (
                        <div className="px-3 px-md-4 pb-4 pt-0 border-top mt-2 text-muted fs-7">
                          <p className="mb-0 pt-3">{item.description}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Important Details & Need to Know */}
          <div className="col-12 col-lg-5">
            <div className="bg-white rounded-4 p-4 p-md-5 shadow-sm position-sticky" style={{ top: "90px" }}>
              <div className="d-flex align-items-center gap-2 mb-3">
                <AlertCircle size={20} className="text-danger" />
                <h4 className="fw-bold text-dark mb-0">Need To Know</h4>
              </div>
              <p className="text-muted small mb-4">
                Important details, permits, and guidelines for {pkg.title}.
              </p>

              <ul className="list-unstyled mb-4 d-flex flex-column gap-3">
                {pkg.importantDetails.map((detail, index) => (
                  <li key={index} className="d-flex align-items-start gap-2 fs-7 text-dark">
                    <span className="text-danger fw-bold mt-1">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              <div className="p-3 bg-light rounded-3 border">
                <div className="d-flex align-items-center gap-2 fw-bold text-dark small mb-1">
                  <PhoneCall size={16} className="text-danger" />
                  <span>Have questions about this trip?</span>
                </div>
                <p className="text-muted mb-0" style={{ fontSize: "12px" }}>
                  Call our travel captain directly for custom inclusions & group discounts.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
