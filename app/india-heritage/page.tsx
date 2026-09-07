"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  Landmark,
  MapPin,
  Calendar,
  Sparkles,
  ShieldCheck,
  Compass,
  Clock,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  X,
  Search,
  Filter,
  ChevronRight,
  Hotel,
  Award,
  Crown,
  Flame,
} from "lucide-react";
import "@/src/styles/india-heritage.css";

// Interface for Heritage Tour Package
export interface HeritageItem {
  id: string;
  title: string;
  location: string;
  region: "Rajasthan" | "North India" | "South India" | "Central India" | "West India" | "North-East";
  category: "Royal Palaces & Forts" | "Spiritual & Sacred Ghats" | "UNESCO World Heritage" | "Cultural Festivals";
  dateBadge: string;
  month: string;
  price: string;
  priceNum: number;
  duration: string;
  image: string;
  accentColor: "gold" | "crimson" | "indigo";
  description: string;
  highlights: string[];
  inclusions: string[];
}

const heritageJourneys: HeritageItem[] = [
  {
    id: "rajasthan-royal-palaces",
    title: "Royal Mewar & Jaipur Palaces",
    location: "Jaipur & Udaipur, Rajasthan",
    region: "Rajasthan",
    category: "Royal Palaces & Forts",
    dateBadge: "YEAR ROUND",
    month: "OCT",
    price: "₹24,999",
    priceNum: 24999,
    duration: "6 Days / 5 Nights",
    image: "/images/romantic-royal.jpg",
    accentColor: "gold",
    description:
      "Walk the opulent courtyards of City Palace, marvel at Amber Fort's Sheesh Mahal, and cruise Lake Pichola at sunset while staying at restored heritage havelis.",
    highlights: ["Amber Fort Sound & Light Show", "Lake Pichola Private Boat", "Chokhi Dhani Cultural Evening", "Vintage Car Museum Tour"],
    inclusions: ["Heritage Palace Hotel Stay", "Private AC Chauffeur", "Monument Entry Tickets", "Daily Royal Breakfast", "Licensed Historian Guide"],
  },
  {
    id: "varanasi-sacred-ghats",
    title: "Varanasi Dev Deepawali & Sacred Ghats",
    location: "Varanasi, Uttar Pradesh",
    region: "North India",
    category: "Spiritual & Sacred Ghats",
    dateBadge: "OCT - MAR",
    month: "NOV",
    price: "₹18,500",
    priceNum: 18500,
    duration: "4 Days / 3 Nights",
    image: "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=800&q=80",
    accentColor: "crimson",
    description:
      "Experience timeless spiritual energy along the holy Ganges. Witness the magnificent evening Ganga Aarti from a private bajra boat and explore ancient silk weaving lanes.",
    highlights: ["VIP Seating for Dashashwamedh Aarti", "Morning Sunrise Boat on Ganges", "Sarnath Buddhist Heritage Tour", "Banarasi Silk Weaver Alley"],
    inclusions: ["Riverside Heritage Stay", "Exclusive Ganga Boat Cruises", "Special Darshan Assistance", "Guided Heritage Walks", "Airport Pick & Drop"],
  },
  {
    id: "hampi-badami-ruins",
    title: "Hampi & Badami UNESCO Trail",
    location: "Hampi, Karnataka",
    region: "South India",
    category: "UNESCO World Heritage",
    dateBadge: "OCT - MAR",
    month: "DEC",
    price: "₹19,999",
    priceNum: 19999,
    duration: "4 Days / 3 Nights",
    image: "https://images.unsplash.com/photo-1600100397608-f010f445b9b4?auto=format&fit=crop&w=800&q=80",
    accentColor: "gold",
    description:
      "Step back into the grandeur of the 14th-century Vijayanagara Empire with stone chariots, towering gopurams, boulder landscapes, and monolithic cave temples.",
    highlights: ["Virupaksha Temple & Musical Pillars", "Sunset from Matanga Hill", "Coracle Boat Ride on Tungabhadra", "Badami Rock Cave Temples"],
    inclusions: ["Boutique Heritage Resort Stay", "Archaeologist Tour Guide", "All Monument Access Permits", "Tungabhadra River Cruise", "AC Sightseeing Transfers"],
  },
  {
    id: "khajuraho-temples",
    title: "Khajuraho Temples & Royal Orchha",
    location: "Khajuraho, Madhya Pradesh",
    region: "Central India",
    category: "UNESCO World Heritage",
    dateBadge: "NOV - FEB",
    month: "FEB",
    price: "₹16,800",
    priceNum: 16800,
    duration: "4 Days / 3 Nights",
    image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80",
    accentColor: "gold",
    description:
      "Admire the breathtaking stone carvings and medieval temple architecture celebrating life, devotion, and art, followed by royal cenotaphs on the Betwa river.",
    highlights: ["Western Group Temples Tour", "Khajuraho Dance Festival (Seasonal)", "Jahangir Mahal in Orchha", "Betwa Riverbank Heritage Walk"],
    inclusions: ["4-Star Heritage Stay", "Govt. Approved Art Historian", "Daily Buffet Breakfast", "Intercity Luxury Transfers", "Evening Light & Sound Show"],
  },
  {
    id: "rann-utsav-kutch",
    title: "Rann Utsav & Kutchi Artisans",
    location: "Kutch, Gujarat",
    region: "West India",
    category: "Cultural Festivals",
    dateBadge: "NOV - FEB",
    month: "DEC",
    price: "₹22,500",
    priceNum: 22500,
    duration: "4 Days / 3 Nights",
    image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=800&q=80",
    accentColor: "crimson",
    description:
      "Witness the boundless shimmering white salt desert under the full moon glow, vibrant Gujarati folk dances, mirror-work textiles, and camel safaris.",
    highlights: ["White Desert Sunset & Stargazing", "Kala Dungar Highest Point View", "Artisan Villages (Bhujodi & Nirona)", "Nightly Folk Music Performances"],
    inclusions: ["Tent City Deluxe Cottage", "All Meals (Authentic Kutchi Cuisine)", "Desert Safari Passes", "Rann Entry Permits", "Bhuj Airport Transfers"],
  },
  {
    id: "pushkar-fair-thar",
    title: "Pushkar Camel Fair & Desert Heritage",
    location: "Pushkar, Rajasthan",
    region: "Rajasthan",
    category: "Cultural Festivals",
    dateBadge: "NOV (ANNUAL)",
    month: "NOV",
    price: "₹19,800",
    priceNum: 19800,
    duration: "3 Days / 2 Nights",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80",
    accentColor: "gold",
    description:
      "Immerse yourself in one of the world's most spectacular cultural gatherings featuring colorfully decorated camels, turban competitions, folk melodies, and sacred lake dips.",
    highlights: ["Pushkar Brahma Temple Darshan", "Desert Camel Safari at Sunset", "Hot Air Ballooning (Optional)", "Vibrant Mela Grounds Walk"],
    inclusions: ["Luxury Swiss Tent Stay", "All Meals & Cultural Nights", "Exclusive Fairground Escort", "Desert Safari Jeep/Camel", "Pushkar Lake Ghat Access"],
  },
  {
    id: "braj-holi-tradition",
    title: "Mathura & Vrindavan Braj Holi",
    location: "Mathura & Barsana, Uttar Pradesh",
    region: "North India",
    category: "Cultural Festivals",
    dateBadge: "MAR (ANNUAL)",
    month: "MAR",
    price: "₹18,500",
    priceNum: 18500,
    duration: "3 Days / 2 Nights",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    accentColor: "crimson",
    description:
      "Join the sacred celebration of Lord Krishna's divine romance with Lathmar Holi in Barsana, Phoolon ki Holi at Banke Bihari, and natural flower petal colors.",
    highlights: ["Barsana Lathmar Holi Access", "Banke Bihari Temple Darshan", "Eco-friendly Gulal & White Attire Kit", "Private Chaperoned Festival Tour"],
    inclusions: ["3-Star Premium Stay near Mandir", "Traditional Mathura Sweets & Meals", "Festival Safety & Guiding Assistance", "Private Transfers from Delhi"],
  },
  {
    id: "amritsar-golden-temple",
    title: "Amritsar Golden Temple & Heritage Walk",
    location: "Amritsar, Punjab",
    region: "North India",
    category: "Spiritual & Sacred Ghats",
    dateBadge: "YEAR ROUND",
    month: "JAN",
    price: "₹13,999",
    priceNum: 13999,
    duration: "3 Days / 2 Nights",
    image: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=800&q=80",
    accentColor: "gold",
    description:
      "Bask in the serene golden reflections at Harmandir Sahib, savor legendary langar meals, pay homage at Jallianwala Bagh, and witness the patriotic Wagah Border ceremony.",
    highlights: ["Palki Sahib Night Ceremony", "World's Largest Community Kitchen Tour", "Wagah Border Beating Retreat VIP Seats", "Old Amritsar Food & Bazaar Walk"],
    inclusions: ["4-Star Hotel Accommodation", "VIP Wagah Border Pass", "Guided Old City Walk", "Daily Breakfast", "Railway / Airport Transfers"],
  },
  {
    id: "mysore-dasara-royal",
    title: "Mysore Palace & Dasara Royal Heritage",
    location: "Mysore, Karnataka",
    region: "South India",
    category: "Royal Palaces & Forts",
    dateBadge: "OCT (ANNUAL)",
    month: "OCT",
    price: "₹21,500",
    priceNum: 21500,
    duration: "4 Days / 3 Nights",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80",
    accentColor: "gold",
    description:
      "Witness the grandeur of 100,000 glowing bulbs illuminating the iconic Mysore Palace, the Jumboo Savari royal elephant procession, and regal silk weaving mills.",
    highlights: ["Mysore Palace Illumination Seats", "Jumboo Savari Royal Procession Pass", "Chamundi Hill & Nandi Bull", "Srirangapatna Tipu Sultan Fort"],
    inclusions: ["Heritage Hotel Stay", "Palace & Procession VIP Pass", "Mysore Silk & Sandalwood Tour", "AC Intercity Transfers from Bangalore", "Daily Breakfast"],
  },
];

