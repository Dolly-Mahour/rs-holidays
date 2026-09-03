"use client";
import React, { useState, useRef, useEffect } from "react";
import "../styles/navbar.css";
import Link from "next/link";
import type { Modal } from "bootstrap";

const internationalTrips = [
  "Europe",
  "Bali",
  "Vietnam",
  "Thailand",
  "Kazakhstan",
  "Singapore",
  "Bhutan",
  "Maldives",
  "Dubai",
  "Malaysia",
];

const indiaTrips = [
  "Kheerganga Trek",
  "Jispa Getaway",
  "Manali-Leh-Srinagar",
  "Sissu-Kasol Trip",
  "Himachal Explorer",
  "Zanskar Expedition",
  "Triund Trek",
  "Triund-Bir Adventure",
  "Ladakh & Turtuk",
  "Winter Spiti",
  "Sainj Valley",
  "Jibhi Escape",
  "Bir Paragliding",
  "Yulla Kanda Trek",
  "Valley of Flowers",
  "Mukteshwar Retreat",
  "Chopta-Deoriatal Trek",
  "Chakrata Getaway",
  "Auli-Joshimath Trip",
  "Kashmir Paradise",
  "Rajasthan Backpacking",
  "Udaipur-Abu Trip",
  "Udaipur-Kumbhalgarh",
  "Jaisalmer-Longewala",
  "Kerala Backpacking",
  "Ooty-Coorg Escape",
  "Meghalaya Backpacking",
];

