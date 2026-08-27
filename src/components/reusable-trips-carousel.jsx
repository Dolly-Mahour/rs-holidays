"use client";

import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../src/styles/reusable-trips-carousel.css";

/**
 * @typedef {Object} Trip
 * @property {number} id
 * @property {string} title
 * @property {string} price
 * @property {string} image
 */

/**
 * @param {{
 *   trips?: Trip[],
 *   bannerTitle?: string,
 *   bannerSubtitle?: string,
 *   bannerVideo?: string,
 *   bannerClass?: string,
 *   currencySymbol?: string,
 *   autoScrollSpeed?: number
 * }} props
 */
const ReusableTripsCarousel = ({
  trips = [],
  bannerTitle = "Trips",
  bannerSubtitle = "Explore Amazing Destinations",
  bannerVideo = "/videos/default-bg.mp4",
  bannerClass = "trips-banner",
  currencySymbol = "₹",
  autoScrollSpeed = 4000,
}) => {

  const [activeIndex, setActiveIndex] = useState(0);

  /*
   * NEXT
   */
  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % trips.length);
  };

  /*
   * PREVIOUS
   */
  const prevSlide = () => {
    setActiveIndex(
      (prev) => (prev - 1 + trips.length) % trips.length
    );
  };

  /*
   * AUTO SLIDE
   */
  useEffect(() => {
    if (!trips || trips.length <= 1) {
      return;
    }

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % trips.length);
    }, autoScrollSpeed);

    return () => clearInterval(timer);
  }, [trips.length, autoScrollSpeed]);

  /*
   * GET POSITION OF EACH CARD
   *
   * -3 = far left
   * -2 = left
   * -1 = near left
   *  0 = center
   *  1 = near right
   *  2 = right
   *  3 = far right
   */
  const getPosition = (index) => {
    let position = index - activeIndex;

    if (position > 3) {
      position -= trips.length;
    }

    if (position < -3) {
      position += trips.length;
    }

    return position;
  };

  /*
   * Don't render if there are no trips
   */
  if (!trips || trips.length === 0) {
    return null;
  }

  return (
    <section
      className={`reusable-trips-section ${bannerClass} mb-5`}
    >
      {/* =========================================
          VIDEO BACKGROUND
      ========================================= */}

      <video
        className="trips-background-video"
        src={bannerVideo}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* =========================================
          DARK OVERLAY
      ========================================= */}

      <div className="trips-video-overlay"></div>


      {/* =========================================
          CONTENT
      ========================================= */}

      <div className="trips-content">

        {/* TITLE */}

        <div className="trips-header text-center">

          <h1 className="trips-title">
            {bannerTitle}
          </h1>

          <p className="trips-subtitle">
            {bannerSubtitle}
          </p>

        </div>


        {/* =====================================
            3D CAROUSEL
        ===================================== */}

        <div className="trips-carousel">

          {trips.map((trip, index) => {

            const position = getPosition(index);

            return (
              <div
                key={trip.id ?? index}
                className={`trip-carousel-card trip-position-${position}`}
              >

                {/* IMAGE */}

                <div className="trip-image-wrapper">

                  <img
                    src={trip.image}
                    alt={trip.title || `Trip ${index + 1}`}
                  />

                </div>


                {/* INFORMATION */}

                {(trip.number || trip.title) && (
                  <div className="trip-info">

                    {trip.number && (
                      <div className="trip-number">
                        {trip.number}
                      </div>
                    )}

                    {trip.title && (
                      <div className="trip-title">
                        {trip.title}
                      </div>
                    )}

                  </div>
                )}

              </div>
            );
          })}

        </div>


        {/* =====================================
            CONTROLS
        ===================================== */}

        <div className="trips-controls">

          <button
            type="button"
            className="trip-control-btn"
            onClick={prevSlide}
            aria-label="Previous trip"
          >
            ←
          </button>

          <button
            type="button"
            className="trip-control-btn"
            onClick={nextSlide}
            aria-label="Next trip"
          >
            →
          </button>

        </div>

      </div>

    </section>
  );
};

export default ReusableTripsCarousel;