export default function IndiaHeritagePage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [selectedMonth, setSelectedMonth] = useState("All");
  const [activeModalItem, setActiveModalItem] = useState<HeritageItem | null>(null);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = "India Heritage Tours & Cultural Expeditions | RS Holidays";
  }, []);

  const categories = [
    "All",
    "Royal Palaces & Forts",
    "Spiritual & Sacred Ghats",
    "UNESCO World Heritage",
    "Cultural Festivals",
  ];

  const regions = [
    "All",
    "Rajasthan",
    "North India",
    "South India",
    "Central India",
    "West India",
  ];

  const months = ["All", "OCT", "NOV", "DEC", "JAN", "FEB", "MAR"];

  // Filtered list
  const filteredJourneys = heritageJourneys.filter((item) => {
    const matchCat = selectedCategory === "All" || item.category === selectedCategory;
    const matchRegion = selectedRegion === "All" || item.region === selectedRegion;
    const matchMonth = selectedMonth === "All" || item.month === selectedMonth;
    return matchCat && matchRegion && matchMonth;
  });

  const handleScrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  const handleScrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const handleBookClick = (item: HeritageItem) => {
    setActiveModalItem(item);
    setInquirySubmitted(false);
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySubmitted(true);
  };

  return (
    <main className="events-page font-sans">
      {/* =====================================================
          1. HERO SECTION (India Heritage & Royal Legacies)
          ===================================================== */}
      <section className="events-hero">
        <div className="container">
          <div className="row align-items-center g-5">
            {/* Left Content */}
            <div className="col-lg-6">
              <div className="events-eyebrow">
                <Crown size={15} color="#e11d48" />
                <span>TIMELESS LEGACIES</span>
                <span className="events-eyebrow-dots">•</span>
                <span>SACRED GHATS</span>
                <span className="events-eyebrow-dots">•</span>
                <span>ROYAL FORTS</span>
              </div>

              <h1 className="events-hero-title font-serif">
                India Heritage &amp;
                <span className="gradient-text">Cultural Journeys</span>
              </h1>

              <p className="events-hero-subtitle">
                Journey through centuries of architectural wonder, royal Mewar palaces, illuminated sacred ghats, and living spiritual traditions crafted with utmost elegance.
              </p>

              {/* 3 Heritage Badges Row */}
              <div className="events-features-row">
                <div className="events-feature-item">
                  <div className="events-feature-icon purple">
                    <Landmark size={20} />
                  </div>
                  <div className="events-feature-text">
                    <strong>UNESCO Wonders</strong>
                    <span>World heritage marvels</span>
                  </div>
                </div>

                <div className="events-feature-item">
                  <div className="events-feature-icon pink">
                    <Crown size={20} />
                  </div>
                  <div className="events-feature-text">
                    <strong>Royal Palace Stays</strong>
                    <span>Authentic havelis &amp; resorts</span>
                  </div>
                </div>

                <div className="events-feature-item">
                  <div className="events-feature-icon peach">
                    <Flame size={20} />
                  </div>
                  <div className="events-feature-text">
                    <strong>Living Traditions</strong>
                    <span>Exclusive festival access</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Collage Visual Art */}
            <div className="col-lg-6">
              <div className="events-hero-collage-wrap">
                <div className="events-collage-bg-blob" />

                <div className="events-collage-grid">
                  {/* Top-Left Image: Royal Rajasthan Palace */}
                  <div className="events-collage-card collage-top-left">
                    <img
                      src="/images/romantic-royal.jpg"
                      alt="Royal Lake Palace Udaipur"
                    />
                  </div>

                  {/* Center Main Image: Varanasi Dev Deepawali */}
                  <div className="events-collage-card collage-center-main">
                    <img
                      src="https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=800&q=80"
                      alt="Varanasi Dev Deepawali Ganga Ghats"
                    />
                  </div>

                  {/* Top-Right Image: Hampi Stone Chariot */}
                  <div className="events-collage-card collage-top-right">
                    <img
                      src="https://images.unsplash.com/photo-1600100397608-f010f445b9b4?auto=format&fit=crop&w=700&q=80"
                      alt="Hampi Stone Chariot UNESCO Heritage"
                    />
                  </div>

                  {/* Bottom-Right Image: Golden Temple */}
                  <div className="events-collage-card collage-bottom-right">
                    <img
                      src="https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=700&q=80"
                      alt="Golden Temple Harmandir Sahib Amritsar"
                    />
                  </div>
                </div>

                <div className="events-floating-orb-1" />
                <div className="events-floating-orb-2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          2. FLOATING SEARCH & FILTER CARD
          ===================================================== */}
      <div className="container events-search-container">
        <div className="events-search-card">
          <div className="events-search-title-block">
            <small>DISCOVER YOUR HERITAGE</small>
            <strong>EXPEDITION</strong>
          </div>

          <div className="events-search-field-group">
            {/* Region Field */}
            <div className="events-search-field">
              <span className="events-field-icon">
                <MapPin size={18} />
              </span>
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                aria-label="Filter by Region"
              >
                <option value="All">All Regions</option>
                <option value="Rajasthan">Rajasthan (Royal Forts)</option>
                <option value="North India">North India (Ganges &amp; Punjab)</option>
                <option value="South India">South India (Hampi &amp; Mysore)</option>
                <option value="Central India">Central India (Khajuraho)</option>
                <option value="West India">West India (Gujarat &amp; Kutch)</option>
              </select>
            </div>

            {/* Heritage Category Field */}
            <div className="events-search-field">
              <span className="events-field-icon">
                <Landmark size={18} />
              </span>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                aria-label="Filter by Heritage Type"
              >
                <option value="All">All Heritage Types</option>
                <option value="Royal Palaces & Forts">Royal Palaces &amp; Forts</option>
                <option value="Spiritual & Sacred Ghats">Spiritual &amp; Sacred Ghats</option>
                <option value="UNESCO World Heritage">UNESCO World Heritage</option>
                <option value="Cultural Festivals">Cultural Festivals &amp; Utsavs</option>
              </select>
            </div>

            {/* Month Field */}
            <div className="events-search-field">
              <span className="events-field-icon">
                <Calendar size={18} />
              </span>
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                aria-label="Filter by Travel Season"
              >
                <option value="All">All Travel Seasons</option>
                <option value="OCT">October (Dasara &amp; Royal Autumn)</option>
                <option value="NOV">November (Pushkar &amp; Dev Deepawali)</option>
                <option value="DEC">December (Rann Utsav &amp; Hampi)</option>
                <option value="JAN">January (Jaipur Lit &amp; Heritage)</option>
                <option value="FEB">February (Khajuraho Dance &amp; Desert)</option>
                <option value="MAR">March (Braj Holi &amp; Spring)</option>
              </select>
            </div>

            {/* Search Submit Button */}
            <button
              className="events-search-submit-btn"
              type="button"
              onClick={() => {
                const el = document.getElementById("heritage-catalog");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <Search size={18} />
              <span>Explore Journeys</span>
            </button>
          </div>
        </div>
      </div>

      {/* =====================================================
          3. TRENDING HERITAGE JOURNEYS SHOWCASE CAROUSEL
          ===================================================== */}
      <section className="events-popular-section">
        <div className="container">
          <div className="events-section-header">
            <div>
              <div className="events-section-eyebrow">FEATURED EXPEDITIONS</div>
              <h2 className="events-section-title font-serif">
                Iconic Heritage Itineraries
              </h2>
            </div>

            <div className="d-flex align-items-center gap-2">
              <button
                type="button"
                className="events-carousel-nav-btn me-2"
                onClick={handleScrollLeft}
                aria-label="Previous Heritage Tours"
                style={{ position: "static", transform: "none" }}
              >
                ❮
              </button>
              <button
                type="button"
                className="events-carousel-nav-btn"
                onClick={handleScrollRight}
                aria-label="Next Heritage Tours"
                style={{ position: "static", transform: "none" }}
              >
                ❯
              </button>
            </div>
          </div>

          {/* Horizontal Track Carousel */}
          <div className="events-carousel-wrapper">
            <div className="events-carousel-track" ref={carouselRef}>
              {heritageJourneys.map((item) => (
                <div
                  className="events-card"
                  key={item.id}
                  onClick={() => handleBookClick(item)}
                >
                  <div className="events-card-media">
                    <img
                      src={item.image}
                      alt={`${item.title} - ${item.location}`}
                      loading="lazy"
                    />

                    <div className="events-card-date-badge">
                      {item.dateBadge}
                    </div>

                    <div className="events-card-action-icon red">
                      👑
                    </div>
                  </div>

                  <div className="events-card-content">
                    <h3 className="events-card-title">{item.title}</h3>
                    <div className="events-card-location">
                      <MapPin size={13} color="#e11d48" />
                      <span>{item.location}</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-2 pt-2 border-top">
                      <small className="text-muted fw-medium">{item.duration}</small>
                      <strong className="text-danger">{item.price}</strong>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          4. HERITAGE CATALOG & FILTER TABS
          ===================================================== */}
      <section className="events-filter-section" id="heritage-catalog">
        <div className="container">
          <div className="text-center mb-4">
            <div className="events-section-eyebrow justify-content-center">
              EXPLORE BY THEME
            </div>
            <h2 className="events-section-title font-serif">
              Curated Heritage Catalog
            </h2>
            <p className="text-muted mx-auto" style={{ maxWidth: "600px" }}>
              Filter through royal fort retreats, mystical river ghats, temple marvels, and authentic cultural gatherings.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="events-tab-pills">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`events-tab-btn ${selectedCategory === cat ? "active" : ""}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Month Selector Pills */}
          <div className="d-flex align-items-center gap-2 mb-4 justify-content-center flex-wrap">
            <small className="fw-bold text-muted me-2">FILTER BY SEASON / MONTH:</small>
            <div className="events-month-pills">
              {months.map((m) => (
                <button
                  key={m}
                  className={`events-month-pill ${selectedMonth === m ? "active" : ""}`}
                  onClick={() => setSelectedMonth(m)}
                >
                  {m === "All" ? "All Seasons" : m}
                </button>
              ))}
            </div>
          </div>

          {/* Events Grid */}
          <div className="row g-4 mt-2">
            {filteredJourneys.length > 0 ? (
              filteredJourneys.map((ev) => (
                <div className="col-md-6 col-lg-4" key={ev.id}>
                  <div className="events-grid-card">
                    <div className="events-grid-img-wrap">
                      <img
                        src={ev.image}
                        alt={`${ev.title} - ${ev.location}`}
                        loading="lazy"
                      />
                      <span className="events-category-tag text-center">
                        {ev.category}
                      </span>
                    </div>

                    <div className="events-grid-body">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span className="badge bg-danger fs-8px text-white fw-bold px-2 py-1 rounded">
                          {ev.dateBadge}
                        </span>
                        <small className="fs-8px text-muted d-flex align-items-center gap-1">
                          <MapPin size={12} color="#e11d48" /> {ev.location}
                        </small>
                      </div>

                      <h3 className="events-grid-title">{ev.title}</h3>
                      <p className="events-grid-desc">{ev.description}</p>

                      <div className="events-grid-meta">
                        <div className="events-meta-price">
                          <small>Starting Package</small>
                          <strong>{ev.price}</strong>
                          <span className="text-muted" style={{ fontSize: "11px" }}> / person</span>
                        </div>

                        <button
                          type="button"
                          className="events-book-btn"
                          onClick={() => handleBookClick(ev)}
                        >
                          <small>View Details</small>
                          <ArrowRight size={13} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-12 text-center py-5">
                <div className="p-5 bg-white shadow-sm rounded-4 border">
                  <h4 className="fw-bold text-dark mb-2">
                    No heritage journeys match your current filter
                  </h4>
                  <p className="text-muted mb-3">
                    Try adjusting your category, region, or month selection.
                  </p>
                  <button
                    type="button"
                    className="rs-btn-pill rs-btn-primary"
                    onClick={() => {
                      setSelectedCategory("All");
                      setSelectedRegion("All");
                      setSelectedMonth("All");
                    }}
                  >
                    Reset All Filters
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          5. WHY TRAVEL INDIA HERITAGE WITH RS HOLIDAYS
          ===================================================== */}
      <section className="events-why-section">
        <div className="container">
          <div className="text-center mb-5">
            <div className="events-section-eyebrow justify-content-center">
              ROYAL HOSPITALITY GUARANTEE
            </div>
            <h2 className="events-section-title font-serif">
              Why Travel India Heritage With RS Holidays?
            </h2>
          </div>

          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="events-why-card">
                <div className="events-why-icon-wrap">🏰</div>
                <h4>Palace &amp; Haveli Stays</h4>
                <p>
                  Stay in authentic restored royal palaces and luxury boutique havelis steeped in authentic regal history.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="events-why-card">
                <div className="events-why-icon-wrap">📜</div>
                <h4>Historian Storytellers</h4>
                <p>
                  Govt.-certified cultural storytellers and archaeologists reveal hidden architecture tales and folklore.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="events-why-card">
                <div className="events-why-icon-wrap">🎟️</div>
                <h4>VIP Entry &amp; Aarti Passes</h4>
                <p>
                  Skip long public queues with priority monument access, private boat seating, and special temple passes.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="events-why-card">
                <div className="events-why-icon-wrap">🚗</div>
                <h4>Chauffeured Luxury</h4>
                <p>
                  Impeccable AC luxury vehicle transfers, punctual airport escorts, and 24/7 on-ground concierge care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          6. CTA BANNER (Custom Heritage Journey)
          ===================================================== */}
      <section className="events-cta-section">
        <div className="container">
          <div className="events-cta-box">
            <div className="events-cta-content">
              <h2 className="font-serif">Looking for a Tailor-Made Heritage Route?</h2>
              <p>
                From private golden triangle palace circuits and sacred Kumbh/Ganga retreats to Khajuraho and Hampi archaeological expeditions, our destination specialists craft your customized dream itinerary.
              </p>
              <button
                type="button"
                className="events-cta-btn"
                onClick={() => {
                  if (heritageJourneys.length > 0) {
                    handleBookClick(heritageJourneys[0]);
                  }
                }}
              >
                <span>Plan Custom Heritage Journey</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          7. HERITAGE INQUIRY / DETAILS MODAL
          ===================================================== */}
      {activeModalItem && (
        <div className="events-modal-overlay show">
          <div className="events-modal-container">
            <button
              type="button"
              className="events-modal-close-btn"
              onClick={() => setActiveModalItem(null)}
              aria-label="Close Modal"
            >
              ✕
            </button>

            <div className="position-relative" style={{ height: "250px" }}>
              <img
                src={activeModalItem.image}
                alt={`${activeModalItem.title} - ${activeModalItem.location}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderTopLeftRadius: "28px",
                  borderTopRightRadius: "28px",
                }}
              />
              <div
                className="position-absolute bottom-0 start-0 w-100 p-4 text-white"
                style={{
                  background:
                    "linear-gradient(transparent, rgba(15,23,42,0.92))",
                }}
              >
                <span className="badge bg-danger mb-2 px-3 py-1 rounded-pill">
                  {activeModalItem.dateBadge}
                </span>
                <h3 className="fw-bold m-0 fs-3 font-serif">{activeModalItem.title}</h3>
                <small className="opacity-75">
                  📍 {activeModalItem.location} • ◷ {activeModalItem.duration}
                </small>
              </div>
            </div>

            <div className="p-4">
              {!inquirySubmitted ? (
                <>
                  <p className="text-muted mb-4">{activeModalItem.description}</p>

                  <h5 className="fw-bold text-dark mb-2">Key Highlights:</h5>
                  <div className="row g-2 mb-3">
                    {activeModalItem.highlights.map((hl, i) => (
                      <div className="col-sm-6" key={i}>
                        <div className="d-flex align-items-center gap-2 p-2 bg-light rounded-3">
                          <Sparkles size={14} className="text-warning flex-shrink-0" />
                          <span className="small text-dark fw-medium">{hl}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <h5 className="fw-bold text-dark mb-2">Package Inclusions:</h5>
                  <div className="row g-2 mb-4">
                    {activeModalItem.inclusions.map((inc, i) => (
                      <div className="col-sm-6" key={i}>
                        <div className="d-flex align-items-center gap-2 p-2 bg-light rounded-3">
                          <CheckCircle2 size={14} className="text-success flex-shrink-0" />
                          <span className="small text-dark fw-medium">{inc}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <hr className="my-4" />

                  <h5 className="fw-bold text-dark mb-3">
                    Inquire / Reserve Your Experience:
                  </h5>
                  <form onSubmit={handleInquirySubmit} className="row g-3">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control rounded-3 py-2 fs-7"
                        placeholder="Your Full Name"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="tel"
                        className="form-control rounded-3 py-2 fs-7"
                        placeholder="Phone / WhatsApp Number"
                        required
                      />
                    </div>
                    <div className="col-md-12">
                      <input
                        type="email"
                        className="form-control rounded-3 py-2 fs-7"
                        placeholder="Email Address"
                        required
                      />
                    </div>
                    <div className="col-12 d-flex justify-content-between align-items-center mt-4">
                      <div>
                        <small className="text-muted d-block">Starting from</small>
                        <strong className="fs-4 text-danger">
                          {activeModalItem.price}
                        </strong>
                        <small className="text-muted"> / person</small>
                      </div>

                      <button
                        type="submit"
                        className="events-search-submit-btn py-2 px-4"
                      >
                        Send Booking Request →
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <div className="text-center py-5">
                  <div className="display-4 mb-3">🎉</div>
                  <h4 className="fw-bold text-dark mb-2">
                    Inquiry Received Successfully!
                  </h4>
                  <p className="text-muted mx-auto mb-4" style={{ maxWidth: "440px" }}>
                    Thank you for your interest in{" "}
                    <strong>{activeModalItem.title}</strong>. Our destination specialist will reach out on WhatsApp / Phone within 2 hours with the day-by-day customized itinerary.
                  </p>
                  <button
                    type="button"
                    className="btn btn-dark rounded-pill px-4"
                    onClick={() => setActiveModalItem(null)}
                  >
                    Done
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}