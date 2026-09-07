"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Heart,
  MapPin,
  Calendar,
  Users,
  Search,
  Sparkles,
  Bed,
  Briefcase,
  Compass,
  Gift,
  Wine,
  Gem,
  Landmark,
  ArrowRight,
  ArrowLeft,
  ChevronDown,
  Headphones,
  ShieldCheck,
  Star,
  Hotel,
  CheckCircle2,
} from "lucide-react";
import "../../src/styles/romantic-escapes.css";

interface PackageItem {
  id: number;
  title: string;
  country: string;
  tagline: string;
  price: string;
  priceNum: number;
  category: "international" | "india" | "beach" | "mountains" | "heritage";
  image: string;
}

const collectionsData = [
  {
    id: 1,
    title: "Beach Romance",
    desc: "Sunsets, sandy shores and forever",
    image: "/images/romantic-beach.jpg",
    link: "/packages",
  },
  {
    id: 2,
    title: "Mountain Hideaways",
    desc: "Cozy stays in breathtaking landscapes",
    image: "/images/romantic-mountain.jpg",
    link: "/packages",
  },
  {
    id: 3,
    title: "Royal Getaways",
    desc: "Live your own royal love story",
    image: "/images/romantic-royal.jpg",
    link: "/packages",
  },
  {
    id: 4,
    title: "International Love Stories",
    desc: "Iconic destinations for couples",
    image: "/images/romantic-international.jpg",
    link: "/packages",
  },
];

const categoryCircles = [
  {
    id: "honeymoon",
    name: "Honeymoon",
    desc: "A beautiful beginning",
    icon: Heart,
    colorClass: "pink",
  },
  {
    id: "anniversary",
    name: "Anniversary",
    desc: "Celebrate your journey",
    icon: Gift,
    colorClass: "purple",
  },
  {
    id: "weekend",
    name: "Weekend for Two",
    desc: "Short trips, long memories",
    icon: Wine,
    colorClass: "rose",
  },
  {
    id: "luxury",
    name: "Luxury Escape",
    desc: "Indulge together",
    icon: Gem,
    colorClass: "indigo",
  },
  {
    id: "adventure",
    name: "Adventure Couple",
    desc: "Explore hand in hand",
    icon: Compass,
    colorClass: "teal",
  },
  {
    id: "heritage",
    name: "Heritage Romance",
    desc: "History, culture & love",
    icon: Landmark,
    colorClass: "coral",
  },
];

const packagesData: PackageItem[] = [
  {
    id: 1,
    title: "Santorini",
    country: "Greece",
    tagline: "Sunsets and white-washed dreams",
    price: "₹1,79,999",
    priceNum: 179999,
    category: "international",
    image: "/images/romantic-hero.jpg",
  },
  {
    id: 2,
    title: "Maldives",
    country: "Maldives",
    tagline: "Overwater bliss for two",
    price: "₹2,49,999",
    priceNum: 249999,
    category: "beach",
    image: "/images/maldives.png",
  },
  {
    id: 3,
    title: "Kashmir",
    country: "India",
    tagline: "Breathtaking beauty, timeless romance",
    price: "₹89,999",
    priceNum: 89999,
    category: "mountains",
    image: "/images/kashmir.png",
  },
  {
    id: 4,
    title: "Udaipur",
    country: "India",
    tagline: "A royal retreat for couples",
    price: "₹89,999",
    priceNum: 89999,
    category: "heritage",
    image: "/images/romantic-royal.jpg",
  },
  {
    id: 5,
    title: "Paris",
    country: "France",
    tagline: "Love in the city of lights",
    price: "₹1,69,999",
    priceNum: 169999,
    category: "international",
    image: "/images/romantic-paris.jpg",
  },
  {
    id: 6,
    title: "Bali",
    country: "Indonesia",
    tagline: "Tropical vibes, endless love",
    price: "₹1,29,999",
    priceNum: 129999,
    category: "beach",
    image: "/images/bali.png",
  },
];

