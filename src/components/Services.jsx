import { Wrench, Rocket, Layout, Search } from "lucide-react"
import "./Services.css"

const Services = () => {
  const services = [
    {
      icon: <Wrench size={40} />,
      title: "Website Fixes",
      description: "Bug fixes, functionality improvements, and technical troubleshooting for existing websites.",
    },
    {
      icon: <Rocket size={40} />,
      title: "Speed Optimization",
      description: "Performance improvements to make your website load faster and rank better in search engines.",
    },
    {
      icon: <Layout size={40} />,
      title: "Landing Pages",
      description: "Custom landing pages designed to convert visitors into customers with proven design principles.",
    },
    {
      icon: <Search size={40} />,
      title: "SEO Audits",
      description: "Comprehensive SEO analysis and recommendations to improve your search engine visibility.",
    },
  ]

  return (
    <section id="services" className="services section">
      <div className="container">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>Professional web development services with guaranteed satisfaction</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
