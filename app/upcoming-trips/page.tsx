"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import "../../src/styles/upcoming-trips.css";

const tripPackages = [
  {
    id: 1,
    title: "Bali Escape",
    location: "Bali, Indonesia",
    category: "INTERNATIONAL",
    categoryType: "international",
    duration: "6 Days / 5 Nights",
    price: "49,999",
    image: "/images/bali.png",
  },
  {
    id: 2,
    title: "Singapore Explorer",
    location: "Singapore",
    category: "INTERNATIONAL",
    categoryType: "international",
    duration: "5 Days / 4 Nights",
    price: "54,999",
    image: "/images/singapore.png",
  },
  {
    id: 3,
    title: "Dubai Adventure",
    location: "Dubai, UAE",
    category: "INTERNATIONAL",
    categoryType: "international",
    duration: "5 Days / 4 Nights",
    price: "44,999",
    image: "/images/dubai.png",
  },
  {
    id: 4,
    title: "Vietnam Discovery",
    location: "Vietnam",
    category: "INTERNATIONAL",
    categoryType: "international",
    duration: "7 Days / 6 Nights",
    price: "24,999",
    image: "/images/vietnam.png",
  },
  {
    id: 5,
    title: "Meghalaya",
    location: "Meghalaya, India",
    category: "INDIA",
    categoryType: "india",
    duration: "6 Days / 5 Nights",
    price: "22,999",
    image: "/images/meghalaya.png",
  },
  {
    id: 1,
    title: "Bali Escape",
    location: "Bali, Indonesia",
    category: "INTERNATIONAL",
    categoryType: "international",
    duration: "6 Days / 5 Nights",
    price: "49,999",
    image: "/images/bali.png",
  },
  {
    id: 2,
    title: "Singapore Explorer",
    location: "Singapore",
    category: "INTERNATIONAL",
    categoryType: "international",
    duration: "5 Days / 4 Nights",
    price: "54,999",
    image: "/images/singapore.png",
  },
  {
    id: 3,
    title: "Dubai Adventure",
    location: "Dubai, UAE",
    category: "INTERNATIONAL",
    categoryType: "international",
    duration: "5 Days / 4 Nights",
    price: "44,999",
    image: "/images/dubai.png",
  },
  {
    id: 4,
    title: "Vietnam Discovery",
    location: "Vietnam",
    category: "INTERNATIONAL",
    categoryType: "international",
    duration: "7 Days / 6 Nights",
    price: "24,999",
    image: "/images/vietnam.png",
  },
  {
    id: 5,
    title: "Meghalaya",
    location: "Meghalaya, India",
    category: "INDIA",
    categoryType: "india",
    duration: "6 Days / 5 Nights",
    price: "22,999",
    image: "/images/meghalaya.png",
  },
];

const features = [
  {
    id: 1,
    title: "Expert Planning",
    desc: "Carefully designed itineraries created by experienced travel professionals.",
    iconColor: "bg-danger",
    barColor: "bg-danger",
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
      </svg>
    ),
  },
  {
    id: 2,
    title: "Trusted Service",
    desc: "Reliable support before, during and after your journey.",
    iconColor: "bg-rs-blue",
    barColor: "bg-rs-blue",
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    ),
  },
  {
    id: 3,
    title: "Great Experiences",
    desc: "Discover destinations through experiences rather than ordinary sightseeing.",
    iconColor: "bg-danger",
    barColor: "bg-danger",
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
    ),
  },
  {
    id: 4,
    title: "Memorable Journeys",
    desc: "Travel with people, stories and memories you'll carry home.",
    iconColor: "bg-rs-blue",
    barColor: "bg-rs-blue",
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
      </svg>
    ),
  },
];
const heroSlides = [
  {
    id: 1,
    background: "/images/ladakh.png",
    label: "TRAVEL WITH US",
    title: "EXPLORE",
    subtitle: "LADAKH",
    description:
      "Experience breathtaking mountains, ancient monasteries and unforgettable Himalayan adventures.",
    cards: [
      {
        image: "/images/kashmir.png",
        location: "INDIA",
        title: "Kashmir",
      },
      {
        image: "/images/spiti.png",
        location: "INDIA",
        title: "Spiti Valley",
      },
    ],
  },

  {
    id: 2,
    background: "/images/kashmir.png",
    label: "DISCOVER",
    title: "PARADISE",
    subtitle: "KASHMIR",
    description:
      "Discover beautiful valleys, peaceful lakes and the incredible landscapes of Kashmir.",
    cards: [
      {
        image: "/images/ladakh.png",
        location: "INDIA",
        title: "Ladakh",
      },
      {
        image: "/images/spiti.png",
        location: "INDIA",
        title: "Spiti Valley",
      },
    ],
  },

  {
    id: 3,
    background: "/images/spiti.png",
    label: "ADVENTURE AWAITS",
    title: "EXPLORE",
    subtitle: "SPITI",
    description:
      "Journey through dramatic mountains, remote villages and unforgettable Himalayan roads.",
    cards: [
      {
        image: "/images/ladakh.png",
        location: "INDIA",
        title: "Ladakh",
      },
      {
        image: "/images/kashmir.png",
        location: "INDIA",
        title: "Kashmir",
      },
    ],
  },
];

