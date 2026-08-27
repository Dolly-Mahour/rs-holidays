'use client'
import React, { useMemo, useState } from "react";
import "../../src/styles/blogs.css";

const blogPosts = [
  {
    id: 1,
    category: "Destinations",
    title: "10 Dream Destinations for Your Bucket List",
    description:
      "From iconic cities to peaceful escapes, discover places that deserve a spot on your travel list.",
    image:
      "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?auto=format&fit=crop&w=1200&q=85",
    date: "May 18, 2026",
    readTime: "7 min read",
    featured: true,
  },
  {
    id: 2,
    category: "Travel Tips",
    title: "20 Travel Hacks That Will Save You Time & Money",
    description:
      "Simple and practical travel tips to make your next journey easier, smarter and more enjoyable.",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=900&q=85",
    date: "May 15, 2026",
    readTime: "5 min read",
  },
  {
    id: 3,
    category: "Adventure",
    title: "Trekking in the Himalayas: A Beginner's Guide",
    description:
      "Everything you should know before starting your first unforgettable Himalayan adventure.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85",
    date: "May 12, 2026",
    readTime: "6 min read",
  },
  {
    id: 4,
    category: "Family Trips",
    title: "Best Family-Friendly Holiday Destinations in India",
    description:
      "Beautiful, safe and memorable destinations where the entire family can enjoy quality time.",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=85",
    date: "May 9, 2026",
    readTime: "5 min read",
  },
  {
    id: 5,
    category: "Budget Travel",
    title: "Maldives on a Budget: Plan Your Dream Vacation",
    description:
      "Enjoy crystal-clear water, beautiful beaches and island life without breaking your budget.",
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=900&q=85",
    date: "May 6, 2026",
    readTime: "5 min read",
  },
  {
    id: 6,
    category: "Adventure",
    title: "Cappadocia: Where Earth Meets the Sky",
    description:
      "Hot-air balloons, dramatic valleys and unforgettable landscapes make Cappadocia truly special.",
    image:
      "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=900&q=85",
    date: "May 3, 2026",
    readTime: "6 min read",
  },
  {
    id: 7,
    category: "Weekend Getaways",
    title: "7 Stunning Weekend Road Trips From Delhi",
    description:
      "Escape the city with these refreshing road trips perfect for a quick weekend adventure.",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=85",
    date: "Apr 29, 2026",
    readTime: "4 min read",
  },
  {
    id: 8,
    category: "Destinations",
    title: "Bali Beyond Beaches: Culture, Nature & Hidden Gems",
    description:
      "Explore a different side of Bali through peaceful temples, rice fields and local experiences.",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=85",
    date: "Apr 26, 2026",
    readTime: "7 min read",
  },
];

const categories = [
  "All",
  "Destinations",
  "Travel Tips",
  "Adventure",
  "Family Trips",
  "Budget Travel",
  "Weekend Getaways",
];

