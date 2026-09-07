import react from "react";
import "../styles/banner.css";
function Banner() {
  return (
    <div>
     
      {/* Upcoming trips------------ */}
      <div className="p-lg-5 p-3">
        <img
          className="w-100 rounded-4"
          src="/images/upcoming-trips.png"
          alt="Upcoming Trips and Curated Holiday Adventures - RS Holidays"
        />
      </div>
      <div className="row g-0 p-lg-5 p-3  mx-lg-5">
        <div className="row g-0 py-4 align-items-center">
          <div className="col-12 col-lg-6  p-3">
            <div className="glass-card">
              <img
                className="h-100 w-100"
                src="/images/banner1.png"
                alt="Scenic Himalayan mountain adventure with RS Holidays"
              />
            </div>
          </div>
          <div className="col-12 col-lg-6  p-3">
            <h2 className="fw-bold">Unforgettable Mountain Adventures</h2>
            <p>
              Discover untouched valleys, pristine trails, and serene alpine
              landscapes. Our handcrafted trekking and backpacking tours are
              designed for thrill-seekers and peaceful nature lovers alike.
            </p>
          </div>
        </div>
        <div className="row g-0 py-4 align-items-center">
          <div className="col-12 col-lg-6  p-3">
            <h2 className="fw-bold">Curated Group & Solo Expeditions</h2>
            <p>
              Travel with confidence alongside experienced trip leaders. Enjoy
              seamless transportation, handpicked stays, and local culture with
              like-minded fellow explorers.
            </p>
          </div>
          <div className="col-12 col-lg-6  p-3 d-flex justify-content-end align-items-center">
            <div className="glass-card">
              <img
                className="h-100 w-100"
                src="/images/banner2.png"
                alt="Group travellers on a guided trekking expedition"
              />
            </div>
          </div>
        </div>
        <div className="row g-0 py-4 align-items-center">
          <div className="col-12 col-lg-6  p-3">
            <div className="glass-card">
              <img
                className="h-100 w-100"
                src="/images/banner3.png"
                alt="Serene nature retreat and scenic valley stay"
              />
            </div>
          </div>
          <div className="col-12 col-lg-6  p-3">
            <h2 className="fw-bold">Transparent Pricing & Expert Support</h2>
            <p>
              No hidden costs, flexible multi-currency payments, and 24/7
              assistance. Your dream vacation in the mountains or by the beach
              begins with peace of mind.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Banner;
