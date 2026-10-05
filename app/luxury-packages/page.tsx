import React from "react";
import "../../src/styles/corporate-tour.css";

const CorporateTours = () => {
  const corporateTours = [
    {
      title: "Himalayan Trekking Adventure",
      location: "Himachal Pradesh, India",
      duration: "5 Days / 4 Nights",
      price: "₹14,999",
      people: "15+",
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Manali Trek & Explore",
      location: "Manali, Himachal Pradesh",
      duration: "4 Days / 3 Nights",
      price: "₹11,999",
      people: "20+",
      image: "images/bali.png",
    },
    {
      title: "Ladakh Adventure Expedition",
      location: "Ladakh, India",
      duration: "6 Days / 5 Nights",
      price: "₹24,999",
      people: "12+",
      image:
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Uttarakhand Trekking Escape",
      location: "Uttarakhand, India",
      duration: "5 Days / 4 Nights",
      price: "₹13,999",
      people: "18+",
      image:
        "https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=900&q=80",
    },
  ];

  const reasons = [
    {
      icon: "🥾",
      title: "Amazing Trekking Trails",
      text: "Explore scenic mountain trails, forests, valleys and breathtaking landscapes.",
    },
    {
      icon: "🏔️",
      title: "Adventure & Exploration",
      text: "Experience thrilling treks and discover some of India's most beautiful destinations.",
    },
    {
      icon: "🧭",
      title: "Expert Trip Planning",
      text: "Enjoy carefully planned trekking itineraries, comfortable stays and seamless travel.",
    },
    {
      icon: "🛡️",
      title: "Safe & Memorable Journeys",
      text: "Travel with reliable arrangements and support for a safe and unforgettable adventure.",
    },
  ];

  return (
    <main className="corporate-page">
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="corporate-hero">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="corporate-hero-content">
                <span className="corporate-eyebrow">
                  TREK & <b>EXPLORE</b>
                </span>

                <h1>
                  Trekking Tours
                  <span>& Adventure Experiences</span>
                </h1>

                <p>
                  Discover breathtaking mountains, scenic trails and exciting
                  trekking destinations with Trek & Explore. Plan unforgettable
                  trekking tours, hiking trips and adventure holidays across
                  India's most beautiful landscapes.
                </p>

                <button className="corporate-primary-btn">
                  Explore Trekking Tours
                  <span>→</span>
                </button>

                <div className="hero-decoration hero-star">✦</div>

                <div className="hero-decoration hero-plane">➤</div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="corporate-hero-image">
                <div className="hero-image-shape"></div>

                <img
                  src="/images/corporate-tour.png"
                  alt="Trekking tours and adventure travel packages in India"
                />

                <div className="hero-image-label">
                  <small>EXPLORE THE UNKNOWN</small>
                  <strong>LIVE THE ADVENTURE</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SEARCH / FILTER BAR
      ===================================================== */}
      <section className="corporate-search-wrapper">
        <div className="container">
          <div className="corporate-search-card">
            <div className="search-item">
              <div className="search-icon">⌖</div>

              <div>
                <small>DESTINATION</small>
                <strong>Select Trek Destination</strong>
              </div>

              <span className="search-arrow">⌄</span>
            </div>

            <div className="search-divider"></div>

            <div className="search-item">
              <div className="search-icon">♧</div>

              <div>
                <small>TRIP TYPE</small>
                <strong>Trekking & Adventure</strong>
              </div>

              <span className="search-arrow">⌄</span>
            </div>

            <div className="search-divider"></div>

            <div className="search-item">
              <div className="search-icon">◷</div>

              <div>
                <small>DURATION</small>
                <strong>Any Duration</strong>
              </div>

              <span className="search-arrow">⌄</span>
            </div>

            <button className="corporate-search-btn">
              <span>⌕</span>
              Search Treks
            </button>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY TREK & EXPLORE
      ===================================================== */}
      <section className="corporate-reasons py-5">
        <div className="container">
          <div className="section-heading text-center">
            <span>WHY CHOOSE</span>

            <h2>
              TREK & <b>EXPLORE?</b>
            </h2>

            <div className="heading-line"></div>
          </div>

          <div className="row g-4 mt-4">
            {reasons.map((reason, index) => (
              <div className="col-md-6 col-lg-3" key={index}>
                <div className="reason-card">
                  <div
                    className={`reason-icon ${
                      index % 2 === 0 ? "red" : "blue"
                    }`}
                  >
                    {reason.icon}
                  </div>

                  <h3>{reason.title}</h3>

                  <p>{reason.text}</p>

                  <div className="reason-line"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          POPULAR TREKKING TOURS
      ===================================================== */}
      <section className="corporate-tours py-5">
        <div className="container">
          <div className="section-top d-flex justify-content-between align-items-end mb-4">
            <div>
              <span className="section-mini-title">
                DISCOVER YOUR NEXT ADVENTURE
              </span>

              <h2>
                Popular <b>Trekking Tours</b>
              </h2>
            </div>

            <button className="view-all-btn">View All Treks →</button>
          </div>

          <div className="row g-4">
            {corporateTours.map((tour, index) => (
              <div className="col-sm-6 col-lg-3" key={index}>
                <article className="corporate-tour-card">
                  <div className="tour-image">
                    <img
                      src={tour.image}
                      alt={`${tour.title} - ${tour.location} trekking and adventure tour package`}
                      loading="lazy"
                    />

                    <span className="tour-location">
                      📍 {tour.location}
                    </span>

                    <span className="tour-people">
                      👥 {tour.people}
                    </span>
                  </div>

                  <div className="tour-card-content">
                    <h3>{tour.title}</h3>

                    <div className="tour-duration">
                      ◷ {tour.duration}
                    </div>

                    <div className="tour-price">
                      <small>Starting from</small>
                      <strong>{tour.price}</strong>
                      <span>/ person</span>
                    </div>

                    <button className="tour-btn">
                      Explore Trek
                      <span>→</span>
                    </button>
                  </div>
                </article>
              </div>
            ))}
          </div>

          <div className="tour-pagination">
            <span className="active"></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </section>

      {/* =====================================================
          TREK & EXPLORE CTA
      ===================================================== */}
      <section className="corporate-cta-section">
        <div className="container">
          <div className="corporate-cta">
            <div className="cta-content">
              <span>YOUR NEXT ADVENTURE STARTS HERE</span>

              <h2>
                Let's Plan Your Next
                <strong> Trekking Adventure</strong>
              </h2>

              <p>
                From weekend hikes to multi-day mountain expeditions, we create
                memorable trekking experiences for adventure lovers, friends,
                families and groups.
              </p>

              <button className="cta-btn">
                Get a Custom Trek Plan
                <span>→</span>
              </button>
            </div>

            <div className="cta-images">
              <div className="polaroid polaroid-one">
                <img
                  src="https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=700&q=80"
                  alt="Hiking and trekking adventure in the mountains"
                  loading="lazy"
                />
              </div>

              <div className="polaroid polaroid-two">
                <img
                  src="https://images.unsplash.com/photo-1521336575822-6da63fb45455?auto=format&fit=crop&w=700&q=80"
                  alt="Mountain trekking and outdoor adventure experience"
                  loading="lazy"
                />
              </div>

              <div className="polaroid polaroid-three">
                <img
                  src="https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=700&q=80"
                  alt="Trekking through scenic mountain landscapes"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          STATS / TESTIMONIAL
      ===================================================== */}
      <section className="corporate-stats py-5">
        <div className="container">
          <div className="row g-4 align-items-stretch">
            <div className="col-lg-3">
              <div className="company-stat-card">
                <span>TRUSTED BY TRAVELLERS</span>

                <strong>500+</strong>

                <h4>Happy Adventurers</h4>

                <p>
                  Creating memorable trekking and adventure travel experiences
                  across incredible destinations.
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="corporate-testimonial">
                <div className="quote-mark">“</div>

                <p>
                  Our trek was perfectly planned from start to finish. The
                  route, stay and travel arrangements were seamless, making the
                  entire mountain adventure truly unforgettable!
                </p>

                <div className="testimonial-author">
                  <div className="author-avatar">TR</div>

                  <div>
                    <strong>Adventure Traveller</strong>
                    <span>Trek & Explore Guest</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="stats-small-wrapper">
                <div className="small-stat">
                  <span>TRAVELLER SATISFACTION</span>
                  <strong>98%</strong>
                </div>

                <div className="small-stat">
                  <span>YEARS OF TRAVEL EXPERIENCE</span>
                  <strong>10+</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="corporate-final-cta">
        <div className="container">
          <div className="final-cta-inner text-center">
            <span>READY FOR YOUR NEXT ADVENTURE?</span>

            <h2>
              Explore More.
              <strong> Trek Further.</strong>
            </h2>

            <p>
              Tell us your preferred destination, travel dates and adventure
              style, and we'll help you plan an unforgettable trekking trip.
            </p>

            <button>Plan My Trekking Trip →</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CorporateTours;
