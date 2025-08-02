
import { useState } from "react"
import { Link } from "react-router-dom"
import { FolderOpen, Calendar, DollarSign, Clock, CheckCircle, AlertCircle, Plus, Filter, Search } from "lucide-react"
import DashboardLayout from "../components/DashboardLayout"
import { useAuth } from "../contexts/AuthContext"
import "./AllProjects.css"

const AllProjects = () => {
  const { user } = useAuth()

  // Mock projects data - in real app, this would come from API
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
      client: user?.role === "admin" ? "John Smith" : null,
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
      client: user?.role === "admin" ? "John Smith" : null,
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
      client: user?.role === "admin" ? "Sarah Wilson" : null,
    },
    {
      id: 4,
      title: "Mobile App Development",
      status: "completed",
      progress: 100,
      budget: 8000,
      paid: 8000,
      startDate: "2023-12-01",
      endDate: "2024-01-30",
      description: "Native mobile app for iOS and Android platforms",
      client: user?.role === "admin" ? "Mike Johnson" : null,
    },
    {
      id: 5,
      title: "Website Bug Fixes",
      status: "in-progress",
      progress: 40,
      budget: 800,
      paid: 0,
      startDate: "2024-02-05",
      endDate: "2024-02-12",
      description: "Fix critical bugs and improve website performance",
      client: user?.role === "admin" ? "Lisa Chen" : null,
    },
  ])

  const [filter, setFilter] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredProjects = projects.filter((project) => {
    const matchesFilter = filter === "all" || project.status === filter
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesFilter && matchesSearch
  })

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

  const stats = {
    total: projects.length,
    completed: projects.filter((p) => p.status === "completed").length,
    inProgress: projects.filter((p) => p.status === "in-progress").length,
    pending: projects.filter((p) => p.status === "pending").length,
  }

  return (
    <DashboardLayout>
      <div className="all-projects">
        <div className="page-header">
          <div className="header-content">
            <div>
              <h1>{user?.role === "admin" ? "All Projects" : "My Projects"}</h1>
              <p>Manage and track all your projects in one place</p>
            </div>
            {user?.role === "admin" && (
              <button className="btn btn-primary">
                <Plus size={20} />
                New Project
              </button>
            )}
          </div>
        </div>

        {/* Project Stats */}
        <div className="project-stats">
          <div className="stat-card">
            <div className="stat-icon total">
              <FolderOpen size={24} />
            </div>
            <div className="stat-content">
              <div className="stat-number">{stats.total}</div>
              <div className="stat-label">Total Projects</div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon completed">
              <CheckCircle size={24} />
            </div>
            <div className="stat-content">
              <div className="stat-number">{stats.completed}</div>
              <div className="stat-label">Completed</div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon in-progress">
              <Clock size={24} />
            </div>
            <div className="stat-content">
              <div className="stat-number">{stats.inProgress}</div>
              <div className="stat-label">In Progress</div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon pending">
              <AlertCircle size={24} />
            </div>
            <div className="stat-content">
              <div className="stat-number">{stats.pending}</div>
              <div className="stat-label">Pending</div>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="project-filters">
          <div className="filter-section">
            <div className="search-box">
              <Search size={20} />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="filter-buttons">
              <button className={`filter-btn ${filter === "all" ? "active" : ""}`} onClick={() => setFilter("all")}>
                All Projects
              </button>
              <button
                className={`filter-btn ${filter === "in-progress" ? "active" : ""}`}
                onClick={() => setFilter("in-progress")}
              >
                In Progress
              </button>
              <button
                className={`filter-btn ${filter === "completed" ? "active" : ""}`}
                onClick={() => setFilter("completed")}
              >
                Completed
              </button>
              <button
                className={`filter-btn ${filter === "pending" ? "active" : ""}`}
                onClick={() => setFilter("pending")}
              >
                Pending
              </button>
            </div>
          </div>

         
        </div>

        {/* Projects Grid */}
        <div className="projects-container">
          {filteredProjects.length > 0 ? (
            <div className="projects-grid">
              {filteredProjects.map((project) => (
                <div key={project.id} className="project-card">
                  <div className="project-header">
                    <div className="project-title">
                      <h3>{project.title}</h3>
                      <div className={`status-badge ${getStatusClass(project.status)}`}>
                        {getStatusIcon(project.status)}
                        <span>{project.status.replace("-", " ")}</span>
                      </div>
                    </div>
                    {user?.role === "admin" && project.client && (
                      <div className="project-client">Client: {project.client}</div>
                    )}
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
          ) : (
            <div className="empty-state">
              <FolderOpen size={48} />
              <h3>No projects found</h3>
              <p>No projects match your current search and filter criteria.</p>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  )
}

export default AllProjects
