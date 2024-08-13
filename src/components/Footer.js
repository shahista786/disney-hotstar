// src/components/Footer.js

import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column">
          <h3>Company</h3>
          <a href="/">About Us</a>
          <a href="/">Careers</a>
        </div>
        <div className="footer-column">
          <h3>View Website in</h3>
          <a href="/">English</a>
          <a href="/">Hindi</a>
        </div>
        <div className="footer-column">
          <h3>Need Help?</h3>
          <a href="/">Visit Help Center</a>
          <a href="/">Share Feedback</a>
        </div>
        <div className="footer-column">
          <h3>Contact Us</h3>
          <a href="/"><img src="facebook-icon.png" alt="Facebook" /></a>
          <a href="/"><img src="twitter-icon.png" alt="Twitter" /></a>
          <a href="/"><img src="instagram-icon.png" alt="Instagram" /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>@2024 STAR. All rights reserved</p>
        <div className="footer-links">
          <a href="/">Terms of Use</a>
          <a href="/">Privacy Policy</a>
          <a href="/">FAQ</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
