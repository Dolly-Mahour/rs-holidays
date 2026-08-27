"use client";

import React, { useState, useRef } from "react";
import "@/src/styles/events-festivals.css";

// Interface for Event Types
interface EventItem {
  id: string;
  title: string;
  location: string;
  dateBadge: string;
  category: string;
  month: string;
  price: string;
  duration: string;
  image: string;
  iconType: "purple" | "red" | "magenta";
  description: string;
  inclusions: string[];
}

// Popular Events matching the reference design
const popularEvents: EventItem[] = [
  {
    id: "jaipur-lit-fest",
    title: "Jaipur Literature Festival",
    location: "Jaipur, Rajasthan",
    dateBadge: "10-12 JAN",
    category: "Cultural & Heritage",
    month: "JAN",
    price: "₹14,999",
    duration: "3 Days / 2 Nights",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80",
    iconType: "purple",
    description: "The world's largest free literary festival bringing together Nobel laureates, novelists, and global thinkers in the Pink City.",
    inclusions: ["VIP Delegate Pass", "Heritage Hotel Stay", "Author Interaction Sessions", "Private Transfers"]
  },
  {
    id: "republic-day-parade",
    title: "Republic Day Parade",
    location: "New Delhi, India",
    dateBadge: "26 JAN",
    category: "Cultural & Heritage",
    month: "JAN",
    price: "₹12,499",
    duration: "2 Days / 1 Night",
    image: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&w=800&q=80",
    iconType: "red",
    description: "Witness the magnificent military prowess and colorful cultural tableaux along Kartavya Path in the nation's capital.",
    inclusions: ["Reserved Kartavya Path Pass", "4-Star Hotel Accommodation", "Guided Capital Tour", "Breakfast & Transfers"]
  },
  {
    id: "holi-mathura",
    title: "Holi Festival",
    location: "Mathura, Uttar Pradesh",
    dateBadge: "14-15 MAR",
    category: "Religious & Traditional",
    month: "MAR",
    price: "₹18,500",
    duration: "3 Days / 2 Nights",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    iconType: "purple",
    description: "Immerse in authentic Lathmar Holi and vibrant organic gulal colors in the sacred land of Lord Krishna.",
    inclusions: ["Guided Mathura & Vrindavan Access", "Organic Color Kit & White Kurta", "Stay near Banke Bihari", "Traditional Sweets & Thandai"]
  },
  {
    id: "baisakhi-punjab",
    title: "Baisakhi Festival",
    location: "Punjab, India",
    dateBadge: "08-17 APR",
    category: "Religious & Traditional",
    month: "APR",
    price: "₹16,999",
    duration: "4 Days / 3 Nights",
    image: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=800&q=80",
    iconType: "magenta",
    description: "Experience the exuberant harvest festival of Punjab filled with Bhangra, Dhol beats, and Golden Temple blessings.",
    inclusions: ["Golden Temple VIP Darshan", "Village Farmstay Experience", "Bhangra Cultural Night", "Authentic Punjabi Cuisine"]
  },
  {
    id: "diwali-varanasi",
    title: "Diwali Celebrations",
    location: "Varanasi, Uttar Pradesh",
    dateBadge: "30 OCT",
    category: "Religious & Traditional",
    month: "OCT",
    price: "₹21,999",
    duration: "3 Days / 2 Nights",
    image: "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=800&q=80",
    iconType: "purple",
    description: "Witness Dev Deepawali as over a million glowing diyas illuminate the grand steps of the holy Ganga Ghats.",
    inclusions: ["Exclusive Ganga Boat Cruise", "Ghat VIP Seating Pass", "Riverside Hotel Stay", "Special Evening Aarti Pass"]
  }
];

