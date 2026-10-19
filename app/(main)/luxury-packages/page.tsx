import React from "react";
import "@/src/styles/corporate-tour.css";

const LuxuryPackages = () => {
  const luxuryTours = [
    {
      title: "Royal Rajasthan Palace Retreat",
      location: "Udaipur & Jaipur, India",
      duration: "6 Days / 5 Nights",
      price: "₹89,999",
      people: "Private VIP",
      image: "/images/udaipur-kumbhalgarh.png",
    },
    {
      title: "Maldives Private Island & Water Villa",
      location: "Maldives",
      duration: "5 Days / 4 Nights",
      price: "₹1,85,000",
      people: "Exclusive Couple",
      image: "/images/maldives.png",
    },
    {
      title: "Kashmir Luxury Houseboat & Gulmarg Ski",
      location: "Srinagar & Gulmarg, India",
      duration: "5 Days / 4 Nights",
      price: "₹64,999",
      people: "Chauffeur Driven",
      image: "/images/kashmir-paradise.png",
    },
    {
      title: "Dubai Signature Sky & Desert Villa",
      location: "Dubai, UAE",
      duration: "5 Days / 4 Nights",
      price: "₹1,25,000",
      people: "VIP Concierge",
      image: "/images/dubai.png",
    },
  ];

  const reasons = [
    {
      icon: "💎",
      title: "5-Star & Heritage Stays",
      text: "Handpicked luxury resorts, royal palaces, private villas, and bespoke suites offering unmatched comfort.",
    },
    {
      icon: "🥂",
      title: "Curated Bespoke Itineraries",
      text: "Every moment customized to your taste—from private yacht charters to exclusive candlelit dining under the stars.",
    },
    {
      icon: "🛎️",
      title: "Dedicated Personal Concierge",
      text: "Enjoy seamless 24/7 VIP assistance, private luxury transfers, and expedited airport check-ins.",
    },
    {
      icon: "✨",
      title: "Exclusive Privilege & Privacy",
      text: "Experience uncrowded retreats, private viewings, and confidential white-glove service throughout your journey.",
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
                  LUXURY & <b>BESPOKE TRAVEL</b>
                </span>

                <h1>
                  Curated Luxury Escapes
                  <span>& Handcrafted Holidays</span>
                </h1>

                <p>
                  Indulge in world-class hospitality, private charters, iconic
                  5-star palatial retreats, and tailor-made journeys designed
                  for the discerning traveler. Discover the art of effortless
                  luxury with RS Holidays.
                </p>

                <button className="corporate-primary-btn">
                  Explore Luxury Collections
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
                  alt="Curated luxury holiday packages, 5-star resorts and bespoke travel experiences"
                />

                <div className="hero-image-label">
                  <small>ELEVATE YOUR JOURNEY</small>
                  <strong>THE PINNACLE OF LUXURY</strong>
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
                <strong>Select Luxury Destination</strong>
              </div>

              <span className="search-arrow">⌄</span>
            </div>

            <div className="search-divider"></div>

            <div className="search-item">
              <div className="search-icon">♧</div>

              <div>
                <small>EXPERIENCE TYPE</small>
                <strong>Palaces, Villas & Resorts</strong>
              </div>

              <span className="search-arrow">⌄</span>
            </div>

            <div className="search-divider"></div>

            <div className="search-item">
              <div className="search-icon">◷</div>

              <div>
                <small>DURATION</small>
                <strong>Custom Duration</strong>
              </div>

              <span className="search-arrow">⌄</span>
            </div>

            <button className="corporate-search-btn">
              <span>⌕</span>
              Search Luxury Packages
            </button>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY RS LUXURY COLLECTION
      ===================================================== */}
      <section className="corporate-reasons py-5">
        <div className="container">
          <div className="section-heading text-center">
            <span>WHY CHOOSE</span>

            <h2>
              RS LUXURY <b>COLLECTION?</b>
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
          POPULAR LUXURY ESCAPES
      ===================================================== */}
      <section className="corporate-tours py-5">
        <div className="container">
          <div className="section-top d-flex justify-content-between align-items-end mb-4">
            <div>
              <span className="section-mini-title">
                SIGNATURE EXPERIENCES
              </span>

              <h2>
                Popular <b>Luxury Escapes</b>
              </h2>
            </div>

            <button className="view-all-btn">View All Collections →</button>
          </div>

          <div className="row g-4">
            {luxuryTours.map((tour, index) => (
              <div className="col-sm-6 col-lg-3" key={index}>
                <article className="corporate-tour-card">
                  <div className="tour-image">
                    <img
                      src={tour.image}
                      alt={`${tour.title} - ${tour.location} luxury travel package`}
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
                      Explore Package
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
          BESPOKE LUXURY CTA
      ===================================================== */}
      <section className="corporate-cta-section">
        <div className="container">
          <div className="corporate-cta">
            <div className="cta-content">
              <span>YOUR BESPOKE JOURNEY AWAITS</span>

              <h2>
                Let's Design Your Next
                <strong> Signature Luxury Holiday</strong>
              </h2>

              <p>
                From private island hideaways to royal heritage suites, our
                bespoke travel designers craft every detail to perfection for
                couples, families and VIP groups.
              </p>

              <button className="cta-btn">
                Request a Private Itinerary
                <span>→</span>
              </button>
            </div>

            <div className="cta-images">
              <div className="polaroid polaroid-one">
                <img
                  src="/images/romantic-royal.jpg"
                  alt="Royal heritage luxury palace suite stay"
                  loading="lazy"
                />
              </div>

              <div className="polaroid polaroid-two">
                <img
                  src="/images/maldives.png"
                  alt="Overwater luxury villa in the Maldives"
                  loading="lazy"
                />
              </div>

              <div className="polaroid polaroid-three">
                <img
                  src="/images/romantic-international.jpg"
                  alt="Luxury international private holiday experience"
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

                <strong>1,200+</strong>

                <h4>Luxury Journeys Delivered</h4>

                <p>
                  Delivering five-star bespoke holiday experiences across the
                  world's most breathtaking destinations.
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="corporate-testimonial">
                <div className="quote-mark">“</div>

                <p>
                  From the private luxury transfers to the exquisite palace
                  suite in Udaipur, every detail was orchestrated with sheer
                  perfection. Truly a benchmark for ultra-luxury travel in
                  India!
                </p>

                <div className="testimonial-author">
                  <div className="author-avatar">RS</div>

                  <div>
                    <strong>Rajesh &amp; Sunita Mehra</strong>
                    <span>Private Luxury Clients</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="stats-small-wrapper">
                <div className="small-stat">
                  <span>GUEST SATISFACTION</span>
                  <strong>99.4%</strong>
                </div>

                <div className="small-stat">
                  <span>GLOBAL 5★ HOSPITALITY PARTNERS</span>
                  <strong>150+</strong>
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
            <span>EXPERIENCE THE EXCEPTIONAL</span>

            <h2>
              Travel Beyond The Ordinary.
              <strong> In Pure Luxury.</strong>
            </h2>

            <p>
              Tell us your dream destination, travel dates and preferred
              indulgences. Our luxury travel consultants will curate a bespoke
              proposal tailored exclusively for you.
            </p>

            <button>Plan My Luxury Escape →</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LuxuryPackages;
