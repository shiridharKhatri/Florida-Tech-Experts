
import { ArrowRight, Shield, Users, Award } from "lucide-react"
import "./Hero.css"

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="gradient-overlay"></div>
      </div>

      <div className="container">
        <div className="hero-wrapper">
          <div className="hero-main">
            <div className="hero-content">
              <h1 className="hero-headline">
                Professional Web Development
                <span className="highlight"> You Can Trust</span>
              </h1>

              <p className="hero-lead">
                Florida's premier tech experts delivering exceptional results with zero upfront costs. Pay only when
                you're completely satisfied.
              </p>

              <div className="hero-cta">
                <button className="btn-primary" onClick={scrollToContact}>
                  Start Your Project
                  <ArrowRight size={20} />
                </button>
                <p className="guarantee-text">
                  <Shield size={16} />
                  100% Satisfaction Guaranteed
                </p>
              </div>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">98%</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">0$</div>
                <div className="stat-label">Upfront Cost</div>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="dashboard-mockup">
              <div className="mockup-header">
                <div className="mockup-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="mockup-title">Florida Tech Experts Dashboard</div>
              </div>

              <div className="mockup-content">
                <div className="project-card active">
                  <div className="project-status">
                    <div className="status-dot completed"></div>
                    <span>Project Completed</span>
                  </div>
                  <h4>E-commerce Website</h4>
                  <p>Client satisfaction: 100%</p>
                  <div className="project-payment">
                    <Award size={16} />
                    <span>Payment Released</span>
                  </div>
                </div>

                <div className="project-card">
                  <div className="project-status">
                    <div className="status-dot in-progress"></div>
                    <span>In Progress</span>
                  </div>
                  <h4>Landing Page Optimization</h4>
                  <p>Expected completion: 2 days</p>
                  <div className="project-payment pending">
                    <Users size={16} />
                    <span>Awaiting Approval</span>
                  </div>
                </div>

                <div className="trust-banner">
                  <Shield size={20} />
                  <div>
                    <strong>Risk-Free Guarantee</strong>
                    <p>Pay only when satisfied with results</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