// Additional Featured Festival Collections
const extendedEvents: EventItem[] = [
  {
    id: "hornbill-fest",
    title: "Hornbill Festival",
    location: "Kohima, Nagaland",
    dateBadge: "01-10 DEC",
    category: "Cultural & Heritage",
    month: "DEC",
    price: "₹24,999",
    duration: "5 Days / 4 Nights",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
    iconType: "purple",
    description: "The Festival of Festivals celebrating the rich tribal heritage, warrior dances, music, and cuisine of Nagaland.",
    inclusions: ["Kisama Heritage Village Pass", "Luxury Glamping Tent Stay", "Tribal Feast & Rock Concerts", "Inner Line Permit Assistance"]
  },
  {
    id: "rann-utsav",
    title: "Rann Utsav Kutch",
    location: "Kutch, Gujarat",
    dateBadge: "01 NOV - 28 FEB",
    category: "Seasonal & International",
    month: "NOV",
    price: "₹22,500",
    duration: "4 Days / 3 Nights",
    image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=800&q=80",
    iconType: "red",
    description: "Step into the magical white salt desert under the full moon with Kutchi folk dances, handicrafts, and stargazing.",
    inclusions: ["Tent City Resort Accommodation", "Full Moon Desert Safari", "Kutchi Artisans Tour", "Traditional Garba Nights"]
  },
  {
    id: "pushkar-fair",
    title: "Pushkar Camel Fair",
    location: "Pushkar, Rajasthan",
    dateBadge: "20-28 NOV",
    category: "Cultural & Heritage",
    month: "NOV",
    price: "₹19,800",
    duration: "3 Days / 2 Nights",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80",
    iconType: "magenta",
    description: "One of the world's largest livestock trading fairs blending colorful turban shows, hot air ballooning, and temple dips.",
    inclusions: ["Luxury Tent Accommodations", "Hot Air Balloon Ride Pass", "Camel Safari & Cultural Shows", "Desert Photography Guide"]
  },
  {
    id: "lantern-festival",
    title: "Yi Peng Lantern Festival",
    location: "Chiang Mai, Thailand",
    dateBadge: "15-16 NOV",
    category: "Seasonal & International",
    month: "NOV",
    price: "₹45,000",
    duration: "5 Days / 4 Nights",
    image: "https://cdn.prod.website-files.com/62f5bf7bfc228582d5b3674d/6443cfbc2144b549e86cbb59_hisu-lee-YtTcu-nA9Ao-unsplash-p-1600.jpg",
    iconType: "purple",
    description: "Release thousands of glowing sky lanterns into the midnight sky for goodwill and romance in Northern Thailand.",
    inclusions: ["VIP CAD Lantern Mass Release Ticket", "Chiang Mai Boutique Hotel", "Temple & Floating Market Tour", "Airport Transfers"]
  },
  {
    id: "venice-carnival",
    title: "Carnival of Venice",
    location: "Venice, Italy",
    dateBadge: "15 FEB - 04 MAR",
    category: "Music & Art",
    month: "FEB",
    price: "₹1,25,000",
    duration: "6 Days / 5 Nights",
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80",
    iconType: "red",
    description: "Step back into Renaissance elegance with ornate Venetian masquerade masks, Grand Canal gondolas, and luxury balls.",
    inclusions: ["Masquerade Grand Ball Entry", "Grand Canal Hotel Stay", "Gondola Serenade Tour", "Mask Making Workshop"]
  },
  {
    id: "cherry-blossom",
    title: "Cherry Blossom Festival",
    location: "Kyoto, Japan",
    dateBadge: "25 MAR - 10 APR",
    category: "Seasonal & International",
    month: "MAR",
    price: "₹1,48,000",
    duration: "7 Days / 6 Nights",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
    iconType: "magenta",
    description: "Celebrate Hanami beneath thousands of delicate pink sakura blossoms along Kyoto's ancient temples and Philosopher's Path.",
    inclusions: ["Kyoto Ryokan Hotel Stay", "Tea Ceremony Experience", "Bullet Train Pass (JR Pass)", "Private Sakura Picnic Pass"]
  }
];

