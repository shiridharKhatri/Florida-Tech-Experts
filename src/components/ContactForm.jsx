
import { useState } from "react"
import { Send } from "lucide-react"
import "./ContactForm.css"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    linkedin: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission logic would go here
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({ name: "", email: "", linkedin: "", message: "" })
  }

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <h2>Ready to Get Started?</h2>
            <p>
              Let's discuss your project and see how we can help. Fill out the form and we'll get back to you within 24
              hours with a personalized proposal.
            </p>

            <div className="contact-benefits">
              <h3>What happens next?</h3>
              <ul>
                <li>✓ Free initial consultation</li>
                <li>✓ Detailed project proposal</li>
                <li>✓ No upfront payment required</li>
                <li>✓ Clear timeline and deliverables</li>
              </ul>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label htmlFor="linkedin">LinkedIn Profile</label>
              <input
                type="url"
                id="linkedin"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleChange}
                placeholder="https://linkedin.com/in/yourprofile"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Project Description *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Tell us about your project, timeline, and specific requirements..."
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              <Send size={20} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
