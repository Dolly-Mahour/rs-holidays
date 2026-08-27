'use client'

import React from "react";
import "../styles/footer.css";


const internationalTrips = [
  "Europe", "Bali", "Vietnam", "Thailand", "Kazakhstan",
  "Singapore", "Bhutan", "Maldives", "Dubai", "Malaysia"
];

const indiaTrips = [
  "Ladakh", "Spiti Valley", "Zanskar", "Meghalaya", "Kashmir",
  "Himachal Pradesh", "Andaman", "Kerala", "Rajasthan", "Nagaland"
];

const specialTrips = [
  "Community Trips", "Honeymoon Trips", "Corporate Trips", "Weekend Getaways"
];

const quickLinks = [
  "About Us", "Privacy Policy", "Terms & Conditions",
  "Customer Success & Support", "Pillar Sitemap", "Blog Sitemap",
  "Trip Sitemap", "Disclaimer", "Careers", "Blogs", "Investor Relations"
];

const Footer = () => {
  return (
    <footer className="footer-wrapper position-relative mt-auto text-white">
      <div className="container-lg pt-5 pb-4">
        {/* Top Navigation Links */}
        <div className="row text-start mb-4 g-4">
          {/* International Trips */}
          <div className="col-6 col-md-3">
            <h5 className="fs-6 fw-bold mb-3 text-white text-uppercase tracking-wider">
              International Trips
            </h5>
            <ul className="list-unstyled mb-0 d-flex flex-column gap-2">
              {internationalTrips.map((trip) => (
                <li key={trip}>
                  <a href="#" className="footer-link text-decoration-none">
                    {trip}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* India Trips */}
          <div className="col-6 col-md-3">
            <h5 className="fs-6 fw-bold mb-3 text-white text-uppercase tracking-wider">
              India Trips
            </h5>
            <ul className="list-unstyled mb-0 d-flex flex-column gap-2">
              {indiaTrips.map((trip) => (
                <li key={trip}>
                  <a href="#" className="footer-link text-decoration-none">
                    {trip}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* RS Holidays Special */}
          <div className="col-6 col-md-3">
            <h5 className="fs-6 fw-bold mb-3 text-white text-uppercase tracking-wider">
              RS Holidays Special
            </h5>
            <ul className="list-unstyled mb-0 d-flex flex-column gap-2">
              {specialTrips.map((trip) => (
                <li key={trip}>
                  <a href="#" className="footer-link text-decoration-none">
                    {trip}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-6 col-md-3">
            <h5 className="fs-6 fw-bold mb-3 text-white text-uppercase tracking-wider">
              Quick Links
            </h5>
            <ul className="list-unstyled mb-0 d-flex flex-column gap-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="footer-link text-decoration-none">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-secondary opacity-25 my-4" />

        {/* Company Info Section */}
        <div className="text-center mb-4">
          <h5 className="fs-6 fw-semibold mb-2 text-white letter-spacing">
            RS HOLIDAYS EXPERIENCES PVT LTD
          </h5>
          <p className="text-light-gray fs-7 mb-1">CIN-U63040HR2019PTC118957</p>
          <p className="text-light-gray fs-7 mb-4 px-3">
            3rd Floor, Building No-436, Phase IV, Udyog Vihar, Sector-18, Gurugram, Haryana-122015
          </p>

          {/* Contact Details */}
          <div className="d-flex justify-content-center flex-wrap gap-3 gap-md-4 mb-4">
            <a
              href="mailto:hello@RSHOLIDAYS.in"
              className="footer-contact-link d-inline-flex align-items-center gap-2 text-decoration-none fs-7"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              hello@RSHOLIDAYS.in
            </a>
            <a
              href="tel:000000"
              className="footer-contact-link d-inline-flex align-items-center gap-2 text-decoration-none fs-7"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              000000
            </a>
            <a
              href="https://www.RSHOLIDAYS.in"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-contact-link d-inline-flex align-items-center gap-2 text-decoration-none fs-7"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              www.RSHOLIDAYS.in
            </a>
          </div>

          {/* Social Media Links */}
          <div className="d-flex justify-content-center mb-3">
            <div className="d-inline-flex align-items-center gap-3 gap-md-4 py-2 px-4 rounded-pill footer-social-pill">
              <a href="#" aria-label="Facebook" className="social-icon d-flex align-items-center justify-content-center text-decoration-none">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="social-icon d-flex align-items-center justify-content-center text-decoration-none">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="social-icon d-flex align-items-center justify-content-center text-decoration-none">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" aria-label="YouTube" className="social-icon d-flex align-items-center justify-content-center text-decoration-none">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <hr className="border-secondary opacity-25 my-4" />

        {/* Copyright */}
        <div className="text-center">
          <p className="text-light-gray fs-8 mb-0">
            &copy; {new Date().getFullYear()} RS HOLIDAYS EXPERIENCES PVT LTD, All rights reserved.
          </p>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fab-container">
        <button
          className="fab-up border-0 text-white rounded-circle d-flex align-items-center justify-content-center shadow"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </button>
        <button
          className="fab-whatsapp border-0 text-white rounded-circle d-flex align-items-center justify-content-center shadow"
          aria-label="Contact on WhatsApp"
        >
          <svg width="26" height="26" viewBox="0 0 16 16" fill="currentColor">
            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