export default function EventsAndFestivalsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedMonth, setSelectedMonth] = useState("All");
  const [searchDestination, setSearchDestination] = useState("All");
  const [searchEventType, setSearchEventType] = useState("All");
  const [activeModalEvent, setActiveModalEvent] = useState<EventItem | null>(null);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  const carouselRef = useRef<HTMLDivElement>(null);

  const categories = [
    "All",
    "Cultural & Heritage",
    "Religious & Traditional",
    "Music & Art",
    "Seasonal & International"
  ];

  const months = ["All", "JAN", "FEB", "MAR", "APR", "OCT", "NOV", "DEC"];

  // Filter events based on selections
  const allEventsCombined = [...popularEvents, ...extendedEvents];

  const filteredGridEvents = allEventsCombined.filter((ev) => {
    const matchesCat = selectedCategory === "All" || ev.category === selectedCategory;
    const matchesMonth = selectedMonth === "All" || ev.month === selectedMonth;
    const matchesDest = searchDestination === "All" || ev.location.toLowerCase().includes(searchDestination.toLowerCase());
    const matchesType = searchEventType === "All" || ev.category.toLowerCase().includes(searchEventType.toLowerCase());

    return matchesCat && matchesMonth && matchesDest && matchesType;
  });

  const handleScrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleBookClick = (event: EventItem) => {
    setActiveModalEvent(event);
    setInquirySubmitted(false);
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySubmitted(true);
  };

  return (
    <main className="events-page font-sans">

      {/* =====================================================
          HERO SECTION (Matching Reference Mockup)
      ===================================================== */}
      <section className="events-hero">
        <div className="container">
          <div className="row align-items-center g-5">
            
            {/* Left Content Column */}
            <div className="col-lg-6">
              <div className="events-eyebrow">
                <span>CELEBRATE</span>
                <span className="events-eyebrow-dots">•</span>
                <span>EXPLORE</span>
                <span className="events-eyebrow-dots">•</span>
                <span>EXPERIENCE</span>
              </div>

              <h1 className="events-hero-title">
                Events &amp;
                <span className="gradient-text">Festivals</span>
              </h1>

              <p className="events-hero-subtitle">
                Experience the world's most vibrant events and festivals. Celebrate culture, tradition and unforgettable moments.
              </p>

              {/* Three Feature Badges Pill Row */}
              <div className="events-features-row">
                <div className="events-feature-item">
                  <div className="events-feature-icon purple">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                  </div>
                  <div className="events-feature-text">
                    <strong>Handpicked Events</strong>
                    <span>Best events across the globe</span>
                  </div>
                </div>

                <div className="events-feature-item">
                  <div className="events-feature-icon pink">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                  </div>
                  <div className="events-feature-text">
                    <strong>Unique Experiences</strong>
                    <span>Curated for every traveler</span>
                  </div>
                </div>

                <div className="events-feature-item">
                  <div className="events-feature-icon peach">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <div className="events-feature-text">
                    <strong>Memories to Cherish</strong>
                    <span>Moments you'll never forget</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Collage Media Art Column */}
            <div className="col-lg-6">
              <div className="events-hero-collage-wrap">
                <div className="events-collage-bg-blob"></div>

                <div className="events-collage-grid">
                  {/* Top-Left Image: Holi / Jaipur Crowd */}
                  <div className="events-collage-card collage-top-left">
                    <img 
                      src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=700&q=80" 
                      alt="Holi Festival Celebrations" 
                    />
                  </div>

                  {/* Center Main Image: Floating Sky Lanterns */}
                  <div className="events-collage-card collage-center-main">
                    <img 
                      src="https://cdn.prod.website-files.com/62f5bf7bfc228582d5b3674d/6443cfbc2144b549e86cbb59_hisu-lee-YtTcu-nA9Ao-unsplash-p-2000.jpg" 
                      alt="Lantern Festival Sky" 
                    />
                  </div>

                  {/* Top-Right Image: Cultural Performer */}
                  <div className="events-collage-card collage-top-right">
                    <img 
                      src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=700&q=80" 
                      alt="Kathakali Cultural Dancer" 
                    />
                  </div>

                  {/* Bottom-Right Image: Rath Yatra Chariot Procession */}
                  <div className="events-collage-card collage-bottom-right">
                    <img 
                      src="https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=700&q=80" 
                      alt="Traditional Festival Chariot" 
                    />
                  </div>
                </div>

                {/* Floating Decorative Elements */}
                <div className="events-floating-orb-1"></div>
                <div className="events-floating-orb-2"></div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          SEARCH & FILTER FLOATING CARD
      ===================================================== */}
      <div className="container events-search-container">
        <div className="events-search-card">
          
          <div className="events-search-title-block">
            <small>FIND YOUR NEXT</small>
            <strong>EXPERIENCE</strong>
          </div>

          <div className="events-search-field-group">
            
            {/* Destination Field */}
            <div className="events-search-field">
              <span className="events-field-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </span>
              <select 
                value={searchDestination} 
                onChange={(e) => setSearchDestination(e.target.value)}
                aria-label="All Destinations"
              >
                <option value="All">All Destinations</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Delhi">New Delhi</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Punjab">Punjab</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Thailand">Thailand</option>
                <option value="Japan">Japan</option>
                <option value="Italy">Italy</option>
              </select>
            </div>

            {/* Event Type Field */}
            <div className="events-search-field">
              <span className="events-field-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </span>
              <select 
                value={searchEventType} 
                onChange={(e) => setSearchEventType(e.target.value)}
                aria-label="Event Type"
              >
                <option value="All">Event Type</option>
                <option value="Cultural">Cultural &amp; Heritage</option>
                <option value="Religious">Religious &amp; Traditional</option>
                <option value="Music">Music &amp; Art</option>
                <option value="Seasonal">Seasonal &amp; International</option>
              </select>
            </div>

            {/* Duration Field */}
            <div className="events-search-field">
              <span className="events-field-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </span>
              <select aria-label="Duration">
                <option value="All">Duration</option>
                <option value="1-3">1 - 3 Days</option>
                <option value="4-7">4 - 7 Days</option>
                <option value="7+">7+ Days</option>
              </select>
            </div>

            {/* Search Submit Button */}
            <button className="events-search-submit-btn" type="button">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <span>Search Events</span>
            </button>

          </div>

        </div>
      </div>


      {/* =====================================================
          POPULAR EVENTS SECTION (Matching Mockup Carousel)
      ===================================================== */}
      <section className="events-popular-section">
        <div className="container">
          
          <div className="events-section-header">
            <div>
              <div className="events-section-eyebrow">POPULAR EVENTS</div>
              <h2 className="events-section-title">Trending Events You'll Love</h2>
            </div>
            
            <a href="#all-events" className="events-view-all-btn">
              <span>View All Events</span>
              <span>→</span>
            </a>
          </div>

          {/* Horizontal Track Carousel */}
          <div className="events-carousel-wrapper">
            <div className="events-carousel-track" ref={carouselRef}>
              {popularEvents.map((item) => (
                <div 
                  className="events-card" 
                  key={item.id}
                  onClick={() => handleBookClick(item)}
                >
                  <div className="events-card-media">
                    <img src={item.image} alt={item.title} />
                    
                    <div className="events-card-date-badge">
                      {item.dateBadge}
                    </div>

                    <div className={`events-card-action-icon ${item.iconType}`}>
                      {item.iconType === "purple" && "📅"}
                      {item.iconType === "red" && "⭐"}
                      {item.iconType === "magenta" && "🎵"}
                    </div>
                  </div>

                  <div className="events-card-content">
                    <h3 className="events-card-title">{item.title}</h3>
                    <div className="events-card-location">
                      <span>📍</span>
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Right Scroll Button */}
            <button 
              className="events-carousel-nav-btn" 
              onClick={handleScrollRight}
              aria-label="Next Events"
            >
              ❯
            </button>
          </div>

        </div>
      </section>


      {/* =====================================================
          FEATURED CATEGORIES & MONTH FILTER TABS
      ===================================================== */}
      <section className="events-filter-section" id="all-events">
        <div className="container">
          
          <div className="text-center mb-4">
            <div className="events-section-eyebrow justify-content-center">DISCOVER MORE</div>
            <h2 className="events-section-title">Explore Festivals Across India &amp; The World</h2>
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
            <small className="fw-bold text-muted me-2">FILTER BY MONTH:</small>
            <div className="events-month-pills">
              {months.map((m) => (
                <button
                  key={m}
                  className={`events-month-pill ${selectedMonth === m ? "active" : ""}`}
                  onClick={() => setSelectedMonth(m)}
                >
                  {m === "All" ? "All Months" : m}
                </button>
              ))}
            </div>
          </div>

          {/* Events Grid */}
          <div className="row g-4 mt-2">
            {filteredGridEvents.length > 0 ? (
              filteredGridEvents.map((ev) => (
                <div className="col-md-6 col-lg-4" key={ev.id}>
                  <div className="events-grid-card">
                    <div className="events-grid-img-wrap">
                      <img src={ev.image} alt={ev.title} />
                      <span className="events-category-tag text-center">{ev.category}</span>
                    </div>

                    <div className="events-grid-body">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span className="badge bg-danger fs-8px text-white fw-bold px-2 py-1 rounded">
                          {ev.dateBadge}
                        </span>
                        <small className="fs-8px">📍 {ev.location}</small>
                      </div>

                      <h3 className="events-grid-title">{ev.title}</h3>
                      <p className="events-grid-desc">{ev.description}</p>

                      <div className="events-grid-meta">
                        <div className="events-meta-price">
                          <small>Starting Package</small>
                          <strong>{ev.price}</strong>
                        </div>
                        
                        <button 
                          className="events-book-btn"
                          onClick={() => handleBookClick(ev)}
                        >
                          <small>Explore Details</small>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-12 text-center py-5">
                <div className="p-5 bg-light rounded-4">
                  <h4 className="fw-bold text-dark mb-2">No festivals found matching your filter</h4>
                  <p className="text-muted mb-3">Try selecting another category or clear your destination search.</p>
                  <button 
                    className="btn btn-outline-danger rounded-pill px-4"
                    onClick={() => {
                      setSelectedCategory("All");
                      setSelectedMonth("All");
                      setSearchDestination("All");
                      setSearchEventType("All");
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
          WHY CHOOSE RS HOLIDAYS FOR FESTIVALS
      ===================================================== */}
      <section className="events-why-section">
        <div className="container">
          <div className="text-center mb-5">
            <div className="events-section-eyebrow justify-content-center">OUR GUARANTEE</div>
            <h2 className="events-section-title">Why Travel Festivals With RS Holidays?</h2>
          </div>

          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="events-why-card">
                <div className="events-why-icon-wrap">🎟️</div>
                <h4>Guaranteed VIP Passes</h4>
                <p>Skip lines with priority access tickets, reserved seating, and exclusive festival lounge passes.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="events-why-card">
                <div className="events-why-icon-wrap">🏨</div>
                <h4>Prime Venue Stay</h4>
                <p>Stay in handpicked luxury boutique hotels and heritage stays located right near the action.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="events-why-card">
                <div className="events-why-icon-wrap">🧭</div>
                <h4>Local Cultural Fixers</h4>
                <p>Expert local fixers and cultural storytellers ensure authentic immersions and safe celebrations.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="events-why-card">
                <div className="events-why-icon-wrap">✈️</div>
                <h4>End-to-End Transfers</h4>
                <p>Hassle-free transfers, airport pickups, special festival permits, and 24/7 on-ground assistance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* =====================================================
          CTA BANNER
      ===================================================== */}
      <section className="events-cta-section">
        <div className="container">
          <div className="events-cta-box">
            <div className="events-cta-content">
              <h2>Can't Find Your Dream Festival?</h2>
              <p>
                From Tomorrowland and La Tomatina to specialized cultural fairs across India, our travel specialists design custom festival itineraries tailored to your dates and budget.
              </p>
              <button 
                className="events-cta-btn"
                onClick={() => {
                  if (popularEvents.length > 0) {
                    handleBookClick(popularEvents[0]);
                  }
                }}
              >
                <span>Plan Custom Festival Journey</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* =====================================================
          EVENT INQUIRY / DETAILS MODAL
      ===================================================== */}
      {activeModalEvent && (
        <div className="events-modal-overlay show">
          <div className="events-modal-container">
            
            <button 
              className="events-modal-close-btn"
              onClick={() => setActiveModalEvent(null)}
              aria-label="Close Modal"
            >
              ✕
            </button>

            <div className="position-relative" style={{ height: "240px" }}>
              <img 
                src={activeModalEvent.image} 
                alt={activeModalEvent.title} 
                style={{ width: "100%", height: "100%", objectFit: "cover", borderTopLeftRadius: "28px", borderTopRightRadius: "28px" }}
              />
              <div 
                className="position-absolute bottom-0 start-0 w-100 p-4 text-white" 
                style={{ background: "linear-gradient(transparent, rgba(15,23,42,0.9))" }}
              >
                <span className="badge bg-danger mb-2 px-3 py-1 rounded-pill">{activeModalEvent.dateBadge}</span>
                <h3 className="fw-bold m-0 fs-3">{activeModalEvent.title}</h3>
                <small className="opacity-75">📍 {activeModalEvent.location} • ◷ {activeModalEvent.duration}</small>
              </div>
            </div>

            <div className="p-4">
              {!inquirySubmitted ? (
                <>
                  <p className="text-muted mb-4">{activeModalEvent.description}</p>

                  <h5 className="fw-bold text-dark mb-3">Package Inclusions:</h5>
                  <div className="row g-2 mb-4">
                    {activeModalEvent.inclusions.map((inc, i) => (
                      <div className="col-sm-6" key={i}>
                        <div className="d-flex align-items-center gap-2 p-2 bg-light rounded-3">
                          <span className="text-success fw-bold">✓</span>
                          <span className="small text-dark font-semibold">{inc}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <hr className="my-4" />

                  <h5 className="fw-bold text-dark mb-3">Reserve Your Festival Experience:</h5>
                  <form onSubmit={handleInquirySubmit} className="row g-3">
                    <div className="col-md-6">
                      <input type="text" className="form-control rounded-3 py-2 fs-7" placeholder="Your Full Name" required />
                    </div>
                    <div className="col-md-6">
                      <input type="tel" className="form-control rounded-3 py-2 fs-7" placeholder="Phone / WhatsApp Number" required />
                    </div>
                    <div className="col-md-12">
                      <input type="email" className="form-control rounded-3 py-2 fs-7" placeholder="Email Address" required />
                    </div>
                    <div className="col-12 d-flex justify-content-between align-items-center mt-4">
                      <div>
                        <small className="text-muted d-block">Starting from</small>
                        <strong className="fs-4 text-danger">{activeModalEvent.price}</strong>
                        <small className="text-muted"> / person</small>
                      </div>

                      <button type="submit" className="events-search-submit-btn py-2 px-4">
                        Send Booking Request →
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <div className="text-center py-5">
                  <div className="display-4 mb-3">🎉</div>
                  <h4 className="fw-bold text-dark mb-2">Inquiry Submitted Successfully!</h4>
                  <p className="text-muted max-w-md mx-auto mb-4">
                    Thank you for your interest in <strong>{activeModalEvent.title}</strong>. Our travel specialist will contact you on WhatsApp / Phone within 2 hours with the detailed itinerary.
                  </p>
                  <button 
                    className="btn btn-dark rounded-pill px-4"
                    onClick={() => setActiveModalEvent(null)}
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
// export default EventsAndFestivalsPage;