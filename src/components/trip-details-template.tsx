"use client";

import React, { useState } from "react";
import Link from "next/link";
import { getTripData, TripData } from "../types/tripsData";
import { getPackageBySlug, PackageData } from "@/src/data/packagesData";
import {
  Clock,
  Star,
  Users,
  CheckCircle,
  AlertCircle,
  Sparkles,
  ChevronDown,
  ChevronUp,
  PhoneCall,
  ArrowLeft
} from "lucide-react";
import "../styles/trip-details.css";
import { useCurrency } from "@/src/context/CurrencyContext";

interface TripDetailsTemplateProps {
  slug?: string;
  tripData?: TripData;
}

export default function TripDetailsTemplate({ slug = "bali", tripData }: TripDetailsTemplateProps) {
  const { formatPrice } = useCurrency();
  const trip = tripData || getTripData(slug);
  const pkg: PackageData = getPackageBySlug(slug);

  const [openDay, setOpenDay] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<"overview" | "itinerary" | "inclusions" | "exclusions" | "other">("overview");
  const [showFullOverview, setShowFullOverview] = useState<boolean>(false);

  const toggleDay = (index: number) => {
    setOpenDay(openDay === index ? null : index);
  };

  const itineraryItems = (pkg && pkg.itinerary && pkg.itinerary.length > 0)
    ? pkg.itinerary
    : [];

  const importantDetails: string[] = (pkg && pkg.importantDetails && pkg.importantDetails.length > 0)
    ? pkg.importantDetails
    : (trip.highlights || []).map((h) => `${h.title}: ${h.description}`);

  const routeSummary = itineraryItems
    .map((item) => item.title.replace(/—.*/, "").trim())
    .join(" - ");

  const defaultInclusions = [
    "Accommodation on sharing basis (Hotels / Camps / Homestays as per itinerary).",
    "Meals specified in package details (Breakfast / Dinner).",
    "Transfers and sightseeing as per the itinerary in suitable vehicles.",
    "Trip Captain / Experienced Guide throughout the journey.",
    "All driver allowances, toll taxes, parking fees, and state permits."
  ];

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

  return (
    <main className="trip-details-wrapper bg-light min-vh-100 py-3 py-md-4">
      <div className="container-lg">

        {/* BACK LINK */}
        <div className="d-flex align-items-center justify-content-between mb-3">
          <Link
            href="/upcoming-trips"
            className="btn btn-outline-secondary rounded-pill px-4 btn-sm d-inline-flex align-items-center gap-2 shadow-sm bg-white text-dark text-decoration-none"
          >
            <ArrowLeft size={16} />
            <span>Back to All Trips</span>
          </Link>
          <span className="badge bg-rs-blue text-white rounded-pill px-3 py-2">
            📍 {trip.location || pkg.state}
          </span>
        </div>

        {/* HERO SECTION */}
        <div className="card border-0 rounded-4 shadow-sm overflow-hidden mb-4 bg-white">
          <div className="row g-0 align-items-stretch">
            
            <div className="col-12 col-lg-6 position-relative" style={{ height: "450px" }}>
              <img
                src={trip.image || pkg.image || "/images/bali.png"}
                alt={trip.title}
                className="w-100 h-100 object-fit-cover"
              />
              <div className="position-absolute top-0 start-0 m-3 z-2">
                <span className="badge bg-danger rounded-pill px-3 py-2 shadow-sm">
                  {trip.location || pkg.state}
                </span>
              </div>
            </div>

            <div className="col-12 col-lg-6 p-4 p-md-5 d-flex flex-column justify-content-center">
              <span className="text-danger fw-bold text-uppercase fs-7 mb-1 tracking-wider">
                EXPLORE DESTINATION
              </span>
              <h1 className="fw-bold text-dark display-6 mb-2">{trip.title}</h1>
              <p className="text-muted mb-4 fs-6">{trip.description}</p>

              <div className="row g-3 mb-4">
                <div className="col-4">
                  <div className="p-3 bg-light rounded-3 text-center">
                    <Clock size={20} className="text-danger mb-1" />
                    <div className="fw-bold text-dark small">{trip.duration}</div>
                    <div className="text-muted" style={{ fontSize: "11px" }}>Duration</div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="p-3 bg-light rounded-3 text-center">
                    <Users size={20} className="text-primary mb-1" />
                    <div className="fw-bold text-dark small">{trip.bestFor}</div>
                    <div className="text-muted" style={{ fontSize: "11px" }}>Best For</div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="p-3 bg-light rounded-3 text-center">
                    <Star size={20} className="text-warning mb-1" />
                    <div className="fw-bold text-dark small">{trip.rating}</div>
                    <div className="text-muted" style={{ fontSize: "11px" }}>Rating</div>
                  </div>
                </div>
              </div>

              <div className="d-flex align-items-center justify-content-between pt-3 border-top">
                <div>
                  <span className="d-block text-muted small">Starting Price</span>
                  <span className="fw-bold text-danger display-6">{formatPrice(pkg.price || 999)}</span>
                </div>
                <button
                  type="button"
                  onClick={() => alert(`Booking availability requested for ${trip.title}!`)}
                  className="btn btn-danger rounded-pill px-4 py-3 fw-bold shadow-sm d-inline-flex align-items-center gap-2"
                >
                  <Sparkles size={18} />
                  <span>Check Availability</span>
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* STICKY TAB BAR */}
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

        {/* CONTENT SECTIONS */}
        <div className="row g-4">
          <div className="col-12 col-lg-8">

            {/* OVERVIEW */}
            <div className="bg-white rounded-4 p-4 p-md-5 shadow-sm mb-4 border-0" id="overview">
              <div className="d-flex align-items-center gap-2 mb-3">
                <div className="bg-info rounded-pill" style={{ width: "4px", height: "26px" }}></div>
                <h3 className="fw-bold text-dark mb-0 fs-3">Overview & Highlights</h3>
              </div>

              {routeSummary && (
                <div className="p-3 mb-4 rounded-3 border border-info border-opacity-50 bg-info bg-opacity-10 text-dark fw-semibold fs-6">
                  {routeSummary}
                </div>
              )}

              <p className={`text-secondary fs-6 lh-relaxed mb-2 ${!showFullOverview ? "text-truncate-3" : ""}`}>
                {trip.description} Immerse yourself in breathtaking landscapes, cultural encounters, and extraordinary adventure activities tailored for an unforgettable journey.
              </p>

              <button
                type="button"
                onClick={() => setShowFullOverview(!showFullOverview)}
                className="btn btn-link text-info fw-bold p-0 mt-2 text-decoration-none d-inline-flex align-items-center gap-1"
              >
                <span>{showFullOverview ? "Read Less" : "Read More"}</span>
              </button>
            </div>

            {/* ITINERARY */}
            <div className="bg-white rounded-4 p-4 p-md-5 shadow-sm mb-4 border-0" id="itinerary">
              <div className="d-flex align-items-center justify-content-between mb-4 flex-wrap gap-2">
                <div>
                  <span className="text-danger fw-bold text-uppercase fs-8 tracking-wider d-block mb-1">
                    DAY-BY-DAY SCHEDULE
                  </span>
                  <h2 className="fw-bold text-dark mb-0 display-6">Detailed Itinerary</h2>
                </div>
                <span className="badge bg-light text-dark border px-3 py-2 rounded-pill fw-semibold shadow-sm fs-7">
                  {itineraryItems.length} Days Plan
                </span>
              </div>

              <div className="d-flex flex-column gap-3">
                {itineraryItems.map((item: { day: string; title: string; description: string }, idx: number) => {
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

            {/* INCLUSIONS */}
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

            {/* EXCLUSIONS */}
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

            {/* OTHER INFO */}
            <div className="bg-white rounded-4 p-4 p-md-5 shadow-sm mb-4 border-0" id="otherInfo">
              <div className="d-flex align-items-center gap-2 mb-4">
                <div className="bg-warning rounded-pill" style={{ width: "4px", height: "26px" }}></div>
                <h3 className="fw-bold text-dark mb-0 fs-3">Other Info & Guidelines</h3>
              </div>
              <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                {importantDetails.map((detail, idx) => (
                  <li key={idx} className="d-flex align-items-start gap-3 fs-6 text-dark p-3 bg-light rounded-3">
                    <Sparkles size={18} className="text-primary flex-shrink-0 mt-1" />
                    <span className="lh-relaxed">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* SIDEBAR */}
          <div className="col-12 col-lg-4">
            <div className="bg-white rounded-4 p-4 shadow-sm position-sticky" style={{ top: "140px" }}>
              <div className="d-flex align-items-center gap-2 mb-3">
                <AlertCircle size={20} className="text-danger" />
                <h4 className="fw-bold text-dark mb-0 fs-5">Key Guidelines</h4>
              </div>
              <p className="text-muted small mb-4">
                Important rules & advice for {trip.title}.
              </p>

              <ul className="list-unstyled mb-4 d-flex flex-column gap-3">
                {importantDetails.map((detail, index) => (
                  <li key={index} className="d-flex align-items-start gap-2 fs-7 text-dark">
                    <span className="text-danger fw-bold mt-1">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              <div className="p-3 bg-light rounded-3 border">
                <div className="d-flex align-items-center gap-2 fw-bold text-dark small mb-1">
                  <PhoneCall size={16} className="text-danger" />
                  <span>Need Custom Group Plans?</span>
                </div>
                <p className="text-muted mb-0" style={{ fontSize: "12px" }}>
                  Connect with our travel team to customize dates, itineraries & group offers.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
