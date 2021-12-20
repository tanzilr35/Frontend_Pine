import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <div class="social-icons">
        <Link class="social-icon-link facebook" to="/" target="" aria-label="Facebook">
          <i class="fab fa-facebook-f" />
        </Link>
        <Link class="social-icon-link instagram" to="/" target="" aria-label="Instagram">
          <i class="fab fa-instagram" />
        </Link>
        <Link class="social-icon-link youtube" to="/" target="" aria-label="Youtube">
          <i class="fab fa-youtube" />
        </Link>
        <Link class="social-icon-link twitter" to="/" target="" aria-label="Twitter">
          <i class="fab fa-twitter" />
        </Link>
        <Link class="social-icon-link twitter" to="/" target="" aria-label="LinkedIn">
          <i class="fab fa-linkedin" />
        </Link>
      </div>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About Us</h2>
            <Link to="/About">Pine-Explore</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Guides</Link>
            <Link to="/">Terms of Service</Link>
          </div>
          <div class="footer-link-items">
            <h2>Travel Industry</h2>
            <Link to="/">Submit Lodging Listing</Link>
            <Link to="/">Travel Pine Press Room</Link>
            <Link to="/">Recognition Proframs</Link>
            <Link to="/">Sponsorships</Link>
          </div>
          <div class="footer-link-items">
            <h2>Explore</h2>
            <Link to="/">Ask Pine</Link>
            <Link to="/">Welcome Centers</Link>
            <Link to="/">Weather</Link>
            <Link to="/">Travel Alerts</Link>
          </div>
          <div class="footer-link-items">
            <h2>Partner</h2>
            <Link to="/">
              <i class="fas fa-feather" /> Wonderful Indonesia
            </Link>
            <Link to="/">
              <i class="fab fa-earlybirds"></i> Tripadvisor
            </Link>
          </div>
        </div>
      </div>
      <section class="logocp">
        <div class="logocp-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              PINE
              <i class="fab fa-typo3" />
            </Link>
          </div>
          <small class="website-rights">&copy;{new Date().getFullYear()} | Pine Explore by Cew Squad | All Rights Reserved</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
