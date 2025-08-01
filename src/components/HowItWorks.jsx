import { Hammer, Handshake, BadgeCheck, DollarSign } from "lucide-react"
import "./HowItWorks.css"

const HowItWorks = () => {
  const steps = [
    {
      icon: <Hammer size={40} />,
      title: "Small Fix",
      description: "We start with a small, low-risk task to demonstrate our capabilities and build trust.",
    },
    {
      icon: <Handshake size={40} />,
      title: "Evaluate Client",
      description: "We assess the project scope and ensure we're the right fit for your specific needs.",
    },
    {
      icon: <BadgeCheck size={40} />,
      title: "Start Work",
      description: "Once approved, we begin the full project with regular updates and transparent communication.",
    },
    {
      icon: <DollarSign size={40} />,
      title: "Final Payment",
      description: "You only pay when you're completely satisfied with the delivered results.",
    },
  ]

  return (
    <section id="how-it-works" className="how-it-works section">
      <div className="container">
        <div className="section-header">
          <h2>How It Works</h2>
          <p>Our proven 4-step process ensures quality and builds trust</p>
        </div>

        <div className="steps-grid">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-number">{index + 1}</div>
              <div className="step-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
