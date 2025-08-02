
import { Link } from "react-router-dom"
import {
  ArrowRight,
  Shield,
  Users,
  Award,
  CheckCircle,
  Star,
  Zap,
  Target,
  Clock,
  DollarSign,
  AlertTriangle,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react"
import "./EnhancedLandingPage.css"
import Header from "../components/Header"
import Footer from "../components/Footer"
import HowItWorks from "../components/HowItWorks"

const EnhancedLandingPage = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="enhanced-landing-page">
      {/* Header */}
     <Header/>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="trust-badge">
                <Shield size={16} />
                <span>Trusted by LinkedIn Professionals</span>
              </div>

              <h1>Professional Web Development</h1>
              <h2 className="hero-subtitle">Only Pay If Satisfied With Results</h2>

              <p className="hero-description">
                Florida's premier tech experts delivering exceptional results with zero upfront costs. We start with a
                small fix to prove our capabilities, then scale to larger projects.
              </p>

              <div className="hero-features">
                <div className="feature">
                  <CheckCircle size={20} />
                  <span>Start with a small, low-risk task</span>
                </div>
                <div className="feature">
                  <CheckCircle size={20} />
                  <span>Pay only when completely satisfied</span>
                </div>
                <div className="feature">
                  <CheckCircle size={20} />
                  <span>Milestone-based larger projects</span>
                </div>
              </div>

              <div className="hero-actions">
                <button onClick={() => scrollToSection("contact")} className="btn btn-primary btn-large">
                  Start Your Project
                  <ArrowRight size={20} />
                </button>
                <button onClick={() => scrollToSection("how-it-works")} className="btn btn-outline">
                  Learn How It Works
                </button>
              </div>

              <div className="social-proof">
                <div className="proof-item">
                  <Star size={16} />
                  <span>500+ Projects Completed</span>
                </div>
                <div className="proof-item">
                  <Users size={16} />
                  <span>98% Client Satisfaction</span>
                </div>
                <div className="proof-item">
                  <DollarSign size={16} />
                  <span>$0 Upfront Cost</span>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="platform-preview">
                <div className="preview-header">
                  <div className="preview-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <span>Client Dashboard</span>
                </div>
                <div className="preview-content">
                  <div className="project-item completed">
                    <div className="project-status">✓ Small Fix Completed</div>
                    <h4>Website Bug Fix</h4>
                    <div className="project-payment">
                      <Award size={16} />
                      <span>$50 - Payment Released</span>
                    </div>
                  </div>
                  <div className="project-item active">
                    <div className="project-status">🚀 Full Project Started</div>
                    <h4>E-commerce Development</h4>
                    <div className="project-payment">
                      <Shield size={16} />
                      <span>$5,000 - Milestone-based</span>
                    </div>
                  </div>
                  <div className="trust-banner">
                    <Shield size={20} />
                    <div>
                      <strong>Trust Built Through Results</strong>
                      <p>Start small, scale with confidence</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
       <HowItWorks/>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <h2>Professional Technical Services</h2>
            <p>Comprehensive solutions for your web development and technical needs</p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <Zap size={40} />
              </div>
              <h3>Quick Fixes & Debugging</h3>
              <p>
                Website bugs, broken functionality, and urgent technical issues resolved quickly and professionally.
              </p>
              <div className="service-price">Starting at $50</div>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <Target size={40} />
              </div>
              <h3>Performance Optimization</h3>
              <p>
                Speed improvements, SEO optimization, and technical enhancements to boost your website's performance.
              </p>
              <div className="service-price">From $200</div>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <Users size={40} />
              </div>
              <h3>Custom Development</h3>
              <p>
                Full-scale web applications, e-commerce platforms, and custom solutions built to your specifications.
              </p>
              <div className="service-price">Milestone-based</div>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <Shield size={40} />
              </div>
              <h3>Maintenance & Support</h3>
              <p>
                Ongoing website maintenance, security updates, and technical support to keep your site running smoothly.
              </p>
              <div className="service-price">Monthly plans</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <div className="container">
          <div className="section-header">
            <h2>Why LinkedIn Professionals Choose Us</h2>
            <p>Built specifically for cautious professionals who value trust and transparency</p>
          </div>

          <div className="benefits-grid">
            <div className="benefit-card">
              <Shield size={48} />
              <h3>Zero Risk Start</h3>
              <p>Begin with a small task to evaluate our work quality before committing to larger projects.</p>
            </div>

            <div className="benefit-card">
              <Linkedin size={48} />
              <h3>LinkedIn Professional Network</h3>
              <p>Trusted by professionals who understand the importance of credible, reliable technical partners.</p>
            </div>

            <div className="benefit-card">
              <Award size={48} />
              <h3>Satisfaction Guaranteed</h3>
              <p>Our "pay only if satisfied" model ensures you get exactly what you need, when you need it.</p>
            </div>

            <div className="benefit-card">
              <Users size={48} />
              <h3>Transparent Communication</h3>
              <p>Regular updates, clear timelines, and honest communication throughout every project phase.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Screening Policy */}
      <section id="screening" className="screening-policy">
        <div className="container">
          <div className="policy-content">
            <div className="policy-icon">
              <AlertTriangle size={48} />
            </div>
            <div className="policy-text">
              <h2>Our Client Screening Policy</h2>
              <p>
                We maintain high standards by working only with serious, professional clients. Any attempts at fee
                negotiation, payment dodging, or unprofessional behavior will result in immediate project termination.
                This policy ensures we can focus on delivering exceptional results for committed clients who value
                quality work and fair compensation.
              </p>
              <div className="policy-points">
                <div className="policy-point">
                  <CheckCircle size={20} />
                  <span>Professional communication required</span>
                </div>
                <div className="policy-point">
                  <CheckCircle size={20} />
                  <span>Fair pricing - no negotiations</span>
                </div>
                <div className="policy-point">
                  <CheckCircle size={20} />
                  <span>Serious commitment to project success</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2>Ready to Get Started?</h2>
              <p>
                Let's discuss your project and see how we can help. We'll start with a small task to demonstrate our
                capabilities, then scale to your full project needs.
              </p>

              <div className="contact-benefits">
                <h3>What happens next?</h3>
                <ul>
                  <li>✓ Free initial consultation</li>
                  <li>✓ Small task to prove our capabilities</li>
                  <li>✓ Detailed project proposal if satisfied</li>
                  <li>✓ Milestone-based development plan</li>
                </ul>
              </div>

              <div className="contact-methods">
                <a href="mailto:contact@floridatechexperts.com" className="contact-method">
                  <Mail size={20} />
                  <span>contact@floridatechexperts.com</span>
                </a>
                <a href="tel:+1234567890" className="contact-method">
                  <Phone size={20} />
                  <span>(123) 456-7890</span>
                </a>
                <a href="https://linkedin.com/company/floridatechexperts" className="contact-method">
                  <Linkedin size={20} />
                  <span>Connect on LinkedIn</span>
                </a>
              </div>
            </div>

            <div className="contact-form-container">
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input type="text" id="name" name="name" required />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input type="email" id="email" name="email" required />
                </div>

                <div className="form-group">
                  <label htmlFor="linkedin">LinkedIn Profile</label>
                  <input type="url" id="linkedin" name="linkedin" placeholder="https://linkedin.com/in/yourprofile" />
                </div>

                <div className="form-group">
                  <label htmlFor="project">Project Description *</label>
                  <textarea
                    id="project"
                    name="project"
                    rows="5"
                    placeholder="Describe your project needs and any immediate issues..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-button">
                  <ArrowRight size={20} />
                  Send Project Details
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
     

      {/* Footer */}
     <Footer/>
    </div>
  )
}

export default EnhancedLandingPage
