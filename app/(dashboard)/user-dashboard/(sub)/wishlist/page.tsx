"use client";

import "@/src/styles/user-dashboard.css";
import "@/src/styles/user-dashboard-subpages.css";

const wishlistItems = [
  {
    id: 1,
    name: "Ladakh & Turtuk",
    location: "Leh Ladakh, India",
    duration: "7 Days / 6 Nights",
    price: "₹ 24,999",
    originalPrice: "₹ 32,000",
    discount: "22% OFF",
    category: "Adventure",
    rating: 4.8,
    reviews: 128,
    img: "https://i.pinimg.com/736x/93/10/a7/9310a7f9aa8fb0014ec5eda6a84e5092.jpg",
    tags: ["Trekking", "Mountains", "Photography"],
  },
  {
    id: 2,
    name: "Kerala Escape",
    location: "Alleppey, Kerala",
    duration: "5 Days / 4 Nights",
    price: "₹ 18,999",
    originalPrice: "₹ 24,000",
    discount: "21% OFF",
    category: "Nature",
    rating: 4.7,
    reviews: 94,
    img: "https://i.pinimg.com/1200x/a9/c0/c4/a9c0c475a413fa7297d077329c90e0ae.jpg",
    tags: ["Backwaters", "Houseboat", "Ayurveda"],
  },
  {
    id: 3,
    name: "Dubai Special",
    location: "Dubai, UAE",
    duration: "5 Days / 4 Nights",
    price: "₹ 39,999",
    originalPrice: "₹ 52,000",
    discount: "23% OFF",
    category: "Luxury",
    rating: 4.9,
    reviews: 213,
    img: "https://i.pinimg.com/736x/bb/70/dd/bb70dd9e6ce18a7123c6b79b088d2552.jpg",
    tags: ["Desert Safari", "Shopping", "Skyline"],
  },
  {
    id: 4,
    name: "Rajasthan Royale",
    location: "Jaipur & Udaipur",
    duration: "6 Days / 5 Nights",
    price: "₹ 22,499",
    originalPrice: "₹ 29,000",
    discount: "22% OFF",
    category: "Heritage",
    rating: 4.6,
    reviews: 175,
    img: "https://i.pinimg.com/736x/c2/bf/ee/c2bfee34a3f78e946498c36fc8e31ca6.jpg",
    tags: ["Palaces", "Culture", "Cuisine"],
  },
  {
    id: 5,
    name: "Andaman Bliss",
    location: "Port Blair, Andaman",
    duration: "6 Days / 5 Nights",
    price: "₹ 28,999",
    originalPrice: "₹ 38,000",
    discount: "24% OFF",
    category: "Beach",
    rating: 4.8,
    reviews: 156,
    img: "https://i.pinimg.com/736x/f0/6e/22/f06e22a12f44e92e574ef77e3ef0c3f3.jpg",
    tags: ["Snorkeling", "Island Hopping", "Beach"],
  },
  {
    id: 6,
    name: "Bali Honeymoon",
    location: "Bali, Indonesia",
    duration: "7 Days / 6 Nights",
    price: "₹ 45,999",
    originalPrice: "₹ 60,000",
    discount: "23% OFF",
    category: "Romantic",
    rating: 4.9,
    reviews: 302,
    img: "https://i.pinimg.com/736x/01/7c/b4/017cb4b9f99becc4d6bf2f1e12571eed.jpg",
    tags: ["Couples", "Spa", "Temples"],
  },
];

const categoryColors: Record<string, { bg: string; color: string }> = {
  Adventure: { bg: "#fff0d7", color: "#dc8900" },
  Nature: { bg: "#daf8e7", color: "#13965a" },
  Luxury: { bg: "#faf7ff", color: "#6830d9" },
  Heritage: { bg: "#fff6f7", color: "#e30613" },
  Beach: { bg: "#e8f4ff", color: "#1a6cc8" },
  Romantic: { bg: "#ffe8f2", color: "#c02060" },
};

export default function WishlistPage() {
  return (
    <>
      <section className="dashboard-heading">
        <div>
          <h1>My Wishlist</h1>
          <p>Your dream destinations, saved and ready to book.</p>
        </div>
        <button className="explore-button">Explore More Packages</button>
      </section>

      {/* Stats Row */}
      <div className="wishlist-stats">
        <div className="wishlist-stat">
          <span className="wl-num">6</span>
          <span className="wl-label">Saved Packages</span>
        </div>
        <div className="wishlist-stat-divider" />
        <div className="wishlist-stat">
          <span className="wl-num" style={{ color: "#e30613" }}>₹1.8L</span>
          <span className="wl-label">Total Value</span>
        </div>
        <div className="wishlist-stat-divider" />
        <div className="wishlist-stat">
          <span className="wl-num" style={{ color: "#0aa35a" }}>₹1.4L</span>
          <span className="wl-label">After Discounts</span>
        </div>
        <div className="wishlist-stat-divider" />
        <div className="wishlist-stat">
          <span className="wl-num" style={{ color: "#6830d9" }}>22%</span>
          <span className="wl-label">Avg. Discount</span>
        </div>
      </div>

      {/* Grid */}
      <div className="wishlist-grid">
        {wishlistItems.map((item) => {
          const cat = categoryColors[item.category] || { bg: "#f5f7fb", color: "#344054" };
          return (
            <div key={item.id} className="wishlist-card">
              <div className="wishlist-img">
                <img src={item.img} alt={item.name} />
                <div className="wishlist-discount-badge">{item.discount}</div>
                <button className="wishlist-heart-btn" title="Remove from wishlist" aria-label="Remove from wishlist">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#e30613" stroke="#e30613" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </button>
                <span className="wishlist-category-badge" style={{ background: cat.bg, color: cat.color }}>
                  {item.category}
                </span>
              </div>
              <div className="wishlist-body">
                <h4 className="wishlist-title">{item.name}</h4>
                <p className="wishlist-location">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 4 }}>
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                  </svg>
                  {item.location}
                </p>
                <div className="wishlist-meta-row">
                  <span className="wishlist-duration">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 4 }}>
                      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                    </svg>
                    {item.duration}
                  </span>
                  <span className="wishlist-rating">
                    ⭐ {item.rating} <span className="rating-count">({item.reviews})</span>
                  </span>
                </div>
                <div className="wishlist-tags">
                  {item.tags.map((t) => (
                    <span key={t} className="wishlist-tag">{t}</span>
                  ))}
                </div>
                <div className="wishlist-price-row">
                  <div>
                    <span className="wl-price">{item.price}</span>
                    <span className="wl-original">{item.originalPrice}</span>
                  </div>
                  <button className="btn-book-now">Book Now</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
