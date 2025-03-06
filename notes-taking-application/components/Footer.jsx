import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} NOTESTAKING. All rights reserved.
        </p>
        <nav className="footer-nav" aria-label="Footer Navigation">
          <ul className="footer-links">
            <li><a href="/">About Us</a></li>
            <li><a href="/">Contact</a></li>
            <li><a href="/">Privacy Policy</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export { Footer };
