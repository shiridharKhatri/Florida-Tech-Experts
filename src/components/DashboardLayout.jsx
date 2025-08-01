"use client"

import { useState } from "react"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { Home, FolderOpen, CreditCard, Settings, LogOut, Menu, X, Bell, User, Shield } from "lucide-react"
import { useAuth } from "../contexts/AuthContext"
import "./DashboardLayout.css"

const DashboardLayout = ({ children }) => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleLogout = () => {
    logout()
    navigate("/")
  }

  const clientNavItems = [
    { path: "/dashboard", icon: Home, label: "Dashboard" },
    { path: "/projects", icon: FolderOpen, label: "My Projects" },
    { path: "/payments", icon: CreditCard, label: "Payments" },
    { path: "/settings", icon: Settings, label: "Settings" },
  ]

  const adminNavItems = [
    { path: "/dashboard", icon: Home, label: "Dashboard" },
    { path: "/projects", icon: FolderOpen, label: "All Projects" },
    { path: "/payments", icon: CreditCard, label: "Payment Management" },
    { path: "/settings", icon: Settings, label: "Settings" },
  ]

  const navItems = user?.role === "admin" ? adminNavItems : clientNavItems

  return (
    <div className="dashboard-layout">
      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? "sidebar-open" : ""}`}>
        <div className="sidebar-header">
          <Link to="/" className="logo">
            <Shield size={24} />
            <span>Florida Tech Experts</span>
          </Link>
          <button className="sidebar-close" onClick={() => setSidebarOpen(false)}>
            <X size={20} />
          </button>
        </div>

        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-item ${location.pathname === item.path ? "active" : ""}`}
              onClick={() => setSidebarOpen(false)}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="sidebar-footer">
          <div className="user-info">
            <div className="user-avatar">
              <User size={20} />
            </div>
            <div className="user-details">
              <div className="user-name">{user?.name}</div>
              <div className="user-role">{user?.role === "admin" ? "Administrator" : "Client"}</div>
            </div>
          </div>
          <button className="logout-btn" onClick={handleLogout}>
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="main-content">
        {/* Top Header */}
        <header className="top-header">
          <div className="header-left">
            <button className="menu-toggle" onClick={() => setSidebarOpen(true)}>
              <Menu size={24} />
            </button>
            <Link to="/" className="home-link">
              <Home size={20} />
              <span>Home</span>
            </Link>
          </div>

          <div className="header-actions">
            <button className="notification-btn">
              <Bell size={20} />
              <span className="notification-badge">3</span>
            </button>

            <div className="user-menu">
              <div className="user-avatar">
                <User size={20} />
              </div>
              <span>{user?.name}</span>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="page-content">{children}</main>
      </div>

      {/* Sidebar Overlay */}
      {sidebarOpen && <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)} />}
    </div>
  )
}

export default DashboardLayout