const UpcomingTrips = () => {
  const [selectedDestination, setSelectedDestination] =
    useState("All Destinations");
  const [selectedType, setSelectedType] = useState("Trip Type");
  const [selectedDuration, setSelectedDuration] = useState("Duration");
  const [wishlist, setWishlist] = useState<Record<number, boolean>>({});
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);

  const carouselRef = useRef<HTMLDivElement | null>(null);
  const totalIndicators = 4;
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveHeroSlide((current) => {
        return (current + 1) % heroSlides.length;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  const currentHero = heroSlides[activeHeroSlide];

  const toggleWishlist = (id: number) => {
    setWishlist((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleScroll = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll <= 0) return;
    const progress = scrollLeft / maxScroll;
    const currentIndex = Math.min(
      totalIndicators - 1,
      Math.max(0, Math.round(progress * (totalIndicators - 1))),
    );
    setActiveIndex(currentIndex);
  };

  const scrollPrev = () => {
    if (!carouselRef.current) return;
    const step = carouselRef.current.clientWidth * 0.65;
    carouselRef.current.scrollBy({ left: -step, behavior: "smooth" });
  };

  const scrollNext = () => {
    if (!carouselRef.current) return;
    const step = carouselRef.current.clientWidth * 0.65;
    carouselRef.current.scrollBy({ left: step, behavior: "smooth" });
  };

  const scrollToIndex = (index: number) => {
    if (!carouselRef.current) return;
    const { scrollWidth, clientWidth } = carouselRef.current;
    const maxScroll = scrollWidth - clientWidth;
    const targetScroll = (index / (totalIndicators - 1)) * maxScroll;
    carouselRef.current.scrollTo({ left: targetScroll, behavior: "smooth" });
    setActiveIndex(index);
  };

  return (
    <div className="upcoming-page">
      {/* ===================================================
    1. HERO CAROUSEL
=================================================== */}
      <section className="upcoming-hero position-relative overflow-hidden">
        {/* ================================================
      FULL SCREEN BACKGROUND SLIDES
  ================================================= */}

        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-bg-slide ${
              activeHeroSlide === index ? "active" : ""
            }`}
            style={{
              backgroundImage: `url(${slide.background})`,
            }}
          />
        ))}

        {/* Dark / Teal Overlay */}
        <div className="upcoming-hero-overlay" />

        {/* ================================================
      HERO CONTENT
  ================================================= */}

        <div className="container position-relative h-100">
          <div className="row align-items-center h-100">
            {/* ============================================
          LEFT CONTENT
      ============================================= */}

            <div className="col-lg-6 position-relative z-3">
              <div
                key={`content-${currentHero.id}`}
                className="upcoming-hero-content"
              >
                <span className="upcoming-hero-label">{currentHero.label}</span>

                <h1>
                  {currentHero.title}
                  <br />
                  <span>{currentHero.subtitle}</span>
                </h1>

                <p>{currentHero.description}</p>

                <Link href="/group-tours" className="btn upcoming-hero-btn">
                  Explore Trips <span>→</span>
                </Link>
              </div>
            </div>

            {/* ============================================
          RIGHT DESTINATION CARDS
      ============================================= */}

            <div className="col-lg-6 position-relative z-3">
              <div
                key={`cards-${currentHero.id}`}
                className="upcoming-destination-cards"
              >
                {currentHero.cards.map((card, index) => (
                  <div
                    key={card.title}
                    className={`upcoming-destination-card ${
                      index === 0 ? "card-one" : "card-two"
                    }`}
                  >
                    <img
                      src={card.image}
                      alt={`${card.title} - ${card.location} Upcoming Tour`}
                      loading="lazy"
                    />

                    <div className="destination-card-overlay" />

                    <div className="destination-card-content">
                      <span>{card.location}</span>

                      <h4>{card.title}</h4>

                      <small>★★★★★</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ================================================
      HERO DOTS
  ================================================= */}

        <div className="upcoming-hero-dots">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={activeHeroSlide === index ? "active" : ""}
              onClick={() => setActiveHeroSlide(index)}
              aria-label={`Go to hero slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ===================================================
          2. FILTER & SEARCH BAR
      =================================================== */}
      <section className="container-lg position-relative">
        <div className="search-filter-card p-3 p-md-4 text-white">
          <div className="row align-items-center g-3">
            {/* Title */}
            <div className="col-12 col-lg-3 text-center text-lg-start">
              <span className="d-block text-white-50 text-uppercase fs-8 letter-spacing fw-bold mb-1">
                FIND YOUR JOURNEY
              </span>
              <h4 className="fw-bold mb-0 text-white">Explore Trips</h4>
            </div>

            {/* Dropdowns & Search Button */}
            <div className="col-12 col-lg-9">
              <div className="row g-2 justify-content-lg-end">
                {/* Destination Dropdown */}
                <div className="col-12 col-sm-6 col-md-3">
                  <select
                    className="form-select search-select shadow-none"
                    value={selectedDestination}
                    onChange={(e) => setSelectedDestination(e.target.value)}
                  >
                    <option value="All Destinations">All Destinations</option>
                    <option value="Bali">Bali, Indonesia</option>
                    <option value="Singapore">Singapore</option>
                    <option value="Dubai">Dubai, UAE</option>
                    <option value="Vietnam">Vietnam</option>
                    <option value="Meghalaya">Meghalaya, India</option>
                    <option value="Ladakh">Ladakh, India</option>
                    <option value="Kashmir">Kashmir, India</option>
                  </select>
                </div>

                {/* Trip Type Dropdown */}
                <div className="col-12 col-sm-6 col-md-3">
                  <select
                    className="form-select search-select shadow-none"
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                  >
                    <option value="Trip Type">Trip Type</option>
                    <option value="Group Tour">Group Tour</option>
                    <option value="International">International</option>
                    <option value="Domestic">Domestic (India)</option>
                    <option value="Adventure">Adventure Trek</option>
                    <option value="Weekend Getaway">Weekend Getaway</option>
                  </select>
                </div>

                {/* Duration Dropdown */}
                <div className="col-12 col-sm-6 col-md-3">
                  <select
                    className="form-select search-select shadow-none"
                    value={selectedDuration}
                    onChange={(e) => setSelectedDuration(e.target.value)}
                  >
                    <option value="Duration">Duration</option>
                    <option value="3-5 Days">3 - 5 Days</option>
                    <option value="5-7 Days">5 - 7 Days</option>
                    <option value="7+ Days">7+ Days</option>
                  </select>
                </div>

                {/* Search Button */}
                <div className="col-12 col-sm-6 col-md-3 d-grid">
                  <button className="search-btn d-flex align-items-center justify-content-center gap-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                    Search Trips
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          3. PICK YOUR NEXT ADVENTURE (CAROUSEL SECTION)
      =================================================== */}
      <section className="container-lg pt-5 pb-5">
        {/* Section Header */}
        <div className="d-flex flex-wrap align-items-end justify-content-between mb-4 gap-3">
          <div>
            <span className="text-danger fw-bold fs-7 text-uppercase letter-spacing d-block mb-1">
              TRAVEL WITH US
            </span>
            <h2 className="fw-bold mb-0 text-dark">
              Pick Your Next <span className="hand-drawn-oval">Adventure</span>
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="d-flex align-items-center gap-2">
            <button
              className="btn btn-outline-secondary carousel-nav-btn p-0"
              onClick={scrollPrev}
              aria-label="Previous trips"
            >
              &larr;
            </button>
            <button
              className="btn btn-danger carousel-nav-btn p-0"
              onClick={scrollNext}
              aria-label="Next trips"
            >
              &rarr;
            </button>
          </div>
        </div>

        {/* Scrollable Carousel Track */}
        <div
          className="trips-carousel-scroll mb-4"
          ref={carouselRef}
          onScroll={handleScroll}
        >
          {tripPackages.map((trip, idx) => (
            <div key={`${trip.id}-${idx}`} className="trip-carousel-item">
              <div className="trip-item-card h-100 d-flex flex-column shadow-sm">
                {/* Image & Badges */}
                <div className="trip-img-wrap">
                  <span
                    className={`trip-badge-cat ${
                      trip.categoryType === "india"
                        ? "trip-badge-india"
                        : "trip-badge-international"
                    }`}
                  >
                    {trip.category}
                  </span>

                  <button
                    className="trip-wishlist-btn"
                    // onClick={() => toggleWishlist(`${trip.id}-${idx}`)}
                    aria-label="Add to wishlist"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      //   fill={wishlist[`${trip.id}-${idx}`] ? "#e30613" : "none"}
                      stroke="#e30613"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </button>

                  <img
                    src={trip.image}
                    alt={`${trip.title} - ${trip.location} Departure`}
                    loading="lazy"
                  />
                </div>

                {/* Card Body */}
                <div className="p-3 d-flex flex-column flex-grow-1">
                  <div className="d-flex align-items-center gap-1 text-muted fs-8 mb-1">
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="#e30613"
                      stroke="none"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" />
                    </svg>
                    <span>{trip.location}</span>
                  </div>

                  <h5 className="fw-bold fs-6 mb-2 text-dark">{trip.title}</h5>

                  <div className="d-flex align-items-center gap-1 text-muted fs-8 mb-3">
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span>{trip.duration}</span>
                  </div>

                  {/* Price & Action */}
                  <div className="mt-auto d-flex align-items-center justify-content-between pt-2 border-top">
                    <div>
                      <span
                        className="d-block text-muted"
                        style={{ fontSize: "10px" }}
                      >
                        Starting from
                      </span>
                      <span className="fw-bold text-danger fs-6">
                        &#8377;{trip.price}
                      </span>
                    </div>
                    <button className="view-trip-btn">View Trip &rarr;</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Carousel Indicator Dots */}
        <div className="d-flex justify-content-center align-items-center gap-2 pt-2">
          {Array.from({ length: totalIndicators }).map((_, i) => (
            <button
              key={i}
              className="carousel-indicator-btn"
              onClick={() => scrollToIndex(i)}
              aria-label={`Go to slide group ${i + 1}`}
            >
              <span
                className={
                  activeIndex === i ? "indicator-pill" : "indicator-dot"
                }
              ></span>
            </button>
          ))}
        </div>
      </section>

      {/* ===================================================
          4. PROMO BANNER ("Collect moments, not things.")
      =================================================== */}
      <section className="container-lg py-4">
        <div className="moments-banner p-4 p-md-5 text-white">
          <div className="row align-items-center g-4">
            {/* Left Copy */}
            <div className="col-12 col-lg-6">
              <span className="text-white-50 text-uppercase fs-8 letter-spacing fw-bold d-block mb-2">
                YOUR NEXT ADVENTURE AWAITS
              </span>
              <h2 className="fw-bold display-6 mb-3">
                Collect <span className="text-danger fst-italic">moments,</span>
                <br />
                not things.
              </h2>
              <p className="text-light-gray mb-4 fs-7">
                Join our upcoming group departures and travel with like-minded
                explorers.
              </p>
              <Link
                href="/packages"
                className="btn btn-light rounded-pill px-4 py-2 text-danger fw-bold shadow-sm d-inline-flex align-items-center gap-2"
              >
                Explore All Trips &rarr;
              </Link>
            </div>

            {/* Right Polaroid Photo Collage */}
            <div className="col-12 col-lg-6">
              <div className="row g-2 justify-content-center">
                <div className="col-4">
                  <div className="polaroid-frame polaroid-1">
                    <img
                      src="/images/ladakh.png"
                      alt="Ladakh high altitude mountain pass adventure"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="col-4">
                  <div className="polaroid-frame polaroid-2">
                    <img
                      src="/images/spiti.png"
                      alt="Spiti valley road trip with friends"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="col-4">
                  <div className="polaroid-frame polaroid-3">
                    <img
                      src="/images/kashmir.png"
                      alt="Kashmir valley scenic paradise tour"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          5. WHY RS HOLIDAYS (Travel With Confidence)
      =================================================== */}
      <section className="container-lg py-5">
        <div className="text-center mb-5">
          <span className="text-muted fw-bold fs-8 text-uppercase letter-spacing d-block mb-1">
            WHY RS HOLIDAYS
          </span>
          <h2 className="fw-bold mb-2 text-dark">
            Travel With <span className="text-rs-blue ">Confidence</span>
          </h2>
          <p className="text-muted fs-7 mx-auto" style={{ maxWidth: "600px" }}>
            From planning to your return journey, we're with you every step of
            the way.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="row g-3 g-lg-4">
          {features.map((item) => (
            <div key={item.id} className="col-12 col-sm-6 col-lg-3">
              <div className="confidence-card">
                <div className={`confidence-icon-wrap ${item.iconColor}`}>
                  {item.icon}
                </div>
                <h5 className="fw-bold fs-6 mb-2 text-dark">{item.title}</h5>
                <p className="text-muted fs-7 mb-0">{item.desc}</p>
                <div className={`confidence-bottom-bar ${item.barColor}`}></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default UpcomingTrips;
