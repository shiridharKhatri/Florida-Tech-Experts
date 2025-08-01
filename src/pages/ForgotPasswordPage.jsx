
import { useState } from "react"
import { Link } from "react-router-dom"
import { Shield, Mail, ArrowLeft, CheckCircle } from "lucide-react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import "./AuthPages.css"

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      // Mock password reset - in real app, this would call an API
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSuccess(true)
    } catch (err) {
      setError("An error occurred. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-page">
      <Header isAuth={true} />

      <div className="auth-content">
        <div className="auth-container">
          {!success ? (
            <>
              <div className="auth-header">
                <div className="logo">
                  <Shield size={24} />
                  <span>Reset Password</span>
                </div>
                {/* <h1>Forgot Password?</h1> */}
                <p>Enter your email to receive a reset link</p>
              </div>

              <form className="auth-form" onSubmit={handleSubmit}>
                {error && <div className="error-message">{error}</div>}

                <div className="form-group">
                  <label htmlFor="email">
                    <Mail size={14} />
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="your@email.com"
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-full" disabled={loading || !email}>
                  {loading ? (
                    <>
                      <span className="loading-spinner"></span>
                      Sending...
                    </>
                  ) : (
                    "Send Reset Link"
                  )}
                </button>
              </form>

              <div className="auth-footer">
                <Link to="/login" className="auth-link">
                  <ArrowLeft size={14} />
                  Back to Sign In
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className="auth-header">
                <div className="logo">
                  <CheckCircle size={24} style={{ color: "#16a34a" }} />
                  <span style={{ color: "#16a34a" }}>Email Sent!</span>
                </div>
                <h1>Check Your Email</h1>
                <p>
                  We sent a reset link to <strong>{email}</strong>
                </p>
              </div>

              <div className="success-message">
                <p>
                  <strong>Next steps:</strong>
                  <br />
                  1. Check your email inbox
                  <br />
                  2. Click the reset link
                  <br />
                  3. Create a new password
                </p>
              </div>

              <div className="auth-footer">
                <p>
                  Didn't receive it?{" "}
                  <button
                    onClick={() => setSuccess(false)}
                    className="auth-link"
                    style={{ background: "none", border: "none", cursor: "pointer" }}
                  >
                    Try again
                  </button>
                </p>
                <Link to="/login" className="auth-link">
                  <ArrowLeft size={14} />
                  Back to Sign In
                </Link>
              </div>
            </>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default ForgotPasswordPage
