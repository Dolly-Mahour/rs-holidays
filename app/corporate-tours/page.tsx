import React from "react";
import "../../src/styles/corporate-tour.css";

const CorporateTours = () => {
  const corporateTours = [
    {
      title: "Bali Bliss Retreat",
      location: "Bali, Indonesia",
      duration: "5 Days / 4 Nights",
      price: "₹49,999",
      people: "15+",
      image:
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Singapore Getaway",
      location: "Singapore",
      duration: "4 Days / 3 Nights",
      price: "₹54,999",
      people: "20+",
      image: "images/bali.png"
    },
    {
      title: "Dubai Corporate Escape",
      location: "Dubai, UAE",
      duration: "5 Days / 4 Nights",
      price: "₹44,999",
      people: "25+",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Thailand Team Trip",
      location: "Thailand",
      duration: "5 Days / 4 Nights",
      price: "₹42,999",
      people: "18+",
      image:
        "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=900&q=80",
    },
  ];

  const reasons = [
    {
      icon: "👥",
      title: "Team Bonding",
      text: "Strengthen relationships through shared experiences.",
    },
    {
      icon: "🎯",
      title: "Increased Productivity",
      text: "Motivated teams lead to better collaboration and performance.",
    },
    {
      icon: "🧳",
      title: "Hassle-Free Planning",
      text: "End-to-end travel management for a seamless experience.",
    },
    {
      icon: "🛡️",
      title: "Trusted & Safe",
      text: "Safe, reliable and memorable journeys every time.",
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
                  CORPORATE <b>TOURS</b>
                </span>

                <h1>
                  Stronger Teams,
                  <span> Better Journeys</span>
                </h1>

                <p>
                  Curated corporate travel experiences that inspire
                  collaboration, motivate teams and create memories for a
                  lifetime.
                </p>

                <button className="corporate-primary-btn">
                  Plan Your Corporate Tour
                  <span>→</span>
                </button>

                <div className="hero-decoration hero-star">
                  ✦
                </div>

                <div className="hero-decoration hero-plane">
                  ➤
                </div>

              </div>
            </div>

            <div className="col-lg-6">
              <div className="corporate-hero-image">

                <div className="hero-image-shape"></div>

                <img
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=85"
                  alt="Corporate team travelling"
                />

                <div className="hero-image-label">
                  <small>TRAVEL TOGETHER</small>
                  <strong>ACHIEVE TOGETHER</strong>
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
                <strong>Select Destination</strong>
              </div>

              <span className="search-arrow">⌄</span>
            </div>


            <div className="search-divider"></div>


            <div className="search-item">
              <div className="search-icon">♧</div>

              <div>
                <small>TOUR TYPE</small>
                <strong>Corporate Tour</strong>
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
              Search Tours
            </button>

          </div>

        </div>
      </section>


      {/* =====================================================
          WHY CORPORATE TOURS
      ===================================================== */}
      <section className="corporate-reasons py-5">

        <div className="container">

          <div className="section-heading text-center">

            <span>WHY CHOOSE</span>

            <h2>
              CORPORATE <b>TOURS?</b>
            </h2>

            <div className="heading-line"></div>

          </div>


          <div className="row g-4 mt-4">

            {reasons.map((reason, index) => (
              <div className="col-md-6 col-lg-3" key={index}>

                <div className="reason-card">

                  <div className={`reason-icon ${index % 2 === 0 ? "red" : "blue"}`}>
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
          POPULAR CORPORATE TOURS
      ===================================================== */}
      <section className="corporate-tours py-5">

        <div className="container">

          <div className="section-top d-flex justify-content-between align-items-end mb-4">

            <div>
              <span className="section-mini-title">
                EXPLORE WITH YOUR TEAM
              </span>

              <h2>
                Popular <b>Corporate Tours</b>
              </h2>
            </div>

            <button className="view-all-btn">
              View All Tours →
            </button>

          </div>


          <div className="row g-4">

            {corporateTours.map((tour, index) => (

              <div className="col-sm-6 col-lg-3" key={index}>

                <article className="corporate-tour-card">

                  <div className="tour-image">

                    <img
                      src={tour.image}
                      alt={tour.title}
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
                      Explore Tour
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
          CORPORATE CTA
      ===================================================== */}
      <section className="corporate-cta-section">

        <div className="container">

          <div className="corporate-cta">

            <div className="cta-content">

              <span>MAKE YOUR TEAM STRONGER</span>

              <h2>
                Let's Plan Your Next
                <strong> Corporate Escape</strong>
              </h2>

              <p>
                From offsites to reward trips, we design experiences that
                your team will cherish forever.
              </p>

              <button className="cta-btn">
                Get a Custom Quote
                <span>→</span>
              </button>

            </div>


            <div className="cta-images">

              <div className="polaroid polaroid-one">
                <img
                  src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=700&q=80"
                  alt="Team outing"
                />
              </div>

              <div className="polaroid polaroid-two">
                <img
                  src="https://images.unsplash.com/photo-1540317580384-e5d43867caa6?auto=format&fit=crop&w=700&q=80"
                  alt="Corporate event"
                />
              </div>

              <div className="polaroid polaroid-three">
                <img
                  src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&w=700&q=80"
                  alt="Group travel"
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

                <span>TRUSTED BY COMPANIES</span>

                <strong>500+</strong>

                <h4>Happy Corporates</h4>

                <p>
                  Delivering exceptional corporate travel experiences
                  worldwide.
                </p>

              </div>

            </div>


            <div className="col-lg-6">

              <div className="corporate-testimonial">

                <div className="quote-mark">
                  “
                </div>

                <p>
                  RS Holidays planned the perfect offsite for our team.
                  Everything was seamless and the experience was
                  unforgettable!
                </p>

                <div className="testimonial-author">
                  <div className="author-avatar">
                    HR
                  </div>

                  <div>
                    <strong>HR Manager</strong>
                    <span>Tech Solutions Pvt. Ltd.</span>
                  </div>
                </div>

              </div>

            </div>


            <div className="col-lg-3">

              <div className="stats-small-wrapper">

                <div className="small-stat">
                  <span>CLIENT SATISFACTION</span>
                  <strong>98%</strong>
                </div>

                <div className="small-stat">
                  <span>YEARS EXPERIENCE</span>
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

            <span>READY TO TRAVEL TOGETHER?</span>

            <h2>
              Your Team Deserves
              <strong> A Great Journey.</strong>
            </h2>

            <p>
              Tell us your requirements and we'll create a corporate
              travel experience around your team.
            </p>

            <button>
              Plan My Corporate Trip →
            </button>

          </div>

        </div>

      </section>

    </main>
  );
};

export default CorporateTours;