"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import {
  ChevronDown,
  ChevronUp,
  MapPin,
  Clock,
  Zap,
} from "lucide-react";
import "@/src/styles/upcoming-trips.css";
import "@/src/styles/last-minute-trips.css";

interface LastMinuteTrip {
  id: number;
  title: string;
  location: string;
  category: "INDIA" | "INTERNATIONAL";
  categoryType: "india" | "international";
  duration: string;
  originalPrice: string;
  price: string;
  departureWindow: "24-48h" | "weekend" | "7days";
  departureText: string;
  urgencyBadge: string;
  urgencyColor?: "orange" | "blue";
  image: string;
}

const tripPackages: LastMinuteTrip[] = [
  {
    id: 1,
    title: "Goa Beach & Sunset Flash Escape",
    location: "Goa, India",
    category: "INDIA",
    categoryType: "india",
    duration: "4 Days / 3 Nights",
    originalPrice: "24,999",
    price: "14,999",
    departureWindow: "24-48h",
    departureText: "Departs in 48 Hours",
    urgencyBadge: "Only 2 Seats Left",
    image: "/images/bali.png",
  },
  {
    id: 2,
    title: "Kashmir Paradise Express Departure",
    location: "Srinagar & Gulmarg, India",
    category: "INDIA",
    categoryType: "india",
    duration: "5 Days / 4 Nights",
    originalPrice: "34,999",
    price: "22,999",
    departureWindow: "weekend",
    departureText: "Departs This Friday",
    urgencyBadge: "Weekend Departure",
    urgencyColor: "orange",
    image: "/images/kashmir.png",
  },
  {
    id: 3,
    title: "Dubai Skyline & Desert Safari",
    location: "Dubai, UAE",
    category: "INTERNATIONAL",
    categoryType: "international",
    duration: "5 Days / 4 Nights",
    originalPrice: "68,999",
    price: "46,999",
    departureWindow: "7days",
    departureText: "Departs in 3 Days",
    urgencyBadge: "Visa On Arrival",
    urgencyColor: "blue",
    image: "/images/dubai.png",
  },
  {
    id: 4,
    title: "Manali & Jibhi Pine Valley Break",
    location: "Himachal Pradesh, India",
    category: "INDIA",
    categoryType: "india",
    duration: "4 Days / 3 Nights",
    originalPrice: "14,999",
    price: "8,999",
    departureWindow: "24-48h",
    departureText: "Departs Tomorrow",
    urgencyBadge: "Flash 40% Off",
    image: "/images/jibhi-escape.png",
  },
  {
    id: 5,
    title: "Bali Tropical Villa & Beach Retreat",
    location: "Bali, Indonesia",
    category: "INTERNATIONAL",
    categoryType: "international",
    duration: "6 Days / 5 Nights",
    originalPrice: "72,999",
    price: "49,999",
    departureWindow: "7days",
    departureText: "Departs This Sunday",
    urgencyBadge: "Fast-Track Visa",
    urgencyColor: "blue",
    image: "/images/romantic-beach.jpg",
  },
  {
    id: 6,
    title: "Thailand Island Hopper (Phuket & Krabi)",
    location: "Thailand",
    category: "INTERNATIONAL",
    categoryType: "international",
    duration: "5 Days / 4 Nights",
    originalPrice: "52,999",
    price: "34,999",
    departureWindow: "7days",
    departureText: "Departs in 4 Days",
    urgencyBadge: "Visa-Free Entry",
    urgencyColor: "blue",
    image: "/images/thailand.png",
  },
  {
    id: 7,
    title: "Kerala Backwaters & Munnar Hills",
    location: "Kerala, India",
    category: "INDIA",
    categoryType: "india",
    duration: "4 Days / 3 Nights",
    originalPrice: "28,999",
    price: "18,499",
    departureWindow: "weekend",
    departureText: "Departs This Saturday",
    urgencyBadge: "Last 3 Rooms",
    urgencyColor: "orange",
    image: "/images/kerala-backpacking.png",
  },
  {
    id: 8,
    title: "Kasol & Kheerganga Trek Rush",
    location: "Himachal Pradesh, India",
    category: "INDIA",
    categoryType: "india",
    duration: "3 Days / 2 Nights",
    originalPrice: "10,999",
    price: "5,999",
    departureWindow: "24-48h",
    departureText: "Departs in 24 Hours",
    urgencyBadge: "Departs Tomorrow",
    image: "/images/kheerganga-trek.png",
  },
  {
    id: 9,
    title: "Vietnam Highlights (Hanoi & Halong)",
    location: "Vietnam",
    category: "INTERNATIONAL",
    categoryType: "international",
    duration: "6 Days / 5 Nights",
    originalPrice: "59,999",
    price: "39,999",
    departureWindow: "7days",
    departureText: "Departs in 5 Days",
    urgencyBadge: "Express eVisa",
    urgencyColor: "blue",
    image: "/images/vietnam.png",
  },
  {
    id: 10,
    title: "Udaipur & Mount Abu Weekend Haveli",
    location: "Rajasthan, India",
    category: "INDIA",
    categoryType: "india",
    duration: "3 Days / 2 Nights",
    originalPrice: "16,499",
    price: "9,999",
    departureWindow: "weekend",
    departureText: "Departs This Friday",
    urgencyBadge: "Heritage Haveli",
    urgencyColor: "orange",
    image: "/images/udaipur-abu-trip.png",
  },
];

