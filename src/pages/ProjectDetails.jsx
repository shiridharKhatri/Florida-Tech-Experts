
import { useState } from "react"
import { useParams, Link } from "react-router-dom"
import {
  ArrowLeft,
  Calendar,
  DollarSign,
  User,
  Clock,
  CheckCircle,
  MessageSquare,
  Upload,
  Download,
} from "lucide-react"
import DashboardLayout from "../components/DashboardLayout"
import "./ProjectDetails.css"

const ProjectDetails = () => {
  const { id } = useParams()

  // Mock project data - in real app, this would come from API
  const [project] = useState({
    id: Number.parseInt(id),
    title: "E-commerce Website Redesign",
    description:
      "Complete redesign of the e-commerce platform with modern UI/UX, improved performance, and mobile responsiveness.",
    status: "in-progress",
    progress: 75,
    budget: 5000,
    paid: 0,
    escrowAmount: 5000,
    startDate: "2024-01-15",
    endDate: "2024-02-28",
    client: {
      name: "John Smith",
      email: "client@example.com",
      company: "Tech Startup Inc",
    },
    milestones: [
      {
        id: 1,
        title: "Project Planning & Wireframes",
        description: "Initial planning, wireframes, and project scope definition",
        status: "completed",
        dueDate: "2024-01-20",
        completedDate: "2024-01-18",
      },
      {
        id: 2,
        title: "UI/UX Design",
        description: "Complete visual design and user experience optimization",
        status: "completed",
        dueDate: "2024-02-05",
        completedDate: "2024-02-03",
      },
      {
        id: 3,
        title: "Frontend Development",
        description: "Implementation of the new design with responsive layout",
        status: "in-progress",
        dueDate: "2024-02-20",
        completedDate: null,
      },
      {
        id: 4,
        title: "Backend Integration",
        description: "API integration and database optimization",
        status: "pending",
        dueDate: "2024-02-25",
        completedDate: null,
      },
      {
        id: 5,
        title: "Testing & Launch",
        description: "Quality assurance testing and production deployment",
        status: "pending",
        dueDate: "2024-02-28",
        completedDate: null,
      },
    ],
    files: [
      {
        id: 1,
        name: "Project Requirements.pdf",
        size: "2.4 MB",
        uploadDate: "2024-01-15",
        type: "document",
      },
      {
        id: 2,
        name: "Design Mockups.zip",
        size: "15.8 MB",
        uploadDate: "2024-02-03",
        type: "design",
      },
      {
        id: 3,
        name: "Current Website Screenshots.zip",
        size: "8.2 MB",
        uploadDate: "2024-01-16",
        type: "reference",
      },
    ],
    messages: [
      {
        id: 1,
        sender: "John Smith",
        message: "Looking forward to seeing the initial wireframes!",
        timestamp: "2024-01-16 10:30 AM",
        type: "client",
      },
      {
        id: 2,
        sender: "Florida Tech Experts",
        message: "Wireframes are ready for review. Please check the files section.",
        timestamp: "2024-01-18 2:15 PM",
        type: "admin",
      },
      {
        id: 3,
        sender: "John Smith",
        message: "The designs look amazing! Approved to proceed with development.",
        timestamp: "2024-02-04 9:45 AM",
        type: "client",
      },
    ],
  })

  const [newMessage, setNewMessage] = useState("")

  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return <CheckCircle size={20} className="text-green-600" />
      case "in-progress":
        return <Clock size={20} className="text-blue-600" />
      case "pending":
        return <Clock size={20} className="text-gray-400" />
      default:
        return <Clock size={20} className="text-gray-400" />
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

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (newMessage.trim()) {
      // In real app, this would send message to API
      console.log("Sending message:", newMessage)
      setNewMessage("")
    }
  }

  return (
    <DashboardLayout>
      <div className="project-details">
        <div className="project-header">
          <Link to="/dashboard" className="back-button">
            <ArrowLeft size={20} />
            Back to Dashboard
          </Link>

          <div className="project-title-section">
            <h1>{project.title}</h1>
            <div className={`status-badge ${getStatusClass(project.status)}`}>
              {getStatusIcon(project.status)}
              <span>{project.status.replace("-", " ")}</span>
            </div>
          </div>
        </div>

        <div className="project-content">
          {/* Project Overview */}
          <div className="project-overview">
            <div className="overview-card">
              <h2>Project Overview</h2>
              <p className="project-description">{project.description}</p>

              <div className="project-meta">
                <div className="meta-item">
                  <Calendar size={16} />
                  <span>Start Date: {new Date(project.startDate).toLocaleDateString()}</span>
                </div>
                <div className="meta-item">
                  <Calendar size={16} />
                  <span>Due Date: {new Date(project.endDate).toLocaleDateString()}</span>
                </div>
                <div className="meta-item">
                  <DollarSign size={16} />
                  <span>Budget: ${project.budget.toLocaleString()}</span>
                </div>
                <div className="meta-item">
                  <User size={16} />
                  <span>Client: {project.client.name}</span>
                </div>
              </div>

              <div className="progress-section">
                <div className="progress-header">
                  <span>Overall Progress</span>
                  <span>{project.progress}%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${project.progress}%` }}></div>
                </div>
              </div>
            </div>

            {/* Payment Status */}
            <div className="payment-card">
              <h3>Payment Status</h3>
              <div className="payment-details">
                <div className="payment-row">
                  <span>Project Budget:</span>
                  <span>${project.budget.toLocaleString()}</span>
                </div>
                <div className="payment-row">
                  <span>Amount in Escrow:</span>
                  <span className="escrow-amount">${project.escrowAmount.toLocaleString()}</span>
                </div>
                <div className="payment-row">
                  <span>Amount Paid:</span>
                  <span>${project.paid.toLocaleString()}</span>
                </div>
              </div>
              <div className="payment-status">
                <div className="status-indicator escrow"></div>
                <span>Funds secured in escrow</span>
              </div>
            </div>
          </div>

          {/* Milestones */}
          <div className="milestones-section">
            <h2>Project Milestones</h2>
            <div className="milestones-list">
              {project.milestones.map((milestone, index) => (
                <div key={milestone.id} className={`milestone-item ${milestone.status}`}>
                  <div className="milestone-indicator">
                    <div className="milestone-number">{index + 1}</div>
                    <div className="milestone-line"></div>
                  </div>
                  <div className="milestone-content">
                    <div className="milestone-header">
                      <h3>{milestone.title}</h3>
                      <div className={`status-badge ${getStatusClass(milestone.status)}`}>
                        {getStatusIcon(milestone.status)}
                        <span>{milestone.status.replace("-", " ")}</span>
                      </div>
                    </div>
                    <p>{milestone.description}</p>
                    <div className="milestone-dates">
                      <span>Due: {new Date(milestone.dueDate).toLocaleDateString()}</span>
                      {milestone.completedDate && (
                        <span>Completed: {new Date(milestone.completedDate).toLocaleDateString()}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Files Section */}
          <div className="files-section">
            <div className="section-header">
              <h2>Project Files</h2>
              <button className="btn btn-primary">
                <Upload size={16} />
                Upload File
              </button>
            </div>

            <div className="files-list">
              {project.files.map((file) => (
                <div key={file.id} className="file-item">
                  <div className="file-info">
                    <div className="file-icon">
                      <Upload size={20} />
                    </div>
                    <div className="file-details">
                      <div className="file-name">{file.name}</div>
                      <div className="file-meta">
                        {file.size} • Uploaded {new Date(file.uploadDate).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                  <button className="btn btn-outline btn-sm">
                    <Download size={16} />
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Messages Section */}
          <div className="messages-section">
            <h2>Project Communication</h2>

            <div className="messages-list">
              {project.messages.map((message) => (
                <div key={message.id} className={`message-item ${message.type}`}>
                  <div className="message-avatar">
                    <User size={16} />
                  </div>
                  <div className="message-content">
                    <div className="message-header">
                      <span className="message-sender">{message.sender}</span>
                      <span className="message-time">{message.timestamp}</span>
                    </div>
                    <div className="message-text">{message.message}</div>
                  </div>
                </div>
              ))}
            </div>

            <form className="message-form" onSubmit={handleSendMessage}>
              <div className="message-input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type your message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                />
                <button type="submit" className="btn btn-primary">
                  <MessageSquare size={16} />
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default ProjectDetails
