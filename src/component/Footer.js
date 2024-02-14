// Footer.js

import React from 'react';
import './css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-links">
          <div className="footer-section">
            <h3>Company</h3>
            <ul>
              <li>Innovations</li>
              <li>Business Services</li>
              <li>Financial Services</li>
              <li>Lejhro Recruiter</li>
              <li>About</li>
              <li>Blogs</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Programs</h3>
            <ul>
              <li>Lejhro Bootcamp</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Support</h3>
            <ul>
              <li>Contact</li>
              <li>Terms of Use</li>
              <li>Privacy Statement</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Connect with us</h3>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>

        <div className="footer-copyright">
          <p>&copy; 2024 Your Company</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