const features = [
  {
    id: 1,
    title: "Instant Confirmation",
    desc: "Confirmed flight tickets, hotel vouchers, and chauffeur contact issued in 30 minutes.",
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
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
      </svg>
    ),
  },
  {
    id: 2,
    title: "Surplus Clearance Rates",
    desc: "Enjoy premium 4★ and 5★ boutique stays at wholesale clearance prices without compromise.",
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
    title: "Fast-Track Visas",
    desc: "Curated visa-free, visa-on-arrival, and 24-hour eVisa clearance for stress-free international trips.",
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
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <polyline points="10 9 9 9 8 9"></polyline>
      </svg>
    ),
  },
  {
    id: 4,
    title: "24/7 Spontaneous Concierge",
    desc: "Direct WhatsApp assistance before departure, during airport transfers, and until your return.",
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
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      </svg>
    ),
  },
];

const heroSlides = [
  {
    id: 1,
    background: "/images/bali.png",
    label: "LAST MINUTE ESCAPES",
    title: "PACK &",
    subtitle: "TAKE OFF",
    description:
      "Ready for an impromptu getaway? Grab pre-confirmed flight seats, luxury beach stays, and up to 40% off last-minute surplus departures.",
    cards: [
      {
        image: "/images/bali.png",
        location: "INDIA • BEACH",
        title: "Goa Flash",
      },
      {
        image: "/images/kashmir.png",
        location: "INDIA • VALLEY",
        title: "Kashmir",
      },
    ],
  },
  {
    id: 2,
    background: "/images/jibhi-escape.png",
    label: "SPONTANEOUS WEEKEND BREAKS",
    title: "INSTANT",
    subtitle: "RESET",
    description:
      "Ditch the routine, pack tonight! Fresh mountain air, cedar forests, and confirmed transfers leaving this Friday evening.",
    cards: [
      {
        image: "/images/jibhi-escape.png",
        location: "INDIA • HILLS",
        title: "Manali & Jibhi",
      },
      {
        image: "/images/spiti.png",
        location: "INDIA • ADVENTURE",
        title: "Spiti Valley",
      },
    ],
  },
  {
    id: 3,
    background: "/images/dubai.png",
    label: "VISA-ON-ARRIVAL & VISA-FREE",
    title: "GLOBAL",
    subtitle: "GETAWAYS",
    description:
      "Hop on spontaneous international flights to Dubai, Bali, and Thailand without weeks of visa waiting. Travel vouchers issued in 30 minutes.",
    cards: [
      {
        image: "/images/dubai.png",
        location: "UAE • DESERT",
        title: "Dubai Skyline",
      },
      {
        image: "/images/thailand.png",
        location: "THAILAND • ISLANDS",
        title: "Phuket & Krabi",
      },
    ],
  },
];