const Blogs = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const featuredPost = blogPosts.find((post) => post.featured)!;

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const categoryMatch =
        activeCategory === "All" || post.category === activeCategory;

      const searchMatch =
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.description.toLowerCase().includes(search.toLowerCase()) ||
        post.category.toLowerCase().includes(search.toLowerCase());

      return categoryMatch && searchMatch;
    });
  }, [activeCategory, search]);

  return (
    <main className="blogs-page">
      {/* ================= HERO ================= */}
      <section className="blogs-hero">
        <div className="blogs-hero-orb blogs-orb-one"></div>
        <div className="blogs-hero-orb blogs-orb-two"></div>

        <div className="container position-relative">
          <div className="row align-items-center g-5">
            <div className="col-lg-5">
              <div className="blogs-eyebrow">
                <span></span>
                THE RS HOLIDAYS BLOG
              </div>

              <h1 className="blogs-hero-title">
                Stories that
                <span> inspire your</span>
                <strong> next journey.</strong>
              </h1>

              <p className="blogs-hero-description">
                Travel inspiration, destination guides, useful tips and real
                stories to help you explore the world better.
              </p>

              <div className="blogs-hero-actions d-flex flex-wrap gap-3">
                <a href="#latest-blogs" className="blogs-primary-btn">
                  Explore Stories
                  <span>→</span>
                </a>

                <div className="blogs-weekly-note">
                  <span className="blogs-note-icon">✦</span>
                  New stories every week
                </div>
              </div>

              <div className="blogs-hero-stats">
                <div>
                  <strong>100+</strong>
                  <span>Travel Stories</span>
                </div>

                <div className="blogs-stat-divider"></div>

                <div>
                  <strong>25+</strong>
                  <span>Destinations</span>
                </div>

                <div className="blogs-stat-divider"></div>

                <div>
                  <strong>10K+</strong>
                  <span>Readers</span>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="blogs-featured-hero">
                <img
                  src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1400&q=90"
                  alt="Travel adventure"
                />

                <div className="blogs-featured-badge">
                  <span>●</span>
                  Featured Story
                </div>

                <div className="blogs-featured-overlay">
                  <span className="blogs-post-category">
                    ROAD TRIP STORIES
                  </span>

                  <h2>
                    Chase Roads.
                    <br />
                    Collect Memories.
                  </h2>

                  <p>
                    Discover unforgettable routes, hidden destinations and
                    experiences worth travelling for.
                  </p>

                  <a href="/" onClick={(e) => e.preventDefault()}>
                    Read Story
                    <span>↗</span>
                  </a>
                </div>

                <div className="blogs-flight-path">
                  <span>✈</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SEARCH ================= */}
      <section className="blogs-discovery-section">
        <div className="container">
          <div className="blogs-discovery-box">
            <div className="row align-items-center g-3">
              <div className="col-lg-4">
                <span className="blogs-small-label">DISCOVER STORIES</span>
                <h3>What do you want to explore?</h3>
              </div>

              <div className="col-lg-8">
                <div className="blogs-search-wrap">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search destinations, travel tips, adventures..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />

                  {search && (
                    <button
                      type="button"
                      className="blogs-search-clear"
                      onClick={() => setSearch("")}
                    >
                      ×
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CATEGORIES ================= */}
      <section className="blogs-category-section">
        <div className="container">
          <div className="blogs-category-scroll">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`blogs-category-btn ${activeCategory === category ? "active" : ""
                  }`}
                onClick={() => setActiveCategory(category)}
              >
                {category === "All" && <span>▦</span>}
                {category === "Destinations" && <span>⌖</span>}
                {category === "Travel Tips" && <span>✦</span>}
                {category === "Adventure" && <span>△</span>}
                {category === "Family Trips" && <span>♧</span>}
                {category === "Budget Travel" && <span>₹</span>}
                {category === "Weekend Getaways" && <span>◫</span>}

                {category === "All" ? "All Stories" : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURED ARTICLES ================= */}
      {activeCategory === "All" && !search && (
        <section className="blogs-featured-section">
          <div className="container">
            <div className="blogs-section-heading">
              <div>
                <span className="blogs-small-label">HANDPICKED FOR YOU</span>
                <h2>Featured Stories</h2>
              </div>

              <a href="#latest-blogs">
                View all stories <span>→</span>
              </a>
            </div>

            <div className="row g-4">
              <div className="col-lg-7">
                <article className="blogs-main-feature">
                  <div className="blogs-main-feature-image">
                    <img src={featuredPost.image} alt={featuredPost.title} />

                    <span className="blogs-editor-badge">
                      Editor&apos;s Pick
                    </span>
                  </div>

                  <div className="blogs-main-feature-content">
                    <div className="blogs-card-meta">
                      <span>{featuredPost.category}</span>
                      <span>•</span>
                      <span>{featuredPost.readTime}</span>
                    </div>

                    <h3>{featuredPost.title}</h3>

                    <p>{featuredPost.description}</p>

                    <div className="blogs-feature-bottom">
                      <span>{featuredPost.date}</span>

                      <button type="button" aria-label="Read article">
                        →
                      </button>
                    </div>
                  </div>
                </article>
              </div>

              <div className="col-lg-5">
                <div className="blogs-feature-list">
                  {blogPosts.slice(1, 4).map((post, index) => (
                    <article className="blogs-feature-list-item" key={post.id}>
                      <div className="blogs-feature-number">
                        0{index + 1}
                      </div>

                      <div className="blogs-list-thumbnail">
                        <img src={post.image} alt={post.title} />
                      </div>

                      <div className="blogs-list-content">
                        <span>{post.category}</span>

                        <h4>{post.title}</h4>

                        <div>
                          {post.readTime} · {post.date}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ================= LATEST BLOGS ================= */}
      <section className="blogs-latest-section" id="latest-blogs">
        <div className="container">
          <div className="blogs-section-heading">
            <div>
              <span className="blogs-small-label">
                {activeCategory === "All"
                  ? "LATEST FROM THE JOURNAL"
                  : activeCategory.toUpperCase()}
              </span>

              <h2>
                {search
                  ? "Search Results"
                  : activeCategory === "All"
                    ? "Latest Travel Stories"
                    : `${activeCategory} Stories`}
              </h2>
            </div>

            <div className="blogs-result-count">
              {filteredPosts.length}{" "}
              {filteredPosts.length === 1 ? "article" : "articles"}
            </div>
          </div>

          {filteredPosts.length > 0 ? (
            <div className="row g-4">
              {filteredPosts.map((post, index) => (
                <div className="col-md-6 col-xl-4" key={post.id}>
                  <article className="blogs-article-card h-100">
                    <div className="blogs-card-image">
                      <img src={post.image} alt={post.title} />

                      <span className="blogs-image-category">
                        {post.category}
                      </span>

                      <span className="blogs-card-index">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="blogs-card-body">
                      <div className="blogs-card-meta">
                        <span>{post.readTime}</span>
                        <span>•</span>
                        <span>{post.date}</span>
                      </div>

                      <h3>{post.title}</h3>

                      <p>{post.description}</p>

                      <a
                        href="/"
                        className="blogs-read-link"
                        onClick={(e) => e.preventDefault()}
                      >
                        Read Article
                        <span>→</span>
                      </a>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          ) : (
            <div className="blogs-no-results">
              <div className="blogs-no-results-icon">✈</div>

              <h3>No stories found</h3>

              <p>
                Try another keyword or explore a different travel category.
              </p>

              <button
                type="button"
                className="blogs-primary-btn border-0"
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All");
                }}
              >
                Show All Stories
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="blogs-newsletter-section">
        <div className="container">
          <div className="blogs-newsletter">
            <div className="blogs-newsletter-decoration blogs-deco-left">
              ✈
            </div>

            <div className="blogs-newsletter-content">
              <span>YOUR NEXT ADVENTURE STARTS HERE</span>

              <h2>
                Get travel inspiration
                <br />
                straight to your <em>inbox.</em>
              </h2>

              <p>
                Destination ideas, travel tips and new stories — delivered
                without the noise.
              </p>
            </div>

            <form
              className="blogs-newsletter-form"
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email address"
                />

                <button type="submit">
                  Subscribe
                  <span>→</span>
                </button>
              </div>

              <small>No spam. Just travel inspiration.</small>
            </form>

            <div className="blogs-newsletter-decoration blogs-deco-right">
              · · ·
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blogs;