const testimonialsData = [
  {
    id: 1,
    title: "A Dream Come True!",
    quote:
      "“RS Holidays made our honeymoon in Maldives absolutely magical. Every single detail was perfect!”",
    author: "Priya & Rohit",
    location: "Visited Maldives",
    avatar: "/images/romantic-royal.jpg",
    rating: 5,
  },
  {
    id: 2,
    title: "Unforgettable Experience",
    quote:
      "“From the stay to the romantic surprises, everything was so well planned. We felt truly special.”",
    author: "Ananya & Kunal",
    location: "Visited Santorini",
    avatar: "/images/romantic-hero.jpg",
    rating: 5,
  },
  {
    id: 3,
    title: "Highly Recommended",
    quote:
      "“Professional, caring and destination experts. Our Udaipur trip was straight out of a fairy tale!”",
    author: "Sneha & Arjun",
    location: "Visited Udaipur",
    avatar: "/images/romantic-paris.jpg",
    rating: 5,
  },
];

export default function RomanticEscapes() {
  const [activeTab, setActiveTab] = useState<"stays" | "packages" | "experiences" | "honeymoon">("stays");
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [wishlist, setWishlist] = useState<Set<number>>(new Set());
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  const toggleWishlist = (id: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setWishlist((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const filteredPackages = packagesData.filter((pkg) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "india") return pkg.country.toLowerCase() === "india";
    return pkg.category === activeFilter;
  });

  const nextTestimonial = () => {
    setTestimonialIdx((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setTestimonialIdx((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <div className="romantic-page font-sans">
      {/* =========================================================================
          1. HERO SECTION & OVERLAPPING SEARCH WIDGET
          ========================================================================= */}
      <div className="romantic-hero-container">
        <div className="romantic-hero-card">
          <img
            src="/images/romantic-hero.jpg"
            alt="Romantic Couple in Santorini"
            className="romantic-hero-bg"
          />
          <div className="romantic-hero-overlay" />

          {/* Left Text Content */}
          <div className="romantic-hero-content">
            <span className="romantic-hero-eyebrow">
              SOME JOURNEYS BRING YOU CLOSER
            </span>
            <h1 className="romantic-hero-title">
              Romantic
              <span className="highlight-red">Escapes</span>
            </h1>
            <span className="romantic-hero-script">
              Collect Moments Together ♡
            </span>
            <p className="romantic-hero-desc">
              Discover breathtaking destinations, intimate stays and
              unforgettable experiences crafted for two.
            </p>

            {/* Couple Trust Badges */}
            <div className="romantic-trust-row">
              <div className="romantic-trust-badge">
                <Heart className="w-4 h-4" fill="#e11d48" />
                <span>Curated for Couples</span>
              </div>
              <div className="romantic-trust-badge">
                <Sparkles className="w-4 h-4" />
                <span>Handpicked Destinations</span>
              </div>
              <div className="romantic-trust-badge">
                <Users className="w-4 h-4" />
                <span>Trusted by 10K+ Couples</span>
              </div>
            </div>
          </div>

          {/* Floating Aesthetic Accents on Right */}
          <div className="romantic-floating-quote-box">
            <span className="romantic-floating-script">Better Together ♡</span>
          </div>
          <div className="romantic-floating-quote-bottom">
            <span className="romantic-floating-quote-text">
              “Not just trips, but love stories”
            </span>
          </div>
        </div>
      </div>

      {/* Floating Search & Booking Widget */}
      <div className="romantic-search-widget-wrapper">
        {/* Category Tabs */}
        <div className="romantic-search-tabs">
          <button
            type="button"
            className={`romantic-search-tab ${activeTab === "stays" ? "active" : ""}`}
            onClick={() => setActiveTab("stays")}
          >
            <Hotel size={16} />
            <span>Stays</span>
          </button>
          <button
            type="button"
            className={`romantic-search-tab ${activeTab === "packages" ? "active" : ""}`}
            onClick={() => setActiveTab("packages")}
          >
            <Briefcase size={16} />
            <span>Packages</span>
          </button>
          <button
            type="button"
            className={`romantic-search-tab ${activeTab === "experiences" ? "active" : ""}`}
            onClick={() => setActiveTab("experiences")}
          >
            <Sparkles size={16} />
            <span>Experiences</span>
          </button>
          <button
            type="button"
            className={`romantic-search-tab ${activeTab === "honeymoon" ? "active" : ""}`}
            onClick={() => setActiveTab("honeymoon")}
          >
            <Heart size={16} fill={activeTab === "honeymoon" ? "#ffffff" : "none"} />
            <span>Honeymoon</span>
          </button>
        </div>

        {/* Search Inputs Card */}
        <div className="romantic-search-card">
          <div className="romantic-search-inputs-grid">
            {/* Where to */}
            <div className="romantic-input-group">
              <span className="romantic-input-label">Where to?</span>
              <div className="romantic-input-field-wrap">
                <MapPin size={18} />
                <input
                  type="text"
                  placeholder="Search destinations, hotels..."
                  defaultValue=""
                />
              </div>
            </div>

            <div className="romantic-search-divider d-none d-lg-block" />

            {/* Travel Dates */}
            <div className="romantic-input-group">
              <span className="romantic-input-label">Travel Dates</span>
              <div className="romantic-input-field-wrap">
                <Calendar size={18} />
                <input type="text" placeholder="Add dates" defaultValue="" />
              </div>
            </div>

            <div className="romantic-search-divider d-none d-lg-block" />

            {/* Travelers */}
            <div className="romantic-input-group">
              <span className="romantic-input-label">Travelers</span>
              <div className="romantic-input-field-wrap">
                <Users size={18} />
                <select defaultValue="2">
                  <option value="2">2 Travelers (Couple)</option>
                  <option value="1">1 Solo Traveler</option>
                  <option value="4">4 Family / Friends</option>
                </select>
                <ChevronDown size={14} className="text-muted ms-auto" />
              </div>
            </div>

            {/* Search Escapes CTA Button */}
            <button
              type="button"
              className="rs-btn-pill rs-btn-romantic px-4 py-3"
              style={{ minWidth: "160px" }}
            >
              <span>Search Escapes</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* =========================================================================
          2. VALUE PROPOSITION STRIP (4 Feature Columns)
          ========================================================================= */}
      <div className="romantic-value-strip">
        <div className="romantic-value-card">
          <div className="romantic-value-item">
            <div className="romantic-value-icon">
              <Bed size={22} />
            </div>
            <div>
              <div className="romantic-value-title">Private & Intimate Stays</div>
              <div className="romantic-value-desc">Handpicked for romance</div>
            </div>
          </div>

          <div className="romantic-value-item">
            <div className="romantic-value-icon">
              <Wine size={22} />
            </div>
            <div>
              <div className="romantic-value-title">Curated Couple Experiences</div>
              <div className="romantic-value-desc">Memories beyond sightseeing</div>
            </div>
          </div>

          <div className="romantic-value-item">
            <div className="romantic-value-icon">
              <Heart size={22} />
            </div>
            <div>
              <div className="romantic-value-title">Honeymoon Planning Experts</div>
              <div className="romantic-value-desc">From dreams to itineraries</div>
            </div>
          </div>

          <div className="romantic-value-item">
            <div className="romantic-value-icon">
              <Headphones size={22} />
            </div>
            <div>
              <div className="romantic-value-title">24/7 Dedicated Support</div>
              <div className="romantic-value-desc">Always with you</div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          3. FEATURED COLLECTIONS ("Romance Looks Good Everywhere")
          ========================================================================= */}
      <div className="romantic-section-wrap">
        <div className="d-flex flex-column flex-md-row align-items-md-end justify-content-between gap-3">
          <div>
            <span className="rs-eyebrow romantic">FEATURED COLLECTIONS</span>
            <h2 className="rs-section-title serif mb-1">
              Romance Looks Good Everywhere
            </h2>
            <div className="rs-title-underline romantic" />
          </div>

          <Link
            href="/packages"
            className="rs-btn-pill rs-btn-outline align-self-start align-self-md-end"
          >
            <span>Explore All Collections</span>
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* 4 Cards Grid */}
        <div className="romantic-collection-grid">
          {collectionsData.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className="romantic-collection-card text-decoration-none"
            >
              <img src={item.image} alt={item.title} />
              <div className="romantic-collection-overlay">
                <div className="romantic-collection-info">
                  <div>
                    <div className="romantic-collection-title">{item.title}</div>
                    <div className="romantic-collection-desc">{item.desc}</div>
                  </div>
                  <div className="romantic-collection-btn">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* =========================================================================
          4. "CHOOSE YOUR LOVE STORY" CATEGORY CIRCLES
          ========================================================================= */}
      <div className="romantic-section-wrap">
        <div className="romantic-categories-wrapper">
          <div className="text-center">
            <span className="rs-eyebrow romantic">CHOOSE YOUR LOVE STORY</span>
            <h2 className="rs-section-title serif mb-2">
              Every Couple is Unique
            </h2>
            <p className="rs-section-subtitle mx-auto">
              Find the perfect kind of escape for your special journey.
            </p>
          </div>

          <div className="romantic-categories-doodle d-none d-lg-block">
            Different Destinations <br />
            Same Love ♡
          </div>

          {/* 6 Category Items */}
          <div className="romantic-categories-grid">
            {categoryCircles.map((cat) => {
              const IconComp = cat.icon;
              return (
                <div
                  key={cat.id}
                  className="romantic-cat-item"
                  onClick={() => {
                    if (cat.id === "honeymoon") setActiveFilter("international");
                    else if (cat.id === "weekend") setActiveFilter("beach");
                    else if (cat.id === "adventure") setActiveFilter("mountains");
                    else if (cat.id === "heritage") setActiveFilter("heritage");
                    else setActiveFilter("all");
                  }}
                >
                  <div className={`romantic-cat-circle ${cat.colorClass}`}>
                    <IconComp size={28} />
                  </div>
                  <div className="romantic-cat-name">{cat.name}</div>
                  <div className="romantic-cat-desc">{cat.desc}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* =========================================================================
          5. POPULAR ROMANTIC PACKAGES ("Handpicked for Your Love Story")
          ========================================================================= */}
      <div className="romantic-section-wrap">
        <div className="d-flex flex-column flex-lg-row align-items-lg-end justify-content-between gap-3">
          <div>
            <span className="rs-eyebrow romantic">POPULAR ROMANTIC PACKAGES</span>
            <h2 className="rs-section-title serif mb-0">
              Handpicked for Your Love Story
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="rs-filter-tabs">
            {["all", "international", "india", "beach", "mountains", "heritage"].map(
              (filterKey) => (
                <button
                  key={filterKey}
                  type="button"
                  className={`rs-filter-pill ${activeFilter === filterKey ? "active" : ""}`}
                  onClick={() => setActiveFilter(filterKey)}
                >
                  {filterKey === "all"
                    ? "All"
                    : filterKey.charAt(0).toUpperCase() + filterKey.slice(1)}
                </button>
              )
            )}
          </div>
        </div>

        {/* Packages Grid */}
        <div className="romantic-packages-grid">
          {filteredPackages.map((pkg) => {
            const isWishlisted = wishlist.has(pkg.id);
            return (
              <div key={pkg.id} className="romantic-pkg-card">
                {/* Card Image */}
                <div className="romantic-pkg-img-wrap">
                  <img src={pkg.image} alt={pkg.title} />
                  <button
                    type="button"
                    className={`rs-wishlist-btn ${isWishlisted ? "active" : ""}`}
                    onClick={(e) => toggleWishlist(pkg.id, e)}
                    aria-label="Add to wishlist"
                  >
                    <Heart
                      size={18}
                      fill={isWishlisted ? "#e11d48" : "none"}
                      color={isWishlisted ? "#e11d48" : "currentColor"}
                    />
                  </button>
                </div>

                {/* Card Body */}
                <div className="romantic-pkg-body">
                  <div>
                    <div className="romantic-pkg-title">{pkg.title}</div>
                    <div className="romantic-pkg-country">
                      <MapPin size={13} />
                      <span>{pkg.country}</span>
                    </div>
                    <div className="romantic-pkg-tagline">{pkg.tagline}</div>
                  </div>

                  {/* Card Footer: Price & Action */}
                  <div className="romantic-pkg-footer">
                    <div className="romantic-price-row">
                      <span className="romantic-price-val">{pkg.price}</span>
                      <span className="romantic-price-label">per couple</span>
                    </div>

                    <Link
                      href={`/packages/${encodeURIComponent(pkg.title.toLowerCase().replace(/\s+/g, "-"))}`}
                      className="rs-btn-pill rs-btn-outline-romantic px-3 py-2 text-decoration-none"
                    >
                      <span>View Details</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* =========================================================================
          6. DARK CANDLELIT CTA BANNER ("Your Perfect Couple Getaway")
          ========================================================================= */}
      <div className="romantic-section-wrap">
        <div className="romantic-cta-card">
          <img
            src="/images/romantic-dinner.jpg"
            alt="Intimate Candlelit Dinner"
            className="romantic-cta-bg"
          />
          <div className="romantic-cta-gradient" />

          <div className="romantic-cta-inner text-white">
            <span
              className="rs-eyebrow text-uppercase"
              style={{ color: "#fda4af", letterSpacing: "3px" }}
            >
              LET US CRAFT
            </span>
            <h2 className="font-serif text-white display-6 fw-bold mb-3">
              Your Perfect Couple Getaway
            </h2>
            <p
              className="text-white-50 mb-4"
              style={{ maxWidth: "520px", fontSize: "15px", lineHeight: "1.7" }}
            >
              Personalized itineraries, exclusive stays and magical experiences —
              because your love story deserves more than ordinary.
            </p>

            <Link
              href="/packages"
              className="rs-btn-pill rs-btn-romantic px-4 py-3"
            >
              <span>Plan My Romantic Escape</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="romantic-cta-doodle d-none d-lg-block">
            <span>
              Good Company <br />
              Brighter Destinations ♡
            </span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          7. TESTIMONIALS SECTION ("Real Stories. Happier Journeys.")
          ========================================================================= */}
      <div className="romantic-section-wrap">
        <div className="d-flex flex-column flex-md-row align-items-md-end justify-content-between gap-3">
          <div>
            <span className="rs-eyebrow romantic">WHAT COUPLES SAY</span>
            <h2 className="rs-section-title serif mb-0">
              Real Stories. Happier Journeys.
            </h2>
          </div>

          <div className="d-flex align-items-center gap-3">
            <Link
              href="/about-us"
              className="rs-btn-pill rs-btn-outline"
            >
              <span>View All Testimonials</span>
              <ArrowRight size={15} />
            </Link>

            <div className="d-flex align-items-center gap-2">
              <button
                type="button"
                className="rs-btn-circle"
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                type="button"
                className="rs-btn-circle fill-romantic"
                onClick={nextTestimonial}
                aria-label="Next testimonial"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="romantic-testimonials-grid">
          {testimonialsData.map((item, index) => (
            <div key={item.id} className="rs-testimonial-card">
              <div>
                <div className="rs-quote-mark">“</div>
                <h3 className="h6 fw-bold text-dark mb-2">{item.title}</h3>
                <p className="text-muted small mb-4" style={{ lineHeight: "1.6" }}>
                  {item.quote}
                </p>
              </div>

              <div className="d-flex align-items-center justify-content-between pt-3 border-top">
                <div className="d-flex align-items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.author}
                    className="romantic-test-avatar"
                  />
                  <div>
                    <div className="fw-bold small text-dark">{item.author}</div>
                    <div className="text-muted" style={{ fontSize: "11.5px" }}>
                      {item.location}
                    </div>
                  </div>
                </div>

                <div className="rs-star-rating">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