const faqs = [
  {
    q: "Can I really book today and fly within 24 to 48 hours?",
    a: "Yes! All trips displayed on this page have pre-confirmed airline seats and pre-allotted rooms in verified hotels. As soon as you confirm, your tickets and vouchers are generated immediately.",
  },
  {
    q: "Why are these last-minute trips priced lower?",
    a: "Airlines and luxury resorts frequently have unsold allocations or last-minute cancellations. They release these slots exclusively to RS Holidays at clearance rates, allowing you to travel premium for less.",
  },
  {
    q: "What documents do I need for last-minute international getaways?",
    a: "For international trips listed here (Dubai, Bali, Thailand, Vietnam), Indian passport holders enjoy visa-free entry, visa-on-arrival, or fast-track 24-hour eVisas. All you need is a valid passport with at least 6 months validity.",
  },
  {
    q: "Are the hotel stays and vehicles of lower quality?",
    a: "Never. We maintain the exact same strict 4★ and 5★ hospitality standards as our scheduled premium packages. You receive verified private transfers, top-rated boutique hotels, and full tour support.",
  },
  {
    q: "What if my schedule changes or flight is delayed?",
    a: "Our 24/7 Spontaneous Travel Desk provides dedicated assistance. If your flight is rescheduled or delayed, our team re-aligns airport pickups and hotel check-ins seamlessly.",
  },
];

