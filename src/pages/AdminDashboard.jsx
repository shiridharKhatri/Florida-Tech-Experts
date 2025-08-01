
import { useState } from "react"
import { Link } from "react-router-dom"
import { Users, FolderOpen, CreditCard, TrendingUp, AlertCircle, CheckCircle, Clock, Eye } from "lucide-react"
import DashboardLayout from "../components/DashboardLayout"
import "./AdminDashboard.css"

const AdminDashboard = () => {
  // Mock data - in real app, this would come from API
  const [clients] = useState([
    {
      id: 1,
      name: "John Smith",
      email: "client@example.com",
      company: "Tech Startup Inc",
      projects: 3,
      totalSpent: 8500,
      status: "active",
      joinDate: "2024-01-15",
    },
    {
      id: 2,
      name: "Sarah Wilson",
      email: "sarah@company.com",
      company: "Wilson Corp",
      projects: 1,
      totalSpent: 2500,
      status: "active",
      joinDate: "2024-02-01",
    },
  ])

  const [projects] = useState([
    {
      id: 1,
      title: "E-commerce Website Redesign",
      client: "John Smith",
      status: "completed",
      budget: 5000,
      escrowAmount: 0,
      startDate: "2024-01-15",
      endDate: "2024-02-28",
    },
    {
      id: 2,
      title: "Landing Page Optimization",
      client: "John Smith",
      status: "in-progress",
      budget: 2500,
      escrowAmount: 2500,
      startDate: "2024-02-01",
      endDate: "2024-02-15",
    },
    {
      id: 3,
      title: "Corporate Website",
      client: "Sarah Wilson",
      status: "pending",
      budget: 3500,
      escrowAmount: 3500,
      startDate: "2024-02-10",
      endDate: "2024-03-15",
    },
  ])

  const stats = {
    totalClients: clients.length,
    activeProjects: projects.filter((p) => p.status === "in-progress").length,
    completedProjects: projects.filter((p) => p.status === "completed").length,
    totalEscrow: projects.reduce((sum, p) => sum + p.escrowAmount, 0),
    monthlyRevenue: 12500,
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return <CheckCircle size={16} />
      case "in-progress":
        return <Clock size={16} />
      case "pending":
        return <AlertCircle size={16} />
      default:
        return <FolderOpen size={16} />
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
      <div className="admin-dashboard">
        <div className="dashboard-header">
          <h1>Admin Dashboard</h1>
          <p>Manage clients, projects, and payments from your central hub.</p>
        </div>

        {/* Admin Stats */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon clients">
              <Users size={24} />
            </div>
            <div className="stat-content">
              <div className="stat-number">{stats.totalClients}</div>
              <div className="stat-label">Total Clients</div>
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
            <div className="stat-icon escrow">
              <CreditCard size={24} />
            </div>
            <div className="stat-content">
              <div className="stat-number">${stats.totalEscrow.toLocaleString()}</div>
              <div className="stat-label">Funds in Escrow</div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon revenue">
              <TrendingUp size={24} />
            </div>
            <div className="stat-content">
              <div className="stat-number">${stats.monthlyRevenue.toLocaleString()}</div>
              <div className="stat-label">Monthly Revenue</div>
            </div>
          </div>
        </div>

        {/* Recent Clients */}
        <div className="dashboard-section">
          <div className="section-header">
            <h2>Recent Clients</h2>
            <Link to="/clients" className="btn btn-outline">
              View All Clients
            </Link>
          </div>

          <div className="clients-table">
            <div className="table-header">
              <div>Client</div>
              <div>Company</div>
              <div>Projects</div>
              <div>Total Spent</div>
              <div>Status</div>
              <div>Actions</div>
            </div>

            {clients.map((client) => (
              <div key={client.id} className="table-row">
                <div className="client-info">
                  <div className="client-avatar">
                    <Users size={16} />
                  </div>
                  <div>
                    <div className="client-name">{client.name}</div>
                    <div className="client-email">{client.email}</div>
                  </div>
                </div>
                <div>{client.company}</div>
                <div>{client.projects}</div>
                <div>${client.totalSpent.toLocaleString()}</div>
                <div>
                  <span
                    className={`status-badge ${client.status === "active" ? "status-completed" : "status-pending"}`}
                  >
                    {client.status}
                  </span>
                </div>
                <div>
                  <button className="btn-icon">
                    <Eye size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Active Projects */}
        <div className="dashboard-section">
          <div className="section-header">
            <h2>Active Projects</h2>
            <Link to="/projects" className="btn btn-outline">
              View All Projects
            </Link>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="admin-project-card">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <div className={`status-badge ${getStatusClass(project.status)}`}>
                    {getStatusIcon(project.status)}
                    <span>{project.status.replace("-", " ")}</span>
                  </div>
                </div>

                <div className="project-details">
                  <div className="detail-row">
                    <span>Client:</span>
                    <span>{project.client}</span>
                  </div>
                  <div className="detail-row">
                    <span>Budget:</span>
                    <span>${project.budget.toLocaleString()}</span>
                  </div>
                  <div className="detail-row">
                    <span>Escrow:</span>
                    <span>${project.escrowAmount.toLocaleString()}</span>
                  </div>
                  <div className="detail-row">
                    <span>Due Date:</span>
                    <span>{new Date(project.endDate).toLocaleDateString()}</span>
                  </div>
                </div>

                <div className="project-actions">
                  <Link to={`/project/${project.id}`} className="btn btn-primary btn-sm">
                    Manage Project
                  </Link>
                  {project.escrowAmount > 0 && <button className="btn btn-success btn-sm">Release Payment</button>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Management */}
        <div className="dashboard-section">
          <div className="section-header">
            <h2>Payment Management</h2>
            <Link to="/payments" className="btn btn-outline">
              View All Payments
            </Link>
          </div>

          <div className="payment-summary">
            <div className="payment-card">
              <div className="payment-icon pending">
                <Clock size={24} />
              </div>
              <div className="payment-content">
                <div className="payment-amount">${stats.totalEscrow.toLocaleString()}</div>
                <div className="payment-label">Pending Release</div>
                <div className="payment-count">3 payments awaiting approval</div>
              </div>
              <button className="btn btn-primary">Review Payments</button>
            </div>

            <div className="payment-card">
              <div className="payment-icon completed">
                <CheckCircle size={24} />
              </div>
              <div className="payment-content">
                <div className="payment-amount">$5,000</div>
                <div className="payment-label">Released This Month</div>
                <div className="payment-count">2 successful payments</div>
              </div>
              <button className="btn btn-outline">View History</button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default AdminDashboard
