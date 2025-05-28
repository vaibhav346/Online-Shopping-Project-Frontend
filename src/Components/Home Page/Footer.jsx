import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-section">
          <h4>ABOUT</h4>
          <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Flipkart Stories</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Corporate Information</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>GROUP COMPANIES</h4>
          <ul>
            <li><a href="#">Myntra</a></li>
            <li><a href="#">Cleartrip</a></li>
            <li><a href="#">Shopsy</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>HELP</h4>
          <ul>
            <li><a href="#">Payments</a></li>
            <li><a href="#">Shipping</a></li>
            <li><a href="#">Cancellation & Returns</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>CONSUMER POLICY</h4>
          <ul>
            <li><a href="#">Cancellation & Returns</a></li>
            <li><a href="#">Terms Of Use</a></li>
            <li><a href="#">Security</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Sitemap</a></li>
            <li><a href="#">Grievance Redressal</a></li>
            <li><a href="#">EPR Compliance</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Mail Us:</h4>
          <p>Flipkart Internet Private Limited, Buildings Alyssa, Begonia & Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Village, Bengaluru, 560103, Karnataka, India</p>
          
          <h4>Registered Office Address:</h4>
          <p>Flipkart Internet Private Limited, Buildings Alyssa, Begonia & Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Village, Bengaluru, 560103, Karnataka, India</p>
          <p>CIN: U51109KA2012PTC066107</p>
          <p>Telephone: <a href="tel:044-45614700">044-45614700</a> / <a href="tel:044-67415800">044-67415800</a></p>
         
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-actions">
          <span>🧾 Become a Seller</span>
          <span>📢 Advertise</span>
          <span>🎁 Gift Cards</span>
          <span>❓ Help Center</span>
        </div>
        <div className="footer-copy">
          <p>© 2007-2025 Flipkart.com</p>
          <div className="footer-payments">
            <img src="https://img.icons8.com/color/48/visa.png" alt="Visa" />
            <img src="https://img.icons8.com/color/48/mastercard.png" alt="Mastercard" />
            <img src="https://img.icons8.com/color/48/rupay.png" alt="Rupay" />
            <img src="https://img.icons8.com/color/48/amex.png" alt="Amex" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
