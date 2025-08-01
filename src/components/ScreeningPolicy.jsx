import { AlertTriangle } from "lucide-react"
import "./ScreeningPolicy.css"

const ScreeningPolicy = () => {
  return (
    <section className="screening-policy section">
      <div className="container">
        <div className="policy-content">
          <div className="policy-icon">
            <AlertTriangle size={48} />
          </div>
          <div className="policy-text">
            <h2>Our Screening Policy</h2>
            <p>
              We maintain high standards by working only with serious clients. Any attempts at fee negotiation or
              payment dodging will result in immediate project termination. This policy ensures we can focus on
              delivering exceptional results for committed clients who value quality work and fair compensation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ScreeningPolicy
