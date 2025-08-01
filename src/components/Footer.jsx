"use client"

import {
  Mail,
  Phone,
  Linkedin,
  MapPin,
  Shield,
  Award,
  Users,
  ArrowUp,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react"
import "./Footer.css"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-content">
            {/* Brand Section */}
            <div className="footer-brand">
              <a href="#" className="logo">
                  <img src="/footerLogo.svg" alt="logo" style={{
                width: "200px",
                height: "auto"
              }}/>
              </a>
              <p className="tagline">Professional web development with guaranteed satisfaction.</p>
              <p className="description">
                We're Florida's premier tech experts, delivering exceptional results with zero upfront costs. Our unique
                approach builds trust through small tasks before scaling to larger projects.
              </p>
              <div className="trust-indicators">
                <div className="trust-item">
                  <Award size={18} />
                  <span>500+ Projects Completed</span>
                </div>
                <div className="trust-item">
                  <Users size={18} />
                  <span>98% Client Satisfaction</span>
                </div>
                <div className="trust-item">
                  <Shield size={18} />
                  <span>100% Satisfaction Guarantee</span>
                </div>
              </div>
            </div>

            {/* Services Section */}
            <div className="footer-section">
              <h4>Services</h4>
              <div className="footer-links">
                <a href="#" className="footer-link">
                  Website Development
                </a>
                <a href="#" className="footer-link">
                  E-commerce Solutions
                </a>
                <a href="#" className="footer-link">
                  Performance Optimization
                </a>
                <a href="#" className="footer-link">
                  Bug Fixes & Debugging
                </a>
                <a href="#" className="footer-link">
                  SEO Optimization
                </a>
                <a href="#" className="footer-link">
                  Maintenance & Support
                </a>
              </div>
            </div>

            {/* Company Section */}
            <div className="footer-section">
              <h4>Company</h4>
              <div className="footer-links">
                <a href="#" className="footer-link">
                  About Us
                </a>
                <a href="#" className="footer-link">
                  How It Works
                </a>
                <a href="#" className="footer-link">
                  Our Process
                </a>
                <a href="#" className="footer-link">
                  Client Testimonials
                </a>
                <a href="#" className="footer-link">
                  Case Studies
                </a>
                <a href="#" className="footer-link">
                  Careers
                </a>
              </div>
            </div>

            {/* Contact & Social Section */}
            <div className="footer-section social-section">
              <h4>Get In Touch</h4>
              <div className="contact-info">
                <a href="mailto:contact@floridatechexperts.com" className="contact-item">
                  <Mail size={18} />
                  <span>contact@floridatechexperts.com</span>
                </a>
                <a href="tel:+1234567890" className="contact-item">
                  <Phone size={18} />
                  <span>(123) 456-7890</span>
                </a>
                <div className="contact-item">
                  <MapPin size={18} />
                  <span>Florida, United States</span>
                </div>
                <a href="https://linkedin.com/company/floridatechexperts" className="contact-item">
                  <Linkedin size={18} />
                  <span>LinkedIn Profile</span>
                </a>
              </div>

              <div className="social-links">
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="social-link" aria-label="Twitter">
                  <Twitter size={20} />
                </a>
                <a href="#" className="social-link" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
                <a href="#" className="social-link" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
              </div>

              <div className="newsletter">
                <p>Stay updated with our latest projects and tech insights.</p>
                <form className="newsletter-form">
                  <input type="email" placeholder="Enter your email" className="newsletter-input" required />
                  <button type="submit" className="newsletter-btn">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="footer-divider"></div>

          <div className="footer-bottom">
            <div className="footer-bottom-left">
              <p>&copy; {new Date().getFullYear()} Florida Tech Experts. All rights reserved.</p>
           
            </div>

            <div className="footer-bottom-right">
              <div className="footer-legal">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Cookie Policy</a>
                <a href="#">Sitemap</a>
              </div>

              <button onClick={scrollToTop} className="back-to-top" aria-label="Back to top">
                <ArrowUp size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
