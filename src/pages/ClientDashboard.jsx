
import { useState } from "react"
import { Link } from "react-router-dom"
import { FolderOpen, CreditCard, Clock, CheckCircle, AlertCircle, DollarSign, TrendingUp, Calendar } from "lucide-react"
import DashboardLayout from "../components/DashboardLayout"
import "./ClientDashboard.css"

const ClientDashboard = () => {
  // Mock data - in real app, this would come from API
  const [projects] = useState([
    {
      id: 1,
      title: "E-commerce Website Redesign",
      status: "completed",
      progress: 100,
      budget: 5000,
      paid: 5000,
      startDate: "2024-01-15",
      endDate: "2024-02-28",
      description: "Complete redesign of the e-commerce platform with modern UI/UX",
    },
    {
      id: 2,
      title: "Landing Page Optimization",
      status: "in-progress",
      progress: 75,
      budget: 2500,
      paid: 0,
      startDate: "2024-02-01",
      endDate: "2024-02-15",
      description: "Optimize landing page for better conversion rates",
    },
    {
      id: 3,
      title: "SEO Audit & Implementation",
      status: "pending",
      progress: 0,
      budget: 1500,
      paid: 0,
      startDate: "2024-02-10",
      endDate: "2024-02-25",
      description: "Comprehensive SEO audit and implementation of recommendations",
    },
  ])

  const stats = {
    totalProjects: projects.length,
    activeProjects: projects.filter((p) => p.status === "in-progress").length,
    completedProjects: projects.filter((p) => p.status === "completed").length,
    totalSpent: projects.reduce((sum, p) => sum + p.paid, 0),
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return <CheckCircle size={20} />
      case "in-progress":
        return <Clock size={20} />
      case "pending":
        return <AlertCircle size={20} />
      default:
        return <FolderOpen size={20} />
    }
  }

  const getStatusClass = (status) => {
    switch (status) {
      case "completed":
        return "status-completed"
      case "in-progress":
        return "status-in-progress"
      case "pending":
        return "status-pending"
      default:
        return "status-pending"
    }
  }

  return (
    <DashboardLayout>
      <div className="dashboard-content">
        <div className="dashboard-header">
          <h1>Dashboard</h1>
          <p>Welcome back! Here's an overview of your projects and activities.</p>
        </div>

        {/* Stats Cards */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">
              <FolderOpen size={24} />
            </div>
            <div className="stat-content">
              <div className="stat-number">{stats.totalProjects}</div>
              <div className="stat-label">Total Projects</div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon active">
              <Clock size={24} />
            </div>
            <div className="stat-content">
              <div className="stat-number">{stats.activeProjects}</div>
              <div className="stat-label">Active Projects</div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon completed">
              <CheckCircle size={24} />
            </div>
            <div className="stat-content">
              <div className="stat-number">{stats.completedProjects}</div>
              <div className="stat-label">Completed</div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon money">
              <DollarSign size={24} />
            </div>
            <div className="stat-content">
              <div className="stat-number">${stats.totalSpent.toLocaleString()}</div>
              <div className="stat-label">Total Spent</div>
            </div>
          </div>
        </div>

        {/* Recent Projects */}
        <div className="dashboard-section">
          <div className="section-header">
            <h2>Recent Projects</h2>
            <Link to="/projects" className="btn btn-outline">
              View All Projects
            </Link>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-header">
                  <div className="project-title">
                    <h3>{project.title}</h3>
                    <div className={`status-badge ${getStatusClass(project.status)}`}>
                      {getStatusIcon(project.status)}
                      <span>{project.status.replace("-", " ")}</span>
                    </div>
                  </div>
                </div>

                <div className="project-body">
                  <p className="project-description">{project.description}</p>

                  <div className="project-progress">
                    <div className="progress-header">
                      <span>Progress</span>
                      <span>{project.progress}%</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: `${project.progress}%` }}></div>
                    </div>
                  </div>

                  <div className="project-details">
                    <div className="detail-item">
                      <Calendar size={16} />
                      <span>Due: {new Date(project.endDate).toLocaleDateString()}</span>
                    </div>
                    <div className="detail-item">
                      <DollarSign size={16} />
                      <span>Budget: ${project.budget.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <div className="project-footer">
                  <Link to={`/project/${project.id}`} className="btn btn-primary">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="dashboard-section">
          <div className="section-header">
            <h2>Quick Actions</h2>
          </div>

          <div className="quick-actions">
            <Link to="/projects" className="action-card">
              <FolderOpen size={32} />
              <h3>View All Projects</h3>
              <p>See all your projects and their current status</p>
            </Link>

            <Link to="/payments" className="action-card">
              <CreditCard size={32} />
              <h3>Payment History</h3>
              <p>View all your payments and invoices</p>
            </Link>

            <Link to="/settings" className="action-card">
              <TrendingUp size={32} />
              <h3>Account Settings</h3>
              <p>Manage your account and preferences</p>
            </Link>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default ClientDashboard
