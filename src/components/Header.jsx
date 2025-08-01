
import { useState } from "react"
import { Menu, X } from "lucide-react"
import "./Header.css"
import { Link, useNavigate } from "react-router-dom"
import { Shield } from "lucide-react"

const Header = ({isAuth = false}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
const navigate = useNavigate()
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
   <header className="landing-header">
        <div className="container">
          <div className="header-content">
            <div className="logo" onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
              <img src="/logo.svg" alt="logo" style={{
                width: "160px",
                height: "auto"
              }}/>
            </div>

            {!isAuth && <nav className="nav-menu">
              <button onClick={() => scrollToSection("how-it-works")} className="nav-link">
                How It Works
              </button>
              <button onClick={() => scrollToSection("services")} className="nav-link">
                Services
              </button>
              <button onClick={() => scrollToSection("screening")} className="nav-link">
                Our Policy
              </button>
              <button onClick={() => scrollToSection("contact")} className="nav-link">
                Contact
              </button>
            </nav>}

            <div className="header-actions">
              <Link to="/login" className="btn btn-outline">
                Client Login
              </Link>
              <Link to="/register" className="btn btn-primary">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>
  )
}

export default Header
