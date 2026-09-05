"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ALL_PACKAGES, PackageData } from "@/src/data/packagesData";
import { MapPin, Calendar, Clock, Star, ArrowRight, Sparkles, Filter } from "lucide-react";
import "@/src/styles/upcoming-trips.css";
import { useCurrency } from "@/src/context/CurrencyContext";

export default function PackagesPage() {
  const { formatPrice } = useCurrency();
  const [selectedState, setSelectedState] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const states = [
    "All",
    "Himachal Pradesh",
    "Uttarakhand",
    "Rajasthan",
    "Ladakh",
    "Jammu & Kashmir",
    "Kerala",
    "Meghalaya",
    "Tamil Nadu / Karnataka"
  ];

  const filteredPackages = ALL_PACKAGES.filter((pkg) => {
    const matchesState =
      selectedState === "All" ||
      pkg.state.toLowerCase().includes(selectedState.toLowerCase());
    const matchesSearch =
      pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.state.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesState && matchesSearch;
  });

  return (
    <div className="packages-page-wrapper bg-light min-vh-100 py-5">
      <div className="container-lg">

        {/* =========================================
            HERO HEADER BANNER
        ========================================= */}
        <div className="bg-rs-gradient rounded-4 p-4 p-md-5 text-white mb-5 shadow-lg position-relative overflow-hidden">
          <div className="position-relative z-2">
            <span className="badge bg-white text-danger fw-bold text-uppercase px-3 py-2 rounded-pill mb-3">
              ✦ ALL 27 TOUR PACKAGES ✦
            </span>
            <h1 className="fw-bold display-5 mb-3">
              Handcrafted Indian <span className="fst-italic text-warning">Holiday Packages</span>
            </h1>
            <p className="fs-6 text-white-50 max-w-700">
              Explore detailed day-wise itineraries, high-altitude treks, cultural expeditions, and scenic getaways across India's top destinations.
            </p>
          </div>
        </div>

        {/* =========================================
            STATE FILTERS & SEARCH
        ========================================= */}
        <div className="bg-white rounded-4 p-3 p-md-4 shadow-sm mb-5">
          <div className="row g-3 align-items-center mb-3">
            <div className="col-12 col-md-6">
              <div className="d-flex align-items-center gap-2">
                <Filter size={18} className="text-danger" />
                <span className="fw-bold text-dark fs-6">Filter by State / Region</span>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <input
                type="text"
                className="form-control rounded-pill px-4 shadow-none border"
                placeholder="Search by package name or state..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* State Filter Pills */}
          <div className="d-flex flex-wrap gap-2 pt-2 border-top">
            {states.map((st) => (
              <button
                key={st}
                type="button"
                onClick={() => setSelectedState(st)}
                className={`btn rounded-pill px-3 py-1 text-nowrap transition-all ${
                  selectedState === st
                    ? "btn-danger fw-bold shadow-sm"
                    : "btn-outline-secondary border-0 bg-light text-dark"
                }`}
                style={{ fontSize: "14px" }}
              >
                {st === "All" ? `All Packages (${ALL_PACKAGES.length})` : st}
              </button>
            ))}
          </div>
        </div>

        {/* =========================================
            PACKAGES GRID
        ========================================= */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="fw-bold text-dark mb-0">
            Showing <span className="text-danger">{filteredPackages.length}</span> Packages
          </h3>
        </div>

        {filteredPackages.length === 0 ? (
          <div className="text-center py-5 bg-white rounded-4 shadow-sm">
            <p className="fs-5 text-muted mb-3">No packages found matching your filter criteria.</p>
            <button
              onClick={() => {
                setSelectedState("All");
                setSearchQuery("");
              }}
              className="btn btn-danger rounded-pill px-4"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="row g-4">
            {filteredPackages.map((pkg) => (
              <div key={pkg.id} className="col-12 col-md-6 col-lg-4">
                <div className="card border-0 rounded-4 shadow-sm h-100 overflow-hidden hover-lift transition-all">
                  {/* Card Image / Video */}
                  <div className="position-relative" style={{ height: "220px" }}>
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-100 h-100 object-fit-cover"
                    />
                    <div className="position-absolute top-0 start-0 m-3 d-flex gap-2">
                      <span className="badge bg-rs-gradient text-white px-3 py-2 rounded-pill shadow-sm">
                        📍 {pkg.state}
                      </span>
                      {pkg.video && (
                        <span className="badge bg-dark bg-opacity-75 text-white px-2 py-2 rounded-pill shadow-sm">
                          🎬 Video Tour
                        </span>
                      )}
                    </div>
                    <span className="badge bg-dark bg-opacity-75 text-white position-absolute bottom-0 end-0 m-3 px-3 py-1 rounded-pill small">
                      ★ {pkg.rating} ({pkg.reviews})
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="card-body p-4 d-flex flex-column">
                    <h4 className="fw-bold text-dark fs-5 mb-2">{pkg.title}</h4>
                    <p className="text-muted small mb-3">{pkg.fullName}</p>

                    <div className="d-flex align-items-center gap-2 text-muted small mb-3">
                      <Clock size={15} className="text-danger" />
                      <span>{pkg.duration}</span>
                    </div>

                    <div className="mt-auto pt-3 border-top d-flex align-items-center justify-content-between">
                      <div>
                        <span className="d-block text-muted small" style={{ fontSize: "11px" }}>
                          Starting From
                        </span>
                        <span className="fw-bold text-danger fs-5">{formatPrice(pkg.price)}</span>
                      </div>
                      <Link
                        href={`/packages/${pkg.slug}`}
                        className="btn btn-outline-danger rounded-pill px-3 py-2 btn-sm fw-bold d-inline-flex align-items-center gap-1"
                      >
                        <span>View Details</span>
                        <ArrowRight size={15} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
