"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ALL_PACKAGES, PackageData } from "@/src/data/packagesData";
import { ArrowLeft, Clock, Star, MapPin, ArrowRight, Sparkles } from "lucide-react";
import "@/src/styles/upcoming-trips.css";

export default function StatePackagesPage() {
  const params = useParams();
  const stateParam = (params?.state as string) || "himachal-pradesh";

  // Format slug to human readable state name
  const formattedState = stateParam
    .replace(/-/g, " ")
    .replace(/%20/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  // Filter packages matching this state
  const statePackages = ALL_PACKAGES.filter((pkg) => {
    const normPkgState = pkg.state.toLowerCase();
    const normSearchState = formattedState.toLowerCase();

    return (
      normPkgState.includes(normSearchState) ||
      normSearchState.includes(normPkgState) ||
      (normSearchState.includes("himachal") && normPkgState.includes("himachal")) ||
      (normSearchState.includes("ladakh") && normPkgState.includes("ladakh")) ||
      (normSearchState.includes("kashmir") && normPkgState.includes("kashmir")) ||
      (normSearchState.includes("rajasthan") && normPkgState.includes("rajasthan")) ||
      (normSearchState.includes("uttarakhand") && normPkgState.includes("uttarakhand")) ||
      (normSearchState.includes("kerala") && normPkgState.includes("kerala")) ||
      (normSearchState.includes("meghalaya") && normPkgState.includes("meghalaya"))
    );
  });

  const bannerImage = statePackages.length > 0 ? statePackages[0].image : "/images/himachal.png";

  return (
    <div className="state-packages-page bg-light min-vh-100 py-4 py-md-5">
      <div className="container-lg">

        {/* =========================================
            TOP NAVIGATION BAR
        ========================================= */}
        <div className="d-flex align-items-center justify-content-between mb-4">
          <Link
            href="/"
            className="btn btn-outline-secondary rounded-pill px-4 btn-sm d-inline-flex align-items-center gap-2 shadow-sm bg-white"
          >
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>
          <Link
            href="/packages"
            className="btn btn-danger rounded-pill px-4 btn-sm d-inline-flex align-items-center gap-2 shadow-sm"
          >
            <span>View All Packages</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* =========================================
            STATE HERO BANNER
        ========================================= */}
        <div className="position-relative rounded-4 overflow-hidden mb-5 shadow-lg" style={{ minHeight: "320px" }}>
          <img
            src={bannerImage}
            alt={`${formattedState} Tourism & Travel Holiday Packages - RS Holidays`}
            className="w-100 h-100 object-fit-cover position-absolute top-0 start-0"
          />
          <div
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{
              background: "linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.45) 100%)",
            }}
          />

          <div className="position-relative z-2 p-4 p-md-5 text-white d-flex flex-column justify-content-center h-100" style={{ minHeight: "320px" }}>
            <span className="badge bg-danger rounded-pill px-3 py-2 text-uppercase mb-3 align-self-start fw-bold">
              📍 STATE DESTINATION
            </span>
            <h1 className="fw-bold display-4 mb-2 text-white">{formattedState}</h1>
            <p className="fs-6 text-white-50 mb-0" style={{ maxWidth: "600px" }}>
              Explore handpicked trekking, sightseeing, and adventure tour packages in {formattedState}.
            </p>
          </div>
        </div>

        {/* =========================================
            PACKAGES GRID
        ========================================= */}
        {statePackages.length === 0 ? (
          <div className="text-center py-5 bg-white rounded-4 shadow-sm p-4">
            <Sparkles size={48} className="text-muted mb-3" />
            <h4 className="fw-bold text-dark">No packages found for {formattedState}</h4>
            <p className="text-muted">Explore our full catalog of handcrafted trips across India.</p>
            <Link href="/packages" className="btn btn-danger rounded-pill px-4 py-2 mt-2">
              View All Packages
            </Link>
          </div>
        ) : (
          <div className="row g-4">
            {statePackages.map((pkg) => (
              <div key={pkg.id} className="col-12 col-md-6 col-lg-4">
                <div className="card border-0 rounded-4 shadow-sm h-100 overflow-hidden hover-lift transition-all">
                  {/* Card Image / Video */}
                  <div className="position-relative" style={{ height: "220px" }}>
                    <img
                      src={pkg.image}
                      alt={`${pkg.title} - ${pkg.state} Holiday Package`}
                      loading="lazy"
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

                  {/* Card Body */}
                  <div className="card-body p-4 d-flex flex-column">
                    <h4 className="fw-bold text-dark fs-5 mb-1">{pkg.title}</h4>
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
                        <span className="fw-bold text-danger fs-5">₹{pkg.price}</span>
                      </div>
                      <Link
                        href={`/packages/${pkg.slug}`}
                        className="btn btn-outline-danger rounded-pill px-3 py-2 btn-sm fw-bold d-inline-flex align-items-center gap-1"
                      >
                        <span>Package Details</span>
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