const LastMinuteTrips = () => {
  const [selectedDestination, setSelectedDestination] =
    useState("All Destinations");
  const [selectedType, setSelectedType] = useState("Trip Type");
  const [selectedDuration, setSelectedDuration] = useState("Duration");
  const [wishlist, setWishlist] = useState<Record<number, boolean>>({});
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const carouselRef = useRef<HTMLDivElement | null>(null);
  const totalIndicators = 4;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveHeroSlide((current) => (current + 1) % heroSlides.length);
    }, 6000);

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

  // Filter packages based on selections
  const filteredPackages = tripPackages.filter((trip) => {
    if (selectedDestination !== "All Destinations") {
      if (
        !trip.location
          .toLowerCase()
          .includes(selectedDestination.toLowerCase()) &&
        !trip.title.toLowerCase().includes(selectedDestination.toLowerCase())
      ) {
        return false;
      }
    }
    if (selectedType !== "Trip Type") {
      if (
        selectedType === "International" &&
        trip.categoryType !== "international"
      )
        return false;
      if (selectedType === "Domestic" && trip.categoryType !== "india")
        return false;
    }
    if (selectedDuration !== "Duration") {
      if (selectedDuration === "24-48h" && trip.departureWindow !== "24-48h")
        return false;
      if (selectedDuration === "weekend" && trip.departureWindow !== "weekend")
        return false;
      if (selectedDuration === "7days" && trip.departureWindow !== "7days")
        return false;
    }
    return true;
  });

  return (
    <div className="upcoming-page">
      {/* ===================================================
          1. HERO CAROUSEL (LAST MINUTE DEPARTURES)
      =================================================== */}
      <section className="upcoming-hero position-relative overflow-hidden">
        {/* Full-Screen Background Slides */}
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-bg-slide ${activeHeroSlide === index ? "active" : ""
              }`}
            style={{
              backgroundImage: `url(${slide.background})`,
            }}
          />
        ))}

        {/* Teal / Dark Overlay matching other pages */}
        <div className="upcoming-hero-overlay" />

        {/* Hero Content */}
        <div className="container position-relative h-100">
          <div className="row align-items-center h-100">
            {/* Left Content */}
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

                <a href="#last-minute-deals" className="btn upcoming-hero-btn">
                  Explore Last Minute Deals <span>→</span>
                </a>
              </div>
            </div>

            {/* Right Destination Cards Over Backdrop */}
            <div className="col-lg-6 position-relative z-3">
              <div
                key={`cards-${currentHero.id}`}
                className="upcoming-destination-cards"
              >
                {currentHero.cards.map((card, index) => (
                  <div
                    key={card.title}
                    className={`upcoming-destination-card ${index === 0 ? "card-one" : "card-two"
                      }`}
                  >
                    <img
                      src={card.image}
                      alt={`${card.title} - ${card.location} Last Minute Departure`}
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

        {/* Hero Dots */}
        <div className="upcoming-hero-dots">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={activeHeroSlide === index ? "active" : ""}
              onClick={() => setActiveHeroSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ===================================================
          2. FILTER & SEARCH BAR (MATCHING SITE THEME)
      =================================================== */}
      <section className="container-lg position-relative" id="last-minute-deals">
        <div className="search-filter-card p-3 p-md-4 text-white">
          <div className="row align-items-center g-3">
            {/* Title */}
            <div className="col-12 col-lg-3 text-center text-lg-start">
              <span className="d-block text-white-50 text-uppercase fs-8 letter-spacing fw-bold mb-1">
                FIND YOUR ESCAPE
              </span>
              <h4 className="fw-bold mb-0 text-white">Last Minute Trips</h4>
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
                    <option value="Goa">Goa, India</option>
                    <option value="Kashmir">Kashmir, India</option>
                    <option value="Himachal">Himachal Pradesh</option>
                    <option value="Dubai">Dubai, UAE</option>
                    <option value="Bali">Bali, Indonesia</option>
                    <option value="Thailand">Thailand</option>
                    <option value="Kerala">Kerala, India</option>
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
                    <option value="Domestic">Domestic (India)</option>
                    <option value="International">International</option>
                    <option value="Weekend">Weekend Getaways</option>
                  </select>
                </div>

                {/* Departure Window Dropdown */}
                <div className="col-12 col-sm-6 col-md-3">
                  <select
                    className="form-select search-select shadow-none"
                    value={selectedDuration}
                    onChange={(e) => setSelectedDuration(e.target.value)}
                  >
                    <option value="Duration">Departure Window</option>
                    <option value="24-48h">Departing in 24–48 Hours</option>
                    <option value="weekend">This Coming Weekend</option>
                    <option value="7days">Within Next 7 Days</option>
                  </select>
                </div>

                {/* Search Button */}
                <div className="col-12 col-sm-6 col-md-3 d-grid">
                  <button
                    className="search-btn d-flex align-items-center justify-content-center gap-2"
                    onClick={() => {
                      // Trigger scroll to packages
                      const el = document.getElementById("packages-section");
                      el?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
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
                    Search Deals
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          3. PICK YOUR LAST-MINUTE ESCAPE (CAROUSEL TRACK)
      =================================================== */}
      <section className="container-lg pt-5 pb-5" id="packages-section">
        {/* Section Header */}
        <div className="d-flex flex-wrap align-items-end justify-content-between mb-4 gap-3">
          <div>
            <span className="text-danger fw-bold fs-7 text-uppercase letter-spacing d-block mb-1">
              DEPARTING THIS WEEK
            </span>
            <h2 className="fw-bold mb-0 text-dark">
              Pick Your Last-Minute <span className="hand-drawn-oval">Adventure</span>
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
          {filteredPackages.map((trip, idx) => (
            <div key={`${trip.id}-${idx}`} className="trip-carousel-item">
              <div className="trip-item-card h-100 d-flex flex-column shadow-sm">
                {/* Image & Badges */}
                <div className="trip-img-wrap">
                  {/* Category Badge */}
                  <span
                    className={`trip-badge-cat ${trip.categoryType === "india"
                      ? "trip-badge-india"
                      : "trip-badge-international"
                      }`}
                  >
                    {trip.category}
                  </span>

                  {/* Urgency Badge */}
                  <span
                    className={`trip-card-urgency ${trip.urgencyColor === "orange"
                      ? "orange"
                      : trip.urgencyColor === "blue"
                        ? "blue"
                        : ""
                      }`}
                  >
                    <Zap width={10} height={10} /> {trip.urgencyBadge}
                  </span>

                  {/* Wishlist Button */}
                  <button
                    className="trip-wishlist-btn"
                    onClick={() => toggleWishlist(trip.id)}
                    aria-label="Add to wishlist"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill={wishlist[trip.id] ? "#e30613" : "none"}
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
                    alt={`${trip.title} - ${trip.location} Last Minute Tour`}
                    loading="lazy"
                  />
                </div>

                {/* Card Body */}
                <div className="p-3 d-flex flex-column flex-grow-1">
                  <div className="d-flex align-items-center gap-1 text-muted fs-8 mb-1">
                    <MapPin width={13} height={13} className="text-danger" />
                    <span>{trip.location}</span>
                  </div>

                  <h5 className="fw-bold fs-6 mb-2 text-dark">{trip.title}</h5>

                  <div className="d-flex align-items-center gap-1 text-muted fs-8 mb-3">
                    <Clock width={13} height={13} />
                    <span>{trip.duration}</span>
                    <span className="mx-1">•</span>
                    <span className="text-danger fw-semibold">{trip.departureText}</span>
                  </div>

                  {/* Price & Action */}
                  <div className="mt-auto d-flex align-items-center justify-content-between pt-2 border-top">
                    <div>
                      <span
                        className="d-block text-muted"
                        style={{ fontSize: "10px" }}
                      >
                        <span className="trip-card-original-price">
                          &#8377;{trip.originalPrice}
                        </span>
                        Starting from
                      </span>
                      <span className="fw-bold text-danger fs-6">
                        &#8377;{trip.price}
                      </span>
                    </div>
                    <Link href="/packages" className="view-trip-btn text-decoration-none">
                      View Trip &rarr;
                    </Link>
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
                READY FOR A QUICK ESCAPE?
              </span>
              <h2 className="fw-bold display-6 mb-3">
                Collect <span className="text-danger fst-italic">moments,</span>
                <br />
                not things.
              </h2>
              <p className="text-light-gray mb-4 fs-7">
                Don't wait months to plan. Join our spontaneous departures leaving
                this week with confirmed tickets, handpicked stays, and up to 40%
                surplus savings.
              </p>
              <Link
                href="/packages"
                className="btn btn-light rounded-pill px-4 py-2 text-danger fw-bold shadow-sm d-inline-flex align-items-center gap-2"
              >
                Explore All Departures &rarr;
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
                      alt="Spiti valley spontaneous road trip"
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
            Travel With <span className="text-rs-blue">Confidence</span>
          </h2>
          <p className="text-muted fs-7 mx-auto" style={{ maxWidth: "600px" }}>
            From instant booking confirmation to 24/7 dedicated trip assistance,
            we ensure your spontaneous trip is 100% seamless.
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

      {/* ===================================================
          6. FAQ ACCORDION (MATCHING THEME)
      =================================================== */}
      <section className="container-lg py-4 pb-5">
        <div className="text-center mb-4">
          <span className="text-muted fw-bold fs-8 text-uppercase letter-spacing d-block mb-1">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="fw-bold mb-2 text-dark">
            Got Questions About <span className="text-danger">Last-Minute</span> Trips?
          </h2>
        </div>

        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className="lastminute-faq-card">
                  <button
                    className="lastminute-faq-header"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp width={18} height={18} className="text-danger" />
                    ) : (
                      <ChevronDown width={18} height={18} className="text-muted" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="lastminute-faq-body">{faq.a}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LastMinuteTrips;
