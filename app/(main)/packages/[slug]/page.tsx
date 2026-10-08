"use client";

import React, { useState, useEffect } from "react";
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
  PhoneCall,
  Info,
  ShieldCheck,
  FileText
} from "lucide-react";
import "@/src/styles/trip-details.css";
import { useCurrency } from "@/src/context/CurrencyContext";

export default function PackageDetailPage() {
  const { formatPrice } = useCurrency();
  const params = useParams();
  const slug = (params?.slug as string) || "kheerganga-trek";
  const pkg: PackageData = getPackageBySlug(slug);

  const [openDay, setOpenDay] = useState<number | null>(0);
  const [bookingSuccess, setBookingSuccess] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<"overview" | "itinerary" | "inclusions" | "exclusions" | "other">("overview");
  const [showFullOverview, setShowFullOverview] = useState<boolean>(false);

  const toggleDay = (index: number) => {
    setOpenDay(openDay === index ? null : index);
  };

  const routeSummary = pkg.itinerary
    .map((item) => item.title.replace(/—.*/, "").trim())
    .join(" - ");

  // Default Inclusions
  const defaultInclusions = [
    "Accommodation on sharing basis (Hotels / Camps / Homestays as per itinerary).",
    "Meals specified in package details (Breakfast / Dinner).",
    "Transfers and sightseeing as per the itinerary in suitable vehicles.",
    "Trip Captain / Experienced Guide throughout the journey.",
    "All driver allowances, toll taxes, parking fees, and state permits."
  ];

  // Default Exclusions
  const defaultExclusions = [
    "GST (5%) charged extra as applicable.",
    "Personal expenses such as shopping, laundry, phone calls, and tips.",
    "Any adventure activity charges (Paragliding, Skiing, Rafting, Cable Car) unless explicitly specified.",
    "Travel Insurance & Medical emergency evacuation expenses.",
    "Meals & beverages during transit or outside specified itinerary."
  ];

  const handleTabClick = (tabId: "overview" | "itinerary" | "inclusions" | "exclusions" | "other") => {
    setActiveTab(tabId);
    const element = document.getElementById(tabId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    if (pkg?.title) {
      document.title = `${pkg.title} (${pkg.duration}) | RS Holidays`;
    }
  }, [pkg?.title, pkg?.duration]);

  const touristTripSchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: pkg.fullName || pkg.title,
    description:
      (pkg.importantDetails && pkg.importantDetails[0]) ||
      `Detailed ${pkg.duration} holiday tour package in ${pkg.state}.`,
    image: `https://rsholidays.com${pkg.image}`,
    touristType: pkg.bestFor,
    offers: {
      "@type": "Offer",
      price: pkg.price ? pkg.price.replace(/,/g, "") : "999",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: `https://rsholidays.com/packages/${pkg.slug}`,
    },
    itinerary: {
      "@type": "ItemList",
      numberOfItems: pkg.itinerary?.length || 0,
      itemListElement: (pkg.itinerary || []).map((it, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: it.title,
        description: it.description,
      })),
    },
  };

  return (
    <div className="trip-details-page bg-light min-vh-100 py-4 py-md-5">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(touristTripSchema) }}
      />
      <div className="container-lg">

        {/* =========================================
            TOP BREADCRUMB / BACK NAV
        ========================================= */}
        <div className="mb-4 d-flex align-items-center justify-content-between flex-wrap gap-2">
          <Link
            href="/packages"
            className="btn btn-outline-secondary rounded-pill px-3 py-1 btn-sm d-inline-flex align-items-center gap-1"
          >
            <ArrowLeft size={16} />
            <span>Back to All Packages</span>
          </Link>
          <div className="d-flex align-items-center gap-2">
            <span className="text-muted small">Share:</span>
            <span className="badge bg-secondary rounded-pill px-2 py-1 small">
              RS Holidays
            </span>
          </div>
        </div>

        {/* =========================================
            HERO SECTION WITH MEDIA & QUICK INFO
        ========================================= */}
        <div className="bg-white rounded-4 shadow-sm overflow-hidden mb-5 border">
          <div className="row g-0">
            {/* Media column */}
            <div className="col-12 col-lg-7 position-relative" style={{ minHeight: "380px" }}>
              {pkg.video ? (
                <video
                  src={pkg.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-100 h-100 object-fit-cover"
                />
              ) : (
                <img
                  src={pkg.image}
                  alt={`${pkg.title} - ${pkg.state} Adventure Tour Package by RS Holidays`}
                  className="w-100 h-100 object-fit-cover"
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
                  <span className="fw-bold text-danger display-6">{formatPrice(pkg.price)}</span>
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
            NAVIGATION TABS (STICKY TAB BAR)
        ========================================= */}
        <div className="bg-white rounded-3 p-2 mb-4 shadow-sm border position-sticky" style={{ top: "70px", zIndex: 10 }}>
          <div className="d-flex align-items-center gap-1 gap-md-3 overflow-x-auto pb-1 text-nowrap custom-scrollbar">
            {[
              { id: "overview", label: "Overview & Highlights" },
              { id: "itinerary", label: "Itinerary" },
              { id: "inclusions", label: "Inclusions" },
              { id: "exclusions", label: "Exclusions" },
              { id: "otherInfo", label: "Other Info" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => handleTabClick(tab.id as any)}
                className={`btn border-0 py-2 px-3 fw-bold transition-all ${
                  activeTab === tab.id
                    ? "btn-info text-white shadow-sm"
                    : "btn-light text-dark bg-white"
                }`}
                style={{ fontSize: "14px", borderRadius: "8px" }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* =========================================
            MAIN CONTENT SECTIONS
        ========================================= */}
        <div className="row g-4">

          {/* Left Main Column */}
          <div className="col-12 col-lg-8">

            {/* SECTION 1: OVERVIEW & HIGHLIGHTS */}
            <div className="bg-white rounded-4 p-4 p-md-5 shadow-sm mb-4 border-0" id="overview">
              <div className="d-flex align-items-center gap-2 mb-3">
                <div className="bg-info rounded-pill" style={{ width: "4px", height: "26px" }}></div>
                <h3 className="fw-bold text-dark mb-0 fs-3">Overview & Highlights</h3>
              </div>

              {/* Route Box */}
              <div className="p-3 mb-4 rounded-3 border border-info border-opacity-50 bg-info bg-opacity-10 text-dark fw-semibold fs-6">
                {routeSummary}
              </div>

              {/* Description */}
              <p className={`text-secondary fs-6 lh-relaxed mb-2 ${!showFullOverview ? "text-truncate-3" : ""}`}>
                This {pkg.duration.split("(")[0]} {pkg.fullName} adventure is one of the most exciting ways to explore {pkg.state}'s famous high roads, scenic valleys, local culture, and breathtaking landscapes. Designed carefully for travelers seeking an unforgettable experience with curated stays, comfortable travel, and guided exploration.
              </p>

              <button
                type="button"
                onClick={() => setShowFullOverview(!showFullOverview)}
                className="btn btn-link text-info fw-bold p-0 mt-2 text-decoration-none d-inline-flex align-items-center gap-1"
              >
                <span>{showFullOverview ? "Read Less" : "Read More"}</span>
              </button>
            </div>

            {/* SECTION 2: DETAILED ITINERARY */}
            <div className="bg-white rounded-4 p-4 p-md-5 shadow-sm mb-4 border-0" id="itinerary">
              <div className="d-flex align-items-center justify-content-between mb-4 flex-wrap gap-2">
                <div>
                  <span className="text-danger fw-bold text-uppercase fs-8 tracking-wider d-block mb-1">
                    DAY-BY-DAY SCHEDULE
                  </span>
                  <h2 className="fw-bold text-dark mb-0 display-6">Detailed Itinerary</h2>
                </div>
                <span className="badge bg-light text-dark border px-3 py-2 rounded-pill fw-semibold shadow-sm fs-7">
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
                      className={`border rounded-3 transition-all overflow-hidden ${
                        isOpen
                          ? "border-danger shadow-sm border-2"
                          : "border-light-subtle bg-white"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => toggleDay(idx)}
                        className="w-100 bg-white border-0 p-3 p-md-4 text-start d-flex align-items-center justify-content-between shadow-none"
                      >
                        <div className="d-flex align-items-center gap-3">
                          <span
                            className="badge text-white rounded-pill px-3 py-2 fw-semibold"
                            style={{ background: "linear-gradient(135deg, #b91c1c 0%, #4338ca 100%)" }}
                          >
                            {item.day}
                          </span>
                          <span className="fw-bold text-dark fs-5">{item.title}</span>
                        </div>
                        {isOpen ? (
                          <ChevronUp size={22} className="text-danger" />
                        ) : (
                          <ChevronDown size={22} className="text-muted" />
                        )}
                      </button>

                      {isOpen && (
                        <div className="px-3 px-md-4 pb-4 pt-0 border-top mt-2 text-secondary fs-6">
                          <p className="mb-0 pt-3 lh-relaxed">{item.description}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* SECTION 3: INCLUSIONS */}
            <div className="bg-white rounded-4 p-4 p-md-5 shadow-sm mb-4 border-0" id="inclusions">
              <div className="d-flex align-items-center gap-2 mb-4">
                <div className="bg-success rounded-pill" style={{ width: "4px", height: "26px" }}></div>
                <h3 className="fw-bold text-dark mb-0 fs-3">Inclusions</h3>
              </div>
              <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                {defaultInclusions.map((inc, i) => (
                  <li key={i} className="d-flex align-items-start gap-3 fs-6 text-dark p-2 rounded-2">
                    <CheckCircle size={20} className="text-success flex-shrink-0 mt-1" />
                    <span className="lh-relaxed">{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* SECTION 4: EXCLUSIONS */}
            <div className="bg-white rounded-4 p-4 p-md-5 shadow-sm mb-4 border-0" id="exclusions">
              <div className="d-flex align-items-center gap-2 mb-4">
                <div className="bg-danger rounded-pill" style={{ width: "4px", height: "26px" }}></div>
                <h3 className="fw-bold text-dark mb-0 fs-3">Exclusions</h3>
              </div>
              <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                {defaultExclusions.map((exc, i) => (
                  <li key={i} className="d-flex align-items-start gap-3 fs-6 text-dark p-2 rounded-2">
                    <AlertCircle size={20} className="text-danger flex-shrink-0 mt-1" />
                    <span className="lh-relaxed">{exc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* SECTION 5: OTHER INFO & GUIDELINES (PDF DATA) */}
            <div className="bg-white rounded-4 p-4 p-md-5 shadow-sm mb-4 border-0" id="otherInfo">
              <div className="d-flex align-items-center gap-2 mb-4">
                <div className="bg-warning rounded-pill" style={{ width: "4px", height: "26px" }}></div>
                <h3 className="fw-bold text-dark mb-0 fs-3">Other Info & Guidelines</h3>
              </div>
              <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                {pkg.importantDetails.map((detail, idx) => (
                  <li key={idx} className="d-flex align-items-start gap-3 fs-6 text-dark p-3 bg-light rounded-3">
                    <Sparkles size={18} className="text-primary flex-shrink-0 mt-1" />
                    <span className="lh-relaxed">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Right Sticky Sidebar Column */}
          <div className="col-12 col-lg-4">
            <div className="bg-white rounded-4 p-4 shadow-sm position-sticky" style={{ top: "140px" }}>
              <div className="d-flex align-items-center gap-2 mb-3">
                <AlertCircle size={20} className="text-danger" />
                <h4 className="fw-bold text-dark mb-0 fs-5">Important Details</h4>
              </div>
              <p className="text-muted small mb-4">
                Key requirements & notes for {pkg.title}.
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
                  <span>Customization Available</span>
                </div>
                <p className="text-muted mb-0" style={{ fontSize: "12px" }}>
                  Need custom dates, private cab, or hotel upgrades? Talk to our travel experts.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