const groupTours = [
  "Community Trips",
  "Honeymoon Trips",
  "Corporate Trips",
  "Weekend Getaways",
  "Backpacking Trips",
];

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [isRegisterForm, setIsRegisterForm] = useState(false);

  // Refs for controlling the Bootstrap modal imperatively (no data-bs-toggle needed)
  const modalRef = useRef<HTMLDivElement | null>(null);
  const bsModalInstance = useRef<Modal | null>(null);

  useEffect(() => {
    // Bootstrap's JS touches `document`/`window`, so it can only run in the browser.
    // Dynamic import + useEffect guarantees this never executes during SSR.
    let isMounted = true;

    import("bootstrap/dist/js/bootstrap.bundle.min.js").then((bootstrap) => {
      if (isMounted && modalRef.current) {
        bsModalInstance.current = new bootstrap.Modal(modalRef.current);
      }
    });

    return () => {
      isMounted = false;
      bsModalInstance.current?.dispose();
    };
  }, []);

  const openModal = () => {
    bsModalInstance.current?.show();
  };

  const closeModal = () => {
    bsModalInstance.current?.hide();
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  function setLoginOrRegister() {
    if (isLoginForm) {
      setIsLoginForm(false);
      setIsRegisterForm(true);
    } else {
      setIsLoginForm(true);
      setIsRegisterForm(false);
    }
  }

  return (
    <div className="w-100 font-sans position-relative  ">
      {/* Top Bar Wrapper */}
      <div className="bg-white border-bottom py-3 px-3 px-md-5">
        {/* DESKTOP LAYOUT (Hidden on small screens < 992px) */}
        <div className="d-none d-lg-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <Link href="/" className="text-decoration-none">
              <img
                src="/images/RS-logo.png"
                alt="RS Holidays Logo"
                className="logo-icon me-2"
              />
            </Link>
          </div>

          <div
            className="position-relative w-100"
            style={{ maxWidth: "350px" }}
          >
            <input
              type="text"
              className="form-control rounded-pill pe-5 ps-3 border border-black shadow-none"
              placeholder="Where do you want to go?"
            />
            <svg
              className="position-absolute"
              style={{
                right: "15px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "18px",
                height: "18px",
              }}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>

          <div className="d-flex flex-grow-1 align-items-center justify-content-between mx-5 px-3">
            <Link
              href="/packages"
              className="text-decoration-none text-danger fw-bold nav-link-hover nav-top-text"
            >
              Packages 🎒
            </Link>
            <Link
              href="/upcoming-trips"
              className="text-decoration-none text-dark fw-medium nav-link-hover nav-top-text"
            >
              Upcoming Trips
            </Link>
            <Link
              href="/corporate-tours"
              className="text-decoration-none text-dark fw-medium nav-link-hover nav-top-text"
            >
              Corporate Tours
            </Link>
            <Link
              href="/blogs"
              className="text-decoration-none text-dark fw-medium nav-link-hover nav-top-text"
            >
              Blogs
            </Link>
            <Link
              href="/about-us"
              className="text-decoration-none text-dark fw-medium nav-link-hover nav-top-text"
            >
              About Us
            </Link>
          </div>

          <div className="d-flex align-items-center">
            <button
              type="button"
              onClick={openModal}
              className="btn nav-cta-btn rounded-pill d-flex align-items-center gap-2 fw-semibold btn-sm px-3 text-nowrap text-white"
            >
              Get Started
            </button>
          </div>
        </div>

        {/* MOBILE LAYOUT (Hidden on large screens >= 992px) */}
        <div className="d-flex d-lg-none flex-column gap-3">
          {/* Row 1: Logo & Contact */}
          <div className="d-flex align-items-center justify-content-between">
            <Link href="/" className="text-decoration-none">
              <div className="logo-icon text-info fw-bolder nav-logo-text">
                <img
                  src="/images/RS-logo.png"
                  alt="RS Holidays Logo"
                  className="logo-icon me-2"
                />
              </div>
            </Link>
            <div className="d-flex align-items-center">
              <button
                type="button"
                onClick={openModal}
                className="btn nav-cta-btn rounded-pill d-flex align-items-center gap-2 fw-semibold btn-sm px-3 text-nowrap text-white"
              >
                Get Started
              </button>
            </div>
          </div>

          {/* Row 2: Search & Toggle */}
          <div className="d-flex align-items-center gap-2">
            <div className="position-relative flex-grow-1">
              <input
                type="text"
                className="form-control rounded-pill pe-5 ps-3 border shadow-none"
                placeholder="Where to?"
              />
              <svg
                className="position-absolute "
                style={{
                  right: "15px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "16px",
                  height: "16px",
                }}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
            <button
              className="btn nav-hamburger text-white rounded d-flex align-items-center justify-content-center p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{ minWidth: "40px" }}
              aria-label="Toggle navigation menu"
            >
              <svg
                style={{ width: "20px", height: "20px" }}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Mobile Collapse Menu for Top Links */}
          {mobileMenuOpen && (
            <div className="d-flex flex-column gap-2  py-2 border-top">
              <Link
                href="/packages"
                onClick={closeMobileMenu}
                className="text-decoration-none text-danger fw-bold nav-link-hover py-1 nav-top-text"
              >
                Packages 🎒
              </Link>
              <Link
                href="/upcoming-trips"
                onClick={closeMobileMenu}
                className="text-decoration-none text-dark fw-medium nav-link-hover py-1 nav-top-text"
              >
                Upcoming Trips 📅
              </Link>
              <Link
                href="/corporate-tours"
                onClick={closeMobileMenu}
                className="text-decoration-none text-dark fw-medium nav-link-hover py-1 nav-top-text"
              >
                Corporate Tours
              </Link>
              <Link
                href="/blogs"
                onClick={closeMobileMenu}
                className="text-decoration-none text-dark fw-medium nav-link-hover py-1 nav-top-text"
              >
                Blogs
              </Link>
              <Link
                href="/about-us"
                onClick={closeMobileMenu}
                className="text-decoration-none text-dark fw-medium nav-link-hover py-1 nav-top-text"
              >
                About Us
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="nav-bottom-bar py-3 px-3 px-md-5 text-white position-relative h-auto custom-scrollbar">
        <ul
          className="  list-unstyled
      d-flex
      flex-wrap
      flex-lg-nowrap
      justify-content-center
      align-items-center
      gap-3
      gap-md-4
      mb-0
      w-100"
        >
          {/* International Trips */}
          <li className="text-white fw-semibold" style={{ cursor: "pointer" }}>
            <div className="dropdown nav-bottom-text">
              <button
                className="bg-transparent text-white fs-bold border-0 dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                International Trips
              </button>
              <ul className="dropdown-menu bg-white ">
                {internationalTrips.map((trip, index) => (
                  <li
                    key={index}
                    className="px-3 py-2 text-dark small dropdown-item-hover rounded"
                  >
                    <Link
                      href={`/places/${trip}`}
                      className="text-decoration-none text-dark d-block"
                    >
                      {trip}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>

          {/* India Trips */}
          <li
            className=" text-white fw-semibold z-2000"
            style={{ cursor: "pointer" }}
          >
            <div className="dropdown nav-bottom-text">
              <button
                className="bg-transparent text-white fs-bold border-0 dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                India Trips
              </button>
              <ul className="dropdown-menu bg-white shadow" style={{ maxHeight: "360px", overflowY: "auto" }}>
                {indiaTrips.map((trip, index) => (
                  <li
                    key={index}
                    className="px-3 py-2 text-dark small dropdown-item-hover rounded"
                  >
                    <Link
                      href={`/packages/${encodeURIComponent(trip.toLowerCase().replace(/\s+/g, '-'))}`}
                      className="text-decoration-none text-dark d-block"
                    >
                      {trip}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>

          {/* Group Tours */}
          <li
            className=" text-white fw-semibold z-2000"
            style={{ cursor: "pointer" }}
          >
            <div className="dropdown nav-bottom-text">
              <button
                className="bg-transparent text-white fs-bold border-0 dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Group Tours
              </button>
              <ul className="dropdown-menu bg-white ">
                {groupTours.map((trip, index) => (
                  <li
                    key={index}
                    className="px-3 py-2 text-dark small dropdown-item-hover rounded"
                  >
                    <Link
                      href={`/places/${trip}`}
                      className="text-decoration-none text-dark d-block"
                    >
                      {trip}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>

          {/* Regular Links */}
          <li className="text-white fw-semibold" style={{ cursor: "pointer" }}>
            <Link
              href="/events-festivals"
              className="text-white text-decoration-none nav-bottom-text"
            >
              Events & Festivals
            </Link>
          </li>
          <li className="text-white fw-semibold" style={{ cursor: "pointer" }}>
            <Link
              href="/weekend-getaways"
              className="text-white text-decoration-none nav-bottom-text"
            >
              Weekend Getaways
            </Link>
          </li>
        </ul>
      </div>

      {/* LOGIN REGISTER MODAL------------------------------------- */}
      <div
        className="modal fade"
        id="exampleModal"
        ref={modalRef}
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content p-4 rounded-5">
            <div className="d-flex justify-content-around">
              <h1 className="gradient-rs-text fw-bold mb-5">RS Holidays</h1>
            </div>
            <div className="d-flex justify-content-around mb-3">
              <h3
                onClick={() => setLoginOrRegister()}
                style={{
                  backgroundImage: isLoginForm
                    ? "linear-gradient(90deg, #E30613, #2E3192)"
                    : "none",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "left bottom",
                  backgroundSize: isLoginForm ? "100% 2px" : "0 2px",
                  paddingBottom: "4px",
                }}
              >
                Login
              </h3>
              <h3
                onClick={() => setLoginOrRegister()}
                style={{
                  backgroundImage: isRegisterForm
                    ? "linear-gradient(90deg, #E30613, #2E3192)"
                    : "none",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "left bottom",
                  backgroundSize: isRegisterForm ? "100% 2px" : "0 2px",
                  paddingBottom: "4px",
                }}
              >
                Register
              </h3>
            </div>
            <form action="post">
              {isRegisterForm && (
                <>
                  <label className="form-label" htmlFor="">
                    Name
                  </label>
                  <input
                    className="mb-3 form-control"
                    placeholder="name"
                    type="text"
                  />
                  <label className="form-label" htmlFor="">
                    Email
                  </label>
                  <input
                    className="mb-3 form-control"
                    placeholder="email"
                    type="text"
                  />
                  <label className="form-label" htmlFor="">
                    Password
                  </label>
                  <input
                    className="mb-3 form-control"
                    placeholder="password"
                    type="password"
                  />
                  <button
                    type="submit"
                    className="btn bg-rs-gradient text-white mb-3 w-100"
                  >
                    Register
                  </button>
                </>
              )}
              {isLoginForm && (
                <>
                  <label className="form-label" htmlFor="">
                    Email
                  </label>
                  <input
                    className="mb-3 form-control"
                    placeholder="email"
                    type="text"
                  />
                  <label className="form-label" htmlFor="">
                    Password
                  </label>
                  <input
                    className="mb-3 form-control"
                    placeholder="password"
                    type="password"
                  />
                  <button
                    type="submit"
                    className="btn bg-rs-gradient text-white mb-3 w-100"
                  >
                    Login
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
